import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from '../../utils/request';
import { FilterGender, SalesSummary } from '../../types';

type Props = {
  filterGender?: FilterGender;
  value?: number | string;
};

const initialSummary = {
  avg: 0,
  count: 0,
  max: 0,
  min: 0
};

function SalesSummary({ filterGender }: Props) {
  const [summary, setSummary] = useState<SalesSummary>(initialSummary);

  const params = useMemo(() => buildFilterParams(filterGender), [filterGender]);

  useEffect(() => {
    makeRequest.get<SalesSummary>('/sales/summary', { params }).then((response) => {
      setSummary(response.data);
    });
  }, [params]);

  return (
    <div>
      <SalesSummary value={summary?.avg.toFixed(2)} />
      <SalesSummary value={summary?.count} />
      <SalesSummary value={summary?.min} />
      <SalesSummary value={summary?.max} />
    </div>
  );
}

export default SalesSummary;

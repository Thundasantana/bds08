import './App.css';
import Header from './components/header';
import Filter from './components/filter';
import SalesByGender from './components/sales-by-gender';
import { AllStore, FilterGender, PieChartConfig } from './types';
import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from './utils/request';
import { buildAllStoreChart } from './helpers';

function App() {
  const [filterGender, setFilterGender] = useState<FilterGender>();
  const [allStore, setAllStore] = useState<PieChartConfig>();

  const params = useMemo(() => buildFilterParams(filterGender), [filterGender]);

  useEffect(() => {
    makeRequest.get<AllStore[]>('/sales/by-stores', { params }).then((response) => {
      const newAllStore = buildAllStoreChart(response.data);
      setAllStore(newAllStore);
    });
  }, [params]);

  const onFilterChange = (filter: FilterGender) => {
    setFilterGender(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <div className="sales-overview-container">
          <SalesByGender name="genero" labels={allStore?.labels} series={allStore?.series} />
        </div>
      </div>
    </>
  );
}

export default App;

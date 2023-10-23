import './styles.css';
import { useEffect, useState } from 'react';
import { AllStore } from '../../types';
import { makeRequest } from '../../utils/request';

export type FilterData = {
  story: AllStore | null;
};

type Props = {
  onFilterChange: (data: number) => void;
};

function Filter({ onFilterChange }: Props) {
  const [store, setStore] = useState<AllStore>();
  const [storeList, setStoreList] = useState<AllStore[]>();

  const onChangeStore = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStore = event.target.value;

    onFilterChange(selectedStore as unknown as number);
    console.log(selectedStore);
  };

  useEffect(() => {
    makeRequest.get<AllStore[]>('/stores').then((response) => {
      setStoreList(response.data);
    });
  }, []);

  return (
    <div className="filter-container base-card">
      <select className="filter-input" value={store?.id} onChange={onChangeStore}>
        <option value="0">Selecione uma cidade</option>
        {storeList?.map((store) => {
          return (
            <option key={store.id} value={store.id}>
              {store.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Filter;

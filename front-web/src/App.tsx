import './App.css';
import Header from './components/header';
import Filter from './components/filter';
import SalesByAllStore from './components/sales-by-store';
import { useState } from 'react';

function App() {
  const [filterAllStore, setFilterAllStore] = useState<number>(0);

  const onFilterChange = (data: number) => {
    setFilterAllStore(data);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <SalesByAllStore filterAllStore={filterAllStore} />
      </div>
    </>
  );
}

export default App;

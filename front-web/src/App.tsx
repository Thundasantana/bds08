import './App.css';
import Header from './components/header';
import Filter from './components/filter';
import SalesByGenre from './components/sales-by-genre';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <div className="sales-overview-container">
          <SalesByGenre
            name="Genero"
            labels={['Feminino', 'Masculino', 'Outro']}
            series={[30, 40, 30]}
          />
        </div>
      </div>
    </>
  );
}

export default App;

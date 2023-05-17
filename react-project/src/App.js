import './App.css';
import Header from './Components/Header';
import Plans from './Components/Plans';

function App() {
  return (
    <div className="App">
      <Header/>
      <Plans plan1 ="Free" plan2="Básico" plan3="Profissional" price1="" price2="29,00"/>
      
      

      
    </div>
  );
}

export default App;

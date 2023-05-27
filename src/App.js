
import Header from './components/Header';
import './App.css';
import Menu from './components/Menu';
import Form from './components/Form';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div className='cajaheader'>
        <h1>Restaurant</h1>
        <Header Titulo="Restaurante La Chikita" />
      </div>
      <Form />
      <Menu />
      <Footer/>
      
      
    </>


  );
}

export default App;

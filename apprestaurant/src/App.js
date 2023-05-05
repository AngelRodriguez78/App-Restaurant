import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import Menu from './components/Menu';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <h1>Restaurant</h1>
    <Header Titulo= "Restaurante La Chikita"/>
    <Form/>
    <Menu/>
    <Footer/>
    </>


  );
}

export default App;

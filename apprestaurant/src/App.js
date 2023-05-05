import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import Menu from './components/Menu';
import Form from './components/Form';

function App() {
  return (
    <>
    <h1>Restaurant</h1>
    <Header Titulo= "Restaurante La Chikita"/>
    <Menu/>
    <Form/>
    </>


  );
}

export default App;

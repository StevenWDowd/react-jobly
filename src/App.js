import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Nav from './Nav';
import RoutesList from './RoutesList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter>
    </>
  );
}

export default App;

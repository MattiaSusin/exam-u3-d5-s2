import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import Menu from './components/Menu';

function App() {
   return (
    <BrowserRouter>
      <Container>
        <TopBar/>
        <div className='Contenitore'>
          <Routes>
            <Route path="/" element={<Menu/>}/>
          </Routes>
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;

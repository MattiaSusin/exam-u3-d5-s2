import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import Menu from './components/Menu';
import Results from './components/Results';

function App() {
   return (
    <BrowserRouter>
      <Container>
        <TopBar/>
        <div className='Contenitore'>
          <Routes>
            <Route path="/" element={<Menu/>}/>
            <Route path='/dettailsSearch' element={<Results/>}/>
          </Routes>
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;

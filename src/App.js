import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import POCForm from './Components/POCForm/POCForm';

function App() {
  return (
    <div className="App">
      <>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<POCForm/>}/>
        <Route exact path='/form' element={<POCForm/>}/>
      </Routes>
      </BrowserRouter>
      </>
    </div>
  );
}

export default App;

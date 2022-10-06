import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component imported
import Create from './component/Create';
import Read from './component/Read';
import Update from './component/Update';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Create/>}/>
        <Route exact path="/read" element={<Read/>}/>
        <Route exact path="/update" element={<Update/>}/>
  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

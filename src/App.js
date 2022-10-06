import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component imported
import Create from './component/Create';
import Read from './component/Read';
import Update from './component/Update';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/react-crud'>
        <Routes>
        <Route exact path="/react-crud" element={<Create/>}/>
        <Route exact path="/read" element={<Read/>}/>
        <Route exact path="/update" element={<Update/>}/>
  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

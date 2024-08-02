import Fallback from './components/Fallback';
import Login from './pages/Login';
import {BrowserRouter, Route, Routes} from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
          <Route path='*' element={<Fallback/>} />
      </Routes>
    </BrowserRouter>
  );  
}

export default App
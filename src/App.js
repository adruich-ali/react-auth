
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Post from './pages/Post';
import Login from './pages/Login';
import { BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'


function App() {
  const user = false;
  return (

    <BrowserRouter>
    <div>
        <Navbar use={user}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={user ? <Navigate to="/"/> :<Login /> }
          />
          <Route path="/post/:id"  element={user ? <Navigate to="/"/> :<Post /> } />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

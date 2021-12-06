import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/webpages/HomePage';
import MyToDoList from './components/webpages/MyToDoList';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/mytodolist' element={<MyToDoList />} />
      </Routes>
    </Router>
  );
}

export default App;

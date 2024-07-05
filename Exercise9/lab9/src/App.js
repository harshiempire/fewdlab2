import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer'
import About from './Components/About';
import Contact from './Components/Contact'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
          <Navbar />
          {/* <Home /> */}
          {/* This above line is exp9 */}
          {/* The below lines are exp10 */}
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>

          <Footer />
          
      </header>
    </div>
    </Router>
    
  );
}

export default App;

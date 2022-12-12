import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './components/Home/Home';
import Crews from './components/Crerws/Crews';

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          {/* <Route path="destination" element={<Destination />} /> */}
          <Route path="crews" element={<Crews />} />
          {/* <Route path="technology" element={<Technology />} /> */}
        </Routes>
      </Router>

    </>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import Books from './components/pages/Books';
import Categories from './components/pages/Categories';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Navigation />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/books" element={<Books />} />
          <Route exact path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;

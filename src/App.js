import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HomePage from './components/HomePage';
import { getCoins } from './redux/HomePage/HomePageSlice';
import DetailsPage from './components/DetailsPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:coinId" element={<DetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HomePage from './components/HomePage';
import { getCoins } from './redux/HomePage/HomePageSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;

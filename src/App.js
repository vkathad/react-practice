import logo from './logo.svg';
import './App.css';
import { addToCart } from './redux/action';
import { useDispatch } from 'react-redux'
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const dispatch = useDispatch();
  const product = {
    name: 'i Phone',
    category: 'mobile',
    price: 10000,
    color: 'red'
  }
  return (
    <div className="App">
         <Header />
         <Main />
    </div>
  );
}

export default App;

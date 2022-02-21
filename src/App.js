import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <div className="App">
      <Nav />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;

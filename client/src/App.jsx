import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';
import Footer from './Components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <div className='App-wrapper'>
        <Header />
        <Homepage />
      </div>
      <Footer />
    </>
  );
}

export default App;

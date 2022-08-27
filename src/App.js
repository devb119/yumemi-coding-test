import './App.css';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Chart from './components/Chart';

const App = () => (
  <div className="wrapper">
    <Header />
    <div className="container">
      <Chart />
    </div>
    <Footer />
  </div>
);

export default App;

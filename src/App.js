import './App.css';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Chart from './components/Chart';

const App = () => (
  <>
    <Header />
    <div className="container">
      <Chart />
    </div>
    <Footer />
  </>
);

export default App;

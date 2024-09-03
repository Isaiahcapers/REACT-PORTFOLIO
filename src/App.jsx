import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

function App() {
  console.log("app component rendered");
  return (
    <div className="app-grid">
      <div className="app-nav">
        <Nav />
      </div>
      <div className="app-content">
        <Outlet />
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;

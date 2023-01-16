import './App.css';
import AsideLeft from './Components/Aside-Left';
import Index from './Components/Index';
import './Styles/Components/app.sass';

function App() {
  return (
    <div className="container-fluid App" id='portfolio'>
      <div className="asideLeft">
        <AsideLeft />
      </div>
      <div className="indexApp container">
        <Index />
      </div>
    </div>
  );
}

export default App;

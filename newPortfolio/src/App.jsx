// import AsideLeft from './Components/Aside-Left';
// import Index from './Components/Index';
import './App.css';
import RoutersApp from './routers';
import './Styles/Components/app.sass';

function App() {
  return (
    <div className="wrapper" id='portfolio'>
      {/* <div className="asideLeft">
        <AsideLeft />
      </div>
      <div className="indexApp container">
        <Index />
      </div> */}
      <RoutersApp/>
    </div>
  );
}

export default App;

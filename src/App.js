import './App.css';
import Task from './Components/Task';

function App() {
  return (
    <div className="App" style={{maxHeight:'100vh',background:'black',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:'30px'}}>
      <div>
        <h1 style={{color:'peachpuff',fontSize:'4rem'}}>Todo APP</h1>
        
      </div>
      <Task/>
    </div>
  );
}

export default App;

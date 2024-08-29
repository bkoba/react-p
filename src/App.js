
import './App.css';
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import TextControlsExample from './components/create';

function App() {
  return (
    <div className="App">
    <Navbar/>

    <div class="content">
     <TextControlsExample/>
    </div>
    </div>
  );
}

export default App;

import './App.css';
import Roots from './routes/Roots'
import "@fontsource/roboto"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App body">
      <Roots/>
      <ToastContainer />
    </div>
  );
}

export default App;

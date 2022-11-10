import './App.css';
import Roots from './routes/Roots'
import "@fontsource/roboto"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

function App() {
  return (
    <div className="App body">
      <Roots/>
      <ToastContainer />
    </div>
  );
}

export default App;

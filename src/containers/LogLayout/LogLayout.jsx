import './LogLayout.modules.css';
import {useLocation, Outlet} from "react-router-dom";

function LogLayout() {

  const location = useLocation();

  const correctImage = () =>{
    if(location.pathname.includes('signup')){
      return "https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&w=600";
    }

    if(location.pathname.includes('forgot-password')){
      return "https://images.pexels.com/photos/7475711/pexels-photo-7475711.jpeg?auto=compress&cs=tinysrgb&w=600";
    }

    return "https://images.pexels.com/photos/7474346/pexels-photo-7474346.jpeg?auto=compress&cs=tinysrgb&w=600";
  }

  return (
    <div className="Loglayout-title">

      <div className="LogLayout-baseModalLogin">
        <div className="LogLayout-globes"> Aqui los globitos</div>
        <div className="LogLayout-content">
          <Outlet />
        </div>
        <div className="LogLayout-globes"> Aqui los globitos</div>
      </div>

      <img src={correctImage()} />
      
    </div>
  );
}

export default LogLayout;

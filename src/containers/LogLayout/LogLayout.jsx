import './LogLayout.modules.css';
import {useLocation, Outlet} from "react-router-dom";
import {FaHandshake} from "react-icons/fa"

function LogLayout() {

  const location = useLocation();

  const correctImage = () =>{
    if(location.pathname.includes('signup')){
      return "https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&w=600"
    }

    if(location.pathname.includes('forgot-password')){
      return "https://images.pexels.com/photos/7475711/pexels-photo-7475711.jpeg?auto=compress&cs=tinysrgb&w=600"
    }

    return "https://images.pexels.com/photos/7474346/pexels-photo-7474346.jpeg?auto=compress&cs=tinysrgb&w=600"

  }

  const globitos = () => (
    <>
      <div className="globo-1"/>
      <div className="globo-2"/>
    </>
  )

  return (
    <div className="Loglayout">

      <img src={correctImage()} className="login-image"/>

      <div className="LogLayout-baseModalLogin">

        <div className="LogLayout-globes-up">
          {globitos()}
        </div>

        <div className="LogLayout-AppName">
          <span>VolUN</span>
          <FaHandshake className="LogLayout-AppName-icon"/>
        </div>

        <div className="LogLayout-content">
          <Outlet />
        </div>

        <div className="LogLayout-globes-down">
          {globitos()}
        </div>
      </div>

    </div>
  );
}

export default LogLayout;

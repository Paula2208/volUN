import './FeedLayout.modules.css';
import { Outlet } from "react-router-dom";
import { FaHandshake } from "react-icons/fa"
import { FiLogOut } from "react-icons/fi"

function FeedLayout(props) {

    const {userType, setUserType, setIsLogged} = props;

    const logout = () => {
        setUserType('VOLUNTEER');
        setIsLogged(false);
    }

    return (
        <div className="FeedLayout">

            <div className="FeedLayout-leftPanel-container">
                <div className="FeedLayout-AppName">
                    <span>VolUN</span>
                    <FaHandshake className="FeedLayout-AppName-icon" />
                </div>

                <div className="FeedLayout-ModalFilters">

                </div>

                <div 
                    className="FeedLayout-Logout pointer"
                    onClick={logout}
                >
                    <FiLogOut className="FeedLayout-Logout-icon"/>
                    <span>Logout</span>
                </div>
            </div>
            
            <div className="FeedLayout-content">
                <Outlet />
            </div>

        </div>
    );
}

export default FeedLayout;

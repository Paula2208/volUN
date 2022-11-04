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

                    <div>
                        <span>Categories</span>

                        <div>
                            <div className="FeedLayout-Category-Container">
                                <span>Teaching & Learning</span>
                            </div>

                            <div className="FeedLayout-Category-Container">
                                <span>Health & Wellness</span>
                            </div>

                            <div className="FeedLayout-Category-Container">
                                <span>Social Assistance</span>
                            </div>

                            <div className="FeedLayout-Category-Container">
                                <span>Humanitarian Aid</span>
                            </div>

                            <div className="FeedLayout-Category-Container">
                                <span>Ambiental Help</span>
                            </div>

                            <div className="FeedLayout-Category-Container">
                                <span>Sport Support</span>
                            </div>

                            <div className="FeedLayout-Category-Container">
                                <span>Animals Care</span>
                            </div>

                            <div className="FeedLayout-Category-Container">
                                <span>Make Culture</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <span>Information</span>

                        <div>
                            <div className="FeedLayout-Info-Container">
                                <span>Org</span>
                            </div>

                            <div className="FeedLayout-Info-Container">
                                <span>Date</span>
                            </div>

                            <div className="FeedLayout-Info-Container">
                                <span>Time</span>
                            </div>
                        </div>
                    </div>

                    <button className="FeedLayout-Btn-Filter">Filter</button>

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

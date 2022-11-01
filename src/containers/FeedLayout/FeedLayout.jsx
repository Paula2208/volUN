import './FeedLayout.modules.css';
import { Outlet } from "react-router-dom";
import { FaHandshake } from "react-icons/fa"

function FeedLayout() {

    return (
        <div className="FeedLayout">
            <div className="FeedLayout-AppName">
                <span>VolUN</span>
                <FaHandshake className="FeedLayout-AppName-icon" />
            </div>

            <div className="FeedLayout-content">
                <Outlet />
            </div>

        </div>
    );
}

export default FeedLayout;

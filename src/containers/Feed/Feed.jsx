import './Feed.modules.css';
import Post from '../../components/post/Post';
import { getOfertas } from "../../api/offers";
import { useState } from "react"; 
import Axios from "axios";



function Feed(props) {
    const [listOfertas, setListaOfertas] = useState("");
    const {posts,userType} = props;


    return (
        <div className="Feed-container">
            <div className="Feed-Scroll-container">
                {posts.map((post) => <Post post={post} userType={userType}/>)}
                <div className="ofertas">
                <button onClick={getOfertas}> show ofertas</button>
                </div>
            </div>
        </div>
    );
}

export default Feed;

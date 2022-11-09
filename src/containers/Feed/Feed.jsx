import './Feed.modules.css';
import Post from '../../components/post/Post';
import { getOfertas } from "../../api/offers";
/*import { MdTitle } from 'react-icons/md';*/
import { deleteOferta } from "../../api/offers";
import { createOferta } from "../../api/offers";
import { updateOferta } from "../../api/offers";




function Feed(props) {

    const {posts,userType} = props;


    return (
        <div className="Feed-container">
            <div className="Feed-Scroll-container">
                {posts.map((post) => <Post post={post} userType={userType}/>)}
                <div className="ofertas">
                <button onClick={createOferta}> create oferta</button>
                <button onClick={getOfertas}> show ofertas</button>
                <button onClick={deleteOferta}> delete oferta</button>
                <button onClick={updateOferta}> update oferta</button>

                </div>
            </div>
        </div>
    );
}

export default Feed;
import './Feed.modules.css';
import Post from '../../components/post/Post';

function Feed(props) {

    const {posts,userType, reloadOffers} = props;


    return (
        <div className="Feed-container">
            <div className="Feed-Scroll-container">
                {posts.map((post) => <Post post={post} userType={userType} reloadOffers={reloadOffers}/>)}
            </div>
        </div>
    );
}

export default Feed;
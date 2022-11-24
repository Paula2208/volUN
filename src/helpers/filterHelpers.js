export const offersSortDSC = (a,b) =>{
    return b.id - a.id
}

export const filterPosts = (post, username, userType) => {
    if(post.title !== null){
        if(userType === 'NON_PROFIT'){
            if(post.nonProfitUsername === username){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return true;
        }
    }
    else{
        return false;
    }
}
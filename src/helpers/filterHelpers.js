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

export const filteringPost = (post, filters) => {

    let max_filters = 0;
    let correct_filters = 0;

    if('org' in filters && filters.org !== '') max_filters = max_filters + 1;
    if('type' in filters && filters.type.length !== 0) max_filters = max_filters + 1;
    //if('date' in filters && filters.date !== '') max_filters = max_filters + 1;
    //if('time' in filters && filters.time !== '') max_filters = max_filters + 1;

    if(post.nonProfitUsername === filters.org) correct_filters = correct_filters +1;
    if(filters.type.includes(post.category)) correct_filters = correct_filters +1;

    /*if(
        'date' in filters && 
        filters.date !== ''
    ){

    }

    if(
        'time' in filters && 
        filters.time !== ''
    ){

    }*/

    return max_filters === correct_filters;
}
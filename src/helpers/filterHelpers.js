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

export const compareTime = (filterTime, postTime) => {
    const timeA = filterTime.split(':').map((number) => parseInt(number));
    const timeB = postTime.split(':').map((number) => parseInt(number));
    
    if(timeB[0] > timeA[0]){
        return true;
    }

    if(timeB[0] === timeA[0]){
        if(timeB[1] >= timeA[1]){
            return true;
        }
    }

    return false;
}

export const compareDate = (filterDate, postDate, postName) => {
    const datePost = new Date(postDate);
    const dateFilter = new Date(filterDate);

    if(datePost.getFullYear() > dateFilter.getFullYear()){
        return true;
    } 

    if( datePost.getFullYear() === dateFilter.getFullYear() && 
        datePost.getMonth() > dateFilter.getMonth()){
            return true;
    }

    if( datePost.getFullYear() === dateFilter.getFullYear() && 
        datePost.getMonth() === dateFilter.getMonth() &&
        datePost.getDate() >= dateFilter.getDate()){
            return true;
        }

    return false;
}

export const filteringPost = (post, filters) => {

    let max_filters = 0;
    let correct_filters = 0;

    if('org' in filters && filters.org !== '') max_filters = max_filters + 1;
    if('type' in filters && filters.type.length !== 0) max_filters = max_filters + 1;
    if('date' in filters && filters.date !== '') max_filters = max_filters + 1;
    if('time' in filters && filters.time !== '') max_filters = max_filters + 1;

    if(post.nonProfitUsername === filters.org) correct_filters = correct_filters +1;
    if(filters.type.includes(post.category)) correct_filters = correct_filters +1;
    if(compareDate(filters.date, post.date, post.title)) correct_filters = correct_filters +1;
    if(compareTime(filters.time, post.time)) correct_filters = correct_filters +1;

    return max_filters === correct_filters;
}
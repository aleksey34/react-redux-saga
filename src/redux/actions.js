import {
    CREATE_POST,
    FETCH_POSTS,
    SHOW_LOADER,
    HIDE_LOADER,
    SHOW_ALERT,
    HIDE_ALERT, REQUEST_POST
} from "./types";

export const createPost =(post)=>{
    return {
        type: CREATE_POST, payload: post
    }
}

export  const fetchPosts = ()=>{
    return {type: REQUEST_POST}


    // return async dispatch=>{
    //
    //     try{
    //         dispatch(setLoading(true))
    //
    //         const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    //         const json = await response.json();
    //         dispatch({type:FETCH_POST , payload: json})
    //
    //         dispatch(setLoading(false))
    //     }catch (e) {
    //         console.log(e.message);
    //         dispatch(setAlert({content: "Server error. Something is going wrong.", type:"warning"}))
    //         dispatch(setLoading(false))
    //     }
    // }

}

export const setLoading = (loading) =>{

    return {
        type: loading ? SHOW_LOADER : HIDE_LOADER , payload: loading
    } ;

}
export const setAlert = (alert) =>{

    return dispatch => {
       dispatch({
           type: alert.content ? SHOW_ALERT : HIDE_ALERT , payload: alert
       })
        if(alert.content){
            setTimeout( ()=>{
                dispatch({
                    type:  HIDE_ALERT , payload: { ...alert , content: ""}
                })
            } , 3000)
        }

    }

}
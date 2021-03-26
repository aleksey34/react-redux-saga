import React from "react";
import Post from "./Post";
import {connect, useDispatch , useSelector} from "react-redux";
import {fetchPosts, setLoading} from "../redux/actions";
import {Loader} from "./Loader";



const FetchedPosts = ()=>{

    const dispatch = useDispatch();
    const posts = useSelector(state=>state.posts.fetchedPosts);
    const loading = useSelector(state=>state.app.loading);

    const fetchPostsHandler = async ()=>{

            // dispatch(setLoading(true));
     await   dispatch(fetchPosts());
//             dispatch(setLoading(false));

    }

    if(loading){
        return <Loader/>
    }

    if(!posts || posts.length === 0){
      return (
          <>
              <button
                  onClick={fetchPostsHandler}
                  className="btn btn-primary">
                  Fetch
              </button>
          </>
      )
    }

    return posts.map(post=>{
        return <Post post={post} key={post.id}  />
    })

}



export default FetchedPosts;
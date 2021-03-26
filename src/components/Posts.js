import React from "react";
import Post from "./Post";
import {connect} from "react-redux";


const Posts = ({syncPosts})=>{
if(!syncPosts || syncPosts.length === 0){

    return (
        <p className={`text-center`}>There are no posts yet</p>
    )
}
    return syncPosts.map((post)=>{
        return <Post key={post.id} post={post}/>
    })

}

const mapStateToProps = (state)=>{

    return {
        syncPosts: state.posts.posts,
        fetchedPosts: state.posts.fetchedPosts
    };
}


export default connect(mapStateToProps , null)(Posts);
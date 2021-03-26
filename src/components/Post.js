import React from "react";



export default ({post})=>{

    return (
        <div className={`card`}>

            <div className="card-body" id={`postCard-${post.id}`}>
                <div className="card-title">
                <h5>{post.title}</h5>
                </div>
                {
                    post.body &&
                <div className="card-body">
                    <p>{post.body}</p>
                </div>
                }

            </div>

        </div>
    )
}
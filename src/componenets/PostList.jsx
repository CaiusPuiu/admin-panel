import React from 'react';
import PostItem from './PostItem';
import "./PostList.css"

function PostList(props){
    const {posts} = props;
    return(
        <div>
             <h2 className="post-title">Lista Postari</h2>

             <div className="post-list">
            {
                posts.map((user, index) => {
                    return <PostItem
                        title={user.title}
                        body={user.body}
                        key={index}
                    />
                })
            }
             </div>

        </div>
    )
}

export default PostList;
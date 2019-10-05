import React from 'react';

const Posts = (props) => {
    const divStyle = {
        border:"1px solid #ccc",
        padding: "5px",
        marginBottom: "3px",
        width: "80%"
    };

    if(props){
        return (
            <div style={divStyle}>
                <p>Users is id is {props.post.userId}</p>
                <p>Post Title: {props.post.title}</p>
                <p>Post Body: {props.post.body}</p>
            </div>
        );
    }else{
        return <p>No Content</p>;
    }
};

export default Posts;
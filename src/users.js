import React from 'react';

const Users = (props) => {
    if(props.user){
        return (
            <p>Users is {props.user}</p>
        )
    }else{
        return <p>No Content</p>;
    }
};

export default Users;
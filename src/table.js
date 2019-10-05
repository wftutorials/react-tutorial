import React from 'react';

const Table = (props) => {

    const tbStyle = {
        border:"1px solid #ccc",
        padding: "5px",
        marginBottom: "3px",
        marginTop: "5px",
        width: "80%"
    };

    if(props.users){
        return (
            <table style={tbStyle}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                {props.users.map( ( row )=>
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.email}</td>
                        <td>{row.website}</td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }else{
        return <p>No Table</p>;
    }
};

export default Table;
import React from 'react'

const Box = ({color}) =>{
    const boxColor = {
        backgroundColor:[color],
        width: "300px",
        height: "300px",
        display: "inline-block",
        marginTop: 10,
        marginRight: 10,
    };
    return <div style = {boxColor}></div>;
}

export default Box;
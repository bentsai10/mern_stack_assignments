import React, {useState} from 'react'

const BoxDisplay = (props) =>{
    const blocks = props.currentState;
    const output = []
    if(blocks != undefined){
        console.log("getting here!")
        for(const i = 0; i < blocks.length; i++){
            output.push(<div style = {{height: 300, width: 300, backgroundColor:blocks[i]}}></div>)
        }
    }
    console.log(output);
    return output;
}

export default BoxDisplay;
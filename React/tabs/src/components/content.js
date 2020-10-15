import React, {useState} from 'react';

const Content = ({text}) =>{
    
    return(<div>
        <textarea>{text}</textarea>
    </div>);
}

export default Content;
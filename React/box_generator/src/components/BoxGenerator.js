import React, {useState} from 'react';

const BoxGenerator = ({setBox, box}) =>{
    const [newColor, setNewColor] = useState("");

    const onChange = (e) => {
        setNewColor(e.target.value);
    }

    const[colorError, setColorError] = useState("");

    const isColor = (strColor)=>{
        var s = new Option().style;
        s.color = strColor;
        return s.color == strColor;
    }

    const grabColor = () =>{
        if(isColor(newColor)){
            setColorError("");
            setBox({
                ...box, 
                colors: [...box.colors, newColor]
            })
            setNewColor("");
        }else{
            setColorError("Not a valid color!");
        }
        
    }

    

    return(
        <div>
            <input onChange = {onChange} type = "text" name = "newColor" value = {newColor} style = {{marginTop: 10, marginRight: 10}}>
            </input>
            <button onClick = {grabColor}>Add Box</button>
            {
                colorError? <p style = {{color: 'red'}}>Not a valid color</p>:
                ""
            }
        </div>
    );
}

export default BoxGenerator;
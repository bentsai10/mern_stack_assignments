import React, {useState} from 'react'

const BoxGenerator = (props) =>{
    const currentState = props.currentState;
    const add = props.add;

    const [color, setColor] = useState("");
    const[colorError, setColorError] = useState("");

    const isColor = (strColor)=>{
        var s = new Option().style;
        s.color = strColor;
        return s.color == strColor;
    }

    const handleColor = (e) => {
        e.preventDefault();
        if(isColor(color)){
            setColorError("");
            currentState.push(color);
            add(currentState);
        }else{
            setColorError("Not a valid color!");
        }
    };

    

    return(
        <form style = {{marginTop: 20}} onSubmit={handleColor}>
            <label style = {{fontSize: 20, marginRight: 10}}>Color:</label>
            <input style = {{width: 500}} onChange = { (e) => setColor(e.target.value)}></input>
            {
                colorError?
                <p style = {{color:'red'}}>{colorError}</p>: ''
            }
            <button style = {{marginLeft:10}}>Submit</button>
            <p>{color}</p>
        </form>
    );
}

export default BoxGenerator;
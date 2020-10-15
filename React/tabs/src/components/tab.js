import React, {useState} from 'react';

const Tab = ({title, content, setText}) =>{
    const [checkedState, setCheckedState] = useState(false)
    const [tabStyle, setTabStyle] = useState({
        backgroundColor: 'lightgray',
        color: 'black',
        display: "block",
        marginTop: 10,
        marginRight:10,
    });
    const checkClicked = (e) => {
        if(checkedState){
            setTabStyle({
                backgroundColor: 'lightgray',
                color: 'black',
                display: "block",
                marginTop: 10,
                marginRight:10,
            });
        }else{
            setTabStyle({
                backgroundColor: 'black',
                color: 'white',
                display: "block",
                marginTop: 10,
                marginRight:10,
            });
            setText(content);
        }
        setCheckedState(!checkedState);
    }
    return <div>
        <button onClick = {checkClicked} style = {tabStyle}>{title}</button>
    </div>
}

export default Tab;
import React, {Component} from 'react';

class Person extends Component {
    constructor(props){
        super(props);

        this.state = {
            age: props.age
        };
    }

    increaseAge = () => {
        let newAge = parseInt(this.state.age)+1;
        this.setState({age: newAge});
    }

    render(){
        return <div className = "person">
            <h1>{this.props.lastName}, {this.props.firstName} </h1>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {this.props.hairColor}</p>
            <button onClick = {this.increaseAge}>Birthday button for {this.props.firstName} {this.props.lastName}</button>
        </div>
    }

}

export default Person;
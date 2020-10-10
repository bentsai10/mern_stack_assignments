import React, { useState } from  'react';

import styles from './HookForm.module.css';
    
const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const[fNameError, setFNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const[lNameError, setLNameError] = useState("");
    const [email, setEmail] = useState("");
    const[emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");  
    const[passwordError, setPasswordError] = useState("");
    const [passwordConf, setPasswordConf] = useState("");   
    const[passwordConfError, setPasswordConfError] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, passwordConf};
        console.log("Welcome", newUser);
    };

    const handleFName = (e) =>{
        setFirstName(e.target.value)
        if(e.target.value.length < 2 && e.target.value.length > 0){
            setFNameError("First Name must be at least 2 characters!");
        }else{
            setFNameError("");
        }
    }

    const handleLName = (e) =>{
        setLastName(e.target.value)
        if(e.target.value.length < 2 && e.target.value.length > 0){
            setLNameError("Last Name must be at least 2 characters!");
        }else{
            setLNameError("");
        }
    }

    const handleEmail = (e) =>{
        setEmail(e.target.value)
        if(e.target.value.length < 5 && e.target.value.length > 0){
            setEmailError("Error must be at least 5 characters!");
        }else{
            setEmailError("");
        }
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value)
        if(e.target.value.length < 8 && e.target.value.length > 0){
            setPasswordError("Password must be at least 8 characters!");
        }
        else{
            setPasswordError("");
        }
    }

    const handlePasswordConf = (e) =>{
        setPasswordConf(e.target.value)
        if(password != e.target.value && e.target.value.length > 0){
            setPasswordConfError("Your passwords don't match!");
        }else{
            setPasswordConfError("");
        }
    }
    
    return(
        <>
            <form onSubmit={ createUser } className = {styles.hookForm}>
                <div className = {styles.formGroup}>
                    <label>First Name: </label> 
                    <input type="text" onChange={ handleFName } name = "firstName"/>
                </div>
                {
                    fNameError ?
                    <p style = {{color: 'red', fontSize: 12, textAlign:'left'}}>{fNameError}</p>: ''
                }
                <div className = {styles.formGroup}>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ handleLName } name = "lastName"/>
                </div>
                {
                    lNameError ?
                    <p style = {{color: 'red', fontSize: 12, textAlign:'left'}}>{lNameError}</p>: ''
                }
                <div className = {styles.formGroup}>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ handleEmail } name = "email"/>
                </div>
                {
                    emailError ?
                    <p style = {{color: 'red', fontSize: 12, textAlign:'left'}}>{emailError}</p>: ''
                }
                <div className = {styles.formGroup}>
                    <label>Password: </label>
                    <input type="password" onChange={ handlePassword } name = "password"/>
                </div>
                {
                    passwordError ?
                    <p style = {{color: 'red', fontSize: 12, textAlign:'left'}}>{passwordError}</p>: ''
                }
                <div className = {styles.formGroup}>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ handlePasswordConf } name = "passwordConf"/>
                </div>
                {
                    passwordConfError ?
                    <p style = {{color: 'red', fontSize: 12, textAlign:'left'}}>{passwordConfError}</p>: ''
                }
                <button>Create User</button>
            </form>
            <div className = {styles.hookForm}>
                <h3>Your Form Data</h3>
                <label >First Name: {firstName}</label>
                <label>Last Name: {lastName}</label>
                <label>Email: {email}</label>
                <label>Password: {password}</label>
                <label>Confirm Password: {passwordConf}</label>
            </div>
        </>
    );
};
    
export default HookForm;
import React, { useState } from  'react';

import styles from './HookForm.module.css';
    
const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [passwordConf, setPasswordConf] = useState("");   
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, passwordConf};
        console.log("Welcome", newUser);
    };
    
    return(
        <>
            <form onSubmit={ createUser } className = {styles.hookForm}>
                <div className = {styles.formGroup}>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div className = {styles.formGroup}>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div className = {styles.formGroup}>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                
                <div className = {styles.formGroup}>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div className = {styles.formGroup}>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => setPasswordConf(e.target.value) } />
                </div>
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
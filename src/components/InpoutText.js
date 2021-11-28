import React from 'react'
import TextField from '@material-ui/core/TextField';
import { useEffect, useState, useContext } from 'react';
import { userDetailsContext } from '../context';


export const InputText=({setStr,setFlag})=>{
    let typingTimer
    let avatarTimer
    const [userDetails, setUserDetails] = useContext(userDetailsContext);
    const getNewAvatar = (e) => {
        setFlag(0)
         if(typingTimer)
         clearTimeout(typingTimer)
         typingTimer = setTimeout(()=> 
         avatarTimer=setTimeout(() => 
         {setStr(e);setFlag(1);setUserDetails(e)}, 1000),1000) 
        return () => {clearTimeout(avatarTimer)}     
        
    }
    return(
        <TextField id="outlined-basic" onChange={(e) => { getNewAvatar(e.target.value) }} label="enter userName" variant="outlined" />
    )
}
import { InputText } from "./InpoutText"
import { TextField,Avatar } from "@material-ui/core"
import { useEffect, useState, useContext } from 'react';
import { userDetailsContext } from '../context';


export const DraftUser=()=>{
    const [userDetails, setUserDetails] = useContext(userDetailsContext);
return(
    <div style={{display:"flex",opacity:0.5}}>
        <TextField  value={userDetails} placeholder="Draft User"/>
        <Avatar src={`https://avatars.dicebear.com/api/female/${userDetails}.svg`}  />
    </div>
)
}
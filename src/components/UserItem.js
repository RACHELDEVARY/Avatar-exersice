import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { DeleteUser } from './DeleteUser';
import { useState } from 'react';


export const UserItem=({contact})=>{
    const{email,firstName,lastName,userName}=contact
    const [isOpen, setIsOpen] = useState(false);

   return(
       
       <ListItem alignItems="flex-start" divider="true" onClick={()=>{setIsOpen(true)}}>
           <ListItemAvatar>
          <Avatar alt="user image" src={`https://avatars.dicebear.com/api/female/${userName}.svg`} />
        </ListItemAvatar>
        <ListItemText
          primary={userName}
          secondary={
            <React.Fragment>
                <span>name: {firstName} {lastName} </span>
                <span> {email}</span>
             </React.Fragment>
           }
        />
        {isOpen && <DeleteUser isOpen={isOpen} setIsOpen={setIsOpen} email={email} firstName={firstName}lastName={lastName}userName={userName}/>} 
           </ListItem>
          
              
   ) 
}
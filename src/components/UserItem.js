import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


export const UserItem=({contact})=>{
    const{email,firstName,lastName,userName}=contact

   return(
       
       <ListItem alignItems="flex-start" divider="true">
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
        
           </ListItem>
           
              
   ) 
}
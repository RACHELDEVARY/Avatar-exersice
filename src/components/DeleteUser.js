import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import {useState} from 'react'


export const DeleteUser=({isOpen,setIsOpen,email,firstName,lastName,userName})=>{
  
    
return(
       <Dialog open={isOpen} 
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       <DialogTitle id="alert-dialog-title">{"Do you want to delete this user?"}</DialogTitle> 
       <DialogContent>
           <ListItemAvatar>
          <Avatar alt="user image" src={`https://avatars.dicebear.com/api/female/${userName}.svg`} />
        </ListItemAvatar>
                <p>{userName}</p>
                <p >name: {firstName} {lastName} </p>
                <p>email: {email}</p>  
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{setIsOpen(false)}} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>{setIsOpen(false)}} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>  
      </Dialog>
)

}


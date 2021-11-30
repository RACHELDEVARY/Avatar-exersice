import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { useEffect, useState } from 'react';


export const DeleteUser = ({ email, firstName, lastName, userName }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    console.log("alertclose")
    setOpen(false);
    console.log("alertclosed")
  };

  return (
    <div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to delete this user?"}
        </DialogTitle>
        <DialogContent>
          <ListItemAvatar>
            <Avatar alt="user image" src={`https://avatars.dicebear.com/api/female/${userName}.svg`} />
          </ListItemAvatar>
          <p>{userName}</p>
          <p >name: {firstName} {lastName} </p>
          <p>email: {email}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>Delete</Button>
          <Button onClick={handleClose} > Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


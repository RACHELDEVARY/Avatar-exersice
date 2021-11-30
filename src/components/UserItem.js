import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { useState } from 'react';
import { DeleteUser } from './DeleteUser'


export const UserItem = ({ contact }) => {
  const { email, firstName, lastName, userName } = contact
  const [openDelete, setOpenDelete] = useState(false);



  return (
    <ListItem alignItems="flex-start" divider="true" onClick={() => { setOpenDelete(true); console.log("opentrue") }}>
      <ListItemAvatar>
        <Avatar alt="user image" src={`https://avatars.dicebear.com/api/female/${userName}.svg`} />
      </ListItemAvatar>
      <ListItemText
        primary={userName}
        secondary={
          <>
            <span>name: {firstName} {lastName} </span>
            <span> {email}</span>
          </>
        }
      />
      {openDelete && <DeleteUser email={email} firstName={firstName} lastName={lastName} userName={userName} />}




      {/* <Dialog open={Open} onClose={handleClose}
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
          <Button onClick={handleClose}>delete</Button>
          <Button onClick={handleClose} autoFocus>
            cancel
          </Button>
        </DialogActions>

      </Dialog> */}



    </ListItem >

  )
}
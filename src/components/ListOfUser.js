import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { UserItem } from './UserItem';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export const ListOfUser = ({ userArray }) => {
  console.log("in list userArray", userArray)
  localStorage.setItem("userArray", JSON.stringify(userArray))
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {userArray.length > 0 && userArray.map(contact =>
        <UserItem contact={contact} />
      )}

    </List>
  )
}
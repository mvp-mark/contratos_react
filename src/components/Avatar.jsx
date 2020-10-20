import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Dashboard/Title';
import  Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function AvatarDoido() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <>
      <Title>Avatar </Title>
      <Typography component="p" variant="h4">

      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        <Avatar src="https://source.unsplash.com/random" style={{width: '10vw', height: '10vw', alignSelf: 'center'}} />
      </Typography>
      <div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={()=> window.location.reload(false)}
          className={classes.submit}
        >Mudar o Avatar</Button>
      </div>
      </>
    </React.Fragment>
  );
}
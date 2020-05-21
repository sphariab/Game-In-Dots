import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

const scoreResult = ({userScore, computerScore, classes }) => {
  return (
    <div className={classes.scoreWrapper}>
      <div>{`User: ${userScore}`}</div>
      <div>{`Computer: ${computerScore}`}</div>
    </div>
  )
}

export default withStyles(styles)(scoreResult)
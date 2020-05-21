import React from 'react';
import { Select, Input, Button, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

function ControlPanel (props) {
  const { classes, handleChangeMode, handleChangeName,
    settings, mode, name,
    handleStartGame, showWinner, startGame, handleRestartGame} = props;

  const createOption = () => {
    let optionName;

    return Object.keys(settings).map(key => {
      switch  (key) {
        case ('easyMode'):
          optionName = 'Easy Mode';
          break;

        case ('normalMode'):
          optionName = 'Normal Mode';
          break;

        case ('hardMode'):
          optionName = 'Hard Mode';
          break;

        default:
          optionName = 'Pick Game Mode';
      }
      return (
        <MenuItem key={key} value={key}>{optionName}</MenuItem>
      )
    })
  };

  return (
    <>
      <div className={classes.PanelWrapper}>
        <FormControl disabled={startGame} className={classes.formControl}>
          <InputLabel className={classes.label} htmlFor="simple">Pick Game Mode</InputLabel>
          <Select
            className={classes.Select}
            labelId="simple"
            id="simple"
            value={mode}
            onChange={(e) => handleChangeMode(e)}
            disabled={startGame}
            disableUnderline={true}
            label="Pick Game Mode"
          >
            {createOption()}
          </Select>
        </FormControl>
        <Input
          className={classes.Input}
          value={name}
          onChange={(e) => handleChangeName(e)}
          disableUnderline={true}
        />
        {!showWinner &&
        <Button
          className={classes.Button}
          onClick={handleStartGame}
          disabled={mode === 'Pick Game Mode' || startGame}
        >
          PLAY
        </Button>}
        {showWinner &&
        <Button
          className={classes.Button}
          onClick={handleRestartGame}
          disabled={mode === 'Pick Game Mode' || startGame}
        >
          PLAY AGAIN
        </Button>}
      </div>
    </>
  )
};

export default withStyles(styles)(ControlPanel)
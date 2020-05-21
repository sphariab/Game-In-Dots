import React from 'react';
import styles from './styles';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const BoardBuilder = ({field, classes,  cells, setCells,  addUserScore}) => {
  let gridTemplateColumns = '';
  let gridTemplateRows = '';

  for (let i = 0; i < field; i++) {
    gridTemplateColumns = gridTemplateColumns + ' 25px';
    gridTemplateRows = gridTemplateRows + ' 25px';
  }

  const containerStyle = {
    width: 25*field + 'px',
    gridTemplateColumns: gridTemplateColumns,
    gridTemplateRows: gridTemplateRows
  };

  const handleSelectCell = (cell) => {
    cells[cell.number]['color'] = 'green';
    cells[cell.number]['selected'] = true;
    setCells(cells);
    addUserScore();
  };

  const getColor = (color) => {
    if (color === 'green') {
      return classes.green + ' ' + classes.cell
    } else if (color === 'blue') {
      return classes.blue + ' ' + classes.cell
    } else if (color ===  'red') {
      return classes.red + ' ' + classes.cell
    } else if (color === 'none') {
      return classes.cell
    }
  };

  return(
    <>
      <div className={classes.boardWrapper}
        style={ containerStyle }>
        { cells && cells.map(cell=>(
          <Button
            onClick={() => handleSelectCell(cell)}
            className={getColor(cell.color)}
            key={Math.random()}
            disabled={cell.disabled}
          > </Button>
        ))
        }
      </div>
    </>
  )
};

export default withStyles(styles)(BoardBuilder)


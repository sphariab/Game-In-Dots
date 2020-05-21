import React, { Component } from 'react';
import ControlPanel from '../../components/ControlPanel/controlPanel';
import LeaderBoard from '../../components/LeaderBoard/leaderBoard';
import ScoreResult from '../../components/ScoreResult/scoreResult';
import BoardBuilder from '../BoardBuilder/BoardBuilder';
import axios from 'axios';
import cells from '../BoardBuilder/cells';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class Game extends Component {
  constructor() {
    super();

    this.state = {
      settings: [],
      mode:'Pick Game Mode',
      name:'User Name',
      field: 0,
      delay: 0,
      startGame: false,
      cells: [],
      counter: 0,
      userScore: 0,
      computerScore: 0,
      showWinner: false,
      time: 0
    }
  }

  componentDidMount () {
    const fetchData = async () => {
      const result = await axios(
        `https://starnavi-frontend-test-task.herokuapp.com/game-settings`,
      );
      this.setState({settings: result.data})
    };
    fetchData();
  }

  handleStartGame = () => {
    this.setState({startGame: true});
    this.startGame();
  }

  handleRestartGame = () => {
    this.setState(
      {
        userScore: 0,
        computerScore: 0,
        showWinner: false,
        startGame: true,
        counter: 0,
        cells: cells(this.state.field)
      }, () => this.startGame())
  }

  addCounter = () => {
    this.setState({counter: this.state.counter + 1});
  };

  addUserScore = () => {
    this.setState({userScore: this.state.userScore + 10});
    this.addCounter();
  };

  addComputerScore = () => {
    this.setState({computerScore: this.state.computerScore + 10});
    this.addCounter();
  };

  getRandomCell = () => {
    let cells =  this.state.cells;
    let diffArray = cells.filter(item => !item.selected);
    return diffArray[Math.floor(Math.random() * diffArray.length)];
  };

  startGame = () => {
    let field = this.state.field;
    let counter = this.state.counter;
    let cells =  this.state.cells;

    if (counter < Math.floor(field*field / 2)) {
      let randomEl = this.getRandomCell();
      randomEl.disabled = false;
      randomEl.color = "blue";
      cells[randomEl.number] = randomEl;
      this.setCells(cells);

      setTimeout(() => {
        if (randomEl.selected !== true){
          randomEl.color = "red";
          randomEl.selected = true;
          randomEl.disabled = true;
          cells[randomEl.number] = randomEl;
          this.setCells(cells);
          this.addComputerScore();
        }
        this.startGame()
      }, this.state.delay)
    } else {
      this.setState({showWinner: true, startGame: false});
    }
  };

  renderWinner = () => {
    let winner;
    if (this.state.computerScore > this.state.userScore) {
      winner = <div>Computer wins!</div>;
    } else {
      winner = <div>{this.state.name } wins! </div>;
    } return winner;
  }

  handleChangeMode = (event) => {
    let settings = this.state.settings;
    let field = settings[event.target.value]['field'];
    this.setState({
      cells: cells(field),
      field: settings[event.target.value]['field'],
      delay: settings[event.target.value]['delay'],
      mode: event.target.value,
    })
  };

  setCells = (cells) => {
    this.setState({cells});
  };

  handleChangeName = (event) => {
    this.setState({name: event.target.value});
  };

  render () {
    const {
      settings, field, delay, startGame, cells, name, mode, showWinner, disablePlayButton,
      computerScore, userScore} = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <div className={classes.mainContent}>
          <ControlPanel
            settings={settings}
            name={name}
            mode={mode}
            handleChangeMode={this.handleChangeMode}
            handleChangeName={this.handleChangeName}
            handleStartGame={this.handleStartGame}
            handleRestartGame={this.handleRestartGame}
            showWinner={showWinner}
            startGame={startGame}
            disablePlayButton={disablePlayButton}
          />
          <div>{showWinner ? this.renderWinner() : null}</div>
          <BoardBuilder
            field={field}
            delay={delay}
            startGame={startGame}
            cells={cells}
            setCells={this.setCells}
            addUserScore={this.addUserScore}
            />
          <ScoreResult
            computerScore={computerScore}
            userScore={userScore}
          />
        </div>
        <LeaderBoard
          showWinner={showWinner}
          name={name}
          userScore={userScore}
          computerScore={computerScore}
          />
      </div>
    )
  }
}

export default withStyles(styles)(Game)

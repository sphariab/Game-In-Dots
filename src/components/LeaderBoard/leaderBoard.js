import React, { Component } from 'react';
import axios from 'axios';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

class LeaderBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winners: []
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.showWinner !== prevProps.showWinner) {
      this.saveWinner();
    }
  }

  componentDidMount(){
    const fetchData = async () => {
      const result = await axios(
        `https://starnavi-frontend-test-task.herokuapp.com/winners`,
      );
      this.setState({winners: result.data});
    };
    fetchData();
  }

  createTime = () =>{
    let hours = new Date().getHours(),
      minutes = new Date().getMinutes(),
      day = new Date().getDay(),
      month = new Date().toLocaleString("en-us", { month: "long" }),
      year = new Date().getFullYear();
    return hours +':' + minutes + '; ' + day + ' ' + month + ' ' + year;
  };

  saveWinner = () => {
    const {computerScore, userScore, name} = this.props;
    let winner = computerScore > userScore ? 'Computer' : name;
    let data = {
      winner: winner,
      date: this.createTime()
    };

    axios.post('https://starnavi-frontend-test-task.herokuapp.com/winners', data)
      .then(response => {
        this.setState({winners: response.data});
      })
  };

  render () {
    const {winners} = this.state;
    const {classes} = this.props;
      return (
        <div>
          <h1 className={classes.title}>Leader Board</h1>
          {winners && winners.map(item =>
            <div
              className={classes.resultContainer}
              key={item.id}
            >
              {item.winner}
              <span>{item.date}</span>
            </div>)}
        </div>
      )
  }
}

export default withStyles(styles)(LeaderBoard)
import React from 'react'
import Scorecard from './Scorecard'
import { connect } from 'react-redux'

class HistoryCard extends React.Component {


  render() {

    return (
      <div className="history-card-container">
        <h3>{this.props.team.contest.name}</h3>
        <div className='history-card-row'>
          <div className='history-card-col'>
            <Scorecard currentContest={this.props.team.contest} weatherperson={this.props.team.weatherpeople[0]}/>
          </div>
          <div className='history-card-col'>
            <Scorecard currentContest={this.props.team.contest} weatherperson={this.props.team.weatherpeople[1]}/>
          </div>
          <div className='history-card-col'>
            <Scorecard currentContest={this.props.team.contest} weatherperson={this.props.team.weatherpeople[2]}/>
          </div>
        </div>
        <div className='history-card-row'>
          <div className='history-card-col'>
            Started: {this.props.team.contest.start_date}
            <br />
            Ended: {this.props.team.contest.end_date}
          </div>
          <div className='history-card-col'>
            Total Score: <br />
            {this.props.team.score} points <br />
          <img height='50px' alt='ribbon' src='ribbon-3.png' />
          </div>
          <div className='history-card-col'>
            Prize: <br />
            {this.props.team.contest.prize} Flatcoin
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    weatherpeople: state.weatherpeople.weatherpeople,
    contests: state.contests.contests
  }
}

export default connect(mapStateToProps)(HistoryCard)

import React from 'react'
import Scorecard from './Scorecard'
import { connect } from 'react-redux'

class HistoryCard extends React.Component {

  //TODO: DRY
  renderScoreRibbon() {
    const currentContest = this.props.contests ? this.props.contests.find(contest => contest.id === this.props.team.contest.id) : null
    const totalScores = currentContest ? currentContest.teams.map(team => team.score) : null
    const sortedScores = totalScores ? totalScores.sort(function(a, b){return b - a}) : null
    const score = this.props.team.score
    const place = sortedScores ? sortedScores.indexOf(score) + 1 : null
    console.log(sortedScores);
    console.log(place);

    if (sortedScores && score === sortedScores[0]) {
      return '1st'
    } else if (sortedScores && score === sortedScores[1]) {
      return '2nd'
    } else if (sortedScores && score === sortedScores[2]) {
      return <img height='50px' alt='ribbon' src='ribbon-3.png' />
    } else if (sortedScores) {
      return `You placed ${place}th out of ${sortedScores.length}`
    }
  }

  //TODO: DRY
  renderPrize() {
    const currentContest = this.props.contests ? this.props.contests.find(contest => contest.id === this.props.team.contest.id) : null
    const totalScores = currentContest ? currentContest.teams.map(team => team.score) : null
    const sortedScores = totalScores ? totalScores.sort(function(a, b){return b - a}) : null
    const score = this.props.team.score

    if (sortedScores && score === sortedScores[0]) {
      return this.props.team.contest.prize
    } else {
      return 0
    }

  }

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
            {this.props.team.score} points <br /> <br/>
            {this.renderScoreRibbon()}
          </div>
          <div className='history-card-col'>
            Prize: <br />
            {this.renderPrize()}/{this.props.team.contest.prize} Flatcoin
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    //not sure if I need weatherpeople here. I don't think I do.
    //figure it out!
    weatherpeople: state.weatherpeople.weatherpeople,
    contests: state.contests.contests
  }
}

export default connect(mapStateToProps)(HistoryCard)

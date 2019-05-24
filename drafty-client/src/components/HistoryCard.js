import React from 'react'
import Scorecard from './Scorecard'
import { connect } from 'react-redux'

class HistoryCard extends React.Component {

  //TODO: DRY - MOVE TO BACKEND AND SERVE DATA FROM API?
  renderScoreRibbon = () => {
    const currentContest = this.props.contests ? this.props.contests.find(contest => contest.id === this.props.team.contest.id) : null
    // const totalScores = currentContest ? currentContest.teams.map(team => team.score) : null
    // const sortedScores = totalScores ? totalScores.sort(function(a, b){return b - a}) : null
    const score = this.props.team.score

    if (score === currentContest.high_score) {
      return <img height='50px' alt='ribbon' src='1st-place-medal.svg' />
    } else if (score === currentContest.high_score) {
      return <img height='50px' alt='ribbon' src='2nd-place-medal.svg' />
    } else if (score === currentContest.high_score) {
      return <img height='50px' alt='ribbon' src='3rd-place-medal.svg' />
    } else {
      return <span className='emoji' aria-label='perservering-face' role="img">😣</span>
    }
  }

  //TODO: DRY - MOVE TO BACKEND AND SERVE DATA FROM API?
  renderPlacement = () => {
    const currentContest = this.props.contests ? this.props.contests.find(contest => contest.id === this.props.team.contest.id) : null
    const totalScores = currentContest ? currentContest.teams.map(team => team.score) : null
    const sortedScores = totalScores ? totalScores.sort(function(a, b){return b - a}) : null
    const score = this.props.team.score
    const place = sortedScores ? sortedScores.indexOf(score) + 1 : null

    if (sortedScores) {
      return `You placed ${this.ordinalSuffixOf(place)} out of ${sortedScores.length} teams`
    }
  }

  ordinalSuffixOf = i => {
    let j = i % 10
    let k = i % 100
    if (j === 1 && k !== 11) {
        return i + "st";
    }
    if (j === 2 && k !== 12) {
        return i + "nd";
    }
    if (j === 3 && k !== 13) {
        return i + "rd";
    }
    return i + "th";
  }

  //TODO: DRY - MOVE TO BACKEND AND SERVE DATA FROM API?
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
        <h2>Team {this.props.team.name}</h2>

        <div className='history-card-row'>
          <div className='history-card-col'>
            Contest:<br/>
            <p>{this.props.team.contest.name}</p>
            <p>Started: {this.props.team.contest.start_date}</p>
            Ended: {this.props.team.contest.end_date}
          </div>
          <div className='history-card-col'>
            Total Score: <br />
            {this.props.team.score} points <br /> <br/>
            {this.renderScoreRibbon()} <br/>
            {this.renderPlacement()} <br/> <br />
          </div>
          <div className='history-card-col'>
            <p>Prize:</p>
            <p>{this.renderPrize()}/{this.props.team.contest.prize} Flatcoin</p>
          </div>
        </div>

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

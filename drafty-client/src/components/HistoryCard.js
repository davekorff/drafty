import React from 'react'
import Scorecard from './Scorecard'
import { connect } from 'react-redux'
import CountUp from 'react-countup';
import transformDate from '../helpers/transformDate'

class HistoryCard extends React.Component {

  renderScoreRibbon = () => {
    const currentContest = this.props.contests.find(contest => contest.id === this.props.team.contest.id)
    const sortedScores = currentContest ? currentContest.sorted_scores : null
    const place = sortedScores ? sortedScores.indexOf(this.props.team.score) + 1 : null

    if (place === 1) {
      return <img height='75px' alt='first-ribbon' src='1st-place-medal.svg' style={{marginTop: '-16px'}}/>
    } else if (place === 2) {
      return <img height='75px' alt='second-ribbon' src='2nd-place-medal.svg' style={{marginTop: '-16px'}}/>
    } else if (place === 3) {
      return <img height='75px' alt='third-ribbon' src='3rd-place-medal.svg' style={{marginTop: '-16px'}}/>
    } else {
      return <img height='75px' alt='see-no-evil-monkey' src='see-no-evil-monkey.svg' style={{marginTop: '-16px'}}/>
    }
  }

  renderPlacement = () => {
    const currentContest = this.props.contests.find(contest => contest.id === this.props.team.contest.id)
    const sortedScores = currentContest ? currentContest.sorted_scores : null
    const place = sortedScores ? sortedScores.indexOf(this.props.team.score) + 1 : null

    if (sortedScores) {
      return `You placed ${this.ordinalSuffixOf(place)} out of ${sortedScores.length} teams`
    }
  }

  renderPrize() {
    const currentContest = this.props.contests.find(contest => contest.id === this.props.team.contest.id)

    if (currentContest && this.props.team.score === currentContest.high_score) {
      return this.props.team.contest.prize
    } else {
      return 0
    }
  }

  // render the proper suffix for placement i.e. 1st, 2nd, 3rd, etc.
  ordinalSuffixOf = i => {
    let j = i % 10
    let k = i % 100
    if (j === 1 && k !== 11) { return i + "st" }
    if (j === 2 && k !== 12) { return i + "nd" }
    if (j === 3 && k !== 13) { return i + "rd" }
    return i + "th"
  }

  render() {
    return (
      <div className="history-card-container">
        <h2 id='pacifico' >Team {this.props.team.name}</h2>

        <div className='history-card-row'>
          <div className='history-card-col'>
            <span id='pacifico' style={{fontSize: '20px'}}>Contest:</span><br/><br/>
            <strong>
              <p>{this.props.team.contest.name}</p>
              <p>Started: {transformDate(this.props.team.contest.start_date)}</p>
              Ended: {transformDate(this.props.team.contest.end_date)}
            </strong>
          </div>
          <div className='history-card-col'>
            <span id='pacifico' style={{fontSize: '20px'}}>Total Score:</span> <br/>
            <div  id='countup'>
                <strong><CountUp style={{fontSize: '2.2em', }} start={0} end={this.props.team.score}/></strong> <br/> <br/>
              </div>
            {this.renderScoreRibbon()} <br/>
          <strong style={{fontSize: '1.5em'}}>{this.renderPlacement()}</strong> <br/> <br />
          </div>
          <div className='history-card-col'>
            <p id='pacifico' style={{fontSize: '20px'}}>Prize:</p>
            <strong>{this.renderPrize()}/{this.props.team.contest.prize} Flatcoin</strong>
          </div>
        </div>

        <div style={{marginTop: '-30px'}} className='history-card-row'>
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

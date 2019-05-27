import React from 'react'
import Scorecard from './Scorecard'
import { connect } from 'react-redux'

class HistoryCard extends React.Component {

  renderScoreRibbon = () => {
    const currentContest = this.props.contests.find(contest => contest.id === this.props.team.contest.id)
    const sortedScores = currentContest ? currentContest.sorted_scores : null
    const place = sortedScores ? sortedScores.indexOf(this.props.team.score) + 1 : null

    if (place === 1) {
      return <img height='50px' alt='ribbon' src='1st-place-medal.svg' />
    } else if (place === 2) {
      return <img height='50px' alt='ribbon' src='2nd-place-medal.svg' />
    } else if (place === 3) {
      return <img height='50px' alt='ribbon' src='3rd-place-medal.svg' />
    } else {
      return <span className='emoji' aria-label='perservering-face' role="img">😣</span>
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


  renderPrize() {
    const currentContest = this.props.contests.find(contest => contest.id === this.props.team.contest.id)

    if (currentContest && this.props.team.score === currentContest.high_score) {
      return this.props.team.contest.prize
    } else {
      return 0
    }
  }

  transformDate = (date) => {
    let yyyy = date.slice(0,4)
    let mm = date.slice(5,7)
    let dd = date.slice(8,10)

    if (mm.slice(0,1) === '0' && dd.slice(0,1) === '0') {
      return `${mm.slice(1,2)}/${dd.slice(1,2)}/${yyyy}`
    } else if (mm.slice(0,1) === '0') {
      return `${mm.slice(1,2)}/${dd}/${yyyy}`
    } else if (dd.slice(0,1) === '0') {
      return `${mm}/${dd.slice(1,2)}/${yyyy}`
    } else {
      return `${mm}/${dd}/${yyyy}`
    }
  }

  render() {
    return (
      <div className="history-card-container">
        <h2 id='pacifico'>Team {this.props.team.name}</h2>

        <div className='history-card-row'>
          <div  className='history-card-col'>
            <span id='secular'>Contest:</span><br/>
            <p>{this.props.team.contest.name}</p>
            <p>Started: {this.transformDate(this.props.team.contest.start_date)}</p>
            Ended: {this.transformDate(this.props.team.contest.end_date)}
          </div>
          <div className='history-card-col'>
            <span id='secular'>Total Score:</span> <br />
            {this.props.team.score} points <br />
            {this.renderScoreRibbon()} <br/>
            {this.renderPlacement()} <br/> <br />
          </div>
          <div className='history-card-col'>
            <p id='secular'>Prize:</p>
            <p>{this.renderPrize()}/{this.props.team.contest.prize} Flatcoin</p>
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

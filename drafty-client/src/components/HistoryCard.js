import React from 'react'
import Scorecard from './Scorecard'
import { connect } from 'react-redux'
class HistoryCard extends React.Component {

  render() {

    const wp1 = this.props.weatherpeople.filter(wp => wp.id === this.props.team[0].weatherperson_id)
    const wp2 = this.props.weatherpeople.filter(wp => wp.id === this.props.team[1].weatherperson_id)
    const wp3 = this.props.weatherpeople.filter(wp => wp.id === this.props.team[2].weatherperson_id)

    const contestID = this.props.team[0].contest_id
    const currentContest = this.props.contests.filter(contest => contest.id === contestID)[0]



    return (
      <div className="history-card-container">
        <h3>{currentContest.name}</h3>
        <div className='history-card-row'>
          <div className='history-card-col'>
            <Scorecard wp1={wp1}/>
          </div>
          <div className='history-card-col'>
            <Scorecard wp2={wp2}/>
          </div>
          <div className='history-card-col'>
            <Scorecard wp3={wp3}/>
          </div>
        </div>
        <div className='history-card-row'>
          <div className='history-card-col'>
            Started: {currentContest.start_date}
            <br />
            Ended: {currentContest.end_date}
          </div>
          <div className='history-card-col'>
            Total Score: <br />
            xx points <br />
          <img height='50px' alt='ribbon' src='ribbon-3.png' />
          </div>
          <div className='history-card-col'>
            Prize: <br />
            {currentContest.prize} Flatcoin
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

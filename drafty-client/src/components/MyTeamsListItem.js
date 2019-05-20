import React from 'react'
import {connect} from 'react-redux'

class MyTeamsListItem extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/weatherpeople')
      .then(res => res.json())
      .then(wp => this.props.setWeatherpeople(wp))
  }


  render() {

    const wp1 = this.props.weatherpeople.filter(wp => wp.id === this.props.team[0].weatherperson_id)
    const wp2 = this.props.weatherpeople.filter(wp => wp.id === this.props.team[1].weatherperson_id)
    const wp3 = this.props.weatherpeople.filter(wp => wp.id === this.props.team[2].weatherperson_id)

    const contestID = this.props.team[0].contest_id
    const currentContest = this.props.contests.filter(contest => contest.id === contestID)[0]

    return (
      wp1[0]

      ?

      <div className='my-teams-li'>
        <div className='my-teams-li-col'>
          <img height='50px' alt='wp-thumb' src='https://static.thenounproject.com/png/630729-200.png' /> <br/>
          {wp1[0].name}
        </div>
        <div className='my-teams-li-col'>
          <img height='50px' alt='wp-thumb' src='https://static.thenounproject.com/png/630729-200.png' /> <br/>
          {wp2[0].name}
        </div >
        <div className='my-teams-li-col'>
          <img height='50px' alt='wp-thumb' src='https://static.thenounproject.com/png/630729-200.png' /> <br/>
          {wp3[0].name}
        </div>
        <div className='my-teams-li-col'>
          Contest: {currentContest.name}<br/>
          Starts: {currentContest.start_date.slice(5)}<br/>
          Ends: {currentContest.end_date.slice(5)}<br/>
          Prize: {currentContest.prize}<br/>
        </div>
      </div>

      :

      <div>LOADING...</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    weatherpeople: state.weatherpeople.weatherpeople,
    contests: state.contests.contests
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setWeatherpeople: wp => dispatch({type: 'SET_WEATHERPEOPLE', payload: wp})
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(MyTeamsListItem)

import React from 'react'

class MyTeamsListItem extends React.Component {

  render() {
    return (
      <div className='my-teams-li'>
        <div className='my-teams-li-col'>
          <img height='50px' alt='wp-thumb' src='https://static.thenounproject.com/png/630729-200.png' /> <br/>
          {this.props.team.weatherpeople[0].name}
        </div>
        <div className='my-teams-li-col'>
          <img height='50px' alt='wp-thumb' src='https://static.thenounproject.com/png/630729-200.png' /> <br/>
          {this.props.team.weatherpeople[1].name}
        </div >
        <div className='my-teams-li-col'>
          <img height='50px' alt='wp-thumb' src='https://static.thenounproject.com/png/630729-200.png' /> <br/>
          {this.props.team.weatherpeople[2].name}
        </div>
        <div className='my-teams-li-col'>
          {/*Contest: {currentContest.name}<br/>
          Starts: {currentContest.start_date.slice(5)}<br/>
          Ends: {currentContest.end_date.slice(5)}<br/>
          Prize: {currentContest.prize}<br/>*/}
        </div>
      </div>
    )
  }
}

export default MyTeamsListItem

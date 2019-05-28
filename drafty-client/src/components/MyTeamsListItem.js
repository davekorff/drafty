import React from 'react'
import transformDate from '../helpers/transformDate'
import MyTeamsWeatherperson from './MyTeamsWeatherperson'

class MyTeamsListItem extends React.Component {

  render() {
    return (
      <div className='my-teams-li'>
        {this.props.team.weatherpeople.map(weatherperson => <MyTeamsWeatherperson key={weatherperson.id} weatherperson={weatherperson}/>)}
        <div className='my-teams-li-col' id="my-teams-li-contest-info">
          <p style={{fontSize:'18px', fontFamily: 'Pacifico, cursive'}}> Team {this.props.team.name}</p>
          Contest: <br/>
          {this.props.team.contest.name}
          <p>Prize: {this.props.team.contest.prize}</p>
          Starts: {transformDate(this.props.team.contest.start_date).slice(0, -5)}<br/>
          <p>Ends: {transformDate(this.props.team.contest.end_date).slice(0, -5)}</p>
        </div>
      </div>
    )
  }
}

export default MyTeamsListItem

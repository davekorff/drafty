import React from 'react'
import transformDate from '../helpers/transformDate'

class MyTeamsListItem extends React.Component {

  // transformDate = date => {
  //   let yyyy = date.slice(0,4)
  //   let mm = date.slice(5,7)
  //   let dd = date.slice(8,10)
  //
  //   if (mm.slice(0,1) === '0' && dd.slice(0,1) === '0') {
  //     return `${mm.slice(1,2)}/${dd.slice(1,2)}/${yyyy}`
  //   } else if (mm.slice(0,1) === '0') {
  //     return `${mm.slice(1,2)}/${dd}/${yyyy}`
  //   } else if (dd.slice(0,1) === '0') {
  //     return `${mm}/${dd.slice(1,2)}/${yyyy}`
  //   } else {
  //     return `${mm}/${dd}/${yyyy}`
  //   }
  // }

  render() {
    return (
      <div className='my-teams-li'>
        <div className='my-teams-li-col' id='my-teams-li-wp'>
          <img height='95px' alt='wp-thumb' src={this.props.team.weatherpeople[0].img_url_sm} /> <br/>
          {this.props.team.weatherpeople[0].name}<br/>
          {this.props.team.weatherpeople[0].station}
        </div>
        <div className='my-teams-li-col' id='my-teams-li-wp'>
          <img height='95px' alt='wp-thumb' src={this.props.team.weatherpeople[1].img_url_sm} /> <br/>
          {this.props.team.weatherpeople[1].name}<br/>
          {this.props.team.weatherpeople[1].station}
        </div >
        <div className='my-teams-li-col' id='my-teams-li-wp'>
          <img height='95px' alt='wp-thumb' src={this.props.team.weatherpeople[2].img_url_sm} /> <br/>
          {this.props.team.weatherpeople[2].name}<br/>
          {this.props.team.weatherpeople[2].station}
        </div>
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

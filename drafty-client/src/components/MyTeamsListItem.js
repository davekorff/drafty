import React from 'react'

class MyTeamsListItem extends React.Component {

  transformDate = date => {
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
      <div className='my-teams-li'>
        <div className='my-teams-li-col'>
          <img height='85px' alt='wp-thumb' src={this.props.team.weatherpeople[0].img_url_sm ? this.props.team.weatherpeople[0].img_url_sm : 'https://static.thenounproject.com/png/630729-200.png' } /> <br/>
          {this.props.team.weatherpeople[0].name}
        </div>
        <div className='my-teams-li-col'>
          <img height='85px' alt='wp-thumb' src={this.props.team.weatherpeople[1].img_url_sm ? this.props.team.weatherpeople[1].img_url_sm : 'https://static.thenounproject.com/png/630729-200.png' } /> <br/>
          {this.props.team.weatherpeople[1].name}
        </div >
        <div className='my-teams-li-col'>
          <img height='85px' alt='wp-thumb' src={this.props.team.weatherpeople[2].img_url_sm ? this.props.team.weatherpeople[2].img_url_sm : 'https://static.thenounproject.com/png/630729-200.png' } /> <br/>
          {this.props.team.weatherpeople[2].name}
        </div>
        <div className='my-teams-li-col' id="my-teams-li-contest-info">
          <p style={{fontSize:'18px'}}>{this.props.team.name}</p>
          {this.props.team.contest.name}
          <p>Prize: {this.props.team.contest.prize}</p>
          Starts: {this.transformDate(this.props.team.contest.start_date).slice(0, -5)}<br/>
          <p>Ends: {this.transformDate(this.props.team.contest.end_date).slice(0, -5)}</p>
        </div>
      </div>
    )
  }
}

export default MyTeamsListItem

import React from 'react'

class MyTeamsListItem extends React.Component {

  render() {
    console.log(this.props);
    return (
      this.props.team.weatherpeople.length !== 0

      ?

      <div className='my-teams-li'>
        <div className='my-teams-li-col'>
          <img height='50px' alt='wp-thumb' src={this.props.team.weatherpeople[0].img_url_sm ? this.props.team.weatherpeople[0].img_url_sm : 'https://static.thenounproject.com/png/630729-200.png' } /> <br/>
          {this.props.team.weatherpeople[0].name}
        </div>
        <div className='my-teams-li-col'>
          <img height='50px' alt='wp-thumb' src={this.props.team.weatherpeople[1].img_url_sm ? this.props.team.weatherpeople[1].img_url_sm : 'https://static.thenounproject.com/png/630729-200.png' } /> <br/>
          {this.props.team.weatherpeople[1].name}
        </div >
        <div className='my-teams-li-col'>
          <img height='50px' alt='wp-thumb' src={this.props.team.weatherpeople[2].img_url_sm ? this.props.team.weatherpeople[2].img_url_sm : 'https://static.thenounproject.com/png/630729-200.png' } /> <br/>
          {this.props.team.weatherpeople[2].name}
        </div>
        <div className='my-teams-li-col'>
          Contest: {this.props.team.contest.name}<br/>
          Starts: {this.props.team.contest.start_date.slice(5)}<br/>
          Ends: {this.props.team.contest.end_date.slice(5)}<br/>
          Prize: {this.props.team.contest.prize}<br/>
        </div>
      </div>

      :

      <div className='make-a-team' id='secular' style={{marginTop: '50px'}}>
        <center>Make a team...</center>
      </div>
    )
  }
}

export default MyTeamsListItem

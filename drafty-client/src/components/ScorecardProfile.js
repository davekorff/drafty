import React from 'react'

class ScorecardProfile extends React.Component {

  render() {
    return (
      <div className='scorecard-col'>
        <img height='85px' alt='wp-thumb' src={this.props.weatherperson.img_url_sm} />
        <br/>
        <span id="secular">{this.props.weatherperson.name}</span><br/>
        {this.props.weatherperson.station} - {this.props.weatherperson.city}
      </div>
    )
  }
}

export default ScorecardProfile

import React from 'react'

class WeatherpersonProfileCard extends React.Component {

  render() {
    return (
      <button className='wp-button' onClick={() => this.props.handleProfileClick(this.props.weatherperson.id)}>
          <img height='85px' alt='wp-thumb' src={this.props.weatherperson.img_url_sm} />
          <br/>
          {this.props.weatherperson.name} <br/>
          {this.props.weatherperson.station} <br/>
          {this.props.weatherperson.city}
      </button>
    )
  }
}

export default WeatherpersonProfileCard

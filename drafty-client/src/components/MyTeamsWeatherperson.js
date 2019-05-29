import React from 'react'

class MyTeamsWeatherperson extends React.Component {

  render() {
    return (
      <div className='my-teams-li-col' id='my-teams-li-wp'>
        <img height='95px' alt='wp-thumb' src={this.props.weatherperson.img_url_sm} /> <br/>
        {this.props.weatherperson.name}<br/>
        {this.props.weatherperson.station}
      </div>
    )
  }
}

export default MyTeamsWeatherperson

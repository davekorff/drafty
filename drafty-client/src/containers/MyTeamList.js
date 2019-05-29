import React from 'react'
import MyTeamListItem from '../components/MyTeamListItem'

class MyTeamList extends React.Component {

  renderMyTeam = () => {
    if (this.props.myWeatherpeople && this.props.myWeatherpeople.length !== 0) {
      return this.props.myWeatherpeople.map(weatherperson => {
        return <MyTeamListItem currentContest={this.props.currentContest} key={weatherperson.id} weatherperson={weatherperson}/>
      })
    }
  }

  render() {
    return (
      <div className='my-team-list-container'>
        <h3 id='pacifico'>Your Team</h3>
        {this.props.myWeatherpeople && this.props.myWeatherpeople.length < 3 ? <span style={{marginTop: '20px'}}>Draft three weatherpeople to complete your team...</span> : null}
        {this.renderMyTeam()}
      </div>
    )
  }
}

export default MyTeamList

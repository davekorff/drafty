import React from 'react'
import MyTeamsListItem from '../components/MyTeamsListItem'

class MyTeamsList extends React.Component {

  render() {
    return (
      <div className='my-teams-list-container'>
        <h1>My Teams</h1>
        <MyTeamsListItem/>
        <MyTeamsListItem/>
      </div>
    )
  }
}

export default MyTeamsList

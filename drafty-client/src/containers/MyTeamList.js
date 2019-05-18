import React from 'react'
import MyTeamListItem from '../components/MyTeamListItem'

class MyTeamList extends React.Component {

  render() {
    return (
      <div className='my-team-list-container'>
        <h1>My Team</h1>
        <MyTeamListItem/>
        <MyTeamListItem/>
        <MyTeamListItem/>
      </div>
    )
  }
}

export default MyTeamList

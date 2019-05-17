import React from 'react'
import MyTeamsListItem from '../components/MyTeamsListItem'

class DraftLobby extends React.Component {

  render() {

    return (
      <div className='my-teams-container'>
        <h1>My Teams</h1>
        <MyTeamsListItem/>
        <MyTeamsListItem/>
      </div>
    )
  }
}

export default DraftLobby

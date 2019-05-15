import React from 'react'
import MyTeamsCard from '../components/MyTeamsCard'

class DraftLobby extends React.Component {

  render() {

    return (
      <div className='my-teams-container'>
        <h1>My Teams</h1>
        <MyTeamsCard/>
        <MyTeamsCard/>
      </div>
    )
  }
}

export default DraftLobby

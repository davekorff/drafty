import React from 'react'
import DraftLobby from '../components/lobby/DraftLobby'
import MyTeams from '../components/lobby/MyTeams'

class LobbyContainer extends React.Component {

  render() {

    return (
      <div className='lobby-row'>
        <div className='lobby-column'>
          <DraftLobby />
        </div>
        <div className='lobby-column'>
          <MyTeams />
        </div>
      </div>
    )
  }
}

export default LobbyContainer

import React from 'react'
import DraftLobbyContainer from './DraftLobbyContainer'
import MyTeamsContainer from './MyTeamsContainer'

class LobbyContainer extends React.Component {

  render() {

    return (
      <div className='main-lobby-row'>
        <div className='main-lobby-col'>
          <DraftLobbyContainer />
        </div>
        <div className='main-lobby-col'>
          <MyTeamsContainer />
        </div>
      </div>
    )
  }
}

export default LobbyContainer

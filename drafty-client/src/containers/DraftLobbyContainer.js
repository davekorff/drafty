import React from 'react'
import DraftLobbyCard from '../components/DraftLobbyCard'

class DraftLobby extends React.Component {

  render() {

    return (
      <div className='draft-lobby-container'>
        <h1>Draft Lobby</h1>
        <DraftLobbyCard/>
        <DraftLobbyCard/>
        <DraftLobbyCard/>
      </div>
    )
  }
}

export default DraftLobby

import React from 'react'
import ContestListContainer from './ContestListContainer'
import MyTeamsContainer from './MyTeamsContainer'

class MainLobbyContainer extends React.Component {

  render() {
    return (
      <div className='main-lobby-row'>
        <div className='main-lobby-col'>
          <ContestListContainer setCurrentContest={this.props.setCurrentContest} />
        </div>
        <div className='main-lobby-col'>
          <MyTeamsContainer />
        </div>
      </div>
    )
  }
}

export default MainLobbyContainer

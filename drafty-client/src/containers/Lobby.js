import React from 'react'
import ContestList from './ContestList'
import MyTeamsList from './MyTeamsList'

class Lobby extends React.Component {

  render() {

    return (
      <div className='lobby-row'>
        <div className='lobby-col'>
          <ContestList history={this.props.history} />
        </div>
        <div className='lobby-col'>
          <MyTeamsList />
        </div>
      </div>
    )
  }
}

export default Lobby

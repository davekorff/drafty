import React from 'react'
import MyTeamListItem from '../components/MyTeamListItem'
import { connect } from 'react-redux'

class MyTeamList extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/drafts')
      .then(res => res.json())
      .then(drafts => this.props.setDrafts(drafts))
  }

  renderMyTeam = () => {
    if (this.props.drafts) {
      return this.props.drafts.map(draft => {
        if (draft.user_id === this.props.currentUser.id && draft.contest_id === this.props.currentContest.id) {
          return <MyTeamListItem draft={draft} key={draft.id} />
        }
      })
    }
  }


  render() {
    return (
      <div className='my-team-list-container'>
        <h1>My Team</h1>
        {this.renderMyTeam()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentContest: state.contests.currentContest,
    currentUser: state.user.currentUser,
    drafts: state.drafts.drafts,
    weatherpeople: state.weatherpeople.weatherpeople
  }
}

function mapDisptachToProps(dispatch) {
  return {
    setDrafts: drafts => dispatch({type: 'SET_DRAFTS', payload: drafts})
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(MyTeamList)

import React from 'react'
import MyTeamsListItem from '../components/MyTeamsListItem'
import { connect } from 'react-redux'
import uuid from 'uuid'

class MyTeamsList extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/drafts')
      .then(res => res.json())
      .then(drafts => this.props.setDrafts(drafts))
  }

  render() {

    const currentUsersDrafts = this.props.drafts.filter(draft => draft.user_id === this.props.currentUser.id)

    const currentUsersTeams = this.props.contests.map(contest => {
      let team = []
      currentUsersDrafts.forEach(draft => {
        if (draft.contest_id === contest.id) {
          team.push(draft)
        }
      })
      return team
    })

    return (
      <div className='my-teams-list-container'>
        <h1>My Teams</h1>
        {currentUsersTeams.map(team => team.length === 3 ? <MyTeamsListItem key={uuid()} team={team}/> : null)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    drafts: state.drafts.drafts,
    currentUser: state.user.currentUser,
    contests: state.contests.contests
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setDrafts: drafts => dispatch({type: 'SET_DRAFTS', payload: drafts})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTeamsList)

import React from 'react'
import MyTeamsListItem from '../components/MyTeamsListItem'
import { connect } from 'react-redux'
import uuid from 'uuid'

class MyTeamsList extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/teams')
      .then(res => res.json())
      .then(teams => this.props.setTeams(teams))
  }

  render() {

    const currentUsersDrafts = this.props.drafts.filter(draft => draft.user_id === this.props.currentUser.id)

    const currentUsersTeams = this.props.contests.map(contest => {
      let team = []
      currentUsersDrafts.forEach(draft => {
        if (draft.contest_id === contest.id && contest.end_date > this.props.currentDate) {
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
    contests: state.contests.contests,
    date: state.date.currentDate
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setTeams: teams => dispatch({type: 'SET_TEAMS', payload: teams})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTeamsList)

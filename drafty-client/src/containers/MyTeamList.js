import React from 'react'
import MyTeamListItem from '../components/MyTeamListItem'
import { connect } from 'react-redux'

class MyTeamList extends React.Component {

  renderMyTeam = () => {
    if (this.props.myWeatherpeople && this.props.myWeatherpeople.length !== 0) {
      return this.props.myWeatherpeople.map(weatherperson => {
        return <MyTeamListItem currentContest={this.props.currentContest} key={weatherperson.id} weatherperson={weatherperson} handleClickUndraft={this.handleClickUndraft}/>
      })
    }
  }

  // When user clicks 'undraft' button, delete that draft
  handleClickUndraft = (wp_id, team_id) => {
    const draft = this.props.drafts.filter(draft => draft.weatherperson_id === wp_id && draft.team_id === team_id)[0]
    fetch('http://localhost:3000/api/v1/drafts/' + draft.id, {
      method: 'DELETE'
    })
  }

  // handleDeleteDraft = () => {
  //
  // }

  render() {
    return (
      <div className='my-team-list-container'>
        <h3 id='pacifico'>Your Team</h3>
        {this.props.myWeatherpeople && this.props.myWeatherpeople.length < 3 ? <span style={{marginTop: '20px'}}>Draft three weatherpeople to complete your team...</span> : null}
        {this.renderMyTeam()}
      </div>
    )
  }
}

function mapStateToProps(state) {
	return {
		drafts: state.drafts.drafts
	}
}

export default connect(mapStateToProps)(MyTeamList)

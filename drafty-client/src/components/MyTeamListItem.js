import React from 'react'
import { connect } from 'react-redux'
import DraftWeatherTile from './DraftWeatherTile'

class MyTeamListItem extends React.Component {

  renderWeatherperson = () => {
    return this.props.weatherpeople.find(weatherperson => weatherperson.id === this.props.weatherperson.id)
  }

  render() {
    return (
      <div className='my-team-li' >
        <div id='my-team-list-wp-info' className='my-team-li-col' style={{fontSize: '14px'}}>
          <img height='75px' alt='wp-thumb' src={this.renderWeatherperson().img_url_sm} /><br/>
          {this.renderWeatherperson().name} <br/>
          {this.renderWeatherperson().station} <br/>
          {this.renderWeatherperson().city}
        </div>
        <DraftWeatherTile index={0} currentContest={this.props.currentContest} weatherperson={this.renderWeatherperson()}/>
        <DraftWeatherTile index={1} currentContest={this.props.currentContest} weatherperson={this.renderWeatherperson()}/>
        <DraftWeatherTile index={2} currentContest={this.props.currentContest} weatherperson={this.renderWeatherperson()}/>
        <DraftWeatherTile index={3} currentContest={this.props.currentContest} weatherperson={this.renderWeatherperson()}/>
        <DraftWeatherTile index={4} currentContest={this.props.currentContest} weatherperson={this.renderWeatherperson()}/>
        <button variant="contained" size="small" color="primary" id='draft-button' onClick={() => this.props.handleClickUndraft(this.renderWeatherperson().id, this.props.currentTeam.id)}>
          Undraft
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    weatherpeople: state.weatherpeople.weatherpeople,
    currentContest: state.contests.currentContest,
    currentTeam: state.teams.currentTeam
  }
}

export default connect(mapStateToProps)(MyTeamListItem)

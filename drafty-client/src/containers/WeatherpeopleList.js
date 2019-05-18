import React from 'react'
import WeatherpeopleListItem from '../components/WeatherpeopleListItem'
import { connect } from 'react-redux'

class WeatherpeopleList extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/weatherpeople')
      .then(res => res.json())
      .then(weatherpeople => this.props.setWeatherpeople(weatherpeople))
  }

  renderWeatherpeople() {
    if (this.props.weatherpeople) {
      return this.props.weatherpeople.weatherpeople.map(weatherperson => {
        if (this.props.drafts.filter(draft => draft.user_id === this.props.currentUser.id && draft.weatherperson_id === weatherperson.id && draft.contest_id === this.props.currentContest.id).length === 0) {
          return <WeatherpeopleListItem key={weatherperson.id} weatherperson={weatherperson} />
        }
      })
    }
  }


  render() {
    return (
      <div className='weatherpeople-list-container'>
        <h1>Weatherpeople</h1>
        {this.renderWeatherpeople()}
      </div>
    )
  }
}

function mapStateToProps(state) {
	return {
		weatherpeople: state.weatherpeople,
    currentContest: state.contests.currentContest,
    currentUser: state.user.currentUser,
    drafts: state.drafts.drafts
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setWeatherpeople: weatherpeople => dispatch({type: 'SET_WEATHERPEOPLE', payload: weatherpeople})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherpeopleList)

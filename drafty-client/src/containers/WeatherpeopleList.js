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
    return this.props.weatherpeople ? this.props.weatherpeople.weatherpeople.map(weatherperson => <WeatherpeopleListItem key={weatherperson.id} weatherperson={weatherperson} />) : <h1>Loading...</h1>
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
		weatherpeople: state.weatherpeople
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setWeatherpeople: weatherpeople => dispatch({type: 'SET_WEATHERPEOPLE', payload: weatherpeople})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherpeopleList)

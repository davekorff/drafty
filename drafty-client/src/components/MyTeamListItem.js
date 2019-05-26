// TODO: FIX THIS


import React from 'react'
import { connect } from 'react-redux'

class MyTeamListItem extends React.Component {

  renderWeatherperson = () => {
    return this.props.weatherpeople.find(weatherperson => weatherperson.id === this.props.weatherperson.id)
  }

  renderWeather = index => {
    const weatherperson = this.props.weatherpeople.find(weatherperson => weatherperson.id === this.props.weatherperson.id)
    const thisWeeksForecasts = weatherperson.forecasts.filter(forecast => forecast.date >= this.props.currentContest.start_date && forecast.date <= this.props.currentContest.end_date)

    if (thisWeeksForecasts[index].predicted_weather === 'T-storm') {
      return (
        <div className="icon thunder-storm">
          <div className="cloud"></div>
          <div className="lightning">
            <div className="bolt"></div>
            <div className="bolt"></div>
          </div>
        </div>
      )
    } else if (thisWeeksForecasts[index].predicted_weather === 'Sunny') {
      return (
        <div className="icon sunny">
          <div className="sun">
            <div className="rays"></div>
          </div>
        </div>
      )
    } else if (thisWeeksForecasts[index].predicted_weather === 'Cloudy') {
      return (
        <div className="icon cloudy">
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>
      )
    } else if (thisWeeksForecasts[index].predicted_weather === 'Rain') {
      return (
        <div className="icon rainy">
          <div className="cloud"></div>
          <div className="rain"></div>
        </div>
      )
    }
  }

  renderTemp = index => {
    const weatherperson = this.props.weatherpeople.find(weatherperson => weatherperson.id === this.props.weatherperson.id)
    const thisWeeksForecasts = weatherperson.forecasts.filter(forecast => forecast.date >= this.props.currentContest.start_date && forecast.date <= this.props.currentContest.end_date)
    return thisWeeksForecasts[index].predicted_temp
  }

  renderDate = index => {
    const weatherperson = this.props.weatherpeople.find(weatherperson => weatherperson.id === this.props.weatherperson.id)
    const thisWeeksForecasts = weatherperson.forecasts.filter(forecast => forecast.date >= this.props.currentContest.start_date && forecast.date <= this.props.currentContest.end_date)
    const date = this.transformDate(thisWeeksForecasts[index].date)
    return date.slice(0, -5)
  }

  transformDate = (date) => {
    let yyyy = date.slice(0,4)
    let mm = date.slice(5,7)
    let dd = date.slice(8,10)

    if (mm.slice(0,1) === '0' && dd.slice(0,1) === '0') {
      return `${mm.slice(1,2)}/${dd.slice(1,2)}/${yyyy}`
    } else if (mm.slice(0,1) === '0') {
      return `${mm.slice(1,2)}/${dd}/${yyyy}`
    } else if (dd.slice(0,1) === '0') {
      return `${mm}/${dd.slice(1,2)}/${yyyy}`
    } else {
      return `${mm}/${dd}/${yyyy}`
    }
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
        <div id='weatherpeople-li-weather-col' className='my-team-li-col'>
          <div className='forecast-box'>
            {this.renderWeather(0)}
          </div>
          {this.renderTemp(0)}℉ <br/>
          mon <br/>
        {this.renderDate(0)}
        </div >
        <div id='weatherpeople-li-weather-col' className='my-team-li-col'>
          <div className='forecast-box'>
            {this.renderWeather(1)}
          </div>
          {this.renderTemp(1)}℉ <br/>
          tue <br/>
        {this.renderDate(1)}
        </div>
        <div id='weatherpeople-li-weather-col' className='my-team-li-col'>
          <div className='forecast-box'>
            {this.renderWeather(2)}
          </div>
          {this.renderTemp(2)}℉ <br/>
          wed <br/>
        {this.renderDate(2)}
        </div>
        <div id='weatherpeople-li-weather-col' className='my-team-li-col'>
          <div className='forecast-box'>
            {this.renderWeather(3)}
          </div>
          {this.renderTemp(3)}℉ <br/>
          thu <br/>
        {this.renderDate(3)}
        </div>
        <div id='weatherpeople-li-weather-col' className='my-team-li-col'>
          <div className='forecast-box'>
            {this.renderWeather(4)}
          </div>
          {this.renderTemp(4)}℉ <br/>
          fri <br/>
        {this.renderDate(4)}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    weatherpeople: state.weatherpeople.weatherpeople,
    currentContest: state.contests.currentContest,
  }
}

export default connect(mapStateToProps)(MyTeamListItem)

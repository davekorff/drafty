import React from 'react'
import { connect } from 'react-redux'

class MyTeamListItem extends React.Component {

  // componentDidMount() {
  //   const weatherperson = this.props.weatherpeople.filter(wp => wp.id === this.props.draft.weatherperson_id)[0]
  // }
  //


  render() {
    const weatherperson = this.props.weatherpeople.filter(wp => wp.id === this.props.draft.weatherperson_id)[0]

    return (
      weatherperson

      ?

      <div className='my-teams-li'>
        <div className='my-teams-li-col'>
          <img height='50px' alt='wp-thumb' src='https://static.thenounproject.com/png/630729-200.png' /> <br/>
          {weatherperson.name} <br/>
          station <br/>
          city
        </div>
        <div className='my-teams-li-col'>
          <div className='forecast-box'>
            monForecast
          </div>
          monTemp <br/>
          mon <br/>
          monDate
        </div >
        <div className='my-teams-li-col'>
          <div className='forecast-box'>
            tueForecast
          </div>
          tueTemp <br/>
          tue <br/>
          tueDate
        </div>
        <div className='my-teams-li-col'>
          <div className='forecast-box'>
            wedForecast
          </div>
          wedTemp <br/>
          wed <br/>
          wedDate
        </div>
        <div className='my-teams-li-col'>
          <div className='forecast-box'>
            thuForecast
          </div>
          thuTemp <br/>
          thu <br/>
          thuDate
        </div>
        <div className='my-teams-li-col'>
          <div className='forecast-box'>
            friForecast
          </div>
          friTemp <br/>
          fri <br/>
          friDate
        </div>
      </div>

      :

      <div>LOADING...</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    weatherpeople: state.weatherpeople.weatherpeople
  }
}

export default connect(mapStateToProps)(MyTeamListItem)

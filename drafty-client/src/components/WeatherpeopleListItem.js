import React from 'react'

class WeatherpeopleListItem extends React.Component {



  monForecast = 'x'
  tueForecast = 'x'
  wedForecast = 'x'
  thuForecast = 'x'
  friForecast = 'x'

  monTemp = '50'
  tueTemp = '50'
  wedTemp = '50'
  thuTemp = '50'
  friTemp = '50'

  monDate = '5/20'
  tueDate = '5/21'
  wedDate = '5/22'
  thuDate = '5/23'
  friDate = '5/24'

  render() {

    return (
      <div className='my-teams-li'>
        <div className='my-teams-li-col'>
          <img height='50px' alt='wp-thumb' src='https://static.thenounproject.com/png/630729-200.png' /> <br/>
          name
        </div>
        <div className='my-teams-li-col'>
          <div className='forecast-box'>
            {this.monForecast}
          </div>
          {this.monTemp} <br/>
          mon <br/>
          {this.monDate}
        </div >
        <div className='my-teams-li-col'>
          <div className='forecast-box'>
            {this.monForecast}
          </div>
          {this.tueTemp} <br/>
          tue <br/>
          {this.tueDate}
        </div>
        <div className='my-teams-li-col'>
          <div className='forecast-box'>
            {this.monForecast}
          </div>
          {this.wedTemp} <br/>
          wed <br/>
          {this.wedDate}
        </div>
        <div className='my-teams-li-col'>
          <div className='forecast-box'>
            {this.monForecast}
          </div>
          {this.thuTemp} <br/>
          thu <br/>
          {this.thuDate}
        </div>
        <div className='my-teams-li-col'>
          <div className='forecast-box'>
            {this.monForecast}
          </div>
          {this.friTemp} <br/>
          fri <br/>
          {this.friDate}
        </div>
        <button className='my-teams-li-col'>
          Draft
        </button>
      </div>
    )
  }
}

export default WeatherpeopleListItem

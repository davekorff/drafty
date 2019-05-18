import React from 'react'

class MyTeamListItem extends React.Component {

  render() {

    return (
      <div className='my-teams-li'>
        <div className='my-teams-li-col'>
          <img height='50px' alt='wp-thumb' src='https://static.thenounproject.com/png/630729-200.png' /> <br/>
          name <br/>
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
    )
  }
}

export default MyTeamListItem

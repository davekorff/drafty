import React from 'react'

class Scorecard extends React.Component {

  render() {
    console.log(this.props);

    return (
      <div className='scorecard-container'>
        <div className='scorecard-col'>
          WP
        </div>
        <div className='scorecard-col'>
          Mon <br />
          ✅
        </div >
        <div className='scorecard-col'>
          Tue <br />
          ✅
        </div>
        <div className='scorecard-col'>
          Wed <br />
          ❌
        </div>
        <div className='scorecard-col'>
          Thur <br />
          ✅
        </div>
        <div className='scorecard-col'>
          Fri <br />
          ❌
        </div>
          Score: 50
      </div>
    )
  }
}

export default Scorecard

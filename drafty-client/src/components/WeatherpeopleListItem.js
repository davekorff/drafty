import React from 'react'
import { connect } from 'react-redux'
import ForecastTile from './ForecastTile'

class WeatherpeopleListItem extends React.Component {

  render() {
    return (
      <div className='weatherpeople-li'>
        <div id='weatherperson-info' className='weatherpeople-li-col'>
          <img height='75px' alt='wp-thumb' src={this.props.weatherperson.img_url_sm ? this.props.weatherperson.img_url_sm : 'https://static.thenounproject.com/png/630729-200.png' } />
          <br/>
          {this.props.weatherperson.name} <br/>
          {this.props.weatherperson.station} <br/>
          {this.props.weatherperson.city}
        </div>
        <ForecastTile index={0} currentContest={this.props.currentContest} weatherperson={this.props.weatherperson}/>
        <ForecastTile index={1} currentContest={this.props.currentContest} weatherperson={this.props.weatherperson}/>
        <ForecastTile index={2} currentContest={this.props.currentContest} weatherperson={this.props.weatherperson}/>
        <ForecastTile index={3} currentContest={this.props.currentContest} weatherperson={this.props.weatherperson}/>
        <ForecastTile index={4} currentContest={this.props.currentContest} weatherperson={this.props.weatherperson}/>
        <button variant="contained" size="small" color="primary" id='draft-button' onClick={() => this.props.handleClickDraft(this.props.weatherperson.id)}>
          Draft
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentContest: state.contests.currentContest
  }
}

export default connect(mapStateToProps)(WeatherpeopleListItem)

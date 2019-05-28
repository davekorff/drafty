import React from 'react'
import { Grid } from 'semantic-ui-react'
import WeatherpersonProfileCard from '../components/WeatherpersonProfileCard'
import './Weatherpeople.css'

class Weatherpeople extends React.Component {

  state = {
    selectedWeatherperson: null
  }

  handleProfileClick = id => {
    const selectedWeatherperson = this.props.weatherpeople.find(wp => wp.id === id)
    this.setState({ selectedWeatherperson })
  }

  renderProfileCards = () => {
    return this.props.weatherpeople.map(weatherperson => {
      return (
        <Grid.Column key={weatherperson.id}>
          <WeatherpersonProfileCard weatherperson={weatherperson} handleProfileClick={this.handleProfileClick}/>
        </Grid.Column>
      )
    })
  }

  renderImage = () => {
    if(this.state.selectedWeatherperson) {
      return <img id='wp-img' alt={this.state.selectedWeatherperson.name} src={this.state.selectedWeatherperson.img_url_lg}/>
    }
  }

  renderBio = () => {
    if(this.state.selectedWeatherperson) {
      return (
        <div>
          <h4 style={{margin: 'auto'}}>About:</h4>
          {this.state.selectedWeatherperson.bio}
          <h4>Education:</h4>
          {this.state.selectedWeatherperson.education}
        </div>
      )
    }
  }

  render() {
    return(
      <div className='meet-container'>

        <div className='weatherpeople-index'>
          <Grid columns={this.props.weatherpeople.length}>
            <Grid.Row>
              {this.renderProfileCards()}
            </Grid.Row>
          </Grid>
        </div>

        {this.state.selectedWeatherperson ? null : <div id='wp-index-prompt'>Select a weatherperson to learn more...</div>}

        <div className='weatherpeople-show'>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                {this.renderImage()}
              </Grid.Column>
              <Grid.Column>
                {this.renderBio()}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

      </div>
    )
  }
}

export default Weatherpeople

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
      return (
          <Grid.Column>
            <div>
              <img id='wp-img' alt={this.state.selectedWeatherperson.name} src={this.state.selectedWeatherperson.img_url_lg}/>
            </div>
          </Grid.Column>
      )
    }
  }

  renderBio = () => {
    if(this.state.selectedWeatherperson) {
      return (
          <Grid.Column>
            <div className='wp-bio'>
              <h4 style={{margin: 'auto'}}>About:</h4>
              {this.state.selectedWeatherperson.bio}
              <h4>Education:</h4>
              {this.state.selectedWeatherperson.education}
            </div>
          </Grid.Column>
      )
    }
  }

  renderPrompt = () => {
    if (!this.state.selectedWeatherperson) {
      return <div style={{marginTop: '3%', textAlign: 'center'}}>Select a weatherperson to learn more...</div>
    }
  }

  render() {
    return(
      <div className='meet-container'>
        <div className='weatherpeople-index'>
          <Grid columns={6}>
            <Grid.Row>
              {this.renderProfileCards()}
            </Grid.Row>
          </Grid>
            {this.renderPrompt()}
          <Grid columns={2}>
            <Grid.Row>
              {this.renderImage()}
              {this.renderBio()}
            </Grid.Row>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Weatherpeople

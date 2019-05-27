import React from 'react'
import { Grid } from 'semantic-ui-react'
import WeatherpersonProfileCard from '../components/WeatherpersonProfileCard'
import './Weatherpeople.css'

class Weatherpeople extends React.Component {


  state = {
    selectedWeatherperson: {}
  }

  renderWeatherpeople = () => {
    return this.props.weatherpeople.map(weatherperson => {
      return (
        <Grid.Column key={weatherperson.id}>
          <WeatherpersonProfileCard handleProfileClick={this.handleProfileClick} weatherperson={weatherperson}/>
        </Grid.Column>
      )
    })
  }

  handleProfileClick = id => {
    const selectedWeatherperson = this.props.weatherpeople.find(wp => wp.id === id)
    this.setState({ selectedWeatherperson })
  }


  renderImage = () => {
    if(this.state.selectedWeatherperson.img_url_lg) {
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
    return (
        <Grid.Column>
          <div className='wp-bio'>
            <p>{this.state.selectedWeatherperson.bio}</p>
          </div>
        </Grid.Column>
    )
  }

  render() {
    return(
      <div className='meet-container'>
        <h1 style={{textAlign: 'center', marginBottom: '40px'}}>Meet the Weatherpeople</h1>
        <div className='weatherpeople-index'>
          <Grid columns={6}>
            <Grid.Row>
              {this.renderWeatherpeople()}
            </Grid.Row>
          </Grid>
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

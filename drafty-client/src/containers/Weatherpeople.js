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
              <p>Bio:</p>
              <p>{this.state.selectedWeatherperson.bio}</p>
              <br/>
              <p>Education:</p>
              <p>{this.state.selectedWeatherperson.education}</p>
            </div>
          </Grid.Column>
      )
    }
  }

  render() {
    console.log(this.state);
    return(
      <div className='meet-container'>
        <div className='weatherpeople-index'>
          <Grid columns={6}>
            <Grid.Row>
              {this.renderProfileCards()}
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

import React from 'react'
import { Grid } from 'semantic-ui-react'
import WeatherpersonProfileCard from '../components/WeatherpersonProfileCard'


class Weatherpeople extends React.Component {


  renderWeatherpeople = () => {
    return this.props.weatherpeople.map(weatherperson => {
      return (
        <Grid.Column>
          <WeatherpersonProfileCard weatherperson={weatherperson}/>
        </Grid.Column>
      )
    })
  }

  renderImage = () => {
    return (
        <Grid.Column>
          <div style={{textAlign: 'center', borderStyle: 'solid'}}>BEEF</div>
        </Grid.Column>
    )
  }

  renderBio = () => {
    return (
        <Grid.Column>
          <div style={{textAlign: 'center', borderStyle: 'solid'}}>STEAK</div>
        </Grid.Column>
    )
  }

  render() {
    return(
      <div className='meet-container'>
        <h1 style={{textAlign: 'center', marginBottom: '40px'}}>Meet the Weatherpeople</h1>
        <div className='weatherpeople-index'>
          <Grid columns={5}>
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

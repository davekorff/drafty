import React from 'react'
import WeatherpeopleListItem from '../components/WeatherpeopleListItem'

class WeatherpeopleList extends React.Component {

  render() {
    return (
      <div className='weatherpeople-list-container'>
        <h1>Weatherpeople</h1>
        <WeatherpeopleListItem />
        <WeatherpeopleListItem />
        <WeatherpeopleListItem />
        <WeatherpeopleListItem />
        <WeatherpeopleListItem />
      </div>
    )
  }
}

export default WeatherpeopleList

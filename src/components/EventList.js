import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import Section from './Section'
//import { fetchFilms } from '../actions/film';
import { fetchEvents } from '../actions/event';
import { connect } from 'react-redux'


class EventList extends React.Component{

componentDidMount(){
  console.log('call fetch Film')
//  this.props.fetchFilms()
 this.props.fetchEvents()
}

render(){
  const {events} = this.props
    return(
      <Section title="Past Meetups">
      {events.length <= 0 ?
        <CircularProgress />
        :
        <Grid container spacing={16}>
          {events.slice(0, 3).map(event =>(
            <Grid item xs={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="caption" gutterBottom>
                    {event.created}
                  </Typography>
                  <Typography variant="title" gutterBottom>
                    {event.title}
                  </Typography>
                  <Typography>
                    {event.opening_crawl}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
    }
    </Section>
    )  
  }
}

const mapStateToProps = state => ({
  events: state.events.eventList
})
// console.log(state.events) // { eventList: [] }

// const mapDispatchToProps = dispatch => ({
//   fetchEvents: () => dispatch(fetchEvents())
// })

const mapDispatchToProps = {
  fetchEvents: fetchEvents
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList)


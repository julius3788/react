import React from 'react'
import Typography from '@material-ui/core/Typography'
import Section from './Section'
import { connect } from 'react-redux'

let Footer = (props) => (
    <Section title="Footer">
    <Typography variant="h6" color="primary">
     {props.apps.copyRightYear}
    </Typography>
  </Section>
)

const mapStateToProps = (state) =>{
    return {
      apps: state.apps,
    }
  }
  
  Footer = connect(mapStateToProps)(Footer)

export default Footer
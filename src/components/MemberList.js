import React from 'react'
import Section from './Section'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Link } from 'react-router-dom'
import { fetchMembers } from '../actions/member';
import { connect } from 'react-redux'

const styles = {
  avatarStyle: {
    backgroundColor: 'blue'
  }
}

class MemberList extends React.Component{
  componentDidMount(){
    console.log('call fetch Members')
    this.props.fetchMembers()
  }

  render(){
    const {members} = this.props
    return(
      <Section title="Members">
              {members.length <= 0 ?
                <CircularProgress />
                :
                <List>
                  {members.slice(0, 3).map((member, index) => (
                    <Link key={member.name} to={`/user/${index + 1}`}>
                      <ListItem button>
                        <Avatar style={styles.avatarStyle}>{member.name[0].toUpperCase()}</Avatar>
                        <ListItemText primary={member.name} secondary={member.birth_year} />
                      </ListItem>
                    </Link>
                  ))}
                </List>
              }
            </Section>
    )
  }

}

const mapStateToProps = state => ({
  members: state.members.userData
})

const mapDispatchToProps = dispatch => ({
  fetchMembers: () => dispatch(fetchMembers())
})

export default connect(mapStateToProps,mapDispatchToProps)(MemberList)

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStreams } from '../../actions'

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams()
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div>
          <Link to={`/streams/edit/${stream.id}`}>Edit</Link>
          <Link to={`/streams/delete/${stream.id}`}>Delete</Link>
        </div>
      )
    }
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div key={stream.id}>
          <h3>
            <Link to={`/streams/${stream.id}`}>{stream.title}</Link>
          </h3>
          <p>{stream.description}</p>
          {this.renderAdmin(stream)}
          <hr />
        </div>
      )
    })
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <Link to='/streams/new'>Create stream</Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h1>Streams</h1>
        {this.renderCreate()}
        <hr />
        <div>{this.renderList()}</div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList)

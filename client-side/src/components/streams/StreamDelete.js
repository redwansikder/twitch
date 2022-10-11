import React from 'react'
import Modal from '../Modal'
import history from '../../history'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchStream, deleteStream } from '../../actions'

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />
}

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.params.id)
  }

  renderActions() {
    const { id } = this.props.params
    return (
      <React.Fragment>
        <button onClick={() => this.props.deleteStream(this.props.params.id)}>
          Delete
        </button>
        <Link to='/'>Cancel</Link>
      </React.Fragment>
    )
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Loading....'
    }
    return `Delete  '${this.props.stream.title}' stream?`
  }

  render() {
    return (
      <Modal
        title={'Delete'}
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.params.id] }
}
// export default withParams(StreamDelete)
const newFS = connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
)

export default withParams(newFS)

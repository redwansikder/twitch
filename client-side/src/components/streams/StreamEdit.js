import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'
import { useParams } from 'react-router-dom'

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />
}

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.params.id)
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.params.id, formValues)
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading....</div>
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.params.id] }
}

const newStreamEdit = connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
)

export default withParams(newStreamEdit)

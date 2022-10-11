import React from 'react'
import flv from 'flv.js'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchStream } from '../../actions'

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />
}

class StreamShow extends React.Component {
  constructor(props) {
    super(props)
    this.videoRef = React.createRef()
  }

  componentDidMount() {
    this.props.fetchStream(this.props.params.id)
    this.buildPlayer()
  }

  componentDidUpdate() {
    this.buildPlayer()
  }

  componentWillUnmount() {
    this.player.destroy()
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return
    }
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${this.props.params.id}.flv`,
    })
    this.player.attachMediaElement(this.videoRef.current)
    this.player.load()
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading....</div>
    }
    return (
      <div>
        <video ref={this.videoRef} style={{ width: '100%' }} controls />
        <h1>{this.props.stream.title}</h1>
        <h5>{this.props.stream.description}</h5>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.params.id] }
}

const newStreamShow = connect(mapStateToProps, { fetchStream })(StreamShow)
export default withParams(newStreamShow)

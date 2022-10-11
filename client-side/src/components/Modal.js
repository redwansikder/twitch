import React from 'react'
import ReactDOM from 'react-dom'

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className='overlay'>
      <div onClick={(e) => e.stopPropagation()} className='modal'>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        {props.actions}
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal

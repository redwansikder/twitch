import React from 'react'
import GoogleAuth from './GoogleAuth'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <Link to='/'>StreamLogo</Link>
      <GoogleAuth />
      <hr />
      <hr />
    </div>
  )
}

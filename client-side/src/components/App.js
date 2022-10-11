import React from 'react'
import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Nav from './Nav'
import history from '../history'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'

export default function App() {
  return (
    <HistoryRouter history={history}>
      <Nav />
      <Routes>
        <Route path='/' element={<StreamList />} />
        <Route path='streams/:id' element={<StreamShow />} />
        <Route path='streams/new' element={<StreamCreate />} />
        <Route path='streams/edit/:id' element={<StreamEdit />} />
        <Route path='streams/delete/:id' element={<StreamDelete />} />
      </Routes>
    </HistoryRouter>
  )
}

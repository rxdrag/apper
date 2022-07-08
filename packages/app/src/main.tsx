import 'antd/dist/antd.less'
import React from 'react'
import ReactDOM from 'react-dom'
import Login from './login'

const App = () => {
  return (
    <Login />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
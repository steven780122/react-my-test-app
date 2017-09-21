import React from 'react'
// import TextInput from './TextInput'
import TodoList from './TodoList'

class App extends React.Component {
  render() {
    // return <TextInput initText="開始輸入文字吧！" />
    return <TodoList initText="開始輸入文字吧！" />
  }
}

//輸出App元件
export default App
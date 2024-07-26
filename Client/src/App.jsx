import React from 'react'
import "./App.css"
import { Flex } from 'antd'
const App = () => {
  return (
    <Flex gap="middle" align="start" vertical>
      <Flex className='test' justify="space-evenly" align="center">
        <div>Pic</div>
        <div>Login</div>
      </Flex>
    </Flex>
  );
}

export default App
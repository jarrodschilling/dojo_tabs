import { useState } from 'react'
import Tabs from './components/Tabs'
import TabsForm from './components/TabsForm'
import TabsTest from './components/TabsTest'
import TabsMap from './components/TabsMap'
import './App.css'

function App() {
  // const {tabList, setTabList} = useState([])
  // const stateUpdater = (newValue) => {
  //   setTabList([...tabList, newValue])
  // }

  return (
    <div>
      {/* <Tabs tabList={tabList} setTabList={tabList} />
      <TabsForm stateUpdater={stateUpdater} tabList={tabList} /> */}
      {/* <TabsTest /> */}
      <TabsMap />
    </div>
  )
}

export default App

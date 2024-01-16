import { useState } from "react";

const TabsTest = props => {
    const [tabList, setTabList] = useState([])
    const [tabLength, setTabLength] = useState(0)
    const [tabName, setTabName] = useState("")
    const [tabContent, setTabContent] = useState("")
    
    const handleSubmit = (e) => {
        
        let val = tabLength
        console.log(val)
        for (let i=0; i < val; i++) {
            e.preventDefault()
            let newValue = {
                tabName: "Tab " + i,
                tabContent: "Tab " + i + " content is showing here"
            }
            // console.log(newValue)
            setTabList([...tabList, newValue])
            console.log(tabList)
        }
        setTabLength(0)
        
    }


    return (
        <div>
            <h1>Tabs Test</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="tabList">How Many Tabs?</label>
                <input id="tabList" type="number" value={tabLength} onChange= { (e) => setTabLength(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default TabsTest
import { useState } from "react";

const TabsForm = props => {
    const {stateUpdater} = props
    const {tabList} = props
    const {tabName, setTabName} = useState("")
    const {tabContent, setTabContent} = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()

        let newValue = {
            tab
        }
    }

    return (
        <div>
            <h1>FORMS</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="tabList">How Many Tabs?</label>
                <input type="number" />
            </form>
        </div>
    )
}

export default TabsForm
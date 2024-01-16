import { useState } from "react";

const TabsMap = props => {
    // const [tabList, setTabList] = useState([])
    // const [tabName, setTabName] = useState("")
    // const [tabContent, setTabContent] = useState("")
    // const [tabMarker, setTabMarker] = useState(false)
    const [showAll, setShowAll] = useState("")
    const newTabList = [
        {tabName: "Web Fund", tabContent: "Web Fund Stuff"},
        {tabName: "Python", tabContent: "python_stuff"},
        {tabName: "javascript", tabContent: "javaScriptStuff"},
        {tabName: "JAVA", tabContent: "I'm super STRICT!!"},
    ]
    
    // const runMarker = randomList => {
    //     const newList = randomList.map(obj => {
    //         obj.tabMarker = tabMarker
    //         return obj
    //     })
    //     setTabList(newList)
    // }
    // runMarker(newTabList)
    
    
    const handleClick = chkIdx => {
        const displayTab = newTabList.filter((obj, idx) => idx === chkIdx)
        
        
        // add map function to highlight the clicked tab
        
        
        setShowAll(displayTab[0].tabContent)

    }


    return (
        <>
        <div className="jsApp">
            {
                newTabList.map((tab, index) => (
                    <div className="nameRow" key={index}>
                        <button className="jsBtn" onClick={ (e) => handleClick(index)}>{tab.tabName}</button>
                    </div>
                ))
            }
        </div>
        <p className="jsDisplay">{showAll}</p>
        </>
    )
}

export default TabsMap
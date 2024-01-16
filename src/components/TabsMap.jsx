import { useState } from "react";

const TabsMap = props => {
    const tabList = [
        {tabName: "Web Fund", tabContent: "Web Fund Stuff"},
        {tabName: "Python", tabContent: "python_stuff"},
        {tabName: "javascript", tabContent: "javaScriptStuff"},
        {tabName: "JAVA", tabContent: "I'm super STRICT!!"},
    ]
    const [showAll, setShowAll] = useState("")
    
    const handleClick = chkIdx => {
        const displayTab = tabList.filter((obj, idx) => idx === chkIdx)
        
        
        // add map function to highlight the clicked tab
        
        
        setShowAll(displayTab[0].tabContent)

    }


    return (
        <>
        <div className="jsApp">
            {
                tabList.map((tab, index) => (
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
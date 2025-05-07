import { useEffect } from "react";
import { Tab, TabProps } from "./Tab";

interface TabsProps {
    tabs: TabProps[],
    currentPath: string,
}

function Tabs(props: TabsProps) {
    
    return (
        <>
        {props.tabs.map((tab, index) => {
            const isActive = tab.linkTo === props.currentPath
            return <Tab {...tab} isActive={isActive} />
        })}
        </>
    )
}

export {
    Tabs,
    type TabsProps
}
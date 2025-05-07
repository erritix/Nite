import { Style } from "@/utils/styleType"
import { Checkbox } from "./Checkbox"
import { useState } from "react"

interface TaskProps {
    task: string,
    checked?: boolean | false,
    onChange?: (checked: boolean) => void
}

function Task(props: TaskProps) {
    const [checked, setChecked] = useState<boolean>(props.checked || false)
    
    return (
        <div style={styles.task}>
            <Checkbox
                checked={checked} 
                onClick={(state)=> {
                    setChecked(state)
                    props.onChange && props.onChange(state)
                }}
            />
            <span>{props.task}</span>
        </div>
    )
}

const styles: Style = {
    task: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        maxWidth: '40vw',
    }
}

export {
    Task,
    type TaskProps,
    styles
}
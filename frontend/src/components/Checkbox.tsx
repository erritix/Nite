import { color } from "@/utils/colors"
import { Style } from "@/utils/styleType"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MouseEventHandler, useEffect, useState } from "react"

interface CheckboxProps {
    checked?: boolean | false
    onClick?: (state: boolean) => void
}

function Checkbox(props: CheckboxProps) {
    const [checked, setChecked] = useState<boolean>(props.checked || false)

    return (
        <span
            style={{
                ...styles.box,
                ...(checked && styles.boxChecked)
            }}
            onClick={() => {
                setChecked(!checked)
                props.onClick?.(!checked)
            }}
        >       
            {checked && (
                <FontAwesomeIcon icon='check' />
            )}
        </span>
    )
}   

const styles: Style = {
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 24,
        width: 24,
        boxSizing: 'border-box',
        border: `2px solid ${color.secondary50}`,
        borderRadius: 8,
        color: color.background,
        transitionDuration: '150ms',
    },
    boxChecked: {
        backgroundColor: color.primary,
        border: '2px none #000000'
    }
}

export {
    type CheckboxProps,
    Checkbox,
    styles,
}


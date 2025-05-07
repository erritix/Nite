import { color } from "@/utils/colors";
import { Style } from "@/utils/styleType";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonHTMLAttributes, CSSProperties, useEffect, useState } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
    text?: string,
    icon?: IconProp,
    style?: CSSProperties,
    className?: string,
    name?: undefined
    onState?: (state: ButtonState) => void
}

interface ButtonState {
    pressed?: boolean,
    hovered?: boolean,
}

function Button({style, ...props}: ButtonProps) {
    const [pressed, setPressed] = useState<boolean>()
    const [hovered, setHovered] = useState<boolean>()

    useEffect(() => {
        props.onState?.({pressed, hovered})
    }, [pressed, hovered])

    return (
        <button 
            style={{
                ...styles.button,
                ...(hovered && styles.buttonHover),
                ...(pressed && styles.buttonPressed),
                ...style
            }}
             
            onMouseEnter={()=>setHovered(true)}
            onMouseLeave={()=>setHovered(false)}
            onMouseDown={()=>setPressed(true)}
            onMouseUp={()=>setPressed(false)}

            {...props}
        >
            {props.icon && (
                <FontAwesomeIcon icon={props.icon} />
            )}
            {props.text && (
                <span>{props.text}</span>
            )}
        </button>
    )
}

const styles: Style = {
    button: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        width: 'max-content',  
        padding: 16,
        paddingTop: 8,
        paddingBottom: 8,
        border: 'none',
        borderRadius: 8,
        backgroundColor: color.primary,
        color: color.background,
        transitionDuration: '300ms'
    },
    buttonHover: {
        opacity: 0.8,
    },
    buttonPressed: {
        opacity: 0.6
    }
}

export {
    Button,
    type ButtonProps
}
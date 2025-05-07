import { color } from "@/utils/colors"
import { Style } from "@/utils/styleType"
import React, { InputHTMLAttributes, useState } from "react"
import { LogPrint } from '../../wailsjs/runtime'

interface InputFiedProps extends InputHTMLAttributes<HTMLInputElement> {
    text?: string,
    onEnter?: () => void
}

const InputField = React.memo(({text, style, onFocus, onBlur, onKeyDown, onEnter, ...props}: InputFiedProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false)
    
    return (
        <div style={styles.container}>
            {text && (
                <span>{text}</span>
            )}
            <input 
                style={{
                    ...styles.field,
                    ...(isFocused && styles.fieldFocus),
                    ...style
                }}
                onFocus={(e) => {
                    onFocus?.(e)
                    setIsFocused(true)
                }}
                onBlur={(e) => {
                    onBlur?.(e)
                    setIsFocused(false)
                }}
                onKeyDown={(e) => {
                    e.key === 'Enter' ? onEnter?.() : null
                    onKeyDown?.(e)
                }}
                {...props}
            />
        </div>
    )
})
// function InputField({text, style, onFocus, onBlur, onKeyDown, onEnter, ...props}: InputFiedProps) {
//     const [isFocused, setIsFocused] = useState<boolean>(false)

//     return (
//         <div style={styles.container}>
//             {text && (
//                 <span>{text}</span>
//             )}
//             <input 
//                 style={{
//                     ...styles.field,
//                     ...(isFocused && styles.fieldFocus),
//                     ...style
//                 }}
//                 onFocus={(e) => {
//                     onFocus?.(e)
//                     setIsFocused(true)
//                 }}
//                 onBlur={(e) => {
//                     onBlur?.(e)
//                     setIsFocused(false)
//                 }}
//                 onKeyDown={(e) => {
//                     e.key === 'Enter' ? onEnter?.() : null
//                     onKeyDown?.(e)
//                 }}
//                 {...props}
//             />
//         </div>
//     )
// }

const styles: Style = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
    },

    field: {
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 4,
        border: `1px solid ${color.primary50}`,
        outline: 'none',
        transition: '300ms',
    },
    fieldFocus: {
        border: `1px solid ${color.primary}`
    }
}

export {
    InputField,
    type InputFiedProps,
}
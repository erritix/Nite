import { color } from '@/utils/colors'  
import { listenHover } from '@/utils/listenHover'
import { Style } from '@/utils/styleType'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CSSProperties, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface TabProps {
    icon: IconProp,
    linkTo: string,
    isActive?: boolean,
    className?: string,
    style?: CSSProperties,
}

function Tab(props: TabProps) {
    const [hovered, setHovered] = useState<boolean>(false)

    
    return (
        <Link
            to={props.linkTo}
            className={`icon-medium ${props.className}`}
            style={{
                ...style.tab, 
                ...(props.isActive && style.tabActive),
                ...(hovered && style.tabHovered),
                ...props.style
            }}
            {...listenHover(setHovered)}
        >
            <FontAwesomeIcon icon={props.icon} />
        </Link>
    )
}

const style: Style = {
    tab: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 48, 
        width: 48,
        borderRadius: 16,
        color: color.primary,
        transitionDuration: '300ms'
    },
    tabHovered: {
        color: color.text
    },
    tabActive: {
        backgroundColor: color.secondary,
        color: color.text
    }
}

export {
    Tab, 
    type TabProps,
}
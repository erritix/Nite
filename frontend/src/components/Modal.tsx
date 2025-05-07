import { color } from "@/utils/colors";
import { Style } from "@/utils/styleType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties, ReactNode, useMemo, useState } from "react";
import { Button } from "./Button";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

interface ModalProps{
    title: string,
    children?: ReactNode,
    buttons?: ReactNode[],
    overlayColor?: string,
    isOpen?: boolean,
    onClose?: () => void,
}

function Modal(props: ModalProps) {
    const handleClose = (e: any) => {
        e.stopPropagation()
        if(e.target === e.currentTarget) {
            props.onClose?.()
        }
    }

    if (!props.isOpen) return null;

    return (
        <div
            style={{
                ...styles.modalOverlay,
                ...(props.overlayColor && {backgroundColor: props.overlayColor})
            }}
            onClick={handleClose}
        >
            <div style={styles.modalBox}>
                <div style={styles.header}>
                    <span className="text-title">{props.title}</span>
                    <FontAwesomeIcon
                        icon={'xmark'}
                        style={styles.closeButton} 
                        onClick={handleClose}
                    />  
                </div>
                <div style={styles.content}>
                    {props.children}
                </div>
                <div style={styles.buttonContainer}>
                    {props.buttons?.map((Component, index) => (
                        <div key={index}>{Component}</div>
                    ))}
                </div>
            </div>

        </div>
    )
}


interface UseModalOptions extends Omit<ModalProps, 'children' | 'isOpen' | 'onClose'> {
    renderContent: () => ReactNode;
}

function useModal(options: UseModalOptions) {
    const [isOpen, setIsOpen] = useState(false);
    const memoContent = useMemo(() => {
        return options.renderContent?.()
    }, [options.renderContent])
    const Component = (
        <Modal
            {...options}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
        >
            {options.renderContent?.()}
        </Modal>
    );

    return {
        Component,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
    };
}


const styles: Style = {
    modalOverlay: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(20, 20, 20, 0.4)',
        transitionDuration: '300ms',
    },
    modalBox: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '20vw',
        padding: 16,
        borderRadius: 12,
        backgroundColor: color.background,
        overflow: 'hidden',
    },

    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 32,
        paddingBottom: 12,
        borderBottom: `1px solid ${color.secondary}`,
    },
    closeButton: {
        marginLeft: 'auto',
        fontSize: 20,
    },
    
    content: {
        paddingTop: 12,
        paddingBottom: 10,
    },
    
    buttonContainer: {  
        display: "flex",
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
        paddingTop: 8,
    }
}

export {
    Modal,
    type ModalProps,
    styles,
    useModal,
}
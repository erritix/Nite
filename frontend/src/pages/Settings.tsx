import { Button } from "@/components/Button"
import { InputField } from "@/components/InputField"
import { Modal, useModal } from "@/components/Modal"
import { useState } from "react"

function Settings() {
    const [value, setValue] = useState<string>()
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <main id="view">
            <span onClick={e=>setIsOpen(true)}>open modal</span>
            <span>{value}</span>
            <Modal title="hello" isOpen={isOpen} onClose={()=>setIsOpen(false)}>
                <InputField 
                    onChange={e=>setValue(e.target.value)}
                />
            </Modal>
        </main>
    )
}

export default Settings
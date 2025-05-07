import { Button } from '@/components/Button'
import { Style } from '@/utils/styleType'

function Note() {
    
    return (
        <main> 
            <div className="header">
                <text className='text-header'>Notes</text>
                <Button 
                    text='New Note'
                    icon='notes-medical'
                />
            </div>
            <div>
                
            </div>
        </main>
    )
}

export default Note
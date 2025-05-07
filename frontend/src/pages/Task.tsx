import { Button } from "@/components/Button"
import { Checkbox } from "@/components/Checkbox"
import { InputField } from "@/components/InputField"
import { useModal } from "@/components/Modal"
import { Task } from "@/components/Task"
import { Style } from "@/utils/styleType"
import { createContext, useCallback, useContext, useEffect, useState } from "react"

interface ITask {   
    task: string,
    index?: number, 
}

function TaskPage() {
    const [taskList, setTaskList] = useState<ITask[]>([]);
    
    const [taskInput, setTaskInput] = useState<string>('');

    const handleTaskAdd = () => {
        if (!taskInput) return
        setTaskList(prev => [...prev, { task: taskInput || '' }]);
        setTaskInput('');
        newTaskModal.close();
    };

    const newTaskModal = useModal({
        title: 'New Task',
        renderContent: () => (
            <InputField
                placeholder="Buy milk"
                autoFocus
                onChange={e => {setTaskInput(e.target.value); console.log(  )}}
                onEnter={handleTaskAdd}
            />
        ),
        buttons: [
            <Button key="add" text="Add Task" onClick={handleTaskAdd} />
        ]
    });

    return (
        <main id="view">
            <div className="header">
                <span className="text-header">Tasks</span>
                <div style={styles.buttonList}>
                    <Button text="New Task" icon="check" onClick={newTaskModal.open} />
                    <Button text="Reset List" icon="trash" onClick={e=>setTaskList([])} />
                </div>
            </div>
            <div style={styles.taskList}>
                {taskList.map((task, index) => (
                    <Task task={task.task} key={index} />
                ))}
            </div>  
            {newTaskModal.Component}
        </main>
    );
}


const styles: Style = {
    taskList: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
    },
    buttonList: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
    }
}

export default TaskPage
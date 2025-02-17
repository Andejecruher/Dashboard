// Desc: Task To Do component
import React from 'react';
import Button from './ui/Button';
import Input from './ui/Input'
import Task from './ui/Task';
import { ArrowBigRightDash } from 'lucide-react'

// styles
const classes = {
    container: `bg-white rounded-xl border border-grey-100`,
    header: `flex items-center justify-between pr-6 pl-6 pt-3 pb-4`,
    title: `text-navy text-lg font-bold`,
    button: `border-none rounded-full text-blue text-sm font-medium`,
    content: `flex flex-col border-t-1 border-b-1 border-grey-200 p-1`,
    footer: `w-full h-full`,
    footerContent: `flex items-center border-t-1 border-grey-200`,
    buttonAction: `border-none rounded-full text-black text-4xl font-bold`,
    icon: `w-6 h-6`
}

// interface task
interface Task {
    title: string
    isHighlighted: boolean
    date: Date
    onClick: () => void
}

// interface props
interface TaskProps {
    tasks?: Task[]
}

// component
const TaskToDo: React.FC<TaskProps> = ({ tasks }) => {
    const [task, setTask] = React.useState<string>("");
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.title}>Tasks To Do</div>
                <Button className={classes.button} onClick={() => console.log("View all tasks clicked")} text="View all tasks" intent="ghost" />
            </div>
            <div className={classes.content}>
                {tasks && tasks.map((task, index) => (
                    <Task
                        key={index}
                        title={task.title}
                        isHighlighted={task.isHighlighted}
                        date={task.date}
                        onClick={task.onClick}
                    />
                ))}
            </div>
            <div className={classes.footer}>
                <div className={classes.footerContent}>
                    <Input
                        placeholder="Add new task"
                        className="flex-grow"
                        onChange={(e) => setTask(e.target.value)}
                        value={task}
                    />
                    <Button className={classes.buttonAction} intent='ghost' icon={<ArrowBigRightDash className={classes.icon} />} iconPosition='center' onClick={() => console.log("Add New Task")} />
                </div>
            </div>
        </div>
    );
};

// export
export default TaskToDo;
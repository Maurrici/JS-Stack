import style from "./TaskForm.module.css"

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react"
import { Task } from '../../interfaces/Task'

interface Props {
    btnText: string;
    taskList: Task[];
    setTaskList?: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [difficulty, setDifficulty] = useState<number>(0);

    const addTask = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const id = new Date().getTime();

        const newTask: Task = {
            id,
            title,
            difficulty
        }

        setTaskList!([...taskList, newTask]);
        setTitle("");
        setDifficulty(0);
    }
    console.log(taskList)
    return (
    <form className={style["form"]} onSubmit={addTask}>
        <label className={style["input-container"]}>
            <span>Título</span>
            <input type="text" name="title" value={title} onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}/>
        </label>

        <label className={style["input-container"]}>
            <span>Dificuldade</span>
            <input 
                type="number" 
                name="difficulty" 
                min={0}
                max={5}
                value={difficulty} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => setDifficulty(parseInt(e.target.value))} />
        </label>

        <button>{btnText}</button>
    </form>
    )
}

export default TaskForm
import Input from "./Input"
import Button from "./button"
import { useRef } from "react"
import Modal from "./Modal"

export default function NewProject({onAdd, onCancel}){
    const modal = useRef()

    const title = useRef()
    const description = useRef()
    const dueDate = useRef()

    function handleSubmit() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDuedate = dueDate.current.value;
    
        if (
            enteredTitle.trim() === "" ||
            enteredDescription.trim() === "" ||
            enteredDuedate.trim() === ""
        ) {
            modal.current.open();
            return;
        }
    
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDuedate,
        });
    }

    return <>
    <Modal ref={modal} buttonCaption='Okay'>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops... looks like you forgot to enter a valid input.</p>
        <p className="text-stone-600 mb-4">Please provide valid input.</p>
    </Modal>
    <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
                <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">
                    Cancel
                </button>
            </li>
            <li>
                <Button onClick={handleSubmit}>
                   Save 
                </Button>
            </li>
        </menu>
        <div>
            <Input type='text' ref={title} label='Title'/>
            <Input ref={description} label='Description' textarea/>
            <Input type='date' ref={dueDate} label='Due Date'/>
        </div>
    </div></>
}
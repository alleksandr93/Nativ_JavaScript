import {ChangeEvent, KeyboardEvent, MouseEvent, useState} from 'react';


export const User = () => {
    const [firsName, setFirstName] = useState('Dimych')
    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.name)
    }
    const onNameChanged = () => {
        console.log('name change it')
    }
    const focusLostHeandler = () => {
        console.log('Focus lost ')
    }
    const onAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed:' + event.currentTarget.value)
    }
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const changeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.currentTarget.value)
    }
    const saveArea = (title: string) => {
        setTitle(title)
        setText('')
    }
    const onKeyPressHeandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            saveArea(text)
        }
    }
    return <div>
        <textarea onKeyPress={onKeyPressHeandler} value={text} onChange={changeText} onBlur={focusLostHeandler}
                  onFocus={onNameChanged}>{firsName}</textarea>
        <button name="save" onClick={() => saveArea(text)}>Save Area</button>
        <h1>{title}</h1>
    </div>
}
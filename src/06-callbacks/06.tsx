import React, {MouseEvent, ChangeEvent} from "react";
// const callback = () => {
//     alert('key')
// }
// window.setTimeout(callback , 1000);

export const User = () => {
    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }
    
    const onNameChanged = () => {
        alert('name changed')
    }
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        alert('age changed: ' + event.currentTarget.value)
    }
    const onFocusLostHandler = () => {
        alert('focus lost')
    }

    return(
        <div>
            <textarea onChange={onNameChanged} onBlur={onFocusLostHandler}>Dimuch</textarea>
            <input onChange={onAgeChanged} type="number" />

            <button name="delete" onClick={deleteUser}>X</button>
            <button name="save" onClick={deleteUser}>X</button>
        </div>
    )
}


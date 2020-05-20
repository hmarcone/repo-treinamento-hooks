import React, { useRef } from 'react';

const TesteRef = () => {

    const inputRef = useRef();

    const handleFoco = () => {
        inputRef.current.focus();
    }

    return (
        <>
            <input type="text" ref={inputRef} />

            <button onClick={handleFoco}>Setar o foco</button>
        </>
    )
}

export default TesteRef;
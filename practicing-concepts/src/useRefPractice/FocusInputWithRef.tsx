import { useRef } from 'react'

const FocusInputWithRef = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();

        }
    }

    const preventDefault = (e:React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <div>
            <form className='mt-10' onSubmit={preventDefault}>
                <input ref={inputRef} type="text" placeholder="e.g Dan Cook" />

                <button onClick={handleClick}>Focus the input</button>
            </form>

        </div>
    )
}

export default FocusInputWithRef

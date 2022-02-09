import { useEffect } from "react"

function useOutsideClick(ref, func){
    useEffect(() => {
        const handleClick = (e) => {
            if(ref.current && ref.current.contains(e.target)){
                func(true)
            }
            else{
                func(false)
            }
        }

        document.addEventListener('mousedown', handleClick)
        return() => {
            document.removeEventListener('mousedown', handleClick)
        }
    }, [ref, func])
}

export default useOutsideClick
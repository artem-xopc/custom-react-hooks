import { useState } from "react"

export const useInput = (initialValue) => {
    debugger
    const [value, setValue] = useState(initialValue)

    const inputChange = (e) => {
        setValue(e.target.value)
    }

    return {
        value, inputChange
    }
}
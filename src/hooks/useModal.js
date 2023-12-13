import { useState } from "react"

const useModal = (init = false) => {
    const [isShowing, setIsShowing] = useState(init)

    const handleToggle = () => {
        setIsShowing(prev => !prev)
    }

    return [isShowing, handleToggle]

}

export default useModal
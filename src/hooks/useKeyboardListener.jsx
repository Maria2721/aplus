import { useEffect } from "react";

export const useKeyboardListener = (ref, handleModal) => {
    const activeElement = document.activeElement;
    let activeIndex = -1;
    let focusableElements = [];

    const handleTab = evt => {
        let total = focusableElements.length;

        if (!evt.shiftKey) {
            // If activeIndex + 1 larger than array length focus first element otherwise focus next element
            activeIndex + 1 === total
                ? activeIndex = 0
                : activeIndex += 1

            focusableElements[activeIndex].focus()

            return evt.preventDefault()
        }

        if (evt.shiftKey) {
            // if activeIndex - 1 less than 0 focus last element otherwise focus previous element
            activeIndex - 1 < 0
                ? activeIndex = total - 1
                : activeIndex -= 1

            focusableElements[activeIndex].focus()

            return evt.preventDefault()
        }
    }

    const handleEscape = evt => {
        if (evt.key === 'Escape') handleModal()
    }

    // map of keyboard listeners
    const keyListenersMap = new Map([
        [27, handleEscape],
        [9, handleTab],
    ])

    const handleKeydown = evt => {
        // get the listener corresponding to the pressed key
        const listener = keyListenersMap.get(evt.keyCode)

        // call the listener if it exists
        return listener && listener(evt)
    }

    useEffect(() => {
        if (ref.current) {
            // Select all focusable elements within ref
            focusableElements = ref.current.querySelectorAll('a, button, textarea, input, select')
            //console.log(focusableElements)
        }
    }, [ref])

    useEffect(() => {
        document.addEventListener('keydown', handleKeydown)

        return () => {
            // Detach listener when component unmounts
            document.removeEventListener('keydown', handleKeydown)
            // Return focus to the previously focused element
            activeElement.focus()
        }
    }, [])
};
import { useCallback, useEffect, useState } from "react";

export const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);

    const toggle = useCallback(() => setState(state => !state), []);

    return [state, toggle]
}

export const useInputValue = initialValue => {
    const [value, setValue] = useState(initialValue);
    return {
        value,
        onChange: e => {
            setValue(e.target.value || e.target.innerText);
        }
    };
};

export function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(true);
    useEffect(() => {
        function handleOnline() {
            setIsOnline(true);
        }
        function handleOffline() {
            setIsOnline(false);
        }
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);
    return isOnline;
}


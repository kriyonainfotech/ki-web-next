'use client';
import { useEffect } from "react";

export default function DisableInspect() {
    useEffect(() => {
        const disableRightClick = (event) => event.preventDefault();
        document.addEventListener("contextmenu", disableRightClick);

        const disableKeyboardShortcuts = (event) => {
            if (
                event.key === "F12" ||
                (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "i") ||
                (event.ctrlKey && event.key.toLowerCase() === "u")
            ) {
                event.preventDefault();
            }
        };
        document.addEventListener("keydown", disableKeyboardShortcuts);

        return () => {
            document.removeEventListener("contextmenu", disableRightClick);
            document.removeEventListener("keydown", disableKeyboardShortcuts);
        };
    }, []);

    return null; // no UI
}

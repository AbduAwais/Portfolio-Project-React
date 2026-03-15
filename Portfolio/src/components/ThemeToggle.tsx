import {Moon, Sun} from "lucide-react";
import {useEffect, useState} from "react";
import { cn } from "../lib/utils";



export const ThemeToggle = () => { 

    const [isDarkMode, setIsDarkMode] = useState(
        () => localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
            localStorage.setItem("theme", "light"); // Store the user's preference in localStorage

        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark"); // Store the user's preference in localStorage
            setIsDarkMode(true);
        }
    };

    return (
    <button onClick ={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300", 
    "focus:outline-hidden")}> 
        {""}
     {isDarkMode
         ? <Sun className="h-6 w-6 text-yellow-300" />
         : <Moon className="h-6 w-6 text-blue-500" />} </button>
    );
};

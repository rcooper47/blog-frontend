import React, {useEffect, useState} from "react";
import Brightness6Icon from '@mui/icons-material/Brightness6';




export default function DarkMode() {
    
    const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    
  };


  return(<div>

<Brightness6Icon  onClick={toggleDarkMode}/>
  </div>)
}
import React,{memo} from 'react'
import './header.css'

interface ToggleProps {
    toggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<ToggleProps> = ({toggle,setToggle}) =>{

    function handleToggle(){
        setToggle(!toggle);
    }

    return(
        <div className="header">
            <div onClick={handleToggle}>
            {
                toggle?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="toggle_button">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="toggle_button">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>
            }
            </div>
            
            <div className="header_main">
                <p>CUSTOMER TRACK</p>
            </div>
        </div>
    )
}

export default memo(Header);
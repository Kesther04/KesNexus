
interface typeHamburgerMenuProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HamburgerMenu ({open, setOpen}: typeHamburgerMenuProps) {

    return (
        <div
        onClick={() => setOpen(!open)}
        className="menu-btn relative z-50 w-6 h-6 cursor-pointer text-black dark:text-white flex items-center justify-center md:hidden"
        >
        <span
            className={`menu-btn__burger relative block w-5 h-[3px] rounded-sm bg-current transition-all duration-300 ease-in-out
            ${open ? "bg-transparent rotate-[720deg]" : ""}
            `}
        >
            {/* top line */}
            <span
            className={`absolute top-[-8px] block w-5 h-[3px] rounded-sm bg-current transition-all duration-300 ease-in-out
                ${open ? "rotate-45 translate-x-[5px] translate-y-[8px]" : ""}
            `}
            ></span>

            {/* bottom line */}
            <span
            className={`absolute top-[8px] block h-[3px] rounded-sm bg-current transition-all duration-300 ease-in-out
                ${open ? "w-5 rotate-[-45deg] translate-x-[4px] -translate-y-[8px]" : "w-2"}
            `}
            ></span>
        </span>
        </div>
  );
    
}
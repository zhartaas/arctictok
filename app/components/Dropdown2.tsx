"use client";
import Multiselect from "./Multiselect"
import { authService } from "../services/AuthService"
import { Dispatch, FC, SetStateAction } from "react";

const options = [
  { value: 'Programming', label: 'Programming' },
  { value: 'Sport', label: 'Sport' },
  { value: 'Motivation', label: 'Motivation' },
  { value: 'Art', label: 'Art' },
  { value: 'Productivity', label: 'Productivity' },
  { value: 'Finance', label: 'Finance' },
  { value: 'Psychology', label: 'Motivation' },
]

interface DropdownProps {
  userChoice: string,
  setUserChoice: Dispatch<SetStateAction<string>>
}

const Dropdown2: FC<DropdownProps> = ({userChoice, setUserChoice}) => {
    return (
      <div className="dropdown">
        <label tabIndex={0} className="bg-slate-200 btn m-1">Select topics</label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-96 h-150"> 
          <li><Multiselect options={options} userChoice={userChoice} setUserChoice={setUserChoice}></Multiselect></li>
          {/* <li><a onClick={(authService.logout)}>LogOut</a></li> */}
        </ul>
      </div>
    )
}
export default Dropdown2
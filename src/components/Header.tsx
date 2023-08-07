import { useState } from 'react';
import { Link } from "react-router-dom"
import { NavbarOptions } from "../data/NavbarOptions";
import { Icon } from '@iconify/react';
import { Button } from './Button';

export default function Header() {
  const [dropdown, setDropdown] = useState<boolean>(false);
  return (
    <header className='flex justify-between p-3 border-b-2 items-center'>
        <h3>
          <Link to={'auth/signin'}>
            ChatBud
          </Link>
        </h3>
        <nav>
          <ul className="flex">
            {
              NavbarOptions.map((option) => 
              (
                <li className="mx-4 relative">
                  <Link to={option.path} onClick={() => setDropdown(!dropdown)} className='flex items-center'><span>{option.label}</span>{
                  option.child && 
                    <span className='ml-1'>
                      {
                        !dropdown ? 
                        <Icon icon="ph:caret-down-bold" fontSize={'15px'}/> : 
                        <Icon icon="ph:caret-up-bold" fontSize={'15px'}/>
                      }
                    </span>
                  }</Link>
                  {option.child && 
                    dropdown && (
                      <ul className='absolute top-8 bg-white shadow w-32 py-2 rounded'>
                      {option.children?.map((submenu) => (
                        <li>
                          <Link to={submenu.path} className='p-5'>{submenu.label}</Link>
                        </li>
                      ))}
                    </ul>
                    )}
                </li>
              )
            )}
          </ul>
        </nav>
        <div>
          <Button.Solid text='Register'/>
        </div>
    </header>
  )
}

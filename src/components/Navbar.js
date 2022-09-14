/* This example requires Tailwind CSS v2.0+ */
import { useState, Fragment , useEffect} from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; //ama bo active boni page aka bakar denin


import {useSelector, useDispatch} from 'react-redux'; /*  */

import i18n from "i18next";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const location = useLocation();

  const auth = useSelector((state) => state.auth.isAuthenticated); /*  */


   const [navigation, setNavigation] = useState([
    { name: 'Home', href: '/', current: true },
    { name: 'Products', href: '/Products', current: false },
    { name: 'Categories', href: '/Categories', current: false },
    { name: 'Feedback', href: '/Feedback', current: false },
    { name: 'Form', href: '/Form', current: false },
    { name: 'About', href: '/About', current: false },

  //]
  ]); 


  useEffect( ()=>{
//console.log('the state of auth is false');
  }, [])

  return (
    <Disclosure as="nav" className="bg-gray-800">

      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block "
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <Link  /* change a to Link  bo swich between page without refresh*/

                        key={item.name}
                        to={item.href} /* change href for to */
                        className={classNames(
                         location.pathname === item.href /* ama bo active boni pageakana ka click man krd */
                          ? 'bg-indigo-900 text-white' 
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                

 <button className='text-white mx-1'
                  onClick={() => {
                    i18n.changeLanguage('ku');
                    localStorage.setItem('language', 'ku');
                  }}
                >
                  Kurdish
                </button>


<button className='text-white mx-1'
onClick={()=> {
i18n.changeLanguage('ar');
localStorage.setItem('language', 'ku');
}}
>
Arabic</button>

<button className='text-white mx-1'
onClick={()=>{ 
i18n.changeLanguage('en');
localStorage.setItem('language', 'ku');
}}
> English</button>


<svg  //ama icon ii shoping akaya
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-10 text-white mr-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>


              {auth.isAuthenticated ? 

                <Link  /* button aka akain ba Link */
                  to='/login' /* ka click man lekrd bman bat bo page Login */
                  className="bg-indigo-900 p-1 rounded-full  text-white px-4  hover:bg-indigo-500 hover:text-white focus:outline-none 
                  focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:bg-indigo-500" 
                >
                  <span className="sr-only">View notifications</span>
                  Logout {/* agar daxl bbo allet logout */}
                
                </Link> :
              

                <Link  /* button aka akain ba Link */
                to='/login' /* ka click man lekrd bman bat bo page Login */
                className="bg-indigo-900 p-1 rounded-full  text-white px-4  hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:bg-indigo-500"
              >
                <span className="sr-only">View notifications</span>
                Login {/* agal daxl nabbo allet login bka  */}
              
              </Link>}
                
                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}  /* change a to Link */
                  to={item.href} /* change href for to */
                  className={classNames(
                    location.pathname === item.href
                    ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}


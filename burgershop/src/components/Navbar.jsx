import React from 'react';
import { BsCartFill } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import logo from '../assests/Brrrgrrr-removebg-preview.png'
import logo from '../assests/brrrgrrr.png'

const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return (
    <div>

      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img src= {logo}  className="h-24" />
          </div>
        </NavLink>

          <div className=" flex items-center font-medium text-slate-100 mr-5 space-x-6">
            <NavLink to="/">
              <p className=" relative ">
                All Burgers
              </p>
            </NavLink>

            <NavLink to="/veg">
              <p>Veg Burgers</p>
            </NavLink>

            <NavLink to="/nonveg">
              <p>Non-Veg Burgers</p>
            </NavLink>
            </div>

            <NavLink to="/cart" >
              <div className="relative text-slate-100">
                <BsCartFill  className="text-2xl"/>
                {
                  cart.length > 0 &&
                  <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                  justify-center items-center animate-bounce rounded-full text-white" >{cart.length}</span>
                }
              </div>
            </NavLink>
          
      </nav>
      
    </div>
  )
}

export default Navbar;


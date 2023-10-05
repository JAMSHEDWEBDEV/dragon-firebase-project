import { Link, NavLink } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const {user,LogOut} = useContext(AuthContext);
    const NavLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/career">Career</NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>
    <li><NavLink to="/register">Registration now</NavLink></li>
    </>

    const handleLogOut = () =>{
        LogOut()
        .then(()=>{console.log('LogOut successful')})
        .catch(error =>{console.error(error)})
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <h3 className="text-4xl mr-3"><BsPersonCircle/></h3>
                {
                    user ? <Link 
                    onClick={handleLogOut}
                    className=" px-8 rounded py-2 text-white bg-[#403F3F]">Sign Out</Link>:
                    <Link to="/login" className=" px-8 rounded py-2 text-white bg-[#403F3F]">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Nav = () => {
    const { user, logout } = useContext(AuthContext)
    const signOut = () => {
        logout()
    }

    const links = <>
        <li><Link>Home</Link></li>
        <li><Link>Service</Link></li>
        {
            user ? <>
                <li><Link to='/bookings'>My bookings</Link></li>
                <li onClick={signOut}><Link> Logout</Link></li>

            </>
                : <li><Link to='login'>Login</Link></li>
        }
    </>
    return (
        <div className="max-w-[1600px] mx-auto py-8 ">
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn  btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="w-28 ">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-outline border-orange-600 text-orange-600 px-2 sm:px-5">Appointment</a>
                </div>
            </div>
        </div>
    );
};

export default Nav;
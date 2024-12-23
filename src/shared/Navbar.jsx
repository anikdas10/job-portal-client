import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import icon from "../assets/icon.png"

const Navbar = () => {

    const {user,signOutUser} = useContext(AuthContext);

    const handleSignOut = ()=>{
        signOutUser()
        .then(()=>{
            console.log('Successfully Sign out');
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    const links = (
      <>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/addJob">Add a Job</Link>
        </li>
        <li>
          <Link to="/myPostedJobs">My Posted Job</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </>
    );

    console.log(user);
    return (
       <div className="navbar bg-base-100 border">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
        <img className="w-12" src={icon} alt="" />
        <h3>Job Portal</h3>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
        user ? <><button onClick={handleSignOut} className="btn">Log Out</button></>:
        <>
        <Link to='/register' className="btn mr-2">Register</Link>
        <Link to='/login' className="btn">Sign In</Link>
        </>
        
    }
    
    
  </div>
</div>
    );
};

export default Navbar;
import Lottie from "lottie-react";

import animation from '../../assets/Lottie/lottie.json'

import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Register = () => {

    const {setUser,createUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state || "/";
    console.log(location);

    const [err,setError] = useState("")
    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,}$/;

        if(!passwordRegex.test(password))
        {
            setError("Password must be at list 6 character long , one uppercase , one lowercase and one number")
             return;
        }
       
        createUser(email,password)
        .then(result=>{
           console.log(result.user);
           navigate(from);
        })
        .catch(err=>{
            console.log(err);
        })
        }

    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <div className="text-center lg:text-left w-96">
      <Lottie animationData={animation}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" 
          name="email"
          className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" 
          name="password"
          className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <div className="form-control mt-4">
            <p>Already have an account? <Link className="text-blue-600 font-bold text-lg" to="/login">Login</Link></p>
        </div>
      </form>
    </div>
  </div>
        </div>
    );
};

export default Register;
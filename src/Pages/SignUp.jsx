import { GrGoogle } from 'react-icons/gr';
import Sign from '../assets/login/login.svg'
import { FaFacebook } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const SignUp = () => {
    const { SignUp } = useContext(AuthContext)
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        SignUp(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => { console.log(error) })

    }
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col  w-full lg:flex-row items-center">
                    <div className=" lg:text-left w-full lg:w-1/2 flex justify-center">
                        <img src={Sign} alt="" />
                    </div>
                    <div className="card shrink-0 w-full lg:w-1/2 shadow-2xl border border-[rgb(208, 208, 208)] p-10">
                        <form className="card-body" onSubmit={handleSignUp}>
                            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Your password" name='password' className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className='text-center'>or Sign in With </p>
                        <div className='flex justify-center gap-3 mt-5 '>
                            <button className='btn btn-circle '><GrGoogle /></button>
                            <button className='btn btn-circle '><RiLinkedinFill /></button>
                            <button className='btn btn-circle '><FaFacebook /></button>
                        </div>
                        <label className="label my-5">
                            <p className="text-center w-full ">Have an account? <span className='text-orange-600 font-bold'><Link to="/login">Login</Link></span></p >
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';

const LogIn = () => {
      const { signIn, signInWithGoogle } = useContext(AuthContext);
     const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
        })
        .catch(error=>{

            console.error(error)
        })
    }


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result=>{
          
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
        // console.log(name, email, password)
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    {/* <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p> */}
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin} className="fieldset">
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        </form>
                        <button onClick={handleGoogleSignIn} className="btn btn-primary">Continue With Google</button>
                        <p>Don't Have an Account? Please <Link to={"/SignUp"} className='text-blue-700 font-bold'>Sign Up Now!!</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
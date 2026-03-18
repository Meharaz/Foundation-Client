import { Link } from 'react-router';

import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import { useContext } from 'react';

const SignUp = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
        })
        .catch(error=>{

            console.error(error)
        })
    }

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
            })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    {/* <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p> */}
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSignUp} className="fieldset">
                            <label className="label">Name</label>
                            <input name='name' type="text" className="input" placeholder="Your Name" />
                            <label className="label font-medium">Photo</label>
                            <input
                                name='photo'
                                type="file"
                                accept="image/*"
                                className="file-input file-input-bordered "
                            />
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button type='submit' className="btn btn-neutral mt-4">Sign Up</button>
                        </form>
                        <button onClick={handleGoogleSignIn} className="btn btn-primary">Continue With Google</button>
                        <p>Already Have an Account? Please <Link to={"/LogIn"} className='text-blue-700 font-bold'>Log in Now!!</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
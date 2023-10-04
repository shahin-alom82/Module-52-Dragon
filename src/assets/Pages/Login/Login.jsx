import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Home/Shard/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const Login = () => {

    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('Location In the Login', location)

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            console.log(result.user)

            // navigate after login
            navigate(location?.state ? location.state : "/");

        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h1 className="text-center text-2xl">Please Login Now !</h1>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="Email" name="email" required placeholder="Your Email Address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="Password" name="password" required placeholder="Password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover mt-4">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Do not Have Account ? <Link className="text-blue-700 font-bold" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;
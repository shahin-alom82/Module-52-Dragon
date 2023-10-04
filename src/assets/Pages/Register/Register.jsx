import { Link } from "react-router-dom";
import Navbar from "../Home/Shard/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const Register = () => {


    const { createUser } = useContext(AuthContext)


    const handleRegister = e => {
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const name = form.get('name')
        const photo = form.get('photo')
        const password = form.get('password')
        console.log(email, name, photo, password);

        // Create User
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h1 className="text-center text-2xl">Please Register Now !</h1>
                <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" required placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="Email" name="email" required placeholder="Your Email Address" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" required placeholder="Photo URL" className="input input-bordered" />
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already Have an Account ? <Link className="text-blue-700 font-bold" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;
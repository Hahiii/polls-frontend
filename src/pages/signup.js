import React from 'react';
import { Link } from 'react-router-dom'

function SignUp() {
    return (
        <section className="container-fluid hero hero--register">
            <section className="container">
                <div className="row justify-content-center align-items-center vh-100">
                    <form className="col-md-6 bg-white p-5 rounded">
                        <div className="form-group">
                            <label for="userFirstname">First Name</label>
                            <input type="email" className="form-control" id="userFirstname" name="firstname" />
                        </div>
                        <div className="form-group">
                            <label for="userLastname">Last Name</label>
                            <input type="email" className="form-control" id="userLastname" name="lastname" />
                        </div>
                        <div className="form-group">
                            <label for="userEmail">Email address</label>
                            <input type="email" className="form-control" id="userEmail" name="email" />
                        </div>
                        <div className="form-group">
                            <label for="userPassword">Password</label>
                            <input type="password" className="form-control" id="userPassword" name="password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link to="/login" className="btn btn-secondary">Log In</Link>
                    </form>
                </div>
            </section>
        </section>

    );
}

export { SignUp }
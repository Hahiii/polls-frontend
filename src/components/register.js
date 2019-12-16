import React from 'react';

function Register() {
    return (
        <section className="container-fluid hero hero--register">
            <section className="container">
                <div className="row justify-content-center align-items-center vh-100">
                    <form className="col-md-6 bg-white p-5 rounded">
                        <div className="form-group">
                            <label for="userEmail">Email address</label>
                            <input type="email" className="form-control" id="userEmail" name="" />
                        </div>
                        <div className="form-group">
                            <label for="userPassword">Password</label>
                            <input type="password" className="form-control" id="userPassword" name="" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </section>
        </section>

    );
}

export { Register }
import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../images/poll-logo.svg'
function Header({ admin, login, user, list, create }) {

    const logOut = _ => {
        localStorage.removeItem("id");
        localStorage.removeItem("token");
        window.location.replace("/")
        return null;
    }


    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-3">
                <Link className="navbar-brand" to="/">{<Logo className="text-light" />}</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {admin ? <>
                            {!list &&
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">My Polls</Link>
                                </li>
                            }
                            {!create &&
                                <li className="nav-item">
                                    <Link className="nav-link" to="/polls/create">Create Poll</Link>
                                </li>
                            }
                            <li className="nav-item">
                                <Link className="nav-link" to="#" onClick={() => logOut()}>Log out</Link>
                            </li>
                        </>
                            :
                            <>
                                {!user &&
                                    <li className="nav-item">
                                        <Link className="nav-link" to={login ? '/signup' : '/login'}>{login ? 'Sign Up' : 'Log In'}</Link>
                                    </li>
                                }
                            </>
                        }
                    </ul>
                </div>
            </nav>

        </header>
    );
}

export { Header } 
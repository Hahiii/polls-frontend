import React from 'react';
import { Link } from 'react-router-dom'

function Header({ admin, login, user, list, create }) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-3">
                <Link className="navbar-brand" to="#">Logo</Link>

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
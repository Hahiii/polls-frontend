import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../images/poll-logo.svg'
function Header({ admin, login, user, list, create }) {
    let clicked = false
    const logOut = _ => {
        localStorage.removeItem("id");
        localStorage.removeItem("token");
        window.location.replace("/")
        return null;
    }
    
    return (
        <header>
            <nav className="navbar navbar-expand-lg justify-content-between navbar-dark bg-primary py-3">
                <Link className="navbar-brand" to="/">{<Logo className="text-light" />}</Link>
                <div className= "collapse show" id="navbarNav">
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
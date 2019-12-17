import React from 'react';
import { Link } from 'react-router-dom'
import { Header } from '../components/header';
import { Footer } from '../components/footer';

function PollsList() {
    return (
        <>
            <Header />
            <section className="container-fluid hero hero--register d-flex flex-grow-1 justify-content-center align-items-center">
                <section className="container">
                    <div className="row justify-content-center align-items-center">
                        <div class="card col-6 p-0">
                            <div class="card-header text-center p-5">My Polls</div>
                            <div class="card-body">
                                <div class="list-group list-group-flush">
                                    <Link to="/polls/detail" class="list-group-item list-group-item-action">A simple primary list group item</Link>
                                    <Link to="/polls/detail" class="list-group-item list-group-item-action">A simple secondary list group item</Link>
                                    <Link to="/polls/detail" class="list-group-item list-group-item-action">A simple success list group item</Link>
                                    <Link to="/polls/detail" class="list-group-item list-group-item-action disabled"><s>A simple danger list group item</s></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    );
}

export { PollsList }
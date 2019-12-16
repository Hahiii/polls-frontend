import React from 'react';
import { Link } from 'react-router-dom'

function PollsList() {
    return (
        <section className="container-fluid hero hero--register">
            <section className="container">
                <div className="row justify-content-center align-items-center vh-100">
                    <div class="card">
                        <div class="card-header text-center p-3">My Polls</div>
                        <div class="card-body">
                            <div class="list-group list-group-flush">
                                <a href="#" class="list-group-item list-group-item-action">A simple primary list group item</a>
                                <a href="#" class="list-group-item list-group-item-action">A simple secondary list group item</a>
                                <a href="#" class="list-group-item list-group-item-action">A simple success list group item</a>
                                <a href="#" class="list-group-item list-group-item-action disabled"><s>A simple danger list group item</s></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>

    );
}

export { PollsList }
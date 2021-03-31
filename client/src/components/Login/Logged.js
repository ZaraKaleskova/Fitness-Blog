import React from 'react';

const Logged = ({handleLogout}) => {
    return (
        <section className="logged">
            <nav>
                <h2>
                    Welcome
                </h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    );
};

export default Logged;
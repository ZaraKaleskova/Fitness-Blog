import Articles from '../Articles/Articles';
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
            <>

            <Articles />
            </>
        </section>
     
    );
};

export default Logged;
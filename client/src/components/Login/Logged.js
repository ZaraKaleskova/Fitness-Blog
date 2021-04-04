
import React from 'react';
import Articles from '../Articles/Articles';

const Logged = ({handleLogout}, {username}) => {
    return (
        <section className="logged">
            <nav>
            <h1> Hello {username} here</h1>
            
                <button onClick={handleLogout}>Logout</button>
            </nav>
           
        </section>
     
    );
};

export default Logged;


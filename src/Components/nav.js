import React from 'react';

const Nav = ({ firstName, avatar }) => {

    return (

        <div className="nav-bar">

            <div className="navlinks">
                <span>Home</span>
                <span>New Question</span>
                <span>Leader Board</span>
                <span>Hello, { firstName }</span>
                <span>{ avatar }</span>
                <span>Logout</span>
            </div>

        </div>

    )
}

export default Nav
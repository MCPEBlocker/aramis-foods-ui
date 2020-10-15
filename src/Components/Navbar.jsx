import React from 'react';

export default function NavBar(props) {
    return (
        <div className="nav-bar">
            <div className="nav-brand">
                <p>ARAMIS FOODS</p>
            </div>
            <ul className="nav-menus">
                <li className="nav-menu">Dashboard</li>
                <li className="nav-menu">Orders</li>
                <li className="nav-menu active">Users</li>
            </ul>
        </div>
    );
}
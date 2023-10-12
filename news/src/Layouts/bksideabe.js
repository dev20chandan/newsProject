import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Router from '../Router'; // Import your Router configuration

export default function Sidebar() {
  // const userPermissions = useSelector((state) => state.auth.permissions);
  const userPermissions =["Feed","listing","userlisting"]
  return (
    <div className="sidebar_wrapper" id="sideOpen">
      <h2 className="side_heading">News Analysis</h2>
      <i className="fa-solid fa-xmark close d-xl-none" onclick="sidNav()" />
      <h3 className="side_sub_headign">Modern Admin Dashboard</h3>
      <ul className="sidenav_list">
        {Router.map(({ path, permission }, i) => (
          userPermissions.includes(permission) && (
            <li className="sidenav_item" key={i}>
              <NavLink to={path} className="sidenav_link">
                <i className="fa-solid fa-rss" />
                <span>{path.replace('/', '')}</span>
              </NavLink>
            </li>
          )
        ))}
        <li className="sidenav_item">
          <Link
            data-bs-toggle="modal"
            data-bs-target="#logout"
            className="sidenav_link"
          >
            <i className="fa-solid fa-power-off" />
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { routes } from '../Router';
export default function Sidebar() {
  const permission = ['Feed','User']
  const role ="subadmin"

  return (
    <>
      <div className="sidebar_wrapper" id="sideOpen">
        <h2 className="side_heading">
          {/* <img src="assets/images/logo.png" className="logo" alt="" /> */}
          News Analysis
        </h2>
        <i className="fa-solid fa-xmark close d-xl-none" onclick="sidNav()" />
        <h3 className="side_sub_headign">Modern Admin Dashboard</h3>
        <ul className="sidenav_list">
          {routes.map((route, index) => (

            <li className="sidenav_item" key={index}>
              {
               route.sidebar ? role ==="admin"? 
                <NavLink to={`/${route.path}`} className="sidenav_link">
                <i className={`fa-solid ${route.icons}`} />
                <span>{route.title}</span>
              </NavLink>
                :
                permission.includes(route.path) ? <NavLink to={`/${route.path}`} className="sidenav_link">
                <i className={`fa-solid ${route.icons}`} />
                <span>{route.title}</span>
              </NavLink>:"" :""
              }
            </li>
          ))}
          <li className="sidenav_item">
            <Link
              data-bs-toggle="modal"
              data-bs-target="#logout"
              className="sidenav_link"
            >
              <i className="fa-solid fa-power-off" /> <span>Logout</span>
            </Link>

          </li>
        </ul>
      </div>
      <div
        className="modal fade"
        id="logout"
        tabIndex={-1}
        aria-labelledby="food_viewLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header p-0 border-0">
              <h4>Logout</h4>
              <button
                type="button"
                className="btn_close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="modal-body pb-4">
              <form>
                <div className="row">
                  <div className="col-12 text-center">
                    <i className="fa-solid fa-right-from-bracket out_icon d-block" />
                    <strong className="mt-3 mb-4 d-block">
                      Are you sure you want to logout.
                    </strong>
                    <div className="d-flex justify-content-center align-items-center">
                      <Link data-bs-dismiss="modal"
                        aria-label="Close"
                        className="out_btn" >No</Link>

                      <Link to={'/'} className="out_btn" aria-hidden="true" >Yes</Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

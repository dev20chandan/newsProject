import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast'
import _ from 'lodash'
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state?.getUserDetails)
  useEffect(() => {
    if (_.isEmpty(user)) {
      navigate('/')
    }
  }, [])

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <nav className="navbar navbar-expand-xl">
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse w-100"
            id="navbarSupportedContent"
          >
            <div className="d-flex flex-lg-nowrap flex-wrap justify-content-between  w-100 align-items-end">
              <div className="nav_search w-100">
                <input
                  type="text"
                  className="form-control mb-lg-0 mb-4"
                  placeholder="Search here"
                />
                <i className="fa-solid fa-magnifying-glass" />
              </div>
              <a href="javascript:void(0)" className="nt_box">
                <i className="fa-regular fa-bell" />
                <span className="num_cir">20</span>
              </a>
              <a href="javascript:void(0)" className="nt_box">
                <i className="fa-regular fa-comment-dots" />
                <span className="num_cir">15</span>
              </a>

              <a
                href="javascript:void(0)"
                className="nt_box"
                style={{ backgroundColor: "rgba(255, 91, 91, 0.15)" }}
              >
                <i className="fa-solid fa-gear" style={{ color: "#FF5B5B" }} />
                <span
                  className="num_cir"
                  style={{ backgroundColor: "#FF5B5B" }}
                >
                  19
                </span>
              </a>
            </div>
          </div>
          <i
            className="fa-solid fa-angles-down p-2 nav_op collapsed d-xl-none"
            style={{ cursor: "pointer" }}
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <a href="javascript:void(0)" className="nav_user me-auto">
            <h6>
              Hello, <strong>{user?.body?.firstName}</strong>
            </h6>
            <div className="nav_user_img">
              <img src="/assets/images/user.png" alt="" />
            </div>
          </a>
          <i
            className="fa-solid fa-bars me-2 side_op_btn  d-xl-none"
            onclick="sidNav()"
          />
        </div>
      </nav>
    </>
  )
}

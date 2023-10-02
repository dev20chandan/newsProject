import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'


export default function MainLayout() {
  return (
    <>
    {/*
   */}

<>
  <div className="appview">
    {/* sidebar */}
    <Sidebar /> 
    {/* \ sidebar */}
    {/* right Content */}
    <div className="right_content">
      {/* Navbar */}
      <Header />
      {/* \ Navbar */}
      {/* deshboad */}
     <Outlet />
      {/* \ deshboad */}
    </div>
    {/* \ right Content */}
  </div>
  {/* food_duplicate */}
  <div
    className="modal fade"
    id="food_duplicate"
    tabIndex={-1}
    aria-labelledby="food_duplicateLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-sm modal-dialog-centered">
      <div className="modal-content py-3">
        <div className="justify-content-center modal-header p-0 border-0">
          <h4 className="">Duplicate Food Item</h4>
          <button
            type="button"
            className="btn_close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="row">
              <div className="col-12">
                <p className="px-3 text-center">
                  Are you sure want to duplicate this Food Item ?
                </p>
              </div>
              <div className="col-12 pt-3 d-flex align-items-center justify-content-center">
                <button
                  type="button"
                  className="ed_pbtn btn mx-1 del_btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  No
                </button>
                <button
                  type="button"
                  className="ed_pbtn btn mx-1"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Yes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</>

    </>
  )
}

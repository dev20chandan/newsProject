import React from 'react'

export default function Add() {
  return (
    <>
      <section className="wrapper">
        <div className="container-fluid">
          <div className="wrapper_header d-flex justify-content-between align-items-center">
            <div>
              <h2 className="comp_heading">Add Feed Detail</h2>
              <span className="back_route">
                <a href="javascript:void(0)">Feed /</a>Add Feed Detail
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="profile_page">
                <form action="coupons.html">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <lable htmlFor="title">Title</lable>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          className="form-control"
                          placeholder="Enter Title"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <lable htmlFor="link">Link</lable>
                        <input
                          type="text"
                          name="link"
                          id="link"
                          className="form-control"
                          placeholder="Enter Link"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <lable htmlFor="num">Description</lable>
                        <textarea
                          name=""
                          id=""
                          className="form-control"
                          rows={4}
                          placeholder="Type.."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-12 pt-3">
                      <button
                        type="submit"
                        className="ed_pbtn btn ms-auto"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

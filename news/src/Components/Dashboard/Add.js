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
                <div className="col-12">
                  <div className="form-group">
                    <lable htmlFor="fname1">Add Coupon Banner</lable>
                  </div>
                  <div className="banner_upload">
                    <label htmlFor="im_file4">
                      {" "}
                      <img src="/assets/images/banner.png" alt="" />
                      <i className="fa-solid fa-camera" />
                    </label>
                    <input type="file" className="d-none" id="im_file4" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <lable htmlFor="fname1">Add Coupon Logo</lable>
                  </div>
                  <div className="banner_upload">
                    <label htmlFor="im_file05">
                      {" "}
                      <img
                        style={{ height: 150 }}
                        className="w-100"
                        src="/assets/images/banner.png"
                        alt=""
                      />
                      <i className="fa-solid fa-camera" />
                    </label>
                    <input type="file" className="d-none" id="im_file05" />
                  </div>
                </div>
                <div className="col-md-8 ms-auto">
                  <div className="form-group">
                    <lable htmlFor="lname">Coupon Title</lable>
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      className="form-control"
                      placeholder="Enter"
                    />
                  </div>
                  <div className="form-group">
                    <lable htmlFor="fname1">Serial Number</lable>
                    <input
                      type="text"
                      name="fname1"
                      id="fname1"
                      className="form-control"
                      placeholder="Enter"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <lable htmlFor="num">Terms and Condition</lable>
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
                <div className="col-md-6">
                  <div className="form-group">
                    <lable htmlFor="gender">Discount</lable>
                    <input
                      type="text"
                      name="gender"
                      id="gender"
                      className="form-control"
                      placeholder="Enter"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <lable htmlFor="dob">Coupon Code</lable>
                    <input
                      type="text"
                      name="dob"
                      id="dob"
                      className="form-control"
                      placeholder="Enter"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <lable htmlFor="add">Validity</lable>
                    <input
                      type="text"
                      name="add"
                      id="add"
                      className="form-control"
                      placeholder="Enter"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <lable htmlFor="add">Coupon Quantity</lable>
                    <input
                      type="text"
                      name="add"
                      id="add"
                      className="form-control"
                      placeholder="Enter"
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

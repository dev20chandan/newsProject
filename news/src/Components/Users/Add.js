import React from 'react'

export default function Add() {
    return (
        <>
            <div className="container-fluid">
                <div className="wrapper_header d-flex justify-content-between align-items-center">
                    <div>
                        <h2 className="comp_heading">Add Details</h2>
                        <span className="back_route">
                            <a href="javascript:void(0)">Advertising Management /</a>Add
                            Promotion
                        </span>
                    </div>
                </div>
            </div>
            <section className="wrapper">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="profile_page">
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <div className="banner_upload">
                                                <label htmlFor="im_file4">
                                                    {" "}
                                                    <img src="/assets/images/banner.png" alt="" />
                                                    <i className="fa-solid fa-camera" />
                                                </label>
                                                <input type="file" className="d-none" id="im_file4" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="banner_upload">
                                                <label htmlFor="im_file4">
                                                    {" "}
                                                    <img src="/assets/images/banner.png" alt="" />
                                                    <i className="fa-solid fa-camera" />
                                                </label>
                                                <input type="file" className="d-none" id="im_file4" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="banner_upload">
                                                <label htmlFor="im_file4">
                                                    {" "}
                                                    <img src="/assets/images/banner.png" alt="" />
                                                    <i className="fa-solid fa-camera" />
                                                </label>
                                                <input type="file" className="d-none" id="im_file4" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <lable htmlFor="fname1">Start Date</lable>
                                                <input
                                                    type="date"
                                                    name="fname1"
                                                    id="fname1"
                                                    className="form-control"
                                                    placeholder="Enter"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <lable htmlFor="lname">End Date</lable>
                                                <input
                                                    type="date"
                                                    name="lname"
                                                    id="lname"
                                                    className="form-control"
                                                    placeholder="Enter"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <lable htmlFor="lname">Promotion Name</lable>
                                                <input
                                                    type="text"
                                                    name="lname"
                                                    id="lname"
                                                    className="form-control"
                                                    placeholder="Enter"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <lable htmlFor="num">Promotion Details</lable>
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
                                                <lable htmlFor="gender">Food Categories</lable>
                                                <select name="" id="" className="form-control">
                                                    <option value="">Asian cuisine</option>
                                                    <option value="">India Cuisine</option>
                                                    <option value="">Western Cuisine</option>
                                                    <option value="">Japanese cuisine</option>
                                                    <option value="">Korean cuisine</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <lable htmlFor="gender">Promotion Type</lable>
                                                <select name="" id="" className="form-control">
                                                    <option value="">5%</option>
                                                    <option value="">10%</option>
                                                    <option value="">15%</option>
                                                    <option value="">20%</option>
                                                    <option value="">25%</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/* <div class="col-md-4">
                                      <div class="form-group">
                                          <lable for="add">Validity</lable>
                                          <input type="text" name="add" id="add" class="form-control"
                                              placeholder="Enter" />
                                      </div>
                                  </div> */}
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <lable htmlFor="num">Terms and Conditions</lable>
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
                                                type="button"
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

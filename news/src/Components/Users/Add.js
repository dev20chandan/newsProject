import React from 'react'
import { Link } from 'react-router-dom'

export default function Add() {
    return (
        <>
            <div className="container-fluid">
                <div className="wrapper_header d-flex justify-content-between align-items-center">
                    <div>
                        <h2 className="comp_heading">Add Details</h2>
                        <span className="back_route">
                            <Link to={'/User'}>User /</Link>Add User
                            {/* <a href="javascript:void(0)">User /</a>Add User */}

                        </span>
                    </div>
                </div>
            </div>
            <section className="wrapper">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="profile_page">
                                <form>
                                    <div className="row g-3">

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <lable htmlFor="lname">Name</lable>
                                                <input
                                                    type="text"
                                                    name="lname"
                                                    id="lname"
                                                    className="form-control"
                                                    placeholder="Enter Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <lable htmlFor="lname">Email</lable>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    id="email"
                                                    className="form-control"
                                                    placeholder="Enter Email"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <lable htmlFor="lname">Phone</lable>
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    id="phone"
                                                    className="form-control"
                                                    placeholder="Enter Phone"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <lable htmlFor="lname">Country</lable>
                                                <input
                                                    type="text"
                                                    name="country"
                                                    id="country"
                                                    className="form-control"
                                                    placeholder="Enter Country"
                                                />
                                            </div>
                                        </div>
                                        {/* <div className="col-md-12">
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
                                        </div> */}
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

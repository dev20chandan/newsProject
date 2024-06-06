import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFeed } from '../../features/Feed/feedSlice'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


export default function Add() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setformData] = useState({})
  const handleChange = (e) => {
    const { name, value } = e.target
    setformData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const response = await dispatch(addFeed(formData))
      if ((response.payload.code === 400) || (response.payload.code === 404) || (response.meta.rejectedWithValue == true)) {
        let msg = response.meta.rejectedWithValue ? response.payload : response.payload.message
        console.log(msg, '=====msg')
        toast.error("Somthing Went wrong")
      } else {
        toast.success("Feed Added Successfully")
        navigate('/Feed')
      }
    } catch (error) {
      console.log(error, '====')
    }
  }

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
                <form action="coupons.html" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          className="form-control"
                          placeholder="Enter Title"

                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="link">Link</label>
                        <input
                          type="text"
                          name="link"
                          id="link"
                          className="form-control"
                          placeholder="Enter Link"

                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                          name="description"
                          id="description"
                          className="form-control"
                          rows={4}
                          placeholder="Type.."

                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12 pt-3">
                      <input type='submit' className="ed_pbtn btn ms-auto" />
                      {/* <input
            type="submit"
            className="ed_pbtn btn ms-auto"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            Save
          </input> */}
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

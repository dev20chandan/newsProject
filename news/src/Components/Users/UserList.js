import React from 'react'
import { Link } from 'react-router-dom'

export default function UserList() {
  return (
    <>
      <section className="wrapper">
        <div className="container-fluid">
          <div className="wrapper_header d-flex justify-content-between align-items-center">
            <div>
              <h2 className="comp_heading">User List</h2>
              <h4 className="comp_sub_heading">
                Here is your general User list data
              </h4>
            </div>


            <div className="col-xxl-7 col-lg-8 d-flex justify-content-end gap-3 align-items-center flex-md-nowrap flex-wrap">
              <div className="mini_search">
                <div className="form-group">
                  <button
                    type="button"
                    className="fiter_btn"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-sliders me-3 filter_icon" /> Filter
                    <i className="fa-solid fa-angle-down ms-auto" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <button className="dropdown-item" type="button">
                        User name
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Customer Name
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Location
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <Link to='/User/addAdd' className="ico_box active " >
                {" "}
                <i className="fa-solid fa-plus" />{" "}
              </Link>


              <foodadd></foodadd>
            </div>

          </div>
        </div>
      </section>
      <section className="wrapper">
        <div className="container-fluid">
          <div className="responsive-table">
            <table className="admin_table table">
              <thead className="table_header">
                <tr>
                  <th>Sl No</th>
                  <th>
                    <div className="d-flex align-items-end justify-content-start">
                      Name
                      <span className="d-inline-flex flex-column up_down_icon">
                        <i className="fa-solid fa-caret-up" />
                        <i className="fa-solid fa-caret-down" />
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className="d-flex align-items-end justify-content-start">
                      Email
                      <span className="d-inline-flex flex-column up_down_icon">
                        <i className="fa-solid fa-caret-up" />
                        <i className="fa-solid fa-caret-down" />
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className="d-flex align-items-end justify-content-start">
                      Location
                      <span className="d-inline-flex flex-column up_down_icon">
                        <i className="fa-solid fa-caret-up" />
                        <i className="fa-solid fa-caret-down" />
                      </span>
                    </div>
                  </th>
                  {/* <th>
                    <div className="d-flex align-items-end justify-content-start">
                      Total Spent
                      <span className="d-inline-flex flex-column up_down_icon">
                        <i className="fa-solid fa-caret-up" />
                        <i className="fa-solid fa-caret-down" />
                      </span>
                    </div>
                  </th> */}
                  <th>
                    <div className="d-flex align-items-end justify-content-start">
                      Registration
                      <span className="d-inline-flex flex-column up_down_icon">
                        <i className="fa-solid fa-caret-up" />
                        <i className="fa-solid fa-caret-down" />
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="table_body">
                <tr>
                  <td data-label="Customer ID">#C-004560</td>
                  <td data-label="Restaurant name">CUT By Wolfgang Puck</td>
                  <td data-label="Customer Name">test@email.com</td>
                  <td data-label="Location">290 Orchard Rd</td>
                  {/* <td data-label="Total Spent">$0.00</td> */}
                  <td data-label="Membership">
                    <a   href="javascript:void(0)" className="t_btn acc">
                      Approved
                    </a>
                    <div className="btn-group t_dropdown">
                      <i
                        className="fa-solid fa-ellipsis"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      />
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a href="customer-id.html" className="dropdown-item">
                            View Detail
                          </a>
                        </li>
                        <li>
                          <a
                            href="manager-edit.html"
                            className="dropdown-item"
                            type="button"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#manager-delete"
                            type="button"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td data-label="Customer ID">#C-004560</td>
                  <td data-label="Restaurant name">CUT By Wolfgang Puck</td>
                  <td data-label="Customer Name">Veronica</td>
                  <td data-label="Location">290 Orchard Rd</td>
                  {/* <td data-label="Total Spent">$0.00</td> */}
                  <td data-label="Membership">
                    <a   href="javascript:void(0)" className="t_btn">
                      Rejected
                    </a>
                    <div className="btn-group t_dropdown">
                      <i
                        className="fa-solid fa-ellipsis"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      />
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a href="customer-id.html" className="dropdown-item">
                            View Detail
                          </a>
                        </li>
                        <li>
                          <a
                            href="manager-edit.html.html"
                            className="dropdown-item"
                            type="button"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#manager-delete"
                            type="button"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td data-label="Customer ID">#C-004560</td>
                  <td data-label="Restaurant name">CUT By Wolfgang Puck</td>
                  <td data-label="Customer Name">Veronica</td>
                  <td data-label="Location">290 Orchard Rd</td>
                  {/* <td data-label="Total Spent">$0.00</td> */}
                  <td data-label="Membership">
                    <a   href="javascript:void(0)" className="t_btn acc">
                      Approved
                    </a>
                    <div className="btn-group t_dropdown">
                      <i
                        className="fa-solid fa-ellipsis"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      />
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a href="customer-id.html" className="dropdown-item">
                            View Detail
                          </a>
                        </li>
                        <li>
                          <a
                            href="manager-edit.html"
                            className="dropdown-item"
                            type="button"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#manager-delete"
                            type="button"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td data-label="Customer ID">#C-004560</td>
                  <td data-label="Restaurant name">CUT By Wolfgang Puck</td>
                  <td data-label="Customer Name">Veronica</td>
                  <td data-label="Location">290 Orchard Rd</td>
                  {/* <td data-label="Total Spent">$0.00</td> */}
                  <td data-label="Membership">
                    <a   href="javascript:void(0)" className="t_btn">
                      Rejected
                    </a>
                    <div className="btn-group t_dropdown">
                      <i
                        className="fa-solid fa-ellipsis"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      />
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a href="customer-id.html" className="dropdown-item">
                            View Detail
                          </a>
                        </li>
                        <li>
                          <a
                            href="manager-edit.html"
                            className="dropdown-item"
                            type="button"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#manager-delete"
                            type="button"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td data-label="Customer ID">#C-004560</td>
                  <td data-label="Restaurant name">CUT By Wolfgang Puck</td>
                  <td data-label="Customer Name">Veronica</td>
                  <td data-label="Location">290 Orchard Rd</td>
                  {/* <td data-label="Total Spent">$0.00</td> */}
                  <td data-label="Membership">
                    <a   href="javascript:void(0)" className="t_btn">
                      Rejected
                    </a>
                    <div className="btn-group t_dropdown">
                      <i
                        className="fa-solid fa-ellipsis"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      />
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a href="customer-id.html" className="dropdown-item">
                            View Detail
                          </a>
                        </li>
                        <li>
                          <a
                            href="manager-edit.html.html"
                            className="dropdown-item"
                            type="button"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#manager-delete"
                            type="button"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td data-label="Customer ID">#C-004560</td>
                  <td data-label="Restaurant name">CUT By Wolfgang Puck</td>
                  <td data-label="Customer Name">Veronica</td>
                  <td data-label="Location">290 Orchard Rd</td>
                  {/* <td data-label="Total Spent">$0.00</td> */}
                  <td data-label="Membership">
                    <a   href="javascript:void(0)" className="t_btn acc">
                      Approved
                    </a>
                    <div className="btn-group t_dropdown">
                      <i
                        className="fa-solid fa-ellipsis"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      />
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a href="customer-id.html" className="dropdown-item">
                            View Detail
                          </a>
                        </li>
                        <li>
                          <a
                            href="manager-edit.html"
                            className="dropdown-item"
                            type="button"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#manager-delete"
                            type="button"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td data-label="Customer ID">#C-004560</td>
                  <td data-label="Restaurant name">CUT By Wolfgang Puck</td>
                  <td data-label="Customer Name">Veronica</td>
                  <td data-label="Location">290 Orchard Rd</td>
                  {/* <td data-label="Total Spent">$0.00</td> */}
                  <td data-label="Membership">
                    <a   href="javascript:void(0)" className="t_btn">
                      Rejected
                    </a>
                    <div className="btn-group t_dropdown">
                      <i
                        className="fa-solid fa-ellipsis"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      />
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a href="customer-id.html" className="dropdown-item">
                            View Detail
                          </a>
                        </li>
                        <li>
                          <a
                            href="manager-edit.html"
                            className="dropdown-item"
                            type="button"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#manager-delete"
                            type="button"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td data-label="Customer ID">#C-004560</td>
                  <td data-label="Restaurant name">CUT By Wolfgang Puck</td>
                  <td data-label="Customer Name">Veronica</td>
                  <td data-label="Location">290 Orchard Rd</td>
                  {/* <td data-label="Total Spent">$0.00</td> */}
                  <td data-label="Membership">
                    <a   href="javascript:void(0)" className="t_btn">
                      Rejected
                    </a>
                    <div className="btn-group t_dropdown">
                      <i
                        className="fa-solid fa-ellipsis"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      />
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a href="customer-id.html" className="dropdown-item">
                            View Detail
                          </a>
                        </li>
                        <li>
                          <a
                            href="manager-edit.html.html"
                            className="dropdown-item"
                            type="button"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#manager-delete"
                            type="button"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td data-label="Customer ID">#C-004560</td>
                  <td data-label="Restaurant name">CUT By Wolfgang Puck</td>
                  <td data-label="Customer Name">Veronica</td>
                  <td data-label="Location">290 Orchard Rd</td>
                  {/* <td data-label="Total Spent">$0.00</td> */}
                  <td data-label="Membership">
                    <a   href="javascript:void(0)" className="t_btn acc">
                      Approved
                    </a>
                    <div className="btn-group t_dropdown">
                      <i
                        className="fa-solid fa-ellipsis"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      />
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a href="customer-id.html" className="dropdown-item">
                            View Detail
                          </a>
                        </li>
                        <li>
                          <a
                            href="manager-edit.html"
                            className="dropdown-item"
                            type="button"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#manager-delete"
                            type="button"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td data-label="Customer ID">#C-004560</td>
                  <td data-label="Restaurant name">CUT By Wolfgang Puck</td>
                  <td data-label="Customer Name">Veronica</td>
                  <td data-label="Location">290 Orchard Rd</td>
                  {/* <td data-label="Total Spent">$0.00</td> */}
                  <td data-label="Membership">
                    <a   href="javascript:void(0)" className="t_btn">
                      Rejected
                    </a>
                    <div className="btn-group t_dropdown">
                      <i
                        className="fa-solid fa-ellipsis"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      />
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a href="customer-id.html" className="dropdown-item">
                            View Detail
                          </a>
                        </li>
                        <li>
                          <a
                            href="manager-edit.html"
                            className="dropdown-item"
                            type="button"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#manager-delete"
                            type="button"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td data-label="Customer ID">#C-004560</td>
                  <td data-label="Restaurant name">CUT By Wolfgang Puck</td>
                  <td data-label="Customer Name">Veronica</td>
                  <td data-label="Location">290 Orchard Rd</td>
                  {/* <td data-label="Total Spent">$0.00</td> */}
                  <td data-label="Membership">
                    <a   href="javascript:void(0)" className="t_btn">
                      Rejected
                    </a>
                    <div className="btn-group t_dropdown">
                      <i
                        className="fa-solid fa-ellipsis"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      />
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a href="customer-id.html" className="dropdown-item">
                            View Detail
                          </a>
                        </li>
                        <li>
                          <a
                            href="manager-edit.html"
                            className="dropdown-item"
                            type="button"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#manager-delete"
                            type="button"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="table_footer">
              <div className="row align-items-center g-3">
                <div className="col-md-6 text-md-start text-center">
                  <p>Showing 12 from 46 data</p>
                </div>
                <div className="col-md-6">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination ms-auto me-md-0 me-auto">
                      <li className="page-item">
                        <a className="page-link"   href="javascript:void(0)" aria-label="Previous">
                          <span aria-hidden="true">
                            <i className="fa-solid fa-angles-left" />
                          </span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link active"   href="javascript:void(0)">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link"   href="javascript:void(0)">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link"   href="javascript:void(0)">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link"   href="javascript:void(0)" aria-label="Next">
                          <span aria-hidden="true">
                            <i className="fa-solid fa-angles-right" />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

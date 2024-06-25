import React, { useState, useEffect } from 'react'
import DeletePopup from '../../Comman/DeletePopup'
import MyPagination from '../../Comman/MyPagination'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFeedResponse } from '../../features/Feed/feedSlice';


export default function Dashboard() {
    const dispatch = useDispatch();
    const { feed, loading, error } = useSelector((state) => state.getFeedResponse)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalItems = feed?.body?.total || 10;

    const handlePageChange = (newPage) => {
        // console.log(newPage,'=========================newpage')
        setCurrentPage(newPage);
        fetchPaginatedData(newPage);
    };

    const fetchPaginatedData = async (currentPage) => {
        try {
            dispatch(getFeedResponse(currentPage))
        } catch (error) {
            console.error("Error fetching feed:", error);
            //   setError(error); // Store the error for handling
        }
    };

    useEffect(() => {
        fetchPaginatedData(currentPage);
    }, [dispatch]);


    return (
        <>
            <section className="wrapper pb-sm-5 pb-2">
                <div className="container-fluid">
                    <div className="wrapper_header row align-items-center">
                        <div className="col-xxl-5 col-lg-4">
                            <h2 className="comp_heading">Feed Manage</h2>
                            <h4 className="comp_sub_heading">
                                Here's your ad management summary with chart view
                            </h4>
                        </div>
                        <div className="col-xxl-7 col-lg-8 d-flex justify-content-end gap-3 align-items-center flex-md-nowrap flex-wrap">
                            <div className="mini_search">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search here"
                                    />
                                    <i className="fa-solid fa-magnifying-glass sera_ico" />
                                </div>
                            </div>
                            <Link to='/Feed/add' className="ico_box active " >
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
                                            Title
                                            <span className="d-inline-flex flex-column up_down_icon">
                                                <i className="fa-solid fa-caret-up" />
                                                <i className="fa-solid fa-caret-down" />
                                            </span>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="d-flex align-items-end justify-content-start">
                                            Description
                                            <span className="d-inline-flex flex-column up_down_icon">
                                                <i className="fa-solid fa-caret-up" />
                                                <i className="fa-solid fa-caret-down" />
                                            </span>
                                        </div>
                                    </th>

                                    <th>
                                        <div className="d-flex align-items-end justify-content-start">
                                            Status
                                            <span className="d-inline-flex flex-column up_down_icon">
                                                <i className="fa-solid fa-caret-up" />
                                                <i className="fa-solid fa-caret-down" />
                                            </span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="table_body">
                                {
                                    loading ? <div class="d-flex justify-content-center">
                                        <div class="spinner-border" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </div> :
                                        feed && feed?.body && feed?.body?.data.map((e, i) =>
                                            <>
                                                <tr key={i}>
                                                    <td data-label="Customer ID">#{i+1}</td>
                                                    <td data-label="Restaurant name">{e?.title}</td>
                                                    <td data-label="Customer Name">{e?.description}</td>
                                                    <td data-label="Membership">
                                                        {i % 2 == 0 ? <a href="javascript:void(0)" className="t_btn">
                                                            Rejected
                                                        </a> : <a href="javascript:void(0)" className="t_btn acc">
                                                            Approved
                                                        </a>}
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
                                            </>

                                        )}

                            </tbody>
                        </table>
                        <div className="table_footer">
                            <div className="row align-items-center g-3">
                                <div className="col-md-6 text-md-start text-center">
                                    <p>Showing {itemsPerPage} from {totalItems} data</p>
                                </div>
                                <MyPagination
                                    totalItems={totalItems}
                                    itemsPerPage={itemsPerPage}
                                    onPageChange={handlePageChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <DeletePopup />
        </>
    )
}

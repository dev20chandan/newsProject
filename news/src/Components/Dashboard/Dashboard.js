import React ,{useState} from 'react'
import DeletePopup from '../../Comman/DeletePopup'
import MyPagination from '../../Comman/MyPagination'
import { Link } from 'react-router-dom';

export default function Dashboard() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12; // Set the number of items per page
    const totalItems = 46; // Replace with the total number of data items
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
      // Fetch or update data for the new page here
    };
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
            <section className="wrpper">
                <div className="container-fluid">
                    {/* {/* <div class="gird_gallery grid_list"> * /} */}
                    <div className="gird_gallery" id="gList">
                        <div className="card">
                            <div className="g_card">
                                <div className="card_top">
                                    <img src="./assets/images/f1.png" alt="" />
                                </div>
                                <div className="card_body">
                                    <h3 className="card_name">Spicy Mozarella with Barbeque</h3>
                                    <p className="food_name">
                                        <span>Food /</span> Noodle
                                    </p>
                                    <div className="card_icos">
                                        <a
                                            className="text-decoration-none"
                                            href="view-promotion.html"
                                        >
                                            <div className="ico_s">
                                                {" "}
                                                <i className="fa-regular fa-eye" />{" "}
                                            </div>
                                            <span>View</span>
                                        </a>
                                        <a
                                            className="text-decoration-none"
                                            href="edit-promotion.html"
                                        >
                                            <div className="ico_s red">
                                                {" "}
                                                <i className="fa-regular fa-pen-to-square" />{" "}
                                            </div>
                                            <span>Edit</span>
                                        </a>
                                        <a
                                            className="text-decoration-none"
                                            data-bs-toggle="modal"
                                            data-bs-target="#food_delete"
                                        >
                                            <div className="ico_s blue">
                                                {" "}
                                                <i className="fa-regular fa-trash-can" />{" "}
                                            </div>
                                            <span>Delete</span>
                                        </a>
                                        <a
                                            className="text-decoration-none"
                                            data-bs-toggle="modal"
                                            data-bs-target="#food_duplicate"
                                        >
                                            <div className="ico_s purple">
                                                {" "}
                                                <i className="fa-regular fa-square-plus" />{" "}
                                            </div>
                                            <span>Duplicate</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                      <div class="g_card">
                          <div class="card_top">
                              <img src="./assets/images/f1.png" alt="" />
                          </div>
                          <div class="card_body">
                              <h3 class="card_name">Spicy Mozarella with Barbeque</h3>
                              <p class='food_name'><span>Food /</span> Noodle</p>
                              <div class="card_icos">
                                  <a class="text-decoration-none" href="view-promotion.html">
                                      <div class="ico_s"> <i class="fa-regular fa-eye"></i> </div>
                                      <span>View</span>
                                  </a>
                                  <a class="text-decoration-none" href="edit-promotion.html">
                                      <div class="ico_s red"> <i class="fa-regular fa-pen-to-square"></i> </div>
                                      <span>Edit</span>
                                  </a>
                                  <a class="text-decoration-none" data-bs-toggle="modal"
                                      data-bs-target="#food_delete">
                                      <div class="ico_s blue"> <i class="fa-regular fa-trash-can"></i> </div>
                                      <span>Delete</span>
                                  </a>
                                  <a class="text-decoration-none" data-bs-toggle="modal"
                                      data-bs-target="#food_duplicate">
                                      <div class="ico_s purple"> <i class="fa-regular fa-square-plus"></i> </div>
                                      <span>Duplicate</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="card">
                      <div class="g_card">
                          <div class="card_top">
                              <img src="./assets/images/f1.png" alt="" />
                          </div>
                          <div class="card_body">
                              <h3 class="card_name">Spicy Mozarella with Barbeque</h3>
                              <p class='food_name'><span>Food /</span> Noodle</p>
                              <div class="card_icos">
                                  <a class="text-decoration-none" href="view-promotion.html">
                                      <div class="ico_s"> <i class="fa-regular fa-eye"></i> </div>
                                      <span>View</span>
                                  </a>
                                  <a class="text-decoration-none" href="edit-promotion.html">
                                      <div class="ico_s red"> <i class="fa-regular fa-pen-to-square"></i> </div>
                                      <span>Edit</span>
                                  </a>
                                  <a class="text-decoration-none" data-bs-toggle="modal"
                                      data-bs-target="#food_delete">
                                      <div class="ico_s blue"> <i class="fa-regular fa-trash-can"></i> </div>
                                      <span>Delete</span>
                                  </a>
                                  <a class="text-decoration-none" data-bs-toggle="modal"
                                      data-bs-target="#food_duplicate">
                                      <div class="ico_s purple"> <i class="fa-regular fa-square-plus"></i> </div>
                                      <span>Duplicate</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="card">
                      <div class="g_card">
                          <div class="card_top">
                              <img src="./assets/images/f1.png" alt="" />
                          </div>
                          <div class="card_body">
                              <h3 class="card_name">Spicy Mozarella with Barbeque</h3>
                              <p class='food_name'><span>Food /</span> Noodle</p>
                              <div class="card_icos">
                                  <a class="text-decoration-none" href="view-promotion.html">
                                      <div class="ico_s"> <i class="fa-regular fa-eye"></i> </div>
                                      <span>View</span>
                                  </a>
                                  <a class="text-decoration-none" href="edit-promotion.html">
                                      <div class="ico_s red"> <i class="fa-regular fa-pen-to-square"></i> </div>
                                      <span>Edit</span>
                                  </a>
                                  <a class="text-decoration-none" data-bs-toggle="modal"
                                      data-bs-target="#food_delete">
                                      <div class="ico_s blue"> <i class="fa-regular fa-trash-can"></i> </div>
                                      <span>Delete</span>
                                  </a>
                                  <a class="text-decoration-none" data-bs-toggle="modal"
                                      data-bs-target="#food_duplicate">
                                      <div class="ico_s purple"> <i class="fa-regular fa-square-plus"></i> </div>
                                      <span>Duplicate</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="card">
                      <div class="g_card">
                          <div class="card_top">
                              <img src="./assets/images/f1.png" alt="" />
                          </div>
                          <div class="card_body">
                              <h3 class="card_name">Spicy Mozarella with Barbeque</h3>
                              <p class='food_name'><span>Food /</span> Noodle</p>
                              <div class="card_icos">
                                  <a class="text-decoration-none" href="view-promotion.html">
                                      <div class="ico_s"> <i class="fa-regular fa-eye"></i> </div>
                                      <span>View</span>
                                  </a>
                                  <a class="text-decoration-none" href="edit-promotion.html">
                                      <div class="ico_s red"> <i class="fa-regular fa-pen-to-square"></i> </div>
                                      <span>Edit</span>
                                  </a>
                                  <a class="text-decoration-none" data-bs-toggle="modal"
                                      data-bs-target="#food_delete">
                                      <div class="ico_s blue"> <i class="fa-regular fa-trash-can"></i> </div>
                                      <span>Delete</span>
                                  </a>
                                  <a class="text-decoration-none" data-bs-toggle="modal"
                                      data-bs-target="#food_duplicate">
                                      <div class="ico_s purple"> <i class="fa-regular fa-square-plus"></i> </div>
                                      <span>Duplicate</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="card">
                      <div class="g_card">
                          <div class="card_top">
                              <img src="./assets/images/f1.png" alt="" />
                          </div>
                          <div class="card_body">
                              <h3 class="card_name">Spicy Mozarella with Barbeque</h3>
                              <p class='food_name'><span>Food /</span> Noodle</p>
                              <div class="card_icos">
                                  <a class="text-decoration-none" href="view-promotion.html">
                                      <div class="ico_s"> <i class="fa-regular fa-eye"></i> </div>
                                      <span>View</span>
                                  </a>
                                  <a class="text-decoration-none" href="edit-promotion.html">
                                      <div class="ico_s red"> <i class="fa-regular fa-pen-to-square"></i> </div>
                                      <span>Edit</span>
                                  </a>
                                  <a class="text-decoration-none" data-bs-toggle="modal"
                                      data-bs-target="#food_delete">
                                      <div class="ico_s blue"> <i class="fa-regular fa-trash-can"></i> </div>
                                      <span>Delete</span>
                                  </a>
                                  <a class="text-decoration-none" data-bs-toggle="modal"
                                      data-bs-target="#food_duplicate">
                                      <div class="ico_s purple"> <i class="fa-regular fa-square-plus"></i> </div>
                                      <span>Duplicate</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="card">
                      <div class="g_card">
                          <div class="card_top">
                              <img src="./assets/images/f1.png" alt="" />
                          </div>
                          <div class="card_body">
                              <h3 class="card_name">Spicy Mozarella with Barbeque</h3>
                              <p class='food_name'><span>Food /</span> Noodle</p>
                              <div class="card_icos">
                                  <a class="text-decoration-none" href="view-promotion.html">
                                      <div class="ico_s"> <i class="fa-regular fa-eye"></i> </div>
                                      <span>View</span>
                                  </a>
                                  <a class="text-decoration-none" href="edit-promotion.html">
                                      <div class="ico_s red"> <i class="fa-regular fa-pen-to-square"></i> </div>
                                      <span>Edit</span>
                                  </a>
                                  <a class="text-decoration-none" data-bs-toggle="modal"
                                      data-bs-target="#food_delete">
                                      <div class="ico_s blue"> <i class="fa-regular fa-trash-can"></i> </div>
                                      <span>Delete</span>
                                  </a>
                                  <a class="text-decoration-none" data-bs-toggle="modal"
                                      data-bs-target="#food_duplicate">
                                      <div class="ico_s purple"> <i class="fa-regular fa-square-plus"></i> </div>
                                      <span>Duplicate</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="card">
                      <div class="g_card">
                          <div class="card_top">
                              <img src="./assets/images/f1.png" alt="" />
                          </div>
                          <div class="card_body">
                              <h3 class="card_name">Spicy Mozarella with Barbeque</h3>
                              <p class='food_name'><span>Food /</span> Noodle</p>
                              <div class="card_icos">
                                  <a class="text-decoration-none" href="view-promotion.html">
                                      <div class="ico_s"> <i class="fa-regular fa-eye"></i> </div>
                                      <span>View</span>
                                  </a>
                                  <a class="text-decoration-none" href="edit-promotion.html">
                                      <div class="ico_s red"> <i class="fa-regular fa-pen-to-square"></i> </div>
                                      <span>Edit</span>
                                  </a>
                                  <a class="text-decoration-none" data-bs-toggle="modal"
                                      data-bs-target="#food_delete">
                                      <div class="ico_s blue"> <i class="fa-regular fa-trash-can"></i> </div>
                                      <span>Delete</span>
                                  </a>
                                  <a class="text-decoration-none" data-bs-toggle="modal"
                                      data-bs-target="#food_duplicate">
                                      <div class="ico_s purple"> <i class="fa-regular fa-square-plus"></i> </div>
                                      <span>Duplicate</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="card">
                      <div class="g_card">
                          <div class="card_top">
                              <img src="./assets/images/f1.png" alt="" />
                          </div>
                          <div class="card_body">
                              <h3 class="card_name">Spicy Mozarella with Barbeque</h3>
                              <p class='food_name'><span>Food /</span> Noodle</p>
                              <div class="card_icos">
                                  <a class="text-decoration-none" href="view-promotion.html">
                                      <div class="ico_s"> <i class="fa-regular fa-eye"></i> </div>
                                      <span>View</span>
                                  </a>
                                  <a class="text-decoration-none" href="edit-promotion.html">
                                      <div class="ico_s red"> <i class="fa-regular fa-pen-to-square"></i> </div>
                                      <span>Edit</span>
                                  </a>
                                  <a class="text-decoration-none" data-bs-toggle="modal"
                                      data-bs-target="#food_delete">
                                      <div class="ico_s blue"> <i class="fa-regular fa-trash-can"></i> </div>
                                      <span>Delete</span>
                                  </a>
                                  <a class="text-decoration-none" data-bs-toggle="modal"
                                      data-bs-target="#food_duplicate">
                                      <div class="ico_s purple"> <i class="fa-regular fa-square-plus"></i> </div>
                                      <span>Duplicate</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="card">
                      <div class="g_card">
                          <div class="card_top">
                              <img src="./assets/images/f1.png" alt="" />
                          </div>
                          <div class="card_body">
                              <h3 class="card_name">Spicy Mozarella with Barbeque</h3>
                              <p class='food_name'><span>Food /</span> Noodle</p>
                              <div class="card_icos">
                                  <a class="text-decoration-none" href="view-promotion.html">
                                      <div class="ico_s"> <i class="fa-regular fa-eye"></i> </div>
                                      <span>View</span>
                                  </a>
                                  <a class="text-decoration-none" href="edit-promotion.html">
                                      <div class="ico_s red"> <i class="fa-regular fa-pen-to-square"></i> </div>
                                      <span>Edit</span>
                                  </a>
                                  <a class="text-decoration-none" data-bs-toggle="modal"
                                      data-bs-target="#food_delete">
                                      <div class="ico_s blue"> <i class="fa-regular fa-trash-can"></i> </div>
                                      <span>Delete</span>
                                  </a>
                                  <a class="text-decoration-none" data-bs-toggle="modal"
                                      data-bs-target="#food_duplicate">
                                      <div class="ico_s purple"> <i class="fa-regular fa-square-plus"></i> </div>
                                      <span>Duplicate</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                    </div>
                    <MyPagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
                </div>
            </section>
            <DeletePopup />
        </>
    )
}

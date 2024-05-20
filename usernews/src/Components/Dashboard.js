import React from 'react'

function Dashboard() {
  return (
   <>
     <main>
      {/* Trending Area Start */}
      <div className="trending-area fix">
        <div className="container">
          <div className="trending-main">
            {/* Trending Tittle */}
            <div className="row">
              <div className="col-lg-12">
                <div className="trending-tittle">
                  <strong>Trending now</strong>
                  {/* <p>Rem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
                  <div className="trending-animated">
                    <ul id="js-news" className="js-hidden">
                      <li className="news-item">
                        Bangladesh dolor sit amet, consectetur adipisicing elit.
                      </li>
                      <li className="news-item">
                        Spondon IT sit amet, consectetur.......
                      </li>
                      <li className="news-item">
                        Rem ipsum dolor sit amet, consectetur adipisicing elit.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                {/* Trending Top */}
                <div className="trending-top mb-30">
                  <div className="trend-top-img">
                    <img src="assets/img/trending/trending_top.jpg" alt="" />
                    <div className="trend-top-cap">
                      <span>Appetizers</span>
                      <h2>
                        <a href="details.html">
                          Welcome To The Best Model Winner
                          <br /> Contest At Look of the year
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
                {/* Trending Bottom */}
                <div className="trending-bottom">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="single-bottom mb-35">
                        <div className="trend-bottom-img mb-30">
                          <img
                            src="assets/img/trending/trending_bottom1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="trend-bottom-cap">
                          <span className="color1">Lifestyple</span>
                          <h4>
                            <a href="details.html">
                              Get the Illusion of Fuller Lashes by “Mascng.”
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="single-bottom mb-35">
                        <div className="trend-bottom-img mb-30">
                          <img
                            src="assets/img/trending/trending_bottom2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="trend-bottom-cap">
                          <span className="color2">Sports</span>
                          <h4 />
                          <h4>
                            <a href="details.html">
                              Get the Illusion of Fuller Lashes by “Mascng.”
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="single-bottom mb-35">
                        <div className="trend-bottom-img mb-30">
                          <img
                            src="assets/img/trending/trending_bottom3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="trend-bottom-cap">
                          <span className="color3">Travels</span>
                          <h4>
                            <a href="details.html">
                              {" "}
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Riht content */}
              <div className="col-lg-4">
                <div className="trand-right-single d-flex">
                  <div className="trand-right-img">
                    <img src="assets/img/trending/right1.jpg" alt="" />
                  </div>
                  <div className="trand-right-cap">
                    <span className="color1">Concert</span>
                    <h4>
                      <a href="details.html">
                        Welcome To The Best Model Winner Contest
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="trand-right-single d-flex">
                  <div className="trand-right-img">
                    <img src="assets/img/trending/right2.jpg" alt="" />
                  </div>
                  <div className="trand-right-cap">
                    <span className="color3">sea beach</span>
                    <h4>
                      <a href="details.html">
                        Welcome To The Best Model Winner Contest
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="trand-right-single d-flex">
                  <div className="trand-right-img">
                    <img src="assets/img/trending/right3.jpg" alt="" />
                  </div>
                  <div className="trand-right-cap">
                    <span className="color2">Bike Show</span>
                    <h4>
                      <a href="details.html">
                        Welcome To The Best Model Winner Contest
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="trand-right-single d-flex">
                  <div className="trand-right-img">
                    <img src="assets/img/trending/right4.jpg" alt="" />
                  </div>
                  <div className="trand-right-cap">
                    <span className="color4">See beach</span>
                    <h4>
                      <a href="details.html">
                        Welcome To The Best Model Winner Contest
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="trand-right-single d-flex">
                  <div className="trand-right-img">
                    <img src="assets/img/trending/right5.jpg" alt="" />
                  </div>
                  <div className="trand-right-cap">
                    <span className="color1">Skeping</span>
                    <h4>
                      <a href="details.html">
                        Welcome To The Best Model Winner Contest
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Trending Area End */}
      {/*   Weekly-News start */}
      <div className="weekly-news-area pt-50">
        <div className="container">
          <div className="weekly-wrapper">
            {/* section Tittle */}
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle mb-30">
                  <h3>Weekly Top News</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="weekly-news-active dot-style d-flex dot-style">
                  <div className="weekly-single">
                    <div className="weekly-img">
                      <img src="assets/img/news/weeklyNews2.jpg" alt="" />
                    </div>
                    <div className="weekly-caption">
                      <span className="color1">Strike</span>
                      <h4>
                        <a href="#">Welcome To The Best Model Winner Contest</a>
                      </h4>
                    </div>
                  </div>
                  <div className="weekly-single active">
                    <div className="weekly-img">
                      <img src="assets/img/news/weeklyNews1.jpg" alt="" />
                    </div>
                    <div className="weekly-caption">
                      <span className="color1">Strike</span>
                      <h4>
                        <a href="#">Welcome To The Best Model Winner Contest</a>
                      </h4>
                    </div>
                  </div>
                  <div className="weekly-single">
                    <div className="weekly-img">
                      <img src="assets/img/news/weeklyNews3.jpg" alt="" />
                    </div>
                    <div className="weekly-caption">
                      <span className="color1">Strike</span>
                      <h4>
                        <a href="#">Welcome To The Best Model Winner Contest</a>
                      </h4>
                    </div>
                  </div>
                  <div className="weekly-single">
                    <div className="weekly-img">
                      <img src="assets/img/news/weeklyNews1.jpg" alt="" />
                    </div>
                    <div className="weekly-caption">
                      <span className="color1">Strike</span>
                      <h4>
                        <a href="#">Welcome To The Best Model Winner Contest</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Weekly-News */}
      {/* Whats New Start */}
      <section className="whats-news-area pt-50 pb-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row d-flex justify-content-between">
                <div className="col-lg-3 col-md-3">
                  <div className="section-tittle mb-30">
                    <h3>Whats New</h3>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9">
                  <div className="properties__button">
                    {/*Nav Button  */}
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a
                          className="nav-item nav-link active"
                          id="nav-home-tab"
                          data-toggle="tab"
                          href="#nav-home"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                        >
                          All
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-profile-tab"
                          data-toggle="tab"
                          href="#nav-profile"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                        >
                          Lifestyle
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-contact-tab"
                          data-toggle="tab"
                          href="#nav-contact"
                          role="tab"
                          aria-controls="nav-contact"
                          aria-selected="false"
                        >
                          Travel
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-last-tab"
                          data-toggle="tab"
                          href="#nav-last"
                          role="tab"
                          aria-controls="nav-contact"
                          aria-selected="false"
                        >
                          Fashion
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-Sports"
                          data-toggle="tab"
                          href="#nav-nav-Sport"
                          role="tab"
                          aria-controls="nav-contact"
                          aria-selected="false"
                        >
                          Sports
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-technology"
                          data-toggle="tab"
                          href="#nav-techno"
                          role="tab"
                          aria-controls="nav-contact"
                          aria-selected="false"
                        >
                          Technology
                        </a>
                      </div>
                    </nav>
                    {/*End Nav Button  */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  {/* Nav Card */}
                  <div className="tab-content" id="nav-tabContent">
                    {/* card one */}
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div className="whats-news-caption">
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews1.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews2.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews3.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews4.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card two */}
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <div className="whats-news-caption">
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews1.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews2.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews3.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews4.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card three */}
                    <div
                      className="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                    >
                      <div className="whats-news-caption">
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews1.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews2.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews3.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews4.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* card fure */}
                    <div
                      className="tab-pane fade"
                      id="nav-last"
                      role="tabpanel"
                      aria-labelledby="nav-last-tab"
                    >
                      <div className="whats-news-caption">
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews1.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews2.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews3.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews4.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* card Five */}
                    <div
                      className="tab-pane fade"
                      id="nav-nav-Sport"
                      role="tabpanel"
                      aria-labelledby="nav-Sports"
                    >
                      <div className="whats-news-caption">
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews1.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews2.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews3.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews4.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* card Six */}
                    <div
                      className="tab-pane fade"
                      id="nav-techno"
                      role="tabpanel"
                      aria-labelledby="nav-technology"
                    >
                      <div className="whats-news-caption">
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews1.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews2.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews3.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews4.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Nav Card */}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              {/* Section Tittle */}
              <div className="section-tittle mb-40">
                <h3>Follow Us</h3>
              </div>
              {/* Flow Socail */}
              <div className="single-follow mb-45">
                <div className="single-box">
                  <div className="follow-us d-flex align-items-center">
                    <div className="follow-social">
                      <a href="#">
                        <img src="assets/img/news/icon-fb.png" alt="" />
                      </a>
                    </div>
                    <div className="follow-count">
                      <span>8,045</span>
                      <p>Fans</p>
                    </div>
                  </div>
                  <div className="follow-us d-flex align-items-center">
                    <div className="follow-social">
                      <a href="#">
                        <img src="assets/img/news/icon-tw.png" alt="" />
                      </a>
                    </div>
                    <div className="follow-count">
                      <span>8,045</span>
                      <p>Fans</p>
                    </div>
                  </div>
                  <div className="follow-us d-flex align-items-center">
                    <div className="follow-social">
                      <a href="#">
                        <img src="assets/img/news/icon-ins.png" alt="" />
                      </a>
                    </div>
                    <div className="follow-count">
                      <span>8,045</span>
                      <p>Fans</p>
                    </div>
                  </div>
                  <div className="follow-us d-flex align-items-center">
                    <div className="follow-social">
                      <a href="#">
                        <img src="assets/img/news/icon-yo.png" alt="" />
                      </a>
                    </div>
                    <div className="follow-count">
                      <span>8,045</span>
                      <p>Fans</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* New Poster */}
              <div className="news-poster d-none d-lg-block">
                <img src="assets/img/news/news_card.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Whats New End */}
      {/*   Weekly2-News start */}
      <div className="weekly2-news-area  weekly2-pading gray-bg">
        <div className="container">
          <div className="weekly2-wrapper">
            {/* section Tittle */}
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle mb-30">
                  <h3>Weekly Top News</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="weekly2-news-active dot-style d-flex dot-style">
                  <div className="weekly2-single">
                    <div className="weekly2-img">
                      <img src="assets/img/news/weekly2News1.jpg" alt="" />
                    </div>
                    <div className="weekly2-caption">
                      <span className="color1">Corporate</span>
                      <p>25 Jan 2020</p>
                      <h4>
                        <a href="#">Welcome To The Best Model Winner Contest</a>
                      </h4>
                    </div>
                  </div>
                  <div className="weekly2-single">
                    <div className="weekly2-img">
                      <img src="assets/img/news/weekly2News2.jpg" alt="" />
                    </div>
                    <div className="weekly2-caption">
                      <span className="color1">Event night</span>
                      <p>25 Jan 2020</p>
                      <h4>
                        <a href="#">Welcome To The Best Model Winner Contest</a>
                      </h4>
                    </div>
                  </div>
                  <div className="weekly2-single">
                    <div className="weekly2-img">
                      <img src="assets/img/news/weekly2News3.jpg" alt="" />
                    </div>
                    <div className="weekly2-caption">
                      <span className="color1">Corporate</span>
                      <p>25 Jan 2020</p>
                      <h4>
                        <a href="#">Welcome To The Best Model Winner Contest</a>
                      </h4>
                    </div>
                  </div>
                  <div className="weekly2-single">
                    <div className="weekly2-img">
                      <img src="assets/img/news/weekly2News4.jpg" alt="" />
                    </div>
                    <div className="weekly2-caption">
                      <span className="color1">Event time</span>
                      <p>25 Jan 2020</p>
                      <h4>
                        <a href="#">Welcome To The Best Model Winner Contest</a>
                      </h4>
                    </div>
                  </div>
                  <div className="weekly2-single">
                    <div className="weekly2-img">
                      <img src="assets/img/news/weekly2News4.jpg" alt="" />
                    </div>
                    <div className="weekly2-caption">
                      <span className="color1">Corporate</span>
                      <p>25 Jan 2020</p>
                      <h4>
                        <a href="#">Welcome To The Best Model Winner Contest</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Weekly-News */}
      {/* Start Youtube */}
      <div className="youtube-area video-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="video-items-active">
                <div className="video-items text-center">
                  <iframe
                    src="https://www.youtube.com/embed/CicQIuG8hBo"
                    frameBorder={0}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                  />
                </div>
                <div className="video-items text-center">
                  <iframe
                    src="https://www.youtube.com/embed/rIz00N40bag"
                    frameBorder={0}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                  />
                </div>
                <div className="video-items text-center">
                  <iframe
                    src="https://www.youtube.com/embed/CONfhrASy44"
                    frameBorder={0}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                  />
                </div>
                <div className="video-items text-center">
                  <iframe
                    src="https://www.youtube.com/embed/lq6fL2ROWf8"
                    frameBorder={0}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                  />
                </div>
                <div className="video-items text-center">
                  <iframe
                    src="https://www.youtube.com/embed/0VxlQlacWV4"
                    frameBorder={0}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="video-info">
            <div className="row">
              <div className="col-lg-6">
                <div className="video-caption">
                  <div className="top-caption">
                    <span className="color1">Politics</span>
                  </div>
                  <div className="bottom-caption">
                    <h2>
                      Welcome To The Best Model Winner Contest At Look of the year
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                      do eiusmod ipsum dolor sit. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit sed do eiusmod ipsum dolor sit.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                      do eiusmod ipsum dolor sit lorem ipsum dolor sit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="testmonial-nav text-center">
                  <div className="single-video">
                    <iframe
                      src="https://www.youtube.com/embed/CicQIuG8hBo"
                      frameBorder={0}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen=""
                    />
                    <div className="video-intro">
                      <h4>Welcotme To The Best Model Winner Contest</h4>
                    </div>
                  </div>
                  <div className="single-video">
                    <iframe
                      src="https://www.youtube.com/embed/rIz00N40bag"
                      frameBorder={0}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen=""
                    />
                    <div className="video-intro">
                      <h4>Welcotme To The Best Model Winner Contest</h4>
                    </div>
                  </div>
                  <div className="single-video">
                    <iframe
                      src="https://www.youtube.com/embed/CONfhrASy44"
                      frameBorder={0}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen=""
                    />
                    <div className="video-intro">
                      <h4>Welcotme To The Best Model Winner Contest</h4>
                    </div>
                  </div>
                  <div className="single-video">
                    <iframe
                      src="https://www.youtube.com/embed/lq6fL2ROWf8"
                      frameBorder={0}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen=""
                    />
                    <div className="video-intro">
                      <h4>Welcotme To The Best Model Winner Contest</h4>
                    </div>
                  </div>
                  <div className="single-video">
                    <iframe
                      src="https://www.youtube.com/embed/0VxlQlacWV4"
                      frameBorder={0}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen=""
                    />
                    <div className="video-intro">
                      <h4>Welcotme To The Best Model Winner Contest</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Start youtube */}
      {/*  Recent Articles start */}
      <div className="recent-articles">
        <div className="container">
          <div className="recent-wrapper">
            {/* section Tittle */}
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle mb-30">
                  <h3>Recent Articles</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="recent-active dot-style d-flex dot-style">
                  <div className="single-recent mb-100">
                    <div className="what-img">
                      <img src="assets/img/news/recent1.jpg" alt="" />
                    </div>
                    <div className="what-cap">
                      <span className="color1">Night party</span>
                      <h4>
                        <a href="#">Welcome To The Best Model Winner Contest</a>
                      </h4>
                    </div>
                  </div>
                  <div className="single-recent mb-100">
                    <div className="what-img">
                      <img src="assets/img/news/recent2.jpg" alt="" />
                    </div>
                    <div className="what-cap">
                      <span className="color1">Night party</span>
                      <h4>
                        <a href="#">Welcome To The Best Model Winner Contest</a>
                      </h4>
                    </div>
                  </div>
                  <div className="single-recent mb-100">
                    <div className="what-img">
                      <img src="assets/img/news/recent3.jpg" alt="" />
                    </div>
                    <div className="what-cap">
                      <span className="color1">Night party</span>
                      <h4>
                        <a href="#">Welcome To The Best Model Winner Contest</a>
                      </h4>
                    </div>
                  </div>
                  <div className="single-recent mb-100">
                    <div className="what-img">
                      <img src="assets/img/news/recent2.jpg" alt="" />
                    </div>
                    <div className="what-cap">
                      <span className="color1">Night party</span>
                      <h4>
                        <a href="#">Welcome To The Best Model Winner Contest</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Recent Articles End */}
      {/*Start pagination */}
      <div className="pagination-area pb-45 text-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="single-wrap d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-start">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <span className="flaticon-arrow roted" />
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        01
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        02
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        03
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <span className="flaticon-arrow right-arrow" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End pagination  */}
    </main>
   </>
  )
}

export default Dashboard
import Layout from "@/layout";
import { Card } from "react-bootstrap";
import { testimonialSlider } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Button, Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import { data } from "../src/dummydata";
import { data1 } from "@/src/dummy1";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
console.log(data)
const Index2 = () => {
  return (
    <Layout>
      <section
        className="hero-area-two bgs-cover"
        style={{ backgroundImage: "url(assets/images/hero/bg1.jpg)", height: '700px' }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="hero-content-two pt-155 pb-160 rpt-115 rpb-65 wow fadeInUp delay-0-4s">
                <span className="sub-title">Welcome to Demo Products</span>
                <h1>Let's Grow Together</h1>
                <Link legacyBehavior href="/about">
                  <a className="theme-btn mt-25 wow fadeInUp delay-0-6s">
                    Let’s Get Started <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>

        </div>
        <div className="hero-shapes-two">
          <img src="assets/images/hero/hero-bg-lines.png" alt="BG Lines" />
        </div>
      </section>
      <div className="container mt-3">
        <h2 className="text-center" style={{ color: "black" }}><b>BEST BRANDS   ||   BEST PRICES</b></h2><br></br>
        <div className="row  mb-5">

          <div className="col-3 mb-3">
            <img src="https://sslimages.shoppersstop.com/sys-master/root/h09/hfa/31568806051870/jACK-%26-jONES-%26-rare-rabbit--4-Widgets-Web_Eoss-23.jpg"></img>
          </div>
          <div className="col-3">
            <img src="https://sslimages.shoppersstop.com/sys-master/root/h08/hfd/31568806117406/pepe-%26-levis--4-Widgets-Web_Eoss-23.jpg"></img>
          </div>
          <div className="col-3">
            <img src="https://sslimages.shoppersstop.com/sys-master/root/hc8/hfd/31568806182942/allen-solly-%26-USPA-4-Widgets-Web_Eoss-23.jpg"></img>
          </div>
          <div className="col-3">
            <img src="https://sslimages.shoppersstop.com/sys-master/root/ha6/hd4/31646151475230/Spykar-%26-lee--4-Widgets-Web_t64.jpg"></img>
          </div>
          {/* <br></br><br></br> */}
          <div className="col-3 mb-3">
            <img src="https://sslimages.shoppersstop.com/sys-master/root/he2/hd1/31573657583646/Indya--GD--4-Widgets-Web_121223.jpg"></img>
          </div>
          <div className="col-3">
            <img src="https://sslimages.shoppersstop.com/sys-master/root/h74/hde/31646151737374/Neerus---alaya-by-stage-3--4-Widgets-Web_3r4.jpg"></img>
          </div>
          <div className="col-3">
            <img src="https://sslimages.shoppersstop.com/sys-master/root/h85/he1/31646151802910/Libas----Lakshita--4-Widgets-Web_eh2.jpg"></img>
          </div>
          <div className="col-3">
            <img src="https://sslimages.shoppersstop.com/sys-master/root/h1d/h9f/31650182397982/Span---Aurelia--4-Widgets-Web_t4g.jpg"></img>
          </div>
          {/* uefgiuyf */}
          <div className="col-3">
            <img src="https://sslimages.shoppersstop.com/sys-master/root/h9b/h5b/31561292349470/And---Zink-London---4-Widgets-Web_1h.jpg"></img>
          </div>
          <div className="col-3">
            <img src="https://sslimages.shoppersstop.com/sys-master/root/h4c/h98/31650182594590/Latin-Quarters---kraus--4-Widgets-Web_ge3.jpg"></img>
          </div>
          <div className="col-3">
            <img src="https://sslimages.shoppersstop.com/sys-master/root/hdc/h57/31561292218398/Madame----Only--4-Widgets-Web_my.jpg"></img>
          </div>
          <div className="col-3">
            <img src="https://sslimages.shoppersstop.com/sys-master/root/h12/hcb/31573657387038/Oner----Monte-Carlo--4-Widgets-Web_121223.jpg"></img>
          </div>

        </div>
      </div>
      {/* Hero Section End */}
      {/* About Area start */}

      {/* About Area end */}
      {/* Services Area Two start */}
      <section className="services-area-two rel z-2 mt-3">
        <div className="container">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s mt-4">
            {/* <span className="sub-title mb-10">What We Provides</span> */}
            <h2>Digital Ecomm Services</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/services/service1.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title">Digital Marketing</h4>
                  <ul className="list-style-three">
                    <li>Paid Marketing</li>
                    <li>CRO</li>
                    <li>Content Marketing</li>
                    <li>Email Marketing</li>
                    <li>SMO</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="assets/images/services/service2.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title">Mobile Application</h4>
                  <ul className="list-style-three">
                    <li>Unique UI Design</li>
                    <li>Clean Development</li>
                    <li>Swift</li>
                    <li>Kotlin</li>
                    <li>React Native</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/services/service3.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title">Web Development</h4>
                  <ul className="list-style-three">
                    <li>Development Consulting</li>
                    <li>UX/UI Cool Design</li>
                    <li>Software Engineering</li>
                    <li>Product Development</li>
                    <li>Enhancement</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-8s">
                <div className="image">
                  <img
                    src="assets/images/services/service4.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title">Technical Support</h4>
                  <ul className="list-style-three">
                    <li>Security Management </li>
                    <li>Automated Deployments </li>
                    <li>Incident Management(SLA)</li>
                    <li>Compliance Monitoring</li>
                    <li>CI/CD and DevOps</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Area Two end */}
      {/* Customer Satisfaction Area start */}

      {/* Project Area end */}

      {/* manual cards starts */}



      {/* manual cards end */}

      {/* Why Choose Us Area start */}
      <section className="why-choose-us-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center mb-45 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Why Choose Us</span>
                <h2>
                  Top-Notch Software Development and Digital Transformation
                </h2>
              </div>
            </div>
          </div>
          <Tab.Container defaultActiveKey={"wc-tap1"}>
            <div className="why-choose-tab">
              <Nav
                as={"ul"}
                className="nav nav-pills nav-fill mb-80 rmb-50 wow fadeInUp delay-0-4s"
              >
                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap1"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap1"
                  >
                    <img src="https://media.istockphoto.com/id/1306977521/photo/shopping-cart-with-different-food-products.jpg?s=612x612&w=0&k=20&c=rzV3HG_5Kk_cjndinm0_b4ETogKk1YvZ5b3MTTAVy_4="
                      height={'70px'} />{" "}
                    <span>Grocery</span>
                  </Nav.Link>

                </li>
                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap2"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap2"
                  >
                    <img height={'70px'} src="https://media.istockphoto.com/id/1174598609/photo/set-of-contemporary-house-appliances-isolated-on-white.jpg?s=612x612&w=0&k=20&c=bBMILbCpLkhIxbL7sAAXaFOaFaSXFCt80ccHgl7iiWM=" />{" "}
                    <span>Home Appliances</span>
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap3"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap3"
                  >

                    <img height={'70px'} src="https://media.istockphoto.com/id/1190419435/photo/apple-iphone-11-black-smartphone.jpg?s=612x612&w=0&k=20&c=jTGAnjgluxT8nfZ77BInRma2gOuk6uyPR9F1nOXryfw=" />{" "}
                    {" "}
                    <span>Mobiles</span>
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap4"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap4"
                  >
                    <img height={'70px'} src="https://media.istockphoto.com/id/1133163432/photo/makeup-bag-with-cosmetic-products.jpg?s=612x612&w=0&k=20&c=6m6BqZMwPIjAxJWSM115DgqjcVUGcCIv4clthhTxOsI=" />{" "}

                    <span>Fashion </span>
                  </Nav.Link>
                </li>
              </Nav>
              <Tab.Content className="tab-content" style={{ color: 'black' }}>
                <div className="row">
                  {/* <div className="col-4">
                    <div className="card " style={{ width: '450px', height: '170px' }}>
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img src="https://www.bigbasket.com/media/uploads/p/m/126906_8-aashirvaad-atta-whole-wheat.jpg?tr=w-1920,q=80"
                            className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8 ">
                          <div className="card-body ">
                            <h5 className="card-title">Sunflower Oil</h5>
                            <p className="card-text">Sunny Sun Lite Refined Sunflower Oil </p>
                            <p className="card-text" ><b>Price: ₹113</b>
                              (₹113 / L)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}

<div className="col-12 col-md-10">
                      <div className="shop-right-sidebar">
                        <div className="product-grid mt-4">
                          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            {data1.map((item) => (
                              <>
                                <div className="col" key={item.id}>
                                  <Link href={`/ProductDetails/${item.id}`}>
                                    <div class="card border shadow-none">
                                      <div class="position-relative overflow-hidden">
                                        <a href="javascript:;">
                                          <img
                                            src={item.image}
                                            class="card-img-top"
                                            alt="..." /> </a>
                                      </div>
                                      <div class="card-body border-top">
                                        <h5 class="mb-0 fw-bold product-short-title">{item.title}</h5>
                                        <p class="mb-0 product-short-name">{item.description}</p>
                                        <div class="product-price d-flex align-items-center gap-2 mt-2">
                                          <div class="h6 fw-bold">{item.price}</div>
                                          <div class="h6 fw-light text-muted text-decoration-line-through">
                                            {item.markprice}
                                          </div>
                                          <div class="h6 fw-bold text-danger">{item.offer}</div>
                                        </div>
                                      </div>
                                      <button className="btn btn-lg btn-Primary">Add to cart</button>
                                    </div>
                                  </Link >
                                </div>
                              </>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                </div>

                <Tab.Pane className="tab-pane fade" eventKey="wc-tap2">
                  <div className="row gap-90 align-items-center">



                  </div>
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="wc-tap3">
                  <div className="row gap-90 align-items-center">
                    <div className="col-lg-6">
                      <div className="why-choose-image rmb-55">
                        <img
                          src="assets/images/about/why-choose1.jpg"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="why-choose-content">
                        <h3>
                          An impactful Application Needs an innovative and
                          interactive.
                        </h3>
                        <p>
                          Our experts help create the right website for across
                          all major platforms and devices. Taking into
                          consideration your user behavior volu promotey the
                          optimal experience we design responsive performance
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Comprehensive UI/UX Assessment</li>
                          <li>Deep Contextual Research and 360° Planning</li>
                          <li>Wireframing &amp; Prototyping</li>
                        </ul>
                        <Link legacyBehavior href="/about">
                          <a className="theme-btn mt-30">
                            Learn More <i className="fas fa-long-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="wc-tap4">
                  <div className="row gap-90 align-items-center">
                    <div className="col-12 col-md-10">
                      <div className="shop-right-sidebar">
                        <div className="product-grid mt-4">
                          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            {data.map((item) => (
                              <>
                                <div className="col" key={item.id}>
                                  <Link href={`/ProductDetails/${item.id}`}>
                                    <div class="card border shadow-none">
                                      <div class="position-relative overflow-hidden">
                                        <a href="javascript:;">
                                          <img
                                            src={item.image}
                                            class="card-img-top"
                                            alt="..." /> </a>
                                      </div>
                                      <div class="card-body border-top">
                                        <h5 class="mb-0 fw-bold product-short-title">{item.title}</h5>
                                        <p class="mb-0 product-short-name">{}</p>
                                        <div class="product-price d-flex align-items-center gap-2 mt-2">
                                          <div class="h6 fw-bold">{item.price}</div>
                                          <div class="h6 fw-light text-muted text-decoration-line-through">
                                            {item.markprice}
                                          </div>
                                          <div class="h6 fw-bold text-danger">{item.offer}</div>
                                        </div>
                                      </div>
                                      <button className="btn btn-lg btn-Primary">Add to cart</button>
                                    </div>
                                  </Link >
                                </div>
                              </>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>
        <div className="why-choose-shapes">
          <img
            className="shape one"
            src="assets/images/about/why-choose-shape1.png"
            alt="Shape"
          />
          <img
            className="shape two"
            src="assets/images/about/why-choose-shape2.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Why Choose Us Area end */}
      {/* Testimonials Area Two start */}
      <section className="testimonials-area-two pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center mb-45 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Clients Feedback</span>
                <h2>What Our Clients Say Us</h2>
              </div>
            </div>
          </div>
          <Slider {...testimonialSlider} className="testimonial-slider">
            <div className="testimonial-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/testimonials/testi-author1.jpg"
                  alt="Author"
                />
              </div>
              <div className="content">
                <div className="testi-header">
                  <h4>Excellent Works</h4>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <div className="testi-text">
                  Sed ut perspiciatis unde omnis iste natus voluptatem accus
                  antiume dolorem queauy antium totam aperiam eaque quaey
                  abillosa inventore veritatis vitaec
                </div>
                <div className="testi-footer">
                  <div className="icon">
                    <i className="flaticon-quotation" />
                  </div>
                  <div className="title">
                    <h4>Andrew D. Bricker</h4>
                    <span className="designation">CEO &amp; Founder</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item wow fadeInUp delay-0-4s">
              <div className="content">
                <div className="testi-header">
                  <h4>Excellent Works</h4>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <div className="testi-text">
                  On the other hand denounce righteous indignations and dislike
                  men who beguiled and demoralized by the charms of pleasure
                  moment blinded foresee
                </div>
                <div className="testi-footer">
                  <div className="icon">
                    <i className="flaticon-quotation" />
                  </div>
                  <div className="title">
                    <h4>Jose T. McMichael</h4>
                    <span className="designation">Senior Manager</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item wow fadeInUp delay-0-6s">
              <div className="image">
                <img
                  src="assets/images/testimonials/testi-author4.jpg"
                  alt="Author"
                />
              </div>
              <div className="content">
                <div className="testi-header">
                  <h4>Excellent Works</h4>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <div className="testi-text">
                  Unde omnis iste natus voluptatem accus antiume dolorem queauy
                  antium totam aperiam eaque quaey abillosa inventore veritatis
                  etuarchite beatae vitaec
                </div>
                <div className="testi-footer">
                  <div className="icon">
                    <i className="flaticon-quotation" />
                  </div>
                  <div className="title">
                    <h4>Andrew D. Bricker</h4>
                    <span className="designation">CEO &amp; Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* Testimonials Area Two end */}
      {/* Blog Area Two start */}
      <section className="blog-area-two pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row align-items-end pb-35">
            <div className="col-lg-8">
              <div className="section-title mb-25 wow fadeInLeft delay-0-2s">
                <span className="sub-title mb-10">Our Blog &amp; News</span>
                <h2>Latest Blog, New &amp; Articles</h2>
              </div>
            </div>
            <div className="col-lg-4 mb-25 text-lg-end">
              <Link legacyBehavior href="/blog">
                <a className="theme-btn style-four wow fadeInRight delay-0-2s">
                  View More News <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/blog1.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Jule 26, 2022</a>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Comments (25)</a>
                    </li>
                  </ul>
                  <h4>
                    <Link legacyBehavior href="blog-details">
                      {`Voice Usabilit Consideration Partially Visually Hidden`}
                    </Link>
                  </h4>
                  <div className="author-more">
                    <span className="author">
                      By <a href="#">Luis J. Hill</a>
                    </span>
                    <Link legacyBehavior href="/blog-details">
                      <a className="read-more">
                        Read More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/blog/blog2.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Jule 26, 2022</a>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Comments (25)</a>
                    </li>
                  </ul>
                  <h4>
                    <Link legacyBehavior href="blog-details">
                      How Create Van JavaScript Gant Chart Adding Task
                    </Link>
                  </h4>
                  <div className="author-more">
                    <span className="author">
                      By <a href="#">Luis J. Hill</a>
                    </span>
                    <Link legacyBehavior href="/blog-details">
                      <a className="read-more">
                        Read More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/blog/blog3.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Jule 26, 2022</a>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Comments (25)</a>
                    </li>
                  </ul>
                  <h4>
                    <Link legacyBehavior href="blog-details">
                      Smashing Podcast Episode 47 Soueidan Accessibility
                    </Link>
                  </h4>
                  <div className="author-more">
                    <span className="author">
                      By <a href="#">Luis J. Hill</a>
                    </span>
                    <Link legacyBehavior href="/blog-details">
                      <a className="read-more">
                        Read More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index2;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import img from "../../hero5.png"
import "./style.css";
import './main.css'

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem('user');
    if (userToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <div className='Home'>
      <div className='body-wrap'>
        <header className="site-header">
                <div className=" container ">
                    <div className="site-header-inner">
                        <div className="brand header-brand">
                            <h1 className="m-0">
                                <Link to={'/'}>
                                    <img className="header-logo-image" src={process.env.PUBLIC_URL+"dist/images/xloop_logo.png"} alt="Logo" width="100px"/>
                                </Link>
                            </h1>
                        </div>
                        <div className="brand header-brand">
                            <h1 className="m-0">
                                <div className="hero-copy hero-cta">
                                  {isLoggedIn ? 
                                   <Link to={'/chat'}>
                                    <img src={process.env.PUBLIC_URL+"/dist/images/chatge-logo.svg"} width="230px" alt="log" className="chat-logo"/>
                                   </Link>:
                                   <>
                                    <Link className="button" to={'/login'}>Login</Link>
                                    <Link className="button button-primary" to={'/signup'}>Signup</Link>
                                    </>
                                  }
                                    
                                </div>
                            </h1>
                        </div>
                    </div>
                </div>
            </header>

        <main>
          <section className='hero'>
            <div className='container'>
              <div className='hero-inner'>
                <div className='hero-copy'>
                  <h1 className='hero-title mt-0'>
                    Introducing Generative AI based Solution
                  </h1>
                  <p className='hero-paragraph' style={{color:"whitesmoke", fontWeight:"bold" }}>
                    This is a groundbreaking approach to information retrieval.
                  </p>
                  <p className='hero-paragraph' style={{color:"whitesmoke", fontWeight:"bold" }}>
                    Our solution Retrieval Augmented Generation
                  </p>
                  <p className='text-sm mb-1' >
                    Components of our Solution <br/>
                     GPT-4 <br/>
                    LlamaIndex<br/>
                     Vector<br/>
                    Database SentenceTransformer
                  </p>
                </div>
                <div className='hero-figure anime-element'>
                  <svg
                    className='placeholder'
                    width='528'
                    height='396'
                    viewBox='0 0 528 396'
                  >
                    <rect
                      width='528'
                      height='396'
                      style={{ fill: "transparent" }}
                    />
                  </svg>
                  <div
                    className='hero-figure-box hero-figure-box-01'
                    data-rotation='45deg'
                  ></div>
                  <div
                    className='hero-figure-box hero-figure-box-02'
                    data-rotation='-45deg'
                  ></div>
                  <div
                    className='hero-figure-box hero-figure-box-03'
                    data-rotation='0deg'
                  ></div>
                  <div
                    className='hero-figure-box hero-figure-box-04'
                    data-rotation='-135deg'
                  ></div>
                  <div className='hero-figure-box hero-figure-box-05'>
                  <img src={img} alt=""/>
                  </div>
                  {/* <div className='hero-figure-box hero-figure-box-06'></div> */}
                  <div className='hero-figure-box hero-figure-box-07'></div>
                  <div
                    className='hero-figure-box hero-figure-box-08'
                    data-rotation='-22deg'
                  ></div>
                  <div
                    className='hero-figure-box hero-figure-box-09'
                    data-rotation='-52deg'
                  ></div>
                  <div
                    className='hero-figure-box hero-figure-box-10'
                    data-rotation='-50deg'
                  ></div>
                </div>
              </div>
            </div>
          </section>

          <section className='features section'>
            <div className='container'>
              <h1 className='hero-title mt-1'>Problem Faced By Enterprises</h1>
              <div className='features-inner section-inner has-bottom-divider'>
                <div className='features-wrap'>
                  <div className='feature text-center is-revealing'>
                    <div className='feature-inner'>
                      <div className='feature-icon'>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "dist/images/feature-icon-01.svg"
                          }
                          alt='Feature 01'
                        />
                      </div>
                      <h4 className='feature-title mt-24' style={{textAlign:"left"}}>
                        Managing Diverse Contracts
                      </h4>
                      <p className='text-sm mb-1' style={{textAlign:"left"}}>
                        Deals with a variety of contracts from
                        different vendors.
                      </p>
                      <p className='text-sm mb-1' style={{textAlign:"left"}}>
                        These contracts come with unique terms, structures, and
                        details.
                      </p>
                    </div>
                  </div>
                  <div className='feature text-center is-revealing'>
                    <div className='feature-inner'>
                      <div className='feature-icon'>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "dist/images/feature-icon-02.svg"
                          }
                          alt='Feature 02'
                        />
                      </div>
                      <h4 className='feature-title mt-24' style={{textAlign:"left"}}>
                        Complex Information Maze
                      </h4>
                      <p className='text-sm mb-1' style={{textAlign:"left"}}>
                        Information is scattered across documents, making it
                        hard to find.
                      </p>
                      <p className='text-sm mb-1' style={{textAlign:"left"}}> 
                        It's like trying to navigate a maze of data.
                      </p>
                    </div>
                  </div>
                  <div className='feature text-center is-revealing'>
                    <div className='feature-inner'>
                      <div className='feature-icon'>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "dist/images/feature-icon-03.svg"
                          }
                          alt='Feature 03'
                        />
                      </div>
                      <h4 className='feature-title mt-24' style={{textAlign:"left"}}>
                        Slow Response Time
                      </h4>
                      <p className='text-sm mb-1' style={{textAlign:"left"}}>
                        Providing answers to queries takes a significant amount
                        of time.
                      </p>
                      <p className='text-sm mb-1' style={{textAlign:"left"}}>
                        This slow response time can lead to delays in serving
                        clients and partners
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='features section'>
            <div className='container'>
              <h1 className='section-title mt-1' style={{textAlign:" center"}}>Comparative Analysis</h1>
              <div className='features-inner section-inner has-bottom-divider'>
                <div className='features-wrap'>
                  <div className='feature text-center is-revealing'>
                    <div className='feature-inner'>
                      <div className='feature-icon'>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "dist/images/feature-icon-01.svg"
                          }
                          alt='Feature 01'
                        />
                      </div>
                      <h4 className='feature-title mt-24' style={{textAlign:"left"}}>
                      Retrieval Augmented Generation (RAG)
                      </h4>
                      <p className='text-sm mb-1' style={{textAlign:"left"}}>
                      Technique that connects LLMs to extensive knowledge sources
                      </p>
                      <p className='text-sm mb-1' style={{textAlign:"left"}}>
                      Enables conversational interaction with documents
                      </p>
                    </div>
                  </div>
                  <div className='feature text-center is-revealing'>
                    <div className='feature-inner'>
                      <div className='feature-icon'>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "dist/images/feature-icon-02.svg"
                          }
                          alt='Feature 02'
                        />
                      </div>
                      <h4 className='feature-title mt-24' style={{textAlign:"left"}}>
                      Finetuning
                      </h4>
                      <p className='text-sm mb-1' style={{textAlign:"left"}}>
                      Involves training a pre-existing model on a specific task or dataset
                      </p>
                      <p className='text-sm mb-1' style={{textAlign:"left"}}>
                      Customizes model behavior for a particular application
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section className='pricing section'>
            <div className='container-sm'>
              <div className='pricing-inner section-inner'>
                <div className='pricing-header text-center'>
                  <h2 className='section-title mt-0'>Comparative Analysis</h2>
                  <p className='section-paragraph mb-0'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut ad quis nostrud.
                  </p>
                  <div className='feature text-center is-revealing'>
                    <div className='feature-inner'>
                      <div className='feature-icon'>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "dist/images/feature-icon-01.svg"
                          }
                          alt='Feature 01'
                        />
                      </div>
                      <h4 className='feature-title mt-24'>
                        Managing Diverse Contracts
                      </h4>
                      <p className='text-sm mb-1'>
                        GE Healthcare deals with a variety of contracts from
                        different vendors.
                      </p>
                      <p className='text-sm mb-1'>
                        These contracts come with unique terms, structures, and
                        details.
                      </p>
                    </div>
                  </div>
                  <div className='feature text-center is-revealing'>
                    <div className='feature-inner'>
                      <div className='feature-icon'>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "dist/images/feature-icon-01.svg"
                          }
                          alt='Feature 01'
                        />
                      </div>
                      <h4 className='feature-title mt-24'>
                        Managing Diverse Contracts
                      </h4>
                      <p className='text-sm mb-1'>
                        GE Healthcare deals with a variety of contracts from
                        different vendors.
                      </p>
                      <p className='text-sm mb-1'>
                        These contracts come with unique terms, structures, and
                        details.
                      </p>
                    </div>
                  </div>
                </div>
                 <div className='pricing-tables-wrap'>
                  <div className='pricing-table'>
                    <div className='pricing-table-inner is-revealing'>
                      <div className='pricing-table-main'>
                        <div className='pricing-table-header pb-24'>
                          <div className='pricing-table-price'>
                            <span className='pricing-table-price-currency h2'>
                              $
                            </span>
                            <span className='pricing-table-price-amount h1'>
                              49
                            </span>
                            <span className='text-xs'>/month</span>
                          </div>
                        </div>
                        <div className='pricing-table-features-title text-xs pt-24 pb-24'>
                          What you will get
                        </div>
                        <ul className='pricing-table-features list-reset text-xs'>
                          <li>
                            <span>Lorem ipsum dolor sit nisi</span>
                          </li>
                          <li>
                            <span>Lorem ipsum dolor sit nisi</span>
                          </li>
                          <li>
                            <span>Lorem ipsum dolor sit nisi</span>
                          </li>
                          <li>
                            <span>Lorem ipsum dolor sit nisi</span>
                          </li>
                        </ul>
                      </div>
                      <div className='pricing-table-cta mb-8'>
                        <Link
                          className='button button-primary button-shadow button-block'
                          to='#'
                        >
                          Pre order now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                  
                  <div className='feature text-center is-revealing'>
                    <div className='feature-inner'>
                      <div className='feature-icon'>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "dist/images/feature-icon-01.svg"
                          }
                          alt='Feature 01'
                        />
                      </div>
                      <h4 className='feature-title mt-24'>
                        Managing Diverse Contracts
                      </h4>
                      <p className='text-sm mb-1'>
                        GE Healthcare deals with a variety of contracts from
                        different vendors.
                      </p>
                      <p className='text-sm mb-1'>
                        These contracts come with unique terms, structures, and
                        details.
                      </p>
                    </div>
                  </div>
              </div>
            </div>
          </section> */}

          {/* <section className='cta section'>
            <div className='container'>
              <div className='cta-inner section-inner'>
                <h3 className='section-title mt-0'>
                  Still not convinced on buying?
                </h3>
                <div className='cta-cta'>
                  <Link
                    className='button button-primary button-wide-mobile'
                    to='#'
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>
          </section> */}
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Home;

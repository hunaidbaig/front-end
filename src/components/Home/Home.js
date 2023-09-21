import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './style.css';


function Home() {
  return (
    <div className="Home">
        <div className="body-wrap">
            <header className="site-header">
                <div className="container">
                    <div className="site-header-inner">
                        <div className="brand header-brand">
                            <h1 className="m-0">
                                <Link to={'/'}>
                                    <img className="header-logo-image" src={process.env.PUBLIC_URL+"dist/images/logo.svg"} alt="Logo" />
                                </Link>
                            </h1>
                        </div>
                        <div className="brand header-brand">
                            <h1 className="m-0">
                                <div className="hero-copy hero-cta">
                                    <Link className="button" to={'/login'}>Login</Link>
                                    <Link className="button button-primary" to={'/signup'}>Signup</Link>
                                </div>
                            </h1>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <section className="hero">
                    <div className="container">
                        <div className="hero-inner">
                            <div className="hero-copy">
                                <h1 className="hero-title mt-0">Landing template for startups</h1>
                                <p className="hero-paragraph">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
                                <div className="hero-cta"><Link className="button button-primary" to="#">Pre order now</Link><Link className="button" to="#">Get in touch</Link></div>
                            </div>
                            <div className="hero-figure anime-element">
                                <svg className="placeholder" width="528" height="396" viewBox="0 0 528 396">
                                    <rect width="528" height="396" style={{fill: "transparent"}} />
                                </svg>
                                <div className="hero-figure-box hero-figure-box-01" data-rotation="45deg"></div>
                                <div className="hero-figure-box hero-figure-box-02" data-rotation="-45deg"></div>
                                <div className="hero-figure-box hero-figure-box-03" data-rotation="0deg"></div>
                                <div className="hero-figure-box hero-figure-box-04" data-rotation="-135deg"></div>
                                <div className="hero-figure-box hero-figure-box-05"></div>
                                <div className="hero-figure-box hero-figure-box-06"></div>
                                <div className="hero-figure-box hero-figure-box-07"></div>
                                <div className="hero-figure-box hero-figure-box-08" data-rotation="-22deg"></div>
                                <div className="hero-figure-box hero-figure-box-09" data-rotation="-52deg"></div>
                                <div className="hero-figure-box hero-figure-box-10" data-rotation="-50deg"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features section">
                    <div className="container">
                        <div className="features-inner section-inner has-bottom-divider">
                            <div className="features-wrap">
                                <div className="feature text-center is-revealing">
                                    <div className="feature-inner">
                                        <div className="feature-icon">
                                            <img src={process.env.PUBLIC_URL+"dist/images/feature-icon-01.svg"} alt="Feature 01" />
                                        </div>
                                        <h4 className="feature-title mt-24">Be Productive</h4>
                                        <p className="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                                    </div>
                                </div>
                                <div className="feature text-center is-revealing">
                                    <div className="feature-inner">
                                        <div className="feature-icon">
                                            <img src={process.env.PUBLIC_URL+"dist/images/feature-icon-02.svg"} alt="Feature 02" />
                                        </div>
                                        <h4 className="feature-title mt-24">Be Productive</h4>
                                        <p className="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                                    </div>
                                </div>
                                <div className="feature text-center is-revealing">
                                    <div className="feature-inner">
                                        <div className="feature-icon">
                                            <img src={process.env.PUBLIC_URL+"dist/images/feature-icon-03.svg"} alt="Feature 03" />
                                        </div>
                                        <h4 className="feature-title mt-24">Be Productive</h4>
                                        <p className="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                                    </div>
                                </div>
                                <div className="feature text-center is-revealing">
                                    <div className="feature-inner">
                                        <div className="feature-icon">
                                            <img src={process.env.PUBLIC_URL+"dist/images/feature-icon-04.svg"} alt="Feature 04" />
                                        </div>
                                        <h4 className="feature-title mt-24">Be Productive</h4>
                                        <p className="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                                    </div>
                                </div>
                                <div className="feature text-center is-revealing">
                                    <div className="feature-inner">
                                        <div className="feature-icon">
                                            <img src={process.env.PUBLIC_URL+"dist/images/feature-icon-05.svg"} alt="Feature 05" />
                                        </div>
                                        <h4 className="feature-title mt-24">Be Productive</h4>
                                        <p className="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                                    </div>
                                </div>
                                <div className="feature text-center is-revealing">
                                    <div className="feature-inner">
                                        <div className="feature-icon">
                                            <img src={process.env.PUBLIC_URL+"dist/images/feature-icon-06.svg"} alt="Feature 06" />
                                        </div>
                                        <h4 className="feature-title mt-24">Be Productive</h4>
                                        <p className="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pricing section">
                    <div className="container-sm">
                        <div className="pricing-inner section-inner">
                            <div className="pricing-header text-center">
                                <h2 className="section-title mt-0">Unlimited for all</h2>
                                <p className="section-paragraph mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad quis nostrud.</p>
                            </div>
                            <div className="pricing-tables-wrap">
                                <div className="pricing-table">
                                    <div className="pricing-table-inner is-revealing">
                                        <div className="pricing-table-main">
                                            <div className="pricing-table-header pb-24">
                                                <div className="pricing-table-price"><span className="pricing-table-price-currency h2">$</span><span className="pricing-table-price-amount h1">49</span><span className="text-xs">/month</span></div>
                                            </div>
                                            <div className="pricing-table-features-title text-xs pt-24 pb-24">What you will get</div>
                                            <ul className="pricing-table-features list-reset text-xs">
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
                                        <div className="pricing-table-cta mb-8">
                                            <Link className="button button-primary button-shadow button-block" to="#">Pre order now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta section">
                    <div className="container">
                        <div className="cta-inner section-inner">
                            <h3 className="section-title mt-0">Still not convinced on buying?</h3>
                            <div className="cta-cta">
                                <Link className="button button-primary button-wide-mobile" to="#">Get in touch</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

           <Footer />
    </div>
    </div>
  );
}

export default Home;


export default function Text() {
    return (
        <div
            data-scroll-container

            className="border-2 border-purple-500">
            <div className="main">













                <section

                    data-scroll-section >
                    <h1
                        className="left-h1"
                        data-scroll
                        data-scroll-direction="horizontal"
                        data-scroll-speed={-3}
                        data-scroll-class="appear"
                        data-scroll-repeat="true">
                        Beautiful Holiday Destinations
                    </h1>
                    <div className="recommendations-container">
                        <div className="recommendations">
                            <ul className="recommendations_list">
                                <li className="recommendations__items">
                                    <a href="#" className="recommendations__links txt_md_black">
                                        Popular
                                    </a>
                                </li>
                                <li className="recommendations__items">
                                    <a href="#" className="recommendations__links txt_md_grey">
                                        Adventure
                                    </a>
                                </li>
                                <li className="recommendations__items">
                                    <a href="#" className="recommendations__links txt_md_grey">
                                        Beach
                                    </a>
                                </li>
                            </ul>
                            <div className="active_container">
                                <span className="active" />
                            </div>
                        </div>
                        <div className="recommendations__controls">
                            <span className="control_left">
                                <i className="fa fa-angle-left" aria-hidden="true" />
                            </span>
                            <span className="control_right">
                                <i className="fa fa-angle-right" aria-hidden="true" />
                            </span>
                        </div>
                    </div>
                    <div className="location_preview">
                        <div className="preview" data-scroll data-scroll-speed={-1}>
                            <img
                                src="https://images.unsplash.com/photo-1559628233-100c798642d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
                                alt=""
                            />
                            <div className="preview__details">
                                <span className="preview__details__text">
                                    <p className="preview__details__text__top txt_lg_white">
                                        Nusa Penida
                                    </p>
                                    <p className="preview__details__text__top txt_lg_white">
                                        <i className="fa fa-star" aria-hidden="true" /> 4.7
                                    </p>
                                </span>
                                <p className="preview__details__text__bottom txt_lg_white">
                                    <i className="fa fa-map-marker" aria-hidden="true" /> Bali,
                                    Indonesia
                                </p>
                            </div>
                        </div>
                        <div className="preview" data-scroll data-scroll-speed={1}>
                            <img
                                src="https://images.unsplash.com/photo-1532186651327-6ac23687d189?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                                alt=""
                            />
                            <div className="preview__details">
                                <span className="preview__details__text">
                                    <p className="preview__details__text__top txt_lg_white">
                                        Labuan Bajo
                                    </p>
                                    <p className="preview__details__text__top txt_lg_white">
                                        <i className="fa fa-star" aria-hidden="true" /> 4.8
                                    </p>
                                </span>
                                <p className="preview__details__text__bottom txt_lg_white">
                                    <i className="fa fa-map-marker" aria-hidden="true" /> NTT,
                                    Indonesia
                                </p>
                            </div>
                        </div>
                        <div className="preview" data-scroll data-scroll-speed={-1}>
                            <img
                                src="https://images.unsplash.com/photo-1568609477908-f76bff63279c?ixlib=rb-1.2.1&auto=format&fit=crop&w=444&q=80"
                                alt=""
                            />
                            <div className="preview__details">
                                <span className="preview__details__text">
                                    <p className="preview__details__text__top txt_lg_white">
                                        Mount Bromo
                                    </p>
                                    <p className="preview__details__text__top txt_lg_white">
                                        <i className="fa fa-star" aria-hidden="true" /> 4.5
                                    </p>
                                </span>
                                <p className="preview__details__text__bottom txt_lg_white">
                                    <i className="fa fa-map-marker" aria-hidden="true" /> Malang,
                                    Indonesia
                                </p>
                            </div>
                        </div>
                        <div className="preview" data-scroll data-scroll-speed={1}>
                            <img
                                src="https://images.unsplash.com/photo-1525596662741-e94ff9f26de1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                alt=""
                            />
                            <div className="preview__details">
                                <span className="preview__details__text">
                                    <p className="preview__details__text__top txt_lg_white">
                                        Gili Island
                                    </p>
                                    <p className="preview__details__text__top txt_lg_white">
                                        <i className="fa fa-star" aria-hidden="true" /> 4.7
                                    </p>
                                </span>
                                <p className="preview__details__text__bottom txt_lg_white">
                                    <i className="fa fa-map-marker" aria-hidden="true" /> Lombok,
                                    Indonesia
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section data-scroll-section="">
                    <h1
                        className="centered-h1"
                        data-scroll
                        data-scroll-direction="horizontal"
                        data-scroll-speed={-3}
                        data-scroll-class="appear"
                        data-scroll-repeat="true"
                    >
                        Special Offers
                    </h1>
                    <div className="centered-recommendations-container">
                        <div className="recommendations">
                            <ul className="recommendations_list">
                                <li className="recommendations__items">
                                    <a href="#" className="recommendations__links txt_md_black">
                                        Family
                                    </a>
                                </li>
                                <li className="recommendations__items">
                                    <a href="#" className="recommendations__links txt_md_grey">
                                        Couple
                                    </a>
                                </li>
                                <li className="recommendations__items">
                                    <a href="#" className="recommendations__links txt_md_grey">
                                        Team
                                    </a>
                                </li>
                            </ul>
                            <div className="active_container">
                                <span className="active" />
                            </div>
                        </div>
                    </div>
                    <div className="special-offers-container">
                        <span className="control_left modify_control">
                            <i className="fa fa-angle-left" aria-hidden="true" />
                        </span>
                        <div className="special-offers-preview-container">
                            <div
                                className="preview modify_preview"
                                data-scroll
                                data-scroll-speed="0.5"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1592529754743-91e25c7b9b47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                                    alt=""
                                />
                                <div className="preview__details modify_preview__details">
                                    <h3 className="txt_lg_white modify_text">Lombok, Indonesia</h3>
                                    <p className="preview__details__text__bottom modify_preview__details__text__bottom txt_lg_white">
                                        6 Day 5 Nights
                                    </p>
                                    <span className="preview__details__text">
                                        <p className="preview__details__text__top txt_lg_white">
                                            $450/person
                                        </p>
                                        <p className="preview__details__text__top txt_lg_white">
                                            <i className="fa fa-star modify_i" aria-hidden="true" /> 4.7
                                        </p>
                                    </span>
                                </div>
                            </div>
                            <div
                                className="preview modify_preview"
                                data-scroll
                                data-scroll-speed={1}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1584999675865-41e544a9d067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
                                    alt=""
                                />
                                <div className="preview__details modify_preview__details">
                                    <h3 className="txt_lg_white modify_text">
                                        Yogyakarta, Indonesia
                                    </h3>
                                    <p className="preview__details__text__bottom modify_preview__details__text__bottom txt_lg_white">
                                        7 Day 6 Nights
                                    </p>
                                    <span className="preview__details__text">
                                        <p className="preview__details__text__top txt_lg_white">
                                            $390/person
                                        </p>
                                        <p className="preview__details__text__top txt_lg_white">
                                            <i className="fa fa-star modify_i" aria-hidden="true" /> 4.7
                                        </p>
                                    </span>
                                </div>
                            </div>
                            <div
                                className="preview modify_preview"
                                data-scroll
                                data-scroll-speed="1.5"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1581974206967-93856b25aa13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1036&q=80"
                                    alt=""
                                />
                                <div className="preview__details modify_preview__details">
                                    <h3 className="txt_lg_white modify_text">Bali, Indonesia</h3>
                                    <p className="preview__details__text__bottom modify_preview__details__text__bottom txt_lg_white">
                                        6 Day 5 Nights
                                    </p>
                                    <span className="preview__details__text">
                                        <p className="preview__details__text__top txt_lg_white">
                                            $430/person
                                        </p>
                                        <p className="preview__details__text__top txt_lg_white">
                                            <i className="fa fa-star modify_i" aria-hidden="true" /> 4.7
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <span className="control_right modify_control">
                            <i className="fa fa-angle-right" aria-hidden="true" />
                        </span>
                    </div>
                </section>
                <section data-scroll-section="" id="pin">
                    <h1
                        className="centered-h1"
                        data-scroll
                        data-scroll-direction="horizontal"
                        data-scroll-speed={-3}
                        data-scroll-class="appear"
                        data-scroll-repeat="true"
                    >
                        From the Blog
                    </h1>
                    <div className="blog">

                        <div className="blogpost">
                            <div className="blogpost_preview">
                                <div className="blogpost_preview_img">
                                    <img
                                        src="https://images.unsplash.com/photo-1581775231124-4f70b143b85c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                                        alt=""
                                    />
                                </div>
                                <div className="blogpost_preview_txt">
                                    <h3 className="txt_md_black">The most wonderful underwater</h3>
                                    <p className="txt_md_grey">@monicafer</p>
                                </div>
                            </div>
                            <div className="blogpost_preview">
                                <div className="blogpost_preview_img">
                                    <img
                                        src="https://images.unsplash.com/photo-1523539693385-e5e891eb4465?ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80"
                                        alt=""
                                    />
                                </div>
                                <div className="blogpost_preview_txt">
                                    <h3 className="txt_md_black">The most Beautiful wet grassland</h3>
                                    <p className="txt_md_grey">@david_underson</p>
                                </div>
                            </div>
                            <div className="blogpost_preview">
                                <div className="blogpost_preview_img">
                                    <img
                                        src="https://images.unsplash.com/photo-1576878176876-517cdb8006ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                        alt=""
                                    />
                                </div>
                                <div className="blogpost_preview_txt">
                                    <h3 className="txt_md_black">
                                        Relax and feel the nature, unforgettable waterfall
                                    </h3>
                                    <p className="txt_md_grey">@lara.watson</p>
                                </div>
                            </div>
                            <div className="blogpost_preview">
                                <div className="blogpost_preview_img">
                                    <img
                                        src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1023&q=80"
                                        alt=""
                                    />
                                </div>
                                <div className="blogpost_preview_txt">
                                    <h3 className="txt_md_black">
                                        Beautiful panorama, with fresh air relax holiday
                                    </h3>
                                    <p className="txt_md_grey">@natasha.alexander</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section data-scroll-section="">
                    <h1
                        className="left-h1"
                        style={{ padding: "1em 0 0 2.5em" }}
                        data-scroll
                        data-scroll-direction="horizontal"
                        data-scroll-speed={-3}
                        data-scroll-class="appear"
                        data-scroll-repeat="true"
                    >
                        Testimonial &amp; Gallery
                    </h1>
                    <div className="recommendations-container">
                        <div className="recommendations">
                            <ul className="recommendations_list">
                                <li className="recommendations__items">
                                    <a href="#" className="recommendations__links txt_md_black">
                                        Photo
                                    </a>
                                </li>
                                <li className="recommendations__items">
                                    <a href="#" className="recommendations__links txt_md_grey">
                                        Video
                                    </a>
                                </li>
                            </ul>
                            <div className="active_container">
                                <span className="active" />
                            </div>
                        </div>
                    </div>
                    <div className="testimonials">
                        <div className="preview_holder">
                            <div className="testimonials_preview">
                                <img
                                    src="https://images.unsplash.com/photo-1532186651327-6ac23687d189?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                                    alt=""
                                />
                            </div>
                            <div className="quotes">
                                <span className="control_left modify_quote_circle">
                                    <i className="fa fa-quote-left" aria-hidden="true" />
                                </span>
                                <p className="txt_md_black">
                                    I spend every minute with happy feelings i here, unforgettable
                                    place
                                </p>
                            </div>
                        </div>
                        <div className="preview_holder1">
                            <div className="testimonials_preview">
                                <img
                                    src="https://images.unsplash.com/photo-1591559797549-4e7c32d85671?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
                                    alt=""
                                />
                            </div>
                            <div className="quotes modify_quote">
                                <span className="control_left modify_quote_circle modify_quote_circle_sm">
                                    <i className="fa fa-quote-left" aria-hidden="true" />
                                </span>
                                <p className="txt_md_black">
                                    Love this place really wonderful with the panorama and temple
                                </p>
                            </div>
                        </div>
                        <div className="testimonials_preview_split">
                            <div className="layered_img">
                                <img
                                    src="https://images.unsplash.com/photo-1476158085676-e67f57ed9ed7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
                                    alt=""
                                />
                            </div>
                            <div className="layered_img">
                                <img
                                    src="https://images.unsplash.com/photo-1525243553587-fa7a14c804e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <footer className="footer" data-scroll-section="">
                <div className="footer_container">
                    <div className="newsletter" data-scroll data-scroll-speed={5}>
                        <h1>Subscribe To Our Newsletter</h1>
                        <div className="newsletter_form">
                            <input type="email" placeholder="enter your email here" />
                            <button className="">Subscribe</button>
                        </div>
                    </div>
                    <div className="footer_content_container">
                        <div className="footer_content">
                            <div className="contact">
                                <h1>Melaku Tour</h1>
                                <i className="fa fa-twitter" aria-hidden="true" />
                                <i className="fa fa-facebook" aria-hidden="true" />
                                <i className="fa fa-instagram" aria-hidden="true" />
                                <i className="fa fa-linkedin" aria-hidden="true" />
                                <p className="txt_md_white">melakuntour@gmail.com</p>
                                <p className="txt_md_white">(+62) 81234567890</p>
                            </div>
                            <ul className="footer_links">
                                <li>
                                    <h3 className="txt_lg_white">Company</h3>
                                </li>
                                <li>
                                    <a href="#" className="nav__link">
                                        Career
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav__link">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav__link">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav__link">
                                        Press Info
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav__link">
                                        Features
                                    </a>
                                </li>
                            </ul>
                            <ul className="footer_links">
                                <li>
                                    <h3 className="txt_lg_white">Travellers</h3>
                                </li>
                                <li>
                                    <a href="#" className="nav__link">
                                        Why Travellers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav__link">
                                        How it works
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav__link">
                                        Why Choose Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav__link">
                                        Customer Stories
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav__link">
                                        Review
                                    </a>
                                </li>
                            </ul>
                            <ul className="footer_links">
                                <li>
                                    <h3 className="txt_lg_white">Terms</h3>
                                </li>
                                <li>
                                    <a href="#" className="nav__link">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav__link">
                                        Terms &amp; Condition
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav__link">
                                        Copyright Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav__link">
                                        Security
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav__link">
                                        Fees &amp; Charge
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
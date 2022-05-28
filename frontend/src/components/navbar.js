import { Link } from "gatsby";
import React from "react";

const Navbar = () => {
    return (
        <header className="main-header-area">
            <div className="header-middle py-30">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="header-middle-wrap position-relative">
                                <div className="header-contact d-none d-lg-flex">
                                    <a href="https://www.amazon.com/stores/DUSPRO/Homepage/page/663F6DB1-0258-4A7D-ABBF-D5409E138D27">
                                        Go to Duspro on Amazon
                                    </a>
                                </div>
                                <a href="index.html" className="header-logo">
                                    <img
                                        src="assets/images/logo/dark.png"
                                        alt="Header Logo"
                                    />
                                </a>
                                <div className="header-right">
                                    <ul>
                                        <li>
                                            <a
                                                href="#exampleModal"
                                                className="search-btn bt"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                <i className="pe-7s-search" />
                                            </a>
                                        </li>
                                        <li className="dropdown d-none d-lg-block">
                                            <button
                                                className="btn btn-link dropdown-toggle ht-btn p-0"
                                                type="button"
                                                id="settingButton"
                                                data-bs-toggle="dropdown"
                                                aria-label="setting"
                                                aria-expanded="false"
                                            >
                                                <i className="pe-7s-users" />
                                            </button>
                                            <ul
                                                className="dropdown-menu"
                                                aria-labelledby="settingButton"
                                            >
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="my-account.html"
                                                    >
                                                        My account
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="login-register.html"
                                                    >
                                                        Login | Register
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="mobile-menu_wrap d-block d-lg-none">
                                            <a
                                                href="#mobileMenu"
                                                className="mobile-menu_btn toolbar-btn pl-0"
                                            >
                                                <i className="pe-7s-menu" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main-menu position-relative">
                                <nav className="main-nav">
                                    <ul>
                                        <li className="drop-holder">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li className="megamenu-holder">
                                            <a href="shop.html">Products</a>
                                            <ul className="drop-menu megamenu">
                                                <li>
                                                    <a href>Forest Moss Pole</a>
                                                </li>
                                                <li>
                                                    <a href>
                                                        Orchid Accessories
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href>
                                                        Carnivorous Accessories
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="drop-holder">
                                            <a href="blog.html">Blog</a>
                                        </li>
                                        <li>
                                            <a href="about.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Wholesale</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-sticky py-lg-0 py-4">
                <div className="container">
                    <div className="header-nav position-relative">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-6">
                                <a href="index.html" className="header-logo">
                                    <img
                                        src="assets/images/logo/dark.png"
                                        alt="Header Logo"
                                    />
                                </a>
                            </div>
                            <div className="col-lg-6 d-none d-lg-block">
                                <div className="main-menu">
                                    <nav className="main-nav">
                                        <ul>
                                            <li className="drop-holder">
                                                <a href="index.html">Home</a>
                                            </li>
                                            <li className="megamenu-holder">
                                                <a href="shop.html">Products</a>
                                            </li>
                                            <li className="drop-holder">
                                                <a href="blog.html">Blog</a>
                                            </li>
                                            <li>
                                                <a href="about.html">
                                                    About Us
                                                </a>
                                            </li>
                                            <li>
                                                <a href="contact.html">
                                                    Wholesale
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="header-right">
                                    <ul>
                                        <li>
                                            <a
                                                href="#exampleModal"
                                                className="search-btn bt"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                <i className="pe-7s-search" />
                                            </a>
                                        </li>
                                        <li className="dropdown d-none d-lg-block">
                                            <button
                                                className="btn btn-link dropdown-toggle ht-btn p-0"
                                                type="button"
                                                id="stickysettingButton"
                                                data-bs-toggle="dropdown"
                                                aria-label="setting"
                                                aria-expanded="false"
                                            >
                                                <i className="pe-7s-users" />
                                            </button>
                                            <ul
                                                className="dropdown-menu"
                                                aria-labelledby="stickysettingButton"
                                            >
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="my-account.html"
                                                    >
                                                        My account
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="login-register.html"
                                                    >
                                                        Login | Register
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="mobile-menu_wrap d-block d-lg-none">
                                            <a
                                                href="#mobileMenu"
                                                className="mobile-menu_btn toolbar-btn pl-0"
                                            >
                                                <i className="pe-7s-menu" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-menu_wrapper" id="mobileMenu">
                <div className="offcanvas-body">
                    <div className="inner-body">
                        <div className="offcanvas-top">
                            <a href="#" className="button-close">
                                <i className="pe-7s-close" />
                            </a>
                        </div>
                        <div className="header-contact offcanvas-contact">
                            <i className="pe-7s-call" />
                            <a href="tel://+00-123-456-789">+00 123 456 789</a>
                        </div>
                        <div className="offcanvas-user-info">
                            <ul className="dropdown-wrap">
                                <li className="dropdown dropdown-left">
                                    <button
                                        className="btn btn-link dropdown-toggle ht-btn"
                                        type="button"
                                        id="languageButtonTwo"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        English
                                    </button>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="languageButtonTwo"
                                    >
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                French
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Italian
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Spanish
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <button
                                        className="btn btn-link dropdown-toggle ht-btn usd-dropdown"
                                        type="button"
                                        id="currencyButtonTwo"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        USD
                                    </button>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="currencyButtonTwo"
                                    >
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                GBP
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                ISO
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <button
                                        className="btn btn-link dropdown-toggle ht-btn p-0"
                                        type="button"
                                        id="settingButtonTwo"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="pe-7s-users" />
                                    </button>
                                    <ul
                                        className="dropdown-menu dropdown-menu-end"
                                        aria-labelledby="settingButtonTwo"
                                    >
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="my-account.html"
                                            >
                                                My account
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="login-register.html"
                                            >
                                                Login | Register
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="wishlist.html">
                                        <i className="pe-7s-like" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="offcanvas-menu_area">
                            <nav className="offcanvas-navigation">
                                <ul className="mobile-menu">
                                    <li className="menu-item-has-children">
                                        <a href="#">
                                            <span className="mm-text">
                                                Home
                                                <i className="pe-7s-angle-down" />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="about.html">
                                            <span className="mm-text">
                                                About Us
                                            </span>
                                        </a>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">
                                            <span className="mm-text">
                                                Products
                                                <i className="pe-7s-angle-down" />
                                            </span>
                                        </a>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">
                                            <span className="mm-text">
                                                Blog
                                                <i className="pe-7s-angle-down" />
                                            </span>
                                        </a>
                                        <ul className="sub-menu">
                                            <li className="menu-item-has-children">
                                                <a href="#">
                                                    <span className="mm-text">
                                                        Blog Holder
                                                        <i className="pe-7s-angle-down" />
                                                    </span>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="blog.html">
                                                            <span className="mm-text">
                                                                Blog Default
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-listview.html">
                                                            Blog List View
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-detail.html">
                                                            Blog Detail
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">
                                            <span className="mm-text">
                                                Pages
                                                <i className="pe-7s-angle-down" />
                                            </span>
                                        </a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="faq.html">
                                                    <span className="mm-text">
                                                        Frequently Questions
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="404.html">
                                                    <span className="mm-text">
                                                        Error 404
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="contact.html">
                                            <span className="mm-text">
                                                Contact
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content modal-bg-dark">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                data-tippy="Close"
                                data-tippy-inertia="true"
                                data-tippy-animation="shift-away"
                                data-tippy-delay={50}
                                data-tippy-arrow="true"
                                data-tippy-theme="sharpborder"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="modal-search">
                                <span className="searchbox-info">
                                    Start typing and press Enter to search or
                                    ESC to close
                                </span>
                                <form action="#" className="hm-searchbox">
                                    <input
                                        type="text"
                                        name="Search..."
                                        defaultValue="Search..."
                                        onblur="if(this.value==''){this.value='Search...'}"
                                        onfocus="if(this.value=='Search...'){this.value=''}"
                                        autoComplete="off"
                                    />
                                    <button
                                        className="search-btn"
                                        type="submit"
                                        aria-label="searchbtn"
                                    >
                                        <i className="pe-7s-search" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas-minicart_wrapper" id="miniCart">
                <div className="offcanvas-body">
                    <div className="minicart-content">
                        <div className="minicart-heading">
                            <h4 className="mb-0">Shopping Cart</h4>
                            <a href="#" className="button-close">
                                <i
                                    className="pe-7s-close"
                                    data-tippy="Close"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay={50}
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                />
                            </a>
                        </div>
                        <ul className="minicart-list">
                            <li className="minicart-product">
                                <a className="product-item_remove" href="#">
                                    <i
                                        className="pe-7s-close"
                                        data-tippy="Remove"
                                        data-tippy-inertia="true"
                                        data-tippy-animation="shift-away"
                                        data-tippy-delay={50}
                                        data-tippy-arrow="true"
                                        data-tippy-theme="sharpborder"
                                    />
                                </a>
                                <a
                                    href="single-product-variable.html"
                                    className="product-item_img"
                                >
                                    <img
                                        className="img-full"
                                        src="assets/images/product/small-size/2-1-70x78.png"
                                        alt="Product Image"
                                    />
                                </a>
                                <div className="product-item_content">
                                    <a
                                        className="product-item_title"
                                        href="single-product-variable.html"
                                    >
                                        American Marigold
                                    </a>
                                    <span className="product-item_quantity">
                                        1 x $23.45
                                    </span>
                                </div>
                            </li>
                            <li className="minicart-product">
                                <a className="product-item_remove" href="#">
                                    <i
                                        className="pe-7s-close"
                                        data-tippy="Remove"
                                        data-tippy-inertia="true"
                                        data-tippy-animation="shift-away"
                                        data-tippy-delay={50}
                                        data-tippy-arrow="true"
                                        data-tippy-theme="sharpborder"
                                    />
                                </a>
                                <a
                                    href="single-product-variable.html"
                                    className="product-item_img"
                                >
                                    <img
                                        className="img-full"
                                        src="assets/images/product/small-size/2-2-70x78.png"
                                        alt="Product Image"
                                    />
                                </a>
                                <div className="product-item_content">
                                    <a
                                        className="product-item_title"
                                        href="single-product-variable.html"
                                    >
                                        Black Eyed Susan
                                    </a>
                                    <span className="product-item_quantity">
                                        1 x $25.45
                                    </span>
                                </div>
                            </li>
                            <li className="minicart-product">
                                <a className="product-item_remove" href="#">
                                    <i
                                        className="pe-7s-close"
                                        data-tippy="Remove"
                                        data-tippy-inertia="true"
                                        data-tippy-animation="shift-away"
                                        data-tippy-delay={50}
                                        data-tippy-arrow="true"
                                        data-tippy-theme="sharpborder"
                                    />
                                </a>
                                <a
                                    href="single-product-variable.html"
                                    className="product-item_img"
                                >
                                    <img
                                        className="img-full"
                                        src="assets/images/product/small-size/2-3-70x78.png"
                                        alt="Product Image"
                                    />
                                </a>
                                <div className="product-item_content">
                                    <a
                                        className="product-item_title"
                                        href="single-product-variable.html"
                                    >
                                        Bleeding Heart
                                    </a>
                                    <span className="product-item_quantity">
                                        1 x $30.45
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="minicart-item_total">
                        <span>Subtotal</span>
                        <span className="ammount">$79.35</span>
                    </div>
                    <div className="group-btn_wrap d-grid gap-2">
                        <a href="cart.html" className="btn btn-dark">
                            View Cart
                        </a>
                        <a href="checkout.html" className="btn btn-dark">
                            Checkout
                        </a>
                    </div>
                </div>
            </div>
            <div className="global-overlay" />
        </header>
    );
};

export default Navbar;

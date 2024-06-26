import React from 'react';
import Image from 'next/image';

import styles from './Navbar.module.scss';

import imageLogo from "../../../public/static/assets/img/Logo-Gooup1.png"

const Navbar = () => {

    return (
        <nav
            className={`${styles.navbar} navbar navbar-expand-lg bg-white navbar-light shadow sticky-top px-3 py-3`}
        >

            <a
                href="#"
                className={`${styles.navbar_logo} navbar-brand d-flex alaign-items-center px-4 px-lg-5 zoom`}
            >
                <Image src={imageLogo} alt="" className={`${styles.logo}`}/>

            </a>
            <button
                type="button"
                className={`${styles.navbar_button_toggler} navbar-toggler me-4`}
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span className={`${styles.navbar_toggler_icon} navbar-toggler-icon`} />
            </button>
            <div
                className={`${styles.navbar_collapse} collapse navbar-collapse`}
                id="navbarCollapse" 
            > 
                <div
                    className={`${styles.navbar_collapse_nav} navbar-nav ms-auto p-4 p-lg-0 gap-4`}
                >
                    <a
                        href="#"
                        className={`${styles.navbar_collapse_nav_nav_link} nav-item nav-link fw-bold effect_link active`}
                        style={{
                            color: "#F67A20"
                        }}
                    >
                        Trang chủ
                    </a>
                    <a
                        href="#"
                        className={`${styles.navbar_collapse_nav_nav_link} nav-item nav-link fw-bold effect_link`}
                    >
                        Ưu đãi
                    </a>
                    <a
                        href="#"
                        className={`${styles.navbar_collapse_nav_nav_link} nav-item nav-link fw-bold effect_link`}
                    >
                        Khóa học
                    </a>
                    <a
                        href="#"
                        className={`${styles.navbar_collapse_nav_nav_link} nav-item nav-link fw-bold effect_link`}
                    >
                        Liên hệ
                    </a>
                </div>
                <div className='mx-4'>
                    <button
                        type="submit"
                        className={`${styles.btn_register_now} btn py-2 px-3 fw-bold btn_hover_or`}
                        style={{ 
                            backgroundColor: "#F67A20",
                            borderRadius: "6px",
                            border: "1px solid orange",
                            color: "white"
                        }}
                    >
                        Đăng ký ngay
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
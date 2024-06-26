import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Global from "../../../public/static/assets/img/global.svg"
import styles from './Footer.module.scss';

import {
    faTwitter,
    faFacebookF,
    faYoutube,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

    return (
        <div 
            className={`${styles.footer} container-fluid text-light footer pt-5 mt-5 pb-5 wow fadeIn`}
            style={{
                backgroundColor: "#343F52",
            }}
            data-wow-delay="0.1s"
        >

            <div 
                className={`${styles.footer_content} container-fluid p-0 py-5`}
            >
                <div className={`${styles.footer_item} d-lg-flex justify-content-between align-items-center px-5 pb-5`}>
                    <div className={`${styles.footer_title} p-3 text-white display-6 fw-bold col-lg-5 mb-3 mb-lg-0`}>
                        Đăng ký ngay khoá học để nhận được ưu đãi
                    </div>
                    <div className="col-lg-7 d-lg-flex justify-content-end">
                        <button
                            className={`${styles.footer_btn_register} p-2 px-4 text-white fw-bold btn_hover_ft`}
                            style={{
                                width: "155.86px",
                                height: "52.89px",
                                backgroundColor: "#38C9D6",
                                borderRadius: "1000px",
                                border: "1px solid var(--primary, #4FD1C5)",
                            }}
                        >
                            Đăng ký
                        </button>
                    </div>
                </div>
        
            </div>

            <div className=""
                    style={{
                        marginLeft: "64px",
                        marginRight: "64px",
                        border: "1px solid rgba(164, 174, 198, 0.20)",
                    }}
                >
                    
            </div>

            <div className="row mt-5"
                style={{
                    marginLeft: "48px",
                    marginRight: "48px",
                    
                }}
            >

                <div className=" col-lg-3 col-md-6 mb-5">
                    <h2
                        className="text-white "
                    >
                        Gooup1
                    </h2>
                    <p
                        style={{
                            color: "#CACACA",
                        }}
                    >
                        © 2023 Sandbox.
                        All rights reserved.
                    </p>
                    <div className="d-flex pt-4"
                        style={{
                            gap: "12px",
                        }}
                    >
                        <a href='#' className='hover_icon_brand' style={{ color: 'inherit' }}>
                            <FontAwesomeIcon 
                                icon={faTwitter}
                                style={{
                                    width: "20px",
                                    height: "20px",
                                }}
                            />
                        </a>

                        <a href='#' className='hover_icon_brand' style={{ color: 'inherit' }}>
                            <FontAwesomeIcon 
                                icon={faFacebookF} 
                                style={{
                                    width: "20px",
                                    height: "20px",
                                }}
                            />                            
                        </a>

                        <a href='#' className='hover_icon_brand' style={{ 
                            color: 'inherit',
                            marginTop: "-3px" 
                        }}>
                            <Image 
                                src={Global}
                            />                            
                        </a>

                        <a href='#' className='hover_icon_brand' style={{ 
                            color: 'inherit',
                            marginTop: "1px" 
                        }}>
                            <FontAwesomeIcon 
                                icon={faInstagram}
                                style={{
                                    width: "20px",
                                    height: "20px",
                                }}
                            />
                        </a>

                        <a href='#' className='hover_icon_brand' style={{ 
                            color: 'inherit',
                            marginTop: "1px" 
                        }}>
                            <FontAwesomeIcon 
                                icon={faYoutube}
                                style={{
                                    width: "20px",
                                    height: "20px",
                                }}
                            />                            
                        </a>

                    </div>
                </div>

                <div className=" col-lg-3 col-md-6 mb-5">
                    <h5>
                        Liên hệ
                    </h5>
                    <p
                        style={{
                            color: "#CACACA",
                        }}
                    >
                        Tầng 6, toà nhà Homies, 173 Nguyễn Lương Bằng, Hoà Khánh Bắc, Liên Chiểu, Đà nẵng
                    </p>
                    <p
                        style={{
                            color: "#CACACA",
                        }}
                    >
                        gooup1vn@email.com
                        00 (123) 456 78 90
                    </p>
                </div>

                <div className=" col-lg-3 col-md-6 mb-5">
                    <h5>
                        Hỗ trợ khách hàng
                    </h5>
                    <p
                        style={{
                            color: "#CACACA",
                            paddingTop: "10px",
                        }}
                    >
                        Những câu hỏi thường gặp
                    </p>

                    <p
                        style={{
                            color: "#CACACA",
                        }}
                    >
                        Chính sách riêng tư
                    </p>

                    <p
                        style={{
                            color: "#CACACA",
                        }}
                    >
                        Điều khoản dịch vụ
                    </p>
                </div>

                <div className=" col-lg-3 col-md-6 mb-5">
                    <h5>
                        Nhận ưu đãi
                    </h5>

                    <p
                        style={{
                            color: "#CACACA",
                        }}
                    >
                        Đăng ký bản tin để nhận được ưu đãi mới nhất
                    </p>

                    <div
                        className={`${styles.ex} position-relative mx-auto`}
                        style={{ maxWidth: "400px" }}
                    >
                        <input
                            className={`${styles.ex} form-control w-100 py-3 ps-4 pe-5 custom-input placeholder-color`}
                            type="text"
                            placeholder="Địa chỉ email"
                            style={{ 
                                borderRadius: "10px",
                                border: "1px solid rgba(255, 255, 255, 0.10)",
                                background: "rgba(255, 255, 255, 0.03)",
                                color: "#959CA9",
                            }}
                        />
                        <button
                            type="button"
                            className={`${styles.ex} btn py-3 px-4 position-absolute top-0 mt-0 end-0 mr-2 text-white fw-normal btn_hover_ft`}
                            style={{
                                backgroundColor: "#5EB9F0",
                                borderRadius: "0px 10px 10px 0px",
                            }}
                        >
                            Join
                        </button>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Footer;
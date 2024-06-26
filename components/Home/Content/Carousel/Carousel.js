import React from 'react';
import Image from 'next/image';
import styles from './Carousel.module.scss';

import carousel from "../../../../public/static/assets/img/carousel_image.png"

const Carousel = () => {
    return (
        <>
            <div className={`${styles.container_Courasel} container-fluid p-0 position-relative`}>
                <div className='position-relative'>
                    <Image 
                        src={carousel} 
                        alt="Carousel Image" 
                        layout="responsive"
                        width={1920}
                        height={1080}
                        className='img-fluid bg-image hover-zoom'
                    />
                </div>

                <div className={`${styles.content_container} position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center p-3`}
                    style={{ 
                        background: "rgba(0, 0, 0, 0.36)"
                    }} 
                >
                    <div className={`${styles.detail_content} container`}>
                        <div className={`${styles.detail_row} row justify-content-start`}>
                            <h2 className={`${styles.title_one} text-uppercase mb-4 fw-bold fs-2`}
                                style={{
                                    color: "#38C9D6"
                                }}
                            >
                                CÁC KHOÁ HỌC FULL-STACK
                            </h2>
                            <h1 className={`${styles.title_two} fs-1 text-white mb-4 animated slideInDown fw-bold`}>
                                BACKEND-FRONTEND-DEVOPS
                            </h1>
                            <p className={`${styles.title_three} fs-4 text-white pb-2 fw-bold mb-3`}>
                                Thực hành dự án thực tế cùng chuyên gia
                            </p>
                            <div className={`${styles.btn_content} d-flex`}
                                style={{
                                    gap: "40px"
                                }}
                            >
                                <button
                                    type="submit"
                                    className={`${styles.btn_get_advice} btn py-2 px-4 d-lg-block fw-bold text-white btn_hover_or`}
                                    style={{ 
                                        backgroundColor: "#F67A20",
                                        borderRadius: "6px",
                                    }}
                                >
                                    Nhận tư vấn
                                </button>
                                <button
                                    type="submit"
                                    className={`${styles.btn_register} btn py-2 px-5 d-lg-block fw-bold btn_hover_w`}
                                    style={{ 
                                        backgroundColor: "white",
                                        color: "#F4841F",
                                        borderRadius: "6px",
                                    }}
                                >
                                    Đăng ký
                                </button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carousel;
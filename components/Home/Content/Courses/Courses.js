import React from 'react';
import Image from 'next/image';
import styles from './Courses.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheck } from '@fortawesome/free-solid-svg-icons';

import course from '../../../../public/static/assets/img/course.png';

const Courses = () => {

    return (
        <div className={`${styles.container_Courses} container-xxl my-5 py-5`}>
            <div className={`${styles.content_container} container`}>
                <div className={`${styles.ex} text-center`}>
                    <h1 
                        className="mb-5 fw-bold"
                        style={{
                            color: "#343F52"
                        }}
                    >
                        Các khoá học Full-stack nổi bật
                    </h1>
                </div>

                <div className={`${styles.detail_content} row g-4 mb-4`}>

                    <div className={`${styles.detail_course} col-lg-4 col-md-6`}>
                        <div 
                            className="card"
                        >
                            <div className="position-relative">
                                <Image 
                                    className="card-img-top" 
                                    src={course}
                                    alt="card image course"
                                />
                                <div 
                                    className="position-absolute top-0 m-2 bg-white fw-bold"
                                    style={{
                                        background: "rgba(255, 255, 255, 0.8)",
                                        padding: "5px 10px",
                                        borderRadius: "4px",
                                        color: "var(--Foundation-dark-dark-400, #75787C)"
                                    }}
                                >
                                    Full-stack
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Full-Stack Django + Next.js + VPS Hosting</h5>
                                <div className="card-text">
                                    <p className="">
                                        Học cách xây dựng ứng dụng web full-stack bằng Django, Next.js và triển khai nó trên VPS.
                                    </p>
                                    <h6>Bạn sẽ học được những gì:</h6>
                                    <div className={`${styles.ex} `}>
                                        <div className="d-flex gap-2 px-2 pb-1">
                                            <FontAwesomeIcon 
                                                icon={faCheck} 
                                                style={{
                                                    marginTop: "5px"
                                                }}
                                            />
                                            <span>Django cho Backend</span>
                                        </div>

                                        <div className="d-flex gap-2 px-2 pb-1">
                                            <FontAwesomeIcon 
                                                icon={faCheck} 
                                                style={{
                                                    marginTop: "5px"
                                                }}
                                            />
                                            <span>Nextjs cho frontend</span>
                                        </div>

                                        <div className="d-flex gap-2 px-2 pb-1">
                                            <FontAwesomeIcon 
                                                icon={faCheck} 
                                                style={{
                                                    marginTop: "5px"
                                                }}
                                            />
                                            <span>Deploy trang web lên server</span>
                                        </div>

                                        <div className="d-flex gap-2 px-2">
                                            <FontAwesomeIcon 
                                                icon={faCheck} 
                                                style={{
                                                    marginTop: "5px"
                                                }}
                                            />
                                            <span>Cơ sở dữ liệu</span>
                                        </div>
                                    </div>
                                </div>
                                <button 
                                    className={`${styles.btn_hover} d-flex justify-content-center align-items-center text-white py-2 fw-bold w-100 mt-4`}
                                    style={{
                                        borderRadius: "8px",
                                        border: "2px solid var(--foundation-orange-light-hover, #FDEBDD)",
                                        background: "var(--Foundation-orange-Normal, #F4841F)",
                                        cursor: "pointer",
                                        outline: "none",
                                        border: "1px solid orange"
                                    }}
                                >
                                    Đăng ký ngay
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.detail_course} col-lg-4 col-md-6`}>
                        <div 
                            className="card"
                        >
                            <div className="position-relative">
                                <Image 
                                    className="card-img-top" 
                                    src={course}
                                    alt="card image course"
                                />
                                <div 
                                    className="position-absolute top-0 m-2 bg-white fw-bold"
                                    style={{
                                        background: "rgba(255, 255, 255, 0.8)",
                                        padding: "5px 10px",
                                        borderRadius: "4px",
                                        color: "var(--Foundation-dark-dark-400, #75787C)"
                                    }}
                                >
                                    Full-stack
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Full-Stack Django + Next.js + VPS Hosting</h5>
                                <div className="card-text">
                                    <p className="">
                                        Học cách xây dựng ứng dụng web full-stack bằng Django, Next.js và triển khai nó trên VPS.
                                    </p>
                                    <h6>Bạn sẽ học được những gì:</h6>
                                    <div className={`${styles.ex} `}>
                                        <div className="d-flex gap-2 px-2 pb-1">
                                            <FontAwesomeIcon 
                                                icon={faCheck} 
                                                style={{
                                                    marginTop: "5px"
                                                }}
                                            />
                                            <span>Django cho Backend</span>
                                        </div>

                                        <div className="d-flex gap-2 px-2 pb-1">
                                            <FontAwesomeIcon 
                                                icon={faCheck} 
                                                style={{
                                                    marginTop: "5px"
                                                }}
                                            />
                                            <span>Nextjs cho frontend</span>
                                        </div>

                                        <div className="d-flex gap-2 px-2 pb-1">
                                            <FontAwesomeIcon 
                                                icon={faCheck} 
                                                style={{
                                                    marginTop: "5px"
                                                }}
                                            />
                                            <span>Deploy trang web lên server</span>
                                        </div>

                                        <div className="d-flex gap-2 px-2">
                                            <FontAwesomeIcon 
                                                icon={faCheck} 
                                                style={{
                                                    marginTop: "5px"
                                                }}
                                            />
                                            <span>Cơ sở dữ liệu</span>
                                        </div>
                                    </div>
                                </div>
                                <button 
                                    className={`${styles.btn_hover} d-flex justify-content-center align-items-center text-white py-2 fw-bold w-100 mt-4`}
                                    style={{
                                        borderRadius: "8px",
                                        border: "2px solid var(--foundation-orange-light-hover, #FDEBDD)",
                                        background: "var(--Foundation-orange-Normal, #F4841F)",
                                        cursor: "pointer",
                                        outline: "none",
                                        border: "1px solid orange"
                                    }}
                                >
                                    Đăng ký ngay
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.detail_course} col-lg-4 col-md-6`}>
                        <div 
                            className="card"
                        >
                            <div className="position-relative">
                                <Image 
                                    className="card-img-top" 
                                    src={course}
                                    alt="card image course"
                                />
                                <div 
                                    className="position-absolute top-0 m-2 bg-white fw-bold"
                                    style={{
                                        background: "rgba(255, 255, 255, 0.8)",
                                        padding: "5px 10px",
                                        borderRadius: "4px",
                                        color: "var(--Foundation-dark-dark-400, #75787C)"
                                    }}
                                >
                                    Full-stack
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Full-Stack Django + Next.js + VPS Hosting</h5>
                                <div className="card-text">
                                    <p className="">
                                        Học cách xây dựng ứng dụng web full-stack bằng Django, Next.js và triển khai nó trên VPS.
                                    </p>
                                    <h6>Bạn sẽ học được những gì:</h6>
                                    <div className={`${styles.ex} `}>
                                        <div className="d-flex gap-2 px-2 pb-1">
                                            <FontAwesomeIcon 
                                                icon={faCheck} 
                                                style={{
                                                    marginTop: "5px"
                                                }}
                                            />
                                            <span>Django cho Backend</span>
                                        </div>

                                        <div className="d-flex gap-2 px-2 pb-1">
                                            <FontAwesomeIcon 
                                                icon={faCheck} 
                                                style={{
                                                    marginTop: "5px"
                                                }}
                                            />
                                            <span>Nextjs cho frontend</span>
                                        </div>

                                        <div className="d-flex gap-2 px-2 pb-1">
                                            <FontAwesomeIcon 
                                                icon={faCheck} 
                                                style={{
                                                    marginTop: "5px"
                                                }}
                                            />
                                            <span>Deploy trang web lên server</span>
                                        </div>

                                        <div className="d-flex gap-2 px-2">
                                            <FontAwesomeIcon 
                                                icon={faCheck} 
                                                style={{
                                                    marginTop: "5px"
                                                }}
                                            />
                                            <span>Cơ sở dữ liệu</span>
                                        </div>
                                    </div>
                                </div>
                                <button 
                                    className={`${styles.btn_hover} d-flex justify-content-center align-items-center text-white py-2 fw-bold w-100 mt-4`}
                                    style={{
                                        borderRadius: "8px",
                                        border: "2px solid var(--foundation-orange-light-hover, #FDEBDD)",
                                        background: "var(--Foundation-orange-Normal, #F4841F)",
                                        cursor: "pointer",
                                        outline: "none",
                                        border: "1px solid orange"
                                    }}
                                >
                                    Đăng ký ngay
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.detail_course} col-lg-4 col-md-6`}>
                        <div 
                            className="card"
                        >
                            <div className="position-relative">
                                <Image 
                                    className="card-img-top" 
                                    src={course}
                                    alt="card image course"
                                />
                                <div 
                                    className="position-absolute top-0 m-2 bg-white fw-bold"
                                    style={{
                                        background: "rgba(255, 255, 255, 0.8)",
                                        padding: "5px 10px",
                                        borderRadius: "4px",
                                        color: "var(--Foundation-dark-dark-400, #75787C)"
                                    }}
                                >
                                    Full-stack
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Full-Stack Django + Next.js + VPS Hosting</h5>
                                <div className="card-text">
                                    <p className="">
                                        Học cách xây dựng ứng dụng web full-stack bằng Django, Next.js và triển khai nó trên VPS.
                                    </p>
                                    <h6>Bạn sẽ học được những gì:</h6>
                                    <div className={`${styles.ex} `}>
                                        <div className="d-flex gap-2 px-2 pb-1">
                                            <FontAwesomeIcon 
                                                icon={faCheck} 
                                                style={{
                                                    marginTop: "5px"
                                                }}
                                            />
                                            <span>Django cho Backend</span>
                                        </div>

                                        <div className="d-flex gap-2 px-2 pb-1">
                                            <FontAwesomeIcon 
                                                icon={faCheck} 
                                                style={{
                                                    marginTop: "5px"
                                                }}
                                            />
                                            <span>Nextjs cho frontend</span>
                                        </div>

                                        <div className="d-flex gap-2 px-2 pb-1">
                                            <FontAwesomeIcon 
                                                icon={faCheck} 
                                                style={{
                                                    marginTop: "5px"
                                                }}
                                            />
                                            <span>Deploy trang web lên server</span>
                                        </div>

                                        <div className="d-flex gap-2 px-2">
                                            <FontAwesomeIcon 
                                                icon={faCheck} 
                                                style={{
                                                    marginTop: "5px"
                                                }}
                                            />
                                            <span>Cơ sở dữ liệu</span>
                                        </div>
                                    </div>
                                </div>
                                <button 
                                    className={`${styles.btn_hover} d-flex justify-content-center align-items-center text-white py-2 fw-bold w-100 mt-4`}
                                    style={{
                                        borderRadius: "8px",
                                        border: "2px solid var(--foundation-orange-light-hover, #FDEBDD)",
                                        background: "var(--Foundation-orange-Normal, #F4841F)",
                                        cursor: "pointer",
                                        outline: "none",
                                        border: "1px solid orange"
                                    }}
                                >
                                    Đăng ký ngay
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.detail_course} col-lg-4 col-md-6`}>
                        <div 
                            className="card"
                        >
                            <div className="position-relative">
                                <Image 
                                    className="card-img-top" 
                                    src={course}
                                    alt="card image course"
                                />
                                <div 
                                    className="position-absolute top-0 m-2 bg-white fw-bold"
                                    style={{
                                        background: "rgba(255, 255, 255, 0.8)",
                                        padding: "5px 10px",
                                        borderRadius: "4px",
                                        color: "var(--Foundation-dark-dark-400, #75787C)"
                                    }}
                                >
                                    Full-stack
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Full-Stack Django + Next.js + VPS Hosting</h5>
                                <div className="card-text">
                                    <p className="">
                                        Học cách xây dựng ứng dụng web full-stack bằng Django, Next.js và triển khai nó trên VPS.
                                    </p>
                                    <h6>Bạn sẽ học được những gì:</h6>
                                    <div className={`${styles.ex} `}>
                                        <div className="d-flex gap-2 px-2 pb-1">
                                            <FontAwesomeIcon 
                                                icon={faCheck} 
                                                style={{
                                                    marginTop: "5px"
                                                }}
                                            />
                                            <span>Django cho Backend</span>
                                        </div>

                                        <div className="d-flex gap-2 px-2 pb-1">
                                            <FontAwesomeIcon 
                                                icon={faCheck} 
                                                style={{
                                                    marginTop: "5px"
                                                }}
                                            />
                                            <span>Nextjs cho frontend</span>
                                        </div>

                                        <div className="d-flex gap-2 px-2 pb-1">
                                            <FontAwesomeIcon 
                                                icon={faCheck} 
                                                style={{
                                                    marginTop: "5px"
                                                }}
                                            />
                                            <span>Deploy trang web lên server</span>
                                        </div>

                                        <div className="d-flex gap-2 px-2">
                                            <FontAwesomeIcon 
                                                icon={faCheck} 
                                                style={{
                                                    marginTop: "5px"
                                                }}
                                            />
                                            <span>Cơ sở dữ liệu</span>
                                        </div>
                                    </div>
                                </div>
                                <button 
                                    className={`${styles.btn_hover} d-flex justify-content-center align-items-center text-white py-2 fw-bold w-100 mt-4`}
                                    style={{
                                        borderRadius: "8px",
                                        border: "2px solid var(--foundation-orange-light-hover, #FDEBDD)",
                                        background: "var(--Foundation-orange-Normal, #F4841F)",
                                        cursor: "pointer",
                                        outline: "none",
                                        border: "1px solid orange"
                                    }}
                                >
                                    Đăng ký ngay
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.detail_course} col-lg-4 col-md-6`}>
                        <div 
                            className="card"
                        >
                            <div className="position-relative">
                                <Image 
                                    className="card-img-top" 
                                    src={course}
                                    alt="card image course"
                                />
                                <div 
                                    className="position-absolute top-0 m-2 bg-white fw-bold"
                                    style={{
                                        background: "rgba(255, 255, 255, 0.8)",
                                        padding: "5px 10px",
                                        borderRadius: "4px",
                                        color: "var(--Foundation-dark-dark-400, #75787C)"
                                    }}
                                >
                                    Full-stack
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Full-Stack Django + Next.js + VPS Hosting</h5>
                                <div className="card-text">
                                    <p className="">
                                        Học cách xây dựng ứng dụng web full-stack bằng Django, Next.js và triển khai nó trên VPS.
                                    </p>
                                    <h6>Bạn sẽ học được những gì:</h6>
                                    <div className={`${styles.ex} `}>
                                        <div className="d-flex gap-2 px-2 pb-1">
                                            <FontAwesomeIcon 
                                                icon={faCheck} 
                                                style={{
                                                    marginTop: "5px"
                                                }}
                                            />
                                            <span>Django cho Backend</span>
                                        </div>

                                        <div className="d-flex gap-2 px-2 pb-1">
                                            <FontAwesomeIcon 
                                                icon={faCheck} 
                                                style={{
                                                    marginTop: "5px"
                                                }}
                                            />
                                            <span>Nextjs cho frontend</span>
                                        </div>

                                        <div className="d-flex gap-2 px-2 pb-1">
                                            <FontAwesomeIcon 
                                                icon={faCheck} 
                                                style={{
                                                    marginTop: "5px"
                                                }}
                                            />
                                            <span>Deploy trang web lên server</span>
                                        </div>

                                        <div className="d-flex gap-2 px-2">
                                            <FontAwesomeIcon 
                                                icon={faCheck} 
                                                style={{
                                                    marginTop: "5px"
                                                }}
                                            />
                                            <span>Cơ sở dữ liệu</span>
                                        </div>
                                    </div>
                                </div>
                                <button 
                                    className={`${styles.btn_hover} d-flex justify-content-center align-items-center text-white py-2 fw-bold w-100 mt-4`}
                                    style={{
                                        borderRadius: "8px",
                                        border: "2px solid var(--foundation-orange-light-hover, #FDEBDD)",
                                        background: "var(--Foundation-orange-Normal, #F4841F)",
                                        cursor: "pointer",
                                        outline: "none",
                                        border: "1px solid orange"
                                    }}
                                >
                                    Đăng ký ngay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.btn_design} d-flex justify-content-center align-items-center`}>
                    <button 
                        className={`${styles.btn_hover} text-white py-2 px-5 fw-bold mt-4`}
                        style={{
                            borderRadius: "8px",
                            border: "2px solid var(--foundation-orange-light-hover, #FDEBDD)",
                            background: "var(--Foundation-orange-Normal, #F4841F)",
                            cursor: "pointer",
                            outline: "none",
                            border: "1px solid orange"
                        }}
                    >
                        Xem thêm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Courses;
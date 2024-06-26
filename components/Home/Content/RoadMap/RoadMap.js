import React from 'react';
import Image from 'next/image';
import styles from './RoadMap.module.scss';

import statistical from "../../../../public/static/assets/img/statistical.svg";
import contact from "../../../../public/static/assets/img/contact.svg";
import chart from "../../../../public/static/assets/img/chart.svg";
import box from "../../../../public/static/assets/img/box.svg";
import next from "../../../../public/static/assets/img/next.svg";
import line from "../../../../public/static/assets/img/line.svg";
import tick from "../../../../public/static/assets/img/tick.svg";
import discuss from "../../../../public/static/assets/img/discuss.png";

const RoadMap = () => {

    return (
        <div className={`${styles.container_RoadMap} container-fluid my-5 py-5`}>
            <div className={`${styles.link_RoadMap} container`}>
                <div className={`${styles.content_link} row`}>
                    <div className={`${styles.detail_content_link} col-lg-3 col-md-6 mt-4`}>
                        <div className={`${styles.detail_link} shadow rounded p-5`}>
                            <Image 
                                src={statistical}
                            />
                            <h6 
                                className="fw-bold mt-3"
                                style={{
                                    color: "#343F52"
                                }}
                            >
                                Đào tạo full-stack
                            </h6>
                            <p 
                                className="mt-3"
                                style={{
                                    color: "#60697B"
                                }}
                            >
                                Nulla vitae elit libero, a
                                pharetra augue. Donec id elit
                                non mi porta gravida at eget
                                metus cras justo.
                            </p>
                            <a className={`${styles.link_design} d-flex text-decoration-none gap-1 effect_link`} href="#">
                                <span 
                                    style={{
                                        fontWeight: "600",
                                        color: "var(--Foundation-orange-Normal, #F4841F)"
                                    }}
                                >Learn More</span>
                                <Image src={next} className="mt-1" />
                            </a>
                        </div>

                    </div>

                    <div className={`${styles.detail_content_link} col-lg-3 col-md-6 mt-4`}>
                        <div className={`${styles.detail_link} shadow rounded p-5`}>
                            <Image 
                                src={contact}
                            />
                            <h6 
                                className="fw-bold mt-3"
                                style={{
                                    color: "#343F52"
                                }}
                            >
                                Đào tạo full-stack
                            </h6>
                            <p 
                                className="mt-3"
                                style={{
                                    color: "#60697B"
                                }}
                            >
                                Nulla vitae elit libero, a
                                pharetra augue. Donec id elit
                                non mi porta gravida at eget
                                metus cras justo.
                            </p>
                            <a className={`${styles.link_design} d-flex text-decoration-none gap-1 effect_link`} href="#">
                                <span 
                                    style={{
                                        fontWeight: "600",
                                        color: "var(--Foundation-orange-Normal, #F4841F)"
                                    }}
                                >Learn More</span>
                                <Image src={next} className="mt-1" />
                            </a>
                        </div>

                    </div>

                    <div className={`${styles.detail_content_link} col-lg-3 col-md-6 mt-4`}>
                        <div className={`${styles.detail_link} shadow rounded p-5`}>
                            <Image 
                                src={chart}
                            />
                            <h6 
                                className="fw-bold mt-3"
                                style={{
                                    color: "#343F52"
                                }}
                            >
                                Đào tạo full-stack
                            </h6>
                            <p 
                                className="mt-3"
                                style={{
                                    color: "#60697B"
                                }}
                            >
                                Nulla vitae elit libero, a
                                pharetra augue. Donec id elit
                                non mi porta gravida at eget
                                metus cras justo.
                            </p>
                            <a className={`${styles.link_design} d-flex text-decoration-none gap-1 effect_link`} href="#">
                                <span 
                                    style={{
                                        fontWeight: "600",
                                        color: "var(--Foundation-orange-Normal, #F4841F)"
                                    }}
                                >Learn More</span>
                                <Image src={next} className="mt-1" />
                            </a>
                        </div>

                    </div>

                    <div className={`${styles.detail_content_link} col-lg-3 col-md-6 mt-4`}>
                        <div className={`${styles.detail_link} shadow rounded p-5`}>
                            <Image 
                                src={box}
                            />
                            <h6 
                                className="fw-bold mt-3"
                                style={{
                                    color: "#343F52"
                                }}
                            >
                                Đào tạo full-stack
                            </h6>
                            <p 
                                className="mt-3"
                                style={{
                                    color: "#60697B"
                                }}
                            >
                                Nulla vitae elit libero, a
                                pharetra augue. Donec id elit
                                non mi porta gravida at eget
                                metus cras justo.
                            </p>
                            <a className={`${styles.link_design} d-flex text-decoration-none gap-1 effect_link`} href="#">
                                <span 
                                    style={{
                                        fontWeight: "600",
                                        color: "var(--Foundation-orange-Normal, #F4841F)"
                                    }}
                                >Learn More</span>
                                <Image src={next} className="mt-1" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            <div 
                className={`${styles.content_RoadMap} container`}
                style={{
                    marginTop: "100px"
                }}
            >
                <h6 
                    className="text-center text-uppercase"
                    style={{
                        color: "#AAB0BC"
                    }}
                >
                    Tại sao chọn gooup1?
                </h6>
                <div className={`${styles.detail_RoadMap} d-flex justify-content-center align-items-center gap-2`}>
                    <div className={`${styles.brand_RoadMap} position-relative`}>
                        <h1 
                            className="fw-bold"
                            style={{
                                color: "#343F52"
                            }}
                        >Gooup1</h1>
                        <Image 
                            className="position-absolute"
                            src={line}
                            style={{ 
                                top: "90%", 
                                left: 0,
                                width: "100%",
                                height: "auto"
                            }}
                        />
                    </div>

                    <h2 
                        className={`${styles.title_detail} text-uppercase fw-normal`}
                        style={{
                            color: "#343F52"
                        }}
                    >Học Thực Tiễn, Làm Thực Tế</h2>
                </div>
                <h2 
                    className="text-uppercase fw-normal text-center mt-3"
                    style={{
                        color: "#343F52"
                    }}
                >Với Lộ Trình Học Tập Chuyên Nghiệp</h2>

                <div
                    className="row"
                    style={{
                        marginTop: "50px"
                    }}
                >
                    <div className="col-lg-4 col-md-6 mt-5">
                        <div className="d-flex shadow rounded gap-3 p-3 pt-4 pb-2">
                            <Image src={contact} />
                            <div className="row">
                                <h6 
                                    className="fw-bold"
                                    style={{
                                        color: "#343F52"
                                    }}
                                >Collect Ideas</h6>
                                <p
                                    className="mt-2"
                                    style={{
                                        color: "#60697B"
                                    }}
                                >
                                    Duis mollis commodo luctus cursus
                                    commodo tortor mauris.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-5">
                        <div className="d-flex gap-3 p-3 pt-4 pb-2">
                            <Image src={chart} />
                            <div className="row">
                                <h6 
                                    className="fw-bold"
                                    style={{
                                        color: "#343F52"
                                    }}
                                >Data Analysis</h6>
                                <p
                                    className="mt-2"
                                    style={{
                                        color: "#60697B"
                                    }}
                                >
                                    Vivamus sagittis lacus augue fusce
                                    dapibus tellus nibh.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-5">
                        <div className="d-flex gap-3 p-3 pt-4 pb-2">
                            <Image src={box} />
                            <div className="row">
                                <h6 
                                    className="fw-bold"
                                    style={{
                                        color: "#343F52"
                                    }}
                                >Finalize Product</h6>
                                <p
                                    className="mt-2"
                                    style={{
                                        color: "#60697B"
                                    }}
                                >
                                    Vestibulum ligula porta feli
                                    faucibus mollis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div 
                    className={`${styles.detail_content_RoadMap} row`}
                    style={{
                        marginTop: "90px"
                    }}
                >
                    <div className="col-lg-6 hoverImageWrapper">
                        <Image 
                            src={discuss} 
                            layout="responsive"
                            style={{
                                width: "100%",
                                height: "auto"
                            }}
                            className='hoverImage'
                        />
                    </div>

                    <div className={`${styles.detail_content} col-lg-6 mt-2`}>
                        <div
                            className={`${styles.detail_content_div} `}
                            style={{
                                marginLeft: "50px"
                            }}
                        >
                            <h3
                                className="fw-bold"
                                style={{
                                    color: "#343F52"
                                }}
                            >Collect Ideas</h3>
                            <p
                                className="mt-4"
                                style={{
                                    color: "#60697B"
                                }}
                            >
                                Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non
                                fermentum massa justo sit amet risus. Nullam quis risus eget urna.
                            </p>

                            <div className="p-2">
                                <div className="d-flex gap-3">
                                    <Image src={tick} className="mt-2" />
                                    <span
                                        style={{
                                            color: "#60697B"
                                        }}
                                    >Aenean eu leo quam. Pellentesque ornare.</span>
                                </div>

                                <div className="d-flex gap-3 mt-1">
                                    <Image src={tick} className="mt-2" />
                                    <span
                                        style={{
                                            color: "#60697B"
                                        }}
                                    >Nullam quis risus eget urna mollis ornare.</span>
                                </div>

                                <div className="d-flex gap-3 mt-1">
                                    <Image src={tick} className="mt-2" />
                                    <span
                                        style={{
                                            color: "#60697B"
                                        }}
                                    >Donec id elit non mi porta gravida at eget.</span>
                                </div>
                            </div>

                            <button 
                                className="text-white py-2 fw-bold mt-3 px-4 btn_hover_or"
                                style={{
                                    borderRadius: "8px",
                                    border: "1px solid orange",
                                    background: "var(--Foundation-orange-Normal, #F4841F)",
                                    cursor: "pointer",
                                    outline: "none"
                                }}
                            >
                                Xem thêm
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default RoadMap;
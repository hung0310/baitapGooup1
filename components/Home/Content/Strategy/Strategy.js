import React from 'react';
import Image from 'next/image';
import styles from './Strategy.module.scss';

const Strategy = () => {

    return (
        <div className={`${styles.container_strategy} container-fluid my-5 py-5`}>
            <div className={`${styles.content_strategy} container`}>
                <div className={`${styles.detail_content} row`}>
                    <div className={`${styles.row_one} col-lg-6`}>
                        <div className={`${styles.content_row_one} px-5`}
                        >
                            <h6
                                className={`${styles.head_content} text-uppercase fw-bold`}
                                style={{
                                    color: "var(--Foundation-Blue-blue-400, #38C9D6)",
                                    marginBottom: "62px"
                                }}
                            >Our Strategy</h6>

                            <h1
                                className={`${styles.title_content_row_one} py-4`}
                                style={{
                                    color: "var(--Foundation-Text-primary-text-primary-400, #464A60)",
                                    marginBottom: "62px"
                                }}
                            >
                                5 Giai đoạn đào tạo để trở thành lập trình viên có năng lực cốt lõi
                            </h1>

                            <div 
                                className={`${styles.detail_para_content} `}
                                style={{
                                    marginBottom: "48px"
                                }}
                            >
                                <p
                                    className={`${styles.para_content} `}
                                    style={{
                                        color: "var(--Foundation-Text-secondary-text-secondary-400, #75787C)"
                                    }}
                                >
                                    Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                                    vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor
                                    id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis.
                                </p>

                                <p
                                    className={`${styles.para_content} mt-5`} 
                                    style={{
                                        color: "var(--Foundation-Text-secondary-text-secondary-400, #75787C)"
                                    }}
                                >
                                    Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis
                                    euismod semper. Aenean lacinia bibendum nulla sed consectetur.
                                </p>
                            </div>
                            <div className={`${styles.btn_row_one} `}>
                                <button 
                                    className="text-white py-2 fw-bold mt-2 px-4 btn_hover_or"
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

                    <div className={`${styles.row_two} col-lg-6 px-0`}>

                        <div className="d-flex">
                            <div className="shadow rounded p-3 pt-1 pb-4">
                                <div className="d-flex gap-3">
                                    <h5
                                        className="p-4 pb-0 mt-3"
                                        style={{
                                            color: "var(--Foundation-Blue-blue-400, #38C9D6)"
                                        }}
                                    >01</h5>
                                    <div className="row">
                                        <h6 
                                            className="fw-bold pt-3"
                                            style={{
                                                color: "#343F52",
                                                marginBottom: "0px"
                                            }}
                                        >Bài tập kiến thức nền</h6>
                                        <p
                                            className="mb-0 pr-5"
                                            style={{
                                                color: "#60697B"
                                            }}
                                        >
                                            Nulla vitae elit libero pharetra augue dapibus.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                            </div>
                        </div>

                        <div className="d-flex mt-5">
                            <div className="p-4">
                            </div>
                            <div className="shadow rounded p-3 pt-1 pb-4">
                                <div className="d-flex gap-3">
                                    <h5
                                        className="p-4 pb-0 mt-3"
                                        style={{
                                            color: "var(--Foundation-Blue-blue-400, #38C9D6)"
                                        }}
                                    >02</h5>
                                    <div className="row">
                                        <h6 
                                            className="fw-bold pt-3"
                                            style={{
                                                color: "#343F52",
                                                marginBottom: "0px"
                                            }}
                                        >Học sâu về ngôn ngữ lập trình</h6>
                                        <p
                                            className="mb-0 pr-5"
                                            style={{
                                                color: "#60697B"
                                            }}
                                        >
                                            Nulla vitae elit libero pharetra augue dapibus.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex mt-5">
                            <div className="shadow rounded p-3 pt-1 pb-4">
                                <div className="d-flex gap-3">
                                    <h5
                                        className="p-4 pb-0 mt-3"
                                        style={{
                                            color: "var(--Foundation-Blue-blue-400, #38C9D6)"
                                        }}
                                    >03</h5>
                                    <div className="row">
                                        <h6 
                                            className="fw-bold pt-3"
                                            style={{
                                                color: "#343F52",
                                                marginBottom: "0px"
                                            }}
                                        >Học các framework</h6>
                                        <p
                                            className="mb-0 pr-5"
                                            style={{
                                                color: "#60697B"
                                            }}
                                        >
                                            Nulla vitae elit libero pharetra augue dapibus.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                            </div>
                        </div>

                        <div className="d-flex mt-5">
                            <div className="p-4">
                            </div>
                            <div className="shadow rounded p-3 pt-1 pb-4">
                                <div className="d-flex gap-3">
                                    <h5
                                        className="p-4 pb-0 mt-3"
                                        style={{
                                            color: "var(--Foundation-Blue-blue-400, #38C9D6)"
                                        }}
                                    >04</h5>
                                    <div className="row">
                                        <h6 
                                            className="fw-bold pt-3"
                                            style={{
                                                color: "#343F52",
                                                marginBottom: "0px"
                                            }}
                                        >Luyện project thực tế</h6>
                                        <p
                                            className="mb-0 pr-5"
                                            style={{
                                                color: "#60697B"
                                            }}
                                        >
                                            Nulla vitae elit libero pharetra augue dapibus.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex mt-5">
                            <div className="shadow rounded p-3 pt-1 pb-4">
                                <div className="d-flex gap-3">
                                    <h5
                                        className="p-4 pb-0 mt-3"
                                        style={{
                                            color: "var(--Foundation-Blue-blue-400, #38C9D6)"
                                        }}
                                    >05</h5>
                                    <div className="row">
                                        <h6 
                                            className="fw-bold pt-3"
                                            style={{
                                                color: "#343F52",
                                                marginBottom: "0px"
                                            }}
                                        >Luyện phỏng vấn</h6>
                                        <p
                                            className="mb-0 pr-5"
                                            style={{
                                                color: "#60697B"
                                            }}
                                        >
                                            Nulla vitae elit libero pharetra augue dapibus.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Strategy;
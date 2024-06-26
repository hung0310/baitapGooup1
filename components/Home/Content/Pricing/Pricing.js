import React from 'react';
import Image from 'next/image';
import styles from './Pricing.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faReplyAll,
} from "@fortawesome/free-solid-svg-icons";

const Pricing = () => {

    return (
        <div className={`${styles.conatainer_Pricing} container-xxl my-5 py-5`}>
            <div className="container">
                <h1
                    className="fw-bold text-center"
                    style={{
                        color: "var(--Foundation-Text-primary-text-primary-600, #161A33)"
                    }}
                >
                    Ưu Đãi Đặc Biệt Cho Sinh Viên
                </h1>
                <p
                    className='text-center p-4 fs-5'
                >
                    Đầu tư học càng sớm, càng tiết kiệm và có lợi hơn. Giá đào tạo sẽ tăng dần từ năm 1 đến năm 3. Người đi làm được áp dụng mức giá như sinh viên năm 3.
                </p>               
            </div>

            <div className={`${styles.content_container} container my-5`}>
                <div 
                    className={`${styles.detail_content} row`}
                >
                    <div className={`${styles.content_col} col-lg-3 col-md-6 mt-4 p-3`}>
                        <div className={`${styles.detail_col} shadow rounded`}>
                            <div className={`${styles.title_col} p-4`}>
                                <h4 
                                    className='text-center fw-bold'
                                    style={{
                                        color: "var(--Foundation-Text-primary-text-primary-400, #464A60)"
                                    }}
                                >
                                    Sinh viên năm 1
                                </h4>
                                <div className='row mt-5'>
                                    <h3 
                                        className='fw-bold text-center'
                                    >
                                        1.000.000VNĐ
                                    </h3>
                                    <span className='fs-5 text-center'>
                                        /Tháng
                                    </span>
                                </div>

                                <p className={`${styles.para_col} mt-3`}>
                                    Đầu tư từ sớm giúp con đường đi của bạn rõ ràng hơn
                                </p>
                            </div>

                            <div className="my-2"
                                style={{
                                    border: "1px solid rgba(164, 174, 198, 0.20)",
                                }}
                            ></div>

                            <div className={`${styles.body_col} p-4 pb-1`}>
                                <h6 
                                    className={`${styles.title_body} fw-bold`}
                                    style={{
                                        color: "var(--Foundation-Text-secondary-text-secondary-600, #4B4E53)"
                                    }}
                                >
                                    Bạn được cung cấp những gì:
                                </h6>
                                <div className={`${styles.content_body} d-flex gap-2 mt-3`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                                <div className={`${styles.content_body} d-flex gap-2 mt-2`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                                <div className={`${styles.content_body} d-flex gap-2 mt-2`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                                <div className={`${styles.content_body} d-flex gap-2 mt-2`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                                <div className={`${styles.content_body} d-flex gap-2 mt-2`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                                <div className={`${styles.content_body} d-flex gap-2 mt-2`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                                <div className={`${styles.content_body} d-flex gap-2 mt-2`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                            </div>

                            <div className='p-2'>
                                <button 
                                    className="text-white fw-bold mt-5 px-4 py-2 w-100 btn_hover_or"
                                    style={{
                                        borderRadius: "8px",
                                        border: "1px solid orange",
                                        background: "var(--Foundation-orange-Normal, #F4841F)",
                                        cursor: "pointer",
                                        outline: "none"
                                    }}
                                >
                                    Bắt đầu
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className={`${styles.content_col} col-lg-3 col-md-6 mt-4 p-3`}>
                        <div className={`${styles.detail_col} shadow rounded`}>
                            <div className={`${styles.title_col} p-4`}>
                                <h4 
                                    className='text-center fw-bold'
                                    style={{
                                        color: "var(--Foundation-Text-primary-text-primary-400, #464A60)"
                                    }}
                                >
                                    Sinh viên năm 1
                                </h4>
                                <div className='row mt-5'>
                                    <h3 
                                        className='fw-bold text-center'
                                    >
                                        1.000.000VNĐ
                                    </h3>
                                    <span className='fs-5 text-center'>
                                        /Tháng
                                    </span>
                                </div>

                                <p className={`${styles.para_col} mt-3`}>
                                    Đầu tư từ sớm giúp con đường đi của bạn rõ ràng hơn
                                </p>
                            </div>

                            <div className="my-2"
                                style={{
                                    border: "1px solid rgba(164, 174, 198, 0.20)",
                                }}
                            ></div>

                            <div className={`${styles.body_col} p-4 pb-1`}>
                                <h6 
                                    className={`${styles.title_body} fw-bold`}
                                    style={{
                                        color: "var(--Foundation-Text-secondary-text-secondary-600, #4B4E53)"
                                    }}
                                >
                                    Bạn được cung cấp những gì:
                                </h6>
                                <div className={`${styles.content_body} d-flex gap-2 mt-3`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                                <div className={`${styles.content_body} d-flex gap-2 mt-2`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                                <div className={`${styles.content_body} d-flex gap-2 mt-2`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                                <div className={`${styles.content_body} d-flex gap-2 mt-2`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                                <div className={`${styles.content_body} d-flex gap-2 mt-2`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                                <div className={`${styles.content_body} d-flex gap-2 mt-2`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                                <div className={`${styles.content_body} d-flex gap-2 mt-2`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                            </div>

                            <div className='p-2'>
                                <button 
                                    className="text-white fw-bold mt-5 px-4 py-2 w-100 btn_hover_or"
                                    style={{
                                        borderRadius: "8px",
                                        border: "1px solid orange",
                                        background: "var(--Foundation-orange-Normal, #F4841F)",
                                        cursor: "pointer",
                                        outline: "none"
                                    }}
                                >
                                    Bắt đầu
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className={`${styles.content_col} col-lg-3 col-md-6 mt-4 p-3`}>
                        <div className={`${styles.detail_col} shadow rounded`}>
                            <div className={`${styles.title_col} p-4`}>
                                <h4 
                                    className='text-center fw-bold'
                                    style={{
                                        color: "var(--Foundation-Text-primary-text-primary-400, #464A60)"
                                    }}
                                >
                                    Sinh viên năm 1
                                </h4>
                                <div className='row mt-5'>
                                    <h3 
                                        className='fw-bold text-center'
                                    >
                                        1.000.000VNĐ
                                    </h3>
                                    <span className='fs-5 text-center'>
                                        /Tháng
                                    </span>
                                </div>

                                <p className={`${styles.para_col} mt-3`}>
                                    Đầu tư từ sớm giúp con đường đi của bạn rõ ràng hơn
                                </p>
                            </div>

                            <div className="my-2"
                                style={{
                                    border: "1px solid rgba(164, 174, 198, 0.20)",
                                }}
                            ></div>

                            <div className={`${styles.body_col} p-4 pb-1`}>
                                <h6 
                                    className={`${styles.title_body} fw-bold`}
                                    style={{
                                        color: "var(--Foundation-Text-secondary-text-secondary-600, #4B4E53)"
                                    }}
                                >
                                    Bạn được cung cấp những gì:
                                </h6>
                                <div className={`${styles.content_body} d-flex gap-2 mt-3`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                                <div className={`${styles.content_body} d-flex gap-2 mt-2`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                                <div className={`${styles.content_body} d-flex gap-2 mt-2`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                                <div className={`${styles.content_body} d-flex gap-2 mt-2`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                                <div className={`${styles.content_body} d-flex gap-2 mt-2`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                                <div className={`${styles.content_body} d-flex gap-2 mt-2`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                                <div className={`${styles.content_body} d-flex gap-2 mt-2`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                            </div>

                            <div className='p-2'>
                                <button 
                                    className="text-white fw-bold mt-5 px-4 py-2 w-100 btn_hover_or"
                                    style={{
                                        borderRadius: "8px",
                                        border: "1px solid orange",
                                        background: "var(--Foundation-orange-Normal, #F4841F)",
                                        cursor: "pointer",
                                        outline: "none"
                                    }}
                                >
                                    Bắt đầu
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className={`${styles.content_col} col-lg-3 col-md-6 mt-4 p-3`}>
                        <div className={`${styles.detail_col} shadow rounded`}>
                            <div className={`${styles.title_col} p-4`}>
                                <h4 
                                    className='text-center fw-bold'
                                    style={{
                                        color: "var(--Foundation-Text-primary-text-primary-400, #464A60)"
                                    }}
                                >
                                    Sinh viên năm 1
                                </h4>
                                <div className='row mt-5'>
                                    <h3 
                                        className='fw-bold text-center'
                                    >
                                        1.000.000VNĐ
                                    </h3>
                                    <span className='fs-5 text-center'>
                                        /Tháng
                                    </span>
                                </div>

                                <p className={`${styles.para_col} mt-3`}>
                                    Đầu tư từ sớm giúp con đường đi của bạn rõ ràng hơn
                                </p>
                            </div>

                            <div className="my-2"
                                style={{
                                    border: "1px solid rgba(164, 174, 198, 0.20)",
                                }}
                            ></div>

                            <div className={`${styles.body_col} p-4 pb-1`}>
                                <h6 
                                    className={`${styles.title_body} fw-bold`}
                                    style={{
                                        color: "var(--Foundation-Text-secondary-text-secondary-600, #4B4E53)"
                                    }}
                                >
                                    Bạn được cung cấp những gì:
                                </h6>
                                <div className={`${styles.content_body} d-flex gap-2 mt-3`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                                <div className={`${styles.content_body} d-flex gap-2 mt-2`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                                <div className={`${styles.content_body} d-flex gap-2 mt-2`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                                <div className={`${styles.content_body} d-flex gap-2 mt-2`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                                <div className={`${styles.content_body} d-flex gap-2 mt-2`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                                <div className={`${styles.content_body} d-flex gap-2 mt-2`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                                <div className={`${styles.content_body} d-flex gap-2 mt-2`}>
                                    <FontAwesomeIcon 
                                        icon={faReplyAll} 
                                        style={{
                                            transform: "scaleX(-1)",
                                            color: "#38C9D6"
                                        }}
                                        className='mt-1'
                                    />
                                    <span className=''>
                                        Văn phòng học tập tiện nghi
                                    </span>
                                </div>

                            </div>

                            <div className='p-2'>
                                <button 
                                    className="text-white fw-bold mt-5 px-4 py-2 w-100 btn_hover_or"
                                    style={{
                                        borderRadius: "8px",
                                        border: "1px solid orange",
                                        background: "var(--Foundation-orange-Normal, #F4841F)",
                                        cursor: "pointer",
                                        outline: "none"
                                    }}
                                >
                                    Bắt đầu
                                </button>
                            </div>

                        </div>
                    </div>
                </div> 
            </div>

        </div>
    );
};

export default Pricing;
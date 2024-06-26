import React from 'react';
import Image from 'next/image';
import styles from './Chance.module.scss';

import imgJP from "../../../../public/static/assets/img/imgJP.png";
import imgKR from "../../../../public/static/assets/img/imgKR.png";

const Chance = () => {

    return (
        <div className={`${styles.container_Chance} container-fluid mt-5 pt-5`}>
            <div className="container">
                <h6
                    className="fw-bold text-uppercase text-center"
                    style={{
                        color: "#5EB9F0"
                    }}
                >Cơ hội đi nước ngoài</h6>
                <h1
                    className="text-center pt-2"
                    style={{
                        color: "#343F52"
                    }}
                >
                    Đào Tạo Lập Trình Viên Cho 
                    Nhật Bản và Hàn Quốc
                </h1>
                <p
                    className="text-center pt-4"
                    style={{
                        fontSize: "17px"
                    }}
                >
                    Nắm bắt nhu cầu ngày càng tăng về lập trình viên giỏi tại Nhật Bản và Hàn Quốc bằng cách trang bị cho mình kỹ năng cần thiết. Khám phá lợi ích của việc xuất khẩu lao động đến những thị trường công nghệ cao này.
                </p>
            </div>

            <div className={`${styles.container_content} container`}>
                <div 
                    className={`${styles.content_row} row`}
                    style={{
                        marginTop: "80px"
                    }}
                >
                    <div className={`${styles.detail_content_row} col-lg-6 mt-5`}>
                        <h3 className={`${styles.content_h_row} fw-bold pt-3`}>
                            Cơ hội tại Nhật Bản
                        </h3>
                        <p
                            className={`${styles.content_p_row} pt-3`} 
                            style={{
                                fontSize: "17px"
                            }}
                        >
                            Ngành công nghệ Nhật Bản đang bùng nổ với nhu cầu cao về lập trình viên giỏi. Bằng cách học ngôn ngữ Nhật và kỹ năng lập trình, bạn có thể khai thác thị trường tiềm năng này và tận dụng cơ hội xuất khẩu lao động quý giá.
                        </p>
                        <button 
                            className="text-white py-2 fw-bold mt-5 px-4 py-3 w-100 btn_hover_or"
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
                    <div className="col-lg-6 mt-5 hoverImageWrapper">
                        <Image 
                            src={imgJP} 
                            style={{
                                width: "100%",
                                height: "100%"
                            }}
                            className='hoverImage'
                        />
                    </div>
                </div>

                <div 
                    className={`${styles.content_row} row`}
                    style={{
                        marginTop: "80px"
                    }}
                >
                    <div className="col-lg-6 mt-5 hoverImageWrapper">
                        <Image 
                            src={imgKR} 
                            style={{
                                width: "100%",
                                height: "100%"
                            }}
                            className='hoverImage'
                        />
                    </div>
                    <div className={`${styles.detail_content_row} col-lg-6 mt-5`}>
                        <h3 className={`${styles.content_h_row} fw-bold pt-3`}>
                            Cơ hội tại Hàn Quốc
                        </h3>
                        <p
                            className={`${styles.content_p_row} pt-3`}
                            style={{
                                fontSize: "17px"
                            }}
                        >
                            Ngành công nghệ Hàn Quốc đang bùng nổ với nhu cầu cao về lập trình viên giỏi. Bằng cách học ngôn ngữ Nhật và kỹ năng lập trình, bạn có thể khai thác thị trường tiềm năng này và tận dụng cơ hội xuất khẩu lao động quý giá.
                        </p>
                        <button 
                            className="text-white py-2 fw-bold mt-5 px-4 py-3 w-100 btn_hover_or"
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
    );
};

export default Chance;
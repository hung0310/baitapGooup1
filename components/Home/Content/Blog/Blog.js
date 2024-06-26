import React from 'react';
import Image from 'next/image';
import styles from './Blog.module.scss';

import imgBlog1 from "../../../../public/static/assets/img/imgBlog1.png";
import imgBlog2 from "../../../../public/static/assets/img/imgBlog2.png";
import imgBlog3 from "../../../../public/static/assets/img/imgBlog3.png";
import imgBlog4 from "../../../../public/static/assets/img/imgBlog4.png";
import imgBlog5 from "../../../../public/static/assets/img/imgBlog5.png";

const Blog = () => {

    return (
        <div className={`${styles.container_Blog} container-xxl my-5 py-5`}>
            <div className={`${styles.content_container} container`}>
                <div className={`${styles.detail_content} row`}>
                    <div className={`${styles.content_col_para} col-lg-4 col-md-12`}>
                        <div className={`${styles.detail_content_col} pt-4 px-3 mt-4`}>
                            <h2
                                className={`${styles.title_content} fw-bold`}
                            >
                                Khám Phá Kiến Thức Mới Tại Blog Của Chúng Tôi
                            </h2>
                            <p
                                className={`${styles.para_content} fs-5 mt-4`}
                                style={{
                                    lineHeight: "28.9px"
                                }}
                            >
                                Cung cấp các bài viết chất lượng và thông tin hữu ích về các xu hướng, kỹ năng, và cơ hội nghề nghiệp trong lĩnh vực đào tạo.
                            </p>
                            <button 
                                    className="text-white fw-bold mt-3 px-4 py-2 w-100 btn_hover_or"
                                    style={{
                                        borderRadius: "8px",
                                        border: "1px solid orange",
                                        background: "var(--Foundation-orange-Normal, #F4841F)",
                                        cursor: "pointer",
                                        outline: "none"
                                    }}
                                >
                                    Ghé thăm blog
                            </button>
                        </div>
                    </div>

                    <div className={`${styles.content_col_img1} col-lg-4 col-md-6`}>
                        <div className={`${styles.detail_content_col_img1} p-2`}>
                            <Image 
                                src={imgBlog1}
                                className='img-fluid'
                            />
                        </div>
                    </div>

                    <div className={`${styles.content_col_img2} col-lg-4 col-md-6`}>
                        <div className={`${styles.detail_content_col_img2} p-2 mt-5`}>
                            <Image 
                                src={imgBlog2}
                                className='img-fluid'
                            />
                        </div>
                    </div>

                    <div className={`${styles.content_col_img} col-lg-4 col-md-4 mt-3`}>
                        <div className={`${styles.detail_content_col_img} p-2 mt-5`}>
                            <Image 
                                src={imgBlog3}
                                className='img-fluid'
                            />
                        </div>
                    </div>

                    <div className={`${styles.content_col_img} col-lg-4 col-md-4 mt-3`}>
                        <div className={`${styles.detail_content_col_img} p-2 mt-5`}>
                            <Image 
                                src={imgBlog5}
                                className='img-fluid'
                            />
                        </div>
                    </div>

                    <div className={`${styles.content_col_img} col-lg-4 col-md-4 mt-3`}>
                        <div className={`${styles.detail_content_col_img} p-2 mt-5`}>
                            <Image 
                                src={imgBlog4}
                                className='img-fluid'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
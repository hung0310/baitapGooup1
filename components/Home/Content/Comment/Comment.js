import React from 'react';
import Image from 'next/image';
import styles from './Comment.module.scss';

import wave from "../../../../public/static/assets/img/wave.svg";
import avatar from "../../../../public/static/assets/img/avatar.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const Comment = () => {

    return (
        <div className={`${styles.ex} container-fluid mb-5 pb-5 px-0`}>
            <Image
                src={wave}
                alt="Wave Image"
                style={{
                    width: "100%",
                    height: "auto",
                }}
            />
            <div
                style={{
                    backgroundColor: "#F1F9FE"
                }}
            >
                <div className={`${styles.ex} container`}>
                    <h1
                        className="fw-bold text-center"
                        style={{
                            color: "#343F52"
                        }}
                    >
                        Học viên nói gì về chúng tôi
                    </h1>

                    <div className="row mt-5">

                        <div className="col-lg-4 col-md-6">
                            <div className="row m-2">
                                <div 
                                    className='shadow rounded p-4'
                                    style={{
                                        backgroundColor: "white"
                                    }}
                                >
                                    <div className="d-flex">
                                        <Image src={avatar} />
                                        <div className="row px-3">
                                            <h5 
                                                className="fw-bold"
                                                style={{
                                                    color: "#343F52"
                                                }}
                                            >Cory Zamora</h5>
                                            <div style={{ display: 'flex', gap: '4px' }}>
                                                {Array.from({ length: 5 }, (_, index) => (
                                                    <FontAwesomeIcon 
                                                        key={index}
                                                        icon={faStar}
                                                        style={{
                                                            width: "15px",
                                                            height: "15px",
                                                            color: "#FCC032"
                                                        }}
                                                        className="mt-1"
                                                    />
                                                ))}
                                                <span
                                                    style={{
                                                        color: "var(--Foundation-light-light-700, #AAB2B3)"
                                                    }}
                                                >5.0</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p
                                        style={{
                                            color: "#60697B"
                                        }}
                                    >
                                        “Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed.”
                                    </p>
                                </div>
                            </div>                        
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="row m-2"
                                style={{
                                    backgroundColor: "white"
                                }}
                            >
                                <div
                                    className='shadow rounded p-4'
                                    style={{
                                        backgroundColor: "white"
                                    }}
                                >
                                    <div className="d-flex">
                                        <Image src={avatar} />
                                        <div className="row px-3">
                                            <h5 
                                                className="fw-bold"
                                                style={{
                                                    color: "#343F52"
                                                }}
                                            >Cory Zamora</h5>
                                            <div style={{ display: 'flex', gap: '2px' }}>
                                                {Array.from({ length: 4 }, (_, index) => (
                                                    <FontAwesomeIcon 
                                                        key={index}
                                                        icon={faStar}
                                                        style={{
                                                            width: "15px",
                                                            height: "15px",
                                                            color: "#FCC032"
                                                        }}
                                                        className="mt-1"
                                                    />
                                                ))}
                                                <div className="half-star-wrapper" style={{ position: 'relative', display: 'inline-block' }}>
                                                    <FontAwesomeIcon 
                                                        icon={faStar}
                                                        style={{
                                                            width: "15px",
                                                            height: "15px",
                                                            color: "#CCC",
                                                            transform: "translateY(-1px)"
                                                        }}
                                                        className="mt-1"
                                                    />
                                                    <FontAwesomeIcon 
                                                        icon={faStar}
                                                        style={{
                                                            width: "15px",
                                                            height: "15px",
                                                            color: "#FCC032",
                                                            position: 'absolute',
                                                            clipPath: 'inset(0 50% 0 0)', 
                                                            top: 0,
                                                            left: 0
                                                        }}
                                                        className="mt-1"
                                                    />
                                                </div>
                                                <span
                                                    style={{
                                                        color: "var(--Foundation-light-light-700, #AAB2B3)"
                                                    }}
                                                >4.9</span>
                                            </div>                                     
                                        </div>
                                    </div>
                                    <p
                                        style={{
                                            color: "#60697B"
                                        }}
                                    >
                                        “Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed.”
                                    </p>
                                </div>

                            </div>                        
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="row m-2">
                                <div 
                                    className='shadow rounded p-4'
                                    style={{
                                        backgroundColor: "white"
                                    }}
                                >
                                    <div className="d-flex">
                                        <Image src={avatar} />
                                        <div className="row px-3">
                                            <h5 
                                                className="fw-bold"
                                                style={{
                                                    color: "#343F52"
                                                }}
                                            >Cory Zamora</h5>
                                            <div style={{ display: 'flex', gap: '4px' }}>
                                                {Array.from({ length: 5 }, (_, index) => (
                                                    <FontAwesomeIcon 
                                                        key={index}
                                                        icon={faStar}
                                                        style={{
                                                            width: "15px",
                                                            height: "15px",
                                                            color: "#FCC032"
                                                        }}
                                                        className="mt-1"
                                                    />
                                                ))}
                                                <span
                                                    style={{
                                                        color: "var(--Foundation-light-light-700, #AAB2B3)"
                                                    }}
                                                >5.0</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p
                                        style={{
                                            color: "#60697B"
                                        }}
                                    >
                                        “Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed.”
                                    </p>
                                </div>
                            </div>                        
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="row m-2">
                                <div 
                                    className='shadow rounded p-4'
                                    style={{
                                        backgroundColor: "white"
                                    }}
                                >
                                    <div className="d-flex">
                                        <Image src={avatar} />
                                        <div className="row px-3">
                                            <h5 
                                                className="fw-bold"
                                                style={{
                                                    color: "#343F52"
                                                }}
                                            >Cory Zamora</h5>
                                            <div style={{ display: 'flex', gap: '4px' }}>
                                                {Array.from({ length: 5 }, (_, index) => (
                                                    <FontAwesomeIcon 
                                                        key={index}
                                                        icon={faStar}
                                                        style={{
                                                            width: "15px",
                                                            height: "15px",
                                                            color: "#FCC032"
                                                        }}
                                                        className="mt-1"
                                                    />
                                                ))}
                                                <span
                                                    style={{
                                                        color: "var(--Foundation-light-light-700, #AAB2B3)"
                                                    }}
                                                >5.0</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p
                                        style={{
                                            color: "#60697B"
                                        }}
                                    >
                                        “Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed.”
                                    </p>
                                </div>
                            </div>                        
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="row m-2">
                                <div 
                                    className='shadow rounded p-4'
                                    style={{
                                        backgroundColor: "white"
                                    }}
                                >
                                    <div className="d-flex">
                                        <Image src={avatar} />
                                        <div className="row px-3">
                                            <h5 
                                                className="fw-bold"
                                                style={{
                                                    color: "#343F52"
                                                }}
                                            >Cory Zamora</h5>
                                            <div style={{ display: 'flex', gap: '4px' }}>
                                                {Array.from({ length: 5 }, (_, index) => (
                                                    <FontAwesomeIcon 
                                                        key={index}
                                                        icon={faStar}
                                                        style={{
                                                            width: "15px",
                                                            height: "15px",
                                                            color: "#FCC032"
                                                        }}
                                                        className="mt-1"
                                                    />
                                                ))}
                                                <span
                                                    style={{
                                                        color: "var(--Foundation-light-light-700, #AAB2B3)"
                                                    }}
                                                >5.0</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p
                                        style={{
                                            color: "#60697B"
                                        }}
                                    >
                                        “Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed.”
                                    </p>
                                </div>
                            </div>                        
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="row m-2">
                                <div 
                                    className='shadow rounded p-4'
                                    style={{
                                        backgroundColor: "white"
                                    }}
                                >
                                    <div className="d-flex">
                                        <Image src={avatar} />
                                        <div className="row px-3">
                                            <h5 
                                                className="fw-bold"
                                                style={{
                                                    color: "#343F52"
                                                }}
                                            >Cory Zamora</h5>
                                            <div style={{ display: 'flex', gap: '4px' }}>
                                                {Array.from({ length: 5 }, (_, index) => (
                                                    <FontAwesomeIcon 
                                                        key={index}
                                                        icon={faStar}
                                                        style={{
                                                            width: "15px",
                                                            height: "15px",
                                                            color: "#FCC032"
                                                        }}
                                                        className="mt-1"
                                                    />
                                                ))}
                                                <span
                                                    style={{
                                                        color: "var(--Foundation-light-light-700, #AAB2B3)"
                                                    }}
                                                >5.0</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p
                                        style={{
                                            color: "#60697B"
                                        }}
                                    >
                                        “Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed.”
                                    </p>
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Comment;
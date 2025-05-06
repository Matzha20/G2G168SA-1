import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import circle_img from '@/assets/img/icons/circle02.svg';
import team_img from '@/assets/img/others/team_vs02.png';

const TeamInfoArea = () => {
  return (
    <section className="team__info-area">
     <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="team__info-wrap">
                    <div className="team__info-discord">
                        <div className="about__content-circle">
                            <Image src={circle_img} alt="img" width={104} height={104} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                                <text>
                                    <textPath href="#textPath">G2G168SA ARE THE BEST</textPath>
                                </text>
                            </svg>
                            <i className="flaticon-star"></i>
                        </div>
                        <div className="team__info-discord-info">
                            <span className="sub">เข้าเล่น</span>
                            <h5 className="title"><Link href="https://g2g168sa.app/" target="_blank">G2G168SA</Link></h5>
                        </div>
                    </div>
                    <div className="team__info-list">
                        <ul className="list-wrap">
                            <li>
                                <div className="team__info-item">
                                    <div className="team__info-icon">
                                        <Image src={team_img} alt="img" width={67} height={75} style={{height:'auto',width:'auto'}} />
                                    </div>
                                    <div className="team__info-content">
                                        <span className="sub">เกมส์มากถึง</span>
                                        <h5 className="title">200 เกมส์</h5>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="team__info-item">
                                    <div className="team__info-icon">
                                        <i className="flaticon-swords-1"></i>
                                    </div>
                                    <div className="team__info-content">
                                        <span className="sub">อัตราชนะ</span>
                                        <h5 className="title">สูงถึง98%</h5>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="team__info-item">
                                    <div className="team__info-icon">
                                        <i className="flaticon-diamond"></i>
                                    </div>
                                    <div className="team__info-content">
                                        <span className="sub">ยอดรวมกว่า</span>
                                        <h5 className="title">2ล้านบาท</h5>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
  );
};

export default TeamInfoArea;
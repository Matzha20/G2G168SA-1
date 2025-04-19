'use client'
import React,{useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/img/logo/logo.png';

const FooterTwo = () => {
  useEffect(() => {
    if (!!window.IntersectionObserver) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active-footer");
            observer.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: "0px 0px -100px 0px"
      });

      document.querySelectorAll('.has-footer-animation').forEach(block => {
        observer.observe(block);
      });
    } else {
      document.querySelectorAll('.has-footer-animation').forEach(block => {
        block.classList.remove('has-footer-animation');
      });
    }
  }, []);
  return (
    <footer className="footer-style-two has-footer-animation">
        <div className="footer__country">
            <div className="container custom-container">
                <div className="row">
                    <div className="col-6">
                        <div className="footer__country-name">
                            {/* <h2 className="text">G2G</h2> */}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="footer__country-name text-center text-sm-end">
                            {/* <h2 className="text">168SA</h2> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__two-widgets">
            <div className="container custom-container">
                <div className="row">
                    <div className="col-md-4 col-sm-7 order-1 order-md-0">
                        <div className="footer-el-widget">
                            <h4 className="title">ติดต่อสอบถาม</h4>
                            <ul className="list-wrap">
                                <li><Link href="https://t.me/+DJ13ETSu-PU3ODll" target='blank'>TELEGRAM</Link></li>
                                <li><Link href="https://lin.ee/EJ1uCnB" target='blank'>LINE : @G2S168</Link></li>
                                <li>ติดปัหญาหรือต้องการคำแนะนำ <br/>สามารถติดต่อที่ช่องทางด้านบนได้ 24 ชม.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-5 order-0 order-md-2">
                        <div className="footer-el-widget text-start text-md-center widget_nav_menu">
                            <div className="footer-el-logo mb-35">
                                <Link href="/">
                                  <Image src={logo} alt="Mykd" style={{height:'auto'}}/>
                                </Link>
                            </div>
                            <div className="footer-el-menu">
                                <ul className="list-wrap">
                                    <li><Link href="/">หน้าแรก</Link></li>
                                    <li><Link href="/about">เกี่ยวกับ</Link></li>
                                    <li><Link href="/tournament">โปรโมชั่น</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-7 order-3">
                        <div className="footer-el-widget text-start text-md-end">
                            <h4 className="title">ช่องทางการเข้าเล่น</h4>
                            <ul className="list-wrap">
                                <li><Link href="https://g2g168sa.bio/login">เข้าสู่งระบบ</Link></li>
                                <li><Link href="https://www.g2g168sa.bio/">สมัครสมาชิก</Link></li>
                                <li>ขอให้ทุกท่านสนุกและโชคดี<br/>ไปกับทุกการเดิมพัน ขอบคุณที่ไว้ใจเรา</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright__wrap -style-two">
            <div className="container custom-container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="copyright__text text-center text-lg-start">
                            <p>Copyright © {new Date().getFullYear()} - All Rights Reserved By <span>G2G168SA</span></p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="copyright__menu">
                            <ul className="list-wrap d-flex flex-wrap justify-content-center justify-content-lg-end">
                                {/* <li><Link href="/contact">ติดต่อสอบถาม</Link></li> */}
                                {/* <li><Link href="/contact">สมัครสมาชิก</Link></li> */}
                                {/* <li><Link href="/contact">Privacy Policy</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default FooterTwo;
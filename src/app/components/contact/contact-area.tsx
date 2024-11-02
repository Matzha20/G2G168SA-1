import React from "react";
import Link from "next/link";
import ContactForm from "../forms/contact-form";

const ContactArea = () => {
  return (
    <section className="contact-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="contact__content">
              <h2 className="overlay-title">
                <span>G2G168SA</span>
              </h2>
              <h2 className="title">ช่องทางการติดต่อ</h2>
              <p>
              หากแอดมินไม่ตอบกลับภายใน 10 นาที โปรดติดต่อเราผ่านช่องทางสำรองด้านล่างนี้
              </p>
              <div className="footer-el-widget">
                <h4 className="title">ข้อมูลการติดต่อ</h4>
                <ul className="list-wrap">
                  <li>
                    <Link href="https://lin.ee/PmIuhSe" target="blank">LINE : @537MBNEH</Link>
                  </li>
                  <li>
                    <Link href="https://t.me/+DJ13ETSu-PU3ODll" target="blank">TELEGRAM</Link>
                  </li>
                  <li>แอดมินพร้อมดูแลตลอด 24 ชั่วโมง</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-10">
            <div className="contact__form-wrap">
              {/* form start */}
              {/* <ContactForm /> */}
              {/* form end */}
              <p className="ajax-response"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;

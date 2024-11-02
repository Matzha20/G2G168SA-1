import React from 'react';
import Image from 'next/image';
import TextAnimation from '../common/text-animation';
import AboutDots from '../svg/about-dots';
import Circle from '../svg/circle';
import circle_img from '@/assets/img/icons/circle.svg';
import mask_img from '@/assets/img/others/mask_img01.jpg';
import mask_img_2 from '@/assets/img/others/mask_img02.jpg';

const AboutAreaThree = () => {
  return (
    <section className="about__area-three section-pt-130 section-pb-130">
    <div className="container">
        <div className="row">
            <div className="col-xl-4">
                <div className="about__title-wrap">
                    <h2 className="title">
                        {/* <i>WE ARE</i> */}
                        <span>G2G168SA</span>
                        <i></i>
                        <i>เว็บตรง<b>อันดับ1</b></i>
                    </h2>
                    <div className="about__content-circle">
                        <Image src={circle_img} alt="img"/>
                        <Circle/>
                    </div>
                </div>
            </div>
            <div className="col-xl-8">
                <div className="about__three-images">
                    <Image src={mask_img} alt="img" className="left"/>
                    <Image src={mask_img_2} alt="img" className="right"/>
                    <div className="about__dots">
                        <AboutDots/>
                    </div>
                </div>
                <div className="about__three-paragraph">
                  <TextAnimation style_2={true} title='เว็บสล็อตออนไลน์ที่กำลังมาแรงและเป็นที่พูดถึงในปี 2024 ที่ใครๆก็ต่างตามหา วันนี้ G2G168SA สล็อตเว็บตรง ไม่ผ่านเอเย่นต์ พร้อมให้บริการทุกท่านแล้ว ให้บริการโดยทีมงานมืออาชีพ มากกว่า 20 คน ต่อกะ มั่นใจได้เลยว่า การให้บริการ สะดวก รวดเร็ว ทันใจ ไม่มีสะดุด ลื่นไหลทุกช่วงเวลาแน่นอน ให้บริการตลอด 24 ชั่วโมง แบบไม่มีวันหยุด มีเกมเดิมพันให้เลือกเล่นมากมาย ไม่ว่าจะเป็น สล็อต, คาสิโน, ยิงปลา หรือ กีฬา เรียกได้ว่ามีครบจบในเว็บเดียว ยูสเซอร์เดียวเล่นได้ทุกอย่าง มีกิจกรรมแจกเครดิตฟรี ตลอดทั้งวัน ดีขนาดนี้ ไม่เล่นไม่ได้แล้ว' />
                </div>
            </div>
        </div>
    </div>
    <h2 className="big-title">G2G168SA</h2>
</section>
  );
};

export default AboutAreaThree;
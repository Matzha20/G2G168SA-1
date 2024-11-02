'use client'
import React,{useState} from 'react';
import Image from 'next/image';
import service_img_1 from '@/assets/img/others/services_img01.jpg';
import service_img_2 from '@/assets/img/others/services_img02.jpg';
import service_img_3 from '@/assets/img/others/services_img03.jpg';
import service_img_4 from '@/assets/img/others/services_img04.jpg';
import Link from 'next/link';

// service images
const service_images = [service_img_1,service_img_2,service_img_3,service_img_4];
const service_items:{
  id: number;
  icon: string;
  title: string;
  desc: string;
}[] = [
  {
    id:1,
    icon:'flaticon-add-user',
    title:'การสมัครสมาชิก',
    desc:'เป็นการสมัครสมาชิกด้วยระบบอัตโนมัติ ผ่านหน้าเว็บไซต์  ไม่ต้องเสียเวลา ทักส่งข้อมูลให้แอดมินในไลน์ เหมือนเว็บยุคเก่า สะดวก รวดเร็ว ข้อมูลถูกเก็บเป็นความลับและปลอดภัย'
  },
  {
    id:2,
    icon:'flaticon-diamond',
    title:'การรับโปรโมชัน',
    desc:'เป็นระบบอัตโนมัติทั้งหมด โดยสามารถเลือกรับเองได้เลย มีกติกาของโปรโมชันที่ชัดเจน เทิร์นน้อย ยุติธรรมกับผู้เล่นมากที่สุด และยังมีกิจกรรมให้ร่วมสนุกอีกมากมาย'
  },
  {
    id:3,
    icon:'flaticon-wallet',
    title:'การฝาก ถอนเงิน',
    desc:'เป็นระบบออโต้ทั้งหมด 100% ไม่มีดีเลย์หรือช้า ถอนเงินก็เข้าบัญชีธนาคารของท่านทันที ยกเว้นธนาคารจะปิดปรับปรุง แต่เวลาที่ธนาคารปิดปรับปรุง ก็มีแอดมินคอยปรับเครดิตให้ ไม่ต้องรอนานแน่นอน'
  },
  {
    id:4,
    icon:'flaticon-checked',
    title:'บริการดีเยี่ยม',
    desc:'มีแอดมินคอยดูแลตลอด 24 ชั่วโมง ที่จะคอยคอยให้คำแนะนำ แก้ปัญหาต่างๆ ที่เกิดขึ้นระหว่างการเข้าใช้บริการ รวมไปถึงยังเก็บข้อมูลของทุกท่านที่สามารถรับความปลอยภัยถึง 100% '
  }
];

const ServicesArea = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleMouseOver = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseOut = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <section className="services-area services__bg-color section-pt-120 section-pb-120">
    <div className="container">
        <div className="row align-items-end align-items-xl-start">
            <div className="col-lg-6">
                <div className="section__title text-start mb-65">
                    <span className="sub-title tg__animate-text">บริการระดับพรีเมี่ยม</span>
                    <h3 className="title">สล็อต คาสิโน บาคร่า ครบ จบ ในที่เดียว</h3>
                </div>
                <div className="services__wrapper">
                  {service_items.map((item,i) => (
                    <div key={item.id} className="services__item" onMouseOver={() => handleMouseOver(i)} onMouseOut={()=> handleMouseOut(i)}>
                        <div className="services__icon">
                            <i className={item.icon}></i>
                        </div>
                        <div className="services__content">
                            <h4 className="title"><Link href="https://g2g168sa.life/">{item.title}</Link></h4>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                  ))}
                </div>
            </div>
            <div className="col-lg-6">
                <div className="services__images">
                  {service_images.map((s,i) => (
                    <div key={i} className={`services__images-item ${activeIndex === i ? "active" : ""}`}>
                        <Image src={s} alt="img" style={{width:'100%',height:'100%'}} />
                        <Link href="https://g2g168sa.life/" className="services__link">
                            <i className="flaticon-next"></i>
                        </Link>
                    </div>
                  ))}
                </div>
            </div>
        </div>
    </div>
  </section>
  );
};

export default ServicesArea;
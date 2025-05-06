import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/img/logo/logo.png';
import social_data from '@/data/social-data';

// prop type 
type IProps = {
  isOffCanvasOpen:boolean;
  setIsOffCanvasOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const OffCanvas = ({isOffCanvasOpen,setIsOffCanvasOpen}:IProps) => {
    // handle close search
  const handleCloseOffCanvas = (audioPath: string) => {
    setIsOffCanvasOpen(false)
    const audio = new Audio(audioPath);
    audio.play();
  };
  return (
    <div className={`${isOffCanvasOpen?'offCanvas__menu-visible':''}`}>
     <div className="offCanvas__wrap">
          <div className="offCanvas__body">
              <div className="offCanvas__top">
                  <div className="offCanvas__logo logo">
                      <Link href="/">
                        <Image src={logo} alt="Logo" width={177} height={40} />
                      </Link>
                  </div>
                  <div className="offCanvas__toggle" onClick={() => handleCloseOffCanvas('/assets/audio/remove.wav')}>
                      <i className="flaticon-swords-in-cross-arrangement"></i>
                  </div>
              </div>
              <div className="offCanvas__content">
                  <h2 className="title">แหล่งความบันเทิงมาแรงที่สุด<span>ในไทยตอนนี้</span></h2>
                  <div className="offCanvas__contact">
                      <h4 className="small-title">ติดต่อสอบถาม</h4>
                      <ul className="offCanvas__contact-list list-wrap">
                          <li><Link href="https://t.me/+DJ13ETSu-PU3ODll" target="_blank">กลุ่มนำเล่น TELEGRAM</Link></li>
                          <li><Link href="https://lin.ee/pcqmqzU" target="_blank">LINE: @g2g168sa1</Link></li>
                          <li>ติดตามข่าวสาร และแจ้งปัญหาต่างๆได้ที่นี้</li>
                      </ul>
                  </div>
                  {/* <div className="offCanvas__newsletter">
                      <h4 className="small-title">Subscribe</h4>
                      <form action="#" className="offCanvas__newsletter-form">
                          <input type="email" placeholder="Get News & Updates"/>
                          <button type="submit"><i className="flaticon-send"></i></button>
                      </form>
                      <p>Subscribe dolor sitamet, consectetur adiping eli. Duis esollici tudin augue.</p>
                  </div> */}
                  <ul className="offCanvas__social list-wrap">
                    {social_data.map((s,i) => (
                      <li key={i}><Link href={s.link} target='_blank'><i className={s.icon}></i></Link></li>
                    ))}
                  </ul>
              </div>
              <div className="offCanvas__copyright">
                  <p>Copyright © {new Date().getFullYear()} - By <span>G2G168SA</span></p>
              </div>
          </div>
      </div>
      <div onClick={()=> setIsOffCanvasOpen(false)} className="offCanvas__overlay"></div> 
    </div>
  );
};

export default OffCanvas;
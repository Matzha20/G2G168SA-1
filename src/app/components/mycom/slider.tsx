'use client'
import Link from 'next/link';
import React,{useState} from 'react';
import Image from 'next/image';
import pro_1 from '@/assets/img/brand/P01.png';
import pro_2 from '@/assets/img/brand/P02.png';
import pro_3 from '@/assets/img/brand/P03.png';
import pro_4 from '@/assets/img/brand/P04.png';
import pro_5 from '@/assets/img/brand/P05.png';
import pro_6 from '@/assets/img/brand/P06.png';
import pro_7 from '@/assets/img/brand/P07.png';
import pro_8 from '@/assets/img/brand/P08.png';
import pro_9 from '@/assets/img/brand/P09.png';
import pro_10 from '@/assets/img/brand/P10.png';

const Slider = () => {
    return (
<div id="carouselExampleSlidesOnly" className="carousel slide border border-5 border-warning" data-bs-ride="carousel">
  <div className="carousel-inner">

    <div className="carousel-item active">
       <Image src={pro_1} alt="brand" style={{width:'auto',height:'auto'}} />
    </div>
    <div className="carousel-item">
       <Image src={pro_2} alt="brand" style={{width:'auto',height:'auto'}} />
    </div>
    <div className="carousel-item">
       <Image src={pro_3} alt="brand" style={{width:'auto',height:'auto'}} />
    </div>
    <div className="carousel-item">
       <Image src={pro_4} alt="brand" style={{width:'auto',height:'auto'}} />
    </div>
    <div className="carousel-item">
       <Image src={pro_5} alt="brand" style={{width:'auto',height:'auto'}} />
    </div>
    <div className="carousel-item">
       <Image src={pro_6} alt="brand" style={{width:'auto',height:'auto'}} />
    </div>
    <div className="carousel-item">
       <Image src={pro_7} alt="brand" style={{width:'auto',height:'auto'}} />
    </div>
    <div className="carousel-item">
       <Image src={pro_8} alt="brand" style={{width:'auto',height:'auto'}} />
    </div>
    <div className="carousel-item">
       <Image src={pro_9} alt="brand" style={{width:'auto',height:'auto'}} />
    </div>
    <div className="carousel-item">
       <Image src={pro_10} alt="brand" style={{width:'auto',height:'auto'}} />
    </div>
  </div>
</div>
)}
export default Slider;
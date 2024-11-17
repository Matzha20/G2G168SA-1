<<<<<<< HEAD
import React from "react";
import Link from "next/link";
import bg from '@/assets/img/bg/breadcrumb_bg01.jpg';

// props type 
type IProp = {
  title:string;
  subtitle:string;
}

const BreadcrumbAreaTwo = ({title,subtitle}:IProp) => {
  return (
    <section
      className="breadcrumb-area breadcrumb__hide-img"
      data-background="assets/img/bg/breadcrumb_bg01.jpg"
      style={{backgroundImage:`url(${bg.src})`}}
    >
      <div className="container">
        <div className="breadcrumb__wrapper">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb__content">
                <h2 className="title">{title}</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">หน้าแรก</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {subtitle}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbAreaTwo;
=======
import React from "react";
import Link from "next/link";
import bg from '@/assets/img/bg/breadcrumb_bg01.jpg';

// props type 
type IProp = {
  title:string;
  subtitle:string;
}

const BreadcrumbAreaTwo = ({title,subtitle}:IProp) => {
  return (
    <section
      className="breadcrumb-area breadcrumb__hide-img"
      data-background="assets/img/bg/breadcrumb_bg01.jpg"
      style={{backgroundImage:`url(${bg.src})`}}
    >
      <div className="container">
        <div className="breadcrumb__wrapper">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb__content">
                <h2 className="title">{title}</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">หน้าแรก</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {subtitle}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbAreaTwo;
>>>>>>> 715e91175c0d1396abf71b0361daee92c4cd6893

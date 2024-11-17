// type
type IMenuDataType = {
  id: number;
  title: string;
  link: string;
  sub_menu?: {
      title: string;
      link: string;
  }[];
}

const menu_data:IMenuDataType[] = [
  {
    id:1,
    title:'หน้าแรก',
    link:'/',
    sub_menu:[
      {title:'หน้าแรก',link:'/'},
      {title:'เข้าสู่เว็บไซต์',link:'https://g2g168sa.life/'},
    ]
  },
  {
    id:2,
    title:'เกี่ยวกับ',
    link:'/about',
  },
  {
    id:3,
    title:'โปรโมชั่น',
    link:'/blog',
    // sub_menu:[
    //   // {title:'โปรโมชั่น',link:'/blog'},
    //   // {title:'กิจกรรม',link:'/blog2'},
    // ]
  },
  // {
  //   id:4,
  //   title:'PAGES',
  //   link:'#',
  //   sub_menu:[
  //     {title:'Gaming Shop',link:'/shop'},
  //     {title:'Shop Details',link:'/shop-details'},
  //     {title:'Our Services',link:'/services'},
  //     {title:'Services Details',link:'/service-details'},
  //     {title:'Player Details',link:'/team-details'},
  //   ]
  // },
  // {
  //   id:5,
  //   title:'บทความ',
  //   link:'/blog-details'
  //   // sub_menu:[
  //   //   {title:'บทความ',link:'/'},
  //   //   // {title:'Blog Details',link:'/blog-details'}
  //   // ]
  // },
  {
    id:6,
    title:'ติดต่อเรา',
    link:'/contact',
  },
]

export default menu_data;
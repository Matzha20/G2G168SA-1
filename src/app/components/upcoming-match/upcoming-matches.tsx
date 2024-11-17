import React from "react";
import Link from "next/link";
import match_bg from "@/assets/img/bg/match_bg.jpg";
import Image, { StaticImageData } from "next/image";
import match_icon from "@/assets/img/icons/match.svg";
import SvgIconCom from "../common/svg-icon-anim";
import team_1 from "@/assets/img/others/team_vs01.png";
import team_2 from "@/assets/img/others/team_vs02.png";
import team_3 from "@/assets/img/others/team_vs03.png";
import team_4 from "@/assets/img/others/team_vs04.png";
import team_5 from "@/assets/img/others/team_vs05.png";
import team_6 from "@/assets/img/others/team_vs06.png";
import TextAnimation from "../common/text-animation";

// match type
type IMatch = {
  team_1: StaticImageData;
  game_name_1: string;
  game_name_2: string;
  time: string;
  match_name: string;
  date: string;
  team_2: StaticImageData;
  match_name_2: string;
  delay: string;
};
// match item
function UpcomingMatchItem({
  team_1,
  team_2,
  game_name_1,
  game_name_2,
  time,
  match_name,
  date,
  match_name_2,
  delay,
}: IMatch) {
  const imgStyle = {height:'auto',width:'100%'}
  return (
    <div
      className="upcoming-match__item tg-svg wow fadeInUp"
      data-wow-delay={`${delay}s`}
    >
      <SvgIconCom icon={match_icon} id="svg-7" />
      <div className="upcoming-match__position">
        <div className="upcoming-match__team team-left">
          <Link href="https://g2g168sa.life/">
            <Image src={team_1} alt="img" style={imgStyle} />
          </Link>
        </div>
        <div className="upcoming-match__content">
          <div className="team--info info-left">
            <span className="game-name">{game_name_1}</span>
            <h3 className="name">
              <Link href="https://g2g168sa.life/">{match_name}</Link>
            </h3>
          </div>
          <div className="upcoming-match__time">
            <h2 className="time">{time}</h2>
          </div>
          <div className="team--info info-right">
            <span className="game-name">{game_name_2}</span>
            <h3 className="name">
              <Link href="https://g2g168sa.life/">{match_name_2}</Link>
            </h3>
          </div>
        </div>
        <div className="upcoming-match__team team-right">
          <Link href="https://g2g168sa.life/">
            <Image src={team_2} alt="img" style={imgStyle} />
          </Link>
        </div>
      </div>
      <div className="upcoming-match__date">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="287"
          height="24"
          viewBox="0 0 287 24"
        >
          <path
            id="bottom-svg1"
            d="M1104,3760l-20,24H837l-20-24"
            transform="translate(-817 -3760)"
          />
        </svg>
        <span>{date}</span>
      </div>
    </div>
  );
}

const UpcomingMatches = () => {
  return (
    <section
      className="upcoming-match__area section-pt-120 section-pb-85"
      style={{ backgroundImage: `url(${match_bg.src})` }}
      data-background="assets/img/bg/match_bg.jpg"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="section__title text-center mb-60">
              <TextAnimation title="ตารางการแข่งขัน" />
              <h3 className="title">BEST MATCH TO DAY</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="upcoming-match__lists">
              <UpcomingMatchItem
                date="เสาร์ที่ 23 พฤศจิกายน 2024"
                team_1={team_1}
                team_2={team_2}
                time="22:00"
                game_name_1="อันดับที่ 16"
                match_name="everton"
                match_name_2="brenford"
                game_name_2="อันดับที่ 11"
                delay=".2"
              />

              <UpcomingMatchItem
                date="อาทิตย์ที่ 24 พฤศจิกายน 2024"
                team_1={team_3}
                team_2={team_4}
                time="00:30"
                game_name_1="อันดับที่ 2"
                match_name="man city"
                match_name_2="tottenham"
                game_name_2="อันดับที่ 10"
                delay=".4"
              />

              <UpcomingMatchItem
                date="อังคารที่ 26 พฤศจิกายน 2024"
                team_1={team_5}
                team_2={team_6}
                time="03:00"
                game_name_1="อันดับที่ 8"
                match_name="newcasetle"
                match_name_2="west ham"
                game_name_2="อันดับที่ 14"
                delay=".6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingMatches;

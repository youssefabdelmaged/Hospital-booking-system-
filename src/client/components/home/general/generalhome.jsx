/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// generalhome1
import React from "react";

import "./generalhome.css";

import Priceingplan from "./priceingplan";
import Homebanner from "./homebanner";
import Speacialities from "./speacialities";
import Worksection from "./worksection";
import Artical from "./artical";
import Testimonial from "./testimonial";
import Parentssection from "./parentssection";
import Appsection from "./appsection";
import Doctor from "./doctor";
import Faq from "./faq";
import Header from "../../header";
// import Footer from "../../footer";
import Footer from '../cardiology/footer'
import ProgressCircle from "../paediatric/scrolltotop";
import Clinicsection from "../../../components/home/homefourcomponets/clinicsection";

import Doctersection from "../homefourcomponets/doctersection";
import Bookdoctor from "../homefourcomponets/bookdoctor";
import Stepstofollow from "../../home/cardiology/stepstofollow";
import Blogsection from "../browsebySpecialities/Home7/blogsection";
import FeedBackHome9 from "../FertilityHome/FeedBackHome9";
import { useLocation } from "react-router-dom";
function Generalhome(props) {
  const location = useLocation()
  let {pathname} =location;

  if (pathname === "/index") {
    require("../../../assets/css/feather.css");
  }
  // useEffect(() => {
  //   window.location.reload();
  // }, []);
  return (
    <>
      <>
        <div className="main-wrapper ">
          <Header {...props} />
          {/* Home Banner */}
          <Homebanner />
          {/* /Home Banner */}
          {/* Specialities Section */}
          {/* <Speacialities /> */}
          <Clinicsection />
          {/* /Specialities Section */}
          {/* Doctors Section */}
          {/* <Doctor /> */}
          <Doctersection />
          <Bookdoctor />
          {/* /Doctors Section */}
          {/* Pricing */}
          <Priceingplan />
          {/* /Pricing */}
          {/* Work Section */}
          {/* <Worksection /> */}
          {/* /Work Section */}
          {/* Articles Section */}
          {/* <Artical /> */}
          <Blogsection />

          {/* /Articles Section */}
          {/* steps to follow */}
          <Stepstofollow />
          {/* FAQ Section */}
          <Faq />
          {/* /FAQ Section */}
          {/* App Section */}
          <Appsection />
          {/* /App Section */}
          {/* Testimonial Section */}
          {/* <Testimonial /> */}
          <FeedBackHome9 />

          {/* /Testimonial Section */}
          {/* Partners Section */}
          {/* <Parentssection /> */}
          {/* /Partners Section */}
          {/* <Footer {...props} /> */}
          <Footer />

          {/* Cursor */}
          <div className="mouse-cursor cursor-outer" />
          <div className="mouse-cursor cursor-inner" />
          {/* /Cursor */}
          <ProgressCircle />
        </div>
      </>
    </>
  );
}

export default Generalhome;

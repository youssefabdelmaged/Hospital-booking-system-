import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Veterinary_blog_01,
  Veterinary_blog_02,
  Veterinary_blog_03,
  Veterinary_blog_04,
  doctor_04,
  doctor_06,
  doctor_07,
} from "../../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import OwlCarousel from "react-owl-carousel";
import BlogCard from "./BlogCard";

const CardData = [
  {
    articleImage: Veterinary_blog_01,
    doctorName: "Dr. Pamila Certis",
    image: doctor_04,
    articleTitle: "Doccure – Making your clinic painless visit",
    date: "13 Aug, 2023",
    replynum: "68",
    viewnum: " 1.5k",
    articleTag1: "Disease",
    articleTag2: "Appointment",
    articleTag3: "Health",
    disc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore ad minim veniam, quis magna aliqua",
  },
  {
    articleImage: Veterinary_blog_02,
    doctorName: "Dr. Pamila Certis",
    image: doctor_06,
    articleTitle: "Shefaa  – Making your clinic painless visit?",
    date: "13 Aug, 2023",
    replynum: "68",
    viewnum: " 1.5k",
    articleTag1: "Disease",
    articleTag2: "Appointment",
    articleTag3: "Health",
    disc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore ad minim veniam, quis magna aliqua",
  },
  {
    articleImage: Veterinary_blog_03,
    doctorName: "Dr. Pamila Certis",
    image: doctor_07,
    articleTitle: "Shefaa - Making your clinic painless visit?",
    date: "13 Aug, 2023",
    replynum: "68",
    viewnum: " 1.5k",
    articleTag1: "Disease",
    articleTag2: "Appointment",
    articleTag3: "Health",
    disc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore ad minim veniam, quis magna aliqua",
  },
  {
    articleImage: Veterinary_blog_04,
    doctorName: "Dr. Pamila Certis",
    image: doctor_07,
    articleTitle: "Shefaa - Making your clinic painless visit?",
    date: "13 Aug, 2023",
    replynum: "68",
    viewnum: " 1.5k",
    articleTag1: "Disease",
    articleTag2: "Appointment",
    articleTag3: "Health",
    disc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore ad minim veniam, quis magna aliqua",
  },
];

const Blogsection = () => {
  //Aos

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const options = {
    loop: true,
    margin: 24,
    dots: false,
    nav: true,
    smartSpeed: 2000,
    navContainer: ".slide-nav-15",
    navText: [
      '<i class="fa-solid fa-caret-left "></i>',
      '<i class="fa-solid fa-caret-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      575: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1300: {
        items: 3,
      },
    },
  };
  return (
    <>
      {/* blog section */}
      <div className="blog-section-fourteen">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header-fourteen service-inner-fourteen">
                <div className="service-inner-fourteen"></div>
                <h2>Our Recent Articles</h2>
              </div>
            </div>
          </div>
          <div
            className="blog-slider-fourteen owl-theme aos"
            data-aos="fade-up"
          >
            <OwlCarousel
              className="blog-slider-fourteen owl-theme aos"
              data-aos="fade-up"
              {...options}
            >
              {CardData.map((item,i)=>(
                <BlogCard 
                key={i} 
                articleImage ={item.articleImage}
                doctorName={item.doctorName}
                image={item.image}
                articleTitle={item.articleTitle}
                date={item.date}
                replynum={item.replynum}
                viewnum={item.viewnum}
                articleTag1={item.articleTag1}
                articleTag2={item.articleTag2}
                articleTag3={item.articleTag3}
                disc={item.disc}
                />
              ))}
            </OwlCarousel>
          </div>
          <div className="owl-nav slide-nav-15 text-end nav-control" />
          <div
            className="blog-btn-sec text-center aos aos-init aos-animate"
            data-aos="fade-up"
          >
            <Link to="/blog/blog-grid" className="btn btn-primary btn-view">
              Read More Articles
            </Link>
          </div>
        </div>
      </div>
      {/* /blog section */}
    </>
  );
};
export default Blogsection;

import React from "react";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Link } from "react-router-dom";

const BlogCard = ({
  articleImage,
  doctorName,
  image,
  articleTitle,
  date,
  replynum,
  viewnum,
  articleTag1,
  articleTag2,
  articleTag3,
  disc,
}) => {
  return (
    <div className="card blog-inner-fourt-all">
      <div className="card-body blog-inner-fourt-main">
        <div className="blog-inner-right-fourt">
          <Link to="/blog/blog-details">
            <div className="blog-inner-right-img">
              <img src={articleImage} alt="image" className="img-fluid " />
              <div className="blog-inner-top-content">
                <img src={image} alt="" className="me-2" />
                <span>{doctorName}</span>
              </div>
            </div>
          </Link>
          <Link to="/blog/blog-details" className="blog-inner-right-fourt-care">
            {articleTitle}
          </Link>
          <ul className="articles-list nav blog-articles-list">
            <li>
              <i>
                <FeatherIcon icon={"calendar"} />
              </i>{" "}
              {date}
            </li>
            <li>
              <i>
                <FeatherIcon icon={"message-square"} />
              </i>{" "}
              {replynum}
            </li>
            <li>
              <i>
                <FeatherIcon icon={"eye"} />
              </i>{" "}
              {viewnum}
            </li>
          </ul>
          <ul className="articles-list nav blog-articles-list-two">
            <li>{articleTag1}</li>
            <li>{articleTag2}</li>
            <li>{articleTag3}</li>
          </ul>
          <p>{disc}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

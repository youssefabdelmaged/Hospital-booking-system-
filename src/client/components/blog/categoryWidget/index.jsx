import React from "react";
import { Link } from "react-router-dom";

const CategoryWidget = () => {
  return (
    <div className="card category-widget">
      <div className="card-header">
        <h4 className="card-title">Blog Categories</h4>
      </div>
      <div className="card-body">
        <ul className="categories">
          <li>
            <Link to="#Cardiology">
              Cardiology <span>(62)</span>
            </Link>
          </li>
          <li>
            <Link to="#HealthCare">
              Health Care <span>(27)</span>
            </Link>
          </li>
          <li>
            <Link to="#Nutritions">
              Nutritions <span>(41)</span>
            </Link>
          </li>
          <li>
            <Link to="#HealthTips">
              Health Tips <span>(16)</span>
            </Link>
          </li>
          <li>
            <Link to="#MedicalResearch">
              Medical Research <span>(55)</span>
            </Link>
          </li>
          <li>
            <Link to="#HealthTreatment">
              Health Treatment <span>(07)</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryWidget;

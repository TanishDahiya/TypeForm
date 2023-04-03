import React from "react";
import BlogCards from "./BlogCards";
import SuggestionSection from "./SuggestionSection";
import "../utils/css/body.css";

const Body = () => {
  return (
    <div className="bodySection">
      <div className="flex">
        <div className="bodyCard ml-24">
          <BlogCards />
        </div>
        <div className="bodySuggestion">
          <SuggestionSection />
        </div>
      </div>
    </div>
  );
};

export default Body;

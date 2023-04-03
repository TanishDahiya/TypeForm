import React from "react";
import "../utils/css/body.css";
import TopPicksCard from "../components/TopPicksCard";

const SuggestionSection = () => {
  return (
    <div className="suggestionParent p-3">
      <h1 className="text-lg text-left font-bold">Top Picks</h1>
      <TopPicksCard />
      <TopPicksCard />
      <TopPicksCard />
      <TopPicksCard />
      <TopPicksCard />
      <TopPicksCard />
    </div>
  );
};

export default SuggestionSection;

import { Avatar } from "@chakra-ui/react";
import React from "react";

const TopPicksCard = () => {
  return (
    <div className="mt-2">
      <div className="flex">
        <Avatar className="" size="xs" src="https://bit.ly/broken-link" />
        <h4 className="px-2 ">Tanish Dahiya</h4>
      </div>
      <div>
        <h3 className=" py-2 font-bold">
          Advantages of functional based components
        </h3>
      </div>
    </div>
  );
};

export default TopPicksCard;

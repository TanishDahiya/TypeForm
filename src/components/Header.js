import React from "react";
import { Avatar, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import "../utils/css/header.css";

const Header = () => {
  return (
    <>
      <div className="header flex justify-between items-center h-14 px-6">
        <div className="logo">
          <h1>Tanish Dahiya</h1>
        </div>
        <div className="inputHeaderParent">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              borderRadius="20px"
              bg="rgba(250, 250, 250, 1)"
              type="text"
              placeholder="Search Blogs"
            />
          </InputGroup>
        </div>
        <div>
          <ul className="flex ">
            <li>Login</li>
            <li className="ml-2">Signup</li>
          </ul>
        </div>
        <div className="avatarHeader">
          <Avatar size="sm" src="https://bit.ly/broken-link" />
        </div>
      </div>
    </>
  );
};

export default Header;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Card, { Header, Body, Footer } from "../Card";
import { CircleButton } from "../Button";

const MemberItemCard = Card.extend`
  margin-left: 1.5em;
  margin-right: 1.5em;
  margin-bottom: 1.5em;
  margin-top: 0;
  display: inline-block;
  max-width: 350px;
  box-shadow: none;
  cursor: pointer;
  transition: all 100ms ease-in;
  position: relative;
  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-7px);
  }
`;

const UserProfilePic = styled.img`
  width: 100%;
  height: 250px;
  background-color: #ccc;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

/**
 * @name MemberItem
 * @desc Display a single classroom member with some information and operational button
 * @param children : User information such as a title,name,date, whatever
 * @param profilePic : Profile picture of the user(will be replaced with default image if NULL passed)
 */
const MemberItem = ({ children, profilePic }) => (
  <MemberItemCard>
    <UserProfilePic src={profilePic} />
    <CircleButton danger>-</CircleButton>
    <Body>{children}</Body>
  </MemberItemCard>
);

MemberItem.propTypes = {
  profilePic: PropTypes.string.isRequired
};

export default MemberItem;

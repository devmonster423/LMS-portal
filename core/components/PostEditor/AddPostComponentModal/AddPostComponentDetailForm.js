import React from "react";
import PropTypes from "prop-types";

import Attachment from "../PostComponents/EditableComponents/Attachment";
import SubHeading from "../PostComponents/EditableComponents/SubHeading";
import Paragraph from "../PostComponents/EditableComponents/Paragraph";
import Slideshow from "../PostComponents/EditableComponents/Slideshow";
import Heading from "../PostComponents/EditableComponents/Heading";
import Image from "../PostComponents/EditableComponents/Image";
import Table from "../PostComponents/EditableComponents/Table";
import Video from "../PostComponents/EditableComponents/Video";
import List from "../PostComponents/EditableComponents/List";
import Map from "../PostComponents/EditableComponents/Map";
import {
  SUB_HEADING,
  SLIDE_SHOW,
  ATTACHMENT,
  PARAGRAPH,
  HEADING,
  TABLE,
  IMAGE,
  VIDEO,
  LIST,
  MAP
} from "../../../constants/post-content/components";

/**
 * @name addPostComponentDetailForm
 * @desc Display a form to enter a essential data for individial post component type
 * @prop hideAddPostComponentModal: f() used to hide 'AddPostComponentModal' when component is added
 * @prop addNewPostComponent: f() to add the current component to the 'receipe'
 * @prop order: Rendering order of the current component
 * @prop type: Type of the component which about to be added
 */
class addPostComponentDetailForm extends React.Component {
  render() {
    const {
      hideAddPostComponentModal,
      addNewPostComponent,
      type,
      order
    } = this.props;
    switch (type) {
      case SUB_HEADING:
        return (
          <SubHeading
            hideAddPostComponentModal={hideAddPostComponentModal}
            addNewPostComponent={addNewPostComponent}
            order={order}
          />
        );
      case SLIDE_SHOW:
        return (
          <Slideshow
            hideAddPostComponentModal={hideAddPostComponentModal}
            addNewPostComponent={addNewPostComponent}
            order={order}
          />
        );
      case ATTACHMENT:
        return (
          <Attachment
            hideAddPostComponentModal={hideAddPostComponentModal}
            addNewPostComponent={addNewPostComponent}
            order={order}
          />
        );
      case PARAGRAPH:
        return (
          <Paragraph
            hideAddPostComponentModal={hideAddPostComponentModal}
            addNewPostComponent={addNewPostComponent}
            order={order}
          />
        );
      case HEADING:
        return (
          <Heading
            hideAddPostComponentModal={hideAddPostComponentModal}
            addNewPostComponent={addNewPostComponent}
            order={order}
          />
        );
      case TABLE:
        return (
          <Table
            hideAddPostComponentModal={hideAddPostComponentModal}
            addNewPostComponent={addNewPostComponent}
            order={order}
          />
        );
      case IMAGE:
        return (
          <Image
            hideAddPostComponentModal={hideAddPostComponentModal}
            addNewPostComponent={addNewPostComponent}
            order={order}
          />
        );
      case VIDEO:
        return (
          <Video
            hideAddPostComponentModal={hideAddPostComponentModal}
            addNewPostComponent={addNewPostComponent}
            order={order}
          />
        );
      case LIST:
        return (
          <List
            hideAddPostComponentModal={hideAddPostComponentModal}
            addNewPostComponent={addNewPostComponent}
            order={order}
          />
        );
      case MAP:
        return (
          <Map
            hideAddPostComponentModal={hideAddPostComponentModal}
            addNewPostComponent={addNewPostComponent}
            order={order}
          />
        );
      default:
        return null;
    }
  }
}

addPostComponentDetailForm.propTypes = {
  hideAddPostComponentModal: PropTypes.func.isRequired,
  addNewPostComponent: PropTypes.func.isRequired,
  order: PropTypes.number.isRequired,
  type: PropTypes.string
};

export default addPostComponentDetailForm;

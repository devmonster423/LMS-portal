import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { reduxForm, Field } from "redux-form";

import { LIST } from "../../../../constants/post-content/components";
import { Form, InputField, TextAreaField } from "../../../Form";
import { CircleButton, Button } from "../../../Button";
import { Header, Body, Footer } from "../../../Card";

const ListItem = styled.li`
  animation: ${p => p.theme.SHOW_FROM_TOP} 400ms;
  position: relative;
  width: 90%;
`;

/**
 * @name List
 * @desc Display a list with ordered items
 * @prop [REDUX-FORM] handleSubmit : Redux-Form's default form handle function
 * @prop hideAddPostComponentModal : f() to close the AddPostComponentModal(close the modal intentionally)
 * @prop addNewPostComponent : f() to append a new post component to receipe
 * @prop order : The component's current order in receipe
 * @prop type : Type of the component to be inserte
 */
class List extends React.Component {
  state = {
    items: ["first"]
  };

  /**
   * @name submitHandler
   * @desc Append the <List /> component to the 'receipe'
   * @param { description } : Describe what is presenting in the list
   * @param { items[string] } : Array of list items
   */
  submitHandler = values => {
    const { metadata, description } = values;
    const items = Object.values(values).filter((item, i) => i !== 0);
    const data = { description, items };

    const {
      hideAddPostComponentModal,
      addNewPostComponent,
      order
    } = this.props;

    if (
      !description &&
      description !== "" &&
      (items.length && items.length > 0)
    ) {
      return;
    }

    addNewPostComponent({
      type: LIST,
      order,
      data
    });

    hideAddPostComponentModal();
  };

  removeItem = itemToDelete =>
    this.setState(({ items }) => ({
      items: items.filter(item => item !== itemToDelete)
    }));

  addItem = () =>
    this.setState(({ items }) => ({
      items: items.concat(
        Math.ceil((Math.random() + (1 + Math.random())) * 100)
      )
    }));

  renderItemDependsOnTotalItemsNumber = () =>
    this.state.items.map((item, i) => (
      <ListItem>
        <Field
          key={item}
          name={`list-item-${item}`}
          component={TextAreaField}
        />
        {item !== "first" ? (
          <CircleButton
            danger
            type="button"
            onClick={() => this.removeItem(item)}
          >
            -
          </CircleButton>
        ) : null}
      </ListItem>
    ));

  render() {
    const { hideAddPostComponentModal, handleSubmit } = this.props;
    return [
      <Header>รายการ</Header>,
      <Form onSubmit={handleSubmit(this.submitHandler)}>
        <Body>
          <Field
            name="description"
            label="คำอธิบายเกี่ยวกับรายการนี้"
            component={InputField}
            type="text"
          />
          <ol>
            {this.renderItemDependsOnTotalItemsNumber()}
            <Button
              primary
              type="button"
              textCenter
              marginTop="1em"
              style={{ width: "90%" }}
              onClick={this.addItem}
            >
              + เพิ่มรายการ
            </Button>
          </ol>
        </Body>
        <Footer>
          <Button success marginRight="0.5em">
            เสร็จสิ้น
          </Button>
          <Button danger type="button" onClick={hideAddPostComponentModal}>
            ยกเลิก
          </Button>
        </Footer>
      </Form>
    ];
  }
}

List.propTypes = {
  hideAddPostComponentModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  addNewPostComponent: PropTypes.func.isRequired,
  order: PropTypes.number.isRequired
};

export default reduxForm({ form: "list_component_data" })(List);

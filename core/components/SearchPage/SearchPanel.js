import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";

import { Form, Input } from "../Form";
import { Button } from "../Button";
import Card from "../Card";

/**
 * @name SearchPanel
 * @desc Allow user to search for something with more advance search tools
 */
class SearchPanel extends React.Component {
  render() {
    return (
      <Card fluidWidth padding="1em" marginBottom="2em">
        <Form>
          <Input type="text" />
          <Button
            light
            textCenter
            fluidWidth
            marginTop="1em"
            marginBottom="0"
            marginLeft="auto"
            marginRight="auto"
          >
            ค้นหา
          </Button>
        </Form>
      </Card>
    );
  }
}

export default reduxForm({
  form: "advance_search"
})(SearchPanel);

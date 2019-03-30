import React from "react";
import HeadlineWithFocus from '../HeadlineWithFocus';
import ToolBoxListContainer from './ToolBoxListContainer';
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const styles = theme => ({
  cContentBox: {
    margin: "3em 0",
    width: "100%"
  }
});

class ToolBox extends React.Component {

  render() {

    const {
      classes,
    } = this.props;

    return (
      <div className="c-content-box">
        <HeadlineWithFocus><span>These are pieces of </span>my toolbox</HeadlineWithFocus>
        <ToolBoxListContainer />
      </div>
    );
  }
}

ToolBox.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(ToolBox);

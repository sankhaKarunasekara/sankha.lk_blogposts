import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Obfuscate from "react-obfuscate";

import Main from "../components/Main";
import Article from "../components/Main/Article";
import PageHeader from "../components/Page/PageHeader";
import Content from "../components/Main/Content";
import Form from "../components/ContactForm";
import ToolBox from "../components/ToolBox";
import config from "../../content/meta/config";

const styles = theme => ({});

const ToolBoxPage = () => {
  return (
    <Main>
      <Article>
        <PageHeader title="Tool box" />
        <ToolBox/>
      </Article>
    </Main>
  );
};

ToolBoxPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(ToolBoxPage);

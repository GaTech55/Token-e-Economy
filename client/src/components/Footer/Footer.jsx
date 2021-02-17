import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <>
      <Footer style={{ textAlign: "center" }}>
        Copyright ©2021 Fantastic Four at Georgia Tech Full Stack Coding
        Bootcamp
      </Footer>
    </>
  );
};

export default AppFooter;

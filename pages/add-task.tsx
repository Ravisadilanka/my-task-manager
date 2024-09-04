import LayoutComponent from "@/components/Layout";
import React from "react";
import { Typography } from "antd";

const {Title} = Typography

const addTask = () => {
  return (
    <LayoutComponent>
        <div style={{justifyContent: "center", textAlign:"center"}}>
            <Title>Add Tasks</Title>
        </div>
    </LayoutComponent>);
};

export default addTask;

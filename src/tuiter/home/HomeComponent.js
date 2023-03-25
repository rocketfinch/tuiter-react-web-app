import React from "react";
import TuitsList from "../tuits/tuits-list.js";
import WhatsHappening from "./whats-happening";
import "../styles.css";
import "./index.css";

const HomeComponent = () => {
    return (<>
        <h4>Home</h4>
        <WhatsHappening />
        <TuitsList />
    </>);
}
export default HomeComponent;

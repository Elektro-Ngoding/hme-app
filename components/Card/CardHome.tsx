import React, { Component } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

export default class CardHome extends Component {
  render() {
    return (
      <ScrollMenu>
        <div className="h-72 w-72 bg-red-500 my-3 mx-2"></div>
        <div className="h-72 w-72 bg-yellow-500 my-3 mx-2"></div>
        <div className="h-72 w-72 bg-blue-500 my-3 mx-2"></div>
        <div className="h-72 w-72 bg-red-500 my-3 mx-2"></div>
        <div className="h-72 w-72 bg-yellow-500 my-3 mx-2"></div>
        <div className="h-72 w-72 bg-blue-500 my-3 mx-2"></div>
        <div className="h-72 w-72 bg-red-500 my-3 mx-2"></div>
        <div className="h-72 w-72 bg-yellow-500 my-3 mx-2"></div>
        <div className="h-72 w-72 bg-blue-500 my-3 mx-2"></div>
      </ScrollMenu>
    );
  }
}

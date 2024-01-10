import { Component } from "react";
import "./App.css";
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component {
  imageData = () => {
    let data = [
      {
        id: 1,
        img: elephant,
      },
      {
        id: 2,
        img: elephant,
      },
      {
        id: 3,
        img: elephant,
      },
      {
        id: 4,
        img: elephant,
      },
    ];
    return data;
  };

  createComp() {
    const data = this.imageData();
    return data.map((image) => {
      return (
        <img
          key={image.id}
          id={image.id}
          src={image.img}
          alt={`Image ${image.id}`}
        />
      );
    });
  }

  render() {
    return (
      <div id="classComponent">
        <h3>Kalvium Gallery Using classComponent</h3>

        <div className="grid">{this.createComp()}</div>
      </div>
    );
  }
  // code here
}

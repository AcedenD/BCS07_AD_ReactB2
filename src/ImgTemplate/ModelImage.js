import React, { Component } from "react";
import { glassesArr } from "./glasses";

export default class ModelImage extends Component {
  state = {
    glasses: 1,
  };

  renderGlasses = () => {
    return glassesArr.map((glasses, index) => {
      return (
        <div className="col-2 col-lg-3" key={glasses.id}>
          <img
            style={{ width: 170 / 1.6, height: 70 / 1.6, cursor: "pointer" }}
            src={`./glasses/glassesImage/v${glasses.id}.png`}
            alt={glasses.name}
            onClick={() => {
              console.log("change glasses to: ", glasses.id);
              this.setState({
                glasses: glasses.id,
              });
            }}
          />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="modelGlasses d-flex justify-content-center align-items-center py-5">
        <div style={{ position: "relative" }} className="modelImg">
          <img
            style={{
              width: 480 / 2,
              height: 585 / 2,
              // position: "absolute",
              zIndex: 0,
              marginRight: 50,
            }}
            src={`./glasses/glassesImage/model.jpg`}
            alt="model"
          />
          <img
            style={{
              width: 170 / 1.6,
              height: 70 / 1.6,
              position: "absolute",
              zIndex: 1,
              top: 70,
              left: 67,
            }}
            src={`./glasses/glassesImage/v${this.state.glasses}.png`}
            alt="glasses"
          />
        </div>
        <div className="row g-5">{this.renderGlasses()}</div>
      </div>
    );
  }
}

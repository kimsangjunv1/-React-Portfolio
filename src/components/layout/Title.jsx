import React from "react";

const Title = (props) => {
  return (
    <section className="cont__title">
      <div className="container">
        <h1>
          <strong>{props.title[0]}</strong>
          <em>{props.title[1]}</em>
        </h1>
      </div>
    </section>
  );
};

export default Title;

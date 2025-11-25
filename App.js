import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "h1 bbvbvb tag"),
//     React.createElement("h2", {}, "h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "h1 tag"),
//     React.createElement("h2", {}, "h2 tag"),
//   ]),
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// This is a React Element
const heading = (
  <h1 id="heading" className="head">
    Hello JSX
  </h1>
);

// React Component
const Title = () => {
  return <h1>Hello Title</h1>;
};

const HeadingComponent = () => {
  return (
    <div>
      {heading}
      <Title />
      <h1>Hello from component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

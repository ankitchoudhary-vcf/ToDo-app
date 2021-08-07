import React from "react";

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "40vh",
  };
  return (
    <footer className="footer has-background-dark" style={footerStyle}>
      <div class="content has-text-centered has-text-white">
        <p>
          <strong className="has-text-white is-family-code">Todos List</strong> Created by{" "}
          <a href="https://github.com/ankit1509">Ankit Choudhary</a>.
        </p>
      </div>
    </footer>
  );
};

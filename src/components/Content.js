import React, { useState } from "react";

function Content() {
  const [color, setColor] = useState("rgb(248, 244, 239)");
  return (
    <>
      <div className="content" style={{ backgroundColor: color }}>
        <h1
          onMouseOver={() => setColor("black")}
          onMouseOut={() => setColor("rgb(248, 244, 239)")}
        >
          <a href="https://github.com/swekiiz">Thanadol Sinanavanich</a>
        </h1>
      </div>
      <div
        className="triangle"
        style={{ borderTop: `100vh solid ${color}` }}
      ></div>
      <div className="shadow"></div>
    </>
  );
}

export default Content;

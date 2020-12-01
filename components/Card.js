/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from "@emotion/react";

export default ({ team, name, content, color, dir }) => (
  <div
    data-aos={dir}
    css={css`
      width: 30%;
      height: 30vh;
      border: 3px solid ${color};
      border-top-left-radius: 25px;
      border-bottom-right-radius: 25px;
      padding: 20px;
      color: ${color};
    `}
    style={{
      marginLeft: dir === "flip-left" ? "auto" : "150px",
      marginRight: dir === "flip-left" ? "150px" : "auto",
    }}
  >
    <span
      css={css`
        font-family: "Montserrat", sans-serif;
        font-weight: 900;
        font-size: 20px;
      `}
    >
      {team}{" "}
    </span>
    <span
      css={css`
        font-family: "Spoqa Han Sans", "Spoqa Han Sans JP", "Sans-serif";
        font-weight: bold;
        font-size: 25px;
      `}
    >
      {" "}
      {name}
    </span>
  </div>
);

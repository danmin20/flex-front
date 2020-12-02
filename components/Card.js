/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from "@emotion/react";

export default ({ team, name, member, content, color, dir }) => {
  return (
    <div
      data-aos={dir}
      css={css`
        cursor: pointer;
        width: 30%;
        height: 150px;
        border: 3px solid ${color};
        border-top-left-radius: 25px;
        border-bottom-right-radius: 25px;
        padding: 30px;
        transition: 1s;
        color: ${color};
        :hover {
          color: white;
        }
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
      <div>
        {member.map((name) => (
          <span>{name} </span>
        ))}
      </div>
      <div
        css={css`
          margin-top: 30px;
          font-weight: bold;
          font-size: 20px;
        `}
      >
        {content}
      </div>
    </div>
  );
};

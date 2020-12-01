/** @jsxRuntime classic */
/** @jsx jsx */
import Wave from "../components/Wave";
import { jsx, css } from "@emotion/react";
import Card from "../components/Card";

export default function Home() {
  return (
    <div
      css={css`
        font-family: "Spoqa Han Sans", "Spoqa Han Sans JP", "Sans-serif";
        font-weight: 100;
      `}
    >
      <div
        css={css`
          width: 100%;
          height: 300px;
          background: #3586ff;
          overflow: hidden;
        `}
      >
        <div
          css={css`
            margin-left: 50px;
            margin-top: 50px;
            font-size: 80px;
            color: white;
            font-family: "Montserrat", sans-serif;
            opacity: 0.8;
          `}
        >
          <span style={{ fontWeight: "100" }}>AWS </span>
          <span style={{ fontWeight: "900", fontStyle: "italic" }}>FLEX</span>
        </div>
        <Wave />
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          text-align: center;
          margin-top: 200px;
        `}
      >
        <div
          css={css`
            font-size: 40px;
          `}
        >
          성혁 서현 시연 수연 진수 정민 지혜 병규 동선 민태
        </div>
        <div
          css={css`
            font-size: 39.5px;
            opacity: 0.2;
          `}
        >
          성 혁서 현시 연수 연진 수정 민지 혜병 규동 선민 태
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 160vh;
          background: linear-gradient(to bottom, white, #3586ff);
          align-items: center;
        `}
      >
        <div
          css={css`
            margin-top: 500px;
            letter-spacing: 37px;
            color: #3586ff;
          `}
        >
          왜 사이트 이름이
        </div>
        <div
          css={css`
            font-weight: 900;
            font-size: 100px;
            font-family: "Montserrat", sans-serif;
            color: #3586ff;
            opacity: 0.5;
          `}
        >
          WHY?
        </div>
        <div
          css={css`
            letter-spacing: 50px;
            color: white;
          `}
        >
          이따구냐구요?
        </div>
        <div
          data-aos="fade-up"
          css={css`
            margin-top: 50px;
            font-size: 50px;
            color: #3586ff;
          `}
        >
          <span
            css={css`
              font-family: "Montserrat", sans-serif;
              font-weight: 900;
              font-size: 60px;
            `}
          >
            SEO
          </span>
          를 위해서!
        </div>
        <div
          css={css`
            margin-top: 300px;
            letter-spacing: 28px;
            color: white;
            opacity: 0.5;
          `}
        >
          그래서 AWS FLEX는
        </div>
        <div
          css={css`
            font-weight: 900;
            font-size: 100px;
            font-family: "Montserrat", sans-serif;
            color: white;
            opacity: 0.5;
          `}
        >
          WHAT?
        </div>
        <div
          css={css`
            letter-spacing: 30px;
            color: white;
          `}
        >
          뭐 하는 모임이라구요?
        </div>
        <div
          data-aos="fade-up"
          css={css`
            margin-top: 50px;
            font-size: 50px;
            color: white;
          `}
        >
          <span
            css={css`
              font-family: "Montserrat", sans-serif;
              font-weight: 900;
              font-size: 60px;
            `}
          >
            AWS CREDIT 2000${" "}
          </span>
          탕진!
        </div>
        <div
          css={css`
            margin-top: 300px;
            letter-spacing: 40px;
            color: white;
            opacity: 0.5;
          `}
        >
          그럼 탕진을 어떻게
        </div>
        <div
          css={css`
            font-weight: 900;
            font-size: 100px;
            font-family: "Montserrat", sans-serif;
            color: white;
          `}
        >
          HOW?
        </div>
        <div
          css={css`
            letter-spacing: 76px;
            color: white;
          `}
        >
          할거냐구요?
        </div>
        <div
          data-aos="fade-up"
          css={css`
            margin-top: 50px;
            font-size: 50px;
            color: white;
          `}
        >
          <span
            css={css`
              font-family: "Montserrat", sans-serif;
              font-weight: 900;
              font-size: 60px;
            `}
          >
            3
          </span>
          개의 팀으로 나뉘어서!
        </div>
      </div>
      <div
        css={css`
          height: 50vh;
          background: linear-gradient(to bottom, #3586ff, black);
        `}
      />
      <div
        css={css`
          height: 150vh;
          width: 100%;
          background: black;
          flex-direction: column;
          display: flex;
        `}
      >
        <div
          css={css`
            margin-top: 25vh;
          `}
        >
          <Card team="Team 1" name="김병규" color="#42ebcc" dir="flip-right" />
          <Card team="Team 2" name="신동선" color="#42ebcc" dir="flip-left" />
          <Card team="Team 3" name="어" color="#42ebcc" dir="flip-right" />
        </div>
      </div>
    </div>
  );
}

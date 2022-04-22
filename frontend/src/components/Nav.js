import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../css/Nav.css";

function Nav() {
  const [underline, setUnderline] = useState({left: "0%"});

  return (
    <>
      <div className="nav-containter">
        <div className="nav-box">
          <Link
            className="nav-"
            to="/"
            onClick={() => {
              setUnderline({left: "0%"});
            }}
          >
            <span role="img" aria-label="하트">
              🤞최신
            </span>
          </Link>
          <Link
            className="nav-"
            to="/"
            onClick={() => {
              setUnderline({left: "50%"});
            }}
          >
            <span role="img" aria-label="질문">
              🤷‍♂️Q & A
            </span>
          </Link>

          {/* onClick 실행시마다 초기값 Left: 0%, 클릭시 left: 50% */}
          <div className="nav-underline" style={underline}></div>
        </div>
      </div>
    </>
  );
}

export default Nav;

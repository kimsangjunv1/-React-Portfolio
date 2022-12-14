import React from "react";

const Footer = () => {
  return(
    <footer id="footer">
      <div className="footer__inner">
        <div>
          <h3>email</h3>
          <a href="mailto:to_before@naver.com">to_before@naver.com</a>
        </div>
        <div>
          <h3>kako</h3>
          <a href="/">CODi</a>
        </div>
        <div>
          <h3>info</h3>
          <ul>
            <li>
              <a href="/">Youtube</a>
            </li>
            <li>
              <a href="/">instagram</a>
            </li>
            <li>
              <a href="/">facebook</a>
            </li>
            <li>
              <a href="/">tistory</a>
            </li>

          </ul>
          <a href="/">CODi</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

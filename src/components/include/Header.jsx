import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header id="header">
      <aside id="aside">
        <Link to="/" className="logo" href="">
          <h1 className="ir">logo</h1>
        </Link>
        <div>
          <Link to="/" href="#">
            <img src="assets/img/broadcast.png" alt="" />
            <span>홈</span>
          </Link>
          <Link to="/genre" href="#">
            <img src="assets/img/play.png" alt="" />
            <span>장르</span>
          </Link>
          <Link to="/favorite" href="#">
            <img src="assets/img/rss.png" alt="" />
            <span>FAVORITE</span>
          </Link>
          <Link to="/playlist" href="#">
            <img src="assets/img/align-text-top-one.png" alt="" />
            <span>플레이리스트</span>
          </Link>
          <Link to="/popular" href="#">
            <img src="assets/img/trophy.png" alt="" />
            <span>POPULAR</span>
          </Link>
          <Link to="/download" href="#">
            <img src="assets/img/align-text-bottom.png" alt="" />
            <span>DOWNLOAD</span>
          </Link>
          <Link to="/artist" href="#">
            <img src="assets/img/personal-collection.png" alt="" />
            <span>아티스트</span>
          </Link>
          <Link to="/musicvideo" href="#">
            <img src="assets/img/record.png" alt="" />
            <span>Music Video</span>
          </Link>
        </div>
      </aside>
    </header>
  )
}

export default Header

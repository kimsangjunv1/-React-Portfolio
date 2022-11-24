import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../../utils/fetchAPI'
import Header from '../include/Header'
import MainSearch from '../layout/MainSearch'

import Loader from '../Loader'

function ArtistItem(props) {
  return (
    <div className="artist">
      <img src={`${props.artist.images.background}`} alt="" />
      <div className="artistbox">
        <div className="artistbox_desc">
          <p>백예린</p>
          <h4>백예린 (Yerin Baek)</h4>
        </div>
        <div className="like">
          <img
            src="https://raw.githubusercontent.com/kimsangjunv1/react_project_pick/main/src/styles/img/like.svg"
            alt=""
          />
          <p>Likes 5,677</p>
        </div>
      </div>
    </div>
  )
}

const Artist = () => {
  const [artist, setArtist] = useState(null)

  useEffect(() => {
    fetchAPI(
      `charts/track?locale=ko-KR&listId=ip-country-chart-KR&pageSize=30&startFrom=10`
    ).then((data) => setArtist(data.tracks))
  }, [])

  if (!artist?.length) return <Loader />

  return (
    <>
      <Header />
      <main id="main">
        <section id="contents">
          <MainSearch />

          <div className="artistWrap">
            <h3>
              Artist<em>30</em>
            </h3>
            <div className="artistinner">
              {artist.map((artist, index) => (
                <ArtistItem key={index} artist={artist} />
              ))}
              {/* <div className="artist">
                <img src="./styles/img/artist/artistimg.jpg" alt="" />
                <div className="artistbox">
                  <div className="artistbox_desc">
                    <p>백예린</p>
                    <h4>백예린 (Yerin Baek)</h4>
                  </div>
                  <div className="like">
                    <img
                      src="https://raw.githubusercontent.com/kimsangjunv1/react_project_pick/main/src/styles/img/like.svg"
                      alt=""
                    />
                    <p>Likes 5,677</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="music__control">
            <div className="progress">
              <div className="bar">
                <audio
                  id="main-audio"
                  src="../assets/music/music_audio01.mp3"
                ></audio>
                <audio
                  id="main-audio"
                  src="../assets/music/music_audio02.mp3"
                ></audio>
              </div>
              <div className="timer">
                <span className="current">0:00</span>
                <span className="duration">4:00</span>
              </div>
            </div>
            <div className="volumeCont">
              <input
                type="range"
                id="volume-control"
                min="0"
                max="10"
                value="5"
                step="0.1"
              />
            </div>
            <div className="control_cont">
              <div className="control_music">
                <img src="assets/img/test_album.png" alt="" />
                <div className="control_music_desc">
                  <p>TAEYEON</p>
                  <div>
                    <h2>Weekend</h2>
                    <p>KR</p>
                  </div>
                </div>
              </div>
              <div className="control">
                <div className="timer">
                  <span className="current">0:00</span>
                  <span>/</span>
                  <span className="duration">4:00</span>
                </div>
                <i title="전체 반복" className="repeat" id="control-repeat"></i>
                <i title="이전곡 재생" className="prev" id="control-prev"></i>
                <i title="재생" className="play" id="control-play"></i>
                <i title="다음곡 재생" className="next" id="control-next"></i>
                <i title="재생 목록" className="list" id="control-list"></i>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Artist

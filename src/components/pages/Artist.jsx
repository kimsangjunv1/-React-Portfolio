import React from 'react'
import Header from '../include/Header'

const Artist = () => {
  return (
    <>
      <Header />
      <main id="main">
        <section id="contents">
          <div className="search">
            <label htmlFor="searchInput ir">
              <div className="glass"></div>
            </label>
            <input
              type="text"
              id="searchInput"
              className="input__search"
              placeholder="Please Insert Here"
              title="검색"
            />
          </div>

          <div className="artistWrap">
            <h3>
              Artist<em>277</em>
            </h3>
            <div className="artistinner">
              <div className="artist">
                <img src="./styles/img/artist/artistimg.jpg" alt="" />
                <div className="artistbox">
                  <div className="artistbox_desc">
                    <p>백예린</p>
                    <h4>백예린 (Yerin Baek)</h4>
                  </div>
                  <div className="like">
                    {/* <svg
                      width="21"
                      height="19"
                      viewBox="0 0 21 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.12997 1C3.29676 1 1 3.29676 1 6.12997C1 11.2599 7.06269 15.9235 10.3272 17.0084C13.5917 15.9235 19.6544 11.2599 19.6544 6.12997C19.6544 3.29676 17.3577 1 14.5245 1C12.7895 1 11.2556 1.86132 10.3272 3.1797C9.39881 1.86132 7.86498 1 6.12997 1Z"
                        fill="#1DD960"
                        stroke="#1DD960"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg> */}
                    <p>Likes 5,677</p>
                  </div>
                </div>
              </div>
              <div className="artist">
                <img src="assets/img/artist/artistimg02.jpg" alt="" />
                <div className="artistbox">
                  <div className="artistbox_desc">
                    <p>태연</p>
                    <h4>태연(TAEYEON)</h4>
                  </div>
                  <div className="like">
                    {/* <svg
                      width="21"
                      height="19"
                      viewBox="0 0 21 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.12997 1C3.29676 1 1 3.29676 1 6.12997C1 11.2599 7.06269 15.9235 10.3272 17.0084C13.5917 15.9235 19.6544 11.2599 19.6544 6.12997C19.6544 3.29676 17.3577 1 14.5245 1C12.7895 1 11.2556 1.86132 10.3272 3.1797C9.39881 1.86132 7.86498 1 6.12997 1Z"
                        fill="#1DD960"
                        stroke="#1DD960"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg> */}
                    <p>Likes 5,677</p>
                  </div>
                </div>
              </div>
              <div className="artist">
                <img src="assets/img/artist/artistimg03.jpg" alt="" />
                <div className="artistbox">
                  <div className="artistbox_desc">
                    <p>트와이스</p>
                    <h4>TWICE</h4>
                  </div>
                  <div className="like">
                    {/* <svg
                      width="21"
                      height="19"
                      viewBox="0 0 21 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.12997 1C3.29676 1 1 3.29676 1 6.12997C1 11.2599 7.06269 15.9235 10.3272 17.0084C13.5917 15.9235 19.6544 11.2599 19.6544 6.12997C19.6544 3.29676 17.3577 1 14.5245 1C12.7895 1 11.2556 1.86132 10.3272 3.1797C9.39881 1.86132 7.86498 1 6.12997 1Z"
                        fill="#1DD960"
                        stroke="#1DD960"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg> */}
                    <p>Likes 5,677</p>
                  </div>
                </div>
              </div>
              <div className="artist">
                <img src="assets/img/artist/artistimg04.jpg" alt="" />
                <div className="artistbox">
                  <div className="artistbox_desc">
                    <p>그루비룸</p>
                    <h4>GROOVYROOM</h4>
                  </div>
                  <div className="like">
                    {/* <svg
                      width="21"
                      height="19"
                      viewBox="0 0 21 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.12997 1C3.29676 1 1 3.29676 1 6.12997C1 11.2599 7.06269 15.9235 10.3272 17.0084C13.5917 15.9235 19.6544 11.2599 19.6544 6.12997C19.6544 3.29676 17.3577 1 14.5245 1C12.7895 1 11.2556 1.86132 10.3272 3.1797C9.39881 1.86132 7.86498 1 6.12997 1Z"
                        fill="#1DD960"
                        stroke="#1DD960"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg> */}
                    <p>Likes 5,677</p>
                  </div>
                </div>
              </div>
              <div className="artist">
                <img src="assets/img/artist/artistimg05.jpg" alt="" />
                <div className="artistbox">
                  <div className="artistbox_desc">
                    <p>YOUN-HA</p>
                    <h4>윤하</h4>
                  </div>
                  <div className="like">
                    {/* <svg
                      width="21"
                      height="19"
                      viewBox="0 0 21 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.12997 1C3.29676 1 1 3.29676 1 6.12997C1 11.2599 7.06269 15.9235 10.3272 17.0084C13.5917 15.9235 19.6544 11.2599 19.6544 6.12997C19.6544 3.29676 17.3577 1 14.5245 1C12.7895 1 11.2556 1.86132 10.3272 3.1797C9.39881 1.86132 7.86498 1 6.12997 1Z"
                        fill="#1DD960"
                        stroke="#1DD960"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg> */}
                    <p>Likes 5,677</p>
                  </div>
                </div>
              </div>
              <div className="artist">
                <img src="assets/img/artist/artistimg.jpg" alt="" />
                <div className="artistbox">
                  <div className="artistbox_desc">
                    <p>백예린</p>
                    <h4>백예린 (Yerin Baek)</h4>
                  </div>
                  <div className="like">
                    {/* <svg
                      width="21"
                      height="19"
                      viewBox="0 0 21 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.12997 1C3.29676 1 1 3.29676 1 6.12997C1 11.2599 7.06269 15.9235 10.3272 17.0084C13.5917 15.9235 19.6544 11.2599 19.6544 6.12997C19.6544 3.29676 17.3577 1 14.5245 1C12.7895 1 11.2556 1.86132 10.3272 3.1797C9.39881 1.86132 7.86498 1 6.12997 1Z"
                        fill="#1DD960"
                        stroke="#1DD960"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg> */}
                    <p>Likes 5,677</p>
                  </div>
                </div>
              </div>
              <div className="artist">
                <img src="assets/img/artist/artistimg02.jpg" alt="" />
                <div className="artistbox">
                  <div className="artistbox_desc">
                    <p>태연</p>
                    <h4>태연(TAEYEON)</h4>
                  </div>
                  <div className="like">
                    {/* <svg
                      width="21"
                      height="19"
                      viewBox="0 0 21 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.12997 1C3.29676 1 1 3.29676 1 6.12997C1 11.2599 7.06269 15.9235 10.3272 17.0084C13.5917 15.9235 19.6544 11.2599 19.6544 6.12997C19.6544 3.29676 17.3577 1 14.5245 1C12.7895 1 11.2556 1.86132 10.3272 3.1797C9.39881 1.86132 7.86498 1 6.12997 1Z"
                        fill="#1DD960"
                        stroke="#1DD960"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg> */}
                    <p>Likes 5,677</p>
                  </div>
                </div>
              </div>
              <div className="artist">
                <img src="assets/img/artist/artistimg03.jpg" alt="" />
                <div className="artistbox">
                  <div className="artistbox_desc">
                    <p>트와이스</p>
                    <h4>TWICE</h4>
                  </div>
                  <div className="like">
                    {/* <svg
                      width="21"
                      height="19"
                      viewBox="0 0 21 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.12997 1C3.29676 1 1 3.29676 1 6.12997C1 11.2599 7.06269 15.9235 10.3272 17.0084C13.5917 15.9235 19.6544 11.2599 19.6544 6.12997C19.6544 3.29676 17.3577 1 14.5245 1C12.7895 1 11.2556 1.86132 10.3272 3.1797C9.39881 1.86132 7.86498 1 6.12997 1Z"
                        fill="#1DD960"
                        stroke="#1DD960"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg> */}
                    <p>Likes 5,677</p>
                  </div>
                </div>
              </div>
              <div className="artist">
                <img src="assets/img/artist/artistimg04.jpg" alt="" />
                <div className="artistbox">
                  <div className="artistbox_desc">
                    <p>그루비룸</p>
                    <h4>GROOVYROOM</h4>
                  </div>
                  <div className="like">
                    {/* <svg
                      width="21"
                      height="19"
                      viewBox="0 0 21 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.12997 1C3.29676 1 1 3.29676 1 6.12997C1 11.2599 7.06269 15.9235 10.3272 17.0084C13.5917 15.9235 19.6544 11.2599 19.6544 6.12997C19.6544 3.29676 17.3577 1 14.5245 1C12.7895 1 11.2556 1.86132 10.3272 3.1797C9.39881 1.86132 7.86498 1 6.12997 1Z"
                        fill="#1DD960"
                        stroke="#1DD960"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg> */}
                    <p>Likes 5,677</p>
                  </div>
                </div>
              </div>
              <div className="artist">
                <img src="../styles/img/artist/artistimg05.jpg" alt="" />
                <div className="artistbox">
                  <div className="artistbox_desc">
                    <p>YOUN-HA</p>
                    <h4>윤하</h4>
                  </div>
                  <div className="like">
                    {/* <svg
                      width="21"
                      height="19"
                      viewBox="0 0 21 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.12997 1C3.29676 1 1 3.29676 1 6.12997C1 11.2599 7.06269 15.9235 10.3272 17.0084C13.5917 15.9235 19.6544 11.2599 19.6544 6.12997C19.6544 3.29676 17.3577 1 14.5245 1C12.7895 1 11.2556 1.86132 10.3272 3.1797C9.39881 1.86132 7.86498 1 6.12997 1Z"
                        fill="#1DD960"
                        stroke="#1DD960"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg> */}
                    <p>Likes 5,677</p>
                  </div>
                </div>
              </div>
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

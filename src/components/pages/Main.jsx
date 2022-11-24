import React from 'react'
import Header from '../include/Header'
import MainSearch from '../layout/MainSearch'

const Main = () => {
  return (
    <>
      <Header />
      <main id="main">
        <section id="contents">
          <MainSearch />
          <div className="main_cont">
            기상별 음악 추천
            <section>
              <div className="section_title">
                <h2>오늘의 날씨에 맞는 음악은?</h2>
                <p>여기에서 날씨에 맞는 음악을 추천해드릴게요!</p>
              </div>
              <div className="weather_cont">
                <div className="playlist weather_info">
                  <div className="weather_text_cont">
                    <div className="weather_desc">
                      <h2>오늘 같이 눈 오는 날!</h2>
                      <p>눈오는 날 듣기 좋은 플레이리스트를 정리 해~보았다</p>
                    </div>
                    <div className="weather_condition">
                      <img
                        className=""
                        src="assets/img/weather/weather_icon_snow.png"
                        alt=""
                      />
                      <div className="degree_cont">
                        <p>08°</p>
                        <p>서울</p>
                      </div>
                      <p>눈 오는 날 듣기 좋은 음악을 추천 해드릴게요</p>
                    </div>
                  </div>
                </div>
                <div className="playlist select_001">
                  <div className="item_001"></div>
                  <div className="item_cont">
                    <div className="item_002"></div>
                    <div className="item_003"></div>
                  </div>
                </div>
                <div className="playlist select_002">
                  <div className="item_004"></div>
                  <div className="item_cont2">
                    <div className="item_005"></div>
                    <div className="item_006"></div>
                  </div>
                </div>
                <div className="playlist select_003"></div>
                <div className="playlist select_001">
                  <div className="item_001"></div>
                  <div className="item_cont">
                    <div className="item_002"></div>
                    <div className="item_003"></div>
                  </div>
                </div>
              </div>
            </section>
            계절/계졀관련 행사 음악 추천
            <section>
              <div className="section_title">
                <h2>다가온다, 크리스마-스!</h2>
                <p>
                  곧 다가오는 크리스마스에 가장 잘 어울리는 플레이리스트 한번
                  들어볼래요?
                </p>
              </div>
              <div className="season_cont">
                <div className="season_youtube_link">
                  <img src="assets/img/season/season_banner.jpg" alt="" />
                </div>
              </div>
            </section>
            앨범
            <section>
              <div className="section_title">
                <h2>Albums</h2>
                <p>이번에 추천하는 인기 앨범</p>
              </div>
              <div className="album_cont">
                앨범아트
                <div className="album_item">
                  <img src="assets/img/album/ive_album.jpg" alt="앨범 아트" />
                  <img
                    className="shadow"
                    src="assets/img/album/ive_album.jpg"
                    alt="앨범 아트 그림자"
                  />
                  <p>IVE (아이브)</p>
                  <h2>After LIKE</h2>
                </div>
                앨범아트
                <div className="album_item">
                  <img src="assets/img/album/ive_album.jpg" alt="앨범 아트" />
                  <img
                    className="shadow"
                    src="assets/img/album/ive_album.jpg"
                    alt="앨범 아트 그림자"
                  />
                  <p>IVE (아이브)</p>
                  <h2>After LIKE</h2>
                </div>
                앨범아트
                <div className="album_item">
                  <img src="assets/img/album/ive_album.jpg" alt="앨범 아트" />
                  <img
                    className="shadow"
                    src="assets/img/album/ive_album.jpg"
                    alt="앨범 아트 그림자"
                  />
                  <p>IVE (아이브)</p>
                  <h2>After LIKE</h2>
                </div>
                앨범아트
                <div className="album_item">
                  <img src="assets/img/album/ive_album.jpg" alt="앨범 아트" />
                  <img
                    className="shadow"
                    src="assets/img/album/ive_album.jpg"
                    alt="앨범 아트 그림자"
                  />
                  <p>IVE (아이브)</p>
                  <h2>After LIKE</h2>
                </div>
                앨범아트
                <div className="album_item">
                  <img src="assets/img/album/ive_album.jpg" alt="앨범 아트" />
                  <img
                    className="shadow"
                    src="assets/img/album/ive_album.jpg"
                    alt="앨범 아트 그림자"
                  />
                  <p>IVE (아이브)</p>
                  <h2>After LIKE</h2>
                </div>
                앨범아트
                <div className="album_item">
                  <img src="assets/img/album/ive_album.jpg" alt="앨범 아트" />
                  <img
                    className="shadow"
                    src="assets/img/album/ive_album.jpg"
                    alt="앨범 아트 그림자"
                  />
                  <p>IVE (아이브)</p>
                  <h2>After LIKE</h2>
                </div>
              </div>
            </section>
            ranking / Artist
            <section id="ranking__temporary">
              <div className="ranking_cont unflex">
                <div className="section_title">
                  <h2>Top Pick</h2>
                </div>
                <div className="list_cont maxWidth">
                  <div className="ranking_list_header">
                    <div>순위</div>
                    <div>썸넬</div>
                    <div>곡명</div>
                    <div>앨범</div>
                    <div>아티스트</div>
                    <div>LIKE</div>
                    <div>시간</div>
                  </div>
                  <ul>
                    <li className="item">
                      <div>01</div>
                      <div>
                        <img src="assets/img/test_album.png" alt="" />
                      </div>
                      <div>늦은 밤 너의 밤 골목길에서</div>
                      <div>아무노래</div>
                      <div>ZICO(지코)</div>
                      <div>
                        <img src="assets/img/like.svg" alt="" />
                        Likes 5,403
                      </div>
                      <div>03:52</div>
                    </li>
                    <li className="item">
                      <div>02</div>
                      <div>
                        <img src="assets/img/test_album.png" alt="" />
                      </div>
                      <div>늦은 밤 너의 밤 골목길에서</div>
                      <div>아무노래</div>
                      <div>ZICO(지코)</div>
                      <div>
                        <img src="assets/img/like.svg" alt="" />
                        Likes 5,403
                      </div>
                      <div>03:52</div>
                    </li>
                    <li className="item">
                      <div>02</div>
                      <div>
                        <img src="assets/img/test_album.png" alt="" />
                      </div>
                      <div>늦은 밤 너의 밤 골목길에서</div>
                      <div>아무노래</div>
                      <div>ZICO(지코)</div>
                      <div>
                        <img src="assets/img/like.svg" alt="" />
                        Likes 5,403
                      </div>
                      <div>03:52</div>
                    </li>
                    <li className="item">
                      <div>02</div>
                      <div>
                        <img src="assets/img/test_album.png" alt="" />
                      </div>
                      <div>늦은 밤 너의 밤 골목길에서</div>
                      <div>아무노래</div>
                      <div>ZICO(지코)</div>
                      <div>
                        <img src="assets/img/like.svg" alt="" />
                        Likes 5,403
                      </div>
                      <div>03:52</div>
                    </li>
                    <li className="item">
                      <div>02</div>
                      <div>
                        <img src="assets/img/test_album.png" alt="" />
                      </div>
                      <div>늦은 밤 너의 밤 골목길에서</div>
                      <div>아무노래</div>
                      <div>ZICO(지코)</div>
                      <div>
                        <img src="assets/img/like.svg" alt="" />
                        Likes 5,403
                      </div>
                      <div>03:52</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="artist_cont unflex">
                <div className="section_title">
                  <h2>Artist</h2>
                </div>
                <div className="artistWrap">
                  <h3>
                    Artist<em>277</em>
                  </h3>
                  <div className="artistinner unflex_artist">
                    아티스트 아이템
                    <div className="artist unWidth">
                      <img src="assets/img/artist/artistimg.jpg" alt="" />
                      <div className="artistbox">
                        <p>백예린</p>
                        <h4>백예린 (Yerin Baek)</h4>
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
                    <div className="artist unWidth">
                      <img src="assets/img/artist/artistimg.jpg" alt="" />
                      <div className="artistbox">
                        <p>백예린</p>
                        <h4>백예린 (Yerin Baek)</h4>
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
                    <div className="artist unWidth">
                      <img src="assets/img/artist/artistimg.jpg" alt="" />
                      <div className="artistbox">
                        <p>백예린</p>
                        <h4>백예린 (Yerin Baek)</h4>
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
                    <div className="artist unWidth">
                      <img src="assets/img/artist/artistimg.jpg" alt="" />
                      <div className="artistbox">
                        <p>백예린</p>
                        <h4>백예린 (Yerin Baek)</h4>
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
              </div>
              <div></div>
            </section>
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
                  <i
                    title="전체 반복"
                    className="repeat"
                    id="control-repeat"
                  ></i>
                  <i title="이전곡 재생" className="prev" id="control-prev"></i>
                  <i title="재생" className="play" id="control-play"></i>
                  <i title="다음곡 재생" className="next" id="control-next"></i>
                  <i title="재생 목록" className="list" id="control-list"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Main

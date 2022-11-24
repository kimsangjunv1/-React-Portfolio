import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../../utils/fetchAPI'
import Header from '../include/Header'
import MainSearch from '../layout/MainSearch'

import Loader from '../Loader'

function RankingItem(props) {
  return (
    <li className="item">
      <div>{props.index + 1}</div>
      <div>
        <img src={`${props.ranking.images.coverart}`} alt="" />
      </div>
      <div>{props.ranking.title}</div>
      <div>아무노래</div>
      <div>{props.ranking.subtitle}</div>
      <div>
        <img src="assets/img/like.svg" alt="" />
        Likes {props.ranking.key.slice(0, 3)}
      </div>
      <div>03:52</div>
    </li>
  )
}

function AlbumItem(props) {
  return (
    <div className="album_item">
      <img src={`${props.album.images.coverart}`} alt="앨범 아트" />
      <img
        className="shadow"
        src={`${props.album.images.coverart}`}
        alt="앨범 아트 그림자"
      />
      <p>IVE (아이브)</p>
      <h2>After LIKE</h2>
    </div>
  )
}

function ArtistItem(props) {
  return (
    <div className="artist unWidth">
      <img src={`${props.artist.images.background}`} alt="" />
      <div className="artistbox">
        <p>몰라나도</p>
        <h4>백예린 (Yerin Baek)</h4>
        <div className="like">
          <p>Likes 5,677</p>
        </div>
        <audio
          src={`${props.artist.hub.actions[1].uri}`}
          type="audio/m4a"
          controls
          // autoPlay
        >
          <source src={`${props.artist.hub.actions[1].uri}`} type="audio/m4a" />
        </audio>
      </div>
    </div>
  )
}

// function WeatherItem(props) {
//   return (
//     <div className="playlist weather_info">
//       <div className="weather_text_cont">
//         <div className="weather_desc">
//           <h2>오늘 같이 눈 오는 날!</h2>
//           <p>눈오는 날 듣기 좋은 플레이리스트를 정리 해~보았다</p>
//         </div>
//         <div className="weather_condition">
//           <img
//             className=""
//             src="assets/img/weather/weather_icon_snow.png"
//             alt=""
//           />
//           <div className="degree_cont">
//             <p>08°</p>
//             {/* <p>{props.weather.city}</p> */}
//           </div>
//           <p>눈 오는 날 듣기 좋은 음악을 추천 해드릴게요</p>
//         </div>
//       </div>
//     </div>
//   )
// }

const Main = () => {
  const [ranking, setRanking] = useState(null)
  const [album, setAlbum] = useState(null)
  const [artist, setArtist] = useState(null)
  // const [weather, setWeather] = useState(null)

  useEffect(() => {
    fetchAPI(
      `charts/track?locale=ko-KR&listId=ip-country-chart-KR&pageSize=5&startFrom=0`
    ).then((data) => setRanking(data.tracks))
  }, [])

  useEffect(() => {
    fetchAPI(
      `charts/track?locale=ko-KR&listId=ip-country-chart-KR&pageSize=10&startFrom=0`
    ).then((data) => setAlbum(data.tracks))
  }, [])

  useEffect(() => {
    fetchAPI(
      `charts/track?locale=ko-KR&listId=ip-country-chart-KR&pageSize=10&startFrom=0`
    ).then((data) => setArtist(data.tracks))
  }, [])

  // useEffect(() => {
  //   fetchAPIs(`weather?location=sunnyvale&format=json&u=f`).then((data) =>
  //     setWeather(data)
  //   )
  // }, [])

  if (!ranking?.length) return <Loader />
  if (!album?.length) return <Loader />
  if (!artist?.length) return <Loader />
  // if (!weather?.length) return <Loader />
  return (
    <>
      <Header />
      <main id="main">
        <section id="contents">
          <MainSearch />
          <div className="main_cont">
            <section>
              <div className="section_title">
                <h2>오늘의 날씨에 맞는 음악은?</h2>
                <p>여기에서 날씨에 맞는 음악을 추천해드릴게요!</p>
              </div>
              <div className="weather_cont">
                {/* {weather.map((weather, index) => (
                  <WeatherItem key={index} weather={weather} />
                ))} */}
                <div className="playlist weather_info">
                  <div className="weather_text_cont">
                    <div className="weather_desc">
                      <h2>오늘 같이 눈 오는 날!</h2>
                      <p>눈오는 날 듣기 좋은 플레이리스트를 정리 해~보았다</p>
                    </div>
                    <div className="weather_condition">
                      <img
                        className=""
                        src="https://github.com/kimsangjunv1/react_project_pick/blob/main/src/styles/img/weather/weather_snow.png?raw=true"
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
            <section>
              <div className="section_title">
                <h2>Albums</h2>
                <p>이번에 추천하는 인기 앨범</p>
              </div>
              <div className="album_cont">
                {album.map((album, index) => (
                  <AlbumItem key={index} album={album} />
                ))}
                {/* <div className="album_item">
                  <img src="assets/img/album/ive_album.jpg" alt="앨범 아트" />
                  <img
                    className="shadow"
                    src="assets/img/album/ive_album.jpg"
                    alt="앨범 아트 그림자"
                  />
                  <p>IVE (아이브)</p>
                  <h2>After LIKE</h2>
                </div> */}
              </div>
            </section>
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
                    {ranking.map((ranking, index) => (
                      <RankingItem
                        key={index}
                        ranking={ranking}
                        index={index}
                      />
                    ))}
                  </ul>
                </div>
              </div>
              <div className="artist_cont unflex">
                <div className="section_title">
                  <h2>Artist</h2>
                </div>
                <div className="artistWrap">
                  <div className="artistinner unflex_artist">
                    {artist.map((artist, index) => (
                      <ArtistItem key={index} artist={artist} />
                    ))}
                    {/* <div className="artist unWidth">
                      <img src="assets/img/artist/artistimg.jpg" alt="" />
                      <div className="artistbox">
                        <p>백예린</p>
                        <h4>백예린 (Yerin Baek)</h4>
                        <div className="like">
                          <p>Likes 5,677</p>
                        </div>
                      </div>
                    </div> */}
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
                  defaultValue="5"
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

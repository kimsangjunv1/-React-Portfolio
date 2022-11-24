import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../../utils/fetchAPI'
import Header from '../include/Header'
import Loader from '../Loader'
import MainSearch from '../layout/MainSearch'

function RankingItem(props) {
  return (
    <li className="item">
      <div>{props.index + 2}</div>
      <div>
        <img src={`${props.ranking.images.coverart}`} alt="" />
      </div>
      <div>{props.ranking.title}</div>
      {/* <div>아무노래</div> */}
      <div>{props.ranking.subtitle}</div>
      <div>
        <img
          src="https://raw.githubusercontent.com/kimsangjunv1/react_project_pick/main/src/styles/img/like.svg"
          alt=""
        />
        Likes {props.ranking.key.slice(0, 3)}
      </div>
      <div>03:52</div>
    </li>
  )
}
function FirstRankingItem(props) {
  return (
    <div className="winner_cont">
      <h2>Top 10</h2>
      <div className="album_art_cont">
        <img src={`${props.ranking.images.coverart}`} alt="" />
        <img
          className="album_art_shadow"
          src={`${props.ranking.images.coverart}`}
          alt="앨범아트 그림자"
        />
      </div>
      <h4>01-</h4>
      <p className="artist">벤(ben)</p>
      <p className="song_title">{props.ranking.title}</p>
      <p className="refresh_time">
        <img
          src="https://raw.githubusercontent.com/kimsangjunv1/react_project_pick/main/src/styles/img/refresh.svg"
          alt="새로고침"
        />
        <span>2022. 11. 13. 오후 22:02</span>
      </p>
      <p className="trophy_desc">
        <img
          src="https://raw.githubusercontent.com/kimsangjunv1/react_project_pick/main/src/styles/img/trophy.svg"
          alt="트로피"
        />
        <span>올해 47주간 1위</span>
      </p>
    </div>
  )
}

const Popular = () => {
  const [ranking, setRanking] = useState(null)
  const [firstranking, setFirstRanking] = useState(null)

  useEffect(() => {
    fetchAPI(
      `charts/track?locale=ko-KR&listId=ip-country-chart-KR&pageSize=9&startFrom=1`
    ).then((data) => setRanking(data.tracks))
  }, [])

  useEffect(() => {
    fetchAPI(
      `charts/track?locale=ko-KR&listId=ip-country-chart-KR&pageSize=1&startFrom=0`
    ).then((data) => setFirstRanking(data.tracks))
  }, [])

  if (!ranking?.length) return <Loader />
  if (!firstranking?.length) return <Loader />
  return (
    <>
      <Header />
      <main id="main">
        <section id="contents">
          <MainSearch />
          <div className="ranking_cont">
            {firstranking.map((ranking, index) => (
              <FirstRankingItem key={index} ranking={ranking} />
            ))}
            {/* <div className="winner_cont">
              <h2>Top 10</h2>
              <div className="album_art_cont">
                <img src="assets/img/test_album.png" alt="" />
                <img
                  className="album_art_shadow"
                  src="assets/img/test_album.png"
                  alt="앨범아트 그림자"
                />
              </div>
              <h4>01-</h4>
              <p className="artist">벤(ben)</p>
              <p className="song_title">헤어져줘서 고마워,</p>
              <p className="refresh_time">
                <img src="assets/img/refresh.svg" alt="새로고침" />
                <span>2022. 11. 13. 오후 22:02</span>
              </p>
              <p className="trophy_desc">
                <img src="assets/img/trophy.svg" alt="트로피" />
                <span>올해 47주간 1위</span>
              </p>
            </div> */}
            <div className="list_cont">
              <div className="ranking_list_header">
                <div>순위</div>
                <div>썸넬</div>
                <div>곡명</div>
                {/* <div>앨범</div> */}
                <div>아티스트</div>
                <div>LIKE</div>
                <div>시간</div>
              </div>
              <ul>
                {ranking.map((ranking, index) => (
                  <RankingItem key={index} ranking={ranking} index={index} />
                ))}
              </ul>
            </div>
          </div>
          <div className="music__control">
            <div className="progress">
              <div className="bar"></div>
              <div className="timer">
                <span className="current">0:00</span>
                <span className="duration">4:00</span>
              </div>
            </div>
            <div className="volumeCont">
              {/* <input
                type="range"
                id="volume-control"
                min="0"
                max="10"
                devalue="5"
                step="0.1"
              /> */}
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

export default Popular

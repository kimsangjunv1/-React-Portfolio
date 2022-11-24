import React, { useRef } from 'react'

const MainSearch = ({ onSearch }) => {
  const inputRef = useRef()

  const handleSearch = () => {
    const value = inputRef.current.value
    onSearch(value)
  }

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  const onClick = () => {
    handleSearch()
  }
  return (
    <div className="search">
      <label htmlFor="searchInput ir">
        <div className="glass"></div>
      </label>
      <input
        ref={inputRef}
        type="search"
        placeholder="검색하세요!"
        onKeyPress={onKeyPress}
      />
      <button type="submit" onClick={onClick}>
        ⚲
      </button>
    </div>
  )
}

export default MainSearch

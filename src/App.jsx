import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/header'

function App() {

  const [bookmarks,setbooknarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAdd = blog => {
    const newBookmarks = [...bookmarks,blog]
    setbooknarks(newBookmarks)
  }

  const handleMark = (time) => {
    setReadingTime(readingTime + time)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAdd={handleAdd} handleMark={handleMark}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime} ></Bookmarks>
      </div>
    </>
  )
}

export default App

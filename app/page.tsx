import React from 'react'
import MainTitle from './components/MainTitle/mainTitle'
import Header from './components/Header/Header'
import LoaderComponent from './components/Loader/LoaderComponent'



export default function Home() {
  return (
    <div>
      <LoaderComponent
      bgMusicSrc="https://bored-bucket.s3.eu-west-3.amazonaws.com/backgroundAudio.mp3" 
      clickSoundSrc="https://bored-bucket.s3.eu-west-3.amazonaws.com/click.mp3" 
      keyPressSoundSrc="https://bored-bucket.s3.eu-west-3.amazonaws.com/click.mp3"
      hoverSoundSrc="https://bored-bucket.s3.eu-west-3.amazonaws.com/hover.mp3"
      />
      <Header />
      <MainTitle />
      
    </div>
  )
}

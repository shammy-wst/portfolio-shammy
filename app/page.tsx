import React from 'react'
import MainTitle from './components/MainTitle/mainTitle'
import Header from './components/Header/Header'
import AudioComponent from './components/AudioComponent/AudioComponent'



export default function Home() {
  return (
    <div>
      <Header />
      <MainTitle />
      <AudioComponent 
      bgMusicSrc="https://bored-bucket.s3.eu-west-3.amazonaws.com/backgroundAudio.mp3" 
      clickSoundSrc="https://bored-bucket.s3.eu-west-3.amazonaws.com/click.mp3" 
      keyPressSoundSrc="https://bored-bucket.s3.eu-west-3.amazonaws.com/click.mp3"
      bgMusicVolume={0.2}
      />
    </div>
  )
}

import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Body from './components/body/body'
import MainBody from './components/body/main'
import MainFeatures from './components/body/features'
import MessageUs from './components/footer/messageus'
import Footer from './components/footer/footer'
import Counter from './components/body/counter'

function App() {

  return (
    <>
    <Header/>
    <Body/>
    <MainBody/>
    <MainFeatures/>
    <Counter/>
    <MessageUs/>
    <Footer/>
    
    </>
  )
}

export default App

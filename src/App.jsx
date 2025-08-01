import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Bounce } from 'react-toastify';
import Header from './components/Header'
import TextBox from './components/TextBox'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <TextBox />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
        transition={Bounce} />

    </>
  )
}

export default App

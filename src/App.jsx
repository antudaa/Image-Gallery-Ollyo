import { } from 'react';
import './index.css';
import Header from './Components/Header';
import Gallery from './Components/Gallery';

function App() {

  return (
    <div className='min-h-screen'>
      <div className='m-16 bg-[aliceblue] rounded-xl'>
        <Header />
        <hr />
        <Gallery />
      </div>
    </div>
  )
}

export default App

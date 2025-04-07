import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browser = () => {
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
  useNowPlayingMovies();
  return (
    
    <div>
      <Header/>
      {showGptSearch ?<GptSearch/> : <><MainContainer/>
      <SecondContainer/> </>}
      
      
      </div>
  )
}

export default Browser;
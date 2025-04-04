import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import appStore from './utils/appStore';

function App() {
  return (
    <div className='overflow-hidden'>
      <Provider store={appStore}>
        <Body/>
      </Provider>
      
      </div>
  );
}

export default App;

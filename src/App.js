import logo from './logo.svg';
import './App.css';
import { marked } from 'marked';
import * as DOMPurify from 'dompurify';
import axios from 'axios';

import Header from './Components/Header';
import HomeFeed from './Components/HomeFeed';
function App() {

  // useEffect(() => {
  //   axios.get('http://localhost:3000/blogs')
  //     .then(response => {
  //       setText(response.data);
  //      // console.log()
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  
  return (
    <div className="App dark:bg-black bg-white">
  <Header/>
  <HomeFeed/>
{/*    
   {console.log(texts)}
   { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(atob(texts.data[2].Body)) }} /> }
        */}
        {/* {marked(texts[0].Body)} hey */}
       
    </div>
  );
}

export default App;

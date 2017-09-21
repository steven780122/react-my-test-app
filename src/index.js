import React from 'react'; 
import ReactDOM from 'react-dom';    //如果你在這個程式碼檔案只需要撰寫元件，不需要渲染(render)到網頁上，
                                    // 那只需引用React模組即可
import './index.css';
// import App from './App';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



// index.js作為最後把虛擬DOM轉譯為直實DOM的檔案，它算是個入口檔案(entry)。
// App.js則是集中整合所有的元件，它是整個應用的元件控制中心。
// HelloWorld.js則是我們自己寫的元件內容，之後有可能有很多元件。

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
    <div>
        <div className="nav-title">
            <a>I'm IU</a>
        </div>
        <div className="hamburger">
           
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>

        <ul className="nav-links" id="content">
          
          <a href="index.html"><li>Home</li></a>
          <a href="hot.html"><li>Hot</li></a>
          <a href="opera.html"><li>Opera</li></a>
          <a href="store.html" ><li>Store</li></a>        
          <a href="concert.html" ><li>Concert</li></a>           
        </ul>  
        <div className="navsquare"></div>
    <div className="bigIU">
        <img src="images/1920/组 230@2x.png" className="IMIU"/>
    </div>
    
        <div className="aboutlyrics">"<br/>
            I’ll be there, 홀로 걷는 너의 뒤에<br/>
            Singing till the end, 그치지 않을 이 노래<br/>
            아주 잠시만 귀 기울여 봐<br/>
            유난히 긴 밤을 걷는 널 위해 부를게<br/>
            love poem<br/>
            "
        </div>
        </div>
<div>
    
        <footer>
          <div className="footericon">
              <a href="https://www.facebook.com/iu.loen/" className="aicon"><img src="images/1920/facebook.png"  className="icon"/></a>
              <a href="https://www.instagram.com/dlwlrma/" className="aicon"><img src="images/1920/instagram.png" className="icon"/></a>
              <a href="https://twitter.com/_iuofficial" className="aicon"><img src="images/1920/twitter.png"   className="icon"/></a>
              <a href="https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww" className="aicon"><img src="images/1920/youtube.png"   className="icon"/></a>
          </div>
          <div className="footerword">©2019-2020 I'M IU.ALL RIGHTS RESERVED. </div>
    </footer>
    </div>

    </div>




  );
}

export default App;

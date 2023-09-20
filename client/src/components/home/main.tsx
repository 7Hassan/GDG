import { useState } from "react";
import { darkLogo } from "../../assets";
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { MinLogo } from "../../utils/elements";


function TwitterWidget({ tweetId }) {
  return (
    <TwitterTweetEmbed
      tweetId={tweetId}
    />
  );
}


interface Tweets {
  show: boolean;
}



const FacebookTweets = ({ show }: Tweets) => {

  return (
    <div className={`tweets-div ${!show && 'hidden'}`}>
      <iframe src="https://widget.taggbox.com/141705" style={{ width: '100%', height: '500px' }}></iframe>
    </div >
  )


  // follow
  return (
    <div>
      <p>Check out this tweet:</p>
      <a href="https://twitter.com/GdgPortsaid?ref_src=twsrc%5Etfw"
        className="twitter-follow-button" data-show-count="false">Follow @GdgPortsaid</a>
    </div >
  );

  // show tweets  by id
  return <div>
    <TwitterWidget tweetId="1700575112976638269" />
  </div>
}





const TwitterTweets = ({ show }: Tweets) => {
  return <div className={`tweets-div ${!show && 'hidden'}`}>
    <a className="twitter-timeline"
      href="https://twitter.com/GdgPortsaid?ref_src=twsrc%5Etfw">
      loading...
    </a>
  </div>
}

const Tweets = () => {
  const [tweets, setTweets] = useState('twitter')
  return <div className="main-sec-tweets mt-[40px]">
    <div className="tweets-container w-[400px] flex flex-col items-center flex-nowrap px-[20px] py-[30px]">
      <div className="buttons flex justify-between w-[100%]">
        <button className={`btn ${tweets === 'facebook' && 'active'}`}
          onClick={() => setTweets('facebook')}> Facebook</button>
        <button className={`btn ${tweets === 'twitter' && 'active'}`}
          onClick={() => setTweets('twitter')}> Twitter</button>
      </div>
      <TwitterTweets show={tweets === 'twitter'} />
      <FacebookTweets show={tweets === 'facebook'} />
    </div>
  </div>
}

const EmailInput = () => {
  const [loading, setLoading] = useState(false);
  return <div className={`input ${loading && 'loading'}
  flex items-center mt-[10px] ml-[10px]`}>
    <input type="email" />

    <button className="btn" onClick={() => setLoading(!loading)}>send</button>
  </div>
}


export const MainSec = () => {
  return <div className="main-sec">
    <div className="sec-container flex justify-between flex-wrap">
      <div className="main-sec-welcome max-w-[817px] mt-[40px]">
        <div className="text-logo mb-[60px]">
          <h2 className="mb-[20px] text-[48px]">Welcome to</h2>
          <div className="logo pl-[93px] max-w-[736px]">
            <img src={darkLogo} alt="logo" className="w-[100%]" />
          </div>
        </div>
        <div className="about-text mb-[60px]">
          We are a community-driven program initiated by Google to bring together developers and technology enthusiasts who are interested in Google's technologies and platforms. GDGs are independent groups run by volunteers and operate in various cities and regions across the world.
        </div>
        <div className="input-email">

          <h3>Receiving the latest news:</h3>
          <EmailInput />
        </div>
      </div>
      <Tweets />
    </div>
  </div>
};


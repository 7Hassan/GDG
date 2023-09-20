import { useState } from "react";
import { darkLogo } from "../../assets";


const TweetsContent = () => {
  const tweets = [1, 2, 3]
  return <div className="tweets-div">
    {
      tweets.map((tweet) => {
        return <div className="tweet" key={tweet}>
          <div className="tweet-container flex items-center flex-nowrap gap-[20px]">
            <div className="img">
              <img src="/assets/imgs/person.jpg" alt="img" className="rounded-full w-[90px]
              h-[90px] min-w-[90px] min-h-[90px]" />
              <img src="/assets/icons/twitter.svg" alt="twitter" className="twitter-svg" />
            </div>
            <div className="text flex flex-col items-start">
              60 Things To Immediately Do About Building
              <div className="date"> August 23, 2022</div>
            </div>
          </div>
        </div>
      })
    }
  </div>

}

const Tweets = () => {
  return <div className="main-sec-tweets max-w-[415px] max-h-[707px] h-fit mt-[40px]">
    <div className="tweets-container flex flex-col items-center flex-nowrap px-[20px] py-[30px]">
      <div className="buttons flex justify-between w-[100%]">
        <button className="btn"> Popular</button>
        <button className="btn active"> Recent</button>
      </div>
      <TweetsContent />
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

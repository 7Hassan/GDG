


export const MainTopics = () => {
  const topicsArr = [1, 2, 3, 4]
  return <div className="mainTopics-sec sec">
    <div className="sec-container">
      <h2>Main Topics</h2>
      <div className="content flex flex-col items-center flex-nowrap justify-center">
        <div className="topics flex flex-wrap items-start justify-center gap-[40px]">
          {
            topicsArr.map(topic => {
              return <div key={topic} className="topic flex flex-col flex-nowrap  items-center">
                <img src="/assets/imgs/google-cloud.jpg" alt="google-cloud" className=" max-w-[250px]" />
                <div className="text mt-[20px]">Google Cloud</div>
              </div>
            })
          }
        </div>
        <button className="btn mt-[60px]">More Topics</button>
      </div>
    </div>
  </div >
};




export const Sessions = () => {
  const sessionsArr = [1, 2]
  return <div className="upcomingSessions-sec sec">
    <div className="sec-container">
      <h2>Upcoming Sessions</h2>
      <div className="content">
        <div className="sessions">
          {
            sessionsArr.map((ses) => {
              return (
                <div key={ses} className="session flex flex-nowrap items-center w-[100%] gap-[30px]">
                  <img src="/assets/imgs/person.jpg" alt="session Image" />
                  <div className="text flex flex-col items-center">
                    <div className="date flex flex-nowrap items-center justify-between w-[100%]">
                      <div className="start">08:00 PM</div>
                      <div className="end">10:00 PM</div>
                    </div>
                    <div className="title my-[20px]">
                      Get Started with Google Cloud Platform: Part 2 - Cloud Run and Containers
                    </div>
                    <button className="btn">Learn More</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  </div>
};

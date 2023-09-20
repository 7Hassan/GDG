


export const Posts = () => {
  const postsArr = [1, 2, 3]
  return <div className="post-sec sec">
    <div className="sec-container">
      <h2>Tech Posts</h2>
      <div className="content">
        <div className="posts flex flex-wrap items-start justify-center gap-[40px]">
          {
            postsArr.map(post => {
              return <div key={post} className="post flex flex-col flex-nowrap  items-center">
                <img src="/assets/imgs/flutter.png" alt="google-cloud" className=" max-w-[250px]" />
                <div className="text  mt-[5px] ">Flutter</div>
                <button className="btn mt-[30px]">Read More</button>
              </div>
            })
          }
        </div>
      </div>
    </div>
  </div>
};

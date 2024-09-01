const VideoTitle = (props) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-6xl font-bold">{props.title}</h1>
      <p className="py-6 text-lg w-1/4">{props.overview}</p>
      <div className="">
        <button className="text-black hover:opacity-70 bg-white p-4 px-12 text-xl rounded-lg">
          ▶️ Play
        </button>
        <button className="mx-2 text-white p-4 px-12 bg-gray-500 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

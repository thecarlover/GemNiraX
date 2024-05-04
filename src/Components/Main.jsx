import React, { useContext } from "react";
import { Context } from "../context/Context";
import { assets } from "../assets/assets";
import SearchBar from "./SearchBar";

const Main = () => {
  const { showResult, recentPrompt, resultData } = useContext(Context);

  return (
    <div className="main flex-1 min-h-screen pb-10 relative">
      {/* This container will overlay the iframe */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col overflow-hidden">
        <div className="nav flex items-center justify-between font-normal text-2xl p-10 text-gray-400">
          <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text ">
            GemNiraX
          </p>
          <img className="w-10 h-10 " src={assets.man} alt="" />
        </div>

        <div className="main-container max-w-4xl m-auto font-semibold flex-1 overflow-y-auto">
          {!showResult ? (
            <>
              <div className="greet mx-10 my-0 text-6xl text-gray-400 p-1">
                <p>
                  <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text ">
                    Hello, Folks
                  </span>
                </p>
                <p>How can I help you today?</p>
              </div>
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://my.spline.design/planetcopy-e031df29ad4c393cc5afe77fb1cdbbda/"
                style={{ zIndex: -1 }} // Ensure iframe is behind overlay
                title="Planet Copy"
              ></iframe>
            </>
          ) : (
            <div className="result max-h-96 overflow-y-auto">
              <div className="result-title">
                <img className="w-7 h-7" src={assets.man} alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img className="w-7 h-7" src={assets.eye} alt="" />
                <p dangerouslySetInnerHTML={{__html:resultData}} className=""></p>
              </div>
            </div>
          )}
        </div>

        <SearchBar />
      </div>
    </div>
  );
};

export default Main;

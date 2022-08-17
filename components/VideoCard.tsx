import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Video } from "../type";
import { GoVerified } from "react-icons/go";
import { BsFillPauseFill, BsFillPlayFill} from "react-icons/bs";
import { HiVolumeOff, HiVolumeUp} from "react-icons/hi";

interface IProps {
  post: Video;
}

export const VideoCard: NextPage<IProps> = ({ post }) => {

   const [isHover, setIsHover] = useState(false);

   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

   const [isMute, setIsMute] = useState(false);

   const videoRef = useRef<HTMLVideoElement>(null);

   const onVideoPress = () => {
    console.log("Clicked")
    if(isVideoPlaying) {
        videoRef?.current?.pause();
        setIsVideoPlaying(false);
    } else {
        videoRef?.current?.play();
        setIsVideoPlaying(true);
    }
   }

   const onMutePress = () => {
    if(isMute && videoRef.current != null) {
      videoRef.current.muted = false;
      setIsMute(false);
    } else if(videoRef.current != null) {
      videoRef.current.muted = true;
      setIsMute(true);
    }
   }

  return (
    <div className="flex flex-col border-b-2 border-gray-200 pb-6">
      <div>
        <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
          <div className="md:w-16 md:h-16 w-10 h-10">
            <Link href="/profile">
              <Image width={62} height={62} className=' rounded-full' src={post.postedBy.image}></Image>
            </Link>
          </div>
          <div>
          <Link href="/profile">
            <div className="flex gap-2 item-center">
              <p className="flex gap-2 item-center md:text-md font-bold text-primary">
                {post.postedBy.userName} {` `}
                <GoVerified className="text-blue-400 text-md" />
              </p>
              <p className="capatalize font-medium text-xs text-gray-500 hidden md:block">{post.postedBy.userName}</p>
            </div>
          </Link>
        </div>
        </div>
        
      </div>
      <div className="lg:ml-20 flex gap-4 relative">
        <div onMouseEnter={() => {setIsHover(true)}} onMouseLeave={() => {setIsHover(false)}} className="rounded-3xl">
            <Link href="/">
                <video 
                ref={videoRef} 
                loop  
                className="lg:w[600px] h-[300px] md:h-[400px] lg:h-[530px] w-[200px] rounded-2xl cursor-pointer bg-gray-100"
                src={post.video.asset.url} >
                    
                </video>
            </Link>
            {isHover && (
                <div className="absolute bottom-6 cursor-pointer left-8 md:left-14 lg:left-0 flex gap-10 lg:justify-between w-[100px] md:w-[50px] p-3">
                    { isVideoPlaying ? (
                        <button onClick={onVideoPress}>
                            <BsFillPauseFill  className="text-black text-2xl lg:text-4xl"/>
                        </button>
                    ) : (
                        <button  onClick={onVideoPress}>
                            <BsFillPlayFill className="text-black text-2xl lg:text-4xl"/>
                            </button>
                    )}
                    { isMute ? (
                        <button onClick={onMutePress}><HiVolumeOff className="text-black text-2xl lg:text-4xl"/></button>
                    ) : (
                        <button onClick={onMutePress}><HiVolumeUp className="text-black text-2xl lg:text-4xl"/></button>
                    )}
                </div>
            )}
        </div>

      </div>
    </div>
  );
};

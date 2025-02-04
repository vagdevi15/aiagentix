import React, {useState, useRef} from "react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";



interface AgentCardProps {
  name: string;
  description: string;
  // icon?: string; icon = "🤖"
  demo_video_path?: string;
  agent_image_path?: string;
  audio_path?: string;
}

const AgentCard = ({ name, description, demo_video_path, agent_image_path, audio_path,}: AgentCardProps) => {

  const [displayBtn, setDisplayBtn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // const videoRef = useRef<HTMLVideoElement | null>(null);
  // console.log("image path: ","demo_video_path: ", "audio_path: ",)

  return (
    


    <div id="modal_trigger_div" 
        style={{ padding: 20}}
        onMouseEnter={e => {
            console.log("mouse entered");
            setDisplayBtn(true);
            if (audioRef.current) {
              audioRef.current.loop = true; // Enable looping
              audioRef.current.play();
            }
            // Play video in loop
        // if (videoRef.current) {
        //   videoRef.current.loop = true;
        //   videoRef.current.play();
        // }
        }}
        onMouseLeave={e => {
          console.log("mouse left")
            setDisplayBtn(false)
            if (audioRef.current) {
              audioRef.current.pause();
              audioRef.current.currentTime = 0;
            }
        }}
        className="w-50 h-23 mx-auto mb-2  flex gap-5  bg-primary/20 flex items-center justify-center border rounded-lg"
      >
        <img src={agent_image_path} className="w-15 h-20 object-contain" />
        <h3 className="text-sm font-medium group-hover:text-primary transition-colors">{name}</h3>
        <div id="modal_div" style={{display:displayBtn ? 'block': 'none' , border: '1px solid gray', width: "800px", height: "300px", padding: "10", backgroundColor: "white", position: "fixed", top:"40%", left:"50%",  transform:" translate(-50%, -50%)", zIndex:100}}>
          {/* Click 
          <p>demo video</p> */}
          <img
            // src="public/demo.gif" // Path to your GIF file
          
            src={demo_video_path}
            alt="Demo GIF"
            className="max-w-full rounded-lg "
            // style={{ position:"relative", top: "0px", left: "0"}}
            
          />
         <audio ref={audioRef} src="public/demo_audio_path.mp3" />
        </div>
    </div>
  );
};

export default AgentCard;



// <HoverCard>
    //   <HoverCardTrigger asChild>
    //     <div className="agent-card text-center">
    //       <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
    //         {/* <span className="text-xl">{icon}</span> */}
    //         <img src="Clinical Pharmacist.png" className="w-20 h-20 object-contain" />
    //       </div>
    //       <h3 className="text-sm font-medium">{name}</h3>
    //     </div>
    //   </HoverCardTrigger>
    //   {/* <HoverCardContent className="w-120 h-100 bg-black/90 border border-primary/20"> */}
    //   {/* <HoverCardContent className="bg-black/90 border border-primary/20"> */}
    //   {/* <HoverCardContent className="sm:max-w-[600px] h-[400px] bg-black/90 border border-primary/20 animate-in zoom-in-90 duration-300"> */}
    //   <HoverCardContent className=""  style={{ position:"relative", top: "100px", left: "0"}}
    //   // sm:max-w-[600px] h-[400px] bg-black/90 border border-primary/20 animate-in zoom-in-90 duration-300 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw]
    //     align="center">
    //     {/* <div className="w-full h-full"> */}
    //     <div className="">
    //       {/* Empty container for video content */}
    //       <img
    //         src="public/demo.gif" // Path to your GIF file
    //         alt="Demo GIF"
    //         className="max-w-full rounded-lg "
    //         // maxWidth: "90vw", height:"300px"
    //         style={{ position:"relative", top: "0px", left: "0"}}
    //       />
    //     </div>
    //   </HoverCardContent>
    // </HoverCard>

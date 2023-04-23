import React from "react";
import Timer from "@/components/timer";

export default function Page2() {
  return (
    <>
      <div>
        <Timer />
        <video width="100%" height="100%" preload="auto" autoPlay loop muted>
          <source src="video/profesor.MP4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </>
  );
}

import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <main>
      <div className="main">
        <h1 style={{ textAlign: "center" }}> כאן אין פחד קהל! </h1>

        <div className="btn">
          <Button variant="contained" href="/page1">
            שלב 1
          </Button>
          <Button variant="contained" href="/page2">
            שלב 2
          </Button>
          <Button variant="contained" href="/page3">
            שלב 3
          </Button>
          <Button variant="contained" href="/page4">
            שלב 4
          </Button>
          <Button variant="contained" href="/page5">
            שלב 5
          </Button>
        </div>
      </div>

      <video width="100%" height="100%" preload="auto" autoPlay loop muted>
        <source src="video/iframe.MP4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </main>
  );
}

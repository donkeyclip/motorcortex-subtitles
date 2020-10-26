console.log("true");
import Player from "@kissmybutton/motorcortex-player";
import { Clip, loadPlugin } from "@kissmybutton/motorcortex/";
import SubtitlesDefinition from "../src/";
const Subtitles = loadPlugin(SubtitlesDefinition);

const css = `
  .container{
  	width:100%;
  	height:100%;
  	position:relative;
  }
  #subs-container{
    position:absolute;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:red;
    minWidth:50px;
    minHeight:50px;
  }

`;
const html = `<div class="container">
  <div id="subs-container"></div>
</div>`;
const host = document.getElementById("clip");

const containerParams = {
  width: "100%",
  height: "100%",
};

const clip = new Clip({
  css,
  html,
  host,
  containerParams,
});
const subtitle = new Subtitles.SRT(
  {
    animatedAttrs: {
      text: `
      	1
      	00:00:00,000 --> 00:00:05,000
      	These are some captions

      	2
      	00:00:05,000 --> 00:00:10,000
      	These are some other captions
      	`,
    },
  },
  { duration: 10000, selector: "#subs-container" }
);
const tes = clip.addIncident(subtitle, 0);
new Player({
  scaleToFit: true,
  clip: clip,
  theme: "mc-blue",
  preview: false,
  pointerEvents: false,
});

window.myclip = clip;

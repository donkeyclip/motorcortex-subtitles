# MotorCortex-Subtitles

**Table of Contents**

- [MotorCortex-Subtitles](#motorcortex-subtitles)
  - [Demo](#demo)
- [Intro / Features](#intro--features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Importing and Loading](#importing-and-loading)
- [Creating Incidents](#creating-incidents)
  - [ParseText](#parsetext)
- [Adding Incidents in your clip](#adding-incidents-in-your-clip)
- [Contributing](#contributing)
- [License](#license)
- [Sponsored by](#sponsored-by)

## Demo

[Check it out here](https://donkeyclip.github.io/motorcortex-subtitles/demo/)

# Intro / Features

MotorCortex Subtitles takes the capabilities of the [parseSRT](https://www.npmjs.com/package/parse-srt) library of parsing subtitle files. 
The `ParseText` Incident can parse supported subtitle files and add them to your clip. The duration is auto-calculated from your subtitles. 

This Plugin exposes just one Incident:
- ParseText

## Subtitle Formats supported
SRT

# Getting Started
## Installation
```bash
$ npm install @donkeyclip/motorcortex-subtitles
# OR
$ yarn add @donkeyclip/motorcortex-subtitles
```

## Importing and loading
```javascript
import { loadPlugin } from "@donkeyclip/motorcortex/";
import SubtitleDef from "@donkeyclip/motorcortex-subtitles";
const SubtitlePlugin = loadPlugin(SubtitleDef);
```

# Creating Incidents

## ParseText
```javascript
const clip = new HTMLClip({
  html: `
    <div class="container"></div>`,
  css: `
  .container{
    width:100%;
    height:100%;
    position:relative;
    background:#151515;
  }
`,
  host: document.getElementById("clip"),
  containerParams: {
    width: "720px",
    height: "640px",
  },
});

const subtitle = new Subtitles.ParseText(
  {
    fontSize: 14,
    textColor: "white",
    fontFamily: "Ubuntu",
    subtitles: mySubsTextFile,
    position: "bottom",
    maxWidth: 400,
    paddingBottom: 50,
  },
  {
    selector: ".container",
    containerParams: {
      width: "720px",
      height: "640px",
    },
  }
);
```
### ParseText Attrs
| Name | Description | Default | Type |
| --------- |:-----------| :----| ------: |
| fontSize | Font size in pixels of the subtitles | 12 | number |
| textColor | The color of the subtitles | white | - |
| fontFamily | Font family of the subtiltes | 'Ubuntu' | string |
| subtitles | The subtitles loaded text | - | string |
| position | Position of the subtitles container [top, center, bottom] | bottom | string |
| maxWidth | The maximum width of the subtitles container in pixels | "100%" | number |
| paddingTop | The padding top value of the subtitles container in pixels | 0 | number |
| paddingBottom | The padding bottom value of the subtitles container in pixels | 0 | number |

#### IMPORTANT 
The container params of the subtitles clip should be the same as the parent clip.

# Adding Incidents in your clip

```javascript
clipName.addIncident(incidentName,startTime);
```

### Contributing 

In general, we follow the "fork-and-pull" Git workflow, so if you want to submit patches and additions you should follow the next steps:
1.	**Fork** the repo on GitHub
2.	**Clone** the project to your own machine
3.	**Commit** changes to your own branch
4.	**Push** your work back up to your fork
5.	Submit a **Pull request** so that we can review your changes

# License

[MIT License](https://opensource.org/licenses/MIT)

# Sponsored by
[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)

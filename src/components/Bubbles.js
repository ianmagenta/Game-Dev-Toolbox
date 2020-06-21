// Copyright (c) 2020 by LegoMushroom (https://codepen.io/sol0mka/pen/yNOage)

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import React from "react";
import "./bubbleDemo/style.css";

const Bubbles = () => {
  const script2 = document.createElement("script");
  script2.src = "https://cdn.jsdelivr.net/mojs/0.119.0/mo.min.js";
  document.body.appendChild(script2);

  const script3 = document.createElement("script");
  script3.src = "https://cdn.jsdelivr.net/hammerjs/2.0.4/hammer.min.js";
  document.body.appendChild(script3);

  const script4 = document.createElement("script");
  script4.src = "https://cdnjs.cloudflare.com/ajax/libs/iScroll/5.1.1/iscroll-probe.min.js";
  document.body.appendChild(script4);

  const script5 = document.createElement("script");
  script5.src = "/script.js";
  document.body.appendChild(script5);

  return (
    <div>
      <div id="js-curtain" className="curtain">
        <div className="curtain__progress-text">getting things ready...</div>
        <div id="js-progress-gradient" className="curtain__progress-text-gradient"></div>
        <div id="js-progress" className="curtain__progress"></div>
      </div>
      <div id="js-close-btn" className="close">
        <div id="js-close-btn-inner" className="close__inner"></div>
      </div>
      <div id="js-content" className="content">
        <div id="js-dust-1" className="dust dust--1 sprite">
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="0"
              ry="0"
              strokeWidth="10"
              strokeDasharray="0"
              strokeDashoffset="0"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="1.6"
              ry="0.2"
              strokeWidth="9.8"
              strokeDasharray="3.4"
              strokeDashoffset="6.8"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="3.2"
              ry="0.4"
              strokeWidth="9.6"
              strokeDasharray="6.8"
              strokeDashoffset="13.6"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="4.800000000000001"
              ry="0.6000000000000001"
              strokeWidth="9.4"
              strokeDasharray="10.2"
              strokeDashoffset="20.4"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="6.4"
              ry="0.8"
              strokeWidth="9.2"
              strokeDasharray="13.6"
              strokeDashoffset="27.2"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="8"
              ry="1"
              strokeWidth="9"
              strokeDasharray="17"
              strokeDashoffset="34"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="9.600000000000001"
              ry="1.2000000000000002"
              strokeWidth="8.8"
              strokeDasharray="20.4"
              strokeDashoffset="40.8"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="11.200000000000001"
              ry="1.4000000000000001"
              strokeWidth="8.6"
              strokeDasharray="23.8"
              strokeDashoffset="47.6"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="12.8"
              ry="1.6"
              strokeWidth="8.4"
              strokeDasharray="27.2"
              strokeDashoffset="54.4"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="14.4"
              ry="1.8"
              strokeWidth="8.2"
              strokeDasharray="30.599999999999998"
              strokeDashoffset="61.199999999999996"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="16"
              ry="2"
              strokeWidth="8"
              strokeDasharray="34"
              strokeDashoffset="68"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="17.6"
              ry="2.2"
              strokeWidth="7.8"
              strokeDasharray="37.4"
              strokeDashoffset="74.8"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="19.200000000000003"
              ry="2.4000000000000004"
              strokeWidth="7.6"
              strokeDasharray="40.8"
              strokeDashoffset="81.6"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="20.8"
              ry="2.6"
              strokeWidth="7.4"
              strokeDasharray="44.199999999999996"
              strokeDashoffset="88.39999999999999"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="22.400000000000002"
              ry="2.8000000000000003"
              strokeWidth="7.199999999999999"
              strokeDasharray="47.6"
              strokeDashoffset="95.2"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="24"
              ry="3"
              strokeWidth="7"
              strokeDasharray="51"
              strokeDashoffset="102"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="25.6"
              ry="3.2"
              strokeWidth="6.8"
              strokeDasharray="54.4"
              strokeDashoffset="108.8"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="27.200000000000003"
              ry="3.4000000000000004"
              strokeWidth="6.6"
              strokeDasharray="57.8"
              strokeDashoffset="115.6"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="28.8"
              ry="3.6"
              strokeWidth="6.4"
              strokeDasharray="61.199999999999996"
              strokeDashoffset="122.39999999999999"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="30.400000000000002"
              ry="3.8000000000000003"
              strokeWidth="6.199999999999999"
              strokeDasharray="64.6"
              strokeDashoffset="129.2"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="32"
              ry="4"
              strokeWidth="6"
              strokeDasharray="68"
              strokeDashoffset="136"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="33.6"
              ry="4.2"
              strokeWidth="5.8"
              strokeDasharray="71.39999999999999"
              strokeDashoffset="142.79999999999998"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="35.2"
              ry="4.4"
              strokeWidth="5.6"
              strokeDasharray="74.8"
              strokeDashoffset="149.6"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="36.800000000000004"
              ry="4.6000000000000005"
              strokeWidth="5.3999999999999995"
              strokeDasharray="78.2"
              strokeDashoffset="156.4"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="38.400000000000006"
              ry="4.800000000000001"
              strokeWidth="5.199999999999999"
              strokeDasharray="81.6"
              strokeDashoffset="163.2"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="40"
              ry="5"
              strokeWidth="5"
              strokeDasharray="85"
              strokeDashoffset="170"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="41.6"
              ry="5.2"
              strokeWidth="4.8"
              strokeDasharray="88.39999999999999"
              strokeDashoffset="176.79999999999998"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="43.2"
              ry="5.4"
              strokeWidth="4.6"
              strokeDasharray="91.8"
              strokeDashoffset="183.6"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="44.800000000000004"
              ry="5.6000000000000005"
              strokeWidth="4.3999999999999995"
              strokeDasharray="95.2"
              strokeDashoffset="190.4"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="46.400000000000006"
              ry="5.800000000000001"
              strokeWidth="4.199999999999999"
              strokeDasharray="98.6"
              strokeDashoffset="197.2"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="48"
              ry="6"
              strokeWidth="4"
              strokeDasharray="102"
              strokeDashoffset="204"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="49.6"
              ry="6.2"
              strokeWidth="3.8"
              strokeDasharray="105.39999999999999"
              strokeDashoffset="210.79999999999998"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="51.2"
              ry="6.4"
              strokeWidth="3.5999999999999996"
              strokeDasharray="108.8"
              strokeDashoffset="217.6"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="52.800000000000004"
              ry="6.6000000000000005"
              strokeWidth="3.3999999999999995"
              strokeDasharray="112.2"
              strokeDashoffset="224.4"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="54.400000000000006"
              ry="6.800000000000001"
              strokeWidth="3.1999999999999993"
              strokeDasharray="115.6"
              strokeDashoffset="231.2"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="56"
              ry="7"
              strokeWidth="3"
              strokeDasharray="119"
              strokeDashoffset="238"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="57.6"
              ry="7.2"
              strokeWidth="2.8"
              strokeDasharray="122.39999999999999"
              strokeDashoffset="244.79999999999998"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="59.2"
              ry="7.4"
              strokeWidth="2.5999999999999996"
              strokeDasharray="125.8"
              strokeDashoffset="251.6"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="60.800000000000004"
              ry="7.6000000000000005"
              strokeWidth="2.3999999999999995"
              strokeDasharray="129.2"
              strokeDashoffset="258.4"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="62.400000000000006"
              ry="7.800000000000001"
              strokeWidth="2.1999999999999993"
              strokeDasharray="132.6"
              strokeDashoffset="265.2"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="64"
              ry="8"
              strokeWidth="2"
              strokeDasharray="136"
              strokeDashoffset="272"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="65.60000000000001"
              ry="8.200000000000001"
              strokeWidth="1.799999999999999"
              strokeDasharray="139.4"
              strokeDashoffset="278.8"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="67.2"
              ry="8.4"
              strokeWidth="1.5999999999999996"
              strokeDasharray="142.79999999999998"
              strokeDashoffset="285.59999999999997"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="68.8"
              ry="8.6"
              strokeWidth="1.4000000000000004"
              strokeDasharray="146.2"
              strokeDashoffset="292.4"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="70.4"
              ry="8.8"
              strokeWidth="1.1999999999999993"
              strokeDasharray="149.6"
              strokeDashoffset="299.2"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="72"
              ry="9"
              strokeWidth="1"
              strokeDasharray="153"
              strokeDashoffset="306"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="73.60000000000001"
              ry="9.200000000000001"
              strokeWidth="0.7999999999999989"
              strokeDasharray="156.4"
              strokeDashoffset="312.8"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="75.2"
              ry="9.4"
              strokeWidth="0.5999999999999996"
              strokeDasharray="159.79999999999998"
              strokeDashoffset="319.59999999999997"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="76.80000000000001"
              ry="9.600000000000001"
              strokeWidth="0.3999999999999986"
              strokeDasharray="163.2"
              strokeDashoffset="326.4"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="78.4"
              ry="9.8"
              strokeWidth="0.1999999999999993"
              strokeDasharray="166.6"
              strokeDashoffset="333.2"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
        </div>
        <div id="js-dust-2" className="dust dust--2 sprite">
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="0"
              ry="0"
              strokeWidth="8"
              strokeDasharray="0"
              strokeDashoffset="0"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="1"
              ry="0.16"
              strokeWidth="7.84"
              strokeDasharray="3.6"
              strokeDashoffset="1.4"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="2"
              ry="0.32"
              strokeWidth="7.68"
              strokeDasharray="7.2"
              strokeDashoffset="2.8"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="3"
              ry="0.48"
              strokeWidth="7.52"
              strokeDasharray="10.8"
              strokeDashoffset="4.199999999999999"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="4"
              ry="0.64"
              strokeWidth="7.36"
              strokeDasharray="14.4"
              strokeDashoffset="5.6"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="5"
              ry="0.8"
              strokeWidth="7.2"
              strokeDasharray="18"
              strokeDashoffset="7"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="6"
              ry="0.96"
              strokeWidth="7.04"
              strokeDasharray="21.6"
              strokeDashoffset="8.399999999999999"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="7"
              ry="1.12"
              strokeWidth="6.88"
              strokeDasharray="25.2"
              strokeDashoffset="9.799999999999999"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="8"
              ry="1.28"
              strokeWidth="6.72"
              strokeDasharray="28.8"
              strokeDashoffset="11.2"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="9"
              ry="1.44"
              strokeWidth="6.5600000000000005"
              strokeDasharray="32.4"
              strokeDashoffset="12.6"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="10"
              ry="1.6"
              strokeWidth="6.4"
              strokeDasharray="36"
              strokeDashoffset="14"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="11"
              ry="1.76"
              strokeWidth="6.24"
              strokeDasharray="39.6"
              strokeDashoffset="15.399999999999999"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="12"
              ry="1.92"
              strokeWidth="6.08"
              strokeDasharray="43.2"
              strokeDashoffset="16.799999999999997"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="13"
              ry="2.08"
              strokeWidth="5.92"
              strokeDasharray="46.800000000000004"
              strokeDashoffset="18.2"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="14"
              ry="2.24"
              strokeWidth="5.76"
              strokeDasharray="50.4"
              strokeDashoffset="19.599999999999998"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="15"
              ry="2.4"
              strokeWidth="5.6"
              strokeDasharray="54"
              strokeDashoffset="21"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="16"
              ry="2.56"
              strokeWidth="5.4399999999999995"
              strokeDasharray="57.6"
              strokeDashoffset="22.4"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="17"
              ry="2.72"
              strokeWidth="5.279999999999999"
              strokeDasharray="61.2"
              strokeDashoffset="23.799999999999997"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="18"
              ry="2.88"
              strokeWidth="5.12"
              strokeDasharray="64.8"
              strokeDashoffset="25.2"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="19"
              ry="3.04"
              strokeWidth="4.96"
              strokeDasharray="68.4"
              strokeDashoffset="26.599999999999998"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="20"
              ry="3.2"
              strokeWidth="4.8"
              strokeDasharray="72"
              strokeDashoffset="28"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="21"
              ry="3.36"
              strokeWidth="4.640000000000001"
              strokeDasharray="75.60000000000001"
              strokeDashoffset="29.4"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="22"
              ry="3.52"
              strokeWidth="4.48"
              strokeDasharray="79.2"
              strokeDashoffset="30.799999999999997"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="23"
              ry="3.68"
              strokeWidth="4.32"
              strokeDasharray="82.8"
              strokeDashoffset="32.199999999999996"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="24"
              ry="3.84"
              strokeWidth="4.16"
              strokeDasharray="86.4"
              strokeDashoffset="33.599999999999994"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="25"
              ry="4"
              strokeWidth="4"
              strokeDasharray="90"
              strokeDashoffset="35"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="26"
              ry="4.16"
              strokeWidth="3.84"
              strokeDasharray="93.60000000000001"
              strokeDashoffset="36.4"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="27"
              ry="4.32"
              strokeWidth="3.6799999999999997"
              strokeDasharray="97.2"
              strokeDashoffset="37.8"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="28"
              ry="4.48"
              strokeWidth="3.5199999999999996"
              strokeDasharray="100.8"
              strokeDashoffset="39.199999999999996"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="29"
              ry="4.64"
              strokeWidth="3.3600000000000003"
              strokeDasharray="104.4"
              strokeDashoffset="40.599999999999994"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="30"
              ry="4.8"
              strokeWidth="3.2"
              strokeDasharray="108"
              strokeDashoffset="42"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="31"
              ry="4.96"
              strokeWidth="3.04"
              strokeDasharray="111.60000000000001"
              strokeDashoffset="43.4"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="32"
              ry="5.12"
              strokeWidth="2.88"
              strokeDasharray="115.2"
              strokeDashoffset="44.8"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="33"
              ry="5.28"
              strokeWidth="2.7199999999999998"
              strokeDasharray="118.8"
              strokeDashoffset="46.199999999999996"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="34"
              ry="5.44"
              strokeWidth="2.5599999999999996"
              strokeDasharray="122.4"
              strokeDashoffset="47.599999999999994"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="35"
              ry="5.6000000000000005"
              strokeWidth="2.3999999999999995"
              strokeDasharray="126"
              strokeDashoffset="49"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="36"
              ry="5.76"
              strokeWidth="2.24"
              strokeDasharray="129.6"
              strokeDashoffset="50.4"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="37"
              ry="5.92"
              strokeWidth="2.08"
              strokeDasharray="133.20000000000002"
              strokeDashoffset="51.8"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="38"
              ry="6.08"
              strokeWidth="1.92"
              strokeDasharray="136.8"
              strokeDashoffset="53.199999999999996"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="39"
              ry="6.24"
              strokeWidth="1.7599999999999998"
              strokeDasharray="140.4"
              strokeDashoffset="54.599999999999994"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="40"
              ry="6.4"
              strokeWidth="1.5999999999999996"
              strokeDasharray="144"
              strokeDashoffset="56"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="41"
              ry="6.5600000000000005"
              strokeWidth="1.4399999999999995"
              strokeDasharray="147.6"
              strokeDashoffset="57.4"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="42"
              ry="6.72"
              strokeWidth="1.2800000000000002"
              strokeDasharray="151.20000000000002"
              strokeDashoffset="58.8"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="43"
              ry="6.88"
              strokeWidth="1.12"
              strokeDasharray="154.8"
              strokeDashoffset="60.199999999999996"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="44"
              ry="7.04"
              strokeWidth="0.96"
              strokeDasharray="158.4"
              strokeDashoffset="61.599999999999994"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="45"
              ry="7.2"
              strokeWidth="0.7999999999999998"
              strokeDasharray="162"
              strokeDashoffset="62.99999999999999"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="46"
              ry="7.36"
              strokeWidth="0.6399999999999997"
              strokeDasharray="165.6"
              strokeDashoffset="64.39999999999999"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="47"
              ry="7.5200000000000005"
              strokeWidth="0.47999999999999954"
              strokeDasharray="169.20000000000002"
              strokeDashoffset="65.8"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="48"
              ry="7.68"
              strokeWidth="0.3200000000000003"
              strokeDasharray="172.8"
              strokeDashoffset="67.19999999999999"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="49"
              ry="7.84"
              strokeWidth="0.16000000000000014"
              strokeDasharray="176.4"
              strokeDashoffset="68.6"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
        </div>
        <div id="js-dust-3" className="dust dust--3 sprite">
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="0"
              ry="0"
              strokeWidth="5"
              strokeDasharray="0"
              strokeDashoffset="0"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="0.6"
              ry="0.08"
              strokeWidth="4.9"
              strokeDasharray="1.8"
              strokeDashoffset="0.4"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="1.2"
              ry="0.16"
              strokeWidth="4.8"
              strokeDasharray="3.6"
              strokeDashoffset="0.8"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="1.7999999999999998"
              ry="0.24"
              strokeWidth="4.7"
              strokeDasharray="5.4"
              strokeDashoffset="1.2000000000000002"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="2.4"
              ry="0.32"
              strokeWidth="4.6"
              strokeDasharray="7.2"
              strokeDashoffset="1.6"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="3"
              ry="0.4"
              strokeWidth="4.5"
              strokeDasharray="9"
              strokeDashoffset="2"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="3.5999999999999996"
              ry="0.48"
              strokeWidth="4.4"
              strokeDasharray="10.8"
              strokeDashoffset="2.4000000000000004"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="4.2"
              ry="0.56"
              strokeWidth="4.3"
              strokeDasharray="12.6"
              strokeDashoffset="2.8000000000000003"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="4.8"
              ry="0.64"
              strokeWidth="4.2"
              strokeDasharray="14.4"
              strokeDashoffset="3.2"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="5.3999999999999995"
              ry="0.72"
              strokeWidth="4.1"
              strokeDasharray="16.2"
              strokeDashoffset="3.6"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="6"
              ry="0.8"
              strokeWidth="4"
              strokeDasharray="18"
              strokeDashoffset="4"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="6.6"
              ry="0.88"
              strokeWidth="3.9"
              strokeDasharray="19.8"
              strokeDashoffset="4.4"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="7.199999999999999"
              ry="0.96"
              strokeWidth="3.8"
              strokeDasharray="21.6"
              strokeDashoffset="4.800000000000001"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="7.8"
              ry="1.04"
              strokeWidth="3.7"
              strokeDasharray="23.400000000000002"
              strokeDashoffset="5.2"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="8.4"
              ry="1.12"
              strokeWidth="3.5999999999999996"
              strokeDasharray="25.2"
              strokeDashoffset="5.6000000000000005"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="9"
              ry="1.2"
              strokeWidth="3.5"
              strokeDasharray="27"
              strokeDashoffset="6"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="9.6"
              ry="1.28"
              strokeWidth="3.4"
              strokeDasharray="28.8"
              strokeDashoffset="6.4"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="10.2"
              ry="1.36"
              strokeWidth="3.3"
              strokeDasharray="30.6"
              strokeDashoffset="6.800000000000001"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="10.799999999999999"
              ry="1.44"
              strokeWidth="3.2"
              strokeDasharray="32.4"
              strokeDashoffset="7.2"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="11.4"
              ry="1.52"
              strokeWidth="3.0999999999999996"
              strokeDasharray="34.2"
              strokeDashoffset="7.6000000000000005"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="12"
              ry="1.6"
              strokeWidth="3"
              strokeDasharray="36"
              strokeDashoffset="8"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="12.6"
              ry="1.68"
              strokeWidth="2.9"
              strokeDasharray="37.800000000000004"
              strokeDashoffset="8.4"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="13.2"
              ry="1.76"
              strokeWidth="2.8"
              strokeDasharray="39.6"
              strokeDashoffset="8.8"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="13.799999999999999"
              ry="1.84"
              strokeWidth="2.6999999999999997"
              strokeDasharray="41.4"
              strokeDashoffset="9.200000000000001"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="14.399999999999999"
              ry="1.92"
              strokeWidth="2.5999999999999996"
              strokeDasharray="43.2"
              strokeDashoffset="9.600000000000001"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="15"
              ry="2"
              strokeWidth="2.5"
              strokeDasharray="45"
              strokeDashoffset="10"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="15.6"
              ry="2.08"
              strokeWidth="2.4"
              strokeDasharray="46.800000000000004"
              strokeDashoffset="10.4"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="16.2"
              ry="2.16"
              strokeWidth="2.3"
              strokeDasharray="48.6"
              strokeDashoffset="10.8"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="16.8"
              ry="2.24"
              strokeWidth="2.1999999999999997"
              strokeDasharray="50.4"
              strokeDashoffset="11.200000000000001"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="17.4"
              ry="2.32"
              strokeWidth="2.0999999999999996"
              strokeDasharray="52.2"
              strokeDashoffset="11.600000000000001"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="18"
              ry="2.4"
              strokeWidth="2"
              strokeDasharray="54"
              strokeDashoffset="12"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="18.599999999999998"
              ry="2.48"
              strokeWidth="1.9"
              strokeDasharray="55.800000000000004"
              strokeDashoffset="12.4"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="19.2"
              ry="2.56"
              strokeWidth="1.7999999999999998"
              strokeDasharray="57.6"
              strokeDashoffset="12.8"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="19.8"
              ry="2.64"
              strokeWidth="1.6999999999999997"
              strokeDasharray="59.4"
              strokeDashoffset="13.200000000000001"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="20.4"
              ry="2.72"
              strokeWidth="1.5999999999999996"
              strokeDasharray="61.2"
              strokeDashoffset="13.600000000000001"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="21"
              ry="2.8000000000000003"
              strokeWidth="1.5"
              strokeDasharray="63"
              strokeDashoffset="14"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="21.599999999999998"
              ry="2.88"
              strokeWidth="1.4"
              strokeDasharray="64.8"
              strokeDashoffset="14.4"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="22.2"
              ry="2.96"
              strokeWidth="1.2999999999999998"
              strokeDasharray="66.60000000000001"
              strokeDashoffset="14.8"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="22.8"
              ry="3.04"
              strokeWidth="1.1999999999999997"
              strokeDasharray="68.4"
              strokeDashoffset="15.200000000000001"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="23.4"
              ry="3.12"
              strokeWidth="1.0999999999999996"
              strokeDasharray="70.2"
              strokeDashoffset="15.600000000000001"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="24"
              ry="3.2"
              strokeWidth="1"
              strokeDasharray="72"
              strokeDashoffset="16"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="24.599999999999998"
              ry="3.2800000000000002"
              strokeWidth="0.8999999999999995"
              strokeDasharray="73.8"
              strokeDashoffset="16.400000000000002"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="25.2"
              ry="3.36"
              strokeWidth="0.7999999999999998"
              strokeDasharray="75.60000000000001"
              strokeDashoffset="16.8"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="25.8"
              ry="3.44"
              strokeWidth="0.7000000000000002"
              strokeDasharray="77.4"
              strokeDashoffset="17.2"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="26.4"
              ry="3.52"
              strokeWidth="0.5999999999999996"
              strokeDasharray="79.2"
              strokeDashoffset="17.6"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="27"
              ry="3.6"
              strokeWidth="0.5"
              strokeDasharray="81"
              strokeDashoffset="18"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="27.599999999999998"
              ry="3.68"
              strokeWidth="0.39999999999999947"
              strokeDasharray="82.8"
              strokeDashoffset="18.400000000000002"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="28.2"
              ry="3.7600000000000002"
              strokeWidth="0.2999999999999998"
              strokeDasharray="84.60000000000001"
              strokeDashoffset="18.8"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="28.799999999999997"
              ry="3.84"
              strokeWidth="0.1999999999999993"
              strokeDasharray="86.4"
              strokeDashoffset="19.200000000000003"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
          <svg className="sprite__frame">
            <ellipse
              id="js-blob-circle-ellipse"
              cx="100"
              cy="10"
              rx="29.4"
              ry="3.92"
              strokeWidth="0.09999999999999964"
              strokeDasharray="88.2"
              strokeDashoffset="19.6"
              strokeLinecap="round"
              className="sprite__ellipse"
            ></ellipse>
          </svg>
        </div>
        <div id="js-content-inner" className="content__inner">
          <div className="project">
            <div className="project__img">
              <div id="js-shadow-wrap" className="project__shadow-wrap">
                <div id="js-shadow" className="project__shadow"></div>
              </div>
              <div className="image-ie"></div>
              <div className="image">
                <div className="scene">
                  <div className="shape cuboid-1 cub-1">
                    <div className="face ft">
                      <div className="photon-shader"></div>
                    </div>
                    <div className="face bk">
                      <div className="photon-shader"></div>
                    </div>
                    <div className="face rt">
                      <div className="photon-shader"></div>
                    </div>
                    <div className="face lt">
                      <div className="photon-shader"></div>
                    </div>
                    <div className="face bm">
                      <div className="photon-shader"></div>
                    </div>
                    <div className="face tp">
                      <div className="photon-shader"></div>
                    </div>
                    <div className="cr cr-0">
                      <div className="face side s0">
                        <div className="photon-shader"> </div>
                      </div>
                      <div className="face side s1">
                        <div className="photon-shader"></div>
                      </div>
                      <div className="face side s2">
                        <div className="photon-shader"></div>
                      </div>
                    </div>
                    <div className="cr cr-1">
                      <div className="face side s0">
                        <div className="photon-shader"></div>
                      </div>
                      <div className="face side s1">
                        <div className="photon-shader"></div>
                      </div>
                      <div className="face side s2">
                        <div className="photon-shader"></div>
                      </div>
                    </div>
                    <div className="cr cr-2">
                      <div className="face side s0">
                        <div className="photon-shader"></div>
                      </div>
                      <div className="face side s1">
                        <div className="photon-shader"></div>
                      </div>
                      <div className="face side s2">
                        <div className="photon-shader"></div>
                      </div>
                    </div>
                    <div className="cr cr-3">
                      <div className="face side s0">
                        <div className="photon-shader"></div>
                      </div>
                      <div className="face side s1">
                        <div className="photon-shader"></div>
                      </div>
                      <div className="face side s2">
                        <div className="photon-shader"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="js-text" className="project__text">
              <h2>Some project</h2>
              <p>
                This section is intended to represent some project but for now has dummy placeholder and points to mo ·
                js library.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="js-badge" className="badge"></div>
      <div id="js-wrapper" className="wrapper">
        <div id="scroller" className="particles">
          <div className="blob-circle-wrap">
            <div id="js-blob-circle" className="blob-circle sprite">
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
              <svg className="sprite__frame">
                <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" className="sprite__ellipse"></ellipse>
              </svg>
            </div>
          </div>
          <div id="js-particle-0" data-left="0" data-top="0" style={{ left: "0px", top: "0px" }} className="particle">
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-1"
            data-left="175"
            data-top="0"
            style={{ left: "175px", top: "0px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-2"
            data-left="350"
            data-top="0"
            style={{ left: "350px", top: "0px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-3"
            data-left="525"
            data-top="0"
            style={{ left: "525px", top: "0px" }}
            className="particle"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-4"
            data-left="700"
            data-top="0"
            style={{ left: "700px", top: "0px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-5"
            data-left="875"
            data-top="0"
            style={{ left: "875px", top: "0px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-6"
            data-left="1050"
            data-top="0"
            style={{ left: "1050px", top: "0px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-7"
            data-left="1225"
            data-top="0"
            style={{ left: "1225px", top: "0px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-8"
            data-left="1400"
            data-top="0"
            style={{ left: "1400px", top: "0px" }}
            className="particle"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-9"
            data-left="1575"
            data-top="0"
            style={{ left: "1575px", top: "0px" }}
            className="particle"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-10"
            data-left="1750"
            data-top="0"
            style={{ left: "1750px", top: "0px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-11"
            data-left="1925"
            data-top="0"
            style={{ left: "1925px", top: "0px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-12"
            data-left="2100"
            data-top="0"
            style={{ left: "2100px", top: "0px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-13"
            data-left="2275"
            data-top="0"
            style={{ left: "2275px", top: "0px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-14"
            data-left="2450"
            data-top="0"
            style={{ left: "2450px", top: "0px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-15"
            data-left="2625"
            data-top="0"
            style={{ left: "2625px", top: "0px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-16"
            data-left="2800"
            data-top="0"
            style={{ left: "2800px", top: "0px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-17"
            data-left="2975"
            data-top="0"
            style={{ left: "2975px", top: "0px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-18"
            data-left="3150"
            data-top="0"
            style={{ left: "3150px", top: "0px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-19"
            data-left="3325"
            data-top="0"
            style={{ left: "3325px", top: "0px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-20"
            data-left="3500"
            data-top="0"
            style={{ left: "3500px", top: "0px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-21"
            data-left="3675"
            data-top="0"
            style={{ left: "3675px", top: "0px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-22"
            data-left="3850"
            data-top="0"
            style={{ left: "3850px", top: "0px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-23"
            data-left="4025"
            data-top="0"
            style={{ left: "4025px", top: "0px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-0"
            data-left="87.5"
            data-top="137.5"
            style={{ left: "87.5px", top: "137.5px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-1"
            data-left="262.5"
            data-top="137.5"
            style={{ left: "262.5px", top: "137.5px" }}
            className="particle"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-2"
            data-left="437.5"
            data-top="137.5"
            style={{ left: "437.5px", top: "137.5px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-3"
            data-left="612.5"
            data-top="137.5"
            style={{ left: "612.5px", top: "137.5px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-4"
            data-left="787.5"
            data-top="137.5"
            style={{ left: "787.5px", top: "137.5px" }}
            className="particle"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-5"
            data-left="962.5"
            data-top="137.5"
            style={{ left: "962.5px", top: "137.5px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-6"
            data-left="1137.5"
            data-top="137.5"
            style={{ left: "1137.5px", top: "137.5px" }}
            className="particle"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-7"
            data-left="1312.5"
            data-top="137.5"
            style={{ left: "1312.5px", top: "137.5px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-8"
            data-left="1487.5"
            data-top="137.5"
            style={{ left: "1487.5px", top: "137.5px" }}
            className="particle"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-9"
            data-left="1662.5"
            data-top="137.5"
            style={{ left: "1662.5px", top: "137.5px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-10"
            data-left="1837.5"
            data-top="137.5"
            style={{ left: "1837.5px", top: "137.5px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-11"
            data-left="2012.5"
            data-top="137.5"
            style={{ left: "2012.5px", top: "137.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-12"
            data-left="2187.5"
            data-top="137.5"
            style={{ left: "2187.5px", top: "137.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-13"
            data-left="2362.5"
            data-top="137.5"
            style={{ left: "2362.5px", top: "137.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-14"
            data-left="2537.5"
            data-top="137.5"
            style={{ left: "2537.5px", top: "137.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-15"
            data-left="2712.5"
            data-top="137.5"
            style={{ left: "2712.5px", top: "137.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-16"
            data-left="2887.5"
            data-top="137.5"
            style={{ left: "2887.5px", top: "137.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-17"
            data-left="3062.5"
            data-top="137.5"
            style={{ left: "3062.5px", top: "137.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-18"
            data-left="3237.5"
            data-top="137.5"
            style={{ left: "3237.5px", top: "137.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-19"
            data-left="3412.5"
            data-top="137.5"
            style={{ left: "3412.5px", top: "137.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-20"
            data-left="3587.5"
            data-top="137.5"
            style={{ left: "3587.5px", top: "137.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-21"
            data-left="3762.5"
            data-top="137.5"
            style={{ left: "3762.5px", top: "137.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-22"
            data-left="3937.5"
            data-top="137.5"
            style={{ left: "3937.5px", top: "137.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-23"
            data-left="4112.5"
            data-top="137.5"
            style={{ left: "4112.5px", top: "137.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-0"
            data-left="0"
            data-top="275"
            style={{ left: "0px", top: "275px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-1"
            data-left="175"
            data-top="275"
            style={{ left: "175px", top: "275px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-2"
            data-left="350"
            data-top="275"
            style={{ left: "350px", top: "275px" }}
            className="particle"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-3"
            data-left="525"
            data-top="275"
            style={{ left: "525px", top: "275px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-4"
            data-left="700"
            data-top="275"
            style={{ left: "700px", top: "275px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-5"
            data-left="875"
            data-top="275"
            style={{ left: "875px", top: "275px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-6"
            data-left="1050"
            data-top="275"
            style={{ left: "1050px", top: "275px" }}
            className="particle"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-7"
            data-left="1225"
            data-top="275"
            style={{ left: "1225px", top: "275px" }}
            className="particle"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-8"
            data-left="1400"
            data-top="275"
            style={{ left: "1400px", top: "275px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-9"
            data-left="1575"
            data-top="275"
            style={{ left: "1575px", top: "275px" }}
            className="particle"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-10"
            data-left="1750"
            data-top="275"
            style={{ left: "1750px", top: "275px" }}
            className="particle"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-11"
            data-left="1925"
            data-top="275"
            style={{ left: "1925px", top: "275px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-12"
            data-left="2100"
            data-top="275"
            style={{ left: "2100px", top: "275px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-13"
            data-left="2275"
            data-top="275"
            style={{ left: "2275px", top: "275px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-14"
            data-left="2450"
            data-top="275"
            style={{ left: "2450px", top: "275px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-15"
            data-left="2625"
            data-top="275"
            style={{ left: "2625px", top: "275px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-16"
            data-left="2800"
            data-top="275"
            style={{ left: "2800px", top: "275px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-17"
            data-left="2975"
            data-top="275"
            style={{ left: "2975px", top: "275px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-18"
            data-left="3150"
            data-top="275"
            style={{ left: "3150px", top: "275px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-19"
            data-left="3325"
            data-top="275"
            style={{ left: "3325px", top: "275px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-20"
            data-left="3500"
            data-top="275"
            style={{ left: "3500px", top: "275px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-21"
            data-left="3675"
            data-top="275"
            style={{ left: "3675px", top: "275px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-22"
            data-left="3850"
            data-top="275"
            style={{ left: "3850px", top: "275px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-23"
            data-left="4025"
            data-top="275"
            style={{ left: "4025px", top: "275px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-0"
            data-left="87.5"
            data-top="412.5"
            style={{ left: "87.5px", top: "412.5px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-1"
            data-left="262.5"
            data-top="412.5"
            style={{ left: "262.5px", top: "412.5px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-2"
            data-left="437.5"
            data-top="412.5"
            style={{ left: "437.5px", top: "412.5px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-3"
            data-left="612.5"
            data-top="412.5"
            style={{ left: "612.5px", top: "412.5px" }}
            className="particle"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-4"
            data-left="787.5"
            data-top="412.5"
            style={{ left: "787.5px", top: "412.5px" }}
            className="particle"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-5"
            data-left="962.5"
            data-top="412.5"
            style={{ left: "962.5px", top: "412.5px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-6"
            data-left="1137.5"
            data-top="412.5"
            style={{ left: "1137.5px", top: "412.5px" }}
            className="particle"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-7"
            data-left="1312.5"
            data-top="412.5"
            style={{ left: "1312.5px", top: "412.5px" }}
            className="particle"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-8"
            data-left="1487.5"
            data-top="412.5"
            style={{ left: "1487.5px", top: "412.5px" }}
            className="particle"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-9"
            data-left="1662.5"
            data-top="412.5"
            style={{ left: "1662.5px", top: "412.5px" }}
            className="particle"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-10"
            data-left="1837.5"
            data-top="412.5"
            style={{ left: "1837.5px", top: "412.5px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-11"
            data-left="2012.5"
            data-top="412.5"
            style={{ left: "2012.5px", top: "412.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-12"
            data-left="2187.5"
            data-top="412.5"
            style={{ left: "2187.5px", top: "412.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-13"
            data-left="2362.5"
            data-top="412.5"
            style={{ left: "2362.5px", top: "412.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-14"
            data-left="2537.5"
            data-top="412.5"
            style={{ left: "2537.5px", top: "412.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-15"
            data-left="2712.5"
            data-top="412.5"
            style={{ left: "2712.5px", top: "412.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-16"
            data-left="2887.5"
            data-top="412.5"
            style={{ left: "2887.5px", top: "412.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-17"
            data-left="3062.5"
            data-top="412.5"
            style={{ left: "3062.5px", top: "412.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-18"
            data-left="3237.5"
            data-top="412.5"
            style={{ left: "3237.5px", top: "412.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-19"
            data-left="3412.5"
            data-top="412.5"
            style={{ left: "3412.5px", top: "412.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-20"
            data-left="3587.5"
            data-top="412.5"
            style={{ left: "3587.5px", top: "412.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-21"
            data-left="3762.5"
            data-top="412.5"
            style={{ left: "3762.5px", top: "412.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-22"
            data-left="3937.5"
            data-top="412.5"
            style={{ left: "3937.5px", top: "412.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-23"
            data-left="4112.5"
            data-top="412.5"
            style={{ left: "4112.5px", top: "412.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-0"
            data-left="0"
            data-top="550"
            style={{ left: "0px", top: "550px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-1"
            data-left="175"
            data-top="550"
            style={{ left: "175px", top: "550px" }}
            className="particle"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-2"
            data-left="350"
            data-top="550"
            style={{ left: "350px", top: "550px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-3"
            data-left="525"
            data-top="550"
            style={{ left: "525px", top: "550px" }}
            className="particle"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-4"
            data-left="700"
            data-top="550"
            style={{ left: "700px", top: "550px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-5"
            data-left="875"
            data-top="550"
            style={{ left: "875px", top: "550px" }}
            className="particle"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-6"
            data-left="1050"
            data-top="550"
            style={{ left: "1050px", top: "550px" }}
            className="particle"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-7"
            data-left="1225"
            data-top="550"
            style={{ left: "1225px", top: "550px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-8"
            data-left="1400"
            data-top="550"
            style={{ left: "1400px", top: "550px" }}
            className="particle"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-9"
            data-left="1575"
            data-top="550"
            style={{ left: "1575px", top: "550px" }}
            className="particle"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-10"
            data-left="1750"
            data-top="550"
            style={{ left: "1750px", top: "550px" }}
            className="particle"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-11"
            data-left="1925"
            data-top="550"
            style={{ left: "1925px", top: "550px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-12"
            data-left="2100"
            data-top="550"
            style={{ left: "2100px", top: "550px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-13"
            data-left="2275"
            data-top="550"
            style={{ left: "2275px", top: "550px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-14"
            data-left="2450"
            data-top="550"
            style={{ left: "2450px", top: "550px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-15"
            data-left="2625"
            data-top="550"
            style={{ left: "2625px", top: "550px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-16"
            data-left="2800"
            data-top="550"
            style={{ left: "2800px", top: "550px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-17"
            data-left="2975"
            data-top="550"
            style={{ left: "2975px", top: "550px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-18"
            data-left="3150"
            data-top="550"
            style={{ left: "3150px", top: "550px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-19"
            data-left="3325"
            data-top="550"
            style={{ left: "3325px", top: "550px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-20"
            data-left="3500"
            data-top="550"
            style={{ left: "3500px", top: "550px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-21"
            data-left="3675"
            data-top="550"
            style={{ left: "3675px", top: "550px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-22"
            data-left="3850"
            data-top="550"
            style={{ left: "3850px", top: "550px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-23"
            data-left="4025"
            data-top="550"
            style={{ left: "4025px", top: "550px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-0"
            data-left="87.5"
            data-top="687.5"
            style={{ left: "87.5px", top: "687.5px" }}
            className="particle"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-1"
            data-left="262.5"
            data-top="687.5"
            style={{ left: "262.5px", top: "687.5px" }}
            className="particle"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-2"
            data-left="437.5"
            data-top="687.5"
            style={{ left: "437.5px", top: "687.5px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-3"
            data-left="612.5"
            data-top="687.5"
            style={{ left: "612.5px", top: "687.5px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-4"
            data-left="787.5"
            data-top="687.5"
            style={{ left: "787.5px", top: "687.5px" }}
            className="particle"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-5"
            data-left="962.5"
            data-top="687.5"
            style={{ left: "962.5px", top: "687.5px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-6"
            data-left="1137.5"
            data-top="687.5"
            style={{ left: "1137.5px", top: "687.5px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-7"
            data-left="1312.5"
            data-top="687.5"
            style={{ left: "1312.5px", top: "687.5px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-8"
            data-left="1487.5"
            data-top="687.5"
            style={{ left: "1487.5px", top: "687.5px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-9"
            data-left="1662.5"
            data-top="687.5"
            style={{ left: "1662.5px", top: "687.5px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-10"
            data-left="1837.5"
            data-top="687.5"
            style={{ left: "1837.5px", top: "687.5px" }}
            className="particle"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-11"
            data-left="2012.5"
            data-top="687.5"
            style={{ left: "2012.5px", top: "687.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-12"
            data-left="2187.5"
            data-top="687.5"
            style={{ left: "2187.5px", top: "687.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-13"
            data-left="2362.5"
            data-top="687.5"
            style={{ left: "2362.5px", top: "687.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-14"
            data-left="2537.5"
            data-top="687.5"
            style={{ left: "2537.5px", top: "687.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-15"
            data-left="2712.5"
            data-top="687.5"
            style={{ left: "2712.5px", top: "687.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-16"
            data-left="2887.5"
            data-top="687.5"
            style={{ left: "2887.5px", top: "687.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-17"
            data-left="3062.5"
            data-top="687.5"
            style={{ left: "3062.5px", top: "687.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-18"
            data-left="3237.5"
            data-top="687.5"
            style={{ left: "3237.5px", top: "687.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-19"
            data-left="3412.5"
            data-top="687.5"
            style={{ left: "3412.5px", top: "687.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-20"
            data-left="3587.5"
            data-top="687.5"
            style={{ left: "3587.5px", top: "687.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-21"
            data-left="3762.5"
            data-top="687.5"
            style={{ left: "3762.5px", top: "687.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-22"
            data-left="3937.5"
            data-top="687.5"
            style={{ left: "3937.5px", top: "687.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-23"
            data-left="4112.5"
            data-top="687.5"
            style={{ left: "4112.5px", top: "687.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-0"
            data-left="0"
            data-top="825"
            style={{ left: "0px", top: "825px" }}
            className="particle"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-1"
            data-left="175"
            data-top="825"
            style={{ left: "175px", top: "825px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-2"
            data-left="350"
            data-top="825"
            style={{ left: "350px", top: "825px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-3"
            data-left="525"
            data-top="825"
            style={{ left: "525px", top: "825px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-4"
            data-left="700"
            data-top="825"
            style={{ left: "700px", top: "825px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-5"
            data-left="875"
            data-top="825"
            style={{ left: "875px", top: "825px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-6"
            data-left="1050"
            data-top="825"
            style={{ left: "1050px", top: "825px" }}
            className="particle"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-7"
            data-left="1225"
            data-top="825"
            style={{ left: "1225px", top: "825px" }}
            className="particle"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-8"
            data-left="1400"
            data-top="825"
            style={{ left: "1400px", top: "825px" }}
            className="particle"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-9"
            data-left="1575"
            data-top="825"
            style={{ left: "1575px", top: "825px" }}
            className="particle"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-10"
            data-left="1750"
            data-top="825"
            style={{ left: "1750px", top: "825px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-11"
            data-left="1925"
            data-top="825"
            style={{ left: "1925px", top: "825px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-12"
            data-left="2100"
            data-top="825"
            style={{ left: "2100px", top: "825px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-13"
            data-left="2275"
            data-top="825"
            style={{ left: "2275px", top: "825px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-14"
            data-left="2450"
            data-top="825"
            style={{ left: "2450px", top: "825px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-15"
            data-left="2625"
            data-top="825"
            style={{ left: "2625px", top: "825px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-16"
            data-left="2800"
            data-top="825"
            style={{ left: "2800px", top: "825px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-17"
            data-left="2975"
            data-top="825"
            style={{ left: "2975px", top: "825px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-18"
            data-left="3150"
            data-top="825"
            style={{ left: "3150px", top: "825px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-19"
            data-left="3325"
            data-top="825"
            style={{ left: "3325px", top: "825px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-20"
            data-left="3500"
            data-top="825"
            style={{ left: "3500px", top: "825px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-21"
            data-left="3675"
            data-top="825"
            style={{ left: "3675px", top: "825px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-22"
            data-left="3850"
            data-top="825"
            style={{ left: "3850px", top: "825px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-23"
            data-left="4025"
            data-top="825"
            style={{ left: "4025px", top: "825px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-0"
            data-left="87.5"
            data-top="962.5"
            style={{ left: "87.5px", top: "962.5px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-1"
            data-left="262.5"
            data-top="962.5"
            style={{ left: "262.5px", top: "962.5px" }}
            className="particle"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-2"
            data-left="437.5"
            data-top="962.5"
            style={{ left: "437.5px", top: "962.5px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-3"
            data-left="612.5"
            data-top="962.5"
            style={{ left: "612.5px", top: "962.5px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-4"
            data-left="787.5"
            data-top="962.5"
            style={{ left: "787.5px", top: "962.5px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-5"
            data-left="962.5"
            data-top="962.5"
            style={{ left: "962.5px", top: "962.5px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-6"
            data-left="1137.5"
            data-top="962.5"
            style={{ left: "1137.5px", top: "962.5px" }}
            className="particle"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-7"
            data-left="1312.5"
            data-top="962.5"
            style={{ left: "1312.5px", top: "962.5px" }}
            className="particle"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-8"
            data-left="1487.5"
            data-top="962.5"
            style={{ left: "1487.5px", top: "962.5px" }}
            className="particle"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-9"
            data-left="1662.5"
            data-top="962.5"
            style={{ left: "1662.5px", top: "962.5px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-10"
            data-left="1837.5"
            data-top="962.5"
            style={{ left: "1837.5px", top: "962.5px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-11"
            data-left="2012.5"
            data-top="962.5"
            style={{ left: "2012.5px", top: "962.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-12"
            data-left="2187.5"
            data-top="962.5"
            style={{ left: "2187.5px", top: "962.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-13"
            data-left="2362.5"
            data-top="962.5"
            style={{ left: "2362.5px", top: "962.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-14"
            data-left="2537.5"
            data-top="962.5"
            style={{ left: "2537.5px", top: "962.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-15"
            data-left="2712.5"
            data-top="962.5"
            style={{ left: "2712.5px", top: "962.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-16"
            data-left="2887.5"
            data-top="962.5"
            style={{ left: "2887.5px", top: "962.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-17"
            data-left="3062.5"
            data-top="962.5"
            style={{ left: "3062.5px", top: "962.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-18"
            data-left="3237.5"
            data-top="962.5"
            style={{ left: "3237.5px", top: "962.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-19"
            data-left="3412.5"
            data-top="962.5"
            style={{ left: "3412.5px", top: "962.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-20"
            data-left="3587.5"
            data-top="962.5"
            style={{ left: "3587.5px", top: "962.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-21"
            data-left="3762.5"
            data-top="962.5"
            style={{ left: "3762.5px", top: "962.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-22"
            data-left="3937.5"
            data-top="962.5"
            style={{ left: "3937.5px", top: "962.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-23"
            data-left="4112.5"
            data-top="962.5"
            style={{ left: "4112.5px", top: "962.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-0"
            data-left="0"
            data-top="1100"
            style={{ left: "0px", top: "1100px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-1"
            data-left="175"
            data-top="1100"
            style={{ left: "175px", top: "1100px" }}
            className="particle"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-2"
            data-left="350"
            data-top="1100"
            style={{ left: "350px", top: "1100px" }}
            className="particle"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-3"
            data-left="525"
            data-top="1100"
            style={{ left: "525px", top: "1100px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-4"
            data-left="700"
            data-top="1100"
            style={{ left: "700px", top: "1100px" }}
            className="particle"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-5"
            data-left="875"
            data-top="1100"
            style={{ left: "875px", top: "1100px" }}
            className="particle"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-6"
            data-left="1050"
            data-top="1100"
            style={{ left: "1050px", top: "1100px" }}
            className="particle"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-7"
            data-left="1225"
            data-top="1100"
            style={{ left: "1225px", top: "1100px" }}
            className="particle"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-8"
            data-left="1400"
            data-top="1100"
            style={{ left: "1400px", top: "1100px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-9"
            data-left="1575"
            data-top="1100"
            style={{ left: "1575px", top: "1100px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-10"
            data-left="1750"
            data-top="1100"
            style={{ left: "1750px", top: "1100px" }}
            className="particle"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-11"
            data-left="1925"
            data-top="1100"
            style={{ left: "1925px", top: "1100px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-12"
            data-left="2100"
            data-top="1100"
            style={{ left: "2100px", top: "1100px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-13"
            data-left="2275"
            data-top="1100"
            style={{ left: "2275px", top: "1100px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-14"
            data-left="2450"
            data-top="1100"
            style={{ left: "2450px", top: "1100px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-15"
            data-left="2625"
            data-top="1100"
            style={{ left: "2625px", top: "1100px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-16"
            data-left="2800"
            data-top="1100"
            style={{ left: "2800px", top: "1100px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-17"
            data-left="2975"
            data-top="1100"
            style={{ left: "2975px", top: "1100px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-18"
            data-left="3150"
            data-top="1100"
            style={{ left: "3150px", top: "1100px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-19"
            data-left="3325"
            data-top="1100"
            style={{ left: "3325px", top: "1100px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-20"
            data-left="3500"
            data-top="1100"
            style={{ left: "3500px", top: "1100px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-21"
            data-left="3675"
            data-top="1100"
            style={{ left: "3675px", top: "1100px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-22"
            data-left="3850"
            data-top="1100"
            style={{ left: "3850px", top: "1100px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-23"
            data-left="4025"
            data-top="1100"
            style={{ left: "4025px", top: "1100px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-0"
            data-left="87.5"
            data-top="1237.5"
            style={{ left: "87.5px", top: "1237.5px" }}
            className="particle"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-1"
            data-left="262.5"
            data-top="1237.5"
            style={{ left: "262.5px", top: "1237.5px" }}
            className="particle"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-2"
            data-left="437.5"
            data-top="1237.5"
            style={{ left: "437.5px", top: "1237.5px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-3"
            data-left="612.5"
            data-top="1237.5"
            style={{ left: "612.5px", top: "1237.5px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-4"
            data-left="787.5"
            data-top="1237.5"
            style={{ left: "787.5px", top: "1237.5px" }}
            className="particle"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-5"
            data-left="962.5"
            data-top="1237.5"
            style={{ left: "962.5px", top: "1237.5px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-6"
            data-left="1137.5"
            data-top="1237.5"
            style={{ left: "1137.5px", top: "1237.5px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-7"
            data-left="1312.5"
            data-top="1237.5"
            style={{ left: "1312.5px", top: "1237.5px" }}
            className="particle"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-8"
            data-left="1487.5"
            data-top="1237.5"
            style={{ left: "1487.5px", top: "1237.5px" }}
            className="particle"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-9"
            data-left="1662.5"
            data-top="1237.5"
            style={{ left: "1662.5px", top: "1237.5px" }}
            className="particle"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-10"
            data-left="1837.5"
            data-top="1237.5"
            style={{ left: "1837.5px", top: "1237.5px" }}
            className="particle"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-11"
            data-left="2012.5"
            data-top="1237.5"
            style={{ left: "2012.5px", top: "1237.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-12"
            data-left="2187.5"
            data-top="1237.5"
            style={{ left: "2187.5px", top: "1237.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-13"
            data-left="2362.5"
            data-top="1237.5"
            style={{ left: "2362.5px", top: "1237.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-14"
            data-left="2537.5"
            data-top="1237.5"
            style={{ left: "2537.5px", top: "1237.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-15"
            data-left="2712.5"
            data-top="1237.5"
            style={{ left: "2712.5px", top: "1237.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-16"
            data-left="2887.5"
            data-top="1237.5"
            style={{ left: "2887.5px", top: "1237.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-17"
            data-left="3062.5"
            data-top="1237.5"
            style={{ left: "3062.5px", top: "1237.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-18"
            data-left="3237.5"
            data-top="1237.5"
            style={{ left: "3237.5px", top: "1237.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-19"
            data-left="3412.5"
            data-top="1237.5"
            style={{ left: "3412.5px", top: "1237.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-20"
            data-left="3587.5"
            data-top="1237.5"
            style={{ left: "3587.5px", top: "1237.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-21"
            data-left="3762.5"
            data-top="1237.5"
            style={{ left: "3762.5px", top: "1237.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-22"
            data-left="3937.5"
            data-top="1237.5"
            style={{ left: "3937.5px", top: "1237.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-23"
            data-left="4112.5"
            data-top="1237.5"
            style={{ left: "4112.5px", top: "1237.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-0"
            data-left="0"
            data-top="1375"
            style={{ left: "0px", top: "1375px" }}
            className="particle"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-1"
            data-left="175"
            data-top="1375"
            style={{ left: "175px", top: "1375px" }}
            className="particle"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-2"
            data-left="350"
            data-top="1375"
            style={{ left: "350px", top: "1375px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-3"
            data-left="525"
            data-top="1375"
            style={{ left: "525px", top: "1375px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-4"
            data-left="700"
            data-top="1375"
            style={{ left: "700px", top: "1375px" }}
            className="particle"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-5"
            data-left="875"
            data-top="1375"
            style={{ left: "875px", top: "1375px" }}
            className="particle"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-6"
            data-left="1050"
            data-top="1375"
            style={{ left: "1050px", top: "1375px" }}
            className="particle"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-7"
            data-left="1225"
            data-top="1375"
            style={{ left: "1225px", top: "1375px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-8"
            data-left="1400"
            data-top="1375"
            style={{ left: "1400px", top: "1375px" }}
            className="particle"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-9"
            data-left="1575"
            data-top="1375"
            style={{ left: "1575px", top: "1375px" }}
            className="particle"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-10"
            data-left="1750"
            data-top="1375"
            style={{ left: "1750px", top: "1375px" }}
            className="particle"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-11"
            data-left="1925"
            data-top="1375"
            style={{ left: "1925px", top: "1375px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-12"
            data-left="2100"
            data-top="1375"
            style={{ left: "2100px", top: "1375px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-13"
            data-left="2275"
            data-top="1375"
            style={{ left: "2275px", top: "1375px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-14"
            data-left="2450"
            data-top="1375"
            style={{ left: "2450px", top: "1375px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-15"
            data-left="2625"
            data-top="1375"
            style={{ left: "2625px", top: "1375px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-16"
            data-left="2800"
            data-top="1375"
            style={{ left: "2800px", top: "1375px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-17"
            data-left="2975"
            data-top="1375"
            style={{ left: "2975px", top: "1375px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-18"
            data-left="3150"
            data-top="1375"
            style={{ left: "3150px", top: "1375px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-19"
            data-left="3325"
            data-top="1375"
            style={{ left: "3325px", top: "1375px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-20"
            data-left="3500"
            data-top="1375"
            style={{ left: "3500px", top: "1375px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-21"
            data-left="3675"
            data-top="1375"
            style={{ left: "3675px", top: "1375px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-22"
            data-left="3850"
            data-top="1375"
            style={{ left: "3850px", top: "1375px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-23"
            data-left="4025"
            data-top="1375"
            style={{ left: "4025px", top: "1375px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-0"
            data-left="87.5"
            data-top="1512.5"
            style={{ left: "87.5px", top: "1512.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-1"
            data-left="262.5"
            data-top="1512.5"
            style={{ left: "262.5px", top: "1512.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-2"
            data-left="437.5"
            data-top="1512.5"
            style={{ left: "437.5px", top: "1512.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-3"
            data-left="612.5"
            data-top="1512.5"
            style={{ left: "612.5px", top: "1512.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-4"
            data-left="787.5"
            data-top="1512.5"
            style={{ left: "787.5px", top: "1512.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-5"
            data-left="962.5"
            data-top="1512.5"
            style={{ left: "962.5px", top: "1512.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-6"
            data-left="1137.5"
            data-top="1512.5"
            style={{ left: "1137.5px", top: "1512.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-7"
            data-left="1312.5"
            data-top="1512.5"
            style={{ left: "1312.5px", top: "1512.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-8"
            data-left="1487.5"
            data-top="1512.5"
            style={{ left: "1487.5px", top: "1512.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-9"
            data-left="1662.5"
            data-top="1512.5"
            style={{ left: "1662.5px", top: "1512.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-10"
            data-left="1837.5"
            data-top="1512.5"
            style={{ left: "1837.5px", top: "1512.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-11"
            data-left="2012.5"
            data-top="1512.5"
            style={{ left: "2012.5px", top: "1512.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-12"
            data-left="2187.5"
            data-top="1512.5"
            style={{ left: "2187.5px", top: "1512.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-13"
            data-left="2362.5"
            data-top="1512.5"
            style={{ left: "2362.5px", top: "1512.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-14"
            data-left="2537.5"
            data-top="1512.5"
            style={{ left: "2537.5px", top: "1512.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-15"
            data-left="2712.5"
            data-top="1512.5"
            style={{ left: "2712.5px", top: "1512.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-16"
            data-left="2887.5"
            data-top="1512.5"
            style={{ left: "2887.5px", top: "1512.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-17"
            data-left="3062.5"
            data-top="1512.5"
            style={{ left: "3062.5px", top: "1512.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-18"
            data-left="3237.5"
            data-top="1512.5"
            style={{ left: "3237.5px", top: "1512.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-19"
            data-left="3412.5"
            data-top="1512.5"
            style={{ left: "3412.5px", top: "1512.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-20"
            data-left="3587.5"
            data-top="1512.5"
            style={{ left: "3587.5px", top: "1512.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-21"
            data-left="3762.5"
            data-top="1512.5"
            style={{ left: "3762.5px", top: "1512.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-22"
            data-left="3937.5"
            data-top="1512.5"
            style={{ left: "3937.5px", top: "1512.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-23"
            data-left="4112.5"
            data-top="1512.5"
            style={{ left: "4112.5px", top: "1512.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-0"
            data-left="0"
            data-top="1650"
            style={{ left: "0px", top: "1650px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-1"
            data-left="175"
            data-top="1650"
            style={{ left: "175px", top: "1650px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-2"
            data-left="350"
            data-top="1650"
            style={{ left: "350px", top: "1650px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-3"
            data-left="525"
            data-top="1650"
            style={{ left: "525px", top: "1650px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-4"
            data-left="700"
            data-top="1650"
            style={{ left: "700px", top: "1650px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-5"
            data-left="875"
            data-top="1650"
            style={{ left: "875px", top: "1650px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-6"
            data-left="1050"
            data-top="1650"
            style={{ left: "1050px", top: "1650px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-7"
            data-left="1225"
            data-top="1650"
            style={{ left: "1225px", top: "1650px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-8"
            data-left="1400"
            data-top="1650"
            style={{ left: "1400px", top: "1650px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-9"
            data-left="1575"
            data-top="1650"
            style={{ left: "1575px", top: "1650px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-10"
            data-left="1750"
            data-top="1650"
            style={{ left: "1750px", top: "1650px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-11"
            data-left="1925"
            data-top="1650"
            style={{ left: "1925px", top: "1650px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-12"
            data-left="2100"
            data-top="1650"
            style={{ left: "2100px", top: "1650px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-13"
            data-left="2275"
            data-top="1650"
            style={{ left: "2275px", top: "1650px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-14"
            data-left="2450"
            data-top="1650"
            style={{ left: "2450px", top: "1650px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-15"
            data-left="2625"
            data-top="1650"
            style={{ left: "2625px", top: "1650px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-16"
            data-left="2800"
            data-top="1650"
            style={{ left: "2800px", top: "1650px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-17"
            data-left="2975"
            data-top="1650"
            style={{ left: "2975px", top: "1650px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-18"
            data-left="3150"
            data-top="1650"
            style={{ left: "3150px", top: "1650px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-19"
            data-left="3325"
            data-top="1650"
            style={{ left: "3325px", top: "1650px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-20"
            data-left="3500"
            data-top="1650"
            style={{ left: "3500px", top: "1650px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-21"
            data-left="3675"
            data-top="1650"
            style={{ left: "3675px", top: "1650px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-22"
            data-left="3850"
            data-top="1650"
            style={{ left: "3850px", top: "1650px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-23"
            data-left="4025"
            data-top="1650"
            style={{ left: "4025px", top: "1650px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-0"
            data-left="87.5"
            data-top="1787.5"
            style={{ left: "87.5px", top: "1787.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-1"
            data-left="262.5"
            data-top="1787.5"
            style={{ left: "262.5px", top: "1787.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-2"
            data-left="437.5"
            data-top="1787.5"
            style={{ left: "437.5px", top: "1787.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-3"
            data-left="612.5"
            data-top="1787.5"
            style={{ left: "612.5px", top: "1787.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-4"
            data-left="787.5"
            data-top="1787.5"
            style={{ left: "787.5px", top: "1787.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-5"
            data-left="962.5"
            data-top="1787.5"
            style={{ left: "962.5px", top: "1787.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-6"
            data-left="1137.5"
            data-top="1787.5"
            style={{ left: "1137.5px", top: "1787.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-7"
            data-left="1312.5"
            data-top="1787.5"
            style={{ left: "1312.5px", top: "1787.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-8"
            data-left="1487.5"
            data-top="1787.5"
            style={{ left: "1487.5px", top: "1787.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-9"
            data-left="1662.5"
            data-top="1787.5"
            style={{ left: "1662.5px", top: "1787.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-10"
            data-left="1837.5"
            data-top="1787.5"
            style={{ left: "1837.5px", top: "1787.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-11"
            data-left="2012.5"
            data-top="1787.5"
            style={{ left: "2012.5px", top: "1787.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-12"
            data-left="2187.5"
            data-top="1787.5"
            style={{ left: "2187.5px", top: "1787.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-13"
            data-left="2362.5"
            data-top="1787.5"
            style={{ left: "2362.5px", top: "1787.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-14"
            data-left="2537.5"
            data-top="1787.5"
            style={{ left: "2537.5px", top: "1787.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-15"
            data-left="2712.5"
            data-top="1787.5"
            style={{ left: "2712.5px", top: "1787.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-16"
            data-left="2887.5"
            data-top="1787.5"
            style={{ left: "2887.5px", top: "1787.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-17"
            data-left="3062.5"
            data-top="1787.5"
            style={{ left: "3062.5px", top: "1787.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-18"
            data-left="3237.5"
            data-top="1787.5"
            style={{ left: "3237.5px", top: "1787.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-19"
            data-left="3412.5"
            data-top="1787.5"
            style={{ left: "3412.5px", top: "1787.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-20"
            data-left="3587.5"
            data-top="1787.5"
            style={{ left: "3587.5px", top: "1787.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-21"
            data-left="3762.5"
            data-top="1787.5"
            style={{ left: "3762.5px", top: "1787.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-22"
            data-left="3937.5"
            data-top="1787.5"
            style={{ left: "3937.5px", top: "1787.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-23"
            data-left="4112.5"
            data-top="1787.5"
            style={{ left: "4112.5px", top: "1787.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-0"
            data-left="0"
            data-top="1925"
            style={{ left: "0px", top: "1925px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-1"
            data-left="175"
            data-top="1925"
            style={{ left: "175px", top: "1925px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-2"
            data-left="350"
            data-top="1925"
            style={{ left: "350px", top: "1925px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-3"
            data-left="525"
            data-top="1925"
            style={{ left: "525px", top: "1925px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-4"
            data-left="700"
            data-top="1925"
            style={{ left: "700px", top: "1925px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-5"
            data-left="875"
            data-top="1925"
            style={{ left: "875px", top: "1925px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-6"
            data-left="1050"
            data-top="1925"
            style={{ left: "1050px", top: "1925px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-7"
            data-left="1225"
            data-top="1925"
            style={{ left: "1225px", top: "1925px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-8"
            data-left="1400"
            data-top="1925"
            style={{ left: "1400px", top: "1925px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-9"
            data-left="1575"
            data-top="1925"
            style={{ left: "1575px", top: "1925px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-10"
            data-left="1750"
            data-top="1925"
            style={{ left: "1750px", top: "1925px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-11"
            data-left="1925"
            data-top="1925"
            style={{ left: "1925px", top: "1925px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-12"
            data-left="2100"
            data-top="1925"
            style={{ left: "2100px", top: "1925px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-13"
            data-left="2275"
            data-top="1925"
            style={{ left: "2275px", top: "1925px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-14"
            data-left="2450"
            data-top="1925"
            style={{ left: "2450px", top: "1925px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-15"
            data-left="2625"
            data-top="1925"
            style={{ left: "2625px", top: "1925px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-16"
            data-left="2800"
            data-top="1925"
            style={{ left: "2800px", top: "1925px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-17"
            data-left="2975"
            data-top="1925"
            style={{ left: "2975px", top: "1925px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-18"
            data-left="3150"
            data-top="1925"
            style={{ left: "3150px", top: "1925px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-19"
            data-left="3325"
            data-top="1925"
            style={{ left: "3325px", top: "1925px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-20"
            data-left="3500"
            data-top="1925"
            style={{ left: "3500px", top: "1925px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-21"
            data-left="3675"
            data-top="1925"
            style={{ left: "3675px", top: "1925px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-22"
            data-left="3850"
            data-top="1925"
            style={{ left: "3850px", top: "1925px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-23"
            data-left="4025"
            data-top="1925"
            style={{ left: "4025px", top: "1925px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-0"
            data-left="87.5"
            data-top="2062.5"
            style={{ left: "87.5px", top: "2062.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-1"
            data-left="262.5"
            data-top="2062.5"
            style={{ left: "262.5px", top: "2062.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-2"
            data-left="437.5"
            data-top="2062.5"
            style={{ left: "437.5px", top: "2062.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-3"
            data-left="612.5"
            data-top="2062.5"
            style={{ left: "612.5px", top: "2062.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-4"
            data-left="787.5"
            data-top="2062.5"
            style={{ left: "787.5px", top: "2062.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-5"
            data-left="962.5"
            data-top="2062.5"
            style={{ left: "962.5px", top: "2062.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-6"
            data-left="1137.5"
            data-top="2062.5"
            style={{ left: "1137.5px", top: "2062.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-7"
            data-left="1312.5"
            data-top="2062.5"
            style={{ left: "1312.5px", top: "2062.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-8"
            data-left="1487.5"
            data-top="2062.5"
            style={{ left: "1487.5px", top: "2062.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-9"
            data-left="1662.5"
            data-top="2062.5"
            style={{ left: "1662.5px", top: "2062.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-10"
            data-left="1837.5"
            data-top="2062.5"
            style={{ left: "1837.5px", top: "2062.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-11"
            data-left="2012.5"
            data-top="2062.5"
            style={{ left: "2012.5px", top: "2062.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-12"
            data-left="2187.5"
            data-top="2062.5"
            style={{ left: "2187.5px", top: "2062.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-13"
            data-left="2362.5"
            data-top="2062.5"
            style={{ left: "2362.5px", top: "2062.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-14"
            data-left="2537.5"
            data-top="2062.5"
            style={{ left: "2537.5px", top: "2062.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-15"
            data-left="2712.5"
            data-top="2062.5"
            style={{ left: "2712.5px", top: "2062.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-16"
            data-left="2887.5"
            data-top="2062.5"
            style={{ left: "2887.5px", top: "2062.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-17"
            data-left="3062.5"
            data-top="2062.5"
            style={{ left: "3062.5px", top: "2062.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-18"
            data-left="3237.5"
            data-top="2062.5"
            style={{ left: "3237.5px", top: "2062.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-19"
            data-left="3412.5"
            data-top="2062.5"
            style={{ left: "3412.5px", top: "2062.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-20"
            data-left="3587.5"
            data-top="2062.5"
            style={{ left: "3587.5px", top: "2062.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-21"
            data-left="3762.5"
            data-top="2062.5"
            style={{ left: "3762.5px", top: "2062.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-22"
            data-left="3937.5"
            data-top="2062.5"
            style={{ left: "3937.5px", top: "2062.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-23"
            data-left="4112.5"
            data-top="2062.5"
            style={{ left: "4112.5px", top: "2062.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-0"
            data-left="0"
            data-top="2200"
            style={{ left: "0px", top: "2200px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-1"
            data-left="175"
            data-top="2200"
            style={{ left: "175px", top: "2200px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-2"
            data-left="350"
            data-top="2200"
            style={{ left: "350px", top: "2200px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-3"
            data-left="525"
            data-top="2200"
            style={{ left: "525px", top: "2200px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-4"
            data-left="700"
            data-top="2200"
            style={{ left: "700px", top: "2200px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-5"
            data-left="875"
            data-top="2200"
            style={{ left: "875px", top: "2200px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-6"
            data-left="1050"
            data-top="2200"
            style={{ left: "1050px", top: "2200px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-7"
            data-left="1225"
            data-top="2200"
            style={{ left: "1225px", top: "2200px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-8"
            data-left="1400"
            data-top="2200"
            style={{ left: "1400px", top: "2200px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-9"
            data-left="1575"
            data-top="2200"
            style={{ left: "1575px", top: "2200px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-10"
            data-left="1750"
            data-top="2200"
            style={{ left: "1750px", top: "2200px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-11"
            data-left="1925"
            data-top="2200"
            style={{ left: "1925px", top: "2200px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-12"
            data-left="2100"
            data-top="2200"
            style={{ left: "2100px", top: "2200px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-13"
            data-left="2275"
            data-top="2200"
            style={{ left: "2275px", top: "2200px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-14"
            data-left="2450"
            data-top="2200"
            style={{ left: "2450px", top: "2200px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-15"
            data-left="2625"
            data-top="2200"
            style={{ left: "2625px", top: "2200px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-16"
            data-left="2800"
            data-top="2200"
            style={{ left: "2800px", top: "2200px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-17"
            data-left="2975"
            data-top="2200"
            style={{ left: "2975px", top: "2200px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-18"
            data-left="3150"
            data-top="2200"
            style={{ left: "3150px", top: "2200px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-19"
            data-left="3325"
            data-top="2200"
            style={{ left: "3325px", top: "2200px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-20"
            data-left="3500"
            data-top="2200"
            style={{ left: "3500px", top: "2200px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-21"
            data-left="3675"
            data-top="2200"
            style={{ left: "3675px", top: "2200px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-22"
            data-left="3850"
            data-top="2200"
            style={{ left: "3850px", top: "2200px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-23"
            data-left="4025"
            data-top="2200"
            style={{ left: "4025px", top: "2200px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-0"
            data-left="87.5"
            data-top="2337.5"
            style={{ left: "87.5px", top: "2337.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-1"
            data-left="262.5"
            data-top="2337.5"
            style={{ left: "262.5px", top: "2337.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-2"
            data-left="437.5"
            data-top="2337.5"
            style={{ left: "437.5px", top: "2337.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-3"
            data-left="612.5"
            data-top="2337.5"
            style={{ left: "612.5px", top: "2337.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-4"
            data-left="787.5"
            data-top="2337.5"
            style={{ left: "787.5px", top: "2337.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-5"
            data-left="962.5"
            data-top="2337.5"
            style={{ left: "962.5px", top: "2337.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-6"
            data-left="1137.5"
            data-top="2337.5"
            style={{ left: "1137.5px", top: "2337.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-7"
            data-left="1312.5"
            data-top="2337.5"
            style={{ left: "1312.5px", top: "2337.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-8"
            data-left="1487.5"
            data-top="2337.5"
            style={{ left: "1487.5px", top: "2337.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-9"
            data-left="1662.5"
            data-top="2337.5"
            style={{ left: "1662.5px", top: "2337.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-10"
            data-left="1837.5"
            data-top="2337.5"
            style={{ left: "1837.5px", top: "2337.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-11"
            data-left="2012.5"
            data-top="2337.5"
            style={{ left: "2012.5px", top: "2337.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-12"
            data-left="2187.5"
            data-top="2337.5"
            style={{ left: "2187.5px", top: "2337.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-13"
            data-left="2362.5"
            data-top="2337.5"
            style={{ left: "2362.5px", top: "2337.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-14"
            data-left="2537.5"
            data-top="2337.5"
            style={{ left: "2537.5px", top: "2337.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-15"
            data-left="2712.5"
            data-top="2337.5"
            style={{ left: "2712.5px", top: "2337.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-16"
            data-left="2887.5"
            data-top="2337.5"
            style={{ left: "2887.5px", top: "2337.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-17"
            data-left="3062.5"
            data-top="2337.5"
            style={{ left: "3062.5px", top: "2337.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-18"
            data-left="3237.5"
            data-top="2337.5"
            style={{ left: "3237.5px", top: "2337.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-19"
            data-left="3412.5"
            data-top="2337.5"
            style={{ left: "3412.5px", top: "2337.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-20"
            data-left="3587.5"
            data-top="2337.5"
            style={{ left: "3587.5px", top: "2337.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-21"
            data-left="3762.5"
            data-top="2337.5"
            style={{ left: "3762.5px", top: "2337.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-22"
            data-left="3937.5"
            data-top="2337.5"
            style={{ left: "3937.5px", top: "2337.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-23"
            data-left="4112.5"
            data-top="2337.5"
            style={{ left: "4112.5px", top: "2337.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-0"
            data-left="0"
            data-top="2475"
            style={{ left: "0px", top: "2475px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-1"
            data-left="175"
            data-top="2475"
            style={{ left: "175px", top: "2475px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-2"
            data-left="350"
            data-top="2475"
            style={{ left: "350px", top: "2475px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-3"
            data-left="525"
            data-top="2475"
            style={{ left: "525px", top: "2475px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-4"
            data-left="700"
            data-top="2475"
            style={{ left: "700px", top: "2475px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-5"
            data-left="875"
            data-top="2475"
            style={{ left: "875px", top: "2475px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-6"
            data-left="1050"
            data-top="2475"
            style={{ left: "1050px", top: "2475px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-7"
            data-left="1225"
            data-top="2475"
            style={{ left: "1225px", top: "2475px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-8"
            data-left="1400"
            data-top="2475"
            style={{ left: "1400px", top: "2475px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-9"
            data-left="1575"
            data-top="2475"
            style={{ left: "1575px", top: "2475px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-10"
            data-left="1750"
            data-top="2475"
            style={{ left: "1750px", top: "2475px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-11"
            data-left="1925"
            data-top="2475"
            style={{ left: "1925px", top: "2475px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-12"
            data-left="2100"
            data-top="2475"
            style={{ left: "2100px", top: "2475px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-13"
            data-left="2275"
            data-top="2475"
            style={{ left: "2275px", top: "2475px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-14"
            data-left="2450"
            data-top="2475"
            style={{ left: "2450px", top: "2475px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-15"
            data-left="2625"
            data-top="2475"
            style={{ left: "2625px", top: "2475px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-16"
            data-left="2800"
            data-top="2475"
            style={{ left: "2800px", top: "2475px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-17"
            data-left="2975"
            data-top="2475"
            style={{ left: "2975px", top: "2475px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-18"
            data-left="3150"
            data-top="2475"
            style={{ left: "3150px", top: "2475px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-19"
            data-left="3325"
            data-top="2475"
            style={{ left: "3325px", top: "2475px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-20"
            data-left="3500"
            data-top="2475"
            style={{ left: "3500px", top: "2475px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-21"
            data-left="3675"
            data-top="2475"
            style={{ left: "3675px", top: "2475px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-22"
            data-left="3850"
            data-top="2475"
            style={{ left: "3850px", top: "2475px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-23"
            data-left="4025"
            data-top="2475"
            style={{ left: "4025px", top: "2475px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-0"
            data-left="87.5"
            data-top="2612.5"
            style={{ left: "87.5px", top: "2612.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-1"
            data-left="262.5"
            data-top="2612.5"
            style={{ left: "262.5px", top: "2612.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-2"
            data-left="437.5"
            data-top="2612.5"
            style={{ left: "437.5px", top: "2612.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-3"
            data-left="612.5"
            data-top="2612.5"
            style={{ left: "612.5px", top: "2612.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-4"
            data-left="787.5"
            data-top="2612.5"
            style={{ left: "787.5px", top: "2612.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-5"
            data-left="962.5"
            data-top="2612.5"
            style={{ left: "962.5px", top: "2612.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-6"
            data-left="1137.5"
            data-top="2612.5"
            style={{ left: "1137.5px", top: "2612.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-7"
            data-left="1312.5"
            data-top="2612.5"
            style={{ left: "1312.5px", top: "2612.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-8"
            data-left="1487.5"
            data-top="2612.5"
            style={{ left: "1487.5px", top: "2612.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-9"
            data-left="1662.5"
            data-top="2612.5"
            style={{ left: "1662.5px", top: "2612.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-10"
            data-left="1837.5"
            data-top="2612.5"
            style={{ left: "1837.5px", top: "2612.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-11"
            data-left="2012.5"
            data-top="2612.5"
            style={{ left: "2012.5px", top: "2612.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-12"
            data-left="2187.5"
            data-top="2612.5"
            style={{ left: "2187.5px", top: "2612.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-13"
            data-left="2362.5"
            data-top="2612.5"
            style={{ left: "2362.5px", top: "2612.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-14"
            data-left="2537.5"
            data-top="2612.5"
            style={{ left: "2537.5px", top: "2612.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-15"
            data-left="2712.5"
            data-top="2612.5"
            style={{ left: "2712.5px", top: "2612.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-16"
            data-left="2887.5"
            data-top="2612.5"
            style={{ left: "2887.5px", top: "2612.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-17"
            data-left="3062.5"
            data-top="2612.5"
            style={{ left: "3062.5px", top: "2612.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-18"
            data-left="3237.5"
            data-top="2612.5"
            style={{ left: "3237.5px", top: "2612.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-19"
            data-left="3412.5"
            data-top="2612.5"
            style={{ left: "3412.5px", top: "2612.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-20"
            data-left="3587.5"
            data-top="2612.5"
            style={{ left: "3587.5px", top: "2612.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-21"
            data-left="3762.5"
            data-top="2612.5"
            style={{ left: "3762.5px", top: "2612.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-22"
            data-left="3937.5"
            data-top="2612.5"
            style={{ left: "3937.5px", top: "2612.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-23"
            data-left="4112.5"
            data-top="2612.5"
            style={{ left: "4112.5px", top: "2612.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-0"
            data-left="0"
            data-top="2750"
            style={{ left: "0px", top: "2750px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-1"
            data-left="175"
            data-top="2750"
            style={{ left: "175px", top: "2750px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-2"
            data-left="350"
            data-top="2750"
            style={{ left: "350px", top: "2750px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-3"
            data-left="525"
            data-top="2750"
            style={{ left: "525px", top: "2750px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-4"
            data-left="700"
            data-top="2750"
            style={{ left: "700px", top: "2750px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-5"
            data-left="875"
            data-top="2750"
            style={{ left: "875px", top: "2750px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-6"
            data-left="1050"
            data-top="2750"
            style={{ left: "1050px", top: "2750px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-7"
            data-left="1225"
            data-top="2750"
            style={{ left: "1225px", top: "2750px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-8"
            data-left="1400"
            data-top="2750"
            style={{ left: "1400px", top: "2750px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-9"
            data-left="1575"
            data-top="2750"
            style={{ left: "1575px", top: "2750px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-10"
            data-left="1750"
            data-top="2750"
            style={{ left: "1750px", top: "2750px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-11"
            data-left="1925"
            data-top="2750"
            style={{ left: "1925px", top: "2750px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-12"
            data-left="2100"
            data-top="2750"
            style={{ left: "2100px", top: "2750px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-13"
            data-left="2275"
            data-top="2750"
            style={{ left: "2275px", top: "2750px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-14"
            data-left="2450"
            data-top="2750"
            style={{ left: "2450px", top: "2750px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-15"
            data-left="2625"
            data-top="2750"
            style={{ left: "2625px", top: "2750px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-16"
            data-left="2800"
            data-top="2750"
            style={{ left: "2800px", top: "2750px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-17"
            data-left="2975"
            data-top="2750"
            style={{ left: "2975px", top: "2750px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-18"
            data-left="3150"
            data-top="2750"
            style={{ left: "3150px", top: "2750px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-19"
            data-left="3325"
            data-top="2750"
            style={{ left: "3325px", top: "2750px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-20"
            data-left="3500"
            data-top="2750"
            style={{ left: "3500px", top: "2750px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-21"
            data-left="3675"
            data-top="2750"
            style={{ left: "3675px", top: "2750px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-22"
            data-left="3850"
            data-top="2750"
            style={{ left: "3850px", top: "2750px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-23"
            data-left="4025"
            data-top="2750"
            style={{ left: "4025px", top: "2750px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-0"
            data-left="87.5"
            data-top="2887.5"
            style={{ left: "87.5px", top: "2887.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-1"
            data-left="262.5"
            data-top="2887.5"
            style={{ left: "262.5px", top: "2887.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-2"
            data-left="437.5"
            data-top="2887.5"
            style={{ left: "437.5px", top: "2887.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-3"
            data-left="612.5"
            data-top="2887.5"
            style={{ left: "612.5px", top: "2887.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-4"
            data-left="787.5"
            data-top="2887.5"
            style={{ left: "787.5px", top: "2887.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-5"
            data-left="962.5"
            data-top="2887.5"
            style={{ left: "962.5px", top: "2887.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-6"
            data-left="1137.5"
            data-top="2887.5"
            style={{ left: "1137.5px", top: "2887.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-7"
            data-left="1312.5"
            data-top="2887.5"
            style={{ left: "1312.5px", top: "2887.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-8"
            data-left="1487.5"
            data-top="2887.5"
            style={{ left: "1487.5px", top: "2887.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-9"
            data-left="1662.5"
            data-top="2887.5"
            style={{ left: "1662.5px", top: "2887.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-10"
            data-left="1837.5"
            data-top="2887.5"
            style={{ left: "1837.5px", top: "2887.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-11"
            data-left="2012.5"
            data-top="2887.5"
            style={{ left: "2012.5px", top: "2887.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-12"
            data-left="2187.5"
            data-top="2887.5"
            style={{ left: "2187.5px", top: "2887.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-13"
            data-left="2362.5"
            data-top="2887.5"
            style={{ left: "2362.5px", top: "2887.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-14"
            data-left="2537.5"
            data-top="2887.5"
            style={{ left: "2537.5px", top: "2887.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-15"
            data-left="2712.5"
            data-top="2887.5"
            style={{ left: "2712.5px", top: "2887.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-16"
            data-left="2887.5"
            data-top="2887.5"
            style={{ left: "2887.5px", top: "2887.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-17"
            data-left="3062.5"
            data-top="2887.5"
            style={{ left: "3062.5px", top: "2887.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-18"
            data-left="3237.5"
            data-top="2887.5"
            style={{ left: "3237.5px", top: "2887.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-19"
            data-left="3412.5"
            data-top="2887.5"
            style={{ left: "3412.5px", top: "2887.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-20"
            data-left="3587.5"
            data-top="2887.5"
            style={{ left: "3587.5px", top: "2887.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-21"
            data-left="3762.5"
            data-top="2887.5"
            style={{ left: "3762.5px", top: "2887.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-22"
            data-left="3937.5"
            data-top="2887.5"
            style={{ left: "3937.5px", top: "2887.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-23"
            data-left="4112.5"
            data-top="2887.5"
            style={{ left: "4112.5px", top: "2887.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-0"
            data-left="0"
            data-top="3025"
            style={{ left: "0px", top: "3025px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-1"
            data-left="175"
            data-top="3025"
            style={{ left: "175px", top: "3025px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-2"
            data-left="350"
            data-top="3025"
            style={{ left: "350px", top: "3025px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-3"
            data-left="525"
            data-top="3025"
            style={{ left: "525px", top: "3025px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-4"
            data-left="700"
            data-top="3025"
            style={{ left: "700px", top: "3025px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-5"
            data-left="875"
            data-top="3025"
            style={{ left: "875px", top: "3025px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-6"
            data-left="1050"
            data-top="3025"
            style={{ left: "1050px", top: "3025px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-7"
            data-left="1225"
            data-top="3025"
            style={{ left: "1225px", top: "3025px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-8"
            data-left="1400"
            data-top="3025"
            style={{ left: "1400px", top: "3025px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-9"
            data-left="1575"
            data-top="3025"
            style={{ left: "1575px", top: "3025px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-10"
            data-left="1750"
            data-top="3025"
            style={{ left: "1750px", top: "3025px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-11"
            data-left="1925"
            data-top="3025"
            style={{ left: "1925px", top: "3025px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-12"
            data-left="2100"
            data-top="3025"
            style={{ left: "2100px", top: "3025px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-13"
            data-left="2275"
            data-top="3025"
            style={{ left: "2275px", top: "3025px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-14"
            data-left="2450"
            data-top="3025"
            style={{ left: "2450px", top: "3025px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-15"
            data-left="2625"
            data-top="3025"
            style={{ left: "2625px", top: "3025px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-16"
            data-left="2800"
            data-top="3025"
            style={{ left: "2800px", top: "3025px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-17"
            data-left="2975"
            data-top="3025"
            style={{ left: "2975px", top: "3025px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-18"
            data-left="3150"
            data-top="3025"
            style={{ left: "3150px", top: "3025px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-19"
            data-left="3325"
            data-top="3025"
            style={{ left: "3325px", top: "3025px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-20"
            data-left="3500"
            data-top="3025"
            style={{ left: "3500px", top: "3025px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-21"
            data-left="3675"
            data-top="3025"
            style={{ left: "3675px", top: "3025px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-22"
            data-left="3850"
            data-top="3025"
            style={{ left: "3850px", top: "3025px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-23"
            data-left="4025"
            data-top="3025"
            style={{ left: "4025px", top: "3025px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-0"
            data-left="87.5"
            data-top="3162.5"
            style={{ left: "87.5px", top: "3162.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-1"
            data-left="262.5"
            data-top="3162.5"
            style={{ left: "262.5px", top: "3162.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-2"
            data-left="437.5"
            data-top="3162.5"
            style={{ left: "437.5px", top: "3162.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-3"
            data-left="612.5"
            data-top="3162.5"
            style={{ left: "612.5px", top: "3162.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-4"
            data-left="787.5"
            data-top="3162.5"
            style={{ left: "787.5px", top: "3162.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-5"
            data-left="962.5"
            data-top="3162.5"
            style={{ left: "962.5px", top: "3162.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-6"
            data-left="1137.5"
            data-top="3162.5"
            style={{ left: "1137.5px", top: "3162.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-7"
            data-left="1312.5"
            data-top="3162.5"
            style={{ left: "1312.5px", top: "3162.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-8"
            data-left="1487.5"
            data-top="3162.5"
            style={{ left: "1487.5px", top: "3162.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-9"
            data-left="1662.5"
            data-top="3162.5"
            style={{ left: "1662.5px", top: "3162.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-10"
            data-left="1837.5"
            data-top="3162.5"
            style={{ left: "1837.5px", top: "3162.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-11"
            data-left="2012.5"
            data-top="3162.5"
            style={{ left: "2012.5px", top: "3162.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-12"
            data-left="2187.5"
            data-top="3162.5"
            style={{ left: "2187.5px", top: "3162.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-13"
            data-left="2362.5"
            data-top="3162.5"
            style={{ left: "2362.5px", top: "3162.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-14"
            data-left="2537.5"
            data-top="3162.5"
            style={{ left: "2537.5px", top: "3162.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-15"
            data-left="2712.5"
            data-top="3162.5"
            style={{ left: "2712.5px", top: "3162.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-16"
            data-left="2887.5"
            data-top="3162.5"
            style={{ left: "2887.5px", top: "3162.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-17"
            data-left="3062.5"
            data-top="3162.5"
            style={{ left: "3062.5px", top: "3162.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-18"
            data-left="3237.5"
            data-top="3162.5"
            style={{ left: "3237.5px", top: "3162.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-19"
            data-left="3412.5"
            data-top="3162.5"
            style={{ left: "3412.5px", top: "3162.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-20"
            data-left="3587.5"
            data-top="3162.5"
            style={{ left: "3587.5px", top: "3162.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-21"
            data-left="3762.5"
            data-top="3162.5"
            style={{ left: "3762.5px", top: "3162.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-22"
            data-left="3937.5"
            data-top="3162.5"
            style={{ left: "3937.5px", top: "3162.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-23"
            data-left="4112.5"
            data-top="3162.5"
            style={{ left: "4112.5px", top: "3162.5px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-0"
            data-left="0"
            data-top="3300"
            style={{ left: "0px", top: "3300px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-1"
            data-left="175"
            data-top="3300"
            style={{ left: "175px", top: "3300px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-2"
            data-left="350"
            data-top="3300"
            style={{ left: "350px", top: "3300px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-3"
            data-left="525"
            data-top="3300"
            style={{ left: "525px", top: "3300px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-4"
            data-left="700"
            data-top="3300"
            style={{ left: "700px", top: "3300px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-5"
            data-left="875"
            data-top="3300"
            style={{ left: "875px", top: "3300px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-6"
            data-left="1050"
            data-top="3300"
            style={{ left: "1050px", top: "3300px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-7"
            data-left="1225"
            data-top="3300"
            style={{ left: "1225px", top: "3300px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-8"
            data-left="1400"
            data-top="3300"
            style={{ left: "1400px", top: "3300px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-9"
            data-left="1575"
            data-top="3300"
            style={{ left: "1575px", top: "3300px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-10"
            data-left="1750"
            data-top="3300"
            style={{ left: "1750px", top: "3300px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-11"
            data-left="1925"
            data-top="3300"
            style={{ left: "1925px", top: "3300px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-12"
            data-left="2100"
            data-top="3300"
            style={{ left: "2100px", top: "3300px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#4A90E2" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-13"
            data-left="2275"
            data-top="3300"
            style={{ left: "2275px", top: "3300px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-14"
            data-left="2450"
            data-top="3300"
            style={{ left: "2450px", top: "3300px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-15"
            data-left="2625"
            data-top="3300"
            style={{ left: "2625px", top: "3300px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-16"
            data-left="2800"
            data-top="3300"
            style={{ left: "2800px", top: "3300px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-17"
            data-left="2975"
            data-top="3300"
            style={{ left: "2975px", top: "3300px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-18"
            data-left="3150"
            data-top="3300"
            style={{ left: "3150px", top: "3300px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-19"
            data-left="3325"
            data-top="3300"
            style={{ left: "3325px", top: "3300px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#11CDC5" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-20"
            data-left="3500"
            data-top="3300"
            style={{ left: "3500px", top: "3300px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-21"
            data-left="3675"
            data-top="3300"
            style={{ left: "3675px", top: "3300px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#c1c1c1" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-22"
            data-left="3850"
            data-top="3300"
            style={{ left: "3850px", top: "3300px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FC2D79" }} className="particle__inner"></div>
          </div>
          <div
            id="js-particle-23"
            data-left="4025"
            data-top="3300"
            style={{ left: "4025px", top: "3300px" }}
            className="particle particle__over-mobile"
          >
            <div style={{ background: "#FCB635" }} className="particle__inner"></div>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `.particles {
      width:  1675px;
      height: 1200px;
      margin-left: -175px;
      margin-top: -175px;
    }
    .desktop .particles {
      width:  3865px;
      height: 2875px;
    }`,
        }}
      ></style>
    </div>
  );
};

export default Bubbles;

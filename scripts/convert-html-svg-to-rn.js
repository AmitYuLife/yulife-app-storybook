/*
  Open console.
  Then copy & paste this + enter, to run this.
  Copy console output a tsx file.
*/
(() => {
    function rgb2hex(input) {
        const rgb = input.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return rgb && rgb.length === 4
            ? `#${`0${parseInt(rgb[1], 10).toString(16)}`.slice(-2)}${`0${parseInt(rgb[2], 10).toString(16)}`.slice(
                  -2,
              )}${`0${parseInt(rgb[3], 10).toString(16)}`.slice(-2)}`
            : input;
    }

    /* Inline all rules from all CSS stylesheets as attributes
     on all matching elements and remove class attribute */
    const styles = Array.from(document.querySelectorAll("style"));
    styles.forEach(styleSheet => {
        Array.from(styleSheet.sheet.cssRules).forEach(rule => {
            if (rule.style.display === "none") {
                // Remove hidden elements
                Array.from(document.querySelectorAll(rule.selectorText)).forEach(el => {
                    el.parentElement.removeChild(el);
                });
            } else {
                const styles = [];

                Object.entries(rule.style).forEach(([key, value]) => {
                    if (key !== "cssText" && value) {
                        /* Convert rgba? values to hex */
                        styles.push([key, rgb2hex(value.replace(/"/g, ""))]);
                    }
                });

                Array.from(document.querySelectorAll(rule.selectorText)).forEach(el => {
                    styles.forEach(([key, value]) => {
                        el.setAttribute(key, value);
                    });
                });
            }
        });
    });
    styles.forEach(styleSheet => {
        Array.from(styleSheet.sheet.cssRules).forEach(rule => {
            Array.from(document.querySelectorAll(rule.selectorText)).forEach(el => {
                el.removeAttribute("class");
            });
        });
        styleSheet.parentElement.removeChild(styleSheet);
    });

    /* Move inline CSS style values into element attributes */
    Array.from(document.querySelectorAll("[style]")).forEach(el => {
        Object.entries(el.style).forEach(([key, value]) => {
            if (!["cssText", "0", "1"].includes(key) && key.indexOf("webkit") === -1 && !!value) {
                el.setAttribute(key, rgb2hex(value));
            }
        });
        el.removeAttribute("style");
    });

    Array.from(document.querySelectorAll("g")).forEach(el => {
        if (el.innerHTML.trim() === "") {
            el.parentElement.removeChild(el);
        }
    });

    const gradients = Array.from(document.querySelectorAll("linearGradient, radialGradient"));

    const svg = document.querySelector("svg");
    Array.from(svg.attributes).forEach(attr => {
        if (attr.name === "xmlns:xlink") {
            svg.removeAttributeNode(attr);
        }
    });

    /* Move gradients inside of a defs tag,
     convert offsets from scientific notation to decimal notation */
    if (gradients.length) {
        if (typeof Decimal !== "undefined") {
            Array.from(document.querySelectorAll("stop")).forEach(el => {
                const offset = el.getAttribute("offset");
                const newOffset = new Decimal(offset).toFixed();
                el.setAttribute("offset", newOffset);
            });
        }

        const def = document.createElement("defs");
        gradients.forEach(el => def.appendChild(el));
        svg.insertBefore(def, svg.firstChild);

        svg.innerHTML = svg.innerHTML.replace(/stopColor/g, "stop-color").replace(/stopOpacity/g, "stop-opacity");
    }

    const map = {
        circle: "Circle",
        clippath: "ClipPath",
        defs: "Defs",
        ellipse: "Ellipse",
        g: "G",
        image: "Image",
        line: "Line",
        lineargradient: "LinearGradient",
        path: "Path",
        polygon: "Polygon",
        polyline: "Polyline",
        radialgradient: "RadialGradient",
        rect: "Rect",
        stop: "Stop",
        svg: "Svg",
        symbol: "Symbol",
        text: "Text",
        tspan: "TSpan",
        textpath: "TextPath",
        use: "Use",
        "stop-color": "stopColor",
        "stop-opacity": "stopOpacity",
    };

    const keys = Object.keys(map).map(key => `<${key}[ >]|<\\/${key}| ${key}=`);

    const match = keys.join("|");

    const regex = new RegExp(match, "ig");

    const markup = svg.outerHTML;

    const pre = `import React from "react";
  import Svg, {
    Circle,
    ClipPath,
    Defs,
    Ellipse,
    G,
    Image,
    Line,
    LinearGradient,
    Path,
    Polygon,
    Polyline,
    RadialGradient,
    Rect,
    Stop,
    Symbol,
    Text,
    TSpan,
    TextPath,
    Use
  } from "react-native-svg";
  import { platformAdjustments } from "../../helpers";
  
  const BackgroundImage: React.SFC<React.ReactNode> = ({ children }) => (
      <G {...platformAdjustments}>`;

    const body = markup
        .replace(regex, key => {
            const isEnd = key[1] === "/";
            const tag = (isEnd ? key.slice(2) : key.slice(1, key.length - 1)).toLowerCase();
            const replaced = map[tag] || tag;
            return isEnd ? `</${replaced}` : `${key[0]}${replaced}${key[key.length - 1]}`;
        })
        .replace(new RegExp(' xmlns="http://www.w3.org/2000/svg"', "ig"), "")
        .replace(new RegExp("xml:space", "ig"), "xmlSpace");

    const post = `
    {children}
    </G>
  );

  export default BackgroundImage;

  `;

    const start = `<Svg
      width={width}
      height={height}`;

    const output = pre + body.replace("<Svg", start) + post;

    console.log(output);
})();

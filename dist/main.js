function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "drawLine", () => $e06bd62991e308ea$export$2e2bcd8739ae039);
$parcel$export(module.exports, "drawL", () => $d27a4895382608e7$export$2e2bcd8739ae039);
const $3a919e990596630f$var$getElement = (id)=>{
    const element = document.getElementById(id);
    if (!element) throw new Error(`cannot find #${id}`);
    return element;
};
var $3a919e990596630f$export$2e2bcd8739ae039 = $3a919e990596630f$var$getElement;


function $0575c58c82e0aeeb$var$getOffset(element) {
    const rect = element.getBoundingClientRect();
    const left = rect.left + window.pageXOffset;
    const top = rect.top + window.pageYOffset;
    const width = rect.width || el.offsetWidth;
    const height = rect.height || el.offsetHeight;
    const right = left + width;
    const bottom = top + height;
    const mid = top + height / 2;
    const center = left + width / 2;
    return {
        left: left,
        right: right,
        top: top,
        bottom: bottom,
        mid: mid,
        center: center,
        width: width,
        height: height
    };
}
var $0575c58c82e0aeeb$export$2e2bcd8739ae039 = $0575c58c82e0aeeb$var$getOffset;


const $e06bd62991e308ea$var$drawLine = (params)=>{
    const { startingElement: startingElement , endingElement: endingElement , color: color = "black" , thickness: thickness = 4 ,  } = params;
    const { id: startingElementId , x: horizontal1 , y: vertical1 ,  } = startingElement;
    const { id: endingElementId , x: horizontal2 , y: vertical2  } = endingElement;
    const code = ()=>{
        const firstElement = $3a919e990596630f$export$2e2bcd8739ae039(startingElementId);
        const secondElement = $3a919e990596630f$export$2e2bcd8739ae039(endingElementId);
        const off1 = $0575c58c82e0aeeb$export$2e2bcd8739ae039(firstElement);
        const off2 = $0575c58c82e0aeeb$export$2e2bcd8739ae039(secondElement);
        // determine each elements' point
        const x1 = off1[horizontal1];
        const y1 = off1[vertical1];
        const x2 = off2[horizontal2];
        const y2 = off2[vertical2];
        // distance
        const length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
        // center
        const cx = (x1 + x2) / 2 - length / 2;
        const cy = (y1 + y2) / 2 - thickness / 2;
        // angle
        const angle = Math.atan2(y1 - y2, x1 - x2) * (180 / Math.PI);
        // create the line element
        const line = document.createElement("div");
        line.style = "padding:0px; margin:0px; height:" + thickness + "px; background-color:" + color + "; line-height:1px; position:absolute; left:" + cx + "px; top:" + cy + "px; width:" + length + "px; -moz-transform:rotate(" + angle + "deg); -webkit-transform:rotate(" + angle + "deg); -o-transform:rotate(" + angle + "deg); -ms-transform:rotate(" + angle + "deg); transform:rotate(" + angle + "deg);";
        document.body.appendChild(line);
    };
    window.addEventListener("DOMContentLoaded", ()=>{
        code();
    });
};
var $e06bd62991e308ea$export$2e2bcd8739ae039 = $e06bd62991e308ea$var$drawLine;




const $d27a4895382608e7$var$drawL = (params)=>{
    const { startingElement: startingElement , endingElement: endingElement , color: color = "black" , thickness: thickness = 4 , shape: shape = "normal" ,  } = params;
    const { id: startingElementId , x: horizontal1 , y: vertical1 ,  } = startingElement;
    const { id: endingElementId , x: horizontal2 , y: vertical2  } = endingElement;
    const code = ()=>{
        const firstElement = $3a919e990596630f$export$2e2bcd8739ae039(startingElementId);
        const secondElement = $3a919e990596630f$export$2e2bcd8739ae039(endingElementId);
        const off1 = $0575c58c82e0aeeb$export$2e2bcd8739ae039(firstElement);
        const off2 = $0575c58c82e0aeeb$export$2e2bcd8739ae039(secondElement);
        let x1, x2, y1, y2, p1, p2;
        x1 = off1[horizontal1];
        y1 = off1[vertical1];
        x2 = off2[horizontal2];
        y2 = off2[vertical2];
        switch(shape){
            case "normal":
                p1 = x1;
                p2 = y2;
                break;
            case "upsidedownL":
                p1 = x2;
                p2 = y1;
                break;
            default:
                throw new Error("shape is not correct");
        }
        // line settings for the first div
        const length = Math.sqrt((p1 - x1) * (p1 - x1) + (p2 - y1) * (p2 - y1));
        const cx = (x1 + p1) / 2 - length / 2;
        const cy = (y1 + p2) / 2 - thickness / 2;
        const angle = Math.atan2(y1 - p2, x1 - p1) * (180 / Math.PI);
        //line settings for the second div
        const length2 = Math.sqrt((x2 - p1) * (x2 - p1) + (y2 - p2) * (y2 - p2));
        const cx2 = (p1 + x2) / 2 - length2 / 2;
        const cy2 = (p2 + y2) / 2 - thickness / 2;
        const angle2 = Math.atan2(p2 - y2, p1 - x2) * (180 / Math.PI);
        //creating a line for each element
        const line1 = document.createElement("div");
        const line2 = document.createElement("div");
        line1.style = "padding:0px; margin:0px; height:" + thickness + "px; background-color:" + color + "; line-height:1px; position:absolute; left:" + cx + "px; top:" + cy + "px; width:" + length + "px; -moz-transform:rotate(" + angle + "deg); -webkit-transform:rotate(" + angle + "deg); -o-transform:rotate(" + angle + "deg); -ms-transform:rotate(" + angle + "deg); transform:rotate(" + angle + "deg);";
        line2.style = "padding:0px; margin:0px; height:" + thickness + "px; background-color:" + color + "; line-height:1px; position:absolute; left:" + cx2 + "px; top:" + cy2 + "px; width:" + length2 + "px; -moz-transform:rotate(" + angle2 + "deg); -webkit-transform:rotate(" + angle2 + "deg); -o-transform:rotate(" + angle2 + "deg); -ms-transform:rotate(" + angle2 + "deg); transform:rotate(" + angle2 + "deg);";
        document.body.appendChild(line1);
        document.body.appendChild(line2);
    };
    window.addEventListener("DOMContentLoaded", ()=>{
        code();
    });
};
var $d27a4895382608e7$export$2e2bcd8739ae039 = $d27a4895382608e7$var$drawL;




//# sourceMappingURL=main.js.map

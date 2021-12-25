import getElement from "./helpers/getElement";
import getOffset from "./helpers/getOffset";

const drawL = (params) => {
  const {
    startingElement,
    endingElement,
    color,
    thickness,
    shape = "normal",
  } = params;

  const {
    id: startingElementId,
    x: horizontal1,
    y: vertical1,
  } = startingElement;

  const { id: endingElementId, x: horizontal2, y: vertical2 } = endingElement;

  const code = () => {
    const firstElement = getElement(startingElementId);
    const secondElement = getElement(endingElementId);

    const off1 = getOffset(firstElement);
    const off2 = getOffset(secondElement);

    let x1, x2, y1, y2;

    x1 = off1[horizontal1];
    y1 = off1[vertical1];
    x2 = off2[horizontal2];
    y2 = off2[vertical2];

    switch (shape) {
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

    line1.style =
      "padding:0px; margin:0px; height:" +
      thickness +
      "px; background-color:" +
      color +
      "; line-height:1px; position:absolute; left:" +
      cx +
      "px; top:" +
      cy +
      "px; width:" +
      length +
      "px; -moz-transform:rotate(" +
      angle +
      "deg); -webkit-transform:rotate(" +
      angle +
      "deg); -o-transform:rotate(" +
      angle +
      "deg); -ms-transform:rotate(" +
      angle +
      "deg); transform:rotate(" +
      angle +
      "deg);";

    line2.style =
      "padding:0px; margin:0px; height:" +
      thickness +
      "px; background-color:" +
      color +
      "; line-height:1px; position:absolute; left:" +
      cx2 +
      "px; top:" +
      cy2 +
      "px; width:" +
      length2 +
      "px; -moz-transform:rotate(" +
      angle2 +
      "deg); -webkit-transform:rotate(" +
      angle2 +
      "deg); -o-transform:rotate(" +
      angle2 +
      "deg); -ms-transform:rotate(" +
      angle2 +
      "deg); transform:rotate(" +
      angle2 +
      "deg);";

    document.body.appendChild(line1);
    document.body.appendChild(line2);
  };

  window.addEventListener("DOMContentLoaded", () => {
    code();
  });
};

export default drawL;

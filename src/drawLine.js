import getElement from "./helpers/getElement";
import getOffset from "./helpers/getOffset";

const drawLine = (params) => {
  const {
    startingElement,
    endingElement,
    color = "black",
    thickness = 4,
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
    line.style =
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

    document.body.appendChild(line);
  };

  window.addEventListener("DOMContentLoaded", () => {
    code();
  });
};

export default drawLine;

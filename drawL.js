import getElement from "./helpers/getElement";
import getOffset from "./helpers/getOffset";

const drawL = (id1, id2, color, thickness, direction) => {
  const code = () => {
    const firstElement = getElement(id1);
    const secondElement = getElement(id2);

    const off1 = getOffset(firstElement);
    const off2 = getOffset(secondElement);

    let x1, x2, y1, y2, a1, a2, b1, b2;

    switch (direction) {
      case "leftSideToRight-topSideToTop":
        //a straight line from right center of div1 to the right
        x1 = off1.left + off1.width;
        y1 = off1.top + off1.height / 2;
        x2 = off2.left + off2.width / 2;
        y2 = y1;

        //a straight line from top center of div2 to the up
        a1 = off2.left + off2.width / 2;
        b1 = off1.top + off1.height / 2;
        a2 = off2.left + off2.width / 2;
        b2 = off2.top;
        break;
      case "rightSideToRight-bottomSideToDown":
        // a a straight line from right center of element1 to the right

        //a straight line from bottom center of element2 to the down

        break;
      default:
        throw new Error("direction is not correct!");
    }

    // line settings for the first div
    const length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    const cx = (x1 + x2) / 2 - length / 2;
    const cy = (y1 + y2) / 2 - thickness / 2;
    const angle = Math.atan2(y1 - y2, x1 - x2) * (180 / Math.PI);

    //line settings for the second div
    const length2 = Math.sqrt((a2 - a1) * (a2 - a1) + (b2 - b1) * (b2 - b1));
    const cx2 = (a1 + a2) / 2 - length2 / 2;
    const cy2 = (b1 + b2) / 2 - thickness / 2;
    const angle2 = Math.atan2(b1 - b2, a1 - a2) * (180 / Math.PI);

    //creating a line for each element
    const htmlLine1 =
      "<div style='padding:0px; margin:0px; height:" +
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
      "deg);' />";
    const htmlLine2 =
      "<div style='padding:0px; margin:0px; height:" +
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
      "deg);' />";
    document.body.innerHTML += htmlLine1;
    document.body.innerHTML += htmlLine2;
  };

  window.addEventListener("DOMContentLoaded", () => {
    code();
  });
};

export default drawL;

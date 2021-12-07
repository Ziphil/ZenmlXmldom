//

import "../constructor";


function getChildElements(this: Element, tagName: string): Array<Element> {
  let nodes = this.childNodes;
  let elements = [];
  for (let i = 0 ; i < nodes.length ; i ++) {
    let node = nodes.item(i);
    if (node.isElement() && node.tagName === tagName) {
      elements.push(node);
    }
  }
  return elements;
}

function getDescendantTexts(this: Element): Array<Text> {
  let texts = [];
  for (let child of Array.from(this.childNodes)) {
    if (child.isText()) {
      texts.push(child);
    } else if (child.isElement()) {
      texts.push(...child.getDescendantTexts());
    }
  }
  return texts;
}

Element.prototype.getDescendantTexts = getDescendantTexts;


declare global {

  interface Element {
    getChildElements: typeof getChildElements;
    getDescendantTexts: typeof getDescendantTexts;
  }

}
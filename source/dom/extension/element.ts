//

import "../constructor";


function insertFirst<N extends Node>(this: Element, child: N): N {
  const firstChild = this.firstChild;
  if (firstChild !== null) {
    return this.insertBefore(child, firstChild);
  } else {
    return this.appendChild(child);
  }
}

function insertLast<N extends Node>(this: Element, child: N): N {
  return this.appendChild(child);
}

function getChildElements(this: Element, tagName: string): Array<Element> {
  const nodes = this.childNodes;
  const elements = [];
  for (let i = 0 ; i < nodes.length ; i ++) {
    const node = nodes.item(i)!;
    if (node.isElement() && node.tagName === tagName) {
      elements.push(node);
    }
  }
  return elements;
}

function getDescendantTexts(this: Element): Array<Text> {
  const texts = [];
  const children = this.childNodes;
  for (let i = 0 ; i < children.length ; i ++) {
    const child = children.item(i)!;
    if (child.isText()) {
      texts.push(child);
    } else if (child.isElement()) {
      texts.push(...child.getDescendantTexts());
    }
  }
  return texts;
}

Element.prototype.insertFirst = insertFirst;
Element.prototype.insertLast = insertLast;
Element.prototype.getChildElements = getChildElements;
Element.prototype.getDescendantTexts = getDescendantTexts;


declare global {

  interface Element {
    insertFirst: typeof insertFirst;
    insertLast: typeof insertLast;
    getChildElements: typeof getChildElements;
    getDescendantTexts: typeof getDescendantTexts;
  }

}
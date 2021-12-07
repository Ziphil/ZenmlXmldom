//

import "../constructor";


function isElement(this: Node): boolean {
  return this.nodeType === 1;
}

function isText(this: Node): boolean {
  return this.nodeType === 3;
}

function isComment(this: Node): boolean {
  return this.nodeType === 8;
}

Node.prototype.isElement = isElement;
Node.prototype.isText = isText;
Node.prototype.isComment = isComment;


declare global {

  interface Node {
    isElement(): this is Element;
    isText(): this is Text;
    isComment(): this is Comment;
  }

}
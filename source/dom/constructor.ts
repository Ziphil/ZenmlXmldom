//

import {
  DOMImplementation
} from "xmldom";


let implementation = new DOMImplementation();
let document = implementation.createDocument(null, null, null);
let element = document.createElement("dummy");
let text = document.createTextNode("dummy");
let comment = document.createComment("dummy");

let global = globalThis as any;

global.Node ??= require("xmldom/lib/dom").Node;
global.Element ??= element.constructor as any;
global.Text ??= text.constructor as any;
global.Comment ??= comment.constructor as any;
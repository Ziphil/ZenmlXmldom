//

import {
  DOMImplementation
} from "@xmldom/xmldom";


const implementation = new DOMImplementation();
const document = implementation.createDocument(null, null, null);
const element = document.createElement("dummy");
const text = document.createTextNode("dummy");
const comment = document.createComment("dummy");

const global = globalThis as any;

global.Node ??= require("@xmldom/xmldom/lib/dom").Node;
global.Element ??= element.constructor as any;
global.Text ??= text.constructor as any;
global.Comment ??= comment.constructor as any;
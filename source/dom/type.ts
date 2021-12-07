//


declare global {

  interface DOMImplementation {
    hasFeature(feature: string, version: string): boolean;
    createDocumentType(qualifiedName: string, publicId: string, systemId: string): DocumentType;
    createDocument(namespace: string | null, qualifiedName: string | null, doctype: DocumentType | null): Document;
  }

  class Node {
  }

  interface Node {
    nodeValue: string | null;
    prefix: string | null;
    textContent: string | null;
    readonly nodeType: number;
    readonly nodeName: string;
    readonly localName: string;
    readonly parentNode: Node | null;
    readonly childNodes: NodeList;
    readonly firstChild: Node | null;
    readonly lastChild: Node | null;
    readonly previousSibling: Node | null;
    readonly nextSibling: Node | null;
    readonly attributes: NamedNodeMap;
    readonly ownerDocument: Document | null;
    readonly namespaceURI: string | null;
    isDefaultNamespace(namespace: string | null): boolean;
    lookupNamespaceURI(prefix: string | null): string | null;
  }

  class Document {
  }

  interface Document extends Node {
    readonly doctype: DocumentType | null;
    readonly implementation: DOMImplementation;
    readonly documentElement: Element;
    createElement(tagName: string): Element;
    createElementNS(namespace: string | null, localName: string): Element;
    createDocumentFragment(): DocumentFragment;
    createTextNode(data: string): Text;
    createComment(data: string): Comment;
    createCDATASection(data: string): CDATASection;
    createProcessingInstruction(target: string, data: string): ProcessingInstruction;
    createAttribute(name: string): Attr;
    createAttributeNS(namespace: string | null, localName: string): Attr;
    createEntityReference(name: string): EntityReference;
    importNode(node: Node, deep: boolean): Node;
    getElementsByTagName(tagName: string): NodeList;
    getElementsByTagNameNS(namespace: string | null, localName: string): NodeList;
    getElementById(id: string): Element | null;
  }

  class DocumentFragment {
  }

  interface DocumentFragment extends Node {
  }

  class Element {
  }

  interface Element extends Node {
    readonly tagName: string;
    getAttribute(name: string): string;
    getAttributeNS(namespace: string | null, localName: string): string | null;
    setAttribute(name: string, value: string): void;
    setAttributeNS(namespace: string | null, localName: string, value: string): void;
    removeAttribute(name: string): void;
    removeAttributeNS(namespace: string | null, localName: string): void;
    getAttributeNode(name: string): Attr | null;
    getAttributeNodeNS(namespace: string | null, localName: string): Attr | null;
    setAttributeNode(attr: Attr): Attr | null;
    setAttributeNodeNS(attr: Attr): Attr | null;
    removeAttributeNode(attr: Attr): Attr;
    getElementsByTagName(tagName: string): NodeList;
    getElementsByTagNameNS(namespace: string | null, localName: string): NodeList;
    hasAttribute(name: string): boolean;
    hasAttributeNS(namespace: string | null, localName: string): boolean;
  }

  interface Attr extends Node {
    readonly name: string;
    value: string;
    readonly specified: boolean;
    readonly ownerElement: Element | null;
  }

  interface NodeList {
    readonly length: number;
    item(index: number): Node | null;
  }

  interface NamedNodeMap {
    readonly length: number;
    item(index: number): Attr | null;
    getNamedItem(name: string): Attr | null;
    getNamedItemNS(namespace: string | null, localName: string): Attr | null;
    setNamedItem(attr: Attr): Attr | null;
    setNamedItemNS(attr: Attr): Attr | null;
    removeNamedItem(name: string): Attr;
    removeNamedItemNS(namespace: string | null, localName: string): Attr;
  }

  interface CharacterData extends Node {
    readonly data: string;
    appendData(data: string): void;
    insertData(offset: number, data: string): void;
    deleteData(offset: number, count: number): void;
    replaceData(offset: number, count: number, data: string): void;
    substringData(offset: number, count: number): string;
  }

  class Text {
  }

  interface Text extends CharacterData {
    splitText(offset: number): Text;
  }

  class Comment {
  }

  interface Comment extends CharacterData {
  }

  interface CDATASection extends Text {
  }

  interface ProcessingInstruction extends Node {
    data: string;
    readonly target: string;
  }

  interface DocumentType {
    readonly name: string;
    readonly entities: NamedNodeMap;
    readonly notations: NamedNodeMap;
    readonly publicId: string;
    readonly systemId: string;
    readonly internalSubset: string;
  }

  interface Notation extends Node {
    readonly publicId: string | null;
    readonly systemId: string | null;
  }

  interface Entity extends Node {
    readonly notationName: string | null;
    readonly publicId: string | null;
    readonly systemId: string | null;
  }

  interface EntityReference extends Node {
  }

}


export {};
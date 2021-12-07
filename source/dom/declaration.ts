//


declare module "xmldom" {

  let DOMParser: DOMParserStatic;
  let XMLSerializer: XMLSerializerStatic;
  let DOMImplementation: DOMImplementationStatic;

  interface DOMImplementationStatic {
    new(): DOMImplementation;
  }

  interface DOMParserStatic {
    new(options?: Options): DOMParser;
  }

  interface XMLSerializerStatic {
    new(): XMLSerializer;
  }

  interface DOMParser {
    parseFromString(xmlsource: string, mimeType?: string): Document;
  }

  interface XMLSerializer {
    serializeToString(node: Node): string;
  }

  interface Options {
    locator?: any;
    errorHandler?: ErrorHandlerFunction | ErrorHandlerObject;
  }

  type ErrorHandlerFunction = (level: string, message: any) => any;

  interface ErrorHandlerObject {
    warning?: ((message: any) => any) | undefined;
    error?: ((message: any) => any) | undefined;
    fatalError?: ((message: any) => any) | undefined;
  }

}
/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare module "assets/keywords/*.json" {
  const value: any;
  export default value;
}

declare module "assets/keywords/*.txt" {
  const value: any;
  export default value;
}


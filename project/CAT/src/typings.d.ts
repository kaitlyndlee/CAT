/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare module "assets/keywords/*.json" {
  const value: any;
  export default value;
}


declare module "*.svg" {
  const content: string;
  export default content;
}

type PropsWithClass<T = unknown> = T & {
  className?: string;
};

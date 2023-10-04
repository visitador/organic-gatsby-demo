declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

type PropsWithClass<T = unknown> = T & {
  className?: string;
};

type PropsWithOnClick<T = unknown> = T & {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
import React, { PropsWithChildren } from "react";

export const FullRow: React.FC<PropsWithChildren<PropsWithClass>> = ({
  className,
  children,
}) => <div className={`min-w-fit w-full px-16 ${className}`}>{children}</div>;

export const Container: React.FC<PropsWithChildren<PropsWithClass>> = ({
  className,
  children,
}) => <div className={`w-container mx-auto ${className}`}>{children}</div>;

type BlockProps = {
  rowClassName?: string;
} & PropsWithChildren<PropsWithClass>;

export const Block: React.FC<BlockProps> = ({
  children,
  rowClassName,
  className,
}) => (
  <FullRow className={rowClassName}>
    <Container className={className}>{children}</Container>
  </FullRow>
);

import type {
  ComponentPropsWithoutRef,
  ComponentType,
  JSX,
  ReactNode,
} from 'react';

type PropsOf<
  T extends ComponentType<any> | keyof JSX.IntrinsicElements,
> = T extends ComponentType<infer P>
  ? P
  : ComponentPropsWithoutRef<T>;

type ReMapping<Type> = {
  [Property in keyof Type]: Type[Property];
};

type ConditionalParentProps<
  P extends ComponentType<any> | keyof JSX.IntrinsicElements,
> = {
  parent: P;
  disParent?: boolean;
  children?: ReactNode | undefined;
} & ReMapping<PropsOf<P>>;

export default function ConditionalParent<
  P extends ComponentType<any> | keyof JSX.IntrinsicElements,
>({
  parent: Parent,
  disParent,
  children,
  ref,
  ...props
}: ConditionalParentProps<P>) {
  if (disParent) return <>{children}</>;
  return (
    <Parent ref={ref} {...(props as any)}>
      {children}
    </Parent>
  );
}

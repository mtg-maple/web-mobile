import { FC, ReactElement } from 'react';

export function containPresenter<P, PP> (
  container: (presenter: FC<PP>, props: P) => ReactElement | null,
  presenter: FC<PP>
): FC<P> {
  return (props: P): ReactElement | null => container(presenter, props);
}
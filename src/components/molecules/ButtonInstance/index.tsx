import React, { FC, ReactElement } from 'react';
import Button, { ButtonInstanceProps } from '../../atoms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
  faTimesCircle,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';

interface IButtonFamily {
  type: 'text' | 'icon';
  children: Element | ReactElement;
}
const buttonFactory = ({ type, children }: IButtonFamily): FC<ButtonInstanceProps> => {
  return (buttonInstanceProps: ButtonInstanceProps): ReactElement => (
    <Button {...{ type, children, ...buttonInstanceProps }}/>
  );
};

export const ForwardButton = buttonFactory({ type: 'icon', children: <FontAwesomeIcon icon={faChevronRight}/>});
export const BackButton = buttonFactory({ type: 'icon', children: <FontAwesomeIcon icon={faChevronLeft}/>});
export const CloseButton = buttonFactory({ type: 'icon', children: <FontAwesomeIcon icon={faTimes}/>});
export const ClearButton = buttonFactory({ type: 'icon', children: <FontAwesomeIcon icon={faTimesCircle}/>});
export const OptionButton = buttonFactory({ type: 'icon', children: <FontAwesomeIcon icon={faEllipsisH}/>});
export const AddCardButton = buttonFactory({ type: 'text', children: <>Add Card</>});
export const SignOutButton = buttonFactory({ type: 'text', children: <>Sign Out</>});
export const SignInButton = buttonFactory({ type: 'text', children: <>Sign In</>});

import React, { FC, MouseEvent, ChangeEvent } from 'react';

import Label from 'src/components/atoms/Label';
import Input from 'src/components/molecules/Input';
import { SignInButton } from 'src/components/molecules/ButtonInstance';

import styles from './style.module.scss';

export type SignInInput = {
  username: string;
  password: string;
}

export type SignInTemplateProps = {
  signInInput: SignInInput;
  setSignInInput: (input: SignInInput) => void;
  onSignInButtonClick: (e: MouseEvent) => void;
};

const SignInTemplate: FC<SignInTemplateProps> = ({ signInInput, setSignInInput, onSignInButtonClick }) => {
  return (
    <section className={styles.signInInput}>
      <div>
        <Label>
          Username/E-mail
        </Label>
        <Input
          value={signInInput.username}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSignInInput({ ...signInInput, username: e.target.value })}
          initInput={() => setSignInInput({ ...signInInput, username: '' })}
        />
      </div>
      <div>
        <Label>
          Password
        </Label>
        <Input
          value={signInInput.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSignInInput({ ...signInInput, password: e.target.value })}
          initInput={() => setSignInInput({ ...signInInput, password: '' })}
        />
      </div>
      <SignInButton onClick={onSignInButtonClick} />
    </section>
  );
};

export default SignInTemplate;

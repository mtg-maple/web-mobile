import React, { FC, useState, useContext } from 'react';
import { Auth } from 'aws-amplify';
import SignInTemplate, { SignInInput } from 'src/components/templates/SignInTemplate';
import { AuthContext } from 'src/context';

const SignInPage: FC = () => {
  const { onStateChange } = useContext(AuthContext);
  const [signInInput, setSignInInput] = useState<SignInInput>({
    username: '',
    password: '',
  });
  return (
    <SignInTemplate
      signInInput={signInInput}
      setSignInInput={setSignInInput}
      onSignInButtonClick={() => {
        Auth.signIn(signInInput.username, signInInput.password)
          .then((data) => {
            console.log(JSON.stringify(data));
            if (onStateChange) {
              onStateChange('signedIn', data);
            }
          })
          .catch((err) => alert(JSON.stringify(err)));
      }}
    />
  );
};

export default SignInPage;

import Button from '@material-ui/core/Button';
import React, { useCallback } from 'react';

import { LoginForm } from './LoginForm';
import { MagicForm } from './MagicForm';
import { useStyles } from './styles';

export interface ILoginProps {
  autoFocus?: boolean;
  isMagicLoginForm?: boolean;
  toggleUiSetting: any;
}

export const AuthForm: React.FC<ILoginProps> = ({ autoFocus, isMagicLoginForm, toggleUiSetting }) => {
  const classes = useStyles();

  const toggleMagic = useCallback(() => toggleUiSetting('isMagicLoginForm'), [toggleUiSetting]);

  return (
    <div className={classes.form}>
      {isMagicLoginForm ? <MagicForm autoFocus={autoFocus} /> : <LoginForm autoFocus={autoFocus} />}
      <Button type="button" className={classes.toggleButton} onClick={toggleMagic} color="secondary">
        {isMagicLoginForm ? 'Вход / Регистрация по паролю' : 'Отправить магическую ссылку'}
      </Button>
    </div>
  );
};
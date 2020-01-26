import { DialogProps } from '@material-ui/core/Dialog';
import { createSelector } from 'reselect';

import { IState } from '@types';
import { IDialogState } from './Dialog';

const baseState = (state: IState) => state.dialog;

export const isDialogOpened = createSelector(
  baseState,
  (state: IDialogState): boolean => state.isOpened
);

export const dialogProps = createSelector(
  baseState,
  (state: IDialogState): Partial<DialogProps> | undefined => state.dialogProps
);

export const restProps = createSelector(
  baseState,
  (state: IDialogState): Partial<DialogProps> | undefined => state.props
);
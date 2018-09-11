import { createSelector } from 'reselect';

import { DownloadList } from '../@common/entities';
import { projectTaskTypes } from '../projects/selectors';
import { IState } from '../rootReducer';
import { TaskType } from './task-type';

const baseState = (state: IState) => state.taskTypes;

export const taskTypesIsLoaded = createSelector(baseState, (state: DownloadList): boolean => state.isLoaded);

export const taskTypesIsLoading = createSelector(baseState, (state: DownloadList): boolean => state.isLoading);

export const taskTypeList = createSelector(baseState, (state: DownloadList<TaskType>): TaskType[] => state.list);

export const getTaskTypeById = createSelector(taskTypeList, (list: TaskType[]) => (id: number) =>
  list.find(e => e.id === id)
);

export const filteredTaskTypes = createSelector(
  [taskTypeList, projectTaskTypes],
  (allTaskTypes, selectedTaskTypes) =>
    selectedTaskTypes && allTaskTypes.filter(tt => !~selectedTaskTypes.findIndex(e => e.id === tt.id))
);
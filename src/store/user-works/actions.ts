import { requestActions } from 'src/store/@common/requestActions';
import { CREATE_USER_WORK_FORM_NAME } from './consts';

export interface IUserWorkData {
  description: string;
  projectId: number;
  taskId: number;
  title: string;
}

export interface IUserWorkDelete {
  projectId: number;
  taskId: number;
}

export const getAllUserWorks = requestActions(
  'USER_WORK/GET',
  (): any => ({
    request: {
      url: '/user-works',
    },
  })
);

export const postAndStartUserWork = requestActions<IUserWorkData>(
  'USER_WORK/POST_AND_START',
  (data: IUserWorkData): any => ({
    form: CREATE_USER_WORK_FORM_NAME,
    request: {
      data,
      method: 'POST',
      url: '/user-works',
    },
  })
);

export const patchAndStopUserWork = requestActions<IUserWorkDelete>(
  'USER_WORK/PATCH_AND_STOP',
  ({ projectId, taskId }: IUserWorkDelete) => ({
    request: {
      method: 'PATCH',
      url: `/user-works/${taskId}`,
    },
  })
);

export const deleteUserWork = requestActions<IUserWorkDelete>(
  'USER_WORK/DELETE',
  ({ taskId }: IUserWorkDelete): any => ({
    request: {
      method: 'DELETE',
      url: `/user-works/${taskId}`,
    },
    success: 'Задача успешно удалена',
    taskId,
  })
);

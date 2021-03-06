import React from 'react';

import SvgIcon from '@material-ui/core/SvgIcon';

export default function PlayPause(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 16 16">
      <title>play-pause</title>
      <path d="M3.35,15.55a1.42,1.42,0,0,1-1.53.31A1.4,1.4,0,0,1,1,14.56V1.41a1.41,1.41,0,0,1,2.4-1L9.57,6.66a1.88,1.88,0,0,1,0,2.64Z" />
      <path d="M13.31,16a1.74,1.74,0,0,1-1.74-1.74V1.74a1.74,1.74,0,1,1,3.48,0V14.26A1.74,1.74,0,0,1,13.31,16Z" />
    </SvgIcon>
  );
}

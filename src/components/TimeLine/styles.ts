import { Theme } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';

export const styles = (theme: Theme) =>
  createStyles({
    block: {
      boxSizing: 'border-box',
      height: '100%',
      position: 'absolute',
    },
    filled: {
      border: '1px solid #FFB200',
      borderRadius: theme.shape.borderRadius,
      boxSizing: 'border-box',
      position: 'relative',
      width: '100%',
    },
    popover: {
      pointerEvents: 'none',
    },
    popoverPaper: {
      alignItems: 'center',
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'center',
      padding: `0 ${theme.spacing.unit}px`,
    },
    root: {
      alignItems: 'flex-end',
      backgroundColor: theme.palette.background.paper,
      // border: '1px solid #FFB200',
      // border: '1px solid #eeeeee',
      // boxSizing: 'border-box',
      cursor: 'pointer',
      display: 'flex',
      flexFlow: 'column nowrap',
      flexGrow: 1,
      justifyContent: 'flex-end',
      overflow: 'hidden',
      position: 'relative',
      transition: theme.transitions.create(['height', 'z-index'], {
        duration: theme.transitions.duration.shortest,
        easing: theme.transitions.easing.easeIn,
      }),
      width: '100%',
    },
    svg: {
      left: 0,
      pointerEvents: 'none',
      position: 'absolute',
      top: 0,
    },
    text: {
      // fill: '#77909D',
      fill: '#87A082',
      // fill: theme.palette.primary.main,
      // fill: '#24292E',
    },
  });

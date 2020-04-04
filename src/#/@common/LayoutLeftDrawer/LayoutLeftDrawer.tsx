import React, { useCallback, useMemo } from 'react';
import { match, RouteComponentProps } from 'react-router-dom';

import cn from 'classnames';

import ButtonBase from '@material-ui/core/ButtonBase';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Theme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExtensionIcon from '@material-ui/icons/Extension';
import LaptopIcon from '@material-ui/icons/Laptop';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import SettingsIcon from '@material-ui/icons/Settings';

import { LinkButton } from '#/@common/LinkButton';
import { Project } from '#/@store/projects';

import { useStyles } from './styles';

import { IRoute } from '@types';

export interface ILayoutLeftDrawerProps {
  children?: React.ReactNode;
  goTo: any;
  isLeftBarOpen: boolean;
  isWidthSm: boolean;
  match: match<any>;
  routes?: IRoute[];
  openedProject?: Project;
  selectProject?: Project;
  showFooter?: boolean;
  theme: Theme;
  toggleUiSetting: any;
}

export const ICONS_MAP = {
  '/projects/:projectId/board': ExtensionIcon,
  '/projects/:projectId/members': PeopleOutlinedIcon,
  '/projects/:projectId/settings': SettingsIcon,
};

export const LayoutLeftDrawerTsx: React.FC<ILayoutLeftDrawerProps & RouteComponentProps<any>> = ({
  children,
  goTo,
  isLeftBarOpen,
  isWidthSm,
  match,
  routes,
  openedProject,
  selectProject,
  showFooter,
  theme,
  toggleUiSetting,
}) => {
  const classes = useStyles();

  const project = useMemo(() => {
    return openedProject || selectProject;
  }, [openedProject, selectProject]);

  const handleDrawerToggle = useCallback(() => {
    toggleUiSetting('isLeftBarOpen');
  }, [toggleUiSetting]);

  const goToPage = useCallback(
    (path?: string) => () => {
      if (path) {
        if (isWidthSm) {
          handleDrawerToggle();
        }
        goTo(path.replace(match.path, match.url));
      }
    },
    [handleDrawerToggle, goTo, match, isWidthSm]
  );

  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={isLeftBarOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          {project && project.id && project.title && (
            <LinkButton to={`/projects/${project.id}`} className={classes.projectTitle}>
              {project.title}
            </LinkButton>
          )}
          <div className={classes.grow} />
          <IconButton onClick={handleDrawerToggle}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        {routes && routes.length && (
          <List>
            {routes
              .filter((el: any) => el.title)
              .map((route: IRoute) => {
                const CurIcon = ICONS_MAP[route.path];
                return (
                  <ListItem key={route.path} button onClick={goToPage(route.path)}>
                    <ListItemIcon>{CurIcon ? <CurIcon /> : route.icon}</ListItemIcon>
                    <ListItemText primary={route.title} />
                  </ListItem>
                );
              })}
          </List>
        )}
        {showFooter && (
          <>
            <Divider />
            <List>
              <ListItem button onClick={goToPage('/projects')}>
                <ListItemIcon>
                  <LaptopIcon />
                </ListItemIcon>
                <ListItemText primary={'Все Проекты'} />
              </ListItem>
            </List>
          </>
        )}
      </Drawer>
      <ButtonBase onClick={handleDrawerToggle} className={classes.toggleButton}>
        <ChevronRightIcon />
      </ButtonBase>
      <section
        className={cn(classes.content, {
          [classes.contentShift]: isLeftBarOpen,
        })}
      >
        {children}
      </section>
    </>
  );
};

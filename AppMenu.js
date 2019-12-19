import React from 'react';
import AppNavigationComponent from './AppNavigationComponent.js';
import AppMenuRoutes from './AppMenuRoutes.js';


const AppMenu = () => (
  <>
    <AppNavigationComponent />
    <div className="content"><AppMenuRoutes /></div>
  </>
);

export default AppMenu;
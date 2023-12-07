import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "@/pages/routes";

// pages
import Presentation from "../Presentation/Presentation";
import Upgrade from "../Upgrade/Upgrade";
import DashboardOverview from "../dashboard/DashboardOverview/ui";
import Transactions from "../Transactions/Transactions";
import Settings from "../Settings/Settings";
import BootstrapTables from "@/widgets/BootstrapTables";
import Signin from "../auth/Signin/ui";
import Signup from "../auth/Signup/ui";
import ForgotPassword from "../auth/ForgotPassword/ui";
import ResetPassword from "../auth/ResetPassword/ui";
import Lock from "../auth/Lock/ui";
import NotFoundPage from "../auth/NotFound/ui";
import ServerError from "../auth/ServerError/ui";

// documentation pages
import DocsOverview from "../documentation/DocsOverview/ui";
import DocsDownload from "../documentation/DocsDownload/ui";
import DocsQuickStart from "../documentation/DocsQuickStart/ui";
import DocsLicense from "../documentation/DocsLicense/ui";
import DocsFolderStructure from "../documentation/DocsFolderStructure/ui";
import DocsBuild from "../documentation/DocsBuild/ui";
import DocsChangelog from "../documentation/DocsChangelog/ui";

// components
import Sidebar from "@/widgets/Sidebar";
import Navbar from "@/widgets/Navbar";
import Footer from "@/widgets/Footer";
import Preloader from "@/widgets/Preloader";

import Accordion from "../components/Accordion/ui";
import Alerts from "../components/Alerts/ui";
import Badges from "../components/Badges/ui";
import Breadcrumbs from "../components/Breadcrumbs/ui";
import Buttons from "../components/Buttons/ui";
import Forms from "../components/Forms/ui";
import Modals from "../components/Modals/ui";
import Navs from "../components/Navs/ui";
import Navbars from "../components/Navbars/ui";
import Pagination from "../components/Pagination/ui";
import Popovers from "../components/Popovers/ui";
import Progress from "../components/Progress/ui";
import Tables from "../components/Tables/ui";
import Tabs from "../components/Tabs/ui";
import Tooltips from "../components/Tooltips/ui";
import Toasts from "../components/Toasts/ui";

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', String(!showSettings));
  }

  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar />

        <main className="content">
          <Navbar />
          <Component {...props} />
          <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
        </main>
      </>
    )}
    />
  );
};

export default () => (
  <Switch>
    <RouteWithLoader exact path={Routes.Presentation.path} component={Presentation} />
    <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
    <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
    <RouteWithLoader exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
    <RouteWithLoader exact path={Routes.ResetPassword.path} component={ResetPassword} />
    <RouteWithLoader exact path={Routes.Lock.path} component={Lock} />
    <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />
    <RouteWithLoader exact path={Routes.ServerError.path} component={ServerError} />

    {/* pages */}
    <RouteWithSidebar exact path={Routes.DashboardOverview.path} component={DashboardOverview} />
    <RouteWithSidebar exact path={Routes.Upgrade.path} component={Upgrade} />
    <RouteWithSidebar exact path={Routes.Transactions.path} component={Transactions} />
    <RouteWithSidebar exact path={Routes.Settings.path} component={Settings} />
    <RouteWithSidebar exact path={Routes.BootstrapTables.path} component={BootstrapTables} />

    {/* components */}
    <RouteWithSidebar exact path={Routes.Accordions.path} component={Accordion} />
    <RouteWithSidebar exact path={Routes.Alerts.path} component={Alerts} />
    <RouteWithSidebar exact path={Routes.Badges.path} component={Badges} />
    <RouteWithSidebar exact path={Routes.Breadcrumbs.path} component={Breadcrumbs} />
    <RouteWithSidebar exact path={Routes.Buttons.path} component={Buttons} />
    <RouteWithSidebar exact path={Routes.Forms.path} component={Forms} />
    <RouteWithSidebar exact path={Routes.Modals.path} component={Modals} />
    <RouteWithSidebar exact path={Routes.Navs.path} component={Navs} />
    <RouteWithSidebar exact path={Routes.Navbars.path} component={Navbars} />
    <RouteWithSidebar exact path={Routes.Pagination.path} component={Pagination} />
    <RouteWithSidebar exact path={Routes.Popovers.path} component={Popovers} />
    <RouteWithSidebar exact path={Routes.Progress.path} component={Progress} />
    <RouteWithSidebar exact path={Routes.Tables.path} component={Tables} />
    <RouteWithSidebar exact path={Routes.Tabs.path} component={Tabs} />
    <RouteWithSidebar exact path={Routes.Tooltips.path} component={Tooltips} />
    <RouteWithSidebar exact path={Routes.Toasts.path} component={Toasts} />

    {/* documentation */}
    <RouteWithSidebar exact path={Routes.DocsOverview.path} component={DocsOverview} />
    <RouteWithSidebar exact path={Routes.DocsDownload.path} component={DocsDownload} />
    <RouteWithSidebar exact path={Routes.DocsQuickStart.path} component={DocsQuickStart} />
    <RouteWithSidebar exact path={Routes.DocsLicense.path} component={DocsLicense} />
    <RouteWithSidebar exact path={Routes.DocsFolderStructure.path} component={DocsFolderStructure} />
    <RouteWithSidebar exact path={Routes.DocsBuild.path} component={DocsBuild} />
    <RouteWithSidebar exact path={Routes.DocsChangelog.path} component={DocsChangelog} />

    <Redirect to={Routes.NotFound.path} />
  </Switch>
);

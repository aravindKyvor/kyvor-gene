import React, { Component, Suspense, lazy } from "react";

import { Switch, Route } from "react-router-dom";
import Projectform from "./Projectform";
import ReportsTable from "./basic-ui/ReportsTable";
import Spinner from "../app/shared/Spinner";
import Annovar from "./basic-ui/Annovar";
import Reports1 from "./basic-ui/Reports1";
import Basespace from "./basic-ui/Basespace";
import Basespace1 from "./basic-ui/Basespace1";
import Analysis2 from "./basic-ui/Analysis2";
import AddBiosample from "../basespace/AddBiosample";
import EditForm from "./form-elements/EditForm";
import Biosample from "../basespace/Biosample";
import Update from "../basespace/UpdateBioSample";
import ProjectList from "../basespace/projects/Projectlist";
import Addproject from "../basespace/projects/Addproject";
import UpdateProject from "../basespace/projects/UpdateProject";
import ApplicationList from "../basespace/applications/Applicationlist";
import ApplicationDetail from "../basespace/applications/ApplicationDetail";
import WhoAmI from "../basespace/users/WhoAmI";
const Analysis = lazy(() => import("./basic-ui/Analysis"));
const PrivateRoutes = lazy(() => import("../PrivateRoutes"));
const Google = lazy(() => import("./user-pages/Google"));
const Login = lazy(() => import("./user-pages/Login"));
const Dashboard = lazy(() => import("./dashboard/Dashboard"));

const Profile = lazy(() => import("../app/shared/Profile"));

const BasicElements = lazy(() => import("./form-elements/BasicElements"));
const Patientform = lazy(() => import("./form-elements/Patientform"));
const BasicTable = lazy(() => import("./tables/BasicTable"));

const Mdi = lazy(() => import("./icons/Mdi"));

const ChartJs = lazy(() => import("./charts/ChartJs"));

const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));

const BlankPage = lazy(() => import("./general-pages/BlankPage"));

class AppPrivateRoutess extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <PrivateRoutes exact path="/" component={Dashboard} />
          <PrivateRoutes exact path="/basic-ui/Analysis" component={Analysis} />
          <PrivateRoutes
            exact
            path="/basic-ui/Analysis2"
            component={Analysis2}
          />
          <PrivateRoutes
            exact
            path="/basic-ui/reports"
            component={ReportsTable}
          />

          <PrivateRoutes
            exact
            path="/basic-ui/Basespace1"
            component={Basespace1}
          />
          <PrivateRoutes
            exact
            path="/basic-ui/Basespace"
            component={Basespace}
          />
          <PrivateRoutes exact path="/basic-ui/Reports1" component={Reports1} />
          <PrivateRoutes
            exact
            path="/basespace/biosample"
            component={Biosample}
          />
          <PrivateRoutes
            exact
            path="/basespace/addbiosample"
            component={AddBiosample}
          />
          <PrivateRoutes exact path="/update/:id" component={Update} />

          {/* projects folder */}
          <PrivateRoutes
            exact
            path="/basespace/projects/list"
            component={ProjectList}
          />
          <PrivateRoutes
            exact
            path="/basespace/projects/addproject"
            component={Addproject}
          />
          <PrivateRoutes
            exact
            path="/basespace/users/whoami"
            component={WhoAmI}
          />
          <PrivateRoutes
            exact
            path="/project/update/:id"
            component={UpdateProject}
          />

          {/*  */}
          <PrivateRoutes
            exact
            path="/basespace/applicationlist"
            component={ApplicationList}
          />
          <PrivateRoutes exact path="/view/:id" component={ApplicationDetail} />

          <PrivateRoutes path="/basic-ui/Annovar" component={Annovar} />
          <PrivateRoutes
            exact
            path="/form-Elements/basic-elements"
            component={BasicElements}
          />
          <PrivateRoutes
            exact
            path="/form-Elements/patientform"
            component={Patientform}
          />
          <PrivateRoutes
            exact
            path="/analysis/projectform"
            component={Projectform}
          />
          <PrivateRoutes
            exact
            path="/tables/basic-table"
            component={BasicTable}
          />
          <PrivateRoutes exact path="/icons/mdi" component={Mdi} />
          <PrivateRoutes exact path="/charts/chart-js" component={ChartJs} />
          <Route exact path="/user-pages/login-1" component={Login} />
          <Route exact path="/google" component={Google} />

          <PrivateRoutes exact path="/update/:id" component={EditForm} />
          <Route path="*" exact={true} component={Error404} />

          <PrivateRoutes
            exact
            path="/error-pages/error-500"
            component={Error500}
          />
          <PrivateRoutes path="/profile" component={Profile} />
          <PrivateRoutes
            path="/general-pages/blank-page"
            component={BlankPage}
          />
        </Switch>
      </Suspense>
    );
  }
}

export default AppPrivateRoutess;

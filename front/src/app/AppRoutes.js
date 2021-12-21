import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Projectform from "./Projectform";
import ReportsTable from "./basic-ui/ReportsTable";
import Spinner from "../app/shared/Spinner";
import Annovar from "./basic-ui/Annovar";
import Reports1 from "./basic-ui/Reports1";
import Basespace from "./basic-ui/Basespace";
import Basespace1 from "./basic-ui/Basespace1";
import Analysis2 from "./basic-ui/Analysis2";

import EditForm from "./form-elements/EditForm";
import Biosample from "../basespace/biosample/Biosample";

import ProjectList from "../basespace/projects/Projectlist";

import ApplicationList from "../basespace/applications/Applicationlist";
import ApplicationDetail from "../basespace/applications/ApplicationDetail";
import WhoAmI from "../basespace/users/WhoAmI";
import Credits from "../basespace/credits/Credits";

import AnalysisList from "../basespace/analysis/AnalysisList";



const Analysis = lazy(() => import("./basic-ui/Analysis"));

const PrivateRoutes = lazy(() => import("../PrivateRoutes"));
const Google = lazy(() => import("./user-pages/Google"));
const Login = lazy(() => import("./user-pages/Login"));
const Dashboard = lazy(() => import("./dashboard/Dashboard"));

const Profile = lazy(() => import("../app/shared/Profile"));

const BasicElements = lazy(() => import("./form-elements/BasicElements"));
const Patientform = lazy(() => import("./form-elements/Patientform"));



const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));

class AppPrivateRoutess extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          {/* Dashboard Starts  */}

          <PrivateRoutes exact path="/" component={Dashboard} />
          {/* Dashboard Ends */}

          {/* Basic ui Starts */}
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

          <PrivateRoutes path="/basic-ui/Annovar" component={Annovar} />

          {/* Basic ui Ends */}

          {/* Shared Section Starts */}
          {/* Shared Section Ends */}

          {/* Basespace Biosample Section */}
          <PrivateRoutes
            exact
            path="/basespace/biosample"
            component={Biosample}
          />

          {/* BaseSpace BioSample Ends */}

          {/*  BaseSpace Project Section */}
          <PrivateRoutes
            exact
            path="/basespace/projects/list"
            component={ProjectList}
          />
          

          {/* Project Ends */}

          {/* Analysis secion */}

          <PrivateRoutes
            exact
            path="/basespace/analysis"
            component={AnalysisList}
          />

          {/* Analysis End */}

          {/* Basespace Application Section */}

          <PrivateRoutes
            exact
            path="/basespace/applicationlist"
            component={ApplicationList}
          />
          <PrivateRoutes exact path="/view/:id" component={ApplicationDetail} />
          {/* Basespace Application Ends */}

          {/* Basespace User Section */}
          <PrivateRoutes
            exact
            path="/basespace/users/whoami"
            component={WhoAmI}
          />
          {/* Basespace User Ends */}

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

<PrivateRoutes exact path="/basespace/credits" component={Credits} />

         
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
          <Redirect to="/" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppPrivateRoutess;

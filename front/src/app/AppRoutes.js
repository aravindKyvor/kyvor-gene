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
import Analysis from "./basic-ui/Analysis";
import PrivateRoute from "../PrivateRoutes";
import Google from "./user-pages/Google";
import Login from "./user-pages/Login";
import Dashboard from "./dashboard/Dashboard";
import Profile from "../app/shared/Profile";
import BasicElements from "./form-elements/BasicElements";

import Error404 from "./error-pages/Error404";
import Error500 from "./error-pages/Error500";

class AppPrivateRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          {/* Dashboard Starts  */}

          <PrivateRoute exact path="/" component={Dashboard} />
          {/* Dashboard Ends */}

          {/* Basic ui Starts */}
          <PrivateRoute exact path="/basic-ui/Analysis" component={Analysis} />
          <PrivateRoute
            exact
            path="/basic-ui/Analysis2"
            component={Analysis2}
          />
          <PrivateRoute
            exact
            path="/basic-ui/reports"
            component={ReportsTable}
          />

          <PrivateRoute
            exact
            path="/basic-ui/Basespace1"
            component={Basespace1}
          />
          <PrivateRoute
            exact
            path="/basic-ui/Basespace"
            component={Basespace}
          />
          <PrivateRoute exact path="/basic-ui/Reports1" component={Reports1} />

          <PrivateRoute path="/basic-ui/Annovar" component={Annovar} />

          {/* Basic ui Ends */}

          {/* Shared Section Starts */}
          {/* Shared Section Ends */}

          {/* Basespace Biosample Section */}
          <PrivateRoute
            exact
            path="/basespace/biosample"
            component={Biosample}
          />

          {/* BaseSpace BioSample Ends */}

          {/*  BaseSpace Project Section */}
          <PrivateRoute
            exact
            path="/basespace/projects/list"
            component={ProjectList}
          />

          {/* Project Ends */}

          {/* Analysis secion */}

          <PrivateRoute
            exact
            path="/basespace/analysis"
            component={AnalysisList}
          />

          {/* Analysis End */}

          {/* Basespace Application Section */}

          <PrivateRoute
            exact
            path="/basespace/applicationlist"
            component={ApplicationList}
          />
          <PrivateRoute exact path="/view/:id" component={ApplicationDetail} />
          {/* Basespace Application Ends */}

          {/* Basespace User Section */}
          <PrivateRoute
            exact
            path="/basespace/users/whoami"
            component={WhoAmI}
          />
          {/* Basespace User Ends */}

          <PrivateRoute
            exact
            path="/form-Elements/basic-elements"
            component={BasicElements}
          />
          {/* <PrivateRoute
            exact
            path="/form-Elements/patientform"
            component={Patientform}
          /> */}
          <PrivateRoute
            exact
            path="/analysis/projectform"
            component={Projectform}
          />

          <PrivateRoute exact path="/basespace/credits" component={Credits} />

          <Route exact path="/user-pages/login-1" component={Login} />
          <Route exact path="/google" component={Google} />

          <PrivateRoute exact path="/update/:id" component={EditForm} />
          <Route path="*" exact={true} component={Error404} />

          <PrivateRoute
            exact
            path="/error-pages/error-500"
            component={Error500}
          />

          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Suspense>
    );
  }
}

export default AppPrivateRoutes;

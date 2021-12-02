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
          <PrivateRoutes path="/basic-ui/Analysis" component={Analysis} />
          <PrivateRoutes path="/basic-ui/Analysis2" component={Analysis2} />
          <PrivateRoutes path="/basic-ui/reports" component={ReportsTable} />

          <PrivateRoutes path="/basic-ui/Basespace1" component={Basespace1} />
          <PrivateRoutes path="/basic-ui/Basespace" component={Basespace} />
          <PrivateRoutes path="/basic-ui/Reports1" component={Reports1} />
          <PrivateRoutes path="/basespace/biosample" component={Biosample} />
          <PrivateRoutes path="/basespace/addbiosample" component={AddBiosample} />
          <PrivateRoutes path="/update/:id" component={Update} />



          {/* projects folder */}
          <PrivateRoutes path="/basespace/projects/list" component={ProjectList} />
          <PrivateRoutes path="/basespace/projects/addproject" component={Addproject} />
          <PrivateRoutes path="/project/update/:id" component={UpdateProject} />
          
          {/*  */}
          <PrivateRoutes path="/basic-ui/Annovar" component={Annovar} />
          <PrivateRoutes
            path="/form-Elements/basic-elements"
            component={BasicElements}
          />
          <PrivateRoutes
            path="/form-Elements/patientform"
            component={Patientform}
          />
          <PrivateRoutes exact path="/analysis/projectform" component={Projectform} />
          <PrivateRoutes path="/tables/basic-table" component={BasicTable} />
          <PrivateRoutes path="/icons/mdi" component={Mdi} />
          <PrivateRoutes path="/charts/chart-js" component={ChartJs} />
          <Route path="/user-pages/login-1" component={Login} />
          <Route path="/google" component={Google} />

          <PrivateRoutes path="/update/:id" component={EditForm} />
          <Route path="*" exact={true} component={Error404} />

          <PrivateRoutes path="/error-pages/error-500" component={Error500} />
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

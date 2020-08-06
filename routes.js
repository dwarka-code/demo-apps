import Layout from "./layout";
import Dashboard from "./Dashboard";
import ListSubProject from "./ListSubProject";
import Masking from "./masking";

export default [
  {
    path: "/",
    component: Dashboard,
    exact: true
  },
  {
    path: "/project/:id",
    component: ListSubProject,
    exact: true
  },
  {
    path: "/project",
    component: ListSubProject,
    exact: true
  },
  {
    path: "/kyc",
    component: Layout,
    exact: true
  },
  {
    path: "/masking",
    component: Masking,
    exact: true
  }
];

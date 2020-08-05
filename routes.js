import Layout from "./layout";
import Dashboard from "./Dashboard";

export default [
  {
    path: "/",
    component: Dashboard,
    exact: true
  },
  {
    path: "/kyc",
    component: Layout,
    exact: true
  }
];

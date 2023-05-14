import SideNavigation from "../Layout/SideNavigation";
import ChangePsw from "./ChangePsw";
import classes from "./ChangePsw.module.css";
import { Route } from "react-router-dom";

const sideBarButton = [
  {
    index: 1,
    testo: "profilo",
    nav: "/profile/anagrafica",
    component: <ChangePsw />,
  },
  {
    index: 2,
    testo: "cani",
    nav: "/profile/dogs",
    component: <ChangePsw />,
  },
  {
    index: 3,
    testo: "cambia password",
    nav: "/profile/changepwd",
    component: <ChangePsw />,
  },
];
const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <h3>Your User Profile</h3>
      <SideNavigation sideBarButton={sideBarButton} />
      {sideBarButton.map((obj, index) => (
        <Route key={obj.index} path={obj.nav}>
          {obj.component}
        </Route>
      ))}
      ;
    </section>
  );
};

export default UserProfile;

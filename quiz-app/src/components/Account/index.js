import AccountDefault from "./AccountDefault";
import AccountLogin from "./AccountLogin";
import "./Account.scss";
function Account({ isLogin }) {
  const isNavLinkActive = (e) => {
    return e.isActive ? "menu__link menu__link--active" : "menu__link";
  };

  return (
    <>
      {isLogin ? (
        <AccountLogin isNavLinkActive={isNavLinkActive}></AccountLogin>
      ) : (
        <AccountDefault isNavLinkActive={isNavLinkActive}></AccountDefault>
      )}
    </>
  );
}

export default Account;

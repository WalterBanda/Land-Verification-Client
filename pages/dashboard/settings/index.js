import { Button, PageBuilder } from "@components/index";
import { useAuth } from "@core/hooks/auth";
import { home, sections, settings } from "@styles/index";

function ProfileSettings() {
  const { user } = useAuth()
  return <div>
    <p className={sections.header}> Profile Settings </p>
    <div className={settings.profileRoot}>
      <div className={settings.logo}>
        <img src={user?.photoURL} alt="Profile Url" />
      </div>
      <div className={settings.profileDetails}>
        <span>Profile Name</span>
        <p>{user?.displayName ?? 'UserName'}</p>
      </div>
      <Button className={settings.toogleEdit}>
        <i className="verifier-info" />
      </Button>
    </div>
  </div>
}

export default function Index() {
  return (
    <div className={home.root}>
      <ProfileSettings />
    </div>
  );
}
Index.getLayout = function getLayout(page) {
  return <PageBuilder title="Settings">{page}</PageBuilder>;
};

import { Button, PageBuilder } from "@components/index";
import { useAuth } from "@core/hooks/auth";
import { ModalUnstyled } from "@mui/base";
import { home, sections, settings, components } from "@styles/index";
import { forwardRef, useState } from "react";

function ProfileSettings() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Backdrop = forwardRef(({ ownerState, ...props }, ref) => {
    return <div className={components.backdrop} ref={ref} {...props} />
  })

  const Modal = forwardRef(({ ownerState, className, ...props }, ref) => {
    return <div className={components.modal} {...props} ref={ref} />
  })

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
      <Button className={settings.toogleEdit} onClick={handleOpen}>
        <i className="verifier-info" />
      </Button>
    </div>
    <ModalUnstyled
      open={open}
      onClose={handleClose}
      slots={{ backdrop: Backdrop, root: Modal }}
    >
      <div>Hello</div>
    </ModalUnstyled>
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

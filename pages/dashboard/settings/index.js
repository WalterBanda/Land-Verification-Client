import { Button, Input, PageBuilder } from "@components/index";
import { useAuth } from "@core/hooks/auth";
import { ModalUnstyled } from "@mui/base";
import { home, sections, settings, components } from "@styles/index";
import { forwardRef, useState } from "react";

const styles = ['adventurer', 'big-smile', 'croodles', 'female', 'identicon', 'initials', 'jdenticon', 'open-peeps', 'micah']

const Backdrop = forwardRef(({ ownerState, ...props }, ref) => {
  return <div className={components.backdrop} ref={ref} {...props} />
})

const Modal = forwardRef(({ ownerState, className, ...props }, ref) => {
  return <div className={components.modal} {...props} ref={ref} />
})

function AltPhoto({ style, seed }) {
  return <div className={settings.altProfile}>
    <img src={`https://avatars.dicebear.com/api/${style}/${seed}.svg`} alt="" />
  </div>
}

function EditProfileModal({ open, handleClose, user }) {
  return <ModalUnstyled
    open={open}
    onClose={handleClose}
    slots={{ backdrop: Backdrop, root: Modal }}
  >
    <div className={settings.editProfileRoot}>
      <div className={settings.editProfile}>
        <div className={settings.logo}>
          <img src={user?.photoURL} alt="Profile Url" />
        </div>
        <main>
          <span>Change or add profile picture</span>
          <div className={settings.altProfileContainer}>
            <Button><i className="verifier-add" /></Button>
            <div>
              {styles.map((style) => <AltPhoto key={style} style={style} seed={user?.uid} />)}
            </div>
          </div>
        </main>
      </div>
      <div className={settings.profileDetails}>
        <span>Profile Name</span>
        <Input className={settings.profileDetailsInput} value={user?.displayName} hint={"UserName"} />
        <Button>Save</Button>
      </div>
    </div>
  </ModalUnstyled>
}

function ProfileSettings() {

  const { user } = useAuth()

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <EditProfileModal open={open} handleClose={handleClose} user={user} />
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

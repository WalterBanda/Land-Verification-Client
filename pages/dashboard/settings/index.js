import { Button, Input, PageBuilder } from "@components/index";
import { useAuth } from "@core/hooks/auth";
import { ModalUnstyled } from "@mui/base";
import { home, sections, settings, components } from "@styles/index";
import { getAuth, updateProfile } from "firebase/auth";
import { forwardRef, useState } from "react";
import { useController, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const styles = ['adventurer', 'big-smile', 'croodles', 'female', 'identicon', 'initials', 'jdenticon', 'open-peeps', 'micah']

const Backdrop = forwardRef(({ ownerState, ...props }, ref) => {
  return <div className={components.backdrop} ref={ref} {...props} />
})

const Modal = forwardRef(({ ownerState, className, ...props }, ref) => {
  return <div className={components.modal} {...props} ref={ref} />
})

function AltPhoto({ style, seed, ...props }) {
  return <div className={settings.altProfile}  {...props}>
    <img src={`https://avatars.dicebear.com/api/${style}/${seed}.svg`} alt="" />
  </div>
}

function EditProfileModal({ open, handleClose, user }) {

  const { register, handleSubmit, control, watch } = useForm({ defaultValues: { img: user?.photoURL, name: user?.displayName } })

  const { field: { onChange, value: img } } = useController({ name: 'img', control })

  const submit = ({ img, name }) => {
    updateProfile(user, { photoURL: img, displayName: name }).then(() => {
      handleClose()
      toast.success("Successfully Updated Profile")
    }).catch((error) => {
      toast.success(`Unable to Update Profile, error code ${error?.code}`)
    })
  }


  return <ModalUnstyled
    open={open}
    onClose={handleClose}
    slots={{ backdrop: Backdrop, root: Modal }}
  >
    <div className={settings.editProfileRoot}>
      <div className={settings.editProfile}>
        <div className={settings.logo}>
          <img src={img} alt="Profile Url" />
        </div>
        <main>
          <span>Change or add profile picture</span>
          <div className={settings.altProfileContainer}>
            <Button onClick={() => fileRef?.click()}>
              <input type='file' accept="image/jpeg,image/gif,image/svg+xml" onChange={handleFileInput} className={settings.file} ref={(ref) => { fileRef = ref }} />
              <i className="verifier-add" />
            </Button>
            <div>
              {styles.map((style) => <AltPhoto key={style} style={style} seed={user?.uid} onClick={() => onChange(`https://avatars.dicebear.com/api/${style}/${user?.uid}.svg`)} />)}
            </div>
          </div>
        </main>
      </div>
      <div className={settings.profileDetails}>
        <span>Profile Name</span>
        <Input className={settings.profileDetailsInput} {...register('name')} hint={"UserName"} />
        <Button onClick={handleSubmit(submit)}>Save</Button>
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
      {open && <EditProfileModal open={open} handleClose={handleClose} user={user} />}
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

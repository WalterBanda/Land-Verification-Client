import { AuthPage, Button, Input, RegisterUser } from "../../components";
import { auth } from "../../styles";
export default function Index() {
  return (
    <div className={auth.onboarding}>
      <p>Login to your Account</p>
      <>
        <div
          style={{
            display: "inline-flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 68,
              height: 66,
              paddingTop: 15,
              paddingBottom: 15,
              paddingLeft: 16,
              paddingRight: 17,
              backgroundColor: "black",
              borderRadius: 9,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              style={{ width: 35, height: 36, borderRadius: 8 }}
              src="https://via.placeholder.com/35x36"
            />
          </div>
          <div style={{ width: 20 }} />
          <div
            style={{
              width: 68,
              height: 66,
              paddingTop: 16,
              paddingBottom: 14,
              paddingLeft: 18,
              paddingRight: 14,
              backgroundColor: "black",
              borderRadius: 9,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                backgroundColor: "rgba(66, 133, 244, 1)",
                borderRadius: 8,
              }}
            />
          </div>
          <div style={{ width: 20 }} />
          <img
            style={{ width: 68, height: 66, borderRadius: 8 }}
            src="https://via.placeholder.com/68x66"
          />
        </div>
      </>
      <RegisterUser />
    </div>
  );
}

Index.getLayout = function getLayout(page) {
  return <AuthPage title="Onboarding 🔐">{page}</AuthPage>;
};

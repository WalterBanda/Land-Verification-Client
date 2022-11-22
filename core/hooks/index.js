import { DataProvider } from "./transactions";
import { StatsProvider } from "./stats";
import LoadData from "../services/loaders";
import { AuthProvider } from "./auth";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "./app";

export default function Provider({ children }) {
  return (
    <>
      <AuthProvider>
        <AppProvider>
          <DataProvider>
            <StatsProvider>
              {children}
              <LoadData />
              <Toaster position="top-right" reverseOrder={false} />
            </StatsProvider>
          </DataProvider>
        </AppProvider>
      </AuthProvider>
    </>
  );
}

export { useStats } from "./stats";
export { useData } from "./transactions";

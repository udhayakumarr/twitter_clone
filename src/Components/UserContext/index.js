import { createContext, useContext } from "react";

import useCustomFetch from "../Hooks/useCustomFetch";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const { data } = useCustomFetch("user");
  return <UserContext.Provider value={{ ...data}}>{children}</UserContext.Provider>;
}
function useUserProfile() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}
export { useUserProfile };

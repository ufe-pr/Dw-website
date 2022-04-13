import { ethers } from "ethers";
import React from "react";

export const AccountContext = React.createContext({
  provider: ethers.getDefaultProvider(),
  signer: null,
  connectWallet: () => {},
  closeConnection: () => {},
  account: "",
  connected: false,
  loading: true,
});

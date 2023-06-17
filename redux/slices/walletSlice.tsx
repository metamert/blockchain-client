import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type WalletState = {
    publicKey: string | null;
    privateKey: string | null;
};

const initialState = {
    publicKey: null,
    privateKey: null
} as WalletState;

export const wallet = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    reset: () => initialState,
  
    setKeys: (state, action: PayloadAction<{
          publicKey: string,
          privateKey:string
    }>) => {
        state.publicKey = action.payload.publicKey
        state.privateKey = action.payload.privateKey
    },
    
  },
});

export const {
  setKeys,
  reset,
} = wallet.actions;
export default wallet.reducer;

import { createSlice } from "@reduxjs/toolkit";

interface stateType {
  clients: string[];
}

const initialState: stateType = {
  clients: [],
};

const defaultReducer = createSlice({
  name: "defaultReducer",
  initialState: initialState,
  reducers: {
    addClient: (state, action: any) => {
      state.clients = [...state.clients, action.payload];
    },
  },
});

export const { addClient } = defaultReducer.actions;

export default defaultReducer.reducer;

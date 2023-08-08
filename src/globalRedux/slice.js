import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


export const Slice = createSlice({
  name: "task",
  initialState: {
    homePageFlag: 'dashboard',
    menuFlag: 'true',
    searchValue: ''
  },
  reducers: {
    setHomePageFlag: (state, action) => {
      state.homePageFlag = action.payload;
    },
    setMenuFlag: (state, action) => {
      state.menuFlag = action.payload
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload
    },
  },
})

export const { setHomePageFlag, setMenuFlag, setSearchValue} = Slice.actions;
export default Slice.reducer 
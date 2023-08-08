import { createSlice } from "@reduxjs/toolkit"


export const Slice = createSlice({
  name: "user",
  initialState: {
    homePageFlag: 'dashboard',
    menuFlag: 'true',
    searchValue: '',
    user: ''
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
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
})

export const { setHomePageFlag, setMenuFlag, setSearchValue, setUser } = Slice.actions;
export default Slice.reducer 
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IGift } from '../../types/gift'

interface IInitialState {
    gift: IGift[]
}
const initialState: IInitialState = {
    gift: []
}

const giftSlice = createSlice({
  name: 'giftState',
  initialState,
  reducers: {
    setGifts: (state, action: PayloadAction<IGift[]>) => {
      state.gift = action.payload
    },

    resetGIfts: (state) => {
        state.gift = []
    }
  },
})

export const { setGifts, resetGIfts } = giftSlice.actions

export default giftSlice.reducer
import { crosswordData } from '@/utilities/dumpData';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  currentUser: null,
  games: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<any>) {
      state.currentUser = action.payload;
    },
    setGame(state, action: PayloadAction<any>) {
      state.games = action.payload;
    },
    showAnswer(state, action: PayloadAction<{ id: string }>) {
      const game = state.games.find((game: any) => game.id === action.payload.id);
      if (game) {
        game.isShow = true;
      }
    },
    resetGame(state) {
      state.games = crosswordData;
    },
  },
});

export const { setCurrentUser, setGame, resetGame, showAnswer } = userSlice.actions;

export default userSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface NoteFormState {
    value: string
};

const initialState: NoteFormState = {
    value: ''
};

export const noteFormSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        updateNote: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
        clearNote: (state) => {
            state.value = '';
        }
    }
});

export const {updateNote, clearNote} = noteFormSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const noteForm = (state: RootState) => state.note.value;

export default noteFormSlice.reducer;

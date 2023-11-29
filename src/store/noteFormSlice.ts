import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

type Note = {
    id?: number;
    title: string;
    content: string;
}

interface NoteFormState {
    notes: Note[];
};

const initialState: NoteFormState = {
    notes: []
};

export const noteFormSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
       addNote: (state, action: PayloadAction<Note>) => {
        state.notes.push(action.payload);
       },
    }
});

export const { addNote } = noteFormSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const noteForm = (state: RootState) => state.note.value;

export default noteFormSlice.reducer;

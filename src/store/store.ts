import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import noteFormReducer from './noteFormSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer, // Add the counterReducer to the storef
    note: noteFormReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;

/* ! Dev Notes to get used to RTK:
1/ Creating a Slice in Redux Toolkit:
In your noteFormSlice.ts, you've created a slice using createSlice. This slice includes your state, reducers, and 
automatically generated actions.

2. Exporting the Reducer:
At the end of your slice file, you have export default noteFormSlice.reducer;. This line exports the reducer 
function for your noteFormSlice.

3. Importing and Using the Reducer in Your Store:
When you import this reducer in your store.ts file, you can name it whatever you like. The name noteFormReducer 
is just a variable name for the imported reducer. It does not need to match any name in your slice file. 
It's just a way to refer to the reducer in your store configuration.
*/
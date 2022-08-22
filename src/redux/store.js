import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contacts/contactApi';
import { persisteAuthReducer } from './auth/authSlice';
import contactsSlice from './contacts/contactsSlice';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    auth: persisteAuthReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactApi.middleware,
  ],
});

export const persistor = persistStore(store);

import { createSelector } from "reselect";

const userAuthReducer = (state) => state.user;

export const selectUser = createSelector(
  [userAuthReducer],
  (user) => user.currentUser
);

export const selectAuthError = createSelector(
  [userAuthReducer],
  (user) => user.error
);

import {RootState} from "../../store";
import {UserState} from "./contracts/state";
import {createSelector} from "reselect";

export const selectUserState = (state: RootState): UserState => state.;

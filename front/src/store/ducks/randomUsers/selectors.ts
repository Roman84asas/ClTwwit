import {RootState} from "../../store";
import {LoadingState, UsersState} from "./contracts/state";

export const selectUsers = (state: RootState): UsersState => state.users;
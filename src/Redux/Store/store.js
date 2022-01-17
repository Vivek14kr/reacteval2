import {createStore, combineReducers} from "redux";

import {reducer as AdminReducer} from "../Admin/reducer"
import {reducer as AuthReducer} from "../Auth/reducer"
import { reducer as ClientReducer } from "../Client/reducer";


const rootreducer = combineReducers({
    AdminState : AdminReducer,
    AuthState: AuthReducer,
    ClientState : ClientReducer
})
export const store = createStore(rootreducer);
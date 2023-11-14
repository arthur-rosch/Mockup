import { userReducer } from "@/redux/reducers";
import { combineReducers, legacy_createStore as createStore } from "redux";


const rootReducer = combineReducers({
  userReducer,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const configureStore: any = () => {
  return createStore(rootReducer);
};

export default configureStore;


export type State = ReturnType<typeof rootReducer>;
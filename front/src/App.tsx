import React from 'react';
import {Route, Switch } from 'react-router-dom';
import { SignIn } from "./pages/Signin/index";
import { Home } from "./pages/Home/";
import {AuthApi} from "./services/api/authApi";
import {useDispatch} from "react-redux";
import {setUserData} from "./store/ducks/user/actionCreators";


function App() {
    const dispatch = useDispatch();
    const checkAth = async () => {
        try {
            const {data} = await AuthApi.getMe();
            dispatch(setUserData(data));
        } catch (e) {
            console.log(e);
        }
    };
    React.useEffect(()=>{
        checkAth();
    }, []);
  return (
    <div className="App">
      <Switch>
          <Route path="/signin" component={SignIn}/>
          <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;

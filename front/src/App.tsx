import React from 'react';
import {Route, Switch, useHistory } from 'react-router-dom';
import { SignIn } from "./pages/Signin/index";
import { Home } from "./pages/Home/";
import {AuthApi} from "./services/api/authApi";
import {useDispatch} from "react-redux";
import {setUserData} from "./store/ducks/user/actionCreators";


function App() {
    const history = useHistory();
    const dispatch = useDispatch();
    const checkAth = async () => {
        try {
            const {data} = await AuthApi.getMe();
            dispatch(setUserData(data));
            history.replace('/home');
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

import { Suspense, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import CustomMenu from "./components/CustomMenu";
import { ROUTER } from "./Routes.js";
import Chat from "./components/Chat/index";
import { UserContext } from "./contextes/UserContext";
import "./styles.css";

const queryClient = new QueryClient();

export default function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <UserContext.Provider value={{ user, setUser }}>
          <QueryClientProvider client={queryClient}>
            <Router>
              <CustomMenu />
              <Switch>
                {Object.keys(ROUTER).map((key) => {
                  return (
                    <Route
                      key={key}
                      path={`/${ROUTER[key].url}`}
                      exact={ROUTER[key].exact}
                    >
                      {ROUTER[key].component}
                    </Route>
                  );
                })}
              </Switch>
            </Router>
            <Chat />
          </QueryClientProvider>
        </UserContext.Provider>
      </Suspense>
    </div>
  );
}

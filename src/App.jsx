import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import CustomMenu from "./components/CustomMenu";
import { ROUTER } from "./Routes.js";
import "./styles.css";

const queryClient = new QueryClient();

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
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
        </QueryClientProvider>
      </Suspense>
    </div>
  );
}

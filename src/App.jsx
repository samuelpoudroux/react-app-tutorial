import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import CustomMenu from "./components/CustomMenu";
import { ROUTER } from "./Routes.js";
import "./styles.css";

const queryClient = new QueryClient();

export default function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <CustomMenu />
          <Switch>
            {Object.keys(ROUTER).map((key) => {
              return (
                <Route
                  key={key}
                  path={`/${ROUTER[key].url}`}
                  component={ROUTER[key].component}
                  exact={ROUTER[key].exact}
                />
              );
            })}
          </Switch>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/layout/MainNavigation";
import QuoteForm from "./components/quotes/QuoteForm";
import QuoteList from "./components/quotes/QuoteList";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
        <Route path='/' exact> 
            <Redirect to='/QuoteList' />
          </Route>
          <Route path="/quotes">
            <QuoteList />
          </Route>
          <Route path="/addquote" exact>
            <QuoteForm />
          </Route>
         
        </Switch>
      </main>
    </div>
  );
}

export default App;

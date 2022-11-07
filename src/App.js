import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import ContactUs from './pages/ContactUs';
import Articles from './pages/Articles';
import ArticleDetails from './pages/ArticleDetails';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/articles' exact>
            <Articles />
          </Route>
          <Route path='/articles/:articleId'>
            <ArticleDetails />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact-us'>
            <ContactUs />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// main-domain.com/article-details/<любое значение>

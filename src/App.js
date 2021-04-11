import logo from './logo.svg';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import SuratList from './components/SuratList'
import SuratDetail from './components/SuratDetail'
import BookmarkList from './components/BookmarkList'

function App() {
  return (
      <BrowserRouter>
        <div className="App  dark:bg-gray-400">
          <Navbar />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/surat/:id" component={SuratDetail} />
              <Route path="/surat" component={SuratList} />
              <Route path="/bookmark" component={BookmarkList} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;

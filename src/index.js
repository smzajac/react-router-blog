import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import BaseLayout from './components/BaseLayout';
import CreatePost from './components/CreatePost';
import ShowPost from './components/ShowPost';

ReactDOM.render(
<BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/create" component={CreatePost} />
      <Route path="/show" component={ShowPost} />
    </Switch>
  </BaseLayout>
</BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();

/*!
 * Copyright (c) 2017-Present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SecureRoute } from './SecureRoute';

import Home from '../pages/Home';
import Protected from '../pages/Protected';
import LoginCallback from './LoginCallback';
import Loading from './Loading';


// NOTE: `loginCallback` *must* be mounted on '/', as it matches the signIn redirect url
const AppRoutes = () => {
  return (
    <Switch>
      <Route path='/' exact render={() => (<LoginCallback homePath='/home' loadingElement={<Loading />} />)} />
      <Route path='/home' component={Home} />
      <SecureRoute path='/protected' component={Protected} />
    </Switch>
  );
};

export default AppRoutes;

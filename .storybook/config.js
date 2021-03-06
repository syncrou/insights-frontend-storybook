// config.js
import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import chaptersAddon, { setDefaults } from 'react-storybook-addon-chapters';

const req = require.context('../src/stories/', true, /stories\.js$/)

setDefaults({
  sectionOptions: {
    useTheme: false,
    showSource: false,
    allowSourceToggling: false,
    showPropTables: false,
    allowPropTablesToggling: false
  }
});
setAddon(chaptersAddon);

// addon-options
setOptions({
  name: 'Red Hat Insights', // Name in top left Corner
  url: 'prod.foo.redhat.com:1337/insights/', // URL
  addonPanelInRight: true,
  sortStoriesByKind: true
});

//adding global decorators
addDecorator(story => (
  <div style={{padding: '15px'}}>
    {story()}
  </div>
));

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);

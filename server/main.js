import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import '../imports/api/users'; //executes the file, no need exports
import '../imports/startup/simple-schema-config.js';

Meteor.startup(() => {
});

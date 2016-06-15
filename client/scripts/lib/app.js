// Libs
import 'angular-animate';
import 'angular-meteor';
import 'angular-moment';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';

import { Meteor } from 'meteor/meteor';
 
// Modules
import CalendarFilter from '../filters/calendar.filter';
import RoutesConfig from '../routes';
import ChatsCtrl from '../controllers/chats.controller';
import ChatCtrl from '../controllers/chat.controller';
import InputDirective from '../directives/input.directive';
 
const App = 'Whatsapp';
 
// App
Angular.module(App, [
  'angular-meteor',
  'angularMoment',
  'ionic'
]);

new Loader(App)
  .load(RoutesConfig)
  .load(ChatsCtrl)
  .load(ChatCtrl)
  .load(InputDirective)
  .load(CalendarFilter);
 
// Startup
if (Meteor.isCordova) {
  Angular.element(document).on('deviceready', onReady);
}
else {
  Angular.element(document).ready(onReady);
}
 
function onReady() {
  Angular.bootstrap(document, [App]);
}
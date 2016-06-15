import { Controller } from 'angular-ecmascript/module-helpers';
import { Chats } from '../../../lib/collections';
 
export default class ChatsCtrl extends Controller {
  constructor() {
    super(...arguments);
 
    this.helpers({
      data() {
        return Chats.find();
      }
    });
  }
 
  
  remove(chat) {
    this.data.delete(chat);
  }
}
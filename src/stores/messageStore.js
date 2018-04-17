import React from 'react';
import {decorate, observable, computed} from 'mobx';
import axios from 'axios';


class MessageStore {
  constructor() {
    //this.currentChannel = localStorage.getItem("currentChannel");
    this.messages = [];
    this.error = [];
    this.messageName = "";
  }


fetchMessages() {
 return axios.get('http://192.168.100.54/messages/')
         .then(res => res.data)
         .then(message => {
           this.messages = message;
         })
         .catch(err => console.error(err));
}

storeMessage(channelID, token) {
 console.log(channelID)
 return axios.post(
   `http://192.168.100.54/channels/${channelID}/send/`,
   {name: this.messageName},
   {headers: {Authorization: `JWT ${token}` }}
 )
 .then(res => res.data)
 .then(
   this.resetForm())
 .then(this.fetchMessages())
 .catch(err => console.error(err));
}

resetForm() {
 this.error = [];
 this.messageName = "";
}

}

decorate(MessageStore, {
  //currentChannel: observable,
  messages: observable,
  error: observable,
  messageName: observable
})

const messageStore =  new MessageStore()
messageStore.fetchMessages();


export default messageStore;

import React from 'react';
import {decorate, observable, computed} from 'mobx';
import axios from 'axios';


class MessageStore {
  constructor() {
    // this.currentChannel = "";
    this.messages = [];
    this.error = [];
    this.messageContent = "";
   //this.fetch = false;
  }


fetchMessages(channelID, token) {
  console.log(channelID)
 return axios.get(`http://192.168.100.54/channels/${channelID}/`,
                  {headers: {Authorization: `JWT ${token}` }})
         .then(res => res.data)
         .then(messages => {
           this.messages = messages;
           //this.fetch = true;
         })
         .catch(err => console.error(err));
}

storeMessage(channelID, token) {
 console.log(token)
 return axios.post(
   `http://192.168.100.54/channels/${channelID}/send/`,
   {message: this.messageContent},
   {headers: {Authorization: `JWT ${token}` }}
 )
 .then(res => res.data)
 .then(message => {
   console.log(message);
   this.resetForm();
 })
 .catch(err => console.error(err));
}

resetForm() {
 this.error = [];
 this.messageContent = "";
}

}

decorate(MessageStore, {
  // currentChannel: observable,
  messages: observable,
  error: observable,
  messageContent: observable,
  fetch: observable,
})

const messageStore =  new MessageStore()
messageStore.fetchMessages();



export default messageStore;

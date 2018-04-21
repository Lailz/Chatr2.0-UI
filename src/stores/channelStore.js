import React from 'react';
import {decorate, observable, computed} from 'mobx';
import axios from 'axios';


class ChannelStore {
  constructor() {
    this.channelName = "";
    this.channels = [];
    this.messages = [];
    this.messageContent = "";
    this.error = [];
  }

fetchChannels() {
  return axios.get('http://192.168.100.54/channels/')
          .then(res => res.data)
          .then(channel => {
            this.channels = channel;
          })
          .catch(err => console.error(err));
}

storeChannel(token) {
  console.log(token)
  return axios.post(
    'http://192.168.100.54/channels/create/',
    {name: this.channelName},
    {headers: {Authorization: `JWT ${token}` }}
  )
  .then(res => res.data)
  .then(channel => {
    this.resetForm();
    this.channels.push(channel);
  })
  .catch(err => console.error(err));
}

getChannelByName(name) {
  return this.channels.find(channel => channel.name == name);
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

resetChannelForm() {
  this.error = [];
  this.channelName = "";
}

resetMessageForm() {
 this.error = [];
 this.messageContent = "";
}
}

decorate(ChannelStore, {
  channelName: observable,
  channels: observable,
  messages: observable,
  messageContent: observable,
  error: observable,
})


const channelStore =  new ChannelStore()
channelStore.fetchChannels();
channelStore.fetchMessages();


export default channelStore;

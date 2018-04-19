import React from 'react';
import {decorate, observable, computed} from 'mobx';
import axios from 'axios';


class ChannelStore {
  constructor() {
    this.channels = [];
    this.error = [];
    this.channelName = "";
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



resetForm() {
  this.error = [];
  this.channelName = "";
}

}



decorate(ChannelStore, {
  channels: observable,
  error: observable,
  channelName: observable,
  fetchChannels: observable
})



const channelStore =  new ChannelStore()
channelStore.fetchChannels();




export default channelStore;

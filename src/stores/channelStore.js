import React from 'react';
import {decorate, observable, computed} from 'mobx';
import axios from 'axios';


class ChannelStore {
  constructor() {
    // this.currentChannel = localStorage.getItem("currentChannel");
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
}
decorate(ChannelStore, {
  //currentChannel: observable,
  channels: observable,
  error: observable,
  channelName: observable
})

const channelStore =  new ChannelStore()
channelStore.fetchChannels();


export default channelStore;

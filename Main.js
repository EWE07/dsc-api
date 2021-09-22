const dscapi = {
  baseURL: 'https://api.discordcup.com/',
  botsURL: 'api/bot/',
  getBot: function(id, type) {
    const fetch = require('node-fetch');
    if(id == null || '') {
      return console.log('ID of bot is empty!');
    }

    if(type == null || undefined) {
      const fetch = require('node-fetch');
      fetch(this.baseURL + this.botsURL + id)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(e => console.error('Fetching error: ' + e))
    }
    let args = [
    'botName',
    'botPrefix', 
    'botAvatar', 
    'botDesc', 
    'botDesc_long', 
    'botLibrary', 
    'botRating', 
    'botVotes', 
    'botInvite', 
    'botWebsite', 
    'botTags',
    'botOwner'
  ];
    switch (type) {
      case 'botName':
        fetch(this.baseURL + this.botsURL + id)
          .then(res => res.json())
          .then(json => console.log(json['name']))
          .catch(e => console.error('Fetching error: ' + e))
        break;
      case 'botPrefix':
        fetch(this.baseURL + this.botsURL + id)
          .then(res => res.json())
          .then(json => console.log(json['prefix']))
          .catch(e => console.error('Fetching error: ' + e))
      break;
      case 'botAvatar':
        fetch(this.baseURL + this.botsURL + id)
        .then(res => res.json())
        .then(json => console.log(json['avatar']))
        .catch(e => console.error('Fetching error: ' + e))
      break;
      case 'botDesc':
        fetch(this.baseURL + this.botsURL + id)
        .then(res => res.json())
        .then(json => console.log(json['shortDescription']))
        .catch(e => console.error('Fetching error: ' + e))
      break;
      case 'botDesc_long':
        fetch(this.baseURL + this.botsURL + id)
        .then(res => res.json())
        .then(json => console.log(json['longDescription']))
        .catch(e => console.error('Fetching error: ' + e))
      break;
      case 'botLibrary':
        fetch(this.baseURL + this.botsURL + id)
        .then(res => res.json())
        .then(json => console.log(json['library']))
        .catch(e => console.error('Fetching error: ' + e))  
      break;
      case 'botRating':
        fetch(this.baseURL + this.botsURL + id)
        .then(res => res.json())
        .then(json => console.log(json['rating']))
        .catch(e => console.error('Fetching error: ' + e))  
      break;
      case 'botVotes':
        fetch(this.baseURL + this.botsURL + id)
        .then(res => res.json())
        .then(json => console.log(json['votes']))
        .catch(e => console.error('Fetching error: ' + e))  
      break;
      case 'botInvite':
        fetch(this.baseURL + this.botsURL + id)
        .then(res => res.json())
        .then(json => console.log(json['invite']))
        .catch(e => console.error('Fetching error: ' + e))  
      break;
      case 'botWebsite':
        fetch(this.baseURL + this.botsURL + id)
        .then(res => res.json())
        .then(json => console.log(json['website']))
        .catch(e => console.error('Fetching error: ' + e))  
      break;
      case 'botTags':
        fetch(this.baseURL + this.botsURL + id)
        .then(res => res.json())
        .then(json => console.log(json['tags']))
        .catch(e => console.error('Fetching error: ' + e))  
      break;
      case 'botOwner':
        fetch(this.baseURL + this.botsURL + id + '/owner')
        .then(res => res.json())
        .then(json => console.log(`ID: ${json['id']}\nUsername: ${json['username']}#${json['discriminator']}\nBanned: ${json['banned'] ? 'yes' : 'no'}\nRole: ${json['role']}\nCreated at: ${json['createdAt']}\nSocial: ${json['social']}\nBio: ${json['bio'] ? json['bio'] : 'no'}\nAvatar: ${json['avatar']}\nVerified: ${json['verified'] ? 'yes': 'no'}`))
        .catch(e => console.error('Fetching error: ' + e))  
      break;
      default:
        console.log(`Available arguments:\n\n${args.join('\n')}\n\nTotal: ${args.length}`);
        break;
    }
  },
  getUser: function() {
    return console.log('Coming soon...');
  },
  // this method is not working because DiscordCup doesn't have editing info endpoint stuff
  updateBot: function(id, option, newData) {
    const fetch = require('node-fetch');
    if(id == null || '') {
        console.log('ID of bot is empty!');
    }
 switch (option) {
      case 'botName':
        const body = { name:  newData };
fetch(this.baseURL + this.botsURL + id + '/edit', {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => console.log(json));
        break;

      default:
        break;
    }
  }
};


dscapi.getBot('832526738437046333')
let countries = [
    {"createdAt":"2021-09-24T17:36:07.648Z","name":"Zachary Johns","avatar":"https://cdn.fakercloud.com/avatars/jay_wilburn_128.jpg","id":"11"},
    {"createdAt":"2021-09-24T11:38:53.414Z","name":"Roy Goodwin","avatar":"https://cdn.fakercloud.com/avatars/rpeezy_128.jpg","id":"12"},{"createdAt":"2021-09-24T21:46:58.043Z","name":"Luis Marvin","avatar":"https://cdn.fakercloud.com/avatars/angelcolberg_128.jpg","id":"13"},
    {"createdAt":"2021-09-25T02:44:48.464Z","name":"Greg Lemke","avatar":"https://cdn.fakercloud.com/avatars/ajaxy_ru_128.jpg","id":"14"},{"createdAt":"2021-09-25T03:06:31.824Z","name":"Brooke Jerde","avatar":"https://cdn.fakercloud.com/avatars/anasnakawa_128.jpg","id":"15"},
    {"createdAt":"2021-09-25T05:35:53.740Z","name":"Salvatore Bode","avatar":"https://cdn.fakercloud.com/avatars/rikas_128.jpg","id":"16"},
    {"createdAt":"2021-09-24T19:08:03.589Z","name":"Ellis Flatley I","avatar":"https://cdn.fakercloud.com/avatars/themikenagle_128.jpg","id":"17"},
    {"createdAt":"2021-09-24T13:12:38.143Z","name":"Belinda Macejkovic","avatar":"https://cdn.fakercloud.com/avatars/lhausermann_128.jpg","id":"18"},
    {"createdAt":"2021-09-24T10:16:19.303Z","name":"Robin Medhurst","avatar":"https://cdn.fakercloud.com/avatars/eddiechen_128.jpg","id":"19"},
    {"createdAt":"2021-09-24T08:18:34.456Z","name":"Ms. Gregory Ernser","avatar":"https://cdn.fakercloud.com/avatars/evandrix_128.jpg","id":"20"},
    {"createdAt":"2021-09-25T05:43:33.621Z","name":"Archie Little","avatar":"https://cdn.fakercloud.com/avatars/saschamt_128.jpg","id":"21"},
    {"createdAt":"2021-09-24T08:02:59.756Z","name":"Dr. Naomi Pfannerstill","avatar":"https://cdn.fakercloud.com/avatars/necodymiconer_128.jpg","id":"22"},
    ];

    const array = ["a","b","c","Dr. Naomi Pfannerstill","Archie Little","Ms. Gregory Ernser","Robin Medhurst","Belinda Macejkovic","Ellis Flatley I"];

    for(var i=0;i<countries.length;i++){
        console.log("for loop "+i);
    }

    for(var i in countries){
        console.log("for in loop"+i);
    } 

    for(var i of array){
        console.log("for of loop "+i);
    }

    array.forEach((e) => {
        console.log("for each "+e);
    });

    

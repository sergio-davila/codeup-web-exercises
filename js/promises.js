"use strict";

// function getGithubUsernames(username) {
//     let gitAccess = fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${githubToken}`}})
//
//     gitAccess.then(response => response.json()).then(events => {
//         let final = events.filter(function (a) {
//             return a.type
//         })
//
//     })
// }

//getGithubUsernames('sergio-davila')

// getGithubUsernames().then( users => {
//     users.forEach( userObj => {
//         // do something with each username
//         console.log(userObj.login);
//     });
// }).catch(error => console.error(error));

// Walkthrough by Douglas
function getLastPushDate(username) {
    let url = `https://api.github.com/users/${username}/events`;
    let githubResponse = fetch(url, {headers: {'Authorization': `token ${githubToken}`}});

    return githubResponse.then(response => {
        return response.json()
    }).then((githubEventData) => {
        //console.log(githubEventData);
        for (let githubEvent of githubEventData) {
            if (githubEvent.type === "PushEvent") {
                return new Date(githubEvent.created_at);
            }
        }
    });
}

console.log(getLastPushDate('sergio-davila'));
getLastPushDate('sergio-davila').then(date => console.log(date));
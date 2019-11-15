'use strict';

const URL = 'https://api.github.com/users/'; // /username/repos

function getReposByUser(username) {
  fetch(`${URL}${username}/repos`)
    .then(res => res.json())
    .then(resJson => 
      displayResults(resJson))
    .catch(e => console.log(`You got the following error: ${e}`));
}

function displayResults(res) {
  $('.results').html('');
  let results = `<div>
  </div>`
  $('.results').append(results)
}

function userInput() {
  $('form').submit(e => {
    e.preventDefault();
    let input = $('#username').val()
    $('#username').val('');
  })
  
}
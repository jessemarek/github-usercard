/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* axios.get(`https://api.github.com/users/jessemarek`)
      .then(resp => {
      })
      .catch(err => {
        console.log('Error:', err)
      }) */

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 


   data:
      login: "jessemarek"
      id: 61661005
      node_id: "MDQ6VXNlcjYxNjYxMDA1"
      avatar_url: "https://avatars3.githubusercontent.com/u/61661005?v=4"
      gravatar_id: ""
      url: "https://api.github.com/users/jessemarek"
      html_url: "https://github.com/jessemarek"
      followers_url: "https://api.github.com/users/jessemarek/followers"
      following_url: "https://api.github.com/users/jessemarek/following{/other_user}"
      gists_url: "https://api.github.com/users/jessemarek/gists{/gist_id}"
      starred_url: "https://api.github.com/users/jessemarek/starred{/owner}{/repo}"
      subscriptions_url: "https://api.github.com/users/jessemarek/subscriptions"
      organizations_url: "https://api.github.com/users/jessemarek/orgs"
      repos_url: "https://api.github.com/users/jessemarek/repos"
      events_url: "https://api.github.com/users/jessemarek/events{/privacy}"
      received_events_url: "https://api.github.com/users/jessemarek/received_events"
      type: "User"
      site_admin: false
      name: "Jesse Marek"
      company: null
      blog: ""
      location: null
      email: null
      hireable: null
      bio: null
      public_repos: 19
      public_gists: 0
      followers: 12
      following: 8
      created_at: "2020-03-01T16:46:40Z"
      updated_at: "2020-04-09T14:19:27Z"

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

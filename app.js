// Init Github object
const github = new Github;

// Init UI object
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search Input Event Listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== '')
  {
    // Make http call
    github.getUser(userText).then(data => {
      if(data.profile.message === 'Not Found')
      {
        // Show Alert
        ui.showAlert('User not found', 'alert alert-danger');
        ui.clearProfile();
      }
      else
      {
        // Show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  }
  else
  {
    // Clear Profile
    ui.clearProfile();
  }
})
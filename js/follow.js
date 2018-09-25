let followed = false;

function follow() {
  if (!followed) {
    document.getElementById('followButton').innerHTML = 'UNFOLLOW';
    document.getElementById('followButton').id = 'followedButton';
    followed = true;
  }

  else {
      document.getElementById('followedButton').innerHTML = 'FOLLOW';
      document.getElementById('followedButton').id = 'followButton';
      followed = false;
  }
}
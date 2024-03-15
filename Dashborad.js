document.addEventListener('DOMContentLoaded', function() {
    const projectList = document.getElementById('projectList');
    projectList.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
        alert(Clicked on project: ${event.target.textContent});
      }
    });
  });
var contentTable = document.getElementById('list');
contentTable.setAttribute('class', 'table table-hover table-transparent-bg');

var currentDirectory = location.protocol + "//" + location.host + "/";
var directoryText = document.getElementById('nginx-fancyindex-directory').textContent || document.getElementById('nginx-fancyindex-directory').innerText;
var directories = directoryText.split('/');
var breadcrumbsElement = document.getElementById('breadcrumbs');
var i, directory, listItem, link;

for (i = 0; i < directories.length; i++) {
  directory = directories[i];
  listItem = document.createElement('li');
  listItem.className = 'breadcrumb-item';
  
  link = document.createElement('a');
  link.href = currentDirectory;
  
  if (i === 0) {
    link.textContent = '(root)';
  } else {
    link.href = currentDirectory + directory + '/';
    link.textContent = directory;
    currentDirectory = currentDirectory + directory + '/';
  }
  
  listItem.appendChild(link);
  breadcrumbsElement.appendChild(listItem);
}

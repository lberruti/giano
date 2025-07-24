var contentTable = document.getElementById('list');
contentTable.setAttribute('class', 'table table-hover table-transparent-bg');

var listItems = [].slice.call(document.querySelectorAll('#list tbody tr'));

var currentDirectory = jQuery(location).attr('protocol') + "//" + jQuery(location).attr('host') + "/";
jQuery.each(jQuery('#nginx-fancyindex-directory').text().split('/'), function(id, directory) {
  if (id == 0) {
    jQuery('<li />', {
      class: "breadcrumb-item"
    }).append(
      jQuery('<a />', {
        href: currentDirectory,
        text: "(root)"
      })
    ).appendTo("#breadcrumbs");
  } else {
    jQuery('<li />', {
      class: "breadcrumb-item"
    }).append(
      jQuery('<a />', {
        href: currentDirectory + directory + "/" ,
        text: directory
      })
    ).appendTo("#breadcrumbs");
    currentDirectory = currentDirectory + directory + "/";
  }
});

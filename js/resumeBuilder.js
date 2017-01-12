
var name = "Keith Bachand"
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
  "name" : "Keith Bachand",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "704-292-3761",
    "email" : "keithbachand14@gmail.com",
    "github" : "www.github.com/kbachand",
    "location" : "Monroe, NC USA"
  },
  "welcomeMessage" : "Hello! Thanks for viewing my resume!",
  "skills" : [
    "Ruby on Rails", "JavaScript", "HTML5", "CSS3", "etc..."
  ],
  "bioPic" : "images/fry.jpg"
}
$("#main").append(bio.contacts.email);

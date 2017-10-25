/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "Jenn Lemke",
	"role": "Project Manager",
	"contacts" : {
		"email": "jklemke03@gmail.com",
		"mobile": "530-209-0737",
		"github": "jklemke03",
		"location": "San Luis Obispo, CA"
	},
	"biopic": "http://www.gaminglives.com/wp-content/uploads/hearthstone_review_03.jpg",
	"welcomeMessage": "Hi There",
	"skills": ["HTML5", "CSS", "Javascript", "Photoshop"]
};

var work = {
	"jobs": [
		{
			"title": "Client Solutions and UX Specialist",
			"location": "Redmond, WA",
			"employer": "bLoyal",
			"description": "I provide consulation to clients on the best way to use our Ecommerce Loyalty Integration",
			"dates": "2014 to Current"
		},
		{
			"title": "Instructional Student Assistant",
			"location": "Arcata, CA",
			"employer": "Humboldt State University",
			"description": "Grade Computer Science I programs and provide tutoring to students",
			"dates": "2013-2014"
		}
	]
};

var education = {
	"schools": [
	   {
			"name": "Humboldt State University",
			"location": "Arcata, CA",
			"majors": ["Computer Science"],
			"degree": "Bachelors of Science",
			"dates": "2010-2014",
	   }
	  ],
	 "onlineCourses": [
		{
			"title": "Front-End Web Developer",
			"school": "Udacity",
			"dates": "November 2016 - Now",
			"url": "https://www.udacity.com/"
		}
	 ]
	
};

var projects = {
	"projects": [
	   {
		    "title": "Animal Trading Cards",
			"dates": "2014",
			"description": "Using HTML5 and CSS created a web page that appeared as an animal trading card",
			"images": ["images/hedge.jpg"]
	   }
	]
};

bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMsg);

	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);

	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLocation);

	
	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
			
		bio.skills.forEach(function(skill) {
			var formattedSkills = HTMLskills.replace("%data%", skill);
			$("#skills").append(formattedSkills);
		});
	
	}
};

bio.display();

work.display = function() {
	
	if (work.jobs.length > 0){
		
		$("#workExperience").append(HTMLworkStart);
		
		work.jobs.forEach(function(job){
	
			var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
			var formattedDates = HTMLworkDates.replace("%data%", job.dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
			
			
			$(".work-entry:last").append(formattedEmployerTitle);	
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDates); 
			$(".work-entry:last").append(formattedDescription);
	    });
	}
};

work.display();

projects.display = function() {
	if(projects.projects.length > 0) {
		
		$("#projects").append(HTMLprojectStart);
		
		projects.projects.forEach(function(project){
			
			
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
			
			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
			
			project.images.forEach(function(image){
				var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
				$("project-entry:last").append(formattedProjectImage);
			});
		});
	}	
};

projects.display();

education.display = function() {
	if(education.schools.length > 0){
		
		 education.schools.forEach(function(school) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', school.majors.join(', '));
			

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		});
	}	
	if(education.onlineCourses.length > 0){
		$("#education").append(HTMLonlineClasses);
			
		education.onlineCourses.forEach(function(online){		
			$("#education").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", online.title).replace("#", online.url);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", online.school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", online.dates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", online.url).replace("#", online.url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			});
		}
		
};

education.display();

$("#mapDiv").append(googleMap);
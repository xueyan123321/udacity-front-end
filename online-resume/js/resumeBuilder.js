'use strict';

var bio = {
	name: 'Chunsheng Chen',
	role: 'Front-End Web Developer',
	contacts: {
		mobile: '123-4567-8910',
		email: 'xxx@gmail.com',
		github: 'cody-tan',
		location: 'Shenzhen'
	},
	welcomeMessage: 'Wecome to my page.',
	skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Git', 'Gulp'],
	biopic: 'images/fry.jpg',
	display: function() {
		var i;

		var bioRole = HTMLheaderRole.replace('%data%', this.role);
		$('#header').prepend(bioRole);

		var bioName = HTMLheaderName.replace('%data%', this.name);
		$('#header').prepend(bioName);

		var bioMobile = HTMLmobile.replace('%data%', this.contacts.mobile);
		$('#topContacts, #footerContacts').append(bioMobile);

		var bioEmail = HTMLemail.replace('%data%', this.contacts.email);
		$('#topContacts, #footerContacts').append(bioEmail);

		var bioGithub = HTMLgithub.replace('%data%', this.contacts.github);
		$('#topContacts, #footerContacts').append(bioGithub);

		var bioLocation = HTMLlocation.replace('%data%', this.contacts.location);
		$('#topContacts, #footerContacts').append(bioLocation);

		var bioPic = HTMLbioPic.replace('%data%', this.biopic);
		$('#header').append(bioPic);

		var bioWelcomeMsg = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);
		$('#header').append(bioWelcomeMsg);

		$('#header').append(HTMLskillsStart);
		for (i = 0; i < this.skills.length; i++) {
			var bioSkills = HTMLskills.replace('%data%', this.skills[i]);
			$('#skills').append(bioSkills);
		}
	}
};

var education = {
	schools: [
	{
		name: 'Xilu Middle School',
		location: 'Shantou',
		degree: 'X',
		majors: ['no1', 'no2', 'no3'],
		dates: '2010-2013',
		url: 'http://xxx.com'
	},
	{
		name: 'Xilu Middle School',
		location: 'Shantou',
		degree: 'Y',
		majors: ['no1', 'no2', 'no3'],
		dates: '2007-2010',
		url: 'http://xxx.com'
	}
	],
	onlineCourses: [
	{
		title: 'Web Developer Nanodegree',
		school: 'Udacity',
		dates: '2016',
		url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
	},
	{
		title: 'C++ Programming Language',
		school: 'Xuetangx & THU',
		dates: '2016',
		url: 'http://www.xuetangx.com/courses/course-v1:TsinghuaX+00740043X+2016_T1/about'
	},
	{
		title: 'Introduction to Computing',
		school: 'Coursera & PKU',
		dates: '2016',
		url: 'https://www.coursera.org/learn/jisuanji-biancheng'
	}
	],
	display: function() {
		var i,
			j;

		for (i = 0; i< this.schools.length; i++) {
			$('#education').append(HTMLschoolStart);

			var schoolName = HTMLschoolName.replace('%data%', this.schools[i].name);
			var schoolDegree = HTMLschoolDegree.replace('%data%', this.schools[i].degree);
			var schoolNameDegree = schoolName + schoolDegree;
			$('.education-entry:last').append(schoolNameDegree);

			var schoolLocation = HTMLschoolLocation.replace('%data%', this.schools[i].location);
			$('.education-entry:last').append(schoolLocation);

			var schoolDates = HTMLschoolDates.replace('%data%', this.schools[i].dates);
			$('.education-entry:last').append(schoolDates);	

			var schoolMajor = HTMLschoolMajor.replace('%data%', this.schools[i].majors);
			$('.education-entry:last').append(schoolMajor);
		}

		$('#education').append(HTMLonlineClasses);
		for (j = 0; j < this.onlineCourses.length; j++) {
			$('#education').append(HTMLschoolStart);

			var courseTitle = HTMLonlineTitle.replace('%data%', this.onlineCourses[j].title);
			var courseSchool = HTMLonlineSchool.replace('%data%', this.onlineCourses[j].school);
			var courseTitleSchool = courseTitle + courseSchool;
			$('.education-entry:last').append(courseTitleSchool);

			var courseDates = HTMLonlineDates.replace('%data%', this.onlineCourses[j].dates);
			$('.education-entry:last').append(courseDates);

			var courseURL = HTMLonlineURL.replace('%data%', this.onlineCourses[j].url);
			$('.education-entry:last').append(courseURL);
		}
	}
};

var work = {
	jobs: [
	{
		employer: 'F&M',
		title: 'Data Processer',
		location: 'Shenzhen',
		dates: 'October 2013 - February 2016',
		description: 'xxxxxxxxxx<br>yyyyyyyyyy<br>zzzzzzzzzz'
	}
	],
	display: function() {
		var i;
		for (i = 0; i < this.jobs.length; i++) {
			$('#workExperience').append(HTMLworkStart);

			var jobEmployer = HTMLworkEmployer.replace('%data%', this.jobs[i].employer);
			var jobTitle = HTMLworkTitle.replace('%data%', this.jobs[i].title);
			var jobEmployerTitle = jobEmployer + jobTitle;
			$('.work-entry:last').append(jobEmployerTitle);

			var jobLocation = HTMLworkLocation.replace('%data%', this.jobs[i].location);
			$('.work-entry:last').append(jobLocation);

			var jobDates = HTMLworkDates.replace('%data%', this.jobs[i].dates);
			$('.work-entry:last').append(jobDates);

			var jobDescription = HTMLworkDescription.replace('%data%', this.jobs[i].description);
			$('.work-entry:last').append(jobDescription);
		}
	}
};

var projects = {
	projects: [
	{
		title: 'Mockup to Article',
		dates: '2016',
		description: 'xxxxxxxxxx',
		images: [
		'http://i2.wp.com/blog.udacity.com/wp-content/uploads/2016/03/56df2490a351d802222160.gif'
		]
	},
	{
		title: 'Animal Trading Cards',
		dates: '2016',
		description: 'yyyyyyyyyy',
		images: [
		'http://www.66tools.com/WebTools/rImage?p=250-250',
		'http://www.66tools.com/WebTools/rImage?p=251-251',
		'http://www.66tools.com/WebTools/rImage?p=253-252'
		]
	}
	],
	display: function() {
		var i,
			j;
		for (i = 0; i < this.projects.length; i++) {
			$('#projects:last').append(HTMLprojectStart);

			var projectTitle = HTMLprojectTitle.replace('%data%', this.projects[i].title);
			$('.project-entry:last').append(projectTitle);

			var projectDates = HTMLprojectDates.replace('%data%', this.projects[i].dates);
			$('.project-entry:last').append(projectDates);

			var projectDescription = HTMLprojectDescription.replace('%data%', this.projects[i].description);
			$('.project-entry:last').append(projectDescription);

			for (j = 0; j < this.projects[i].images.length; j++) {
				var projectImages = HTMLprojectImage.replace('%data%', this.projects[i].images[j]);
				$('.project-entry:last').append(projectImages);
			}
		}
	}
};

bio.display();
education.display();
projects.display();
work.display();

$("#mapDiv").append(googleMap);
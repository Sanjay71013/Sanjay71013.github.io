(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();
  
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

})(jQuery);




document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("projectModal");
    const closeModal = document.querySelector(".close-modal");
    const modalTitle = document.getElementById("modalTitle");
    const modalImage = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");
    const modalTechStack = document.getElementById("modalTechStack");
    const modalSkills = document.getElementById("modalSkills");
    const modalGithubLink = document.getElementById("modalGithubLink");

    // Manually define project details
    const projects = {
        "Air Quality Prediction in Colorado": {
            image: "img/project-1.jpg",
            description: "<br><br>- <b>Objective:</b> Developed a machine learning model to predict air quality levels—categorized as Good, Poor, Moderate, and Satisfactory—across various locations in Colorado. <br>- <b>Data Collection and Preprocessing:</b> Utilized pollutant data from the EPA's AQS API, performed data cleaning, outlier removal, and handled missing values. Engineered time-based features to enhance dataset usability for analysis. <br>- <b>Model Training and Feature Engineering:</b> Trained multiple machine learning models, including Logistic Regression, Decision Trees, and Random Forests. Generated new features such as pollutant interactions, location-based data, and temporal variables to capture relevant trends. <br>- <b>Model Optimization:</b> Employed hyperparameter tuning techniques like grid search and random search to refine model accuracy and stability, ensuring optimal performance for real-time air quality predictions.",
            techstack: "Pyspark, APIs, MLlib, Seaborn, Matplotlib",
            skills: "Data Collection through APIs, Feature Engineering of multiple features, Big Data Processing, Model Training and Optimization",
            github: "https://github.com/Sanjay71013/AQS_Air_Quality_Prediction"
        },
        "ECG Atrial Fibrillation Detection": {
            image: "img/project-2.webp",
            description: "<br><br>- <b>Objective:</b> Developed a machine learning model to detect Atrial Fibrillation (AF) from ECG signals, achieving 90% accuracy. <br>- <b>Data Collection and Preprocessing:</b> Collected ECG time-series data, performed data cleaning, handled missing values, and applied signal smoothing techniques. <br>- <b>Feature Engineering:</b> Extracted key features from ECG signals, including time-domain, frequency-domain, and wavelet transform features to enhance model performance. <br>- <b>Model Training and Evaluation:</b> Trained and evaluated multiple machine learning models such as Logistic Regression, Decision Trees, and Random Forests, optimizing performance through hyperparameter tuning.",
            techstack: "Scikit-learn, Matplotlib, Seaborn",
            skills: "Signal Processing, Feature Engineering, Machine Learning, ECG Analysis",
            github: "https://github.com/Sanjay71013/ECG-AFib-Detector"
        },
        "Hotel Revenue Performance Dashboard": {
            image: "img/project-3.jpg",
            description: "<br><br>- <b>Objective:</b> Developed an interactive dashboard to analyze hotel revenue performance, providing insights into key metrics such as RevPAR, Occupancy Rate, ADR, and Realization %. <br>- <b>Data Collection and Processing:</b> Integrated hotel revenue data across multiple locations, cleaned and preprocessed the dataset to ensure accuracy and consistency. <br>- <b>Visualization and Analysis:</b> Designed intuitive charts and tables to display revenue trends, category-wise earnings, booking platform performance, and property-wise key metrics. <br>- <b>Business Impact:</b> Enabled stakeholders to monitor revenue performance, optimize pricing strategies, and identify key revenue drivers for better decision-making.",
            techstack: "KPIs, PowerBI, DAX, Data Cleaning",
            skills: "Data Visualization, Business Intelligence, Dashboard Design, Revenue Analysis",
            github: "https://github.com/Sanjay71013/Hotel-performance-dashboard-powerbi"
        },
        "ScanHippoHealth": {
            image: "img/project-4.png",
            description: "<br><br>- <b>Objective:</b> Developed ScanHippoHealth, an MRI segmentation tool focusing on hippocampus analysis to aid in medical diagnostics. <br>- <b>Data Collection and Preprocessing:</b> Utilized the Medical Segmentation Decathlon dataset, performing data cleaning and normalization to prepare 3D MRI volumes for model training. <br>- <b>Model Development:</b> Implemented a 3D U-Net architecture for precise hippocampal segmentation, achieving accurate delineation of hippocampal structures. <br>- <b>Application Deployment:</b> Created a secure Flask web application enabling users to upload MRI scans, obtain segmentation results, and visualize the hippocampus overlay on MRI slices. <br>- <b>Data Security:</b> Implemented secure user authentication with input validations, hashing and salting passwords using the bcrypt library before storage in a MySQL database. <br>- <b>Encryption:</b> Ensured data security by encrypting sensitive information, including user credentials, to comply with healthcare data protection standards.",
            techstack: "Tensorflow, PostgreSQL, Flask, Bycrypt, HTML/CSS",
            skills: "Computer Vision, Database Management, API Development, Web Application Developemnt, Data Security",
            github: "https://github.com/Sanjay71013/ScanHippoHealth-Medical-MRI-Segmentation"
        },
        "Alzheimer's Disease Prediction": {
            image: "img/project-5.png",
            description: "<br><br>- <b>Objective:</b> Developed a deep learning-based web application for Alzheimer's disease classification using Convolutional Neural Networks (CNN). The model predicts the stage of Alzheimer's based on MRI scans, aiding early diagnosis and intervention. <br>- <b>Data Collection and Processing:</b> Utilized a publicly available dataset of brain MRI scans, performed data augmentation, and preprocessed images to enhance model accuracy. <br>- <b>Model Development:</b> Designed and trained a CNN model using TensorFlow/Keras, optimizing hyperparameters to achieve high classification accuracy across multiple Alzheimer's stages. <br>- <b>Web Application:</b> Integrated the trained model into a user-friendly web app using Flask, allowing users to upload MRI images and receive instant predictions. <br>- <b>Deployment:</b> Deployed the trained model on AWS using an EC2 instance, ensuring scalability, security, and real-time inference capability. <br>- <b>Impact:</b> Provides a cost-effective and accessible tool for early-stage Alzheimer's detection, assisting medical professionals in diagnosis and research.",
            techstack: "Tensorflow, AWS, Flask, HTML/CSS",
            skills: "Deep Learning, Cloud Deployment, Medical Imaging, API Development, Web Application Development",
            github: "https://github.com/Sanjay71013/alzheimer_disease_prediction"
        },
        "Data Modelling in PostgreSQL": {
            image: "img/project-6.png",
            description: "<br><br>- <b>Objective:</b> Designed and implemented a PostgreSQL database schema to efficiently store and query the Million Songs Dataset, enabling structured data storage for music analysis. <br>- <b>Data Modelling:</b> Developed a star schema with fact and dimension tables to optimize query performance and support analytical processing. <br>- <b>ETL Pipeline:</b> Built an Extract, Transform, Load (ETL) pipeline using Python to process raw song and log data, transforming it into a structured format and inserting it into PostgreSQL tables. <br>- <b>Query Optimization:</b> Implemented indexing and optimized SQL queries to enhance retrieval speed and improve performance for large-scale music data analysis. <br>- <b>Impact:</b> Facilitated efficient data retrieval and analysis for music streaming applications, enabling insights into song play patterns, user behavior, and artist popularity.",
            techstack: "ETL Pipeline, APIs, PostgreSQL",
            skills: "Database Optimization, API Integration, Data Modeling, ETL Development, Query Optimization",
            github: "https://github.com/Sanjay71013/Data-Modelling-PostgreSQL-Million-Songs-Data"
        }
    };

    // Add event listeners to project cards
    document.querySelectorAll(".work-box").forEach(project => {
        project.addEventListener("click", function () {
            const projectTitle = this.querySelector(".w-title").innerText;
            
            // Check if project exists in the manual object
            if (projects[projectTitle]) {
                const projectData = projects[projectTitle];

                // Set modal content
                modalTitle.textContent = projectTitle;
                modalImage.src = projectData.image;
                modalDescription.innerHTML = projectData.description;
                modalTechStack.textContent = projectData.techstack;
                modalSkills.textContent = projectData.skills;
                modalGithubLink.href = projectData.github;

                modal.style.display = "block"; // Show modal
            }
        });
    });

    // Close modal event listeners
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

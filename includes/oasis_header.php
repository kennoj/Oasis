<?php
	require_once ("../includes/authenticate.php");
	require_once ("../includes/common.php");

	session_start();

	if(!isset($_SESSION['studentNumber']))
	{
		header("Location:../index.php");
	}

	else
	{

			$_SESSION['fullName'];
			$studentNumber=$_SESSION['studentNumber'];


	}

?>
	<Doctype html>
	 <html>
		<head>
			<title>OASIS - Accomodation Finder</title>
	 		<link rel = "stylesheet" href = "../css/oasis_styles.css" type ="text/css">
			<link rel = "stylesheet" href = "../css/navigation_styles.css" type ="text/css">
			<link rel="stylesheet" href="../fancybox/source/jquery.fancybox.css" type="text/css" media="screen" />
	 		<link href="http://fonts.googleapis.com/css?family=Roboto:400,300" rel="stylesheet" type="text/css">
	 		<link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300" rel="stylesheet" type="text/css">
			<link rel="stylesheet" href="../font-awesome/css/font-awesome.min.css">
			


			<!-- Optionally add helpers - button, thumbnail and/or media -->
			<link rel="stylesheet" href="../fancybox/source/helpers/jquery.fancybox-buttons.css" type="text/css" media="screen" />
			<link rel="stylesheet" href="../fancybox/source/helpers/jquery.fancybox-thumbs.css" type="text/css" media="screen" />

			<meta name = "viewport" content ="width=device-width, initial-scale=1">
			
			<script type="text/javascript" src="../fancybox/source/jquery.fancybox.js"></script>
			<script type="text/javascript" src="../fancybox/source/helpers/jquery.fancybox-buttons.js"></script>
			<script type="text/javascript" src="../fancybox/source/helpers/jquery.fancybox-media.js"></script>
			<script type="text/javascript" src="../fancybox/source/helpers/jquery.fancybox-thumbs.js"></script>



		</head>
			<body>
		
	<nav id="menu-wrap">

		<!-- EACH <ul> TAG BEGINS A NEW MENU LEVEL -->
		<ul id = "menu">
			<li><p id="name"><img src="../images\sprites\house.png" alt="house" />OASIS</p></li>
			<!-- <li><a href="#"><span class="fa fa-home fa-fw"></span> Home</a></li> -->
			<li><a href="oasis.php"><span class="fa fa-search fa-fw"></span> Find a listing</a></li>
			<li><a href="#"><span class="fa fa-map-marker fa-fw"></span> Area Maps</a></li>
			<li><a href="#"><span class="fa fa-gear fa-fw"></span> Settings</a></li> 
			
			<li style="float:right"><a href="#" id="loggedInUser"><span class="fa fa-user fa-fw"></span><?php echo $_SESSION['fullName'] . "&nbsp;"; ?></a>
				<ul>
						<li><a href="profile_edit.php"><span class="fa fa-male fa-fw"></span> Update Profile</a></li>  <!-- End Account Submenu -->
						<li><a href="#"><span class="fa fa-magic fa-fw"></span>Accent color</a></li>
						<li><a href="../logout.php"><span class="fa fa-sign-out fa-fw"></span>Logout</a></li>
				</ul>
			</li> <!-- End User Submenu -->

		</ul>
		<!-- END NAVIGATION -->
	</nav>

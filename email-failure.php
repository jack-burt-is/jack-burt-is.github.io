<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Jack Burt</title>
	<link rel="stylesheet" type="text/css" href="css/fullpage.css" />
	<link rel="stylesheet" href="css/stylesheet.css"/>
	<link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet">
	<link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css">
	<script src="https://kit.fontawesome.com/d0abbe5652.js" crossorigin="anonymous"></script>
	<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

	
</head>

<body>
    <div  id="barba-wrapper">

		<div id="header">
			<h3 id="logo">Jack Burt</h3>
		    <ul id="nav">
				<li><a href="/index.html">Home</a></li>
				<li><a href="/projects.html">Projects</a></li>
				<li><a href="/contact.html">Contact</a></li>
		    </ul>
		</div>

		<div id="fullpage" class="barba-container" data-namespace="email-failure">
			<link rel="stylesheet" href="css/contact.css"/>

			<div class="section" id="section1">
				<h1>Sorry, something went wrong!</h1>
				<p>The email could not be sent, please head back to the contact page to try again, or email from your preferred client to <a href="mailto:contact@jackburt.me.uk">contact@jackburt.me.uk</a>.</p>
				<p>The reason for this is as follows:</p>
				<?php
					$errors=$_GET['errors'];
					echo "<p>" . $errors . "</p>";
				?>
			</div>

		</div>

	</div>

	 <a id="scroll"><span id="scroll-span"></span></a>		

	<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
	<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
	<script type="text/javascript" src="js/fullpage.js"></script>
	<script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/barba.min.js"></script>
    <script src="js/three.min.js"></script>
	<script src="js/vanta.net.min.js"></script>
	<script src="js/main.js"></script>

</body>

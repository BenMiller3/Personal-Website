<!DOCTYPE html>
<html>
<head>
     <meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Pong</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="main.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <style>
    	* { padding: 0; margin: 0; }
    	canvas { background: #eee; display: block; margin: 0 auto; }
    </style>
</head>
<body>
<p> </p>
<div class="nav">
	<p><a href="index.html">Home</a></p>
	<p><a href="bio.html">Bio</a></p>
	<p><a href="projects.html">Projects</a></p>
	<p><a href="games.html">Games</a></p>
	<p><a href="contact.html">Contact</a></p>
	</div>
<div class="centerIt">
<p> </p>
<h1>Pong</h2>
<p> </p>
</div>
<canvas id="myCanvas" width="650" height="500"></canvas>

<script src="scripts/pong.js"></script>

</body>
</html>

<?php
	$host = "";
	$username = "";
	$password = "";
	$db = "rebus";
	
	$c = mysql_connect($host, $username, $password);
	@mysql_select_db($db);
	error_reporting(0);
?>
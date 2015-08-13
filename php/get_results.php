<?php
	include 'db_connect.php';
	mysql_query("set names 'utf8'");

	$select_query = "SELECT * FROM results";
	$select_result = mysql_query($select_query);
	$count = mysql_num_rows($select_result);

	$json = array();
	$aux = array();

	for ($i = 0; $i < $count; $i++) {
		$aux = array(
			"index" => $i,
			"id" => mysql_result($select_result, $i, 'id'),
			"word" => mysql_result($select_result, $i, 'word'),
			"description" => mysql_result($select_result, $i, 'description')
		);

		array_push($json, $aux);
	}

	echo json_encode($json);
?>
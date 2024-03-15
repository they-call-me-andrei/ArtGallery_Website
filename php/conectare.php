<?php
	$conectare = mysqli_connect("localhost","root","","eagle");
	if(!$conectare){															//conectarea la baza de date locala
		die("nu s a reusit conectarea la baza de date");
	}
?>
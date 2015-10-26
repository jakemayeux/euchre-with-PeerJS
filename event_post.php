<html>
	<body>
		<?php
			echo "Update Succesful";
			$dfile = fopen("Daily Events.txt", "w") or die("Unable to open file");
			fwrite($dfile, $_POST["de"]);
			$ufile = fopen("Upcoming Events.txt", "w") or die("Unable to open file");
			fwrite($ufile, $_POST["ue"]);
		?>
	</body>
</html>



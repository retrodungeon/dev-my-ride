<?php
if (isset($_GET['url']) && $_GET['url'] != '')
	{
		$url = $_GET['url'];
		$img = 'upload/upload.jpg';
		file_put_contents($img, file_get_contents($url));
	}
?>
<?php include('Includes/header.php'); ?>

	<div class="contentBox">

			<div class="row">
				<hr>
			</div>
			<p style="font-family: 'Goudy Bookletter 1911', Georgia, Times, sans-serif">
				<h2>Contact</h2>
				<form action="mail.php" method="POST" class="form-horizontal">
				<p id="form">Name <input type="text" name="name"></p><br>
				<p id="form">Email <input type="text" name="email"></p><br>
				<p id="form">Subject <input type="text" name="subject"></p><br>
				<p id="form">Message</p><textarea name="message" style="height: 80px; width: 670px;"></textarea><br /><br>
				<button type="submit" class="btn btn-primary">Submit</button>
				<button type="reset" class="btn btn-primary">Clear</button>
				
				</form>

			</p>
		</div>
		<!-- /container -->

<?php include('Includes/footer.php'); ?>
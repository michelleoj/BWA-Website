<?php include('Includes/header.php'); ?>

<!-- modal-gallery is the modal dialog used for the image gallery -->
<div id="modal-gallery" class="modal modal-gallery hide fade" tabindex="-1">
    <div class="modal-header">
        <a class="close" data-dismiss="modal">&times;</a>
        <h3 class="modal-title"></h3>
    </div>
    <div class="modal-body"><div class="modal-image"></div></div>
    <div class="modal-footer">
        <a class="btn btn-primary modal-next">Next <i class="icon-arrow-right icon-white"></i></a>
        <a class="btn btn-info modal-prev"><i class="icon-arrow-left icon-white"></i> Previous</a>
        <a class="btn btn-success modal-play modal-slideshow" data-slideshow="5000"><i class="icon-play icon-white"></i> Slideshow</a>
        <a class="btn modal-download" target="_blank"><i class="icon-download"></i> Download</a>
    </div>
</div>

<div class="contentBox">
	<div id="gallery" data-toggle="modal-gallery" data-target="#modal-gallery">
    	<a href="pictures/DSC_0055.JPG" title="Banana" data-gallery="gallery">bwa1</a>
    	<a href="pictures/DSC_0058.JPG" title="Apple" data-gallery="gallery">bw2</a>
    	<a href="pictures/DSC_0059.JPG" title="Orange" data-gallery="gallery">Orange</a>
    	<a href="pictures/DSC_0065.JPG" title="Banana" data-gallery="gallery">bwa1</a>
    	<a href="pictures/DSC_0072.JPG" title="Apple" data-gallery="gallery">Apple</a>
    	<a href="pictures/DSC_0097.JPG" title="Orange" data-gallery="gallery">Orange</a>
    	<a href="pictures/DSC_0102.JPG" title="Banana" data-gallery="gallery">bwa1</a>
    	<a href="pictures/DSC_0135.JPG" title="Apple" data-gallery="gallery">Apple</a>
    	<a href="pictures/DSC_0208.JPG" title="Orange" data-gallery="gallery">Orange</a>
    	<a href="pictures/DSC_0216.JPG" title="Banana" data-gallery="gallery">bwa1</a>
    	<a href="pictures/DSC_0224.JPG" title="Apple" data-gallery="gallery">Apple</a>
    	<a href="pictures/DSC_0226.JPG" title="Orange" data-gallery="gallery">Orange</a>
    	<a href="pictures/DSC_0234.JPG" title="Banana" data-gallery="gallery">bwa1</a>
    	<a href="pictures/DSC_0242.JPG" title="Apple" data-gallery="gallery">Apple</a>
    	<a href="pictures/DSC_0247.JPG" title="Orange" data-gallery="gallery">Orange</a>
    	<a href="pictures/DSC_0249.JPG" title="Banana" data-gallery="gallery">bwa1</a>
	</div>
	
</div>


<?php include('Includes/footer.php'); ?>

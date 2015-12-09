<!--*************************************************************************
* users.tpl
* v1.1.1
*
*  HTML Layout for Users Setting Page.
*
**************************************************************************-->
<?php require_once("../master/header.php"); ?>

<div class="col-md-12 col-md-offset-0 main">
  <h1 class="page-header">Live Video</h1>
</div>
<p align="center">
<object id="Player" height="480" width="640" border="1"
  classid="CLSID:745395C8-D0E1-4227-8586-624CA9A10A8D">
  <param name="AutoStart" value="0">
  <param name="UIMode" value="none">
  <param name="MediaType" value="h264">
  <param name="ShowStatusBar" value="True">
  <param name="ShowToolbar" value="True">
  <param name="StretchToFit" value="True">
  <param name="NetworkTimeout" value="10000">
  <param name="MediaUsername" value="UserName">
  <param name="MediaPassword" value="UserPass">
  <param name="MediaURL" value="axrtsp://IP:9015=/axis-media/media.amp?videocodec=h264">
</object> 
<script type="text/javascript" src="/hydro/js/camera/page.js"></script>

<?php require_once("../master/footer.php"); ?>

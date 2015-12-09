<!--*************************************************************************
* index.php
* v1.1.1
*
*  HTML Layout for System Setting Page.
*
**************************************************************************-->
<?php require_once("../../master/header.php"); ?>

<div class="col-md-12 col-md-offset-0 main">
  <h1 class="page-header">System Settings</h1>
  <br/>
    <h3>Hydro Main</h3>
  </br>
    <label>IP:</label>
    <input id="hydro_ip" type="text">
  </br>
  <h3>Pump</h3>
</br>
  <label>IP:</label>
  <input id="pump_ip" type="text">
</br>
  </br>
    <button id="update">Update</button>
    <label id="updatestatus"></label>
</div>
<!--
<script src="/hp/js/settings/users/page.js" type="text/javascript"></script>
-->
<?php require_once("../../master/footer.php"); ?>

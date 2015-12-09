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
  <h3>Pumps 1-4</h3>
</br>
  <label>IP:</label>
  <input id="pump_1_ip" type="text">
</br>
<!--
  <h3>Pumps 5-8</h3>
</br>
  <label>IP:</label>
-->
  <input id="pump_2_ip" type="hidden">
<!--
</br>
-->
  <h3>Axis Camera</h3>
</br>
  <label>IP:</label>
  <input id="cam_ip" type="text">
</br>
</br>
  <button id="update">Update</button>
  <label id="updatestatus"></label>
</div>
<script src="/hydro/js/settings/systems/page.js" type="text/javascript"></script>
<?php require_once("../../master/footer.php"); ?>

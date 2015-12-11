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
  <label class="fixedwidth">IP:</label>
  <input id="hydro_ip" type="text">
</br>
  <h3>Pumps 1-4</h3>
</br>
  <label class="fixedwidth">IP:</label>
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
  <label class="fixedwidth">IP:</label>
  <input id="cam_ip" type="text">
</br>
  <label class="fixedwidth">Type:</label>
  <select  name="model" id="model" onchange="model()">
    <option value="0">N/A</option>
    <option value="1">207</option>
    <option value="2">210</option>
    <option value="3">210A</option>
    <option value="4">211</option>
    <option value="5">211A</option>
    <option value="6">212 PTZ</option>
    <option value="7">213 PTZ </option>
    <option value="8">214 PTZ</option>
    <option value="9">216FD</option>
    <option value="10">221</option>
    <option value="11">225FD</option>
    <option value="12">231D(+)</option>
    <option value="13">232D(+)</option>
    <option value="14">240Q</option>
    <option value="15">241S(A)</option>
    <option value="16">241Q(A)</option>
    <option value="17">243SA</option>
  </select>
</br>
  <label class="fixedwidth">Resolution:</label>
  <select  name="res" id="res"></select>
</br>
</br>
  <button id="update">Update</button>
  <label id="updatestatus"></label>
</div>
<script src="/js/settings/systems/page.js" type="text/javascript"></script>
<?php require_once("../../master/footer.php"); ?>

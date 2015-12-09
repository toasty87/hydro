<!--*************************************************************************
* users.tpl
* v1.1.1
*
*  HTML Layout for Users Setting Page.
*
**************************************************************************-->
<?php require_once("../../master/header.php"); ?>

<div class="col-md-12 col-md-offset-0 main">
  <h1 class="page-header">Hydro Main</h1>
  <table id="list"><tr><td></td></tr></table>
  <div id="pager"></div>
  <br/>
    <label class="">Lights On</label>
  </br>
    <label class="fixedwidth">On At:</label>
    <input id="start" type="text">
  </br>
    <label class="fixedwidth">Off At:</label>
    <input id="end" type="text">
  </br>
  </br>
    <label class="fixedwidth">Water Filled:</label>
    <input id="water_full" type="text" placeholder="Hours">
  </br>
    <label class="fixedwidth">Water Empty:</label>
    <input id="water_empty" type="text" placeholder="Hours">
  </br>
  </br>
    <label class="">Temp Alarms</label>
  </br>
    <label class="fixedwidth">Water Low:</label>
    <input id="water_high" type="text" placeholder="ºF">
    <label class="fixedwidth">Water High:</label>
    <input id="water_low" type="text" placeholder="ºF">
  </br>
    <label class="fixedwidth">Air Low:</label>
    <input id="air_high" type="text" placeholder="ºF">
    <label class="fixedwidth">Air High:</label>
    <input id="air_low" type="text" placeholder="ºF">
  </br>
    <button id="update">Update</button>
    <label id="updatestatus"></label>
</div>
<script type="text/javascript" src="/hp/js/jquery.datetimepicker.min.js"></script>
<script type="text/javascript" src="/hp/js/settings/main/page.js"></script>

<?php require_once("../../master/footer.php"); ?>

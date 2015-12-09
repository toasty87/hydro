<!--*************************************************************************
* users.tpl
* v1.1.1
*
*  HTML Layout for Users Setting Page.
*
**************************************************************************-->
<?php require_once("../../master/header.php"); ?>

<div class="col-md-12 col-md-offset-0 main">
<!--  <h1 class="page-header">Chemical Pumps</h1>-->
  <br/>
    <label class="">Pump 1</label>
  </br>
    <label class="fixedwidth">Enabled:</label>
    <input type="checkbox" value="1" name="enabled_1" id="enabled_1" onclick='handle1Click(this);'/>
  </br>
    <select  name="type_1" id="type_1" onchange="pump1()">
      <option value="0">N/A</option>
      <option value="1">PH Up</option>
      <option value="2">PH Down</option>
      <option value="3">Other</option>
    </select>
  </br>
  <div id="div_p_1" name="div_p_1"></div>
  <br/>
    <label class="">Pump 2</label>
  </br>
    <label class="fixedwidth">Enabled:</label>
    <input type="checkbox" value="1" name="enabled_2" id="enabled_2" onclick='handle2Click(this);'/>
  </br>
    <select  name="type_2" id="type_2" onchange="pump2()">
      <option value="0">N/A</option>
      <option value="1">PH Up</option>
      <option value="2">PH Down</option>
      <option value="3">Other</option>
    </select>
  </br>
  <div id="div_p_2" name="div_p_2"></div>
  <br/>
    <label class="">Pump 3</label>
  </br>
    <label class="fixedwidth">Enabled:</label>
    <input type="checkbox" value="1" name="enabled_3" id="enabled_3" onclick='handle3Click(this);'/>
  </br>
    <select  name="type_3" id="type_3" onchange="pump3()">
      <option value="0">N/A</option>
      <option value="1">PH Up</option>
      <option value="2">PH Down</option>
      <option value="3">Other</option>
    </select>
  </br>
  <div id="div_p_3" name="div_p_3"></div>
  <br/>
    <label class="">Pump 4</label>
  </br>
    <label class="fixedwidth">Enabled:</label>
    <input type="checkbox" value="1" name="enabled_4" id="enabled_4" onclick='handle4Click(this);'/>
  </br>
    <select  name="type_4" id="type_4" onchange="pump4()">
      <option value="0">N/A</option>
      <option value="1">PH Up</option>
      <option value="2">PH Down</option>
      <option value="3">Other</option>
    </select>
  </br>
  <div id="div_p_4" name="div_p_4"></div>
  </br>
    <button id="update">Update</button>
    <label id="updatestatus"></label>
</div>
<script type="text/javascript" src="/hp/js/jquery.datetimepicker.min.js"></script>
<script type="text/javascript" src="/hp/js/settings/pumps/page.js"></script>
<?php require_once("../../master/footer.php"); ?>

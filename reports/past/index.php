<!--*************************************************************************
* users.tpl
* v1.1.1
*
*  HTML Layout for Users Setting Page.
*
**************************************************************************-->
<?php require_once("../master/header.php"); ?>

<div class="col-md-12 col-md-offset-0 main">
  <h1 class="page-header">Report</h1>
  <div>
    <label class="fixedwidth">Start Date: </label>
    <input id="startdatetimepicker" type="text" >&nbsp;
    <label class="fixedwidth">End Date: </label>
    <input id="enddatetimepicker" type="text" >&nbsp;
    <button id="searchbydate">Search</button><br/><br/>
  </div>
  <div id="container" style="min-width: 400px; height: 400px; margin: 0 auto"></div>
  <table id="list"><tr><td></td></tr></table>
  <div id="pager"></div>
</div>
<script type="text/javascript" src="/js/jquery.datetimepicker.min.js"></script>
<script type="text/javascript" src="/js/chart/highcharts.js"></script>
<script type="text/javascript" src="/js/chart/exporting.js"></script>
<script type="text/javascript" src="/js/moment.min.js"></script>
<script type="text/javascript" src="/js/reports/past/page.js"></script>
<?php require_once("../master/footer.php"); ?>

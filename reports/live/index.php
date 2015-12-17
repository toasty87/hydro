<!--*************************************************************************
* users.tpl
* v1.1.1
*
*  HTML Layout for Users Setting Page.
*
**************************************************************************-->
<?php require_once("../../master/header.php"); ?>

<div class="col-md-12 col-md-offset-0 main">
  <h1 class="page-header">Live Data</h1>
  <div id="container" style="min-width: 400px; height: 400px; margin: 0 auto"></div>
</div>
<div class="col-md-4 col-md-offset-0 main">
  <div id="water"></div>
</div>
<div class="col-md-4 col-md-offset-0 main">
  <div id="air"></div>
</div>
<div class="col-md-4 col-md-offset-0 main">
  <div id="ph"></div>
</div>
<div class="col-md-12 col-md-offset-0 main">

</div>
<script type="text/javascript" src="/js/chart/highcharts.js"></script>
<script type="text/javascript" src="/js/chart/exporting.js"></script>
<script type="text/javascript" src="/js/reports/live/page.js"></script>
<script src="https://code.highcharts.com/highcharts-more.js"></script>
<?php require_once("../../master/footer.php"); ?>

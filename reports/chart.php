<?php
/****************************************************************************
* jqgrid.php
* v1.1.1
*
*  Controls data to be displays in grid.
*
****************************************************************************/
  session_start();
  require_once("../libs/db.php");
  require_once("constants.php");
	$hydro = new Hydro("hydro");
  $starttime = $_GET['starttime'];
  $endtime = $_GET['endtime'];
	$localtime = $_GET['localtime'];

  print $hydro->GetReportChart($starttime, $endtime, $localtime, $maxlimit);

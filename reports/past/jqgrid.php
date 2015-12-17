<?php
/****************************************************************************
* jqgrid.php
* v1.1.1
*
*  Controls data to be displays in grid.
*
****************************************************************************/
  session_start();
  require_once("../../libs/db.php");
	$hydro = new Hydro("hydro");

  $rowlimit=$_GET['rows'];
  $page=$_GET['page'];
  $sidx=$_GET['sidx'];
  $sord=$_GET['sord'];
  $starttime = $_GET['starttime'];
  $endtime = $_GET['endtime'];
	$localtime = $_GET['localtime'];

  print $hydro->GetReportGrid($rowlimit, $page, $sidx, $sord, $starttime, $endtime, $localtime);

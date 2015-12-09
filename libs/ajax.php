<?php
/****************************************************************************
* ajax.php
* v1.1.1
*
*  Allows Ajax calls to be made to file and be sent to the correct function.
*
****************************************************************************/
	session_start();
	require_once("db.php");
	require_once("functions.php");

	$hydro = new Hydro("hydro");


		//Edit
		if ($_REQUEST["format"] == "SetUser"){
			echo json_encode($hydro->SetUser($_REQUEST["id"], $_REQUEST["user"], $_REQUEST["password"], $_REQUEST["description"], $_REQUEST["email"]));
		} else if ($_REQUEST["format"] == "SetPumps") {
			echo json_encode($hydro->SetPumps($_REQUEST["pumps"]));
		} else if ($_REQUEST["format"] == "SetSystems") {
			echo json_encode($hydro->SetSystems($_REQUEST["hydro"], $_REQUEST["pump_1"], $_REQUEST["pump_2"], $_REQUEST["cam"]));
		} else if ($_REQUEST["format"] == "SetSettings") {
			echo json_encode($hydro->SetSettings($_REQUEST["start"], $_REQUEST["end"], $_REQUEST["water_full"], $_REQUEST["water_empty"], $_REQUEST["water_high"], $_REQUEST["water_low"], $_REQUEST["air_high"], $_REQUEST["air_low"]));

		//Delete
		} else if ($_REQUEST["format"] == "DeleteUser") {
			echo json_encode($hydro->DeleteUser($_REQUEST["id"]));

		//Get Data
		} else if ($_REQUEST["format"] == "GetPumps") {
			echo json_encode($hydro->GetPumps());
		} else if ($_REQUEST["format"] == "GetCameraIP") {
			echo json_encode($hydro->GetCameraIP());
		} else if ($_REQUEST["format"] == "GetSystemInfo") {
			echo json_encode($hydro->GetSystemInfo());
		} else if ($_REQUEST["format"] == "GetSettings") {
			echo json_encode($hydro->GetSettings());

		}

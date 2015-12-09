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
		//Delete
		} else if ($_REQUEST["format"] == "DeleteUser") {
			echo json_encode($hydro->DeleteUser($_REQUEST["id"]));

		//Get Data
		} else if ($_REQUEST["format"] == "GetPumps") {
			echo json_encode($hydro->GetPumps());
		}

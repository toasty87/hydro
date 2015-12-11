<?php
/****************************************************************************
* index.php
* v1.1.1
*
*  Controls data to be be sent through API.
*
****************************************************************************/
  require_once("/libs/engine.php");
  require_once("/libs/functions.php");

	session_start();
  $xml = "<result>";

	if(checkVariable("key")) {
    $key = $_REQUEST['key'];
    $check_key = CheckKey($key);
    $xml .= "<code>";

		if(!empty($check_key)) {
      $engine = new HydroEngine("hydro");
			if ($_REQUEST["f"] == "get_settings") {
        $xml .= lookUpSettings($engine);
      } else if ($_REQUEST["f"] == "results") {
        $xml .= results($engine);
      } else if ($_REQUEST["f"] == "heartbeat") {
        $xml .= heartbeat($engine);
      } else {
        $xml .= "3</code><codedesc>Invalid format";
      }
		} else {
      $xml .= "1</code><codedesc>Invalid key";
		}
	} else {
		$xml .= "2</code><codedesc>Required parameter missing";
	}
	$xml .= "</codedesc></result>";
	echo $xml;

  function checkVariable($name) {
    /****************************************************************************
		*  checkVariable
		*   Checks if variable has been given.
		*
		* Parameters:
		* varchar * name: variable to be checked.
		*
		* Returns:
		*  Succesful completion returns true or false if variable has been passed.
		****************************************************************************/
		return (isset($_REQUEST[$name]));
	}

  function CheckKey($key) {
    $ini = parse_ini_file("/libs/site.ini");
    if ($key == $ini["key"]) {
      return $key;
    }
    return "";
  }

  function lookUpSettings($engine) {
    if(checkVariable("server")) {
      $server = $_REQUEST['server'];

    } else {
      return "2</code><codedesc>Required parameter missing";
    }
  }

  function results($engine) {
    if(checkVariable("server")) {
      $server = $_REQUEST['server'];
      $temp_water = isset($_REQUEST['temp_water']) ? $_REQUEST['temp_water'] : "";
      $temp_air = isset($_REQUEST['temp_air']) ? $_REQUEST['temp_air'] : "";
      $ph = isset($_REQUEST['ph']) ? $_REQUEST['ph'] : "";


      
    } else {
      return "2</code><codedesc>Required parameter missing";
    }
  }

  function heartbeat($engine) {
    if(checkVariable("server")) {
      $server = $_REQUEST['server'];
      $engine->heartbeat($server);
      return "0</code><codedesc>success";
    } else {
      return "2</code><codedesc>Required parameter missing";
    }
  }

<?php
	date_default_timezone_set('UTC');
	define("ENABLELOGGING", true);

	$_SESSION['timeout'] = 30 * 60; // 30 minute inactivity timeout
	$_SESSION["timezone"] = 0;

	function chooseDates($starttime, $endtime){
		/****************************************************************************
		* chooseDates
		* 	Brings in posted values and puts them in an array.
		*
		* Parameters:
		*		DateTime * starttime: The start time.
		*		DateTime * endtime: The end time.
		*
		* Returns:
		*  Succesful completion returns string.
		****************************************************************************/
		$timesql = "";
		if(strlen($endtime) > 0 ) {
			if ($starttime == "*" && $endtime == "*") {
				$timesql = " > %s_localtime - INTERVAL 24 HOUR ";
			} else if ($starttime == "*") {                 //End Date Selected ONLY
				$timesql = " <= %s_endtime ";
			} else if ($endtime == "*") {                 	//Start Date Selected ONLY
				$timesql = " >= %s_starttime ";
			} else {                       									//Both Dates Selected
				$timesql = " BETWEEN %s_starttime AND %s_endtime ";
			}
		}
		return $timesql;
	}

	function SQLErrorCatch($error){
		/****************************************************************************
		* SQLErrorCatch(
		* 	displays mysql error.
		*
		* Parameters:
		*		error: values posted to website.
		*
		* Returns:
		*  Succesful completion returns xml.
		****************************************************************************/
		echo "<result><code>".$error->getCode()."</code><codedesc> SQL Error: "
		. $error->getMessage() ."</codedesc></result>";
		die;
	}

<?php
	require_once "meekrodb.2.3.class.php";
	require_once("functions.php");
	date_default_timezone_set('UTC');

	class Engine{
		private $servername = "Report Server 1";
		private $db;

		public function __construct($database){
			$ini = parse_ini_file("site.ini");
			try{
				$this->db = new MeekroDB($ini["db"], $ini["db_user"], $ini["db_pass"], $database);
			} catch(MeekroDBException $error) {						//SQL Error
					SQLErrorCatch($error);
			}
		}

    public function getSettings() {

    }

    public function heartbeat($server) {
			$this->db->update('accounts', array(
			  'heartbeat' => 'CURRENT_TIMESTAMP'
			), "id=%s", $server);

    }

    public function results($server) {

    }
  }

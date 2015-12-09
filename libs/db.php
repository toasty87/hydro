<?php
	require_once "meekrodb.2.3.class.php";
	require_once("functions.php");
	require_once("filters.php");
	date_default_timezone_set('UTC');

	class Hydro{
		private $servername = "Report Server 1";
		private $db;

		public function __construct($database){
			$ini = parse_ini_file("site.ini");
			try{
				$this->db = new MeekroDB($ini["db_urlMaster"], $ini["db_user"], $ini["db_pass"], $database);
			} catch(MeekroDBException $error) {						//SQL Error
					SQLErrorCatch($error);
			}
		}

		public function CheckLogin($name, $password){
			/****************************************************************************
			* CheckLogin
			* Checks if user can login or not.
			*
			* Parameters:
			* varchar * name: The SPC user making the request.
			* varchar * password: The SPC password making the request.
			*
			* Returns:
			*  Succesful completion returns true or false.
			****************************************************************************/
			$user = $this->GetUser($name, $password);
			if(empty($user) || empty($user[0]) || empty($user[0]['password'])){
				return false;
			} else {
				return $user;
			}
		}

    public function GetUser($name, $password){
			/****************************************************************************
			* GetUser
			* Gets user information
			*
			* Parameters:
			* varchar * name: username
			* varchar * password: users password
			*
			* Returns:
			*  Users information.
			****************************************************************************/
			$sql = "SELECT user.*
			FROM user
			WHERE user.user = %s_name AND user.password = PASSWORD(%s_password)";

			try{
				$result = $this->db->query($sql,
					array(
						'name'=>$name,
						'password'=>$password
					));
			} catch(MeekroDBException $error) {						//SQL Error
					SQLErrorCatch($error);
			}
			return $result;
		}

    public function GetAllUser($rowlimit, $page, $sidx, $sord) {
			/****************************************************************************
			* GetAllUser
			* Gets information to be inserted into a grid.
			*
			* Parameters:
			* varchar * rowlimit: How many rows can be seen in the grid.
			* varchar * page: What page of the grid the user is on.
			* varchar * sidx: What the grid is being sorted by.
			* varchar * sord: Is the grid being order by ASC or DESC order.
			*
			* Returns:
			*  Succesful completion returns information to be inserted into a grid.
			****************************************************************************/
			$sql = "SELECT COUNT(*) AS count FROM user";

			try{
				$sql = $this->db->query($sql);
			} catch(MeekroDBException $error) {						//SQL Error
					SQLErrorCatch($error);
			}

			$count = $sql[0]["count"];
			$totalpages = ceil($count/$rowlimit);
		  $start = $rowlimit * $page - $rowlimit;

			$sql = "SELECT user, description, email
			FROM user
			ORDER BY ".$sidx." ".$sord."
			LIMIT $start,$rowlimit";

			try{
			  $sqlResult = $this->db->query($sql);
			} catch(MeekroDBException $error) {						//SQL Error
			  SQLErrorCatch($error);
			}

			$sql = array(
			  "page" => $page,
			  "total" => $totalpages,
			  "records" => $count,
			  "rows" => $sqlResult
			);
			return json_encode($sql, JSON_NUMERIC_CHECK);
		}

    public function SetUser($olduser, $user, $password, $description, $email, $client){
			/****************************************************************************
			* SetUser
			* Add/update Users.
			*
			* Parameters:
			*		olduser: Orignal username
			*		user: username
			*		password: Password
			*		description: users name.
			*		email: User email if they want email alerts.
			*		client: What client this user is tied to
			*
			* Returns:
			*  Succesful completion returns nothing.
			****************************************************************************/
			if (strlen($olduser) == 0) {
				$olduser = $user;
			}

			$sql = "INSERT into user (id, user, password, description, email)
			VALUES (%s_id, %s_user, password(%s_password), %s_description, %s_email)
			ON DUPLICATE KEY
			UPDATE  user = %s_user, password = password(%s_password),
			description = %s_description, email = %s_email";

			try{
				$this->db->query($sql, array(
					'id'=>$id,
					'user'=>$user,
					'password'=>$password,
					'description'=>$description,
					'email'=>$email
				));
			} catch(MeekroDBException $error) {						//SQL Error
					SQLErrorCatch($error);
			}
		}

    public function DeleteUser($user) {
		/****************************************************************************
		* DeleteUser
		* Deletes User from database.
		*
		* Parameters:
		*		user: Username
		*
		* Returns:
		*  Succesful completion returns nothing.
		****************************************************************************/
			$sql = "DELETE FROM user WHERE user = %s_user";
			try{
				return $this->db->query($sql, array('user'=>$user));
			} catch(MeekroDBException $error) {						//SQL Error
					SQLErrorCatch($error);
			}
		}

		public function SetPumps($pumps) {
			$i = 1;
			while($i <= 4) {
				$this->db->update('pump', array(
					'id'=>$i,
					'type'=>$pumps[$i]['0'],
					'ph'=>$pumps[$i]['1'],
					'description'=>$pumps[$i]['2'],
					'days'=>$pumps[$i]['3'],
					'amount'=>$pumps[$i]['4'],
					'start'=>$pumps[$i]['5'],
					'end'=>$pumps[$i]['6'],
					'enable'=>$pumps[$i]['7']
				), "id=%s", $i);
		    $i++;
			}
		}

		public function GetPumps() {
			return $this->db->query("SELECT * FROM pump");
		}
  }

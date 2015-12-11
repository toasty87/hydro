<?php
/****************************************************************************
* index.php
* v1.1.1
*
*  Controls the php to Login Page.
*
****************************************************************************/
	session_start();
	if (!empty($_GET["logout"])) {
		session_unset();
	}
	require_once("../master/master.php");
	require_once("../libs/db.php");
	$ini = parse_ini_file("/libs/site.ini");
	$revision = $ini["rev"];
	$_SESSION["auth"] = 0;
	$_SESSION["user"] = "";
	$_SESSION["username"] = "";
	if(!empty($_POST["password"])) {
		//check their password
	$hydro = new Hydro("hydro");
		$user = $hydro->CheckLogin($_POST["name"], $_POST["password"]);
		if (!empty($user) && !empty($user[0])) {
			$user = $user[0];
			if (!empty($user["user"])) {
				$_SESSION["user"] = $user["user"];
			}
			if (!empty($user["description"])) {
				$_SESSION["username"] = $user["description"];
			}
			$_SESSION["auth"] = 1;
			$_SESSION["last_activity"] = time();
			$_SESSION["timezone"] = $_POST["timezone"];
			header("Location: /settings/pumps/");
		}
	}
?>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="">
      <meta name="author" content="Justin W. Packer">
      <title>Login</title>
        <!--<link rel="icon" href="/img/favicon.png">-->
        <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css">
        <link href="/css/login.min.css" rel="stylesheet">
    </head>
    <body>
      <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      	<div class="container-fluid">
      		<div class="navbar-header">
      			<!--<a class="navbar-brand"><img src="/img/dice-logo.png"/></a>-->
      		</div>
      	</div>
      </div>
        <div class="container">
          <form class="form-signin" role="form" method="post">
            <h2 class="form-signin-heading">Please sign in</h2>
            <input type="text" class="form-control" placeholder="Login" required autofocus name="name">
            <input type="password" class="form-control" placeholder="Password" required name="password">
    				<input type="hidden" name="timezone">
            <label class="checkbox"></label>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          </form>
        </div>
    </body>
    <div style="position: relative">
      <p style="position: fixed; bottom: 0; width:100%; text-align: center"><?php echo $revision; ?></p>
    </div>
  </html>

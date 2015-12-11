<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <title></title>

    <link rel="icon" href="/img/favicon.ico">
    <link rel="stylesheet" type="text/css" media="screen" href="/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" media="screen" href="/css/jquery.datetimepicker.min.css"/ >
    <link rel="stylesheet" type="text/css" media="screen" href="/css/blitzer/jquery-ui.min.css" />

    <script type="text/javascript" src="/js/jquery.js"></script>
    <script type="text/javascript" src="/bootstrap/js/bootstrap.min.js"></script>
  </head>
  <body>
    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation" id="slide-nav">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-toggle">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <!--<a class="navbar-brand"><img src="/img/dice-logo.png"/></a>-->
          <a class="navbar-brand">&nbsp;&nbsp;Welcome </a> <!--{$user} </a>-->
        </div>
        <div id="slidemenu">
         <ul class="nav navbar-nav navbar-right">
           <li><a href="/camera">Live Video</a></li>
           <li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown">Reports<b class="caret"></b></a>
           	<ul class="dropdown-menu">
           		<li><a href="/reports/temps">Temp Change</a></li>
              <li><a href="/reports/ph">PH Change</a></li>
           	</ul>
           </li>
           <li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown">Settings<b class="caret"></b></a>
           	<ul class="dropdown-menu">
           		<li><a href="/settings/main/index.php">Hydro Main</a></li>
           		<li><a href="/settings/pumps/index.php">Pumps</a></li>
              <li><a href="/settings/system/index.php">System</a></li>
           		<li><a href="/settings/users/index.php">Users</a></li>
           	</ul>
           </li>
           <li><a href="/login/?logout=true">Sign Out </a></li>
         </ul>
       </div>
     </div>
    </div>
  <br/>
  <div id="second" class="container-fluid">
  <div id="third" class="row">

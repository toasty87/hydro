<!--*************************************************************************
* users.tpl
* v1.1.1
*
*  HTML Layout for Users Setting Page.
*
**************************************************************************-->
<?php require_once("../../master/header.php"); ?>

<div class="col-md-12 col-md-offset-0 main">
  <h1 class="page-header">Users</h1>
  <table id="list"><tr><td></td></tr></table>
  <div id="pager"></div>
  <br/>
    <input id="id" type="text">
    <label class="fixedwidth">User:</label>
    <input id="user" type="text">
  </br>
    <label class="fixedwidth">Description:</label>
    <input id="description" type="text">
  </br>
    <label class="fixedwidth">Pass:</label>
    <input id="password" type="password">
  </br>
    <label class="fixedwidth">Confirm Pass:</label>
    <input id="passwordcomfirm" type="password">
  </br>
    <label class="fixedwidth">Email:</label>
    <input id="email" type="text">
  </br>
    <button id="update">Add/Update</button>
    <button id="delete">Delete</button>
    <button id="clearInfo" onclick="clearInfo(true);">Clear</button>
    <label id="updatestatus"></label>
</div>

<script src="/js/settings/users/page.js" type="text/javascript"></script>
<?php require_once("../../master/footer.php"); ?>

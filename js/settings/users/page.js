/****************************************************************************
* users.js
* v1.1.1
*
*  Controls the javascript to User Setting Page.
*
****************************************************************************/
function clearInfo (clearstatus) {
	/****************************************************************************
	* clearInfo
	* Clears information that was set to be edited/deleted.
	*
	* Parameters:
	* bool * clearstatus:
	* Returns:
	*  Succesful completion returns a nothing.
	****************************************************************************/
	if (clearstatus) {
		$('#updatestatus').text('');
	}
	$('#id').val('');
	$('#user').val('');
	$('#password').val('');
	$('#passwordcomfirm').val('');
	$('#description').val('');
	$('#email').val('');
}

$(function () {
  $('#list').jqGrid({
		url: 'jqgrid.php?',
    altRows: true,
    autowidth: true,
    datatype: 'json',
    mtype: 'GET',
    colModel: [{
			name: 'user',
			label: 'User'
		}, {
			name: 'description',
			label: 'Description'
		}, {
			name: 'email',
			label: 'Email'
		}, {
			name: 'id',
			label: 'Hidden ID',
			hidden: true
    } ],
    loadonce: false,
    pager: '#pager',
    rowNum: 25,
    rowList: [25, 50, 100],
    sortname: 'user',
    sortorder: 'asc',
    sorttype: 'int',
    viewrecords: true,
    gridview: true,
    autoencode: true,
    ignoreCase: true,
		rownumber: true,
    onSelectRow: function (ids) {
			if (ids != null) {
				var row = $('#list').jqGrid('getRowData', ids);
				$('#id').val(row.id);
				$('#user').val(row.user);
				$('#description').val(row.description);
				$('#email').val(row.email);
			}
		}
  });

  $('#update').bind('click', function () {
		var id = $('#id').val().trim();
		var user = $('#user').val().trim();
		var description = $('#description').val().trim();
		var password = $('#password').val().trim();
		var passwordconfirm = $('#passwordcomfirm').val().trim();
		var email = $('#email').val().trim();

		if (user === '') {
			$('#updatestatus').text('User name required');
			$('#updatestatus').fadeOut(9999);
			$('#user').focus();
		} else if (description === '') {
			$('#updatestatus').text('Description required');
			$('#updatestatus').fadeOut(9999);
			$('#description').focus();
		} else if (password !== passwordconfirm) {
			$('#updatestatus').text('Passwords do not match');
			$('#updatestatus').fadeOut(9999);
			$('#password').focus();
		} else if (password === '') {
			$('#updatestatus').text('Passwords required');
			$('#updatestatus').fadeOut(9999);
			$('#password').focus();
		} else {
			site.ajax({
				param: {
					format: 'SetUser',
					id: id,
					user: user,
					password: password,
					description: description,
					email: email
				},
				success: function (data) {
					$('#updatestatus').show();
					$('#updatestatus').text('User updated');
					$('#updatestatus').fadeOut(1500);
					$('#list').trigger('reloadGrid');
					clearInfo(clearstatus = true);
				}
			});
		}
	});

  $('#delete').bind('click', function () {
    var id = $('#id').val().trim();
    site.ajax({
      param: {
        format: 'DeleteUser',
        id: id
      },
      success: function (data) {
        $('#updatestatus').show();
        if (data === true) {
          $('#updatestatus').text('User deleted');
          $('#updatestatus').fadeOut(1500);
          $('#list').trigger('reloadGrid');
          clearInfo(false);
        } else {
          $('#updatestatus').text('User could not be deleted');
          $('#updatestatus').fadeOut(9999);
        }
      }
    });
  });
});

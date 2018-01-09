   var getUsers = function(){
		$.ajax({
                   type: "GET",
		   url: 'http://localhost:8080/bootapp/user',
		   success: function(data) {
			jQuery.each(data, function(i, val) {
                              var sexvar = '<td>男</td>';  
　　　　　　　　　　　　　　　　　　　　　　　       if (val.sex == '1') {
                                 sexvar = '<td>女</td>';
                              } else {
                                 sexvar = '<td>男</td>';
                              }
			      var strHTML = "<tr><td>" + val.id + "</td><td>" + val.name + "</td>"+sexvar+"<td>"+val.age+"</td><td>"+val.date+"</td><td><a onclick='updateUsers("+val.id+")' href='#'>Update</a>　|　<a onclick='deleteUsersSubmit("+val.id+")' href='#'>Delete</a></td></tr>";
                        $('table#tblUser tbody').append(strHTML);
			});  
		   },
		   statusCode: {
                   
		    404: function() {
		       alert("error");
		    }
		   }
		})
   };

   var addUsersSubmit = function(){
            var name = $('#item_name').val();
            if (name == null || name == '') {
	    	return;
	    }
            var sex = $('input:radio:checked').val();
	    var age = $('#item_age').val();
	    if (age == null || age == '') {
	    	return;
	    }  
            var user = {'name': name, 'sex': sex, 'age': age };
	    $.ajax({
                   type: "POST",
		   url: 'http://localhost:8080/bootapp/user',
                   contentType:"application/json",     
                   data: JSON.stringify(user), 
		   success: function() {
			$(window).attr('location','../index.html');
		   },
		   statusCode: {
                   
		    404: function() {
		       alert("error");
		    }
		   }
		})
        };

   var deleteUsersSubmit = function(idx){
	    $.ajax({
                   type: "DELETE",
		   url: 'http://localhost:8080/bootapp/user/'+idx,
		   success: function() {
			$(window).attr('location','index.html');
		   },
		   statusCode: {
                   
		    404: function() {
		       alert("error");
		    }
		   }
		})
        };

   var updateUsers = function(idx){
            $(window).attr('location','app/update.html?id='+idx);
        };

   var getUsersById = function(idx){
		$.ajax({
                   type: "GET",
		   url: 'http://localhost:8080/bootapp/user/'+idx,
		   success: function(data) {
                        $('#item_id').val(data.id);
                        $('#item_name').val(data.name);
                        $(":radio[name='sex'][value='" + data.sex + "']").prop("checked", "checked");
                        $('#item_age').val(data.age);
		   },
		   statusCode: {
                   
		    404: function() {
		       alert("error");
		    }
		   }
		})
   };

   var updateUsersSubmit = function(){
            var id = $('#item_id').val();
            var name = $('#item_name').val();
            if (name == null || name == '') {
	    	return;
	    }
            var sex = $('input:radio:checked').val();
	    var age = $('#item_age').val();
	    if (age == null || age == '') {
	    	return;
	    }  
            var user = {'id':id, 'name': name, 'sex': sex, 'age': age };
	    $.ajax({
                   type: "PUT",
		   url: 'http://localhost:8080/bootapp/user',
                   contentType:"application/json",     
                   data: JSON.stringify(user), 
		   success: function() {
			$(window).attr('location','../index.html');
		   },
		   statusCode: {
                   
		    404: function() {
		       alert("error");
		    }
		   }
		})
        };


     

    

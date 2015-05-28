
//Load FancyBox

jQuery(function( $ )
{
  $(".fancybox").fancybox();
});



// Responsive Menu
$(document).ready(function()
{
    $('#menu-wrap').prepend('<div id="trigger"><span class="fa fa-list fa-fw"></span> Menu</div>');
    $('#trigger').on('click', function()
    {
        $('#menu').slideToggle();
    });
});



// Ajax login
$('form.ajax').on('submit', function()
{
    var that = $(this),
        url = that.attr('action'),
        method = that.attr('method'),
        data = {};

        $('#submit').replaceWith("<span class='fa fa-refresh fa-spin'></span>");

    that.find('[name]').each(function(index, value)
    {
      var that = $(this),
          name = that.attr('name'),
          value = that.val();

          data[name] = value;
    });
      $.ajax
      (
        {
          url:url,
          type: method,
          data: data,
          success: function(response)
          {


              console.log(response);
              if(response == '0')
              {
                $('#msg').text('Either your student ID or password is incorrect');
                $('#loader').replaceWith('<input id ="submit" type = "submit" value="LOGIN" />');
              }
              else
              {
                window.open('system/oasis.php', '_self');
                // $('body').html(response);
              }

          }
        }
      );
      return false;
});





// Ajax Add landlord

$('body').on('click', '#submitLandlord', function(e)

{


  e.preventDefault();
  var formData = new FormData($(this).parents('form')[0]);

  $('#submit').val("Saving...");

  $.ajax({
      url: '../includes/tasks/addLandlord.php',
      type: 'POST',
      xhr: function()
      {
          var myXhr = $.ajaxSettings.xhr();
          return myXhr;
      },
      success: function (response)
      {
        console.log(response);
        var p = document.getElementById('errorMessage');
        p.innerHTML = response;
        $('#submit').val("Add");
      },
      data: formData,
      cache: false,
      contentType: false,
      processData: false
  });

      return false;
});





// Ajax Add user

$('body').on('click', '#submitUser', function(e)

{

  e.preventDefault();
  var formData = new FormData($(this).parents('form')[0]);

  $('#submit2').val("Adding user...");

  $.ajax({
      url: '../includes/tasks/addUser.php',
      type: 'POST',
      xhr: function()
      {
          var myXhr = $.ajaxSettings.xhr();
          return myXhr;
      },
      success: function (response)
      {
        console.log(response);
        var p = document.getElementById('errorMessage');
        p.innerHTML = response;
        $('#submit').val("Add");
      },
      data: formData,
      cache: false,
      contentType: false,
      processData: false
  });

      return false;
});




  //Ajax add listing

  $('body').on('click', '#upload', function(e)
  {
        e.preventDefault();
        var formData = new FormData($(this).parents('form')[0]);

        $('#upload').val("Adding listing...");

        $.ajax({
            url: '../includes/tasks/addListing.php',
            type: 'POST',
            xhr: function()
            {
                var myXhr = $.ajaxSettings.xhr();
                return myXhr;
            },
            success: function (response)
            {
              console.log(response);
              var p = document.getElementById('errorMessage');
              p.innerHTML = response;
              $('#upload').val("Add");
            },
            data: formData,
            cache: false,
            contentType: false,
            processData: false
        });
        return false;
});



// Ajax update user profile

$('body').on('click', '#save_profile', function(e)

{

  e.preventDefault();
  

  $('button').replaceWith("<span id='loader' class='fa fa-refresh fa-spin'></span>");

  $.ajax
  ({
      url: '../system/profile_edit.php',
      type: 'POST',
      data: $('form').serialize(),
      datatype: 'text',
      success: function (response)
      {
        console.log(response);
        $('#loader').replaceWith('<button id="save_profile" type = "submit">Update</button>');
        alert("Updated profile successfully", "OASIS Info" );
        
        
        
      },
     
  });

      return false;
});





  // When user clicks on a tile, run the appropriate task

        $('#tile').click(function()
        {
        	var task = $('#tile').attr('class');
        	if(task == "addUser")
        	{

            var url='../includes/tasks/adduser.php';
        	}
          else if(task == "addListing")
          {
            var url='../includes/tasks/addlisting.php';
          }
          else if(task == "addLandlord")
          {
            var url='../includes/tasks/addLandlord.php';
          }


          $.ajax
          (
            {

              url:url,
              success: function(response)
              {
                $('#data').html(response);



              }
            });

});


    $('#list').click(function()
    {
      $('#result-cards').css('display', 'none');
      $('#table-results').css('display', 'block');
    });
    
      $('#grid').click(function()
    {
      $('#result-cards').css('display', 'block');
      $('#table-results').css('display', 'none');
    });

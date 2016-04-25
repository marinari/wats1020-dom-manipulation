//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };

    //function to listen for clicks on the "login" button.
    // When a user clicks the "login" button, hide the login form elements on the page.
    $('#login-form .btn').on('click', function(event){
      $('#login-form').hide();
      $('.user-info').show(); //.css('display','inline')
      // Fill the user's first and last name into `div.user-info`.
      $('span.user-fullname').text(' ' + userInfo.firstName + ' ' + userInfo.lastName);
    });

    //When user clicks a "view details" button, find the parent of that element.
    $('.view-details').on('click', function(event){
      console.log(event);
      var targetElement = event.target;
      var container = targetElement.parentElement.parentElement;
      // Within that parent, find all the elements that have the class `details`.
      $(container).find('.details').each(function(index, el){
      // Toggle visibility of all the elements within that parent with the class `details`.
        if($(el).is(':visible')){
          $(el).fadeOut();
          //Change the text of the "view details" button to read "hide details"
          targetElement.innerText = "View Details"
        } else {
          $(el).fadeIn();
          targetElement.innerText = "Hide Details"
        }
      });
    });



    // Set up an event listener on the buttons with the `vote` class.
    // When a button is clicked, look at the `data-vote` attribute to determine what the user is voting for
    // Increment the counter for whichever vote talley is affected.
    $('.voting button').on('click', function(event){
      if ($(this).attr('data-vote') === 'great'){
			++voteCounts.great;
      ++voteCounts.total;
      console.log(voteCounts);
		  } else {
			++voteCounts.greatest;
      ++voteCounts.total;
      console.log(voteCounts);
    }
    // Determine the respective percentages (out of 100) for each progress bar.
    // Modify the `width` attribute on each progress bar to set the updated percentage.
    var bluePercent = ((voteCounts.great/voteCounts.total) * 100 + '%');
    $('.great-progress').css('width', bluePercent);

    var greenPercent = ((voteCounts.greatest/voteCounts.total) * 100 + '%');
    $('.greatest-progress').css('width', greenPercent);

    });
});

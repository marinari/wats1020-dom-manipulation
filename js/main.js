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

    // Place all your Javascript code inside this "document ready" function so
    // it does not run until the DOM is ready for Javascript manipulation.

    //function to listen for clicks on the "login" button.
    // When a user clicks the "login" button, hide the login form elements on the page.
    $('#login-form .btn').on('click', function(event){
      $('#login-form').hide();
      $('.user-info').show(); //.css('display','inline')
      // Fill the user's first and last name into `div.user-info`.
      $('span.user-fullname').text(' ' + userInfo.firstName + ' ' + userInfo.lastName);
    });


    // TODO: Create a function to listen for clicks on all the "View Details"
    // buttons so that when a user clicks a "View Details" button they see
    // the content contained in the elements with the class "details" in the
    // proper part of the screen.
    //      1. When user clicks a "view details" button, find the parent of that element.
    //      2. Within that parent, find all the elements that have the class `details`.
    //      3. Toggle visibility of all the elements within that parent with the class `details`.
    //      4. Change the text of the "view details" button to read "hide details" so the user
    //          understands they can hide the text again.

    // TODO: Create a function that listens for clicks on the voting buttons and
    // looks at the `data-vote` attribute on each button to see what was voted for,
    // then determines the updated vote breakdown to adjust the progress bars.
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


    var voteCounts.total = voteCounts.great + voteCounts.greatest;
    var bluePercent = ((voteCounts.great/voteCounts.total) * 100 + '%');
    $('.great-progress').css('width', bluePercent);

    var greenPercent = ((voteCounts.greatest/voteCounts.total) * 100 + '%');
    $('.greatest-progress').css('width', greenPercent);
    //      1. Set up an event listener on the buttons with the `vote` class.
    //      2. When a button is clicked, look at the `data-vote` attribute to determine
    //          what the user is voting for ("great" or "greatest").
    //      3. Increment the counter for whichever vote talley is affected.
    //      4. Determine the respective percentages (out of 100) for each progress bar.
    //      5. Modify the `width` attribute on each progress bar to set the updated percentage.
    });
});

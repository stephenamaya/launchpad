    
    
// function for lanuchpad to earth 

    // Document ready shorthand statement
    $(function() {
        // Select link by id and add click event
        $('#launch').click(function() {
  
          // Animate Scroll to #bottom
          $('html,body').animate({
            scrollTop: $("#earth").offset().top }, // Tell it to scroll to the top #bottom
            7000 // How long scroll will take in milliseconds
          );
  
          // Prevent default behavior of link
          return false;
        });
      });

// functions for planet to planet 

      $(function() {
        $('#neptune-btn').click(function() {
          $('html,body').animate({
            scrollTop: $("#neptune").offset().top }, 
            1000 
          );
          return false;
        });
      });

      $(function() {
        $('#uranus-btn').click(function() {
          $('html,body').animate({
            scrollTop: $("#uranus").offset().top }, 
            1000 
          );
          return false;
        });
      });

      $(function() {
        $('#saturn-btn').click(function() {
          $('html,body').animate({
            scrollTop: $("#saturn").offset().top }, 
            1000 
          );
          return false;
        });
      });

      $(function() {
        $('#jupiter-btn').click(function() {
          $('html,body').animate({
            scrollTop: $("#jupiter").offset().top }, 
            1000 
          );
          return false;
        });
      });

      $(function() {
        $('#mars-btn').click(function() {
          $('html,body').animate({
            scrollTop: $("#mars").offset().top }, 
            1000 
          );
          return false;
        });
      });

      $(function() {
        $('#earth-btn').click(function() {
          $('html,body').animate({
            scrollTop: $("#earth").offset().top }, 
            1000 
          );
          return false;
        });
      });

      $(function() {
        $('#venus-btn').click(function() {
          $('html,body').animate({
            scrollTop: $("#venus").offset().top }, 
            1000 
          );
          return false;
        });
      });

      $(function() {
        $('#mercury-btn').click(function() {
          $('html,body').animate({
            scrollTop: $("#mercury").offset().top }, 
            1000 
          );
          return false;
        });
      });

      $(function() {
        $('#sun-btn').click(function() {
          $('html,body').animate({
            scrollTop: $("#sun").offset().top }, 
            1000 
          );
          return false;
        });
      });

      $(function() {
        $('#launch-btn').click(function() {
          $('html,body').animate({
            scrollTop: $("#launch").offset().top }, 
            7000 
          );
          return false;
        });
      });
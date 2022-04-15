   
    function htmlEncode(value) {
        return $('<div/>').text(value)
          .html();
      }
    
      $(function () {
    
        
        $('#generate').click(function () {
    
          
          let finalURL =
  'https://chart.googleapis.com/chart?cht=qr&chl=' +
            htmlEncode($('#content').val()) +
            '&chs=360x360&chld=L|0'
    
          // Replace the src of the image with
          // the QR code image
          $('.qr-code').attr('src', finalURL);
        });
      });
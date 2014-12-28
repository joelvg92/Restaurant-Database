$(document).ready(function(){
    $('.class1').on('change', function(){        
        if($('.class1:checked').length){
            $('.class2').prop('disabled', true);
            $('.class3').prop('disabled', true);
            $('.class4').prop('disabled', true);
            $('.class5').prop('disabled', true);
            $('.class6').prop('disabled', true);
            $('.class2').prop('checked', false);
            $('.class3').prop('checked', false);
            $('.class4').prop('checked', false);
            $('.class5').prop('checked', false);
            $('.class6').prop('checked', false);
            return;
        }
        $('.class2').prop('disabled', false);
        $('.class3').prop('disabled', false);
        $('.class4').prop('disabled', false);
        $('.class5').prop('disabled', false);
        $('.class6').prop('disabled', false);
    });
    
    $('.class2').on('change', function(){
       if($('.class2:checked').length){
            $('.class1').prop('disabled', true);
            $('.class3').prop('disabled', true);
            $('.class4').prop('disabled', true);
            $('.class5').prop('disabled', true);
            $('.class6').prop('disabled', true);
            $('.class1').prop('checked', false);
            $('.class3').prop('checked', false);
            $('.class4').prop('checked', false);
            $('.class5').prop('checked', false);
            $('.class6').prop('checked', false);
            return;
        }
        $('.class1').prop('disabled', false);
        $('.class3').prop('disabled', false);
        $('.class4').prop('disabled', false);
        $('.class5').prop('disabled', false);
        $('.class6').prop('disabled', false);
    });

    $('.class3').on('change', function(){
        if($('.class3:checked').length){
            $('.class2').prop('disabled', true);
            $('.class1').prop('disabled', true);
            $('.class4').prop('disabled', true);
            $('.class5').prop('disabled', true);
            $('.class6').prop('disabled', true);
            $('.class2').prop('checked', false);
            $('.class1').prop('checked', false);
            $('.class4').prop('checked', false);
            $('.class5').prop('checked', false);
            $('.class6').prop('checked', false);
            return;
        }
        $('.class2').prop('disabled', false);
        $('.class1').prop('disabled', false);
        $('.class4').prop('disabled', false);
        $('.class5').prop('disabled', false);
        $('.class6').prop('disabled', false);
    });
    $('.class4').on('change', function(){
        if($('.class4:checked').length){
            $('.class2').prop('disabled', true);
            $('.class3').prop('disabled', true);
            $('.class1').prop('disabled', true);
            $('.class5').prop('disabled', true);
            $('.class6').prop('disabled', true);
            $('.class2').prop('checked', false);
            $('.class3').prop('checked', false);
            $('.class1').prop('checked', false);
            $('.class5').prop('checked', false);
            $('.class6').prop('checked', false);
            return;
        }
        $('.class2').prop('disabled', false);
        $('.class3').prop('disabled', false);
        $('.class1').prop('disabled', false);
        $('.class5').prop('disabled', false);
        $('.class6').prop('disabled', false);
    });
    $('.class5').on('change', function(){
        if($('.class5:checked').length){
            $('.class2').prop('disabled', true);
            $('.class3').prop('disabled', true);
            $('.class4').prop('disabled', true);
            $('.class1').prop('disabled', true);
            $('.class6').prop('disabled', true);
            $('.class2').prop('checked', false);
            $('.class3').prop('checked', false);
            $('.class4').prop('checked', false);
            $('.class1').prop('checked', false);
            $('.class6').prop('checked', false);
            return;
        }
        $('.class2').prop('disabled', false);
        $('.class3').prop('disabled', false);
        $('.class4').prop('disabled', false);
        $('.class1').prop('disabled', false);
        $('.class6').prop('disabled', false);
    });
    $('.class6').on('change', function(){
        if($('.class6:checked').length){
            $('.class2').prop('disabled', true);
            $('.class3').prop('disabled', true);
            $('.class4').prop('disabled', true);
            $('.class5').prop('disabled', true);
            $('.class1').prop('disabled', true);
            $('.class2').prop('checked', false);
            $('.class3').prop('checked', false);
            $('.class4').prop('checked', false);
            $('.class5').prop('checked', false);
            $('.class1').prop('checked', false);
            return;
        }
        $('.class2').prop('disabled', false);
        $('.class3').prop('disabled', false);
        $('.class4').prop('disabled', false);
        $('.class5').prop('disabled', false);
        $('.class1').prop('disabled', false);
    });

        $('.class7').on('change', function(){        
            if($('.class7:checked').length){
                $('.class8').prop('disabled', true);
                $('.class9').prop('disabled', true);
                $('.class10').prop('disabled', true);
                $('.class11').prop('disabled', true);
                $('.class8').prop('checked', false);
                $('.class9').prop('checked', false);
                $('.class10').prop('checked', false);
                $('.class11').prop('checked', false);
                return;
            }
            $('.class8').prop('disabled', false);
            $('.class9').prop('disabled', false);
            $('.class10').prop('disabled', false);
            $('.class11').prop('disabled', false);
            
        });
        
        $('.class8').on('change', function(){        
            if($('.class8:checked').length){
                $('.class7').prop('disabled', true);
                $('.class9').prop('disabled', true);
                $('.class10').prop('disabled', true);
                $('.class11').prop('disabled', true);
                $('.class7').prop('checked', false);
                $('.class9').prop('checked', false);
                $('.class10').prop('checked', false);
                $('.class11').prop('checked', false);
                return;
            }
            $('.class7').prop('disabled', false);
            $('.class9').prop('disabled', false);
            $('.class10').prop('disabled', false);
            $('.class11').prop('disabled', false);
            
        });
         $('.class9').on('change', function(){        
            if($('.class9:checked').length){
                $('.class8').prop('disabled', true);
                $('.class7').prop('disabled', true);
                $('.class10').prop('disabled', true);
                $('.class11').prop('disabled', true);
                $('.class8').prop('checked', false);
                $('.class7').prop('checked', false);
                $('.class10').prop('checked', false);
                $('.class11').prop('checked', false);
                return;
            }
            $('.class8').prop('disabled', false);
            $('.class7').prop('disabled', false);
            $('.class10').prop('disabled', false);
            $('.class11').prop('disabled', false);
            
        });
         $('.class10').on('change', function(){        
            if($('.class10:checked').length){
                $('.class8').prop('disabled', true);
                $('.class9').prop('disabled', true);
                $('.class7').prop('disabled', true);
                $('.class11').prop('disabled', true);
                $('.class8').prop('checked', false);
                $('.class9').prop('checked', false);
                $('.class7').prop('checked', false);
                $('.class11').prop('checked', false);
                return;
            }
            $('.class8').prop('disabled', false);
            $('.class9').prop('disabled', false);
            $('.class7').prop('disabled', false);
            $('.class11').prop('disabled', false);
            
        });
         $('.class11').on('change', function(){        
            if($('.class11:checked').length){
                $('.class8').prop('disabled', true);
                $('.class9').prop('disabled', true);
                $('.class10').prop('disabled', true);
                $('.class7').prop('disabled', true);
                $('.class8').prop('checked', false);
                $('.class9').prop('checked', false);
                $('.class10').prop('checked', false);
                $('.class7').prop('checked', false);
                return;
            }
            $('.class8').prop('disabled', false);
            $('.class9').prop('disabled', false);
            $('.class10').prop('disabled', false);
            $('.class7').prop('disabled', false);
            
        });         
//check if checkboxes or buttons are selected
         var checkboxes = $("input[type='checkbox']"),
         radios= $("input[type='radio']"),
         submitButt = $("#Search");
         checkboxes.click(function() {
        	    submitButt.attr("disabled", !checkboxes.is(":checked"));
        	});
         radios.click(function() {
     	    submitButt.attr("disabled", !radios.is(":checked"));
     	});
//check if user writes something in text field
         $('#textt').keyup(function(){
             if ($(this).val() == '') {
                  $('#Searchserves').prop('disabled', true);
             } else {
                  $('#Searchserves').prop('disabled', false);
             }
        });

})

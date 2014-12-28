$(document).ready(function(){
    $('.check1').on('change', function(){        
        if($('.check1:checked').length){
            $('.check2').prop('disabled', true);
            $('.check3').prop('disabled', true);
            $('.check4').prop('disabled', true);
            $('.check5').prop('disabled', true);
            $('.check6').prop('disabled', true);
            $('.check2').prop('checked', false);
            $('.check3').prop('checked', false);
            $('.check4').prop('checked', false);
            $('.check5').prop('checked', false);
            $('.check6').prop('checked', false);
            return;
        }
        $('.check2').prop('disabled', false);
        $('.check3').prop('disabled', false);
        $('.check4').prop('disabled', false);
        $('.check5').prop('disabled', false);
        $('.check6').prop('disabled', false);
    });
    
    $('.check2').on('change', function(){
       if($('.check2:checked').length){
            $('.check1').prop('disabled', true);
            $('.check3').prop('disabled', true);
            $('.check4').prop('disabled', true);
            $('.check5').prop('disabled', true);
            $('.check7').prop('disabled', true);
            $('.check1').prop('checked', false);
            $('.check3').prop('checked', false);
            $('.check4').prop('checked', false);
            $('.check5').prop('checked', false);
            $('.check7').prop('checked', false);
            return;
        }
        $('.check1').prop('disabled', false);
        $('.check3').prop('disabled', false);
        $('.check4').prop('disabled', false);
        $('.check5').prop('disabled', false);
        $('.check7').prop('disabled', false);
    });

    $('.check3').on('change', function(){
        if($('.check3:checked').length){
            $('.check2').prop('disabled', true);
            $('.check1').prop('disabled', true);
            $('.check4').prop('disabled', true);
            $('.check5').prop('disabled', true);
            $('.check8').prop('disabled', true);
            $('.check2').prop('checked', false);
            $('.check1').prop('checked', false);
            $('.check4').prop('checked', false);
            $('.check5').prop('checked', false);
            $('.check8').prop('checked', false);
            return;
        }
        $('.check2').prop('disabled', false);
        $('.check1').prop('disabled', false);
        $('.check4').prop('disabled', false);
        $('.check5').prop('disabled', false);
        $('.check8').prop('disabled', false);
    });
    $('.check4').on('change', function(){
        if($('.check4:checked').length){
            $('.check2').prop('disabled', true);
            $('.check3').prop('disabled', true);
            $('.check1').prop('disabled', true);
            $('.check5').prop('disabled', true);
            $('.check9').prop('disabled', true);
            $('.check2').prop('checked', false);
            $('.check3').prop('checked', false);
            $('.check1').prop('checked', false);
            $('.check5').prop('checked', false);
            $('.check9').prop('checked', false);
            return;
        }
        $('.check2').prop('disabled', false);
        $('.check3').prop('disabled', false);
        $('.check1').prop('disabled', false);
        $('.check5').prop('disabled', false);
        $('.check9').prop('disabled', false);
    });
    $('.check5').on('change', function(){
        if($('.check5:checked').length){
            $('.check2').prop('disabled', true);
            $('.check3').prop('disabled', true);
            $('.check4').prop('disabled', true);
            $('.check1').prop('disabled', true);
            $('.check10').prop('disabled', true);
            $('.check2').prop('checked', false);
            $('.check3').prop('checked', false);
            $('.check4').prop('checked', false);
            $('.check1').prop('checked', false);
            $('.check10').prop('checked', false);
            return;
        }
        $('.check2').prop('disabled', false);
        $('.check3').prop('disabled', false);
        $('.check4').prop('disabled', false);
        $('.check1').prop('disabled', false);
        $('.check10').prop('disabled', false);
    });
    $('.check6').on('change', function(){
        if($('.check6:checked').length){
            $('.check8').prop('disabled', true);
            $('.check9').prop('disabled', true);
            $('.check10').prop('disabled', true);
            $('.check7').prop('disabled', true);
            $('.check1').prop('disabled', true);
            $('.check1').prop('checked', false);
            $('.check7').prop('checked', false);
            $('.check10').prop('checked', false);
            $('.check9').prop('checked', false);
            $('.check8').prop('checked', false);
            return;
        }
        $('.check7').prop('disabled', false);
        $('.check8').prop('disabled', false);
        $('.check9').prop('disabled', false);
        $('.check10').prop('disabled', false);
        $('.check1').prop('disabled', false);
    });

        $('.check7').on('change', function(){        
            if($('.check7:checked').length){
            	 $('.check6').prop('disabled', true);
            	$('.check8').prop('disabled', true);
                $('.check9').prop('disabled', true);
                $('.check10').prop('disabled', true);
                $('.check2').prop('disabled', true);
                $('.check8').prop('checked', false);
                $('.check9').prop('checked', false);
                $('.check10').prop('checked', false);
                $('.check2').prop('checked', false);
                $('.check6').prop('checked', false);
                return;
            }
            $('.check8').prop('disabled', false);
            $('.check9').prop('disabled', false);
            $('.check10').prop('disabled', false);
            $('.check2').prop('disabled', false);
            $('.check6').prop('disabled', false);
            
        });
        
        $('.check8').on('change', function(){        
            if($('.check8:checked').length){
            	 $('.check6').prop('disabled', true);
            	$('.check7').prop('disabled', true);
                $('.check9').prop('disabled', true);
                $('.check10').prop('disabled', true);
                $('.check3').prop('disabled', true);
                $('.check7').prop('checked', false);
                $('.check9').prop('checked', false);
                $('.check10').prop('checked', false);
                $('.class3').prop('checked', false);
                $('.check6').prop('checked', false);
                return;
            }
            $('.check7').prop('disabled', false);
            $('.check9').prop('disabled', false);
            $('.check10').prop('disabled', false);
            $('.check3').prop('disabled', false);
            $('.check6').prop('disabled', false);
        });
         $('.check9').on('change', function(){        
            if($('.check9:checked').length){
            	 $('.check6').prop('disabled', true);
            	$('.check8').prop('disabled', true);
                $('.check7').prop('disabled', true);
                $('.check10').prop('disabled', true);
                $('.check4').prop('disabled', true);
                $('.check8').prop('checked', false);
                $('.check7').prop('checked', false);
                $('.check10').prop('checked', false);
                $('.check4').prop('checked', false);
                $('.check6').prop('checked', false);
                return;
            }
            $('.check8').prop('disabled', false);
            $('.check7').prop('disabled', false);
            $('.check10').prop('disabled', false);
            $('.check4').prop('disabled', false);
            $('.check6').prop('disabled', false);
        });
         $('.check10').on('change', function(){        
            if($('.check10:checked').length){
            	 $('.check6').prop('disabled', true);
            	$('.check8').prop('disabled', true);
                $('.check9').prop('disabled', true);
                $('.check7').prop('disabled', true);
                $('.check5').prop('disabled', true);
                $('.check8').prop('checked', false);
                $('.check9').prop('checked', false);
                $('.check7').prop('checked', false);
                $('.check5').prop('checked', false);
                $('.check6').prop('checked', false);
                return;
            }
            $('.check8').prop('disabled', false);
            $('.check9').prop('disabled', false);
            $('.check7').prop('disabled', false);
            $('.check5').prop('disabled', false);
            $('.check6').prop('disabled', false);
        });        

         $("#but1,#but2,#but3,#but4,#but5,#but6,#but7,#but8,#but9,#but10").change(function () {
             if (($("#but1").is(':checked')  && $("#but7").is(':checked') ||$("#but1").is(':checked')  && $("#but8").is(':checked') ||$("#but1").is(':checked')  && $("#but9").is(':checked') ||$("#but1").is(':checked')  && $("#but10").is(':checked') ) ||($("#but2").is(':checked')  && $("#but6").is(':checked') ||$("#but2").is(':checked')  && $("#but8").is(':checked') ||$("#but2").is(':checked')  && $("#but9").is(':checked') ||$("#but2").is(':checked')  && $("#but10").is(':checked') ) ||($("#but3").is(':checked')  && $("#but7").is(':checked') ||$("#but3").is(':checked')  && $("#but6").is(':checked') ||$("#but3").is(':checked')  && $("#but9").is(':checked') ||$("#but3").is(':checked')  && $("#but10").is(':checked') ||($("#but4").is(':checked')  && $("#but7").is(':checked') ||$("#but4").is(':checked')  && $("#but8").is(':checked') ||$("#but4").is(':checked')  && $("#but6").is(':checked') ||$("#but4").is(':checked')  && $("#but10").is(':checked') ) ) || ($("#but5").is(':checked')  && $("#but7").is(':checked') ||$("#but5").is(':checked')  && $("#but8").is(':checked') ||$("#but5").is(':checked')  && $("#but6").is(':checked') ||$("#but5").is(':checked')  && $("#but9").is(':checked') )) {
                 $('#nextPage').attr('disabled', false);
             } else {
                 $('#nextPage').attr('disabled', true);
             }
         });
//         $("#but2,#but6,#but8,#but9,#but10").change(function () {
//             if ($("#but2").is(':checked')  && $("#but6").is(':checked') ||$("#but2").is(':checked')  && $("#but8").is(':checked') ||$("#but2").is(':checked')  && $("#but9").is(':checked') ||$("#but2").is(':checked')  && $("#but10").is(':checked') ) {
//                 $('#nextPage').attr('disabled', false);
//             } else {
//                 $('#nextPage').attr('disabled', true);
//             }
//         });
//         $("#but3,#but7,#but6,#but9,#but10").change(function () {
//             if ($("#but3").is(':checked')  && $("#but7").is(':checked') ||$("#but3").is(':checked')  && $("#but6").is(':checked') ||$("#but3").is(':checked')  && $("#but9").is(':checked') ||$("#but3").is(':checked')  && $("#but10").is(':checked') ) {
//                 $('#nextPage').attr('disabled', false);
//             } else {
//                 $('#nextPage').attr('disabled', true);
//             }
//         });
//         $("#but4,#but7,#but8,#but6,#but10").change(function () {
//             if ($("#but4").is(':checked')  && $("#but7").is(':checked') ||$("#but4").is(':checked')  && $("#but8").is(':checked') ||$("#but4").is(':checked')  && $("#but6").is(':checked') ||$("#but4").is(':checked')  && $("#but10").is(':checked') ) {
//                 $('#nextPage').attr('disabled', false);
//             } else {
//                 $('#nextPage').attr('disabled', true);
//             }
//         });
//         $("#but5,#but7,#but8,#but6,#but9").change(function () {
//             if ($("#but5").is(':checked')  && $("#but7").is(':checked') ||$("#but5").is(':checked')  && $("#but8").is(':checked') ||$("#but5").is(':checked')  && $("#but6").is(':checked') ||$("#but5").is(':checked')  && $("#but9").is(':checked') ) {
//                 $('#nextPage').attr('disabled', false);
//             } else {
//                 $('#nextPage').attr('disabled', true);
//             }
//         });
})

               

    var arrows;
    
    if (KTUtil.isRTL()) {
        arrows = {
            leftArrow: '<i class="la la-angle-right"></i>',
            rightArrow: '<i class="la la-angle-left"></i>'
        }
    } else {
        arrows = {
            leftArrow: '<i class="la la-angle-left"></i>',
            rightArrow: '<i class="la la-angle-right"></i>'
        }
    }
    $('#kt_datepicker_3,#kt_datepicker_2').datepicker({
        rtl: KTUtil.isRTL(),  
        todayHighlight: true,
        templates: arrows
    });



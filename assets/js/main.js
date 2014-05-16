//homepage wide Javascript
$(function(){

    //Imprint
    var triggerClass = '.trigger_active';
    var containerClass = '.ac-container';
    customUI.customDialog('#imprint',{
        contentPath : 'assets/imprint.html',
        onClose : function(){
            $('.trigger_active').off('click','.ac-trigger');
        },
        afterLoad : function(){
            var ac_trig = $('.ac-trigger');
            ac_trig.not('.trigger_active').next('.ac-container').hide();
            ac_trig.on('click', function(){
                customUI.customAccordion(this,{
                    triggerClass : '.trigger_active',
                    containerClass : '.ac-container',
                    animate: 'slow'
                });
            });
        }
    });
});

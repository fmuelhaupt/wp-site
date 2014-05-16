customUI = {
    config : {},
    /**
     *  possible options
     *  [triggerClass] '.trigger_active',
     *  [containerClass] '.ac-container',
     *  [animate] 'slow'
     * @param triggerElem
     * @param options
     */
    customAccordion: function(triggerElem,options){
        var trig = $(triggerElem);
        if ( trig.hasClass(options.triggerClass) ) {
            trig.removeClass(options.triggerClass).next(options.containerClass).slideToggle(options.animate);
        } else {
            $(options.triggerClass).removeClass(options.triggerClass).next(options.containerClass).slideToggle(options.animate);
            trig.addClass(options.triggerClass).next(options.containerClass).slideToggle(options.animate);
        }
    },
    /**
     * possible options
     * [contentPath] path to html resource
     * [htmlContent] html string
     * [onClose] callback
     * [afterLoad] callback
     * @param triggerElem
     * @param options
     */
    customDialog: function(triggerElem,options){
        $(triggerElem).on('click',function(){
            if(options.contentPath != undefined){
                $('<div class="custom-dialog"></div>').load(options.contentPath,function(){
                    bootbox.alert($(this).html(),function(){
                        options.onClose();
                    });
                    if(options.afterLoad != undefined){
                        options.afterLoad();
                    }
                });
            }else{
                bootbox.alert($('<div class="custom-dialog">'+options.htmlContent+'</div>').html(),function(){
                    options.onClose();
                });
                options.afterLoad();
            }
        });
    }
};
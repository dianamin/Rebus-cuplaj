app.directive('backImg', function(){
	//sets backrgound image
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url + ')',
            'background-size' : 'cover'
        });
    };
})
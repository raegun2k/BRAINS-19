

$("<link href='https://fonts.googleapis.com/css?family=Creepster&display=swap' rel='stylesheet'></link>");
$("<style type='text/css'> .braaaaains { color:#f00; font-weight:bold;font-family: 'Creepster', cursive;} </style>").appendTo("head");
// console.log(orightml)





function braaainsRedrawPage () {
    const etypes = ['p','a','span','h1','h2','h3','h4','h5','h6','h7','title','li','div'];
    etypes.forEach(function (etype) {
    var pattern = '(COVID\-19|coronavirus|COVID19|(COVID 19)) (epidemic|pandemic|spread|crisis)';
    var re = RegExp(pattern,'ig');
    // https://github.com/padolsey/findAndReplaceDOMText
    $(etype).each(function() {findAndReplaceDOMText(this, { find: re, replace: 'Zombie Apocalypse', wrap: 'span', wrapClass: 'braaaaains'})});
    pattern = '(COVID\-19|coronavirus|COVID19|(COVID 19))( (disease|infection|plague))?';
    re = RegExp(pattern,'ig');
    $(etype).each(function() {findAndReplaceDOMText(this, { find: re, replace: 'Zombie Infection', wrap: 'span', wrapClass: 'braaaaains'})}); 
    })
}

chrome.storage.sync.get('brains19_state', function(data) {
   if (data['brains19_state'] === 'on') { 
       console.log ("state is on")
       braaainsRedrawPage();
   }
})



chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "BRAAAAAAAAINS" ) {
        console.log("init")
        chrome.storage.sync.get('brains19_state', function(data) {
            console.log(data)
            if (data['brains19_state'] === 'on') { 
                console.log ("state is on")
                braaainsRedrawPage();
            }
            else {
                console.log("refreshing")
                location.reload();
            }
        })
      }
});

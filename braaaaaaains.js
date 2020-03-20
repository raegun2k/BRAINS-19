

$("head").append("<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Creepster&display=swap' type='text/css'>");
$("head").append("<style type='text/css'> .braaaaains { color:#f00; font-family: 'Creepster', cursive; font-style: normal !important; font-weight: 400 !important; text-shadow:-1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF; } </style>");


const brains19_etypes = ['p','a','span','h1','h2','h3','h4','h5','h6','h7','title','li','div'];
const brains19_debug = false;

var observer = new MutationObserver(function(mutations) {
    // mutations.forEach(function(mutation) {
        if(document.readyState === "complete") {
            chrome.storage.sync.get('brains19_state', function(data) {
                if (data['brains19_state'] === 'on') { 
                    if(brains19_debug) { console.log("BRRRRAAAAAAIINS!!!! (translation: DOM mutation observed, changes applied.")}
                    braaainsRedrawPage();
                }
            })
        }
        
    //});
});
 
observer.observe(document.querySelector('body'), { attributes: true, childList: true, characterData: true, subtree: true });
 


function braaainsRedrawPage () {
    brains19_etypes.forEach(function (etype) {
    // https://github.com/padolsey/findAndReplaceDOMText
    $(etype).each(function() {
        findAndReplaceDOMText(this, 
            { 
                find: RegExp('(CORVID\-19|CORVID19|COVID\-19|coronavirus|COVID19|(COVID 19)) (epidemic|pandemic|spread|crisis)','ig'), 
                 replace: 'Zombie Apocalypse', 
                 wrap: 'span', 
                 wrapClass: 'braaaaains', 
                 filterElements: function(el) { 
                     if(el.nodeName){ return !el.nodeName.match(/input|textarea/i) } return true 
                }
            }
        );  
        findAndReplaceDOMText(this, 
            { 
                find: RegExp('(CORVID\-19|CORVID19|COVID\-19|coronavirus|COVID19|(COVID 19))( (disease|infection|plague))?','ig'), 
                replace: 'Zombie Infection', 
                wrap: 'span', 
                wrapClass: 'braaaaains', 
                filterElements: function(el) { 
                    if(el.nodeName){ return !el.nodeName.match(/input|textarea/i) } return true 
                }
            }
        );
        findAndReplaceDOMText(this, 
            { 
                find: RegExp('(Chinese|China|Wuhan)+ (virus|infection|disease|epidemic|pandemic|plague)+','ig'),
                replace: 'what racists call the Zombie Infection', 
                wrap: 'span', 
                wrapClass: 'braaaaains', 
                filterElements: function(el) { 
                    if(el.nodeName){ return !el.nodeName.match(/input|textarea/i) } return true 
                }
            }
        )
    })})
}

chrome.storage.sync.get('brains19_state', function(data) {
   if (data['brains19_state'] === 'on') { 
       if(brains19_debug) { console.log("BRAAAAAAIINS!!!! (translation: initial load of extension)")}
       braaainsRedrawPage();
   }
})



chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "BRAAAAAAAAINS" ) {
        chrome.storage.sync.get('brains19_state', function(data) {
            if (data['brains19_state'] === 'on') { 
                if(brains19_debug) { console.log("BRAAAAAAIINS!!!! (translation: extension clicked on")}
                braaainsRedrawPage();
            }
            else {
                if(brains19_debug) { console.log("BRAAAAAAAAAAIIIIIINNNSS!!! (translation: Extension switched off. Zombies averted.)")}
                location.reload();
            }
        })
      }
});



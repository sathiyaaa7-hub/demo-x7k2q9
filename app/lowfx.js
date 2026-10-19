// lowfx: heavy effects off on genuinely weak devices. The cores rule targets cheap Android phones
// (cores<=4 + touch). iPhones/iPads are exempt: even A9-era iOS devices composite these one-shot
// transform/opacity transitions smoothly, and iOS never exposes deviceMemory.
try{var n=navigator,m=n.deviceMemory,c=n.hardwareConcurrency,ios=/iPad|iPhone|iPod/.test(n.userAgent)||(n.platform==='MacIntel'&&n.maxTouchPoints>1);if((m&&m<=2)||(!ios&&c&&c<=4&&matchMedia('(pointer:coarse)').matches)||matchMedia('(prefers-reduced-data: reduce)').matches||localStorage.getItem('lowfx')==='1')document.documentElement.classList.add('lowfx');if(localStorage.getItem('lowfx')==='1')document.documentElement.classList.add('motion-off')}catch(e){}

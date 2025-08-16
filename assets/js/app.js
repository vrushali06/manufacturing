// basic slider controls
const track = document.querySelector('.track');
const prev = document.querySelector('.nav.prev');
const next = document.querySelector('.nav.next');
if (track && prev && next){
  next.addEventListener('click', ()=> track.scrollBy({left: 340, behavior:'smooth'}));
  prev.addEventListener('click', ()=> track.scrollBy({left: -340, behavior:'smooth'}));
}

// add UTM to all WhatsApp links
document.querySelectorAll('a[href*="wa.me"]').forEach(a=>{
  const url = new URL(a.href);
  url.searchParams.set('utm_source','website');
  url.searchParams.set('utm_medium','whatsapp');
  url.searchParams.set('utm_campaign','quote');
  a.href = url.toString();
});

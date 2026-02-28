const cur = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{
    mx=e.clientX;
    my=e.clientY;
    cur.style.left=mx+'px';
    cur.style.top=my+'px';});
function animRing(){
    rx+=(mx-rx)*.12;
    ry+=(my-ry)*.12;
    ring.style.left=rx+'px';
    ring.style.top=ry+'px';
    requestAnimationFrame(animRing);
}
animRing();
document.querySelectorAll('a,button,.skill-card,.proj-card,.photo-circle').forEach(el=>{
  el.addEventListener('mouseenter',()=>{
    cur.style.transform='translate(-50%,-50%) scale(2.5)';
    ring.style.transform='translate(-50%,-50%) scale(1.5)';});
  el.addEventListener('mouseleave',()=>{
    cur.style.transform='translate(-50%,-50%) scale(1)';
    ring.style.transform='translate(-50%,-50%) scale(1)';});
});

function toggleMenu(){
  document.getElementById('burger').classList.toggle('open');
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMenu(){
  document.getElementById('burger').classList.remove('open');
  document.getElementById('mobileMenu').classList.remove('open');
}

const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.animation='fadeUp .55s ease forwards';
      obs.unobserve(e.target);
    }
  });
},{threshold:.08});
document.querySelectorAll('.skill-card,.proj-card,.tl-item,.extra-item').forEach(el=>{
  el.style.opacity='0';
  obs.observe(el);
});
function sendMsg(e){
  e.preventDefault();
  const btn=e.target.querySelector('button');
  btn.textContent='✓ Message envoyé !';
  btn.style.background='#22c55e';
  setTimeout(()=>{
    btn.textContent='Envoyer';
    btn.style.background='';},3000);
}
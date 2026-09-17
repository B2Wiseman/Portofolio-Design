const loader=document.querySelector('.loader');
window.addEventListener('load',()=>setTimeout(()=>loader.classList.add('done'),700));

const menu=document.querySelector('.menu'),nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  if(open){
    nav.style.cssText='display:flex;position:absolute;right:3vw;top:55px;flex-direction:column;background:#f3f1eb;padding:18px;border:1px solid #bbb;gap:18px';
  }else nav.removeAttribute('style');
});

const items=[...document.querySelectorAll('.work-item')];
const media=[...document.querySelectorAll('.work-media,.statement-image,.hero-image')];

const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')});
},{threshold:.12});
items.forEach(x=>observer.observe(x));

let ticking=false;
function parallax(){
 const vh=innerHeight;
 media.forEach(el=>{
   const r=el.getBoundingClientRect();
   if(r.bottom>0&&r.top<vh){
     const p=(r.top+ r.height/2-vh/2)/vh;
     if(el.classList.contains('work-media')) el.style.transform=`translateY(${p*-18}px)`;
     if(el.classList.contains('statement-image')) el.style.transform=`scale(1.1) translateY(${p*-12}px)`;
   }
 });
 ticking=false;
}
addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(parallax);ticking=true}});

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));

document.querySelectorAll('.client-marquee').forEach(m=>{
 m.addEventListener('mouseenter',()=>m.querySelector('.client-track').style.animationPlayState='paused');
 m.addEventListener('mouseleave',()=>m.querySelector('.client-track').style.animationPlayState='running');
});

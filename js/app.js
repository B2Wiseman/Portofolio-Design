const projects=[...document.querySelectorAll('.project')];
const track=document.querySelector('.gallery-track');
let active=0;
function setActive(i){active=i;projects.forEach((p,n)=>p.classList.toggle('active',n===i));projects[i]?.querySelector('video')?.play().catch(()=>{});projects.forEach((p,n)=>{if(n!==i)p.querySelector('video')?.pause()})}
projects.forEach((p,i)=>{p.addEventListener('mouseenter',()=>setActive(i));p.addEventListener('click',()=>setActive(i))});
setActive(0);
const mobile=document.querySelector('.mobile-projects');
if(mobile){projects.slice(0,6).forEach((p,i)=>{const label=p.querySelector('.project-label').cloneNode(true);label.className='mlabel';const media=p.querySelector('.project-media').cloneNode(true);media.className='mmedia';const wrap=document.createElement('article');wrap.className='mproject';wrap.append(label,media);mobile.append(wrap)})}
let targetX=0,currentX=0;const gallery=document.querySelector('.work-gallery');
function sizeGallery(){if(window.innerWidth>800&&gallery&&track){const max=Math.max(0,track.scrollWidth-window.innerWidth);gallery.style.height=(window.innerHeight+max)+'px'}}
window.addEventListener('resize',sizeGallery);sizeGallery();
function loop(){if(window.innerWidth>800&&gallery&&track){const max=Math.max(0,track.scrollWidth-window.innerWidth);targetX=Math.max(0,Math.min(max,targetX));currentX+=(targetX-currentX)*.075;track.style.transform=`translate3d(${-currentX}px,0,0)`}requestAnimationFrame(loop)}
window.addEventListener('wheel',e=>{if(window.innerWidth>800&&gallery){const r=gallery.getBoundingClientRect();if(r.top<=0&&r.bottom>=window.innerHeight){targetX+=e.deltaY;window.scrollTo({top:window.scrollY+e.deltaY,behavior:'auto'});e.preventDefault()}}},{passive:false});
window.addEventListener('scroll',()=>{if(window.innerWidth>800&&gallery){const r=gallery.getBoundingClientRect();const progress=Math.min(1,Math.max(0,-r.top/(r.height-window.innerHeight||1)));const max=Math.max(0,track.scrollWidth-window.innerWidth);targetX=progress*max}});
loop();
const cursor=document.querySelector('.cursor');
window.addEventListener('pointermove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';cursor.classList.add('show')});
document.querySelectorAll('a,button,.project,.feature-video').forEach(el=>{el.addEventListener('mouseenter',()=>cursor.classList.add('big'));el.addEventListener('mouseleave',()=>cursor.classList.remove('big'))});
const menu=document.querySelector('.menu');menu?.addEventListener('click',()=>document.body.classList.toggle('menu-open'));
document.querySelector('form')?.addEventListener('submit',e=>{e.preventDefault();alert('Demo form — connect this to your newsletter service.')});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in-view')}),{threshold:.12});document.querySelectorAll('.section-pad,.work-intro').forEach(el=>observer.observe(el));

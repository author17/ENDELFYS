const S=window.SITE,B=window.BOOKS;let lang=(()=>{try{return localStorage.getItem('lang')}catch(e){return null}})()||'el';
let cart=(()=>{try{return JSON.parse(localStorage.getItem('cart')||'[]')}catch(e){return[]}})();
const T={
 el:{home:'Αρχική',books:'Βιβλία',lessons:'Μαθήματα',about:'Σχετικά',contact:'Επικοινωνία',cart:'Καλάθι',
  live:'Ζωντανά μαθήματα μέσω Zoom',h1:'Μάθε <em>ζωντανά</em>, από όπου κι αν βρίσκεσαι',lead:'Διαδραστικά διαδικτυακά μαθήματα με ζωντανή συζήτηση. Οι συνεδρίες καταγράφονται και στέλνονται στους συμμετέχοντες.',
  join:'Είσοδος στο Zoom',joinNow:'● ΖΩΝΤΑΝΑ ΤΩΡΑ – Μπες στο Zoom',start:'Ξεκινά σε',d:'Ημέρες',h:'Ώρες',m:'Λεπτά',s:'Δευτ.',unlock:'Απόκτησε πρόσβαση',lock:'Η είσοδος στο Zoom ανοίγει μετά την πληρωμή',watch:'Παρακολούθηση μόνο · απαγορεύεται η καταγραφή και η λήψη · η συμμετοχή με φωνή θα ενεργοποιηθεί σύντομα',stageH:'Ζωντανή αίθουσα μαθημάτων',bgT:'Βιβλία, Σετ & Σεμινάρια',bgS:'Δες όλα τα βιβλία, τα σετ με έκπτωση και τα σεμινάρια στη σελίδα των βιβλίων. Δωρεάν αποστολή για 3 βιβλία και άνω.',cName:'Όνομα',cMailL:'Email',cSubj:'Θέμα',cMsg:'Μήνυμα',cIntro:'Έχετε ερώτηση για τα μαθήματα, τα βιβλία ή την εγγραφή; Θα χαρούμε να σας απαντήσουμε.',cInfo:'Στοιχεία επικοινωνίας',cEm:'Email',cPh:'Τηλέφωνο',cHr:'Ώρες απάντησης',cHrV:'Δευτέρα – Παρασκευή, 10:00 – 18:00',cLs:'Ζωντανά μαθήματα',cLsV:'Κάθε Τετάρτη στις 20:00, μέσω Zoom',cFollow:'Ακολουθήστε μας',cWrite:'Στείλτε μας μήνυμα',cSend:'Αποστολή μηνύματος',cal:'Προσθήκη στο ημερολόγιο',copy:'Αντιγραφή συνδέσμου',copied:'Αντιγράφηκε!',
  id:'Meeting ID',pass:'Κωδικός',rec:'Μόνο ζωντανά',recv:'Χωρίς καταγραφή ή λήψη',free:'Δωρεάν για φοιτητές',under:'-10% κάτω των 25',
  shelf:'Βιβλιοθήκη',shelfH:'Βιβλία & Σετ',all:'Όλα τα βιβλία →',add:'Προσθήκη',search:'Αναζήτηση…',cats:{all:'Όλα',book:'Βιβλία',set:'Σετ',seminar:'Σεμινάρια'},
  sort:{def:'Προεπιλογή',lo:'Τιμή ↑',hi:'Τιμή ↓',off:'Μεγαλύτερη έκπτωση'},booksTitle:'Βιβλία, Σετ & Σεμινάρια',booksSub:'Δωρεάν αποστολή για αγορές τριών βιβλίων και άνω.',
  promo:'Δωρεάν μεταφορικά για 3 βιβλία και άνω!',aboutH:'Σχετικά με εμάς',aboutT:'Κέντρον Μελετών Ἑλλανίου Πνεύματος «ΕΝ ΔΕΛΦΥΣ». Γράψτε εδώ λίγα λόγια για τον ΓΙΑΝΝΟ ΙΟΑΝΟΥ: σπουδές, έργο, φιλοσοφία διδασκαλίας.',
  f1:'Ζωντανά μαθήματα',f1t:'Κάθε εβδομάδα στο Zoom, με ερωτήσεις και συζήτηση.',f2:'Μόνο ζωντανά',f2t:'Τα μαθήματα δεν καταγράφονται και δεν διατίθενται για λήψη.',f3:'Βιβλία',f3t:'Τα βιβλία του δασκάλου, ταχυδρομικά σε όλο τον κόσμο.',
  contactH:'Επικοινωνία',name:'Όνομα',email:'Email',msg:'Μήνυμα',send:'Αποστολή',empty:'Το καλάθι είναι άδειο',total:'Σύνολο',checkout:'Ολοκλήρωση παραγγελίας',author:'Συγγραφέας',next:'Επόμενο μάθημα'},
 en:{home:'Home',books:'Books',lessons:'Lessons',about:'About',contact:'Contact',cart:'Cart',
  live:'Live lessons on Zoom',h1:'Learn <em>live</em>, from wherever you are',lead:'Interactive online lessons with live discussion. Sessions are recorded and sent to all participants.',
  join:'Join on Zoom',joinNow:'● LIVE NOW – Join Zoom',start:'Starts in',d:'Days',h:'Hours',m:'Min',s:'Sec',unlock:'Get access',lock:'Zoom access opens after payment',watch:'Watch only · recording and downloading are prohibited · speaking will be enabled soon',stageH:'Live lesson room',bgT:'Books, Sets & Seminars',bgS:'See all books, discounted sets and seminars on the Books page. Free shipping on 3 or more books.',cName:'Name',cMailL:'Email',cSubj:'Subject',cMsg:'Message',cIntro:'Questions about the lessons, the books or registration? We will be glad to answer.',cInfo:'Contact details',cEm:'Email',cPh:'Phone',cHr:'Reply hours',cHrV:'Monday – Friday, 10:00 – 18:00',cLs:'Live lessons',cLsV:'Every Wednesday at 20:00, on Zoom',cFollow:'Follow us',cWrite:'Send us a message',cSend:'Send message',cal:'Add to calendar',copy:'Copy link',copied:'Copied!',
  id:'Meeting ID',pass:'Passcode',rec:'Live only',recv:'No recording or download',free:'Free for students',under:'-10% under 25',
  shelf:'Library',shelfH:'Books & Sets',all:'All books →',add:'Add',search:'Search…',cats:{all:'All',book:'Books',set:'Sets',seminar:'Seminars'},
  sort:{def:'Default',lo:'Price ↑',hi:'Price ↓',off:'Biggest discount'},booksTitle:'Books, Sets & Seminars',booksSub:'Free shipping on orders of three or more books.',
  promo:'Free shipping on 3 or more books!',aboutH:'About us',aboutT:'Center for the Study of the Hellenic Spirit “EN DELPHYS”. Write a few words about GIANNOS IOANNOU here: studies, work, teaching philosophy.',
  f1:'Live lessons',f1t:'Every week on Zoom with questions and discussion.',f2:'Live only',f2t:'Lessons are not recorded and are not available to download.',f3:'Books',f3t:'The teacher’s books, shipped worldwide.',
  contactH:'Contact',name:'Name',email:'Email',msg:'Message',send:'Send',empty:'Your cart is empty',total:'Total',checkout:'Checkout',author:'Author',next:'Next lesson'}};
const t=k=>T[lang][k],$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const eur=n=>S.currency+n.toFixed(2);
function applyLang(){document.documentElement.lang=lang;$$('[data-t]').forEach(e=>{const v=t(e.dataset.t);if(v!==undefined)e.innerHTML=v});
 $$('[data-ph]').forEach(e=>e.placeholder=t(e.dataset.ph));$$('[data-mail]').forEach(e=>{e.textContent=S.email;e.href='mailto:'+S.email});$$('[data-phone]').forEach(e=>{e.textContent=S.phone;e.href='tel:'+S.phone.replace(/\s/g,'')});$$('[data-fb]').forEach(e=>e.href=S.facebook);$$('[data-yt]').forEach(e=>e.href=S.youtube);$$('.brand').forEach(e=>e.textContent=S.center);$$('.tname').forEach(e=>e.textContent=lang=='el'?S.name:S.nameEn);
 $('#langBtn').textContent=lang=='el'?'EN':'EL';renderShelf();renderBooks();renderCart();tick()}
$('#langBtn').onclick=()=>{lang=lang=='el'?'en':'el';try{localStorage.setItem('lang',lang)}catch(e){};applyLang()};
/* ---- next lesson ---- */
function nextLesson(){const L=S.lesson;const fmt=new Intl.DateTimeFormat('en-CA',{timeZone:L.tz,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false});
 function zonedToUtc(y,mo,d,h,mi){let g=Date.UTC(y,mo,d,h,mi);const p=Object.fromEntries(fmt.formatToParts(new Date(g)).map(x=>[x.type,x.value]));
  const seen=Date.UTC(+p.year,p.month-1,+p.day,p.hour%24,+p.minute);return new Date(g-(seen-g))}
 const now=new Date();for(let i=-1;i<9;i++){const b=new Date(now.getTime()+i*864e5);const p=Object.fromEntries(fmt.formatToParts(b).map(x=>[x.type,x.value]));
  const dt=zonedToUtc(+p.year,p.month-1,+p.day,L.hour,L.minute);const wd=new Date(Date.UTC(+p.year,p.month-1,+p.day)).getUTCDay();
  if(wd==L.weekday&&dt.getTime()+L.durationMin*6e4>now.getTime())return dt}
 return now}
let target=nextLesson();
function tick(){const el=$('#cd');if(!el)return;const L=S.lesson;const ms=target-new Date();const live=ms<=0&&ms>-L.durationMin*6e4;
 const a=Math.max(0,ms),v=[Math.floor(a/864e5),Math.floor(a/36e5)%24,Math.floor(a/6e4)%60,Math.floor(a/1e3)%60];
 $$('#cd b').forEach((b,i)=>b.textContent=String(v[i]).padStart(2,'0'));
 const j=$('#joinBtn');j.classList.toggle('live-now',live&&!!access);j.querySelector('span').textContent=!access?(t('unlock')+' – '+eur(window.PASS.price)):(live?t('joinNow'):t('join'));
 $('#cdLabel').textContent=live?'':t('start');$('#cd').style.display=live?'none':'grid';
 $('#when').textContent=target.toLocaleString(lang=='el'?'el-GR':'en-GB',{weekday:'long',day:'numeric',month:'long',hour:'2-digit',minute:'2-digit',timeZone:L.tz})}
setInterval(()=>{if(target-new Date()<-S.lesson.durationMin*6e4)target=nextLesson();tick()},1000);
function ics(){const f=d=>d.toISOString().replace(/[-:]|\.\d{3}/g,'');const e=new Date(+target+S.lesson.durationMin*6e4);
 const x=`BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:${f(target)}\nDTEND:${f(e)}\nSUMMARY:${S.lessonTitle[lang]}\nDESCRIPTION:Zoom link in your account on the website\nEND:VEVENT\nEND:VCALENDAR`;
 const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([x],{type:'text/calendar'}));a.download='lesson.ics';a.click()}
/* ---- books ---- */
function card(b){const off=b.old?Math.round((1-b.price/b.old)*100):0;const nm=b[lang];
 return `<div class="card">${off?`<span class="tag">-${off}%</span>`:''}<div class="cover" style="background:linear-gradient(155deg,hsl(${b.hue} 55% 38%),hsl(${(b.hue+40)%360} 60% 14%))"><span class="a">${S[lang=='el'?'name':'nameEn']}</span><span class="t">${nm}</span></div>
 <div class="info"><h4>${nm}</h4><div class="price"><b>${eur(b.price)}</b>${b.old?`<s>${eur(b.old)}</s>`:''}</div><button class="btn" onclick="addCart(${b.id})">${t('add')}</button></div></div>`}
function renderShelf(){const mc=$('#miniCovers');if(mc)mc.innerHTML=B.filter(b=>b.cat!='seminar').slice(0,4).map(b=>`<div class="mc" style="background:linear-gradient(155deg,hsl(${b.hue} 55% 38%),hsl(${(b.hue+40)%360} 60% 14%))"><span>${b[lang]}</span></div>`).join('');const e=$('#shelf');if(e)e.innerHTML=B.filter(b=>b.cat!='seminar').slice(0,6).map(card).join('')}
let cat='all';
function renderBooks(){const e=$('#all');if(!e)return;const q=$('#q').value.toLowerCase();let l=B.filter(b=>(cat=='all'||b.cat==cat)&&b[lang].toLowerCase().includes(q));
 const s=$('#sort').value;if(s=='lo')l.sort((a,b)=>a.price-b.price);if(s=='hi')l.sort((a,b)=>b.price-a.price);if(s=='off')l.sort((a,b)=>(1-b.price/(b.old||b.price))-(1-a.price/(a.old||a.price)));
 e.innerHTML=l.map(card).join('');$('#chips').innerHTML=Object.entries(t('cats')).map(([k,v])=>`<button class="pill ${k==cat?'on':''}" onclick="cat='${k}';renderBooks()">${v}</button>`).join('');
 const so=$('#sort');[...so.options].forEach(o=>o.textContent=t('sort')[o.value])}
/* ---- cart ---- */
function save(){try{localStorage.setItem('cart',JSON.stringify(cart))}catch(e){}}
function addCart(id){const c=cart.find(x=>x.id==id);c?c.q++:cart.push({id,q:1});save();renderCart();toggleCart(true)}
function delCart(id){cart=cart.filter(x=>x.id!=id);save();renderCart()}
function renderCart(){const n=cart.reduce((a,c)=>a+c.q,0);$('#cartCount').textContent=n;let tot=0;
 $('#items').innerHTML=cart.length?cart.map(c=>{const b=B.find(x=>x.id==c.id);tot+=b.price*c.q;return `<div class="ci"><span>${c.q}× ${b[lang]}</span><span>${eur(b.price*c.q)} <button class="pill" onclick="delCart(${c.id})">✕</button></span></div>`}).join(''):`<p style="color:var(--mut);margin-top:20px">${t('empty')}</p>`;
 $('#total').textContent=eur(tot)}
function toggleCart(o){$('#drawer').classList.toggle('open',o);$('#veil').classList.toggle('open',o)}
async function checkout(){if(!cart.length)return;
 try{const r=await fetch('/.netlify/functions/checkout',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({items:cart.map(c=>({id:c.id,q:c.q})),lang})});
  const d=await r.json();if(d.url){location.href=d.url;return}throw new Error(d.error||'fail')}
 catch(e){const body=cart.map(c=>{const b=B.find(x=>x.id==c.id);return `${c.q}x ${b[lang]} - ${eur(b.price*c.q)}`}).join('\n');
  location.href=`mailto:${S.email}?subject=Order&body=${encodeURIComponent(body+'\n\n'+t('total')+': '+$('#total').textContent)}`}}
document.addEventListener('DOMContentLoaded',()=>{
 if($('#joinBtn')){$('#joinBtn').onclick=e=>{if(!access){e.preventDefault();buyPass();return}if(S.zoomEmbed){e.preventDefault();embedZoom().catch(()=>window.open(access.url,'_blank'))}};checkAccess();
  $('#calBtn').onclick=ics;$('#copyBtn').onclick=e=>{if(access&&navigator.clipboard)navigator.clipboard.writeText(access.url);e.target.textContent=t('copied');setTimeout(()=>e.target.textContent=t('copy'),1500)};
  if(S.bannerVideo){const v=$('#bv');v.src=S.bannerVideo;if(S.bannerPoster)v.poster=S.bannerPoster;v.style.display='block';$('.fallback').style.display='none'}}
 if($('#q')){$('#q').oninput=renderBooks;$('#sort').onchange=renderBooks}
 $('#cartBtn').onclick=()=>toggleCart(true);$('#veil').onclick=()=>toggleCart(false);applyLang()});

let access=null;
async function checkAccess(){let sid=null;try{sid=new URLSearchParams(location.search).get('session_id');
 if(sid){localStorage.setItem('sid',sid);history.replaceState({},'',location.pathname+'#lessons')}else sid=localStorage.getItem('sid')}catch(e){}
 if(sid){try{const r=await fetch('/.netlify/functions/access?session_id='+encodeURIComponent(sid));if(r.ok)access=await r.json()}catch(e){}}
 renderAccess()}
function renderAccess(){const j=$('#joinBtn');if(!j)return;const m=$('#zmeta');
 if(access){j.href=access.url;j.target='_blank';$('#zid').textContent=access.id;$('#zpass').textContent=access.pass;m.style.display='flex';$('#lockNote').style.display='none';wm(access.email)}
 else{j.href='#';j.removeAttribute('target');m.style.display='none';$('#lockNote').style.display='block'}tick()}
async function buyPass(){try{const r=await fetch('/.netlify/functions/checkout',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({pass:true,lang})});
 const d=await r.json();if(d.url)location.href=d.url;else throw 0}catch(e){location.href=`mailto:${S.email}?subject=Lessons access`}}

function wm(txt){if(!txt||$('#wm'))return;const d=document.createElement('div');d.id='wm';d.textContent=txt;document.querySelector('.stage').appendChild(d);
 let x=10,y=20,dx=.35,dy=.25;setInterval(()=>{x+=dx;y+=dy;if(x>70||x<5)dx=-dx;if(y>85||y<8)dy=-dy;d.style.left=x+'%';d.style.top=y+'%'},60)}

function loadJs(u){return new Promise((ok,no)=>{const s=document.createElement('script');s.src=u;s.onload=ok;s.onerror=no;document.head.appendChild(s)})}
async function embedZoom(){
 let sid=null;try{sid=localStorage.getItem('sid')}catch(e){}
 const r=await fetch('/.netlify/functions/zoom-signature?session_id='+encodeURIComponent(sid));if(!r.ok)throw new Error('no signature');const d=await r.json();
 const v=S.zoomSdkVersion;
 if(!window.ZoomMtgEmbedded){
  for(const f of ['react','react-dom','redux','redux-thunk','react-redux','lodash'])await loadJs(`https://source.zoom.us/${v}/lib/vendor/${f}.min.js`);
  await loadJs(`https://source.zoom.us/zoom-meeting-embedded-${v}.min.js`)}
 const root=$('#zoomRoot');root.style.display='block';
 const client=ZoomMtgEmbedded.createClient();
 await client.init({zoomAppRoot:root,language:'en-US',patchJsMedia:true,customize:{video:{isResizable:false,viewSizes:{default:{width:root.clientWidth,height:root.clientHeight}}}}});
 await client.join({signature:d.signature,sdkKey:d.clientId,meetingNumber:d.meetingNumber,password:d.password,userName:d.name||'Student'})}

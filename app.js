// Nomor WhatsApp admin. Format internasional tanpa +, awalan 0 diganti 62.
const ADMIN_WHATSAPP = "6285971643586";
const catalog=document.querySelector("#catalog"),search=document.querySelector("#search"),category=document.querySelector("#category");
const rupiah=n=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);
let selected=null;
function render(){
 const q=search.value.trim().toLowerCase(),cat=category.value;
 const items=PRODUCTS.filter(p=>(p.name.toLowerCase().includes(q)||p.desc.toLowerCase().includes(q))&&(cat==="Semua"||p.category===cat));
 document.querySelector("#count").textContent=`${items.length} aplikasi`;
 catalog.innerHTML=items.map(p=>`<article class="app-card"><div class="app-head"><div class="app-icon" style="background:${p.color}">${p.icon}</div><div><h3>${p.name}</h3><div class="category-tag">${p.category}</div></div></div><p class="app-desc">${p.desc}</p><div class="card-bottom"><div class="price">${rupiah(Math.min(...p.plans.map(x=>x.price)))}<small>mulai dari</small></div><button class="detail-btn" data-name="${p.name.replaceAll('"','&quot;')}">Pilih paket ↗</button></div></article>`).join("")||'<div class="empty">Aplikasi tidak ditemukan. Coba kata kunci lain.</div>';
 catalog.querySelectorAll("button").forEach(b=>b.onclick=()=>openProduct(b.dataset.name));
}
function openProduct(name){
 selected=PRODUCTS.find(p=>p.name===name);
 document.querySelector("#modalIcon").textContent=selected.icon;
 document.querySelector("#modalIcon").style.background=selected.color;
 document.querySelector("#modalName").textContent=selected.name;
 document.querySelector("#modalDesc").textContent=selected.desc;
 document.querySelector("#plan").innerHTML=selected.plans.map((p,i)=>`<option value="${i}">${p.label} — ${rupiah(p.price)}</option>`).join("");
 document.querySelector("#modal").classList.remove("hidden");
}
document.querySelector("#closeModal").onclick=()=>document.querySelector("#modal").classList.add("hidden");
document.querySelector("#modal").onclick=e=>{if(e.target.id==="modal")e.currentTarget.classList.add("hidden")};
document.querySelector("#orderBtn").onclick=()=>{
 if(!selected)return;
 const plan=selected.plans[Number(document.querySelector("#plan").value)];
 const buyer=document.querySelector("#buyer").value.trim();
 const msg=`Halo admin PinkStore, saya ingin pesan:\\nProduk: ${selected.name}\\nPaket: ${plan.label}\\nHarga katalog: ${rupiah(plan.price)}${buyer?"\\nNama: "+buyer:""}\\nMohon konfirmasi ketersediaan dan metode pembayaran.`;
 window.open(`https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(msg)}`,"_blank","noopener");
};
search.addEventListener("input",render);category.addEventListener("change",render);render();
let deferredPrompt;const installBtn=document.querySelector("#installBtn");
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;installBtn.classList.remove("hidden")});
installBtn.addEventListener("click",async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;installBtn.classList.add("hidden")});
window.addEventListener("appinstalled",()=>installBtn.classList.add("hidden"));
if("serviceWorker" in navigator && location.protocol!=="file:"){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}))}

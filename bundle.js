!function(){const e=document.querySelector(".modal__phone");IMask(e,{mask:"+{7}(000)000-00-00"});e&&e.addEventListener("input",(()=>{e.value.length<16?e.setCustomValidity("Номер должен быть из 10 цифр"):e.setCustomValidity(""),e.reportValidity()}));const t=document.querySelector(".main__button"),n=document.querySelector(".modal__close"),o=document.querySelector(".modal-success__close"),d=(document.querySelector(".modal__button"),document.querySelector(".modal__name")),s=document.querySelector(".modal__phone"),c=document.querySelector(".modal"),i=document.querySelector(".modal__form"),l=document.querySelector(".modal__inner"),r=document.querySelector(".modal-success"),a=document.querySelector(".modal-success__inner");c.classList.add("hidden"),c.style.position="fixed",r.style.position="fixed",l.style.position="fixed",a.style.position="fixed";const u=e=>{"Escape"===e.key&&(v(),e.preventDefault())},m=e=>{e.target===c&&v()},v=()=>{c.classList.add("hidden"),document.body.style.overflow="",n.removeEventListener("click",t),c.removeEventListener("click",m),document.removeEventListener("keydown",u),i.removeEventListener("submit",y)};t&&t.addEventListener("click",(()=>{c.classList.remove("hidden"),document.body.style.overflow="hidden",S(),n.addEventListener("click",n),c.addEventListener("click",m),document.addEventListener("keydown",u),i.addEventListener("submit",y)})),n&&n.addEventListener("click",v);const y=e=>{s.value="",d.value="",E(),e.preventDefault()};i.addEventListener("submit",(function(e){r.classList.remove("hidden"),e.preventDefault(),h(),o.addEventListener("click",o),document.addEventListener("keydown",L),document.addEventListener("click",_)}));const L=e=>{"Escape"===e.key&&(k(),e.preventDefault())},_=e=>{e.target===r&&k()},E=()=>{c.classList.add("hidden"),r.classList.remove("hidden"),a.classList.add("modal__show"),r.addEventListener("click",_),o.addEventListener("click",k),document.addEventListener("keydown",L)},k=()=>{r.classList.add("hidden"),a.classList.remove("modal__show"),o.removeEventListener("click",k),r.removeEventListener("click",_),document.removeEventListener("keydown",L)};let p=!0,f="";try{f=localStorage.getItem("login")}catch(e){p=!1}const h=e=>{d&&s?p&&localStorage.setItem("login",d.value):(e.preventDefault(),d.setCustomValidity("Нужно ввести имя кириллицей"),s.setCustomValidity("Нужно ввести телефон")),d.reportValidity(),s.reportValidity()},S=()=>{f?(d.value=f,s.focus()):d.focus()}}();
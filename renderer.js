const $ = id => document.getElementById(id);
const storageKey = 'ragnaidle-hub-settings-v1';
let saved = {};
try { saved = JSON.parse(localStorage.getItem(storageKey) || '{}') || {}; } catch {}
const layouts = ['single','grid','columns'];
const state = {
 names: Array.from({length:4}, (_,i) => typeof saved.names?.[i] === 'string' ? saved.names[i] : `Conta ${i+1}`),
 layout: layouts.includes(saved.layout) ? saved.layout : 'grid',
 selected: Number.isInteger(saved.selected) && saved.selected>=0 && saved.selected<4 ? saved.selected : 0,
 notify: !!saved.notify,
 statuses: Array(4).fill('loading')
};
function persist(){localStorage.setItem(storageKey, JSON.stringify({names:state.names,layout:state.layout,selected:state.selected,notify:state.notify}));}
const pages = [['panel','Painel'],['game','Jogo'],['automation','Automações'],['lives','Lives'],['votes','Votos'],['settings','Configurações']];
function navigate(id){document.querySelectorAll('.page').forEach(p=>p.hidden=p.id!==id);document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('active',b.dataset.page===id));}
for(const [id,title] of pages){const b=document.createElement('button');b.textContent=title;b.dataset.page=id;b.addEventListener('click',()=>navigate(id));$('navigation').append(b);}
const views=[], headers=[], tabs=[], cards=[];
function labelStatus(i){return {loading:'Carregando página',ready:'Página carregada',error:'Erro ao carregar'}[state.statuses[i]];}
function render(){
 tabs.forEach((b,i)=>{b.replaceChildren();const dot=document.createElement('span');dot.className='dot '+state.statuses[i];b.append(dot,document.createTextNode(state.names[i]));b.classList.toggle('active',i===state.selected);b.title=state.names[i]+' — '+labelStatus(i);});
 headers.forEach((el,i)=>{el.textContent=state.names[i];});
 cards.forEach((card,i)=>{card.querySelector('h2').textContent=state.names[i];card.querySelector('.status').textContent=labelStatus(i);});
 $('active-name').textContent=state.names[state.selected];$('vote-account').textContent='Conta selecionada: '+state.names[state.selected];
 $('screens').className='screens '+state.layout;
 document.querySelectorAll('.screen').forEach((el,i)=>{el.classList.toggle('hidden',state.layout==='single'&&i!==state.selected);el.classList.toggle('selected',i===state.selected);});
 document.querySelectorAll('[data-layout]').forEach(b=>b.classList.toggle('active',b.dataset.layout===state.layout));
 $('preferred-layout').value=state.layout;
}
function select(i){state.selected=i;persist();render();}
function button(text,fn,cls=''){const b=document.createElement('button');b.textContent=text;b.className=cls;b.addEventListener('click',fn);return b;}
for(let i=0;i<4;i++){
 const tab=button('',()=>select(i),'account-tab');tabs.push(tab);$('accountbar').append(tab);
 const card=document.createElement('article');const h=document.createElement('h2');const status=document.createElement('p');status.className='status';const desc=document.createElement('p');desc.textContent='Personagens e níveis: leitura ainda não implementada.';card.append(h,status,desc,button('Abrir conta',()=>{select(i);state.layout='single';persist();render();navigate('game');},'primary'));cards.push(card);$('cards').append(card);
 const frame=document.createElement('div');frame.className='screen';const head=document.createElement('div');head.className='screen-head';const name=document.createElement('span');name.className='screen-name';headers.push(name);
 const view=document.createElement('webview');view.setAttribute('partition','persist:conta'+(i+1));view.setAttribute('src','https://www.ragnaidle.com.br/entrar');views.push(view);
 head.append(name,button('Recarregar',()=>view.reload()),button('Expandir',()=>{select(i);state.layout='single';persist();render();}));head.addEventListener('click',()=>select(i));frame.append(head,view);$('screens').append(frame);
 view.addEventListener('did-start-loading',()=>{state.statuses[i]='loading';render();});view.addEventListener('did-stop-loading',()=>{if(state.statuses[i]!=='error')state.statuses[i]='ready';render();});view.addEventListener('did-fail-load',e=>{if(e.isMainFrame&&e.errorCode!==-3){state.statuses[i]='error';render();}});
 const row=document.createElement('label');row.className='setting';const caption=document.createElement('span');caption.textContent='Nome da conta '+(i+1);const input=document.createElement('input');input.type='text';input.maxLength=32;input.value=state.names[i];input.addEventListener('change',()=>{state.names[i]=input.value.trim()||'Conta '+(i+1);input.value=state.names[i];persist();render();});row.append(caption,input);$('account-settings').append(row);
}
document.querySelectorAll('[data-layout]').forEach(b=>b.addEventListener('click',()=>{state.layout=b.dataset.layout;persist();render();}));
$('preferred-layout').addEventListener('change',e=>{state.layout=e.target.value;persist();render();});
$('notify').checked=state.notify;$('notify').addEventListener('change',e=>{state.notify=e.target.checked;persist();});
$('open-all').addEventListener('click',()=>{state.layout='grid';persist();render();navigate('game');});
$('test-notification').addEventListener('click',async()=>{try{const ok=await window.hub.testNotification();$('notification-result').textContent=ok?'Teste enviado ao Windows. Se não aparecer, confira as permissões e o modo Não perturbe.':'Notificações indisponíveis neste ambiente.';}catch{$('notification-result').textContent='Não foi possível enviar a notificação.';}});
navigate('panel');render();

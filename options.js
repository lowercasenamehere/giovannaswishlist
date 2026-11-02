function attachOptions(card,g){
 if(!Array.isArray(g.options)||!g.options.length)return;
 const money=n=>n==null?'Price TBD':new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n);
 const choices=[{...g,options:undefined},...g.options];
 const panel=document.createElement('details');panel.className='gift-options';const summary=document.createElement('summary');summary.textContent='Other options';panel.append(summary);
 const note=document.createElement('p');note.textContent='Choose one option.';panel.append(note);const list=document.createElement('div');list.className='option-choices';panel.append(list);
 const body=card.querySelector('.body');let variant=body.querySelector('.variant');if(!variant){variant=document.createElement('p');variant.className='variant';body.querySelector('h3').after(variant);}let description=body.querySelector('.description');if(!description){description=document.createElement('p');description.className='description';body.querySelector('.pricing').before(description);}
 const buttons=[];
 function choose(i){const p=choices[i];g.choice=p;body.querySelector('h3').textContent=p.name;variant.textContent=[i?'Option '+(i+1):'First choice',p.variant].filter(Boolean).join(' · ');description.textContent=p.description||'';body.querySelector('.pricing strong').textContent=money(p.price);card.dataset.prices=p.price==null?'':String(p.price);
 let image=card.querySelector('.art img');if(p.image){if(!image){image=document.createElement('img');image.width=600;image.height=600;card.querySelector('.art').append(image);}image.src=p.image;image.alt=p.name;}else if(image)image.remove();
 let links=body.querySelector('.links');if(!links){links=document.createElement('div');links.className='links';panel.before(links);}links.replaceChildren();if(/^https?:\/\//.test(p.url)){const a=document.createElement('a');a.href=p.url;a.target='_blank';a.rel='noopener noreferrer';a.textContent=i?'View alternative ↗':'View gift ↗';links.append(a);}
 buttons.forEach((b,n)=>b.setAttribute('aria-pressed',String(n===i)));try{localStorage.setItem('giovanna-wishlist-option-'+g.id,String(i));}catch{}document.dispatchEvent(new Event('wishlist-option-change'));
 }
 choices.forEach((p,i)=>{const b=document.createElement('button');b.type='button';b.textContent=(i?'Option '+(i+1):'First choice')+': '+p.name+' · '+money(p.price);b.onclick=()=>choose(i);buttons.push(b);list.append(b);});
 body.querySelector('.links')?.after(panel);if(!panel.isConnected)body.append(panel);
 let saved=0;try{saved=Number(localStorage.getItem('giovanna-wishlist-option-'+g.id)||0);}catch{}choose(Number.isInteger(saved)&&saved>=0&&saved<choices.length?saved:0);
}

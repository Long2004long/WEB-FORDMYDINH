import pages from '../../content/pages.json';
import seed from '../../content/seed.json';
import {readContent,defaults} from '../../lib/cms';
export const dynamic='force-dynamic';
const escape=(x:unknown)=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
const jsonSafe=(x:unknown)=>JSON.stringify(x).replace(/</g,'\\u003c');
export async function GET(r:Request){const url=new URL(r.url);let slug=decodeURIComponent(url.pathname).replace(/^\/|\/$/g,'').replace(/\.html$/,'')||'index';let data:any=defaults;try{data=(await readContent()).data}catch{/* Keep the public catalogue available during storage outages. */}
 if(slug==='variant-data.js')return new Response('window.variantData='+jsonSafe(data.variants)+';',{headers:{'Content-Type':'application/javascript','Cache-Control':'no-cache'}});
 if(slug==='accessory-data.js')return new Response('window.accessoryCatalogues='+jsonSafe(data.accessories)+';',{headers:{'Content-Type':'application/javascript','Cache-Control':'no-cache'}});
 let html=(pages as Record<string,string>)[slug];if(!html)return new Response('Không tìm thấy trang',{status:404});
 const post=data.posts.find((p:any)=>p.slug===slug);if(post){if(!post.published)return new Response('Bài viết chưa được xuất bản',{status:404});html=html.replace(/<h1>[\s\S]*?<\/h1>/,'<h1>'+escape(post.title)+'</h1>').replace(/<title>[\s\S]*?<\/title>/,'<title>'+escape(post.title)+' | Ford Mỹ Đình</title>').replace(/(<img class="story-image [^"]*" src=")[^"]+/,(_,p)=>p+escape(post.image));if(post.body!==seed.posts.find(p=>p.slug===slug)?.body){const body=post.body.split(/\n\n+/).map((p:string)=>p.startsWith('## ')?'<section><h2>'+escape(p.slice(3).split('\n')[0])+'</h2><p>'+escape(p.slice(3).split('\n').slice(1).join('\n'))+'</p></section>':'<p>'+escape(p).replace(/\n/g,'<br>')+'</p>').join('');html=html.replace(/(<article class="story-content">)[\s\S]*?(<div class="story-cta">)/,(_,a,b)=>a+body+b)}}
 const banner=data.banners.find((b:any)=>b.page===slug);if(banner)html=html.replace(/(<figure class="banner-photo[^"]*"><img )src="[^"]+" alt="[^"]*"/,(_,a)=>a+'src="'+escape(banner.image)+'" alt="'+escape(banner.alt)+'"');
 if(banner&&slug==='buy')html=html.replace(/(<a class="offer-art"[^>]*><img )src="[^"]+" alt="[^"]*"/,(_,a)=>a+'src="'+escape(banner.image)+'" alt="'+escape(banner.alt)+'"');
 if(slug==='accessories')html=html.replace('src="accessory-prices.js"','src="/accessory-data.js"').replace('</head>','<link rel="stylesheet" href="/explorer-fix.css"></head>');
 // Remove the old local-only form success handler.
 html=html.replace(/document\.querySelectorAll\('form'\)\.forEach\(form=>form\.addEventListener\('submit',[^\n]+/,'');
 html=html.replace('</body>','<script>window.siteCMS='+jsonSafe({settings:data.settings,variants:data.variants,posts:data.posts.map((p:any)=>({slug:p.slug,title:p.title,image:p.image,published:p.published}))})+';</script><script src="/cms-public.js"></script></body>');
 return new Response(html,{headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'}});
}

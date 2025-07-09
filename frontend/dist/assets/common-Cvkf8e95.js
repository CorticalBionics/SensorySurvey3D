(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Df="166",Dr={ROTATE:0,DOLLY:1,PAN:2},Ur={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},tT=0,ym=1,nT=2,f_=1,iT=2,cr=3,Ui=0,Un=1,fi=2,Hr=0,ho=1,Mm=2,Sm=3,Em=4,rT=5,cs=100,sT=101,oT=102,aT=103,cT=104,lT=200,uT=201,hT=202,fT=203,Fh=204,Bh=205,dT=206,pT=207,mT=208,gT=209,_T=210,xT=211,vT=212,yT=213,MT=214,ST=0,ET=1,TT=2,ml=3,AT=4,bT=5,wT=6,RT=7,Uf=0,CT=1,PT=2,Vr=0,LT=1,IT=2,DT=3,UT=4,NT=5,OT=6,FT=7,Tm="attached",BT="detached",d_=300,go=301,_o=302,zh=303,Hh=304,bl=306,xo=1e3,Fr=1001,gl=1002,Dn=1003,p_=1004,la=1005,Jn=1006,al=1007,hr=1008,pr=1009,m_=1010,g_=1011,_a=1012,Nf=1013,fs=1014,Li=1015,Ma=1016,Of=1017,Ff=1018,vo=1020,__=35902,x_=1021,v_=1022,di=1023,y_=1024,M_=1025,fo=1026,yo=1027,Bf=1028,zf=1029,S_=1030,Hf=1031,Vf=1033,cl=33776,ll=33777,ul=33778,hl=33779,Vh=35840,kh=35841,Gh=35842,Wh=35843,Xh=36196,qh=37492,Yh=37496,Kh=37808,Zh=37809,jh=37810,$h=37811,Jh=37812,Qh=37813,ef=37814,tf=37815,nf=37816,rf=37817,sf=37818,of=37819,af=37820,cf=37821,fl=36492,lf=36494,uf=36495,E_=36283,hf=36284,ff=36285,df=36286,xa=2300,va=2301,Gu=2302,Am=2400,bm=2401,wm=2402,zT=2500,HT=0,T_=1,pf=2,VT=3200,kT=3201,kf=0,GT=1,Or="",Pn="srgb",vn="srgb-linear",Gf="display-p3",wl="display-p3-linear",_l="linear",Ht="srgb",xl="rec709",vl="p3",Ns=7680,Rm=519,WT=512,XT=513,qT=514,A_=515,YT=516,KT=517,ZT=518,jT=519,mf=35044,Cm="300 es",fr=2e3,yl=2001;class ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const o=i.indexOf(t);o!==-1&&i.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let o=0,c=i.length;o<c;o++)i[o].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pm=1234567;const fa=Math.PI/180,Mo=180/Math.PI;function Ii(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function fn(s,e,t){return Math.max(e,Math.min(t,s))}function Wf(s,e){return(s%e+e)%e}function $T(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function JT(s,e,t){return s!==e?(t-s)/(e-s):0}function da(s,e,t){return(1-t)*s+t*e}function QT(s,e,t,n){return da(s,e,1-Math.exp(-t*n))}function eA(s,e=1){return e-Math.abs(Wf(s,e*2)-e)}function tA(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function nA(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function iA(s,e){return s+Math.floor(Math.random()*(e-s+1))}function rA(s,e){return s+Math.random()*(e-s)}function sA(s){return s*(.5-Math.random())}function oA(s){s!==void 0&&(Pm=s);let e=Pm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function aA(s){return s*fa}function cA(s){return s*Mo}function lA(s){return(s&s-1)===0&&s!==0}function uA(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function hA(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function fA(s,e,t,n,i){const o=Math.cos,c=Math.sin,l=o(t/2),u=c(t/2),h=o((e+n)/2),d=c((e+n)/2),m=o((e-n)/2),p=c((e-n)/2),g=o((n-e)/2),y=c((n-e)/2);switch(i){case"XYX":s.set(l*d,u*m,u*p,l*h);break;case"YZY":s.set(u*p,l*d,u*m,l*h);break;case"ZXZ":s.set(u*m,u*p,l*d,l*h);break;case"XZX":s.set(l*d,u*y,u*g,l*h);break;case"YXY":s.set(u*g,l*d,u*y,l*h);break;case"ZYZ":s.set(u*y,u*g,l*d,l*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Pi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const b_={DEG2RAD:fa,RAD2DEG:Mo,generateUUID:Ii,clamp:fn,euclideanModulo:Wf,mapLinear:$T,inverseLerp:JT,lerp:da,damp:QT,pingpong:eA,smoothstep:tA,smootherstep:nA,randInt:iA,randFloat:rA,randFloatSpread:sA,seededRandom:oA,degToRad:aA,radToDeg:cA,isPowerOfTwo:lA,ceilPowerOfTwo:uA,floorPowerOfTwo:hA,setQuaternionFromProperEuler:fA,normalize:Pt,denormalize:Pi};class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*n-c*i+e.x,this.y=o*i+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,n,i,o,c,l,u,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,o,c,l,u,h)}set(e,t,n,i,o,c,l,u,h){const d=this.elements;return d[0]=e,d[1]=i,d[2]=l,d[3]=t,d[4]=o,d[5]=u,d[6]=n,d[7]=c,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,o=this.elements,c=n[0],l=n[3],u=n[6],h=n[1],d=n[4],m=n[7],p=n[2],g=n[5],y=n[8],M=i[0],x=i[3],_=i[6],T=i[1],S=i[4],w=i[7],N=i[2],I=i[5],L=i[8];return o[0]=c*M+l*T+u*N,o[3]=c*x+l*S+u*I,o[6]=c*_+l*w+u*L,o[1]=h*M+d*T+m*N,o[4]=h*x+d*S+m*I,o[7]=h*_+d*w+m*L,o[2]=p*M+g*T+y*N,o[5]=p*x+g*S+y*I,o[8]=p*_+g*w+y*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],c=e[4],l=e[5],u=e[6],h=e[7],d=e[8];return t*c*d-t*l*h-n*o*d+n*l*u+i*o*h-i*c*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],c=e[4],l=e[5],u=e[6],h=e[7],d=e[8],m=d*c-l*h,p=l*u-d*o,g=h*o-c*u,y=t*m+n*p+i*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/y;return e[0]=m*M,e[1]=(i*h-d*n)*M,e[2]=(l*n-i*c)*M,e[3]=p*M,e[4]=(d*t-i*u)*M,e[5]=(i*o-l*t)*M,e[6]=g*M,e[7]=(n*u-h*t)*M,e[8]=(c*t-n*o)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,o,c,l){const u=Math.cos(o),h=Math.sin(o);return this.set(n*u,n*h,-n*(u*c+h*l)+c+e,-i*h,i*u,-i*(-h*c+u*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Wu.makeScale(e,t)),this}rotate(e){return this.premultiply(Wu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wu=new ht;function w_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ya(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function dA(){const s=ya("canvas");return s.style.display="block",s}const Lm={};function Xf(s){s in Lm||(Lm[s]=!0,console.warn(s))}function pA(s,e,t){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}const Im=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dm=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mc={[vn]:{transfer:_l,primaries:xl,toReference:s=>s,fromReference:s=>s},[Pn]:{transfer:Ht,primaries:xl,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[wl]:{transfer:_l,primaries:vl,toReference:s=>s.applyMatrix3(Dm),fromReference:s=>s.applyMatrix3(Im)},[Gf]:{transfer:Ht,primaries:vl,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Dm),fromReference:s=>s.applyMatrix3(Im).convertLinearToSRGB()}},mA=new Set([vn,wl]),bt={enabled:!0,_workingColorSpace:vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!mA.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=mc[e].toReference,i=mc[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return mc[s].primaries},getTransfer:function(s){return s===Or?_l:mc[s].transfer}};function po(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xu(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Os;class gA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Os===void 0&&(Os=ya("canvas")),Os.width=e.width,Os.height=e.height;const n=Os.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ya("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),o=i.data;for(let c=0;c<o.length;c++)o[c]=po(o[c]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(po(t[n]/255)*255):t[n]=po(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _A=0;class R_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_A++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let c=0,l=i.length;c<l;c++)i[c].isDataTexture?o.push(qu(i[c].image)):o.push(qu(i[c]))}else o=qu(i);n.url=o}return t||(e.images[this.uuid]=n),n}}function qu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?gA.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xA=0;class pn extends ps{constructor(e=pn.DEFAULT_IMAGE,t=pn.DEFAULT_MAPPING,n=Fr,i=Fr,o=Jn,c=hr,l=di,u=pr,h=pn.DEFAULT_ANISOTROPY,d=Or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xA++}),this.uuid=Ii(),this.name="",this.source=new R_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=c,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=u,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==d_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xo:e.x=e.x-Math.floor(e.x);break;case Fr:e.x=e.x<0?0:1;break;case gl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xo:e.y=e.y-Math.floor(e.y);break;case Fr:e.y=e.y<0?0:1;break;case gl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=d_;pn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,n=0,i=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*i+c[12]*o,this.y=c[1]*t+c[5]*n+c[9]*i+c[13]*o,this.z=c[2]*t+c[6]*n+c[10]*i+c[14]*o,this.w=c[3]*t+c[7]*n+c[11]*i+c[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,o;const u=e.elements,h=u[0],d=u[4],m=u[8],p=u[1],g=u[5],y=u[9],M=u[2],x=u[6],_=u[10];if(Math.abs(d-p)<.01&&Math.abs(m-M)<.01&&Math.abs(y-x)<.01){if(Math.abs(d+p)<.1&&Math.abs(m+M)<.1&&Math.abs(y+x)<.1&&Math.abs(h+g+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(h+1)/2,w=(g+1)/2,N=(_+1)/2,I=(d+p)/4,L=(m+M)/4,F=(y+x)/4;return S>w&&S>N?S<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(S),i=I/n,o=L/n):w>N?w<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(w),n=I/i,o=F/i):N<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(N),n=L/o,i=F/o),this.set(n,i,o,t),this}let T=Math.sqrt((x-y)*(x-y)+(m-M)*(m-M)+(p-d)*(p-d));return Math.abs(T)<.001&&(T=1),this.x=(x-y)/T,this.y=(m-M)/T,this.z=(p-d)/T,this.w=Math.acos((h+g+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vA extends ps{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new pn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const c=n.count;for(let l=0;l<c;l++)this.textures[l]=o.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new R_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ds extends vA{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class C_ extends pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yA extends pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,o,c,l){let u=n[i+0],h=n[i+1],d=n[i+2],m=n[i+3];const p=o[c+0],g=o[c+1],y=o[c+2],M=o[c+3];if(l===0){e[t+0]=u,e[t+1]=h,e[t+2]=d,e[t+3]=m;return}if(l===1){e[t+0]=p,e[t+1]=g,e[t+2]=y,e[t+3]=M;return}if(m!==M||u!==p||h!==g||d!==y){let x=1-l;const _=u*p+h*g+d*y+m*M,T=_>=0?1:-1,S=1-_*_;if(S>Number.EPSILON){const N=Math.sqrt(S),I=Math.atan2(N,_*T);x=Math.sin(x*I)/N,l=Math.sin(l*I)/N}const w=l*T;if(u=u*x+p*w,h=h*x+g*w,d=d*x+y*w,m=m*x+M*w,x===1-l){const N=1/Math.sqrt(u*u+h*h+d*d+m*m);u*=N,h*=N,d*=N,m*=N}}e[t]=u,e[t+1]=h,e[t+2]=d,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,i,o,c){const l=n[i],u=n[i+1],h=n[i+2],d=n[i+3],m=o[c],p=o[c+1],g=o[c+2],y=o[c+3];return e[t]=l*y+d*m+u*g-h*p,e[t+1]=u*y+d*p+h*m-l*g,e[t+2]=h*y+d*g+l*p-u*m,e[t+3]=d*y-l*m-u*p-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,o=e._z,c=e._order,l=Math.cos,u=Math.sin,h=l(n/2),d=l(i/2),m=l(o/2),p=u(n/2),g=u(i/2),y=u(o/2);switch(c){case"XYZ":this._x=p*d*m+h*g*y,this._y=h*g*m-p*d*y,this._z=h*d*y+p*g*m,this._w=h*d*m-p*g*y;break;case"YXZ":this._x=p*d*m+h*g*y,this._y=h*g*m-p*d*y,this._z=h*d*y-p*g*m,this._w=h*d*m+p*g*y;break;case"ZXY":this._x=p*d*m-h*g*y,this._y=h*g*m+p*d*y,this._z=h*d*y+p*g*m,this._w=h*d*m-p*g*y;break;case"ZYX":this._x=p*d*m-h*g*y,this._y=h*g*m+p*d*y,this._z=h*d*y-p*g*m,this._w=h*d*m+p*g*y;break;case"YZX":this._x=p*d*m+h*g*y,this._y=h*g*m+p*d*y,this._z=h*d*y-p*g*m,this._w=h*d*m-p*g*y;break;case"XZY":this._x=p*d*m-h*g*y,this._y=h*g*m-p*d*y,this._z=h*d*y+p*g*m,this._w=h*d*m+p*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],o=t[8],c=t[1],l=t[5],u=t[9],h=t[2],d=t[6],m=t[10],p=n+l+m;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(d-u)*g,this._y=(o-h)*g,this._z=(c-i)*g}else if(n>l&&n>m){const g=2*Math.sqrt(1+n-l-m);this._w=(d-u)/g,this._x=.25*g,this._y=(i+c)/g,this._z=(o+h)/g}else if(l>m){const g=2*Math.sqrt(1+l-n-m);this._w=(o-h)/g,this._x=(i+c)/g,this._y=.25*g,this._z=(u+d)/g}else{const g=2*Math.sqrt(1+m-n-l);this._w=(c-i)/g,this._x=(o+h)/g,this._y=(u+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,o=e._z,c=e._w,l=t._x,u=t._y,h=t._z,d=t._w;return this._x=n*d+c*l+i*h-o*u,this._y=i*d+c*u+o*l-n*h,this._z=o*d+c*h+n*u-i*l,this._w=c*d-n*l-i*u-o*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,o=this._z,c=this._w;let l=c*e._w+n*e._x+i*e._y+o*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=c,this._x=n,this._y=i,this._z=o,this;const u=1-l*l;if(u<=Number.EPSILON){const g=1-t;return this._w=g*c+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*o+t*this._z,this.normalize(),this}const h=Math.sqrt(u),d=Math.atan2(h,l),m=Math.sin((1-t)*d)/h,p=Math.sin(t*d)/h;return this._w=c*m+this._w*p,this._x=n*m+this._x*p,this._y=i*m+this._y*p,this._z=o*m+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Um.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Um.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*i,this.y=o[1]*t+o[4]*n+o[7]*i,this.z=o[2]*t+o[5]*n+o[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,o=e.elements,c=1/(o[3]*t+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*i+o[12])*c,this.y=(o[1]*t+o[5]*n+o[9]*i+o[13])*c,this.z=(o[2]*t+o[6]*n+o[10]*i+o[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,o=e.x,c=e.y,l=e.z,u=e.w,h=2*(c*i-l*n),d=2*(l*t-o*i),m=2*(o*n-c*t);return this.x=t+u*h+c*m-l*d,this.y=n+u*d+l*h-o*m,this.z=i+u*m+o*d-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i,this.y=o[1]*t+o[5]*n+o[9]*i,this.z=o[2]*t+o[6]*n+o[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,o=e.z,c=t.x,l=t.y,u=t.z;return this.x=i*u-o*l,this.y=o*c-n*u,this.z=n*l-i*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yu.copy(this).projectOnVector(e),this.sub(Yu)}reflect(e){return this.sub(Yu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yu=new z,Um=new Gi;class ln{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,l=o.count;c<l;c++)e.isMesh===!0?e.getVertexPosition(c,bi):bi.fromBufferAttribute(o,c),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gc.copy(n.boundingBox)),gc.applyMatrix4(e.matrixWorld),this.union(gc)}const i=e.children;for(let o=0,c=i.length;o<c;o++)this.expandByObject(i[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yo),_c.subVectors(this.max,Yo),Fs.subVectors(e.a,Yo),Bs.subVectors(e.b,Yo),zs.subVectors(e.c,Yo),Ar.subVectors(Bs,Fs),br.subVectors(zs,Bs),es.subVectors(Fs,zs);let t=[0,-Ar.z,Ar.y,0,-br.z,br.y,0,-es.z,es.y,Ar.z,0,-Ar.x,br.z,0,-br.x,es.z,0,-es.x,-Ar.y,Ar.x,0,-br.y,br.x,0,-es.y,es.x,0];return!Ku(t,Fs,Bs,zs,_c)||(t=[1,0,0,0,1,0,0,0,1],!Ku(t,Fs,Bs,zs,_c))?!1:(xc.crossVectors(Ar,br),t=[xc.x,xc.y,xc.z],Ku(t,Fs,Bs,zs,_c))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nr=[new z,new z,new z,new z,new z,new z,new z,new z],bi=new z,gc=new ln,Fs=new z,Bs=new z,zs=new z,Ar=new z,br=new z,es=new z,Yo=new z,_c=new z,xc=new z,ts=new z;function Ku(s,e,t,n,i){for(let o=0,c=s.length-3;o<=c;o+=3){ts.fromArray(s,o);const l=i.x*Math.abs(ts.x)+i.y*Math.abs(ts.y)+i.z*Math.abs(ts.z),u=e.dot(ts),h=t.dot(ts),d=n.dot(ts);if(Math.max(-Math.max(u,h,d),Math.min(u,h,d))>l)return!1}return!0}const MA=new ln,Ko=new z,Zu=new z;class vi{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):MA.setFromPoints(e).getCenter(n);let i=0;for(let o=0,c=e.length;o<c;o++)i=Math.max(i,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ko.subVectors(e,this.center);const t=Ko.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ko,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ko.copy(e.center).add(Zu)),this.expandByPoint(Ko.copy(e.center).sub(Zu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ir=new z,ju=new z,vc=new z,wr=new z,$u=new z,yc=new z,Ju=new z;class ms{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,t),ir.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ju.copy(e).add(t).multiplyScalar(.5),vc.copy(t).sub(e).normalize(),wr.copy(this.origin).sub(ju);const o=e.distanceTo(t)*.5,c=-this.direction.dot(vc),l=wr.dot(this.direction),u=-wr.dot(vc),h=wr.lengthSq(),d=Math.abs(1-c*c);let m,p,g,y;if(d>0)if(m=c*u-l,p=c*l-u,y=o*d,m>=0)if(p>=-y)if(p<=y){const M=1/d;m*=M,p*=M,g=m*(m+c*p+2*l)+p*(c*m+p+2*u)+h}else p=o,m=Math.max(0,-(c*p+l)),g=-m*m+p*(p+2*u)+h;else p=-o,m=Math.max(0,-(c*p+l)),g=-m*m+p*(p+2*u)+h;else p<=-y?(m=Math.max(0,-(-c*o+l)),p=m>0?-o:Math.min(Math.max(-o,-u),o),g=-m*m+p*(p+2*u)+h):p<=y?(m=0,p=Math.min(Math.max(-o,-u),o),g=p*(p+2*u)+h):(m=Math.max(0,-(c*o+l)),p=m>0?o:Math.min(Math.max(-o,-u),o),g=-m*m+p*(p+2*u)+h);else p=c>0?-o:o,m=Math.max(0,-(c*p+l)),g=-m*m+p*(p+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,m),i&&i.copy(ju).addScaledVector(vc,p),g}intersectSphere(e,t){ir.subVectors(e.center,this.origin);const n=ir.dot(this.direction),i=ir.dot(ir)-n*n,o=e.radius*e.radius;if(i>o)return null;const c=Math.sqrt(o-i),l=n-c,u=n+c;return u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,o,c,l,u;const h=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,p=this.origin;return h>=0?(n=(e.min.x-p.x)*h,i=(e.max.x-p.x)*h):(n=(e.max.x-p.x)*h,i=(e.min.x-p.x)*h),d>=0?(o=(e.min.y-p.y)*d,c=(e.max.y-p.y)*d):(o=(e.max.y-p.y)*d,c=(e.min.y-p.y)*d),n>c||o>i||((o>n||isNaN(n))&&(n=o),(c<i||isNaN(i))&&(i=c),m>=0?(l=(e.min.z-p.z)*m,u=(e.max.z-p.z)*m):(l=(e.max.z-p.z)*m,u=(e.min.z-p.z)*m),n>u||l>i)||((l>n||n!==n)&&(n=l),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,t,n,i,o){$u.subVectors(t,e),yc.subVectors(n,e),Ju.crossVectors($u,yc);let c=this.direction.dot(Ju),l;if(c>0){if(i)return null;l=1}else if(c<0)l=-1,c=-c;else return null;wr.subVectors(this.origin,e);const u=l*this.direction.dot(yc.crossVectors(wr,yc));if(u<0)return null;const h=l*this.direction.dot($u.cross(wr));if(h<0||u+h>c)return null;const d=-l*wr.dot(Ju);return d<0?null:this.at(d/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(e,t,n,i,o,c,l,u,h,d,m,p,g,y,M,x){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,o,c,l,u,h,d,m,p,g,y,M,x)}set(e,t,n,i,o,c,l,u,h,d,m,p,g,y,M,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=o,_[5]=c,_[9]=l,_[13]=u,_[2]=h,_[6]=d,_[10]=m,_[14]=p,_[3]=g,_[7]=y,_[11]=M,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Hs.setFromMatrixColumn(e,0).length(),o=1/Hs.setFromMatrixColumn(e,1).length(),c=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,o=e.z,c=Math.cos(n),l=Math.sin(n),u=Math.cos(i),h=Math.sin(i),d=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const p=c*d,g=c*m,y=l*d,M=l*m;t[0]=u*d,t[4]=-u*m,t[8]=h,t[1]=g+y*h,t[5]=p-M*h,t[9]=-l*u,t[2]=M-p*h,t[6]=y+g*h,t[10]=c*u}else if(e.order==="YXZ"){const p=u*d,g=u*m,y=h*d,M=h*m;t[0]=p+M*l,t[4]=y*l-g,t[8]=c*h,t[1]=c*m,t[5]=c*d,t[9]=-l,t[2]=g*l-y,t[6]=M+p*l,t[10]=c*u}else if(e.order==="ZXY"){const p=u*d,g=u*m,y=h*d,M=h*m;t[0]=p-M*l,t[4]=-c*m,t[8]=y+g*l,t[1]=g+y*l,t[5]=c*d,t[9]=M-p*l,t[2]=-c*h,t[6]=l,t[10]=c*u}else if(e.order==="ZYX"){const p=c*d,g=c*m,y=l*d,M=l*m;t[0]=u*d,t[4]=y*h-g,t[8]=p*h+M,t[1]=u*m,t[5]=M*h+p,t[9]=g*h-y,t[2]=-h,t[6]=l*u,t[10]=c*u}else if(e.order==="YZX"){const p=c*u,g=c*h,y=l*u,M=l*h;t[0]=u*d,t[4]=M-p*m,t[8]=y*m+g,t[1]=m,t[5]=c*d,t[9]=-l*d,t[2]=-h*d,t[6]=g*m+y,t[10]=p-M*m}else if(e.order==="XZY"){const p=c*u,g=c*h,y=l*u,M=l*h;t[0]=u*d,t[4]=-m,t[8]=h*d,t[1]=p*m+M,t[5]=c*d,t[9]=g*m-y,t[2]=y*m-g,t[6]=l*d,t[10]=M*m+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(SA,e,EA)}lookAt(e,t,n){const i=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Rr.crossVectors(n,jn),Rr.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Rr.crossVectors(n,jn)),Rr.normalize(),Mc.crossVectors(jn,Rr),i[0]=Rr.x,i[4]=Mc.x,i[8]=jn.x,i[1]=Rr.y,i[5]=Mc.y,i[9]=jn.y,i[2]=Rr.z,i[6]=Mc.z,i[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,o=this.elements,c=n[0],l=n[4],u=n[8],h=n[12],d=n[1],m=n[5],p=n[9],g=n[13],y=n[2],M=n[6],x=n[10],_=n[14],T=n[3],S=n[7],w=n[11],N=n[15],I=i[0],L=i[4],F=i[8],R=i[12],b=i[1],O=i[5],G=i[9],W=i[13],Z=i[2],se=i[6],J=i[10],ue=i[14],ie=i[3],ye=i[7],Re=i[11],be=i[15];return o[0]=c*I+l*b+u*Z+h*ie,o[4]=c*L+l*O+u*se+h*ye,o[8]=c*F+l*G+u*J+h*Re,o[12]=c*R+l*W+u*ue+h*be,o[1]=d*I+m*b+p*Z+g*ie,o[5]=d*L+m*O+p*se+g*ye,o[9]=d*F+m*G+p*J+g*Re,o[13]=d*R+m*W+p*ue+g*be,o[2]=y*I+M*b+x*Z+_*ie,o[6]=y*L+M*O+x*se+_*ye,o[10]=y*F+M*G+x*J+_*Re,o[14]=y*R+M*W+x*ue+_*be,o[3]=T*I+S*b+w*Z+N*ie,o[7]=T*L+S*O+w*se+N*ye,o[11]=T*F+S*G+w*J+N*Re,o[15]=T*R+S*W+w*ue+N*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],o=e[12],c=e[1],l=e[5],u=e[9],h=e[13],d=e[2],m=e[6],p=e[10],g=e[14],y=e[3],M=e[7],x=e[11],_=e[15];return y*(+o*u*m-i*h*m-o*l*p+n*h*p+i*l*g-n*u*g)+M*(+t*u*g-t*h*p+o*c*p-i*c*g+i*h*d-o*u*d)+x*(+t*h*m-t*l*g-o*c*m+n*c*g+o*l*d-n*h*d)+_*(-i*l*d-t*u*m+t*l*p+i*c*m-n*c*p+n*u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],c=e[4],l=e[5],u=e[6],h=e[7],d=e[8],m=e[9],p=e[10],g=e[11],y=e[12],M=e[13],x=e[14],_=e[15],T=m*x*h-M*p*h+M*u*g-l*x*g-m*u*_+l*p*_,S=y*p*h-d*x*h-y*u*g+c*x*g+d*u*_-c*p*_,w=d*M*h-y*m*h+y*l*g-c*M*g-d*l*_+c*m*_,N=y*m*u-d*M*u-y*l*p+c*M*p+d*l*x-c*m*x,I=t*T+n*S+i*w+o*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/I;return e[0]=T*L,e[1]=(M*p*o-m*x*o-M*i*g+n*x*g+m*i*_-n*p*_)*L,e[2]=(l*x*o-M*u*o+M*i*h-n*x*h-l*i*_+n*u*_)*L,e[3]=(m*u*o-l*p*o-m*i*h+n*p*h+l*i*g-n*u*g)*L,e[4]=S*L,e[5]=(d*x*o-y*p*o+y*i*g-t*x*g-d*i*_+t*p*_)*L,e[6]=(y*u*o-c*x*o-y*i*h+t*x*h+c*i*_-t*u*_)*L,e[7]=(c*p*o-d*u*o+d*i*h-t*p*h-c*i*g+t*u*g)*L,e[8]=w*L,e[9]=(y*m*o-d*M*o-y*n*g+t*M*g+d*n*_-t*m*_)*L,e[10]=(c*M*o-y*l*o+y*n*h-t*M*h-c*n*_+t*l*_)*L,e[11]=(d*l*o-c*m*o-d*n*h+t*m*h+c*n*g-t*l*g)*L,e[12]=N*L,e[13]=(d*M*i-y*m*i+y*n*p-t*M*p-d*n*x+t*m*x)*L,e[14]=(y*l*i-c*M*i-y*n*u+t*M*u+c*n*x-t*l*x)*L,e[15]=(c*m*i-d*l*i+d*n*u-t*m*u-c*n*p+t*l*p)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,o=e.z;return t[0]*=n,t[4]*=i,t[8]*=o,t[1]*=n,t[5]*=i,t[9]*=o,t[2]*=n,t[6]*=i,t[10]*=o,t[3]*=n,t[7]*=i,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),o=1-n,c=e.x,l=e.y,u=e.z,h=o*c,d=o*l;return this.set(h*c+n,h*l-i*u,h*u+i*l,0,h*l+i*u,d*l+n,d*u-i*c,0,h*u-i*l,d*u+i*c,o*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,o,c){return this.set(1,n,o,0,e,1,c,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,o=t._x,c=t._y,l=t._z,u=t._w,h=o+o,d=c+c,m=l+l,p=o*h,g=o*d,y=o*m,M=c*d,x=c*m,_=l*m,T=u*h,S=u*d,w=u*m,N=n.x,I=n.y,L=n.z;return i[0]=(1-(M+_))*N,i[1]=(g+w)*N,i[2]=(y-S)*N,i[3]=0,i[4]=(g-w)*I,i[5]=(1-(p+_))*I,i[6]=(x+T)*I,i[7]=0,i[8]=(y+S)*L,i[9]=(x-T)*L,i[10]=(1-(p+M))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let o=Hs.set(i[0],i[1],i[2]).length();const c=Hs.set(i[4],i[5],i[6]).length(),l=Hs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),e.x=i[12],e.y=i[13],e.z=i[14],wi.copy(this);const h=1/o,d=1/c,m=1/l;return wi.elements[0]*=h,wi.elements[1]*=h,wi.elements[2]*=h,wi.elements[4]*=d,wi.elements[5]*=d,wi.elements[6]*=d,wi.elements[8]*=m,wi.elements[9]*=m,wi.elements[10]*=m,t.setFromRotationMatrix(wi),n.x=o,n.y=c,n.z=l,this}makePerspective(e,t,n,i,o,c,l=fr){const u=this.elements,h=2*o/(t-e),d=2*o/(n-i),m=(t+e)/(t-e),p=(n+i)/(n-i);let g,y;if(l===fr)g=-(c+o)/(c-o),y=-2*c*o/(c-o);else if(l===yl)g=-c/(c-o),y=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=d,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,o,c,l=fr){const u=this.elements,h=1/(t-e),d=1/(n-i),m=1/(c-o),p=(t+e)*h,g=(n+i)*d;let y,M;if(l===fr)y=(c+o)*m,M=-2*m;else if(l===yl)y=o*m,M=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=2*h,u[4]=0,u[8]=0,u[12]=-p,u[1]=0,u[5]=2*d,u[9]=0,u[13]=-g,u[2]=0,u[6]=0,u[10]=M,u[14]=-y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hs=new z,wi=new qe,SA=new z(0,0,0),EA=new z(1,1,1),Rr=new z,Mc=new z,jn=new z,Nm=new qe,Om=new Gi;class Ni{constructor(e=0,t=0,n=0,i=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,o=i[0],c=i[4],l=i[8],u=i[1],h=i[5],d=i[9],m=i[2],p=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(fn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-fn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(fn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-fn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Om.setFromEuler(this),this.setFromQuaternion(Om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class qf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let TA=0;const Fm=new z,Vs=new Gi,rr=new qe,Sc=new z,Zo=new z,AA=new z,bA=new Gi,Bm=new z(1,0,0),zm=new z(0,1,0),Hm=new z(0,0,1),Vm={type:"added"},wA={type:"removed"},ks={type:"childadded",child:null},Qu={type:"childremoved",child:null};class qt extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TA++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new z,t=new Ni,n=new Gi,i=new z(1,1,1);function o(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qe},normalMatrix:{value:new ht}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(Bm,e)}rotateY(e){return this.rotateOnAxis(zm,e)}rotateZ(e){return this.rotateOnAxis(Hm,e)}translateOnAxis(e,t){return Fm.copy(e).applyQuaternion(this.quaternion),this.position.add(Fm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bm,e)}translateY(e){return this.translateOnAxis(zm,e)}translateZ(e){return this.translateOnAxis(Hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sc.copy(e):Sc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(Zo,Sc,this.up):rr.lookAt(Sc,Zo,this.up),this.quaternion.setFromRotationMatrix(rr),i&&(rr.extractRotation(i.matrixWorld),Vs.setFromRotationMatrix(rr),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vm),ks.child=e,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wA),Qu.child=e,this.dispatchEvent(Qu),Qu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vm),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let o=0,c=i.length;o<c;o++)i[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,AA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,bA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let o=0,c=i.length;o<c;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let h=0,d=u.length;h<d;h++){const m=u[h];o(e.shapes,m)}else o(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,h=this.material.length;u<h;u++)l.push(o(e.materials,this.material[u]));i.material=l}else i.material=o(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];i.animations.push(o(e.animations,u))}}if(t){const l=c(e.geometries),u=c(e.materials),h=c(e.textures),d=c(e.images),m=c(e.shapes),p=c(e.skeletons),g=c(e.animations),y=c(e.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),y.length>0&&(n.nodes=y)}return n.object=i,n;function c(l){const u=[];for(const h in l){const d=l[h];delete d.metadata,u.push(d)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}qt.DEFAULT_UP=new z(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new z,sr=new z,eh=new z,or=new z,Gs=new z,Ws=new z,km=new z,th=new z,nh=new z,ih=new z;class In{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ri.subVectors(e,t),i.cross(Ri);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(e,t,n,i,o){Ri.subVectors(i,t),sr.subVectors(n,t),eh.subVectors(e,t);const c=Ri.dot(Ri),l=Ri.dot(sr),u=Ri.dot(eh),h=sr.dot(sr),d=sr.dot(eh),m=c*h-l*l;if(m===0)return o.set(0,0,0),null;const p=1/m,g=(h*u-l*d)*p,y=(c*d-l*u)*p;return o.set(1-g-y,y,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(e,t,n,i,o,c,l,u){return this.getBarycoord(e,t,n,i,or)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(o,or.x),u.addScaledVector(c,or.y),u.addScaledVector(l,or.z),u)}static isFrontFacing(e,t,n,i){return Ri.subVectors(n,t),sr.subVectors(e,t),Ri.cross(sr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),Ri.cross(sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,o){return In.getInterpolation(e,this.a,this.b,this.c,t,n,i,o)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,o=this.c;let c,l;Gs.subVectors(i,n),Ws.subVectors(o,n),th.subVectors(e,n);const u=Gs.dot(th),h=Ws.dot(th);if(u<=0&&h<=0)return t.copy(n);nh.subVectors(e,i);const d=Gs.dot(nh),m=Ws.dot(nh);if(d>=0&&m<=d)return t.copy(i);const p=u*m-d*h;if(p<=0&&u>=0&&d<=0)return c=u/(u-d),t.copy(n).addScaledVector(Gs,c);ih.subVectors(e,o);const g=Gs.dot(ih),y=Ws.dot(ih);if(y>=0&&g<=y)return t.copy(o);const M=g*h-u*y;if(M<=0&&h>=0&&y<=0)return l=h/(h-y),t.copy(n).addScaledVector(Ws,l);const x=d*y-g*m;if(x<=0&&m-d>=0&&g-y>=0)return km.subVectors(o,i),l=(m-d)/(m-d+(g-y)),t.copy(i).addScaledVector(km,l);const _=1/(x+M+p);return c=M*_,l=p*_,t.copy(n).addScaledVector(Gs,c).addScaledVector(Ws,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const P_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function rh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=bt.workingColorSpace){if(e=Wf(e,1),t=fn(t,0,1),n=fn(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,c=2*n-o;this.r=rh(c,o,e+1/3),this.g=rh(c,o,e),this.b=rh(c,o,e-1/3)}return bt.toWorkingColorSpace(this,i),this}setStyle(e,t=Pn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=i[1],l=i[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=i[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pn){const n=P_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}copyLinearToSRGB(e){return this.r=Xu(e.r),this.g=Xu(e.g),this.b=Xu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return bt.fromWorkingColorSpace(En.copy(this),e),Math.round(fn(En.r*255,0,255))*65536+Math.round(fn(En.g*255,0,255))*256+Math.round(fn(En.b*255,0,255))}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(En.copy(this),t);const n=En.r,i=En.g,o=En.b,c=Math.max(n,i,o),l=Math.min(n,i,o);let u,h;const d=(l+c)/2;if(l===c)u=0,h=0;else{const m=c-l;switch(h=d<=.5?m/(c+l):m/(2-c-l),c){case n:u=(i-o)/m+(i<o?6:0);break;case i:u=(o-n)/m+2;break;case o:u=(n-i)/m+4;break}u/=6}return e.h=u,e.s=h,e.l=d,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=Pn){bt.fromWorkingColorSpace(En.copy(this),e);const t=En.r,n=En.g,i=En.b;return e!==Pn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(Ec);const n=da(Cr.h,Ec.h,t),i=da(Cr.s,Ec.s,t),o=da(Cr.l,Ec.l,t);return this.setHSL(n,i,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*i,this.g=o[1]*t+o[4]*n+o[7]*i,this.b=o[2]*t+o[5]*n+o[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new Qe;Qe.NAMES=P_;let RA=0;class Di extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RA++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=ho,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=Bh,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=ml,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ho&&(n.blending=this.blending),this.side!==Ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fh&&(n.blendSrc=this.blendSrc),this.blendDst!==Bh&&(n.blendDst=this.blendDst),this.blendEquation!==cs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ml&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}if(t){const o=i(e.textures),c=i(e.images);o.length>0&&(n.textures=o),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class us extends Di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Uf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new z,Tc=new Be;class mn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Xf("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tc.fromBufferAttribute(this,t),Tc.applyMatrix3(e),this.setXY(t,Tc.x,Tc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,o){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array),o=Pt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mf&&(e.usage=this.usage),e}}class L_ extends mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class I_ extends mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xi extends mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let CA=0;const li=new qe,sh=new qt,Xs=new z,$n=new ln,jo=new ln,hn=new z;class ei extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CA++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(w_(e)?I_:L_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ht().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,n){return li.makeTranslation(e,t,n),this.applyMatrix4(li),this}scale(e,t,n){return li.makeScale(e,t,n),this.applyMatrix4(li),this}lookAt(e){return sh.lookAt(e),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const o=e[n];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new xi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const o=t[n];$n.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const l=t[o];jo.setFromBufferAttribute(l),this.morphTargetsRelative?(hn.addVectors($n.min,jo.min),$n.expandByPoint(hn),hn.addVectors($n.max,jo.max),$n.expandByPoint(hn)):($n.expandByPoint(jo.min),$n.expandByPoint(jo.max))}$n.getCenter(n);let i=0;for(let o=0,c=e.count;o<c;o++)hn.fromBufferAttribute(e,o),i=Math.max(i,n.distanceToSquared(hn));if(t)for(let o=0,c=t.length;o<c;o++){const l=t[o],u=this.morphTargetsRelative;for(let h=0,d=l.count;h<d;h++)hn.fromBufferAttribute(l,h),u&&(Xs.fromBufferAttribute(e,h),hn.add(Xs)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),l=[],u=[];for(let F=0;F<n.count;F++)l[F]=new z,u[F]=new z;const h=new z,d=new z,m=new z,p=new Be,g=new Be,y=new Be,M=new z,x=new z;function _(F,R,b){h.fromBufferAttribute(n,F),d.fromBufferAttribute(n,R),m.fromBufferAttribute(n,b),p.fromBufferAttribute(o,F),g.fromBufferAttribute(o,R),y.fromBufferAttribute(o,b),d.sub(h),m.sub(h),g.sub(p),y.sub(p);const O=1/(g.x*y.y-y.x*g.y);isFinite(O)&&(M.copy(d).multiplyScalar(y.y).addScaledVector(m,-g.y).multiplyScalar(O),x.copy(m).multiplyScalar(g.x).addScaledVector(d,-y.x).multiplyScalar(O),l[F].add(M),l[R].add(M),l[b].add(M),u[F].add(x),u[R].add(x),u[b].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let F=0,R=T.length;F<R;++F){const b=T[F],O=b.start,G=b.count;for(let W=O,Z=O+G;W<Z;W+=3)_(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const S=new z,w=new z,N=new z,I=new z;function L(F){N.fromBufferAttribute(i,F),I.copy(N);const R=l[F];S.copy(R),S.sub(N.multiplyScalar(N.dot(R))).normalize(),w.crossVectors(I,R);const O=w.dot(u[F])<0?-1:1;c.setXYZW(F,S.x,S.y,S.z,O)}for(let F=0,R=T.length;F<R;++F){const b=T[F],O=b.start,G=b.count;for(let W=O,Z=O+G;W<Z;W+=3)L(e.getX(W+0)),L(e.getX(W+1)),L(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);const i=new z,o=new z,c=new z,l=new z,u=new z,h=new z,d=new z,m=new z;if(e)for(let p=0,g=e.count;p<g;p+=3){const y=e.getX(p+0),M=e.getX(p+1),x=e.getX(p+2);i.fromBufferAttribute(t,y),o.fromBufferAttribute(t,M),c.fromBufferAttribute(t,x),d.subVectors(c,o),m.subVectors(i,o),d.cross(m),l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,x),l.add(d),u.add(d),h.add(d),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(M,u.x,u.y,u.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let p=0,g=t.count;p<g;p+=3)i.fromBufferAttribute(t,p+0),o.fromBufferAttribute(t,p+1),c.fromBufferAttribute(t,p+2),d.subVectors(c,o),m.subVectors(i,o),d.cross(m),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(l,u){const h=l.array,d=l.itemSize,m=l.normalized,p=new h.constructor(u.length*d);let g=0,y=0;for(let M=0,x=u.length;M<x;M++){l.isInterleavedBufferAttribute?g=u[M]*l.data.stride+l.offset:g=u[M]*d;for(let _=0;_<d;_++)p[y++]=h[g++]}return new mn(p,d,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ei,n=this.index.array,i=this.attributes;for(const l in i){const u=i[l],h=e(u,n);t.setAttribute(l,h)}const o=this.morphAttributes;for(const l in o){const u=[],h=o[l];for(let d=0,m=h.length;d<m;d++){const p=h[d],g=e(p,n);u.push(g)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let l=0,u=c.length;l<u;l++){const h=c[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const i={};let o=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],d=[];for(let m=0,p=h.length;m<p;m++){const g=h[m];d.push(g.toJSON(e.data))}d.length>0&&(i[u]=d,o=!0)}o&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const d=i[h];this.setAttribute(h,d.clone(t))}const o=e.morphAttributes;for(const h in o){const d=[],m=o[h];for(let p=0,g=m.length;p<g;p++)d.push(m[p].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,d=c.length;h<d;h++){const m=c[h];this.addGroup(m.start,m.count,m.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gm=new qe,ns=new ms,Ac=new vi,Wm=new z,qs=new z,Ys=new z,Ks=new z,oh=new z,bc=new z,wc=new Be,Rc=new Be,Cc=new Be,Xm=new z,qm=new z,Ym=new z,Pc=new z,Lc=new z;class dn extends qt{constructor(e=new ei,t=new us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=i.length;o<c;o++){const l=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(o&&l){bc.set(0,0,0);for(let u=0,h=o.length;u<h;u++){const d=l[u],m=o[u];d!==0&&(oh.fromBufferAttribute(m,e),c?bc.addScaledVector(oh,d):bc.addScaledVector(oh.sub(t),d))}t.add(bc)}return t}raycast(e,t){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ac.copy(n.boundingSphere),Ac.applyMatrix4(o),ns.copy(e.ray).recast(e.near),!(Ac.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Ac,Wm)===null||ns.origin.distanceToSquared(Wm)>(e.far-e.near)**2))&&(Gm.copy(o).invert(),ns.copy(e.ray).applyMatrix4(Gm),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,n){let i;const o=this.geometry,c=this.material,l=o.index,u=o.attributes.position,h=o.attributes.uv,d=o.attributes.uv1,m=o.attributes.normal,p=o.groups,g=o.drawRange;if(l!==null)if(Array.isArray(c))for(let y=0,M=p.length;y<M;y++){const x=p[y],_=c[x.materialIndex],T=Math.max(x.start,g.start),S=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let w=T,N=S;w<N;w+=3){const I=l.getX(w),L=l.getX(w+1),F=l.getX(w+2);i=Ic(this,_,e,n,h,d,m,I,L,F),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const y=Math.max(0,g.start),M=Math.min(l.count,g.start+g.count);for(let x=y,_=M;x<_;x+=3){const T=l.getX(x),S=l.getX(x+1),w=l.getX(x+2);i=Ic(this,c,e,n,h,d,m,T,S,w),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(c))for(let y=0,M=p.length;y<M;y++){const x=p[y],_=c[x.materialIndex],T=Math.max(x.start,g.start),S=Math.min(u.count,Math.min(x.start+x.count,g.start+g.count));for(let w=T,N=S;w<N;w+=3){const I=w,L=w+1,F=w+2;i=Ic(this,_,e,n,h,d,m,I,L,F),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const y=Math.max(0,g.start),M=Math.min(u.count,g.start+g.count);for(let x=y,_=M;x<_;x+=3){const T=x,S=x+1,w=x+2;i=Ic(this,c,e,n,h,d,m,T,S,w),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function PA(s,e,t,n,i,o,c,l){let u;if(e.side===Un?u=n.intersectTriangle(c,o,i,!0,l):u=n.intersectTriangle(i,o,c,e.side===Ui,l),u===null)return null;Lc.copy(l),Lc.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Lc);return h<t.near||h>t.far?null:{distance:h,point:Lc.clone(),object:s}}function Ic(s,e,t,n,i,o,c,l,u,h){s.getVertexPosition(l,qs),s.getVertexPosition(u,Ys),s.getVertexPosition(h,Ks);const d=PA(s,e,t,n,qs,Ys,Ks,Pc);if(d){i&&(wc.fromBufferAttribute(i,l),Rc.fromBufferAttribute(i,u),Cc.fromBufferAttribute(i,h),d.uv=In.getInterpolation(Pc,qs,Ys,Ks,wc,Rc,Cc,new Be)),o&&(wc.fromBufferAttribute(o,l),Rc.fromBufferAttribute(o,u),Cc.fromBufferAttribute(o,h),d.uv1=In.getInterpolation(Pc,qs,Ys,Ks,wc,Rc,Cc,new Be)),c&&(Xm.fromBufferAttribute(c,l),qm.fromBufferAttribute(c,u),Ym.fromBufferAttribute(c,h),d.normal=In.getInterpolation(Pc,qs,Ys,Ks,Xm,qm,Ym,new z),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const m={a:l,b:u,c:h,normal:new z,materialIndex:0};In.getNormal(qs,Ys,Ks,m.normal),d.face=m}return d}class Sa extends ei{constructor(e=1,t=1,n=1,i=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:o,depthSegments:c};const l=this;i=Math.floor(i),o=Math.floor(o),c=Math.floor(c);const u=[],h=[],d=[],m=[];let p=0,g=0;y("z","y","x",-1,-1,n,t,e,c,o,0),y("z","y","x",1,-1,n,t,-e,c,o,1),y("x","z","y",1,1,e,n,t,i,c,2),y("x","z","y",1,-1,e,n,-t,i,c,3),y("x","y","z",1,-1,e,t,n,i,o,4),y("x","y","z",-1,-1,e,t,-n,i,o,5),this.setIndex(u),this.setAttribute("position",new xi(h,3)),this.setAttribute("normal",new xi(d,3)),this.setAttribute("uv",new xi(m,2));function y(M,x,_,T,S,w,N,I,L,F,R){const b=w/L,O=N/F,G=w/2,W=N/2,Z=I/2,se=L+1,J=F+1;let ue=0,ie=0;const ye=new z;for(let Re=0;Re<J;Re++){const be=Re*O-W;for(let dt=0;dt<se;dt++){const yt=dt*b-G;ye[M]=yt*T,ye[x]=be*S,ye[_]=Z,h.push(ye.x,ye.y,ye.z),ye[M]=0,ye[x]=0,ye[_]=I>0?1:-1,d.push(ye.x,ye.y,ye.z),m.push(dt/L),m.push(1-Re/F),ue+=1}}for(let Re=0;Re<F;Re++)for(let be=0;be<L;be++){const dt=p+be+se*Re,yt=p+be+se*(Re+1),ae=p+(be+1)+se*(Re+1),ge=p+(be+1)+se*Re;u.push(dt,yt,ge),u.push(yt,ae,ge),ie+=6}l.addGroup(g,ie,R),g+=ie,p+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function So(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Cn(s){const e={};for(let t=0;t<s.length;t++){const n=So(s[t]);for(const i in n)e[i]=n[i]}return e}function LA(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function D_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const IA={clone:So,merge:Cn};var DA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kr extends Di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DA,this.fragmentShader=UA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=So(e.uniforms),this.uniformsGroups=LA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const c=this.uniforms[i].value;c&&c.isTexture?t.uniforms[i]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[i]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[i]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[i]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[i]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[i]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[i]={type:"m4",value:c.toArray()}:t.uniforms[i]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class U_ extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=fr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pr=new z,Km=new Be,Zm=new Be;class Ln extends U_{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,t){return this.getViewBounds(e,Km,Zm),t.subVectors(Zm,Km)}setViewOffset(e,t,n,i,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,o=-.5*i;const c=this.view;if(this.view!==null&&this.view.enabled){const u=c.fullWidth,h=c.fullHeight;o+=c.offsetX*i/u,t-=c.offsetY*n/h,i*=c.width/u,n*=c.height/h}const l=this.filmOffset;l!==0&&(o+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zs=-90,js=1;class NA extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ln(Zs,js,e,t);i.layers=this.layers,this.add(i);const o=new Ln(Zs,js,e,t);o.layers=this.layers,this.add(o);const c=new Ln(Zs,js,e,t);c.layers=this.layers,this.add(c);const l=new Ln(Zs,js,e,t);l.layers=this.layers,this.add(l);const u=new Ln(Zs,js,e,t);u.layers=this.layers,this.add(u);const h=new Ln(Zs,js,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,o,c,l,u]=t;for(const h of t)this.remove(h);if(e===fr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===yl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,l,u,h,d]=this.children,m=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,o),e.setRenderTarget(n,1,i),e.render(t,c),e.setRenderTarget(n,2,i),e.render(t,l),e.setRenderTarget(n,3,i),e.render(t,u),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(m,p,g),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class N_ extends pn{constructor(e,t,n,i,o,c,l,u,h,d){e=e!==void 0?e:[],t=t!==void 0?t:go,super(e,t,n,i,o,c,l,u,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class OA extends ds{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new N_(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Sa(5,5,5),o=new kr({name:"CubemapFromEquirect",uniforms:So(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:Hr});o.uniforms.tEquirect.value=t;const c=new dn(i,o),l=t.minFilter;return t.minFilter===hr&&(t.minFilter=Jn),new NA(1,10,this).update(e,c),t.minFilter=l,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,i){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,i);e.setRenderTarget(o)}}const ah=new z,FA=new z,BA=new ht;class Vi{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ah.subVectors(n,t).cross(FA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ah),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||BA.getNormalMatrix(e),i=this.coplanarPoint(ah).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new vi,Dc=new z;class Yf{constructor(e=new Vi,t=new Vi,n=new Vi,i=new Vi,o=new Vi,c=new Vi){this.planes=[e,t,n,i,o,c]}set(e,t,n,i,o,c){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(o),l[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fr){const n=this.planes,i=e.elements,o=i[0],c=i[1],l=i[2],u=i[3],h=i[4],d=i[5],m=i[6],p=i[7],g=i[8],y=i[9],M=i[10],x=i[11],_=i[12],T=i[13],S=i[14],w=i[15];if(n[0].setComponents(u-o,p-h,x-g,w-_).normalize(),n[1].setComponents(u+o,p+h,x+g,w+_).normalize(),n[2].setComponents(u+c,p+d,x+y,w+T).normalize(),n[3].setComponents(u-c,p-d,x-y,w-T).normalize(),n[4].setComponents(u-l,p-m,x-M,w-S).normalize(),t===fr)n[5].setComponents(u+l,p+m,x+M,w+S).normalize();else if(t===yl)n[5].setComponents(l,m,M,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Dc.x=i.normal.x>0?e.max.x:e.min.x,Dc.y=i.normal.y>0?e.max.y:e.min.y,Dc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function O_(){let s=null,e=!1,t=null,n=null;function i(o,c){t(o,c),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){s=o}}}function zA(s){const e=new WeakMap;function t(l,u){const h=l.array,d=l.usage,m=h.byteLength,p=s.createBuffer();s.bindBuffer(u,p),s.bufferData(u,h,d),l.onUploadCallback();let g;if(h instanceof Float32Array)g=s.FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?g=s.HALF_FLOAT:g=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=s.SHORT;else if(h instanceof Uint32Array)g=s.UNSIGNED_INT;else if(h instanceof Int32Array)g=s.INT;else if(h instanceof Int8Array)g=s.BYTE;else if(h instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:m}}function n(l,u,h){const d=u.array,m=u._updateRange,p=u.updateRanges;if(s.bindBuffer(h,l),m.count===-1&&p.length===0&&s.bufferSubData(h,0,d),p.length!==0){for(let g=0,y=p.length;g<y;g++){const M=p[g];s.bufferSubData(h,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}u.clearUpdateRanges()}m.count!==-1&&(s.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count),m.count=-1),u.onUploadCallback()}function i(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=e.get(l);u&&(s.deleteBuffer(u.buffer),e.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=e.get(l);(!d||d.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=e.get(l);if(h===void 0)e.set(l,t(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,u),h.version=l.version}}return{get:i,remove:o,update:c}}class Rl extends ei{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const o=e/2,c=t/2,l=Math.floor(n),u=Math.floor(i),h=l+1,d=u+1,m=e/l,p=t/u,g=[],y=[],M=[],x=[];for(let _=0;_<d;_++){const T=_*p-c;for(let S=0;S<h;S++){const w=S*m-o;y.push(w,-T,0),M.push(0,0,1),x.push(S/l),x.push(1-_/u)}}for(let _=0;_<u;_++)for(let T=0;T<l;T++){const S=T+h*_,w=T+h*(_+1),N=T+1+h*(_+1),I=T+1+h*_;g.push(S,w,I),g.push(w,N,I)}this.setIndex(g),this.setAttribute("position",new xi(y,3)),this.setAttribute("normal",new xi(M,3)),this.setAttribute("uv",new xi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.width,e.height,e.widthSegments,e.heightSegments)}}var HA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,YA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ZA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$A=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,QA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ob=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ab=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ub=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,db=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gb="gl_FragColor = linearToOutputTexel( gl_FragColor );",_b=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,xb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Eb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ab=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ib=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Db=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ub=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ob=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$b=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ew=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ow=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_w=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ew=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Aw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ww=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Iw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Uw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ww=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Yw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$w=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,e1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,r1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,o1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,a1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,u1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,p1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:HA,alphahash_pars_fragment:VA,alphamap_fragment:kA,alphamap_pars_fragment:GA,alphatest_fragment:WA,alphatest_pars_fragment:XA,aomap_fragment:qA,aomap_pars_fragment:YA,batching_pars_vertex:KA,batching_vertex:ZA,begin_vertex:jA,beginnormal_vertex:$A,bsdfs:JA,iridescence_fragment:QA,bumpmap_pars_fragment:eb,clipping_planes_fragment:tb,clipping_planes_pars_fragment:nb,clipping_planes_pars_vertex:ib,clipping_planes_vertex:rb,color_fragment:sb,color_pars_fragment:ob,color_pars_vertex:ab,color_vertex:cb,common:lb,cube_uv_reflection_fragment:ub,defaultnormal_vertex:hb,displacementmap_pars_vertex:fb,displacementmap_vertex:db,emissivemap_fragment:pb,emissivemap_pars_fragment:mb,colorspace_fragment:gb,colorspace_pars_fragment:_b,envmap_fragment:xb,envmap_common_pars_fragment:vb,envmap_pars_fragment:yb,envmap_pars_vertex:Mb,envmap_physical_pars_fragment:Ib,envmap_vertex:Sb,fog_vertex:Eb,fog_pars_vertex:Tb,fog_fragment:Ab,fog_pars_fragment:bb,gradientmap_pars_fragment:wb,lightmap_pars_fragment:Rb,lights_lambert_fragment:Cb,lights_lambert_pars_fragment:Pb,lights_pars_begin:Lb,lights_toon_fragment:Db,lights_toon_pars_fragment:Ub,lights_phong_fragment:Nb,lights_phong_pars_fragment:Ob,lights_physical_fragment:Fb,lights_physical_pars_fragment:Bb,lights_fragment_begin:zb,lights_fragment_maps:Hb,lights_fragment_end:Vb,logdepthbuf_fragment:kb,logdepthbuf_pars_fragment:Gb,logdepthbuf_pars_vertex:Wb,logdepthbuf_vertex:Xb,map_fragment:qb,map_pars_fragment:Yb,map_particle_fragment:Kb,map_particle_pars_fragment:Zb,metalnessmap_fragment:jb,metalnessmap_pars_fragment:$b,morphinstance_vertex:Jb,morphcolor_vertex:Qb,morphnormal_vertex:ew,morphtarget_pars_vertex:tw,morphtarget_vertex:nw,normal_fragment_begin:iw,normal_fragment_maps:rw,normal_pars_fragment:sw,normal_pars_vertex:ow,normal_vertex:aw,normalmap_pars_fragment:cw,clearcoat_normal_fragment_begin:lw,clearcoat_normal_fragment_maps:uw,clearcoat_pars_fragment:hw,iridescence_pars_fragment:fw,opaque_fragment:dw,packing:pw,premultiplied_alpha_fragment:mw,project_vertex:gw,dithering_fragment:_w,dithering_pars_fragment:xw,roughnessmap_fragment:vw,roughnessmap_pars_fragment:yw,shadowmap_pars_fragment:Mw,shadowmap_pars_vertex:Sw,shadowmap_vertex:Ew,shadowmask_pars_fragment:Tw,skinbase_vertex:Aw,skinning_pars_vertex:bw,skinning_vertex:ww,skinnormal_vertex:Rw,specularmap_fragment:Cw,specularmap_pars_fragment:Pw,tonemapping_fragment:Lw,tonemapping_pars_fragment:Iw,transmission_fragment:Dw,transmission_pars_fragment:Uw,uv_pars_fragment:Nw,uv_pars_vertex:Ow,uv_vertex:Fw,worldpos_vertex:Bw,background_vert:zw,background_frag:Hw,backgroundCube_vert:Vw,backgroundCube_frag:kw,cube_vert:Gw,cube_frag:Ww,depth_vert:Xw,depth_frag:qw,distanceRGBA_vert:Yw,distanceRGBA_frag:Kw,equirect_vert:Zw,equirect_frag:jw,linedashed_vert:$w,linedashed_frag:Jw,meshbasic_vert:Qw,meshbasic_frag:e1,meshlambert_vert:t1,meshlambert_frag:n1,meshmatcap_vert:i1,meshmatcap_frag:r1,meshnormal_vert:s1,meshnormal_frag:o1,meshphong_vert:a1,meshphong_frag:c1,meshphysical_vert:l1,meshphysical_frag:u1,meshtoon_vert:h1,meshtoon_frag:f1,points_vert:d1,points_frag:p1,shadow_vert:m1,shadow_frag:g1,sprite_vert:_1,sprite_frag:x1},Ee={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},ki={basic:{uniforms:Cn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Cn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Cn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Cn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Cn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Cn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Cn([Ee.points,Ee.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Cn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Cn([Ee.common,Ee.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Cn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Cn([Ee.sprite,Ee.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Cn([Ee.common,Ee.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Cn([Ee.lights,Ee.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};ki.physical={uniforms:Cn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Uc={r:0,b:0,g:0},rs=new Ni,v1=new qe;function y1(s,e,t,n,i,o,c){const l=new Qe(0);let u=o===!0?0:1,h,d,m=null,p=0,g=null;function y(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function M(T){let S=!1;const w=y(T);w===null?_(l,u):w&&w.isColor&&(_(w,1),S=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(T,S){const w=y(S);w&&(w.isCubeTexture||w.mapping===bl)?(d===void 0&&(d=new dn(new Sa(1,1,1),new kr({name:"BackgroundCubeMaterial",uniforms:So(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(N,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),rs.copy(S.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(v1.makeRotationFromEuler(rs)),d.material.toneMapped=bt.getTransfer(w.colorSpace)!==Ht,(m!==w||p!==w.version||g!==s.toneMapping)&&(d.material.needsUpdate=!0,m=w,p=w.version,g=s.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new dn(new Rl(2,2),new kr({name:"BackgroundMaterial",uniforms:So(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.toneMapped=bt.getTransfer(w.colorSpace)!==Ht,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(m!==w||p!==w.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,m=w,p=w.version,g=s.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null))}function _(T,S){T.getRGB(Uc,D_(s)),n.buffers.color.setClear(Uc.r,Uc.g,Uc.b,S,c)}return{getClearColor:function(){return l},setClearColor:function(T,S=1){l.set(T),u=S,_(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(T){u=T,_(l,u)},render:M,addToRenderList:x}}function M1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=p(null);let o=i,c=!1;function l(b,O,G,W,Z){let se=!1;const J=m(W,G,O);o!==J&&(o=J,h(o.object)),se=g(b,W,G,Z),se&&y(b,W,G,Z),Z!==null&&e.update(Z,s.ELEMENT_ARRAY_BUFFER),(se||c)&&(c=!1,w(b,O,G,W),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function u(){return s.createVertexArray()}function h(b){return s.bindVertexArray(b)}function d(b){return s.deleteVertexArray(b)}function m(b,O,G){const W=G.wireframe===!0;let Z=n[b.id];Z===void 0&&(Z={},n[b.id]=Z);let se=Z[O.id];se===void 0&&(se={},Z[O.id]=se);let J=se[W];return J===void 0&&(J=p(u()),se[W]=J),J}function p(b){const O=[],G=[],W=[];for(let Z=0;Z<t;Z++)O[Z]=0,G[Z]=0,W[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:W,object:b,attributes:{},index:null}}function g(b,O,G,W){const Z=o.attributes,se=O.attributes;let J=0;const ue=G.getAttributes();for(const ie in ue)if(ue[ie].location>=0){const Re=Z[ie];let be=se[ie];if(be===void 0&&(ie==="instanceMatrix"&&b.instanceMatrix&&(be=b.instanceMatrix),ie==="instanceColor"&&b.instanceColor&&(be=b.instanceColor)),Re===void 0||Re.attribute!==be||be&&Re.data!==be.data)return!0;J++}return o.attributesNum!==J||o.index!==W}function y(b,O,G,W){const Z={},se=O.attributes;let J=0;const ue=G.getAttributes();for(const ie in ue)if(ue[ie].location>=0){let Re=se[ie];Re===void 0&&(ie==="instanceMatrix"&&b.instanceMatrix&&(Re=b.instanceMatrix),ie==="instanceColor"&&b.instanceColor&&(Re=b.instanceColor));const be={};be.attribute=Re,Re&&Re.data&&(be.data=Re.data),Z[ie]=be,J++}o.attributes=Z,o.attributesNum=J,o.index=W}function M(){const b=o.newAttributes;for(let O=0,G=b.length;O<G;O++)b[O]=0}function x(b){_(b,0)}function _(b,O){const G=o.newAttributes,W=o.enabledAttributes,Z=o.attributeDivisors;G[b]=1,W[b]===0&&(s.enableVertexAttribArray(b),W[b]=1),Z[b]!==O&&(s.vertexAttribDivisor(b,O),Z[b]=O)}function T(){const b=o.newAttributes,O=o.enabledAttributes;for(let G=0,W=O.length;G<W;G++)O[G]!==b[G]&&(s.disableVertexAttribArray(G),O[G]=0)}function S(b,O,G,W,Z,se,J){J===!0?s.vertexAttribIPointer(b,O,G,Z,se):s.vertexAttribPointer(b,O,G,W,Z,se)}function w(b,O,G,W){M();const Z=W.attributes,se=G.getAttributes(),J=O.defaultAttributeValues;for(const ue in se){const ie=se[ue];if(ie.location>=0){let ye=Z[ue];if(ye===void 0&&(ue==="instanceMatrix"&&b.instanceMatrix&&(ye=b.instanceMatrix),ue==="instanceColor"&&b.instanceColor&&(ye=b.instanceColor)),ye!==void 0){const Re=ye.normalized,be=ye.itemSize,dt=e.get(ye);if(dt===void 0)continue;const yt=dt.buffer,ae=dt.type,ge=dt.bytesPerElement,Ce=ae===s.INT||ae===s.UNSIGNED_INT||ye.gpuType===Nf;if(ye.isInterleavedBufferAttribute){const Pe=ye.data,Ye=Pe.stride,et=ye.offset;if(Pe.isInstancedInterleavedBuffer){for(let ot=0;ot<ie.locationSize;ot++)_(ie.location+ot,Pe.meshPerAttribute);b.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let ot=0;ot<ie.locationSize;ot++)x(ie.location+ot);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let ot=0;ot<ie.locationSize;ot++)S(ie.location+ot,be/ie.locationSize,ae,Re,Ye*ge,(et+be/ie.locationSize*ot)*ge,Ce)}else{if(ye.isInstancedBufferAttribute){for(let Pe=0;Pe<ie.locationSize;Pe++)_(ie.location+Pe,ye.meshPerAttribute);b.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Pe=0;Pe<ie.locationSize;Pe++)x(ie.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let Pe=0;Pe<ie.locationSize;Pe++)S(ie.location+Pe,be/ie.locationSize,ae,Re,be*ge,be/ie.locationSize*Pe*ge,Ce)}}else if(J!==void 0){const Re=J[ue];if(Re!==void 0)switch(Re.length){case 2:s.vertexAttrib2fv(ie.location,Re);break;case 3:s.vertexAttrib3fv(ie.location,Re);break;case 4:s.vertexAttrib4fv(ie.location,Re);break;default:s.vertexAttrib1fv(ie.location,Re)}}}}T()}function N(){F();for(const b in n){const O=n[b];for(const G in O){const W=O[G];for(const Z in W)d(W[Z].object),delete W[Z];delete O[G]}delete n[b]}}function I(b){if(n[b.id]===void 0)return;const O=n[b.id];for(const G in O){const W=O[G];for(const Z in W)d(W[Z].object),delete W[Z];delete O[G]}delete n[b.id]}function L(b){for(const O in n){const G=n[O];if(G[b.id]===void 0)continue;const W=G[b.id];for(const Z in W)d(W[Z].object),delete W[Z];delete G[b.id]}}function F(){R(),c=!0,o!==i&&(o=i,h(o.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:l,reset:F,resetDefaultState:R,dispose:N,releaseStatesOfGeometry:I,releaseStatesOfProgram:L,initAttributes:M,enableAttribute:x,disableUnusedAttributes:T}}function S1(s,e,t){let n;function i(h){n=h}function o(h,d){s.drawArrays(n,h,d),t.update(d,n,1)}function c(h,d,m){m!==0&&(s.drawArraysInstanced(n,h,d,m),t.update(d,n,m))}function l(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,m);let g=0;for(let y=0;y<m;y++)g+=d[y];t.update(g,n,1)}function u(h,d,m,p){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<h.length;y++)c(h[y],d[y],p[y]);else{g.multiDrawArraysInstancedWEBGL(n,h,0,d,0,p,0,m);let y=0;for(let M=0;M<m;M++)y+=d[M];for(let M=0;M<p.length;M++)t.update(y,n,p[M])}}this.setMode=i,this.render=o,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function E1(s,e,t,n){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function c(I){return!(I!==di&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(I){const L=I===Ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==pr&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Li&&!L)}function u(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const d=u(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const m=t.logarithmicDepthBuffer===!0,p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,N=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:u,textureFormatReadable:c,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:m,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:_,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:w,maxSamples:N}}function T1(s){const e=this;let t=null,n=0,i=!1,o=!1;const c=new Vi,l=new ht,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(m,p){const g=m.length!==0||p||n!==0||i;return i=p,n=m.length,g},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,p){t=d(m,p,0)},this.setState=function(m,p,g){const y=m.clippingPlanes,M=m.clipIntersection,x=m.clipShadows,_=s.get(m);if(!i||y===null||y.length===0||o&&!x)o?d(null):h();else{const T=o?0:n,S=T*4;let w=_.clippingState||null;u.value=w,w=d(y,p,S,g);for(let N=0;N!==S;++N)w[N]=t[N];_.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(m,p,g,y){const M=m!==null?m.length:0;let x=null;if(M!==0){if(x=u.value,y!==!0||x===null){const _=g+M*4,T=p.matrixWorldInverse;l.getNormalMatrix(T),(x===null||x.length<_)&&(x=new Float32Array(_));for(let S=0,w=g;S!==M;++S,w+=4)c.copy(m[S]).applyMatrix4(T,l),c.normal.toArray(x,w),x[w+3]=c.constant}u.value=x,u.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function A1(s){let e=new WeakMap;function t(c,l){return l===zh?c.mapping=go:l===Hh&&(c.mapping=_o),c}function n(c){if(c&&c.isTexture){const l=c.mapping;if(l===zh||l===Hh)if(e.has(c)){const u=e.get(c).texture;return t(u,c.mapping)}else{const u=c.image;if(u&&u.height>0){const h=new OA(u.height);return h.fromEquirectangularTexture(s,c),e.set(c,h),c.addEventListener("dispose",i),t(h.texture,c.mapping)}else return null}}return c}function i(c){const l=c.target;l.removeEventListener("dispose",i);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class Kf extends U_{constructor(e=-1,t=1,n=1,i=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-e,c=n+e,l=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,c=o+h*this.view.width,l-=d*this.view.offsetY,u=l-d*this.view.height}this.projectionMatrix.makeOrthographic(o,c,l,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const lo=4,jm=[.125,.215,.35,.446,.526,.582],ls=20,ch=new Kf,$m=new Qe;let lh=null,uh=0,hh=0,fh=!1;const as=(1+Math.sqrt(5))/2,$s=1/as,Jm=[new z(-as,$s,0),new z(as,$s,0),new z(-$s,0,as),new z($s,0,as),new z(0,as,-$s),new z(0,as,$s),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Qm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){lh=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,i,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lh,uh,hh),this._renderer.xr.enabled=fh,e.scissorTest=!1,Nc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===go||e.mapping===_o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lh=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:Ma,format:di,colorSpace:vn,depthBuffer:!1},i=eg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eg(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=b1(o)),this._blurMaterial=w1(o,e,t)}return i}_compileMaterial(e){const t=new dn(this._lodPlanes[0],e);this._renderer.compile(t,ch)}_sceneToCubeUV(e,t,n,i){const l=new Ln(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,p=d.toneMapping;d.getClearColor($m),d.toneMapping=Vr,d.autoClear=!1;const g=new us({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),y=new dn(new Sa,g);let M=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,M=!0):(g.color.copy($m),M=!0);for(let _=0;_<6;_++){const T=_%3;T===0?(l.up.set(0,u[_],0),l.lookAt(h[_],0,0)):T===1?(l.up.set(0,0,u[_]),l.lookAt(0,h[_],0)):(l.up.set(0,u[_],0),l.lookAt(0,0,h[_]));const S=this._cubeSize;Nc(i,T*S,_>2?S:0,S,S),d.setRenderTarget(i),M&&d.render(y,l),d.render(e,l)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=p,d.autoClear=m,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===go||e.mapping===_o;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tg());const o=i?this._cubemapMaterial:this._equirectMaterial,c=new dn(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=e;const u=this._cubeSize;Nc(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(c,ch)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const c=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),l=Jm[(i-o-1)%Jm.length];this._blur(e,o-1,o,c,l)}t.autoClear=n}_blur(e,t,n,i,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,i,"latitudinal",o),this._halfBlur(c,e,n,n,i,"longitudinal",o)}_halfBlur(e,t,n,i,o,c,l){const u=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,m=new dn(this._lodPlanes[i],h),p=h.uniforms,g=this._sizeLods[n]-1,y=isFinite(o)?Math.PI/(2*g):2*Math.PI/(2*ls-1),M=o/y,x=isFinite(o)?1+Math.floor(d*M):ls;x>ls&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ls}`);const _=[];let T=0;for(let L=0;L<ls;++L){const F=L/M,R=Math.exp(-F*F/2);_.push(R),L===0?T+=R:L<x&&(T+=2*R)}for(let L=0;L<_.length;L++)_[L]=_[L]/T;p.envMap.value=e.texture,p.samples.value=x,p.weights.value=_,p.latitudinal.value=c==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:S}=this;p.dTheta.value=y,p.mipInt.value=S-n;const w=this._sizeLods[i],N=3*w*(i>S-lo?i-S+lo:0),I=4*(this._cubeSize-w);Nc(t,N,I,3*w,2*w),u.setRenderTarget(t),u.render(m,ch)}}function b1(s){const e=[],t=[],n=[];let i=s;const o=s-lo+1+jm.length;for(let c=0;c<o;c++){const l=Math.pow(2,i);t.push(l);let u=1/l;c>s-lo?u=jm[c-s+lo-1]:c===0&&(u=0),n.push(u);const h=1/(l-2),d=-h,m=1+h,p=[d,d,m,d,m,m,d,d,m,m,d,m],g=6,y=6,M=3,x=2,_=1,T=new Float32Array(M*y*g),S=new Float32Array(x*y*g),w=new Float32Array(_*y*g);for(let I=0;I<g;I++){const L=I%3*2/3-1,F=I>2?0:-1,R=[L,F,0,L+2/3,F,0,L+2/3,F+1,0,L,F,0,L+2/3,F+1,0,L,F+1,0];T.set(R,M*y*I),S.set(p,x*y*I);const b=[I,I,I,I,I,I];w.set(b,_*y*I)}const N=new ei;N.setAttribute("position",new mn(T,M)),N.setAttribute("uv",new mn(S,x)),N.setAttribute("faceIndex",new mn(w,_)),e.push(N),i>lo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function eg(s,e,t){const n=new ds(s,e,t);return n.texture.mapping=bl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nc(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function w1(s,e,t){const n=new Float32Array(ls),i=new z(0,1,0);return new kr({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Zf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function tg(){return new kr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function ng(){return new kr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function Zf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function R1(s){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const u=l.mapping,h=u===zh||u===Hh,d=u===go||u===_o;if(h||d){let m=e.get(l);const p=m!==void 0?m.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==p)return t===null&&(t=new Qm(s)),m=h?t.fromEquirectangular(l,m):t.fromCubemap(l,m),m.texture.pmremVersion=l.pmremVersion,e.set(l,m),m.texture;if(m!==void 0)return m.texture;{const g=l.image;return h&&g&&g.height>0||d&&g&&i(g)?(t===null&&(t=new Qm(s)),m=h?t.fromEquirectangular(l):t.fromCubemap(l),m.texture.pmremVersion=l.pmremVersion,e.set(l,m),l.addEventListener("dispose",o),m.texture):null}}}return l}function i(l){let u=0;const h=6;for(let d=0;d<h;d++)l[d]!==void 0&&u++;return u===h}function o(l){const u=l.target;u.removeEventListener("dispose",o);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function C1(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Xf("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function P1(s,e,t,n){const i={},o=new WeakMap;function c(m){const p=m.target;p.index!==null&&e.remove(p.index);for(const y in p.attributes)e.remove(p.attributes[y]);for(const y in p.morphAttributes){const M=p.morphAttributes[y];for(let x=0,_=M.length;x<_;x++)e.remove(M[x])}p.removeEventListener("dispose",c),delete i[p.id];const g=o.get(p);g&&(e.remove(g),o.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(m,p){return i[p.id]===!0||(p.addEventListener("dispose",c),i[p.id]=!0,t.memory.geometries++),p}function u(m){const p=m.attributes;for(const y in p)e.update(p[y],s.ARRAY_BUFFER);const g=m.morphAttributes;for(const y in g){const M=g[y];for(let x=0,_=M.length;x<_;x++)e.update(M[x],s.ARRAY_BUFFER)}}function h(m){const p=[],g=m.index,y=m.attributes.position;let M=0;if(g!==null){const T=g.array;M=g.version;for(let S=0,w=T.length;S<w;S+=3){const N=T[S+0],I=T[S+1],L=T[S+2];p.push(N,I,I,L,L,N)}}else if(y!==void 0){const T=y.array;M=y.version;for(let S=0,w=T.length/3-1;S<w;S+=3){const N=S+0,I=S+1,L=S+2;p.push(N,I,I,L,L,N)}}else return;const x=new(w_(p)?I_:L_)(p,1);x.version=M;const _=o.get(m);_&&e.remove(_),o.set(m,x)}function d(m){const p=o.get(m);if(p){const g=m.index;g!==null&&p.version<g.version&&h(m)}else h(m);return o.get(m)}return{get:l,update:u,getWireframeAttribute:d}}function L1(s,e,t){let n;function i(p){n=p}let o,c;function l(p){o=p.type,c=p.bytesPerElement}function u(p,g){s.drawElements(n,g,o,p*c),t.update(g,n,1)}function h(p,g,y){y!==0&&(s.drawElementsInstanced(n,g,o,p*c,y),t.update(g,n,y))}function d(p,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,o,p,0,y);let x=0;for(let _=0;_<y;_++)x+=g[_];t.update(x,n,1)}function m(p,g,y,M){if(y===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<p.length;_++)h(p[_]/c,g[_],M[_]);else{x.multiDrawElementsInstancedWEBGL(n,g,0,o,p,0,M,0,y);let _=0;for(let T=0;T<y;T++)_+=g[T];for(let T=0;T<M.length;T++)t.update(_,n,M[T])}}this.setMode=i,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function I1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,c,l){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=l*(o/3);break;case s.LINES:t.lines+=l*(o/2);break;case s.LINE_STRIP:t.lines+=l*(o-1);break;case s.LINE_LOOP:t.lines+=l*o;break;case s.POINTS:t.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function D1(s,e,t){const n=new WeakMap,i=new Dt;function o(c,l,u){const h=c.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=d!==void 0?d.length:0;let p=n.get(l);if(p===void 0||p.count!==m){let R=function(){L.dispose(),n.delete(l),l.removeEventListener("dispose",R)};p!==void 0&&p.texture.dispose();const g=l.morphAttributes.position!==void 0,y=l.morphAttributes.normal!==void 0,M=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],_=l.morphAttributes.normal||[],T=l.morphAttributes.color||[];let S=0;g===!0&&(S=1),y===!0&&(S=2),M===!0&&(S=3);let w=l.attributes.position.count*S,N=1;w>e.maxTextureSize&&(N=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const I=new Float32Array(w*N*4*m),L=new C_(I,w,N,m);L.type=Li,L.needsUpdate=!0;const F=S*4;for(let b=0;b<m;b++){const O=x[b],G=_[b],W=T[b],Z=w*N*4*b;for(let se=0;se<O.count;se++){const J=se*F;g===!0&&(i.fromBufferAttribute(O,se),I[Z+J+0]=i.x,I[Z+J+1]=i.y,I[Z+J+2]=i.z,I[Z+J+3]=0),y===!0&&(i.fromBufferAttribute(G,se),I[Z+J+4]=i.x,I[Z+J+5]=i.y,I[Z+J+6]=i.z,I[Z+J+7]=0),M===!0&&(i.fromBufferAttribute(W,se),I[Z+J+8]=i.x,I[Z+J+9]=i.y,I[Z+J+10]=i.z,I[Z+J+11]=W.itemSize===4?i.w:1)}}p={count:m,texture:L,size:new Be(w,N)},n.set(l,p),l.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)u.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let g=0;for(let M=0;M<h.length;M++)g+=h[M];const y=l.morphTargetsRelative?1:1-g;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",h)}u.getUniforms().setValue(s,"morphTargetsTexture",p.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}return{update:o}}function U1(s,e,t,n){let i=new WeakMap;function o(u){const h=n.render.frame,d=u.geometry,m=e.get(u,d);if(i.get(m)!==h&&(e.update(m),i.set(m,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),i.get(u)!==h&&(t.update(u.instanceMatrix,s.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,s.ARRAY_BUFFER),i.set(u,h))),u.isSkinnedMesh){const p=u.skeleton;i.get(p)!==h&&(p.update(),i.set(p,h))}return m}function c(){i=new WeakMap}function l(u){const h=u.target;h.removeEventListener("dispose",l),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:c}}class F_ extends pn{constructor(e,t,n,i,o,c,l,u,h,d=fo){if(d!==fo&&d!==yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===fo&&(n=fs),n===void 0&&d===yo&&(n=vo),super(null,i,o,c,l,u,d,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:Dn,this.minFilter=u!==void 0?u:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const B_=new pn,ig=new F_(1,1),z_=new C_,H_=new yA,V_=new N_,rg=[],sg=[],og=new Float32Array(16),ag=new Float32Array(9),cg=new Float32Array(4);function bo(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let o=rg[i];if(o===void 0&&(o=new Float32Array(i),rg[i]=o),e!==0){n.toArray(o,0);for(let c=1,l=0;c!==e;++c)l+=t,s[c].toArray(o,l)}return o}function an(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function cn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Cl(s,e){let t=sg[e];t===void 0&&(t=new Int32Array(e),sg[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function N1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function O1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2fv(this.addr,e),cn(t,e)}}function F1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;s.uniform3fv(this.addr,e),cn(t,e)}}function B1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4fv(this.addr,e),cn(t,e)}}function z1(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(an(t,n))return;cg.set(n),s.uniformMatrix2fv(this.addr,!1,cg),cn(t,n)}}function H1(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(an(t,n))return;ag.set(n),s.uniformMatrix3fv(this.addr,!1,ag),cn(t,n)}}function V1(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(an(t,n))return;og.set(n),s.uniformMatrix4fv(this.addr,!1,og),cn(t,n)}}function k1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function G1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2iv(this.addr,e),cn(t,e)}}function W1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;s.uniform3iv(this.addr,e),cn(t,e)}}function X1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4iv(this.addr,e),cn(t,e)}}function q1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Y1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2uiv(this.addr,e),cn(t,e)}}function K1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;s.uniform3uiv(this.addr,e),cn(t,e)}}function Z1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4uiv(this.addr,e),cn(t,e)}}function j1(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(ig.compareFunction=A_,o=ig):o=B_,t.setTexture2D(e||o,i)}function $1(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||H_,i)}function J1(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||V_,i)}function Q1(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||z_,i)}function eR(s){switch(s){case 5126:return N1;case 35664:return O1;case 35665:return F1;case 35666:return B1;case 35674:return z1;case 35675:return H1;case 35676:return V1;case 5124:case 35670:return k1;case 35667:case 35671:return G1;case 35668:case 35672:return W1;case 35669:case 35673:return X1;case 5125:return q1;case 36294:return Y1;case 36295:return K1;case 36296:return Z1;case 35678:case 36198:case 36298:case 36306:case 35682:return j1;case 35679:case 36299:case 36307:return $1;case 35680:case 36300:case 36308:case 36293:return J1;case 36289:case 36303:case 36311:case 36292:return Q1}}function tR(s,e){s.uniform1fv(this.addr,e)}function nR(s,e){const t=bo(e,this.size,2);s.uniform2fv(this.addr,t)}function iR(s,e){const t=bo(e,this.size,3);s.uniform3fv(this.addr,t)}function rR(s,e){const t=bo(e,this.size,4);s.uniform4fv(this.addr,t)}function sR(s,e){const t=bo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function oR(s,e){const t=bo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function aR(s,e){const t=bo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function cR(s,e){s.uniform1iv(this.addr,e)}function lR(s,e){s.uniform2iv(this.addr,e)}function uR(s,e){s.uniform3iv(this.addr,e)}function hR(s,e){s.uniform4iv(this.addr,e)}function fR(s,e){s.uniform1uiv(this.addr,e)}function dR(s,e){s.uniform2uiv(this.addr,e)}function pR(s,e){s.uniform3uiv(this.addr,e)}function mR(s,e){s.uniform4uiv(this.addr,e)}function gR(s,e,t){const n=this.cache,i=e.length,o=Cl(t,i);an(n,o)||(s.uniform1iv(this.addr,o),cn(n,o));for(let c=0;c!==i;++c)t.setTexture2D(e[c]||B_,o[c])}function _R(s,e,t){const n=this.cache,i=e.length,o=Cl(t,i);an(n,o)||(s.uniform1iv(this.addr,o),cn(n,o));for(let c=0;c!==i;++c)t.setTexture3D(e[c]||H_,o[c])}function xR(s,e,t){const n=this.cache,i=e.length,o=Cl(t,i);an(n,o)||(s.uniform1iv(this.addr,o),cn(n,o));for(let c=0;c!==i;++c)t.setTextureCube(e[c]||V_,o[c])}function vR(s,e,t){const n=this.cache,i=e.length,o=Cl(t,i);an(n,o)||(s.uniform1iv(this.addr,o),cn(n,o));for(let c=0;c!==i;++c)t.setTexture2DArray(e[c]||z_,o[c])}function yR(s){switch(s){case 5126:return tR;case 35664:return nR;case 35665:return iR;case 35666:return rR;case 35674:return sR;case 35675:return oR;case 35676:return aR;case 5124:case 35670:return cR;case 35667:case 35671:return lR;case 35668:case 35672:return uR;case 35669:case 35673:return hR;case 5125:return fR;case 36294:return dR;case 36295:return pR;case 36296:return mR;case 35678:case 36198:case 36298:case 36306:case 35682:return gR;case 35679:case 36299:case 36307:return _R;case 35680:case 36300:case 36308:case 36293:return xR;case 36289:case 36303:case 36311:case 36292:return vR}}class MR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=eR(t.type)}}class SR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yR(t.type)}}class ER{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let o=0,c=i.length;o!==c;++o){const l=i[o];l.setValue(e,t[l.id],n)}}}const dh=/(\w+)(\])?(\[|\.)?/g;function lg(s,e){s.seq.push(e),s.map[e.id]=e}function TR(s,e,t){const n=s.name,i=n.length;for(dh.lastIndex=0;;){const o=dh.exec(n),c=dh.lastIndex;let l=o[1];const u=o[2]==="]",h=o[3];if(u&&(l=l|0),h===void 0||h==="["&&c+2===i){lg(t,h===void 0?new MR(l,s,e):new SR(l,s,e));break}else{let m=t.map[l];m===void 0&&(m=new ER(l),lg(t,m)),t=m}}}class dl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=e.getActiveUniform(t,i),c=e.getUniformLocation(t,o.name);TR(o,c,this)}}setValue(e,t,n,i){const o=this.map[t];o!==void 0&&o.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let o=0,c=t.length;o!==c;++o){const l=t[o],u=n[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,o=e.length;i!==o;++i){const c=e[i];c.id in t&&n.push(c)}return n}}function ug(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const AR=37297;let bR=0;function wR(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=i;c<o;c++){const l=c+1;n.push(`${l===e?">":" "} ${l}: ${t[c]}`)}return n.join(`
`)}function RR(s){const e=bt.getPrimaries(bt.workingColorSpace),t=bt.getPrimaries(s);let n;switch(e===t?n="":e===vl&&t===xl?n="LinearDisplayP3ToLinearSRGB":e===xl&&t===vl&&(n="LinearSRGBToLinearDisplayP3"),s){case vn:case wl:return[n,"LinearTransferOETF"];case Pn:case Gf:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function hg(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const c=parseInt(o[1]);return t.toUpperCase()+`

`+i+`

`+wR(s.getShaderSource(e),c)}else return i}function CR(s,e){const t=RR(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function PR(s,e){let t;switch(e){case LT:t="Linear";break;case IT:t="Reinhard";break;case DT:t="OptimizedCineon";break;case UT:t="ACESFilmic";break;case OT:t="AgX";break;case FT:t="Neutral";break;case NT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function LR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function IR(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function DR(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(e,i),c=o.name;let l=1;o.type===s.FLOAT_MAT2&&(l=2),o.type===s.FLOAT_MAT3&&(l=3),o.type===s.FLOAT_MAT4&&(l=4),t[c]={type:o.type,location:s.getAttribLocation(e,c),locationSize:l}}return t}function ua(s){return s!==""}function fg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UR=/^[ \t]*#include +<([\w\d./]+)>/gm;function gf(s){return s.replace(UR,OR)}const NR=new Map;function OR(s,e){let t=ut[e];if(t===void 0){const n=NR.get(e);if(n!==void 0)t=ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gf(t)}const FR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pg(s){return s.replace(FR,BR)}function BR(s,e,t,n){let i="";for(let o=parseInt(e);o<parseInt(t);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function mg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zR(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===f_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===iT?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===cr&&(e="SHADOWMAP_TYPE_VSM"),e}function HR(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case go:case _o:e="ENVMAP_TYPE_CUBE";break;case bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function VR(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case _o:e="ENVMAP_MODE_REFRACTION";break}return e}function kR(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Uf:e="ENVMAP_BLENDING_MULTIPLY";break;case CT:e="ENVMAP_BLENDING_MIX";break;case PT:e="ENVMAP_BLENDING_ADD";break}return e}function GR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function WR(s,e,t,n){const i=s.getContext(),o=t.defines;let c=t.vertexShader,l=t.fragmentShader;const u=zR(t),h=HR(t),d=VR(t),m=kR(t),p=GR(t),g=LR(t),y=IR(o),M=i.createProgram();let x,_,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ua).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ua).join(`
`),_.length>0&&(_+=`
`)):(x=[mg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),_=[mg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vr?"#define TONE_MAPPING":"",t.toneMapping!==Vr?ut.tonemapping_pars_fragment:"",t.toneMapping!==Vr?PR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,CR("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ua).join(`
`)),c=gf(c),c=fg(c,t),c=dg(c,t),l=gf(l),l=fg(l,t),l=dg(l,t),c=pg(c),l=pg(l),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===Cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const S=T+x+c,w=T+_+l,N=ug(i,i.VERTEX_SHADER,S),I=ug(i,i.FRAGMENT_SHADER,w);i.attachShader(M,N),i.attachShader(M,I),t.index0AttributeName!==void 0?i.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M);function L(O){if(s.debug.checkShaderErrors){const G=i.getProgramInfoLog(M).trim(),W=i.getShaderInfoLog(N).trim(),Z=i.getShaderInfoLog(I).trim();let se=!0,J=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if(se=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,M,N,I);else{const ue=hg(i,N,"vertex"),ie=hg(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+G+`
`+ue+`
`+ie)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(W===""||Z==="")&&(J=!1);J&&(O.diagnostics={runnable:se,programLog:G,vertexShader:{log:W,prefix:x},fragmentShader:{log:Z,prefix:_}})}i.deleteShader(N),i.deleteShader(I),F=new dl(i,M),R=DR(i,M)}let F;this.getUniforms=function(){return F===void 0&&L(this),F};let R;this.getAttributes=function(){return R===void 0&&L(this),R};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(M,AR)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bR++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=N,this.fragmentShader=I,this}let XR=0;class qR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),o=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(i)===!1&&(c.add(i),i.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new YR(e),t.set(e,n)),n}}class YR{constructor(e){this.id=XR++,this.code=e,this.usedTimes=0}}function KR(s,e,t,n,i,o,c){const l=new qf,u=new qR,h=new Set,d=[],m=i.logarithmicDepthBuffer,p=i.vertexTextures;let g=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(R){return h.add(R),R===0?"uv":`uv${R}`}function x(R,b,O,G,W){const Z=G.fog,se=W.geometry,J=R.isMeshStandardMaterial?G.environment:null,ue=(R.isMeshStandardMaterial?t:e).get(R.envMap||J),ie=ue&&ue.mapping===bl?ue.image.height:null,ye=y[R.type];R.precision!==null&&(g=i.getMaxPrecision(R.precision),g!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",g,"instead."));const Re=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,be=Re!==void 0?Re.length:0;let dt=0;se.morphAttributes.position!==void 0&&(dt=1),se.morphAttributes.normal!==void 0&&(dt=2),se.morphAttributes.color!==void 0&&(dt=3);let yt,ae,ge,Ce;if(ye){const _t=ki[ye];yt=_t.vertexShader,ae=_t.fragmentShader}else yt=R.vertexShader,ae=R.fragmentShader,u.update(R),ge=u.getVertexShaderID(R),Ce=u.getFragmentShaderID(R);const Pe=s.getRenderTarget(),Ye=W.isInstancedMesh===!0,et=W.isBatchedMesh===!0,ot=!!R.map,wt=!!R.matcap,V=!!ue,Ot=!!R.aoMap,it=!!R.lightMap,pt=!!R.bumpMap,Ne=!!R.normalMap,Et=!!R.displacementMap,je=!!R.emissiveMap,nt=!!R.metalnessMap,H=!!R.roughnessMap,C=R.anisotropy>0,ee=R.clearcoat>0,de=R.dispersion>0,me=R.iridescence>0,he=R.sheen>0,ze=R.transmission>0,ve=C&&!!R.anisotropyMap,Me=ee&&!!R.clearcoatMap,tt=ee&&!!R.clearcoatNormalMap,_e=ee&&!!R.clearcoatRoughnessMap,Ae=me&&!!R.iridescenceMap,ct=me&&!!R.iridescenceThicknessMap,Ve=he&&!!R.sheenColorMap,we=he&&!!R.sheenRoughnessMap,Ge=!!R.specularMap,Ke=!!R.specularColorMap,It=!!R.specularIntensityMap,A=ze&&!!R.transmissionMap,j=ze&&!!R.thicknessMap,$=!!R.gradientMap,re=!!R.alphaMap,pe=R.alphaTest>0,Oe=!!R.alphaHash,$e=!!R.extensions;let Gt=Vr;R.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(Gt=s.toneMapping);const jt={shaderID:ye,shaderType:R.type,shaderName:R.name,vertexShader:yt,fragmentShader:ae,defines:R.defines,customVertexShaderID:ge,customFragmentShaderID:Ce,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:g,batching:et,batchingColor:et&&W._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&W.instanceColor!==null,instancingMorph:Ye&&W.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Pe===null?s.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:vn,alphaToCoverage:!!R.alphaToCoverage,map:ot,matcap:wt,envMap:V,envMapMode:V&&ue.mapping,envMapCubeUVHeight:ie,aoMap:Ot,lightMap:it,bumpMap:pt,normalMap:Ne,displacementMap:p&&Et,emissiveMap:je,normalMapObjectSpace:Ne&&R.normalMapType===GT,normalMapTangentSpace:Ne&&R.normalMapType===kf,metalnessMap:nt,roughnessMap:H,anisotropy:C,anisotropyMap:ve,clearcoat:ee,clearcoatMap:Me,clearcoatNormalMap:tt,clearcoatRoughnessMap:_e,dispersion:de,iridescence:me,iridescenceMap:Ae,iridescenceThicknessMap:ct,sheen:he,sheenColorMap:Ve,sheenRoughnessMap:we,specularMap:Ge,specularColorMap:Ke,specularIntensityMap:It,transmission:ze,transmissionMap:A,thicknessMap:j,gradientMap:$,opaque:R.transparent===!1&&R.blending===ho&&R.alphaToCoverage===!1,alphaMap:re,alphaTest:pe,alphaHash:Oe,combine:R.combine,mapUv:ot&&M(R.map.channel),aoMapUv:Ot&&M(R.aoMap.channel),lightMapUv:it&&M(R.lightMap.channel),bumpMapUv:pt&&M(R.bumpMap.channel),normalMapUv:Ne&&M(R.normalMap.channel),displacementMapUv:Et&&M(R.displacementMap.channel),emissiveMapUv:je&&M(R.emissiveMap.channel),metalnessMapUv:nt&&M(R.metalnessMap.channel),roughnessMapUv:H&&M(R.roughnessMap.channel),anisotropyMapUv:ve&&M(R.anisotropyMap.channel),clearcoatMapUv:Me&&M(R.clearcoatMap.channel),clearcoatNormalMapUv:tt&&M(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&M(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&M(R.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&M(R.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&M(R.sheenColorMap.channel),sheenRoughnessMapUv:we&&M(R.sheenRoughnessMap.channel),specularMapUv:Ge&&M(R.specularMap.channel),specularColorMapUv:Ke&&M(R.specularColorMap.channel),specularIntensityMapUv:It&&M(R.specularIntensityMap.channel),transmissionMapUv:A&&M(R.transmissionMap.channel),thicknessMapUv:j&&M(R.thicknessMap.channel),alphaMapUv:re&&M(R.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(Ne||C),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!se.attributes.uv&&(ot||re),fog:!!Z,useFog:R.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:W.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:dt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:Gt,decodeVideoTexture:ot&&R.map.isVideoTexture===!0&&bt.getTransfer(R.map.colorSpace)===Ht,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===fi,flipSided:R.side===Un,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:$e&&R.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&R.extensions.multiDraw===!0||et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return jt.vertexUv1s=h.has(1),jt.vertexUv2s=h.has(2),jt.vertexUv3s=h.has(3),h.clear(),jt}function _(R){const b=[];if(R.shaderID?b.push(R.shaderID):(b.push(R.customVertexShaderID),b.push(R.customFragmentShaderID)),R.defines!==void 0)for(const O in R.defines)b.push(O),b.push(R.defines[O]);return R.isRawShaderMaterial===!1&&(T(b,R),S(b,R),b.push(s.outputColorSpace)),b.push(R.customProgramCacheKey),b.join()}function T(R,b){R.push(b.precision),R.push(b.outputColorSpace),R.push(b.envMapMode),R.push(b.envMapCubeUVHeight),R.push(b.mapUv),R.push(b.alphaMapUv),R.push(b.lightMapUv),R.push(b.aoMapUv),R.push(b.bumpMapUv),R.push(b.normalMapUv),R.push(b.displacementMapUv),R.push(b.emissiveMapUv),R.push(b.metalnessMapUv),R.push(b.roughnessMapUv),R.push(b.anisotropyMapUv),R.push(b.clearcoatMapUv),R.push(b.clearcoatNormalMapUv),R.push(b.clearcoatRoughnessMapUv),R.push(b.iridescenceMapUv),R.push(b.iridescenceThicknessMapUv),R.push(b.sheenColorMapUv),R.push(b.sheenRoughnessMapUv),R.push(b.specularMapUv),R.push(b.specularColorMapUv),R.push(b.specularIntensityMapUv),R.push(b.transmissionMapUv),R.push(b.thicknessMapUv),R.push(b.combine),R.push(b.fogExp2),R.push(b.sizeAttenuation),R.push(b.morphTargetsCount),R.push(b.morphAttributeCount),R.push(b.numDirLights),R.push(b.numPointLights),R.push(b.numSpotLights),R.push(b.numSpotLightMaps),R.push(b.numHemiLights),R.push(b.numRectAreaLights),R.push(b.numDirLightShadows),R.push(b.numPointLightShadows),R.push(b.numSpotLightShadows),R.push(b.numSpotLightShadowsWithMaps),R.push(b.numLightProbes),R.push(b.shadowMapType),R.push(b.toneMapping),R.push(b.numClippingPlanes),R.push(b.numClipIntersection),R.push(b.depthPacking)}function S(R,b){l.disableAll(),b.supportsVertexTextures&&l.enable(0),b.instancing&&l.enable(1),b.instancingColor&&l.enable(2),b.instancingMorph&&l.enable(3),b.matcap&&l.enable(4),b.envMap&&l.enable(5),b.normalMapObjectSpace&&l.enable(6),b.normalMapTangentSpace&&l.enable(7),b.clearcoat&&l.enable(8),b.iridescence&&l.enable(9),b.alphaTest&&l.enable(10),b.vertexColors&&l.enable(11),b.vertexAlphas&&l.enable(12),b.vertexUv1s&&l.enable(13),b.vertexUv2s&&l.enable(14),b.vertexUv3s&&l.enable(15),b.vertexTangents&&l.enable(16),b.anisotropy&&l.enable(17),b.alphaHash&&l.enable(18),b.batching&&l.enable(19),b.dispersion&&l.enable(20),b.batchingColor&&l.enable(21),R.push(l.mask),l.disableAll(),b.fog&&l.enable(0),b.useFog&&l.enable(1),b.flatShading&&l.enable(2),b.logarithmicDepthBuffer&&l.enable(3),b.skinning&&l.enable(4),b.morphTargets&&l.enable(5),b.morphNormals&&l.enable(6),b.morphColors&&l.enable(7),b.premultipliedAlpha&&l.enable(8),b.shadowMapEnabled&&l.enable(9),b.doubleSided&&l.enable(10),b.flipSided&&l.enable(11),b.useDepthPacking&&l.enable(12),b.dithering&&l.enable(13),b.transmission&&l.enable(14),b.sheen&&l.enable(15),b.opaque&&l.enable(16),b.pointsUvs&&l.enable(17),b.decodeVideoTexture&&l.enable(18),b.alphaToCoverage&&l.enable(19),R.push(l.mask)}function w(R){const b=y[R.type];let O;if(b){const G=ki[b];O=IA.clone(G.uniforms)}else O=R.uniforms;return O}function N(R,b){let O;for(let G=0,W=d.length;G<W;G++){const Z=d[G];if(Z.cacheKey===b){O=Z,++O.usedTimes;break}}return O===void 0&&(O=new WR(s,b,R,o),d.push(O)),O}function I(R){if(--R.usedTimes===0){const b=d.indexOf(R);d[b]=d[d.length-1],d.pop(),R.destroy()}}function L(R){u.remove(R)}function F(){u.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:w,acquireProgram:N,releaseProgram:I,releaseShaderCache:L,programs:d,dispose:F}}function ZR(){let s=new WeakMap;function e(o){let c=s.get(o);return c===void 0&&(c={},s.set(o,c)),c}function t(o){s.delete(o)}function n(o,c,l){s.get(o)[c]=l}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function jR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function gg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function _g(){const s=[];let e=0;const t=[],n=[],i=[];function o(){e=0,t.length=0,n.length=0,i.length=0}function c(m,p,g,y,M,x){let _=s[e];return _===void 0?(_={id:m.id,object:m,geometry:p,material:g,groupOrder:y,renderOrder:m.renderOrder,z:M,group:x},s[e]=_):(_.id=m.id,_.object=m,_.geometry=p,_.material=g,_.groupOrder=y,_.renderOrder=m.renderOrder,_.z=M,_.group=x),e++,_}function l(m,p,g,y,M,x){const _=c(m,p,g,y,M,x);g.transmission>0?n.push(_):g.transparent===!0?i.push(_):t.push(_)}function u(m,p,g,y,M,x){const _=c(m,p,g,y,M,x);g.transmission>0?n.unshift(_):g.transparent===!0?i.unshift(_):t.unshift(_)}function h(m,p){t.length>1&&t.sort(m||jR),n.length>1&&n.sort(p||gg),i.length>1&&i.sort(p||gg)}function d(){for(let m=e,p=s.length;m<p;m++){const g=s[m];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:o,push:l,unshift:u,finish:d,sort:h}}function $R(){let s=new WeakMap;function e(n,i){const o=s.get(n);let c;return o===void 0?(c=new _g,s.set(n,[c])):i>=o.length?(c=new _g,o.push(c)):c=o[i],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function JR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Qe};break;case"SpotLight":t={position:new z,direction:new z,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new z,halfWidth:new z,halfHeight:new z};break}return s[e.id]=t,t}}}function QR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let eC=0;function tC(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function nC(s){const e=new JR,t=QR(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new z);const i=new z,o=new qe,c=new qe;function l(h){let d=0,m=0,p=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let g=0,y=0,M=0,x=0,_=0,T=0,S=0,w=0,N=0,I=0,L=0;h.sort(tC);for(let R=0,b=h.length;R<b;R++){const O=h[R],G=O.color,W=O.intensity,Z=O.distance,se=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=G.r*W,m+=G.g*W,p+=G.b*W;else if(O.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(O.sh.coefficients[J],W);L++}else if(O.isDirectionalLight){const J=e.get(O);if(J.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const ue=O.shadow,ie=t.get(O);ie.shadowIntensity=ue.intensity,ie.shadowBias=ue.bias,ie.shadowNormalBias=ue.normalBias,ie.shadowRadius=ue.radius,ie.shadowMapSize=ue.mapSize,n.directionalShadow[g]=ie,n.directionalShadowMap[g]=se,n.directionalShadowMatrix[g]=O.shadow.matrix,T++}n.directional[g]=J,g++}else if(O.isSpotLight){const J=e.get(O);J.position.setFromMatrixPosition(O.matrixWorld),J.color.copy(G).multiplyScalar(W),J.distance=Z,J.coneCos=Math.cos(O.angle),J.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),J.decay=O.decay,n.spot[M]=J;const ue=O.shadow;if(O.map&&(n.spotLightMap[N]=O.map,N++,ue.updateMatrices(O),O.castShadow&&I++),n.spotLightMatrix[M]=ue.matrix,O.castShadow){const ie=t.get(O);ie.shadowIntensity=ue.intensity,ie.shadowBias=ue.bias,ie.shadowNormalBias=ue.normalBias,ie.shadowRadius=ue.radius,ie.shadowMapSize=ue.mapSize,n.spotShadow[M]=ie,n.spotShadowMap[M]=se,w++}M++}else if(O.isRectAreaLight){const J=e.get(O);J.color.copy(G).multiplyScalar(W),J.halfWidth.set(O.width*.5,0,0),J.halfHeight.set(0,O.height*.5,0),n.rectArea[x]=J,x++}else if(O.isPointLight){const J=e.get(O);if(J.color.copy(O.color).multiplyScalar(O.intensity),J.distance=O.distance,J.decay=O.decay,O.castShadow){const ue=O.shadow,ie=t.get(O);ie.shadowIntensity=ue.intensity,ie.shadowBias=ue.bias,ie.shadowNormalBias=ue.normalBias,ie.shadowRadius=ue.radius,ie.shadowMapSize=ue.mapSize,ie.shadowCameraNear=ue.camera.near,ie.shadowCameraFar=ue.camera.far,n.pointShadow[y]=ie,n.pointShadowMap[y]=se,n.pointShadowMatrix[y]=O.shadow.matrix,S++}n.point[y]=J,y++}else if(O.isHemisphereLight){const J=e.get(O);J.skyColor.copy(O.color).multiplyScalar(W),J.groundColor.copy(O.groundColor).multiplyScalar(W),n.hemi[_]=J,_++}}x>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=p;const F=n.hash;(F.directionalLength!==g||F.pointLength!==y||F.spotLength!==M||F.rectAreaLength!==x||F.hemiLength!==_||F.numDirectionalShadows!==T||F.numPointShadows!==S||F.numSpotShadows!==w||F.numSpotMaps!==N||F.numLightProbes!==L)&&(n.directional.length=g,n.spot.length=M,n.rectArea.length=x,n.point.length=y,n.hemi.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=w+N-I,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=L,F.directionalLength=g,F.pointLength=y,F.spotLength=M,F.rectAreaLength=x,F.hemiLength=_,F.numDirectionalShadows=T,F.numPointShadows=S,F.numSpotShadows=w,F.numSpotMaps=N,F.numLightProbes=L,n.version=eC++)}function u(h,d){let m=0,p=0,g=0,y=0,M=0;const x=d.matrixWorldInverse;for(let _=0,T=h.length;_<T;_++){const S=h[_];if(S.isDirectionalLight){const w=n.directional[m];w.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(x),m++}else if(S.isSpotLight){const w=n.spot[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(x),g++}else if(S.isRectAreaLight){const w=n.rectArea[y];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(x),c.identity(),o.copy(S.matrixWorld),o.premultiply(x),c.extractRotation(o),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(c),w.halfHeight.applyMatrix4(c),y++}else if(S.isPointLight){const w=n.point[p];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(x),p++}else if(S.isHemisphereLight){const w=n.hemi[M];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(x),M++}}}return{setup:l,setupView:u,state:n}}function xg(s){const e=new nC(s),t=[],n=[];function i(d){h.camera=d,t.length=0,n.length=0}function o(d){t.push(d)}function c(d){n.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:c}}function iC(s){let e=new WeakMap;function t(i,o=0){const c=e.get(i);let l;return c===void 0?(l=new xg(s),e.set(i,[l])):o>=c.length?(l=new xg(s),c.push(l)):l=c[o],l}function n(){e=new WeakMap}return{get:t,dispose:n}}class rC extends Di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sC extends Di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const oC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cC(s,e,t){let n=new Yf;const i=new Be,o=new Be,c=new Dt,l=new rC({depthPacking:kT}),u=new sC,h={},d=t.maxTextureSize,m={[Ui]:Un,[Un]:Ui,[fi]:fi},p=new kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:oC,fragmentShader:aC}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const y=new ei;y.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new dn(y,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=f_;let _=this.type;this.render=function(I,L,F){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;const R=s.getRenderTarget(),b=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Hr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const W=_!==cr&&this.type===cr,Z=_===cr&&this.type!==cr;for(let se=0,J=I.length;se<J;se++){const ue=I[se],ie=ue.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;i.copy(ie.mapSize);const ye=ie.getFrameExtents();if(i.multiply(ye),o.copy(ie.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(o.x=Math.floor(d/ye.x),i.x=o.x*ye.x,ie.mapSize.x=o.x),i.y>d&&(o.y=Math.floor(d/ye.y),i.y=o.y*ye.y,ie.mapSize.y=o.y)),ie.map===null||W===!0||Z===!0){const be=this.type!==cr?{minFilter:Dn,magFilter:Dn}:{};ie.map!==null&&ie.map.dispose(),ie.map=new ds(i.x,i.y,be),ie.map.texture.name=ue.name+".shadowMap",ie.camera.updateProjectionMatrix()}s.setRenderTarget(ie.map),s.clear();const Re=ie.getViewportCount();for(let be=0;be<Re;be++){const dt=ie.getViewport(be);c.set(o.x*dt.x,o.y*dt.y,o.x*dt.z,o.y*dt.w),G.viewport(c),ie.updateMatrices(ue,be),n=ie.getFrustum(),w(L,F,ie.camera,ue,this.type)}ie.isPointLightShadow!==!0&&this.type===cr&&T(ie,F),ie.needsUpdate=!1}_=this.type,x.needsUpdate=!1,s.setRenderTarget(R,b,O)};function T(I,L){const F=e.update(M);p.defines.VSM_SAMPLES!==I.blurSamples&&(p.defines.VSM_SAMPLES=I.blurSamples,g.defines.VSM_SAMPLES=I.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ds(i.x,i.y)),p.uniforms.shadow_pass.value=I.map.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(L,null,F,p,M,null),g.uniforms.shadow_pass.value=I.mapPass.texture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(L,null,F,g,M,null)}function S(I,L,F,R){let b=null;const O=F.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(O!==void 0)b=O;else if(b=F.isPointLight===!0?u:l,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const G=b.uuid,W=L.uuid;let Z=h[G];Z===void 0&&(Z={},h[G]=Z);let se=Z[W];se===void 0&&(se=b.clone(),Z[W]=se,L.addEventListener("dispose",N)),b=se}if(b.visible=L.visible,b.wireframe=L.wireframe,R===cr?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:m[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const G=s.properties.get(b);G.light=F}return b}function w(I,L,F,R,b){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&b===cr)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld);const W=e.update(I),Z=I.material;if(Array.isArray(Z)){const se=W.groups;for(let J=0,ue=se.length;J<ue;J++){const ie=se[J],ye=Z[ie.materialIndex];if(ye&&ye.visible){const Re=S(I,ye,R,b);I.onBeforeShadow(s,I,L,F,W,Re,ie),s.renderBufferDirect(F,null,W,Re,I,ie),I.onAfterShadow(s,I,L,F,W,Re,ie)}}}else if(Z.visible){const se=S(I,Z,R,b);I.onBeforeShadow(s,I,L,F,W,se,null),s.renderBufferDirect(F,null,W,se,I,null),I.onAfterShadow(s,I,L,F,W,se,null)}}const G=I.children;for(let W=0,Z=G.length;W<Z;W++)w(G[W],L,F,R,b)}function N(I){I.target.removeEventListener("dispose",N);for(const F in h){const R=h[F],b=I.target.uuid;b in R&&(R[b].dispose(),delete R[b])}}}function lC(s){function e(){let A=!1;const j=new Dt;let $=null;const re=new Dt(0,0,0,0);return{setMask:function(pe){$!==pe&&!A&&(s.colorMask(pe,pe,pe,pe),$=pe)},setLocked:function(pe){A=pe},setClear:function(pe,Oe,$e,Gt,jt){jt===!0&&(pe*=Gt,Oe*=Gt,$e*=Gt),j.set(pe,Oe,$e,Gt),re.equals(j)===!1&&(s.clearColor(pe,Oe,$e,Gt),re.copy(j))},reset:function(){A=!1,$=null,re.set(-1,0,0,0)}}}function t(){let A=!1,j=null,$=null,re=null;return{setTest:function(pe){pe?Ce(s.DEPTH_TEST):Pe(s.DEPTH_TEST)},setMask:function(pe){j!==pe&&!A&&(s.depthMask(pe),j=pe)},setFunc:function(pe){if($!==pe){switch(pe){case ST:s.depthFunc(s.NEVER);break;case ET:s.depthFunc(s.ALWAYS);break;case TT:s.depthFunc(s.LESS);break;case ml:s.depthFunc(s.LEQUAL);break;case AT:s.depthFunc(s.EQUAL);break;case bT:s.depthFunc(s.GEQUAL);break;case wT:s.depthFunc(s.GREATER);break;case RT:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=pe}},setLocked:function(pe){A=pe},setClear:function(pe){re!==pe&&(s.clearDepth(pe),re=pe)},reset:function(){A=!1,j=null,$=null,re=null}}}function n(){let A=!1,j=null,$=null,re=null,pe=null,Oe=null,$e=null,Gt=null,jt=null;return{setTest:function(_t){A||(_t?Ce(s.STENCIL_TEST):Pe(s.STENCIL_TEST))},setMask:function(_t){j!==_t&&!A&&(s.stencilMask(_t),j=_t)},setFunc:function(_t,$t,Yt){($!==_t||re!==$t||pe!==Yt)&&(s.stencilFunc(_t,$t,Yt),$=_t,re=$t,pe=Yt)},setOp:function(_t,$t,Yt){(Oe!==_t||$e!==$t||Gt!==Yt)&&(s.stencilOp(_t,$t,Yt),Oe=_t,$e=$t,Gt=Yt)},setLocked:function(_t){A=_t},setClear:function(_t){jt!==_t&&(s.clearStencil(_t),jt=_t)},reset:function(){A=!1,j=null,$=null,re=null,pe=null,Oe=null,$e=null,Gt=null,jt=null}}}const i=new e,o=new t,c=new n,l=new WeakMap,u=new WeakMap;let h={},d={},m=new WeakMap,p=[],g=null,y=!1,M=null,x=null,_=null,T=null,S=null,w=null,N=null,I=new Qe(0,0,0),L=0,F=!1,R=null,b=null,O=null,G=null,W=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,J=0;const ue=s.getParameter(s.VERSION);ue.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(ue)[1]),se=J>=1):ue.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),se=J>=2);let ie=null,ye={};const Re=s.getParameter(s.SCISSOR_BOX),be=s.getParameter(s.VIEWPORT),dt=new Dt().fromArray(Re),yt=new Dt().fromArray(be);function ae(A,j,$,re){const pe=new Uint8Array(4),Oe=s.createTexture();s.bindTexture(A,Oe),s.texParameteri(A,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(A,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<$;$e++)A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY?s.texImage3D(j,0,s.RGBA,1,1,re,0,s.RGBA,s.UNSIGNED_BYTE,pe):s.texImage2D(j+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pe);return Oe}const ge={};ge[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),o.setClear(1),c.setClear(0),Ce(s.DEPTH_TEST),o.setFunc(ml),pt(!1),Ne(ym),Ce(s.CULL_FACE),Ot(Hr);function Ce(A){h[A]!==!0&&(s.enable(A),h[A]=!0)}function Pe(A){h[A]!==!1&&(s.disable(A),h[A]=!1)}function Ye(A,j){return d[A]!==j?(s.bindFramebuffer(A,j),d[A]=j,A===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=j),A===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=j),!0):!1}function et(A,j){let $=p,re=!1;if(A){$=m.get(j),$===void 0&&($=[],m.set(j,$));const pe=A.textures;if($.length!==pe.length||$[0]!==s.COLOR_ATTACHMENT0){for(let Oe=0,$e=pe.length;Oe<$e;Oe++)$[Oe]=s.COLOR_ATTACHMENT0+Oe;$.length=pe.length,re=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,re=!0);re&&s.drawBuffers($)}function ot(A){return g!==A?(s.useProgram(A),g=A,!0):!1}const wt={[cs]:s.FUNC_ADD,[sT]:s.FUNC_SUBTRACT,[oT]:s.FUNC_REVERSE_SUBTRACT};wt[aT]=s.MIN,wt[cT]=s.MAX;const V={[lT]:s.ZERO,[uT]:s.ONE,[hT]:s.SRC_COLOR,[Fh]:s.SRC_ALPHA,[_T]:s.SRC_ALPHA_SATURATE,[mT]:s.DST_COLOR,[dT]:s.DST_ALPHA,[fT]:s.ONE_MINUS_SRC_COLOR,[Bh]:s.ONE_MINUS_SRC_ALPHA,[gT]:s.ONE_MINUS_DST_COLOR,[pT]:s.ONE_MINUS_DST_ALPHA,[xT]:s.CONSTANT_COLOR,[vT]:s.ONE_MINUS_CONSTANT_COLOR,[yT]:s.CONSTANT_ALPHA,[MT]:s.ONE_MINUS_CONSTANT_ALPHA};function Ot(A,j,$,re,pe,Oe,$e,Gt,jt,_t){if(A===Hr){y===!0&&(Pe(s.BLEND),y=!1);return}if(y===!1&&(Ce(s.BLEND),y=!0),A!==rT){if(A!==M||_t!==F){if((x!==cs||S!==cs)&&(s.blendEquation(s.FUNC_ADD),x=cs,S=cs),_t)switch(A){case ho:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mm:s.blendFunc(s.ONE,s.ONE);break;case Sm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Em:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case ho:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mm:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Sm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Em:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}_=null,T=null,w=null,N=null,I.set(0,0,0),L=0,M=A,F=_t}return}pe=pe||j,Oe=Oe||$,$e=$e||re,(j!==x||pe!==S)&&(s.blendEquationSeparate(wt[j],wt[pe]),x=j,S=pe),($!==_||re!==T||Oe!==w||$e!==N)&&(s.blendFuncSeparate(V[$],V[re],V[Oe],V[$e]),_=$,T=re,w=Oe,N=$e),(Gt.equals(I)===!1||jt!==L)&&(s.blendColor(Gt.r,Gt.g,Gt.b,jt),I.copy(Gt),L=jt),M=A,F=!1}function it(A,j){A.side===fi?Pe(s.CULL_FACE):Ce(s.CULL_FACE);let $=A.side===Un;j&&($=!$),pt($),A.blending===ho&&A.transparent===!1?Ot(Hr):Ot(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),o.setFunc(A.depthFunc),o.setTest(A.depthTest),o.setMask(A.depthWrite),i.setMask(A.colorWrite);const re=A.stencilWrite;c.setTest(re),re&&(c.setMask(A.stencilWriteMask),c.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),c.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),je(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?Ce(s.SAMPLE_ALPHA_TO_COVERAGE):Pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(A){R!==A&&(A?s.frontFace(s.CW):s.frontFace(s.CCW),R=A)}function Ne(A){A!==tT?(Ce(s.CULL_FACE),A!==b&&(A===ym?s.cullFace(s.BACK):A===nT?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pe(s.CULL_FACE),b=A}function Et(A){A!==O&&(se&&s.lineWidth(A),O=A)}function je(A,j,$){A?(Ce(s.POLYGON_OFFSET_FILL),(G!==j||W!==$)&&(s.polygonOffset(j,$),G=j,W=$)):Pe(s.POLYGON_OFFSET_FILL)}function nt(A){A?Ce(s.SCISSOR_TEST):Pe(s.SCISSOR_TEST)}function H(A){A===void 0&&(A=s.TEXTURE0+Z-1),ie!==A&&(s.activeTexture(A),ie=A)}function C(A,j,$){$===void 0&&(ie===null?$=s.TEXTURE0+Z-1:$=ie);let re=ye[$];re===void 0&&(re={type:void 0,texture:void 0},ye[$]=re),(re.type!==A||re.texture!==j)&&(ie!==$&&(s.activeTexture($),ie=$),s.bindTexture(A,j||ge[A]),re.type=A,re.texture=j)}function ee(){const A=ye[ie];A!==void 0&&A.type!==void 0&&(s.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function de(){try{s.compressedTexImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function me(){try{s.compressedTexImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function he(){try{s.texSubImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ze(){try{s.texSubImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ve(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Me(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function tt(){try{s.texStorage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function _e(){try{s.texStorage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ae(){try{s.texImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ct(){try{s.texImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ve(A){dt.equals(A)===!1&&(s.scissor(A.x,A.y,A.z,A.w),dt.copy(A))}function we(A){yt.equals(A)===!1&&(s.viewport(A.x,A.y,A.z,A.w),yt.copy(A))}function Ge(A,j){let $=u.get(j);$===void 0&&($=new WeakMap,u.set(j,$));let re=$.get(A);re===void 0&&(re=s.getUniformBlockIndex(j,A.name),$.set(A,re))}function Ke(A,j){const re=u.get(j).get(A);l.get(j)!==re&&(s.uniformBlockBinding(j,re,A.__bindingPointIndex),l.set(j,re))}function It(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ie=null,ye={},d={},m=new WeakMap,p=[],g=null,y=!1,M=null,x=null,_=null,T=null,S=null,w=null,N=null,I=new Qe(0,0,0),L=0,F=!1,R=null,b=null,O=null,G=null,W=null,dt.set(0,0,s.canvas.width,s.canvas.height),yt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),o.reset(),c.reset()}return{buffers:{color:i,depth:o,stencil:c},enable:Ce,disable:Pe,bindFramebuffer:Ye,drawBuffers:et,useProgram:ot,setBlending:Ot,setMaterial:it,setFlipSided:pt,setCullFace:Ne,setLineWidth:Et,setPolygonOffset:je,setScissorTest:nt,activeTexture:H,bindTexture:C,unbindTexture:ee,compressedTexImage2D:de,compressedTexImage3D:me,texImage2D:Ae,texImage3D:ct,updateUBOMapping:Ge,uniformBlockBinding:Ke,texStorage2D:tt,texStorage3D:_e,texSubImage2D:he,texSubImage3D:ze,compressedTexSubImage2D:ve,compressedTexSubImage3D:Me,scissor:Ve,viewport:we,reset:It}}function vg(s,e,t,n){const i=uC(n);switch(t){case x_:return s*e;case y_:return s*e;case M_:return s*e*2;case Bf:return s*e/i.components*i.byteLength;case zf:return s*e/i.components*i.byteLength;case S_:return s*e*2/i.components*i.byteLength;case Hf:return s*e*2/i.components*i.byteLength;case v_:return s*e*3/i.components*i.byteLength;case di:return s*e*4/i.components*i.byteLength;case Vf:return s*e*4/i.components*i.byteLength;case cl:case ll:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ul:case hl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kh:case Wh:return Math.max(s,16)*Math.max(e,8)/4;case Vh:case Gh:return Math.max(s,8)*Math.max(e,8)/2;case Xh:case qh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Yh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case jh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case $h:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ef:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case tf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case nf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case rf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case sf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case of:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case af:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case cf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case fl:case lf:case uf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case E_:case hf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ff:case df:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uC(s){switch(s){case pr:case m_:return{byteLength:1,components:1};case _a:case g_:case Ma:return{byteLength:2,components:1};case Of:case Ff:return{byteLength:2,components:4};case fs:case Nf:case Li:return{byteLength:4,components:1};case __:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function hC(s,e,t,n,i,o,c){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Be,d=new WeakMap;let m;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(H,C){return g?new OffscreenCanvas(H,C):ya("canvas")}function M(H,C,ee){let de=1;const me=nt(H);if((me.width>ee||me.height>ee)&&(de=ee/Math.max(me.width,me.height)),de<1)if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap||typeof VideoFrame<"u"&&H instanceof VideoFrame){const he=Math.floor(de*me.width),ze=Math.floor(de*me.height);m===void 0&&(m=y(he,ze));const ve=C?y(he,ze):m;return ve.width=he,ve.height=ze,ve.getContext("2d").drawImage(H,0,0,he,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+he+"x"+ze+")."),ve}else return"data"in H&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),H;return H}function x(H){return H.generateMipmaps&&H.minFilter!==Dn&&H.minFilter!==Jn}function _(H){s.generateMipmap(H)}function T(H,C,ee,de,me=!1){if(H!==null){if(s[H]!==void 0)return s[H];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let he=C;if(C===s.RED&&(ee===s.FLOAT&&(he=s.R32F),ee===s.HALF_FLOAT&&(he=s.R16F),ee===s.UNSIGNED_BYTE&&(he=s.R8)),C===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(he=s.R8UI),ee===s.UNSIGNED_SHORT&&(he=s.R16UI),ee===s.UNSIGNED_INT&&(he=s.R32UI),ee===s.BYTE&&(he=s.R8I),ee===s.SHORT&&(he=s.R16I),ee===s.INT&&(he=s.R32I)),C===s.RG&&(ee===s.FLOAT&&(he=s.RG32F),ee===s.HALF_FLOAT&&(he=s.RG16F),ee===s.UNSIGNED_BYTE&&(he=s.RG8)),C===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(he=s.RG8UI),ee===s.UNSIGNED_SHORT&&(he=s.RG16UI),ee===s.UNSIGNED_INT&&(he=s.RG32UI),ee===s.BYTE&&(he=s.RG8I),ee===s.SHORT&&(he=s.RG16I),ee===s.INT&&(he=s.RG32I)),C===s.RGB&&ee===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),C===s.RGBA){const ze=me?_l:bt.getTransfer(de);ee===s.FLOAT&&(he=s.RGBA32F),ee===s.HALF_FLOAT&&(he=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(he=ze===Ht?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function S(H,C){let ee;return H?C===null||C===fs||C===vo?ee=s.DEPTH24_STENCIL8:C===Li?ee=s.DEPTH32F_STENCIL8:C===_a&&(ee=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===fs||C===vo?ee=s.DEPTH_COMPONENT24:C===Li?ee=s.DEPTH_COMPONENT32F:C===_a&&(ee=s.DEPTH_COMPONENT16),ee}function w(H,C){return x(H)===!0||H.isFramebufferTexture&&H.minFilter!==Dn&&H.minFilter!==Jn?Math.log2(Math.max(C.width,C.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?C.mipmaps.length:1}function N(H){const C=H.target;C.removeEventListener("dispose",N),L(C),C.isVideoTexture&&d.delete(C)}function I(H){const C=H.target;C.removeEventListener("dispose",I),R(C)}function L(H){const C=n.get(H);if(C.__webglInit===void 0)return;const ee=H.source,de=p.get(ee);if(de){const me=de[C.__cacheKey];me.usedTimes--,me.usedTimes===0&&F(H),Object.keys(de).length===0&&p.delete(ee)}n.remove(H)}function F(H){const C=n.get(H);s.deleteTexture(C.__webglTexture);const ee=H.source,de=p.get(ee);delete de[C.__cacheKey],c.memory.textures--}function R(H){const C=n.get(H);if(H.depthTexture&&H.depthTexture.dispose(),H.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(C.__webglFramebuffer[de]))for(let me=0;me<C.__webglFramebuffer[de].length;me++)s.deleteFramebuffer(C.__webglFramebuffer[de][me]);else s.deleteFramebuffer(C.__webglFramebuffer[de]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[de])}else{if(Array.isArray(C.__webglFramebuffer))for(let de=0;de<C.__webglFramebuffer.length;de++)s.deleteFramebuffer(C.__webglFramebuffer[de]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let de=0;de<C.__webglColorRenderbuffer.length;de++)C.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[de]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const ee=H.textures;for(let de=0,me=ee.length;de<me;de++){const he=n.get(ee[de]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),c.memory.textures--),n.remove(ee[de])}n.remove(H)}let b=0;function O(){b=0}function G(){const H=b;return H>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+H+" texture units while this GPU supports only "+i.maxTextures),b+=1,H}function W(H){const C=[];return C.push(H.wrapS),C.push(H.wrapT),C.push(H.wrapR||0),C.push(H.magFilter),C.push(H.minFilter),C.push(H.anisotropy),C.push(H.internalFormat),C.push(H.format),C.push(H.type),C.push(H.generateMipmaps),C.push(H.premultiplyAlpha),C.push(H.flipY),C.push(H.unpackAlignment),C.push(H.colorSpace),C.join()}function Z(H,C){const ee=n.get(H);if(H.isVideoTexture&&Et(H),H.isRenderTargetTexture===!1&&H.version>0&&ee.__version!==H.version){const de=H.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(ee,H,C);return}}t.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+C)}function se(H,C){const ee=n.get(H);if(H.version>0&&ee.__version!==H.version){yt(ee,H,C);return}t.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+C)}function J(H,C){const ee=n.get(H);if(H.version>0&&ee.__version!==H.version){yt(ee,H,C);return}t.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+C)}function ue(H,C){const ee=n.get(H);if(H.version>0&&ee.__version!==H.version){ae(ee,H,C);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+C)}const ie={[xo]:s.REPEAT,[Fr]:s.CLAMP_TO_EDGE,[gl]:s.MIRRORED_REPEAT},ye={[Dn]:s.NEAREST,[p_]:s.NEAREST_MIPMAP_NEAREST,[la]:s.NEAREST_MIPMAP_LINEAR,[Jn]:s.LINEAR,[al]:s.LINEAR_MIPMAP_NEAREST,[hr]:s.LINEAR_MIPMAP_LINEAR},Re={[WT]:s.NEVER,[jT]:s.ALWAYS,[XT]:s.LESS,[A_]:s.LEQUAL,[qT]:s.EQUAL,[ZT]:s.GEQUAL,[YT]:s.GREATER,[KT]:s.NOTEQUAL};function be(H,C){if(C.type===Li&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Jn||C.magFilter===al||C.magFilter===la||C.magFilter===hr||C.minFilter===Jn||C.minFilter===al||C.minFilter===la||C.minFilter===hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(H,s.TEXTURE_WRAP_S,ie[C.wrapS]),s.texParameteri(H,s.TEXTURE_WRAP_T,ie[C.wrapT]),(H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY)&&s.texParameteri(H,s.TEXTURE_WRAP_R,ie[C.wrapR]),s.texParameteri(H,s.TEXTURE_MAG_FILTER,ye[C.magFilter]),s.texParameteri(H,s.TEXTURE_MIN_FILTER,ye[C.minFilter]),C.compareFunction&&(s.texParameteri(H,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(H,s.TEXTURE_COMPARE_FUNC,Re[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Dn||C.minFilter!==la&&C.minFilter!==hr||C.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(H,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function dt(H,C){let ee=!1;H.__webglInit===void 0&&(H.__webglInit=!0,C.addEventListener("dispose",N));const de=C.source;let me=p.get(de);me===void 0&&(me={},p.set(de,me));const he=W(C);if(he!==H.__cacheKey){me[he]===void 0&&(me[he]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,ee=!0),me[he].usedTimes++;const ze=me[H.__cacheKey];ze!==void 0&&(me[H.__cacheKey].usedTimes--,ze.usedTimes===0&&F(C)),H.__cacheKey=he,H.__webglTexture=me[he].texture}return ee}function yt(H,C,ee){let de=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(de=s.TEXTURE_3D);const me=dt(H,C),he=C.source;t.bindTexture(de,H.__webglTexture,s.TEXTURE0+ee);const ze=n.get(he);if(he.version!==ze.__version||me===!0){t.activeTexture(s.TEXTURE0+ee);const ve=bt.getPrimaries(bt.workingColorSpace),Me=C.colorSpace===Or?null:bt.getPrimaries(C.colorSpace),tt=C.colorSpace===Or||ve===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let _e=M(C.image,!1,i.maxTextureSize);_e=je(C,_e);const Ae=o.convert(C.format,C.colorSpace),ct=o.convert(C.type);let Ve=T(C.internalFormat,Ae,ct,C.colorSpace,C.isVideoTexture);be(de,C);let we;const Ge=C.mipmaps,Ke=C.isVideoTexture!==!0,It=ze.__version===void 0||me===!0,A=he.dataReady,j=w(C,_e);if(C.isDepthTexture)Ve=S(C.format===yo,C.type),It&&(Ke?t.texStorage2D(s.TEXTURE_2D,1,Ve,_e.width,_e.height):t.texImage2D(s.TEXTURE_2D,0,Ve,_e.width,_e.height,0,Ae,ct,null));else if(C.isDataTexture)if(Ge.length>0){Ke&&It&&t.texStorage2D(s.TEXTURE_2D,j,Ve,Ge[0].width,Ge[0].height);for(let $=0,re=Ge.length;$<re;$++)we=Ge[$],Ke?A&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,we.width,we.height,Ae,ct,we.data):t.texImage2D(s.TEXTURE_2D,$,Ve,we.width,we.height,0,Ae,ct,we.data);C.generateMipmaps=!1}else Ke?(It&&t.texStorage2D(s.TEXTURE_2D,j,Ve,_e.width,_e.height),A&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,_e.width,_e.height,Ae,ct,_e.data)):t.texImage2D(s.TEXTURE_2D,0,Ve,_e.width,_e.height,0,Ae,ct,_e.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Ke&&It&&t.texStorage3D(s.TEXTURE_2D_ARRAY,j,Ve,Ge[0].width,Ge[0].height,_e.depth);for(let $=0,re=Ge.length;$<re;$++)if(we=Ge[$],C.format!==di)if(Ae!==null)if(Ke){if(A)if(C.layerUpdates.size>0){const pe=vg(we.width,we.height,C.format,C.type);for(const Oe of C.layerUpdates){const $e=we.data.subarray(Oe*pe/we.data.BYTES_PER_ELEMENT,(Oe+1)*pe/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,Oe,we.width,we.height,1,Ae,$e,0,0)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,we.width,we.height,_e.depth,Ae,we.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,Ve,we.width,we.height,_e.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?A&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,we.width,we.height,_e.depth,Ae,ct,we.data):t.texImage3D(s.TEXTURE_2D_ARRAY,$,Ve,we.width,we.height,_e.depth,0,Ae,ct,we.data)}else{Ke&&It&&t.texStorage2D(s.TEXTURE_2D,j,Ve,Ge[0].width,Ge[0].height);for(let $=0,re=Ge.length;$<re;$++)we=Ge[$],C.format!==di?Ae!==null?Ke?A&&t.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,we.width,we.height,Ae,we.data):t.compressedTexImage2D(s.TEXTURE_2D,$,Ve,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?A&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,we.width,we.height,Ae,ct,we.data):t.texImage2D(s.TEXTURE_2D,$,Ve,we.width,we.height,0,Ae,ct,we.data)}else if(C.isDataArrayTexture)if(Ke){if(It&&t.texStorage3D(s.TEXTURE_2D_ARRAY,j,Ve,_e.width,_e.height,_e.depth),A)if(C.layerUpdates.size>0){const $=vg(_e.width,_e.height,C.format,C.type);for(const re of C.layerUpdates){const pe=_e.data.subarray(re*$/_e.data.BYTES_PER_ELEMENT,(re+1)*$/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,re,_e.width,_e.height,1,Ae,ct,pe)}C.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ae,ct,_e.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ve,_e.width,_e.height,_e.depth,0,Ae,ct,_e.data);else if(C.isData3DTexture)Ke?(It&&t.texStorage3D(s.TEXTURE_3D,j,Ve,_e.width,_e.height,_e.depth),A&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ae,ct,_e.data)):t.texImage3D(s.TEXTURE_3D,0,Ve,_e.width,_e.height,_e.depth,0,Ae,ct,_e.data);else if(C.isFramebufferTexture){if(It)if(Ke)t.texStorage2D(s.TEXTURE_2D,j,Ve,_e.width,_e.height);else{let $=_e.width,re=_e.height;for(let pe=0;pe<j;pe++)t.texImage2D(s.TEXTURE_2D,pe,Ve,$,re,0,Ae,ct,null),$>>=1,re>>=1}}else if(Ge.length>0){if(Ke&&It){const $=nt(Ge[0]);t.texStorage2D(s.TEXTURE_2D,j,Ve,$.width,$.height)}for(let $=0,re=Ge.length;$<re;$++)we=Ge[$],Ke?A&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,Ae,ct,we):t.texImage2D(s.TEXTURE_2D,$,Ve,Ae,ct,we);C.generateMipmaps=!1}else if(Ke){if(It){const $=nt(_e);t.texStorage2D(s.TEXTURE_2D,j,Ve,$.width,$.height)}A&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,ct,_e)}else t.texImage2D(s.TEXTURE_2D,0,Ve,Ae,ct,_e);x(C)&&_(de),ze.__version=he.version,C.onUpdate&&C.onUpdate(C)}H.__version=C.version}function ae(H,C,ee){if(C.image.length!==6)return;const de=dt(H,C),me=C.source;t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+ee);const he=n.get(me);if(me.version!==he.__version||de===!0){t.activeTexture(s.TEXTURE0+ee);const ze=bt.getPrimaries(bt.workingColorSpace),ve=C.colorSpace===Or?null:bt.getPrimaries(C.colorSpace),Me=C.colorSpace===Or||ze===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const tt=C.isCompressedTexture||C.image[0].isCompressedTexture,_e=C.image[0]&&C.image[0].isDataTexture,Ae=[];for(let re=0;re<6;re++)!tt&&!_e?Ae[re]=M(C.image[re],!0,i.maxCubemapSize):Ae[re]=_e?C.image[re].image:C.image[re],Ae[re]=je(C,Ae[re]);const ct=Ae[0],Ve=o.convert(C.format,C.colorSpace),we=o.convert(C.type),Ge=T(C.internalFormat,Ve,we,C.colorSpace),Ke=C.isVideoTexture!==!0,It=he.__version===void 0||de===!0,A=me.dataReady;let j=w(C,ct);be(s.TEXTURE_CUBE_MAP,C);let $;if(tt){Ke&&It&&t.texStorage2D(s.TEXTURE_CUBE_MAP,j,Ge,ct.width,ct.height);for(let re=0;re<6;re++){$=Ae[re].mipmaps;for(let pe=0;pe<$.length;pe++){const Oe=$[pe];C.format!==di?Ve!==null?Ke?A&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe,0,0,Oe.width,Oe.height,Ve,Oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe,Ge,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?A&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe,0,0,Oe.width,Oe.height,Ve,we,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe,Ge,Oe.width,Oe.height,0,Ve,we,Oe.data)}}}else{if($=C.mipmaps,Ke&&It){$.length>0&&j++;const re=nt(Ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,j,Ge,re.width,re.height)}for(let re=0;re<6;re++)if(_e){Ke?A&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ae[re].width,Ae[re].height,Ve,we,Ae[re].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ge,Ae[re].width,Ae[re].height,0,Ve,we,Ae[re].data);for(let pe=0;pe<$.length;pe++){const $e=$[pe].image[re].image;Ke?A&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe+1,0,0,$e.width,$e.height,Ve,we,$e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe+1,Ge,$e.width,$e.height,0,Ve,we,$e.data)}}else{Ke?A&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ve,we,Ae[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ge,Ve,we,Ae[re]);for(let pe=0;pe<$.length;pe++){const Oe=$[pe];Ke?A&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe+1,0,0,Ve,we,Oe.image[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe+1,Ge,Ve,we,Oe.image[re])}}}x(C)&&_(s.TEXTURE_CUBE_MAP),he.__version=me.version,C.onUpdate&&C.onUpdate(C)}H.__version=C.version}function ge(H,C,ee,de,me,he){const ze=o.convert(ee.format,ee.colorSpace),ve=o.convert(ee.type),Me=T(ee.internalFormat,ze,ve,ee.colorSpace);if(!n.get(C).__hasExternalTextures){const _e=Math.max(1,C.width>>he),Ae=Math.max(1,C.height>>he);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,he,Me,_e,Ae,C.depth,0,ze,ve,null):t.texImage2D(me,he,Me,_e,Ae,0,ze,ve,null)}t.bindFramebuffer(s.FRAMEBUFFER,H),Ne(C)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,me,n.get(ee).__webglTexture,0,pt(C)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,me,n.get(ee).__webglTexture,he),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(H,C,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,H),C.depthBuffer){const de=C.depthTexture,me=de&&de.isDepthTexture?de.type:null,he=S(C.stencilBuffer,me),ze=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=pt(C);Ne(C)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,he,C.width,C.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,he,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,he,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ze,s.RENDERBUFFER,H)}else{const de=C.textures;for(let me=0;me<de.length;me++){const he=de[me],ze=o.convert(he.format,he.colorSpace),ve=o.convert(he.type),Me=T(he.internalFormat,ze,ve,he.colorSpace),tt=pt(C);ee&&Ne(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,Me,C.width,C.height):Ne(C)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt,Me,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Me,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(H,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,H),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),Z(C.depthTexture,0);const de=n.get(C.depthTexture).__webglTexture,me=pt(C);if(C.depthTexture.format===fo)Ne(C)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0);else if(C.depthTexture.format===yo)Ne(C)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function Ye(H){const C=n.get(H),ee=H.isWebGLCubeRenderTarget===!0;if(H.depthTexture&&!C.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Pe(C.__webglFramebuffer,H)}else if(ee){C.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[de]),C.__webglDepthbuffer[de]=s.createRenderbuffer(),Ce(C.__webglDepthbuffer[de],H,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=s.createRenderbuffer(),Ce(C.__webglDepthbuffer,H,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function et(H,C,ee){const de=n.get(H);C!==void 0&&ge(de.__webglFramebuffer,H,H.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&Ye(H)}function ot(H){const C=H.texture,ee=n.get(H),de=n.get(C);H.addEventListener("dispose",I);const me=H.textures,he=H.isWebGLCubeRenderTarget===!0,ze=me.length>1;if(ze||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=C.version,c.memory.textures++),he){ee.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(C.mipmaps&&C.mipmaps.length>0){ee.__webglFramebuffer[ve]=[];for(let Me=0;Me<C.mipmaps.length;Me++)ee.__webglFramebuffer[ve][Me]=s.createFramebuffer()}else ee.__webglFramebuffer[ve]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){ee.__webglFramebuffer=[];for(let ve=0;ve<C.mipmaps.length;ve++)ee.__webglFramebuffer[ve]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(ze)for(let ve=0,Me=me.length;ve<Me;ve++){const tt=n.get(me[ve]);tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture(),c.memory.textures++)}if(H.samples>0&&Ne(H)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let ve=0;ve<me.length;ve++){const Me=me[ve];ee.__webglColorRenderbuffer[ve]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[ve]);const tt=o.convert(Me.format,Me.colorSpace),_e=o.convert(Me.type),Ae=T(Me.internalFormat,tt,_e,Me.colorSpace,H.isXRRenderTarget===!0),ct=pt(H);s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,Ae,H.width,H.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,ee.__webglColorRenderbuffer[ve])}s.bindRenderbuffer(s.RENDERBUFFER,null),H.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),Ce(ee.__webglDepthRenderbuffer,H,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),be(s.TEXTURE_CUBE_MAP,C);for(let ve=0;ve<6;ve++)if(C.mipmaps&&C.mipmaps.length>0)for(let Me=0;Me<C.mipmaps.length;Me++)ge(ee.__webglFramebuffer[ve][Me],H,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Me);else ge(ee.__webglFramebuffer[ve],H,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);x(C)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let ve=0,Me=me.length;ve<Me;ve++){const tt=me[ve],_e=n.get(tt);t.bindTexture(s.TEXTURE_2D,_e.__webglTexture),be(s.TEXTURE_2D,tt),ge(ee.__webglFramebuffer,H,tt,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,0),x(tt)&&_(s.TEXTURE_2D)}t.unbindTexture()}else{let ve=s.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(ve=H.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,de.__webglTexture),be(ve,C),C.mipmaps&&C.mipmaps.length>0)for(let Me=0;Me<C.mipmaps.length;Me++)ge(ee.__webglFramebuffer[Me],H,C,s.COLOR_ATTACHMENT0,ve,Me);else ge(ee.__webglFramebuffer,H,C,s.COLOR_ATTACHMENT0,ve,0);x(C)&&_(ve),t.unbindTexture()}H.depthBuffer&&Ye(H)}function wt(H){const C=H.textures;for(let ee=0,de=C.length;ee<de;ee++){const me=C[ee];if(x(me)){const he=H.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ze=n.get(me).__webglTexture;t.bindTexture(he,ze),_(he),t.unbindTexture()}}}const V=[],Ot=[];function it(H){if(H.samples>0){if(Ne(H)===!1){const C=H.textures,ee=H.width,de=H.height;let me=s.COLOR_BUFFER_BIT;const he=H.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ze=n.get(H),ve=C.length>1;if(ve)for(let Me=0;Me<C.length;Me++)t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Me=0;Me<C.length;Me++){if(H.resolveDepthBuffer&&(H.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),H.stencilBuffer&&H.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),ve){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ze.__webglColorRenderbuffer[Me]);const tt=n.get(C[Me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,tt,0)}s.blitFramebuffer(0,0,ee,de,0,0,ee,de,me,s.NEAREST),u===!0&&(V.length=0,Ot.length=0,V.push(s.COLOR_ATTACHMENT0+Me),H.depthBuffer&&H.resolveDepthBuffer===!1&&(V.push(he),Ot.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ot)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,V))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ve)for(let Me=0;Me<C.length;Me++){t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,ze.__webglColorRenderbuffer[Me]);const tt=n.get(C[Me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,tt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(H.depthBuffer&&H.resolveDepthBuffer===!1&&u){const C=H.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function pt(H){return Math.min(i.maxSamples,H.samples)}function Ne(H){const C=n.get(H);return H.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Et(H){const C=c.render.frame;d.get(H)!==C&&(d.set(H,C),H.update())}function je(H,C){const ee=H.colorSpace,de=H.format,me=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||ee!==vn&&ee!==Or&&(bt.getTransfer(ee)===Ht?(de!==di||me!==pr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),C}function nt(H){return typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement?(h.width=H.naturalWidth||H.width,h.height=H.naturalHeight||H.height):typeof VideoFrame<"u"&&H instanceof VideoFrame?(h.width=H.displayWidth,h.height=H.displayHeight):(h.width=H.width,h.height=H.height),h}this.allocateTextureUnit=G,this.resetTextureUnits=O,this.setTexture2D=Z,this.setTexture2DArray=se,this.setTexture3D=J,this.setTextureCube=ue,this.rebindTextures=et,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ne}function fC(s,e){function t(n,i=Or){let o;const c=bt.getTransfer(i);if(n===pr)return s.UNSIGNED_BYTE;if(n===Of)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ff)return s.UNSIGNED_SHORT_5_5_5_1;if(n===__)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===m_)return s.BYTE;if(n===g_)return s.SHORT;if(n===_a)return s.UNSIGNED_SHORT;if(n===Nf)return s.INT;if(n===fs)return s.UNSIGNED_INT;if(n===Li)return s.FLOAT;if(n===Ma)return s.HALF_FLOAT;if(n===x_)return s.ALPHA;if(n===v_)return s.RGB;if(n===di)return s.RGBA;if(n===y_)return s.LUMINANCE;if(n===M_)return s.LUMINANCE_ALPHA;if(n===fo)return s.DEPTH_COMPONENT;if(n===yo)return s.DEPTH_STENCIL;if(n===Bf)return s.RED;if(n===zf)return s.RED_INTEGER;if(n===S_)return s.RG;if(n===Hf)return s.RG_INTEGER;if(n===Vf)return s.RGBA_INTEGER;if(n===cl||n===ll||n===ul||n===hl)if(c===Ht)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===cl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ll)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ul)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===cl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ll)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ul)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vh||n===kh||n===Gh||n===Wh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Vh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xh||n===qh||n===Yh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Xh||n===qh)return c===Ht?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Yh)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Kh||n===Zh||n===jh||n===$h||n===Jh||n===Qh||n===ef||n===tf||n===nf||n===rf||n===sf||n===of||n===af||n===cf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Kh)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zh)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jh)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$h)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jh)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qh)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ef)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tf)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nf)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rf)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sf)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===of)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===af)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cf)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fl||n===lf||n===uf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===fl)return c===Ht?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===E_||n===hf||n===ff||n===df)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===fl)return o.COMPRESSED_RED_RGTC1_EXT;if(n===hf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ff)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===df)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vo?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class dC extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hs extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pC={type:"move"};class ph{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,o=null,c=null;const l=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,n),_=this._getHandJoint(h,M);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const d=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],p=d.position.distanceTo(m.position),g=.02,y=.005;h.inputState.pinching&&p>g+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=g-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(pC)))}return l!==null&&(l.visible=i!==null),u!==null&&(u.visible=o!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new hs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const mC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _C{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new pn,o=e.properties.get(i);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new kr({vertexShader:mC,fragmentShader:gC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dn(new Rl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xC extends ps{constructor(e,t){super();const n=this;let i=null,o=1,c=null,l="local-floor",u=1,h=null,d=null,m=null,p=null,g=null,y=null;const M=new _C,x=t.getContextAttributes();let _=null,T=null;const S=[],w=[],N=new Be;let I=null;const L=new Ln;L.layers.enable(1),L.viewport=new Dt;const F=new Ln;F.layers.enable(2),F.viewport=new Dt;const R=[L,F],b=new dC;b.layers.enable(1),b.layers.enable(2);let O=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ge=S[ae];return ge===void 0&&(ge=new ph,S[ae]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ae){let ge=S[ae];return ge===void 0&&(ge=new ph,S[ae]=ge),ge.getGripSpace()},this.getHand=function(ae){let ge=S[ae];return ge===void 0&&(ge=new ph,S[ae]=ge),ge.getHandSpace()};function W(ae){const ge=w.indexOf(ae.inputSource);if(ge===-1)return;const Ce=S[ge];Ce!==void 0&&(Ce.update(ae.inputSource,ae.frame,h||c),Ce.dispatchEvent({type:ae.type,data:ae.inputSource}))}function Z(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",se);for(let ae=0;ae<S.length;ae++){const ge=w[ae];ge!==null&&(w[ae]=null,S[ae].disconnect(ge))}O=null,G=null,M.reset(),e.setRenderTarget(_),g=null,p=null,m=null,i=null,T=null,yt.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){o=ae,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){l=ae,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(ae){h=ae},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return m},this.getFrame=function(){return y},this.getSession=function(){return i},this.setSession=async function(ae){if(i=ae,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",se),x.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(N),i.renderState.layers===void 0){const ge={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};g=new XRWebGLLayer(i,t,ge),i.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),T=new ds(g.framebufferWidth,g.framebufferHeight,{format:di,type:pr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ge=null,Ce=null,Pe=null;x.depth&&(Pe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=x.stencil?yo:fo,Ce=x.stencil?vo:fs);const Ye={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:o};m=new XRWebGLBinding(i,t),p=m.createProjectionLayer(Ye),i.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),T=new ds(p.textureWidth,p.textureHeight,{format:di,type:pr,depthTexture:new F_(p.textureWidth,p.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(u),h=null,c=await i.requestReferenceSpace(l),yt.setContext(i),yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function se(ae){for(let ge=0;ge<ae.removed.length;ge++){const Ce=ae.removed[ge],Pe=w.indexOf(Ce);Pe>=0&&(w[Pe]=null,S[Pe].disconnect(Ce))}for(let ge=0;ge<ae.added.length;ge++){const Ce=ae.added[ge];let Pe=w.indexOf(Ce);if(Pe===-1){for(let et=0;et<S.length;et++)if(et>=w.length){w.push(Ce),Pe=et;break}else if(w[et]===null){w[et]=Ce,Pe=et;break}if(Pe===-1)break}const Ye=S[Pe];Ye&&Ye.connect(Ce)}}const J=new z,ue=new z;function ie(ae,ge,Ce){J.setFromMatrixPosition(ge.matrixWorld),ue.setFromMatrixPosition(Ce.matrixWorld);const Pe=J.distanceTo(ue),Ye=ge.projectionMatrix.elements,et=Ce.projectionMatrix.elements,ot=Ye[14]/(Ye[10]-1),wt=Ye[14]/(Ye[10]+1),V=(Ye[9]+1)/Ye[5],Ot=(Ye[9]-1)/Ye[5],it=(Ye[8]-1)/Ye[0],pt=(et[8]+1)/et[0],Ne=ot*it,Et=ot*pt,je=Pe/(-it+pt),nt=je*-it;ge.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(nt),ae.translateZ(je),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert();const H=ot+je,C=wt+je,ee=Ne-nt,de=Et+(Pe-nt),me=V*wt/C*H,he=Ot*wt/C*H;ae.projectionMatrix.makePerspective(ee,de,me,he,H,C),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}function ye(ae,ge){ge===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ge.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(i===null)return;M.texture!==null&&(ae.near=M.depthNear,ae.far=M.depthFar),b.near=F.near=L.near=ae.near,b.far=F.far=L.far=ae.far,(O!==b.near||G!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),O=b.near,G=b.far,L.near=O,L.far=G,F.near=O,F.far=G,L.updateProjectionMatrix(),F.updateProjectionMatrix(),ae.updateProjectionMatrix());const ge=ae.parent,Ce=b.cameras;ye(b,ge);for(let Pe=0;Pe<Ce.length;Pe++)ye(Ce[Pe],ge);Ce.length===2?ie(b,L,F):b.projectionMatrix.copy(L.projectionMatrix),Re(ae,b,ge)};function Re(ae,ge,Ce){Ce===null?ae.matrix.copy(ge.matrixWorld):(ae.matrix.copy(Ce.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ge.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ge.projectionMatrix),ae.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Mo*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&g===null))return u},this.setFoveation=function(ae){u=ae,p!==null&&(p.fixedFoveation=ae),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ae)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(b)};let be=null;function dt(ae,ge){if(d=ge.getViewerPose(h||c),y=ge,d!==null){const Ce=d.views;g!==null&&(e.setRenderTargetFramebuffer(T,g.framebuffer),e.setRenderTarget(T));let Pe=!1;Ce.length!==b.cameras.length&&(b.cameras.length=0,Pe=!0);for(let et=0;et<Ce.length;et++){const ot=Ce[et];let wt=null;if(g!==null)wt=g.getViewport(ot);else{const Ot=m.getViewSubImage(p,ot);wt=Ot.viewport,et===0&&(e.setRenderTargetTextures(T,Ot.colorTexture,p.ignoreDepthValues?void 0:Ot.depthStencilTexture),e.setRenderTarget(T))}let V=R[et];V===void 0&&(V=new Ln,V.layers.enable(et),V.viewport=new Dt,R[et]=V),V.matrix.fromArray(ot.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(ot.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(wt.x,wt.y,wt.width,wt.height),et===0&&(b.matrix.copy(V.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Pe===!0&&b.cameras.push(V)}const Ye=i.enabledFeatures;if(Ye&&Ye.includes("depth-sensing")){const et=m.getDepthInformation(Ce[0]);et&&et.isValid&&et.texture&&M.init(e,et,i.renderState)}}for(let Ce=0;Ce<S.length;Ce++){const Pe=w[Ce],Ye=S[Ce];Pe!==null&&Ye!==void 0&&Ye.update(Pe,ge,h||c)}be&&be(ae,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),y=null}const yt=new O_;yt.setAnimationLoop(dt),this.setAnimationLoop=function(ae){be=ae},this.dispose=function(){}}}const ss=new Ni,vC=new qe;function yC(s,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function n(x,_){_.color.getRGB(x.fogColor.value,D_(s)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function i(x,_,T,S,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(x,_):_.isMeshToonMaterial?(o(x,_),m(x,_)):_.isMeshPhongMaterial?(o(x,_),d(x,_)):_.isMeshStandardMaterial?(o(x,_),p(x,_),_.isMeshPhysicalMaterial&&g(x,_,w)):_.isMeshMatcapMaterial?(o(x,_),y(x,_)):_.isMeshDepthMaterial?o(x,_):_.isMeshDistanceMaterial?(o(x,_),M(x,_)):_.isMeshNormalMaterial?o(x,_):_.isLineBasicMaterial?(c(x,_),_.isLineDashedMaterial&&l(x,_)):_.isPointsMaterial?u(x,_,T,S):_.isSpriteMaterial?h(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Un&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Un&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const T=e.get(_),S=T.envMap,w=T.envMapRotation;S&&(x.envMap.value=S,ss.copy(w),ss.x*=-1,ss.y*=-1,ss.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),x.envMapRotation.value.setFromMatrix4(vC.makeRotationFromEuler(ss)),x.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function c(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function l(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function u(x,_,T,S){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*T,x.scale.value=S*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function d(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function m(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function p(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function g(x,_,T){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Un&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function y(x,_){_.matcap&&(x.matcap.value=_.matcap)}function M(x,_){const T=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function MC(s,e,t,n){let i={},o={},c=[];const l=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function u(T,S){const w=S.program;n.uniformBlockBinding(T,w)}function h(T,S){let w=i[T.id];w===void 0&&(y(T),w=d(T),i[T.id]=w,T.addEventListener("dispose",x));const N=S.program;n.updateUBOMapping(T,N);const I=e.render.frame;o[T.id]!==I&&(p(T),o[T.id]=I)}function d(T){const S=m();T.__bindingPointIndex=S;const w=s.createBuffer(),N=T.__size,I=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,N,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,w),w}function m(){for(let T=0;T<l;T++)if(c.indexOf(T)===-1)return c.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(T){const S=i[T.id],w=T.uniforms,N=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let I=0,L=w.length;I<L;I++){const F=Array.isArray(w[I])?w[I]:[w[I]];for(let R=0,b=F.length;R<b;R++){const O=F[R];if(g(O,I,R,N)===!0){const G=O.__offset,W=Array.isArray(O.value)?O.value:[O.value];let Z=0;for(let se=0;se<W.length;se++){const J=W[se],ue=M(J);typeof J=="number"||typeof J=="boolean"?(O.__data[0]=J,s.bufferSubData(s.UNIFORM_BUFFER,G+Z,O.__data)):J.isMatrix3?(O.__data[0]=J.elements[0],O.__data[1]=J.elements[1],O.__data[2]=J.elements[2],O.__data[3]=0,O.__data[4]=J.elements[3],O.__data[5]=J.elements[4],O.__data[6]=J.elements[5],O.__data[7]=0,O.__data[8]=J.elements[6],O.__data[9]=J.elements[7],O.__data[10]=J.elements[8],O.__data[11]=0):(J.toArray(O.__data,Z),Z+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function g(T,S,w,N){const I=T.value,L=S+"_"+w;if(N[L]===void 0)return typeof I=="number"||typeof I=="boolean"?N[L]=I:N[L]=I.clone(),!0;{const F=N[L];if(typeof I=="number"||typeof I=="boolean"){if(F!==I)return N[L]=I,!0}else if(F.equals(I)===!1)return F.copy(I),!0}return!1}function y(T){const S=T.uniforms;let w=0;const N=16;for(let L=0,F=S.length;L<F;L++){const R=Array.isArray(S[L])?S[L]:[S[L]];for(let b=0,O=R.length;b<O;b++){const G=R[b],W=Array.isArray(G.value)?G.value:[G.value];for(let Z=0,se=W.length;Z<se;Z++){const J=W[Z],ue=M(J),ie=w%N;ie!==0&&N-ie<ue.boundary&&(w+=N-ie),G.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=w,w+=ue.storage}}}const I=w%N;return I>0&&(w+=N-I),T.__size=w,T.__cache={},this}function M(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function x(T){const S=T.target;S.removeEventListener("dispose",x);const w=c.indexOf(S.__bindingPointIndex);c.splice(w,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete o[S.id]}function _(){for(const T in i)s.deleteBuffer(i[T]);c=[],i={},o={}}return{bind:u,update:h,dispose:_}}class SC{constructor(e={}){const{canvas:t=dA(),context:n=null,depth:i=!0,stencil:o=!1,alpha:c=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=c;const g=new Uint32Array(4),y=new Int32Array(4);let M=null,x=null;const _=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pn,this.toneMapping=Vr,this.toneMappingExposure=1;const S=this;let w=!1,N=0,I=0,L=null,F=-1,R=null;const b=new Dt,O=new Dt;let G=null;const W=new Qe(0);let Z=0,se=t.width,J=t.height,ue=1,ie=null,ye=null;const Re=new Dt(0,0,se,J),be=new Dt(0,0,se,J);let dt=!1;const yt=new Yf;let ae=!1,ge=!1;const Ce=new qe,Pe=new z,Ye=new Dt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function wt(){return L===null?ue:1}let V=n;function Ot(U,q){return t.getContext(U,q)}try{const U={alpha:!0,depth:i,stencil:o,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Df}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",pe,!1),V===null){const q="webgl2";if(V=Ot(q,U),V===null)throw Ot(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let it,pt,Ne,Et,je,nt,H,C,ee,de,me,he,ze,ve,Me,tt,_e,Ae,ct,Ve,we,Ge,Ke,It;function A(){it=new C1(V),it.init(),Ge=new fC(V,it),pt=new E1(V,it,e,Ge),Ne=new lC(V),Et=new I1(V),je=new ZR,nt=new hC(V,it,Ne,je,pt,Ge,Et),H=new A1(S),C=new R1(S),ee=new zA(V),Ke=new M1(V,ee),de=new P1(V,ee,Et,Ke),me=new U1(V,de,ee,Et),ct=new D1(V,pt,nt),tt=new T1(je),he=new KR(S,H,C,it,pt,Ke,tt),ze=new yC(S,je),ve=new $R,Me=new iC(it),Ae=new y1(S,H,C,Ne,me,p,u),_e=new cC(S,me,pt),It=new MC(V,Et,pt,Ne),Ve=new S1(V,it,Et),we=new L1(V,it,Et),Et.programs=he.programs,S.capabilities=pt,S.extensions=it,S.properties=je,S.renderLists=ve,S.shadowMap=_e,S.state=Ne,S.info=Et}A();const j=new xC(S,V);this.xr=j,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const U=it.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=it.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(U){U!==void 0&&(ue=U,this.setSize(se,J,!1))},this.getSize=function(U){return U.set(se,J)},this.setSize=function(U,q,Q=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=U,J=q,t.width=Math.floor(U*ue),t.height=Math.floor(q*ue),Q===!0&&(t.style.width=U+"px",t.style.height=q+"px"),this.setViewport(0,0,U,q)},this.getDrawingBufferSize=function(U){return U.set(se*ue,J*ue).floor()},this.setDrawingBufferSize=function(U,q,Q){se=U,J=q,ue=Q,t.width=Math.floor(U*Q),t.height=Math.floor(q*Q),this.setViewport(0,0,U,q)},this.getCurrentViewport=function(U){return U.copy(b)},this.getViewport=function(U){return U.copy(Re)},this.setViewport=function(U,q,Q,te){U.isVector4?Re.set(U.x,U.y,U.z,U.w):Re.set(U,q,Q,te),Ne.viewport(b.copy(Re).multiplyScalar(ue).round())},this.getScissor=function(U){return U.copy(be)},this.setScissor=function(U,q,Q,te){U.isVector4?be.set(U.x,U.y,U.z,U.w):be.set(U,q,Q,te),Ne.scissor(O.copy(be).multiplyScalar(ue).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(U){Ne.setScissorTest(dt=U)},this.setOpaqueSort=function(U){ie=U},this.setTransparentSort=function(U){ye=U},this.getClearColor=function(U){return U.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(U=!0,q=!0,Q=!0){let te=0;if(U){let K=!1;if(L!==null){const xe=L.texture.format;K=xe===Vf||xe===Hf||xe===zf}if(K){const xe=L.texture.type,Te=xe===pr||xe===fs||xe===_a||xe===vo||xe===Of||xe===Ff,De=Ae.getClearColor(),Ie=Ae.getClearAlpha(),Ze=De.r,Je=De.g,He=De.b;Te?(g[0]=Ze,g[1]=Je,g[2]=He,g[3]=Ie,V.clearBufferuiv(V.COLOR,0,g)):(y[0]=Ze,y[1]=Je,y[2]=He,y[3]=Ie,V.clearBufferiv(V.COLOR,0,y))}else te|=V.COLOR_BUFFER_BIT}q&&(te|=V.DEPTH_BUFFER_BIT),Q&&(te|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ve.dispose(),Me.dispose(),je.dispose(),H.dispose(),C.dispose(),me.dispose(),Ke.dispose(),It.dispose(),he.dispose(),j.dispose(),j.removeEventListener("sessionstart",Yt),j.removeEventListener("sessionend",Fi),Jt.stop()};function $(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const U=Et.autoReset,q=_e.enabled,Q=_e.autoUpdate,te=_e.needsUpdate,K=_e.type;A(),Et.autoReset=U,_e.enabled=q,_e.autoUpdate=Q,_e.needsUpdate=te,_e.type=K}function pe(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Oe(U){const q=U.target;q.removeEventListener("dispose",Oe),$e(q)}function $e(U){Gt(U),je.remove(U)}function Gt(U){const q=je.get(U).programs;q!==void 0&&(q.forEach(function(Q){he.releaseProgram(Q)}),U.isShaderMaterial&&he.releaseShaderCache(U))}this.renderBufferDirect=function(U,q,Q,te,K,xe){q===null&&(q=et);const Te=K.isMesh&&K.matrixWorld.determinant()<0,De=Dl(U,q,Q,te,K);Ne.setMaterial(te,Te);let Ie=Q.index,Ze=1;if(te.wireframe===!0){if(Ie=de.getWireframeAttribute(Q),Ie===void 0)return;Ze=2}const Je=Q.drawRange,He=Q.attributes.position;let Mt=Je.start*Ze,Ft=(Je.start+Je.count)*Ze;xe!==null&&(Mt=Math.max(Mt,xe.start*Ze),Ft=Math.min(Ft,(xe.start+xe.count)*Ze)),Ie!==null?(Mt=Math.max(Mt,0),Ft=Math.min(Ft,Ie.count)):He!=null&&(Mt=Math.max(Mt,0),Ft=Math.min(Ft,He.count));const Bt=Ft-Mt;if(Bt<0||Bt===1/0)return;Ke.setup(K,te,De,Q,Ie);let Tn,Tt=Ve;if(Ie!==null&&(Tn=ee.get(Ie),Tt=we,Tt.setIndex(Tn)),K.isMesh)te.wireframe===!0?(Ne.setLineWidth(te.wireframeLinewidth*wt()),Tt.setMode(V.LINES)):Tt.setMode(V.TRIANGLES);else if(K.isLine){let Fe=te.linewidth;Fe===void 0&&(Fe=1),Ne.setLineWidth(Fe*wt()),K.isLineSegments?Tt.setMode(V.LINES):K.isLineLoop?Tt.setMode(V.LINE_LOOP):Tt.setMode(V.LINE_STRIP)}else K.isPoints?Tt.setMode(V.POINTS):K.isSprite&&Tt.setMode(V.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Tt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))Tt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Fe=K._multiDrawStarts,rn=K._multiDrawCounts,St=K._multiDrawCount,On=Ie?ee.get(Ie).bytesPerElement:1,qi=je.get(te).currentProgram.getUniforms();for(let gn=0;gn<St;gn++)qi.setValue(V,"_gl_DrawID",gn),Tt.render(Fe[gn]/On,rn[gn])}else if(K.isInstancedMesh)Tt.renderInstances(Mt,Bt,K.count);else if(Q.isInstancedBufferGeometry){const Fe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,rn=Math.min(Q.instanceCount,Fe);Tt.renderInstances(Mt,Bt,rn)}else Tt.render(Mt,Bt)};function jt(U,q,Q){U.transparent===!0&&U.side===fi&&U.forceSinglePass===!1?(U.side=Un,U.needsUpdate=!0,_s(U,q,Q),U.side=Ui,U.needsUpdate=!0,_s(U,q,Q),U.side=fi):_s(U,q,Q)}this.compile=function(U,q,Q=null){Q===null&&(Q=U),x=Me.get(Q),x.init(q),T.push(x),Q.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),U!==Q&&U.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),x.setupLights();const te=new Set;return U.traverse(function(K){const xe=K.material;if(xe)if(Array.isArray(xe))for(let Te=0;Te<xe.length;Te++){const De=xe[Te];jt(De,Q,K),te.add(De)}else jt(xe,Q,K),te.add(xe)}),T.pop(),x=null,te},this.compileAsync=function(U,q,Q=null){const te=this.compile(U,q,Q);return new Promise(K=>{function xe(){if(te.forEach(function(Te){je.get(Te).currentProgram.isReady()&&te.delete(Te)}),te.size===0){K(U);return}setTimeout(xe,10)}it.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let _t=null;function $t(U){_t&&_t(U)}function Yt(){Jt.stop()}function Fi(){Jt.start()}const Jt=new O_;Jt.setAnimationLoop($t),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(U){_t=U,j.setAnimationLoop(U),U===null?Jt.stop():Jt.start()},j.addEventListener("sessionstart",Yt),j.addEventListener("sessionend",Fi),this.render=function(U,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(q),q=j.getCamera()),U.isScene===!0&&U.onBeforeRender(S,U,q,L),x=Me.get(U,T.length),x.init(q),T.push(x),Ce.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),yt.setFromProjectionMatrix(Ce),ge=this.localClippingEnabled,ae=tt.init(this.clippingPlanes,ge),M=ve.get(U,_.length),M.init(),_.push(M),j.enabled===!0&&j.isPresenting===!0){const xe=S.xr.getDepthSensingMesh();xe!==null&&yi(xe,q,-1/0,S.sortObjects)}yi(U,q,0,S.sortObjects),M.finish(),S.sortObjects===!0&&M.sort(ie,ye),ot=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,ot&&Ae.addToRenderList(M,U),this.info.render.frame++,ae===!0&&tt.beginShadows();const Q=x.state.shadowsArray;_e.render(Q,U,q),ae===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=M.opaque,K=M.transmissive;if(x.setupLights(),q.isArrayCamera){const xe=q.cameras;if(K.length>0)for(let Te=0,De=xe.length;Te<De;Te++){const Ie=xe[Te];Wr(te,K,U,Ie)}ot&&Ae.render(U);for(let Te=0,De=xe.length;Te<De;Te++){const Ie=xe[Te];Mi(M,U,Ie,Ie.viewport)}}else K.length>0&&Wr(te,K,U,q),ot&&Ae.render(U),Mi(M,U,q);L!==null&&(nt.updateMultisampleRenderTarget(L),nt.updateRenderTargetMipmap(L)),U.isScene===!0&&U.onAfterRender(S,U,q),Ke.resetDefaultState(),F=-1,R=null,T.pop(),T.length>0?(x=T[T.length-1],ae===!0&&tt.setGlobalState(S.clippingPlanes,x.state.camera)):x=null,_.pop(),_.length>0?M=_[_.length-1]:M=null};function yi(U,q,Q,te){if(U.visible===!1)return;if(U.layers.test(q.layers)){if(U.isGroup)Q=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(q);else if(U.isLight)x.pushLight(U),U.castShadow&&x.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||yt.intersectsSprite(U)){te&&Ye.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Ce);const Te=me.update(U),De=U.material;De.visible&&M.push(U,Te,De,Q,Ye.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||yt.intersectsObject(U))){const Te=me.update(U),De=U.material;if(te&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Ye.copy(U.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ye.copy(Te.boundingSphere.center)),Ye.applyMatrix4(U.matrixWorld).applyMatrix4(Ce)),Array.isArray(De)){const Ie=Te.groups;for(let Ze=0,Je=Ie.length;Ze<Je;Ze++){const He=Ie[Ze],Mt=De[He.materialIndex];Mt&&Mt.visible&&M.push(U,Te,Mt,Q,Ye.z,He)}}else De.visible&&M.push(U,Te,De,Q,Ye.z,null)}}const xe=U.children;for(let Te=0,De=xe.length;Te<De;Te++)yi(xe[Te],q,Q,te)}function Mi(U,q,Q,te){const K=U.opaque,xe=U.transmissive,Te=U.transparent;x.setupLightsView(Q),ae===!0&&tt.setGlobalState(S.clippingPlanes,Q),te&&Ne.viewport(b.copy(te)),K.length>0&&gs(K,q,Q),xe.length>0&&gs(xe,q,Q),Te.length>0&&gs(Te,q,Q),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Wr(U,q,Q,te){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[te.id]===void 0&&(x.state.transmissionRenderTarget[te.id]=new ds(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Ma:pr,minFilter:hr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const xe=x.state.transmissionRenderTarget[te.id],Te=te.viewport||b;xe.setSize(Te.z,Te.w);const De=S.getRenderTarget();S.setRenderTarget(xe),S.getClearColor(W),Z=S.getClearAlpha(),Z<1&&S.setClearColor(16777215,.5),ot?Ae.render(Q):S.clear();const Ie=S.toneMapping;S.toneMapping=Vr;const Ze=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),x.setupLightsView(te),ae===!0&&tt.setGlobalState(S.clippingPlanes,te),gs(U,Q,te),nt.updateMultisampleRenderTarget(xe),nt.updateRenderTargetMipmap(xe),it.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let He=0,Mt=q.length;He<Mt;He++){const Ft=q[He],Bt=Ft.object,Tn=Ft.geometry,Tt=Ft.material,Fe=Ft.group;if(Tt.side===fi&&Bt.layers.test(te.layers)){const rn=Tt.side;Tt.side=Un,Tt.needsUpdate=!0,Aa(Bt,Q,te,Tn,Tt,Fe),Tt.side=rn,Tt.needsUpdate=!0,Je=!0}}Je===!0&&(nt.updateMultisampleRenderTarget(xe),nt.updateRenderTargetMipmap(xe))}S.setRenderTarget(De),S.setClearColor(W,Z),Ze!==void 0&&(te.viewport=Ze),S.toneMapping=Ie}function gs(U,q,Q){const te=q.isScene===!0?q.overrideMaterial:null;for(let K=0,xe=U.length;K<xe;K++){const Te=U[K],De=Te.object,Ie=Te.geometry,Ze=te===null?Te.material:te,Je=Te.group;De.layers.test(Q.layers)&&Aa(De,q,Q,Ie,Ze,Je)}}function Aa(U,q,Q,te,K,xe){U.onBeforeRender(S,q,Q,te,K,xe),U.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),K.transparent===!0&&K.side===fi&&K.forceSinglePass===!1?(K.side=Un,K.needsUpdate=!0,S.renderBufferDirect(Q,q,te,K,U,xe),K.side=Ui,K.needsUpdate=!0,S.renderBufferDirect(Q,q,te,K,U,xe),K.side=fi):S.renderBufferDirect(Q,q,te,K,U,xe),U.onAfterRender(S,q,Q,te,K,xe)}function _s(U,q,Q){q.isScene!==!0&&(q=et);const te=je.get(U),K=x.state.lights,xe=x.state.shadowsArray,Te=K.state.version,De=he.getParameters(U,K.state,xe,q,Q),Ie=he.getProgramCacheKey(De);let Ze=te.programs;te.environment=U.isMeshStandardMaterial?q.environment:null,te.fog=q.fog,te.envMap=(U.isMeshStandardMaterial?C:H).get(U.envMap||te.environment),te.envMapRotation=te.environment!==null&&U.envMap===null?q.environmentRotation:U.envMapRotation,Ze===void 0&&(U.addEventListener("dispose",Oe),Ze=new Map,te.programs=Ze);let Je=Ze.get(Ie);if(Je!==void 0){if(te.currentProgram===Je&&te.lightsStateVersion===Te)return wa(U,De),Je}else De.uniforms=he.getUniforms(U),U.onBeforeCompile(De,S),Je=he.acquireProgram(De,Ie),Ze.set(Ie,Je),te.uniforms=De.uniforms;const He=te.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(He.clippingPlanes=tt.uniform),wa(U,De),te.needsLights=Ra(U),te.lightsStateVersion=Te,te.needsLights&&(He.ambientLightColor.value=K.state.ambient,He.lightProbe.value=K.state.probe,He.directionalLights.value=K.state.directional,He.directionalLightShadows.value=K.state.directionalShadow,He.spotLights.value=K.state.spot,He.spotLightShadows.value=K.state.spotShadow,He.rectAreaLights.value=K.state.rectArea,He.ltc_1.value=K.state.rectAreaLTC1,He.ltc_2.value=K.state.rectAreaLTC2,He.pointLights.value=K.state.point,He.pointLightShadows.value=K.state.pointShadow,He.hemisphereLights.value=K.state.hemi,He.directionalShadowMap.value=K.state.directionalShadowMap,He.directionalShadowMatrix.value=K.state.directionalShadowMatrix,He.spotShadowMap.value=K.state.spotShadowMap,He.spotLightMatrix.value=K.state.spotLightMatrix,He.spotLightMap.value=K.state.spotLightMap,He.pointShadowMap.value=K.state.pointShadowMap,He.pointShadowMatrix.value=K.state.pointShadowMatrix),te.currentProgram=Je,te.uniformsList=null,Je}function ba(U){if(U.uniformsList===null){const q=U.currentProgram.getUniforms();U.uniformsList=dl.seqWithValue(q.seq,U.uniforms)}return U.uniformsList}function wa(U,q){const Q=je.get(U);Q.outputColorSpace=q.outputColorSpace,Q.batching=q.batching,Q.batchingColor=q.batchingColor,Q.instancing=q.instancing,Q.instancingColor=q.instancingColor,Q.instancingMorph=q.instancingMorph,Q.skinning=q.skinning,Q.morphTargets=q.morphTargets,Q.morphNormals=q.morphNormals,Q.morphColors=q.morphColors,Q.morphTargetsCount=q.morphTargetsCount,Q.numClippingPlanes=q.numClippingPlanes,Q.numIntersection=q.numClipIntersection,Q.vertexAlphas=q.vertexAlphas,Q.vertexTangents=q.vertexTangents,Q.toneMapping=q.toneMapping}function Dl(U,q,Q,te,K){q.isScene!==!0&&(q=et),nt.resetTextureUnits();const xe=q.fog,Te=te.isMeshStandardMaterial?q.environment:null,De=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:vn,Ie=(te.isMeshStandardMaterial?C:H).get(te.envMap||Te),Ze=te.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Je=!!Q.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),He=!!Q.morphAttributes.position,Mt=!!Q.morphAttributes.normal,Ft=!!Q.morphAttributes.color;let Bt=Vr;te.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Bt=S.toneMapping);const Tn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Tt=Tn!==void 0?Tn.length:0,Fe=je.get(te),rn=x.state.lights;if(ae===!0&&(ge===!0||U!==R)){const Fn=U===R&&te.id===F;tt.setState(te,U,Fn)}let St=!1;te.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==rn.state.version||Fe.outputColorSpace!==De||K.isBatchedMesh&&Fe.batching===!1||!K.isBatchedMesh&&Fe.batching===!0||K.isBatchedMesh&&Fe.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Fe.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Fe.instancing===!1||!K.isInstancedMesh&&Fe.instancing===!0||K.isSkinnedMesh&&Fe.skinning===!1||!K.isSkinnedMesh&&Fe.skinning===!0||K.isInstancedMesh&&Fe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Fe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Fe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Fe.instancingMorph===!1&&K.morphTexture!==null||Fe.envMap!==Ie||te.fog===!0&&Fe.fog!==xe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==tt.numPlanes||Fe.numIntersection!==tt.numIntersection)||Fe.vertexAlphas!==Ze||Fe.vertexTangents!==Je||Fe.morphTargets!==He||Fe.morphNormals!==Mt||Fe.morphColors!==Ft||Fe.toneMapping!==Bt||Fe.morphTargetsCount!==Tt)&&(St=!0):(St=!0,Fe.__version=te.version);let On=Fe.currentProgram;St===!0&&(On=_s(te,q,K));let qi=!1,gn=!1,Lo=!1;const Wt=On.getUniforms(),Gn=Fe.uniforms;if(Ne.useProgram(On.program)&&(qi=!0,gn=!0,Lo=!0),te.id!==F&&(F=te.id,gn=!0),qi||R!==U){Wt.setValue(V,"projectionMatrix",U.projectionMatrix),Wt.setValue(V,"viewMatrix",U.matrixWorldInverse);const Fn=Wt.map.cameraPosition;Fn!==void 0&&Fn.setValue(V,Pe.setFromMatrixPosition(U.matrixWorld)),pt.logarithmicDepthBuffer&&Wt.setValue(V,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Wt.setValue(V,"isOrthographic",U.isOrthographicCamera===!0),R!==U&&(R=U,gn=!0,Lo=!0)}if(K.isSkinnedMesh){Wt.setOptional(V,K,"bindMatrix"),Wt.setOptional(V,K,"bindMatrixInverse");const Fn=K.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),Wt.setValue(V,"boneTexture",Fn.boneTexture,nt))}K.isBatchedMesh&&(Wt.setOptional(V,K,"batchingTexture"),Wt.setValue(V,"batchingTexture",K._matricesTexture,nt),Wt.setOptional(V,K,"batchingIdTexture"),Wt.setValue(V,"batchingIdTexture",K._indirectTexture,nt),Wt.setOptional(V,K,"batchingColorTexture"),K._colorsTexture!==null&&Wt.setValue(V,"batchingColorTexture",K._colorsTexture,nt));const xs=Q.morphAttributes;if((xs.position!==void 0||xs.normal!==void 0||xs.color!==void 0)&&ct.update(K,Q,On),(gn||Fe.receiveShadow!==K.receiveShadow)&&(Fe.receiveShadow=K.receiveShadow,Wt.setValue(V,"receiveShadow",K.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Gn.envMap.value=Ie,Gn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&q.environment!==null&&(Gn.envMapIntensity.value=q.environmentIntensity),gn&&(Wt.setValue(V,"toneMappingExposure",S.toneMappingExposure),Fe.needsLights&&Ul(Gn,Lo),xe&&te.fog===!0&&ze.refreshFogUniforms(Gn,xe),ze.refreshMaterialUniforms(Gn,te,ue,J,x.state.transmissionRenderTarget[U.id]),dl.upload(V,ba(Fe),Gn,nt)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(dl.upload(V,ba(Fe),Gn,nt),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Wt.setValue(V,"center",K.center),Wt.setValue(V,"modelViewMatrix",K.modelViewMatrix),Wt.setValue(V,"normalMatrix",K.normalMatrix),Wt.setValue(V,"modelMatrix",K.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Fn=te.uniformsGroups;for(let vs=0,Ca=Fn.length;vs<Ca;vs++){const ys=Fn[vs];It.update(ys,On),It.bind(ys,On)}}return On}function Ul(U,q){U.ambientLightColor.needsUpdate=q,U.lightProbe.needsUpdate=q,U.directionalLights.needsUpdate=q,U.directionalLightShadows.needsUpdate=q,U.pointLights.needsUpdate=q,U.pointLightShadows.needsUpdate=q,U.spotLights.needsUpdate=q,U.spotLightShadows.needsUpdate=q,U.rectAreaLights.needsUpdate=q,U.hemisphereLights.needsUpdate=q}function Ra(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(U,q,Q){je.get(U.texture).__webglTexture=q,je.get(U.depthTexture).__webglTexture=Q;const te=je.get(U);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=Q===void 0,te.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(U,q){const Q=je.get(U);Q.__webglFramebuffer=q,Q.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(U,q=0,Q=0){L=U,N=q,I=Q;let te=!0,K=null,xe=!1,Te=!1;if(U){const Ie=je.get(U);Ie.__useDefaultFramebuffer!==void 0?(Ne.bindFramebuffer(V.FRAMEBUFFER,null),te=!1):Ie.__webglFramebuffer===void 0?nt.setupRenderTarget(U):Ie.__hasExternalTextures&&nt.rebindTextures(U,je.get(U.texture).__webglTexture,je.get(U.depthTexture).__webglTexture);const Ze=U.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Te=!0);const Je=je.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Je[q])?K=Je[q][Q]:K=Je[q],xe=!0):U.samples>0&&nt.useMultisampledRTT(U)===!1?K=je.get(U).__webglMultisampledFramebuffer:Array.isArray(Je)?K=Je[Q]:K=Je,b.copy(U.viewport),O.copy(U.scissor),G=U.scissorTest}else b.copy(Re).multiplyScalar(ue).floor(),O.copy(be).multiplyScalar(ue).floor(),G=dt;if(Ne.bindFramebuffer(V.FRAMEBUFFER,K)&&te&&Ne.drawBuffers(U,K),Ne.viewport(b),Ne.scissor(O),Ne.setScissorTest(G),xe){const Ie=je.get(U.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ie.__webglTexture,Q)}else if(Te){const Ie=je.get(U.texture),Ze=q||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ie.__webglTexture,Q||0,Ze)}F=-1},this.readRenderTargetPixels=function(U,q,Q,te,K,xe,Te){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=je.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Te!==void 0&&(De=De[Te]),De){Ne.bindFramebuffer(V.FRAMEBUFFER,De);try{const Ie=U.texture,Ze=Ie.format,Je=Ie.type;if(!pt.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=U.width-te&&Q>=0&&Q<=U.height-K&&V.readPixels(q,Q,te,K,Ge.convert(Ze),Ge.convert(Je),xe)}finally{const Ie=L!==null?je.get(L).__webglFramebuffer:null;Ne.bindFramebuffer(V.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(U,q,Q,te,K,xe,Te){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=je.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Te!==void 0&&(De=De[Te]),De){Ne.bindFramebuffer(V.FRAMEBUFFER,De);try{const Ie=U.texture,Ze=Ie.format,Je=Ie.type;if(!pt.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=U.width-te&&Q>=0&&Q<=U.height-K){const He=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,He),V.bufferData(V.PIXEL_PACK_BUFFER,xe.byteLength,V.STREAM_READ),V.readPixels(q,Q,te,K,Ge.convert(Ze),Ge.convert(Je),0),V.flush();const Mt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);await pA(V,Mt,4);try{V.bindBuffer(V.PIXEL_PACK_BUFFER,He),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,xe)}finally{V.deleteBuffer(He),V.deleteSync(Mt)}return xe}}finally{const Ie=L!==null?je.get(L).__webglFramebuffer:null;Ne.bindFramebuffer(V.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(U,q=null,Q=0){U.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,U=arguments[1]);const te=Math.pow(2,-Q),K=Math.floor(U.image.width*te),xe=Math.floor(U.image.height*te),Te=q!==null?q.x:0,De=q!==null?q.y:0;nt.setTexture2D(U,0),V.copyTexSubImage2D(V.TEXTURE_2D,Q,0,0,Te,De,K,xe),Ne.unbindTexture()},this.copyTextureToTexture=function(U,q,Q=null,te=null,K=0){U.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,U=arguments[1],q=arguments[2],K=arguments[3]||0,Q=null);let xe,Te,De,Ie,Ze,Je;Q!==null?(xe=Q.max.x-Q.min.x,Te=Q.max.y-Q.min.y,De=Q.min.x,Ie=Q.min.y):(xe=U.image.width,Te=U.image.height,De=0,Ie=0),te!==null?(Ze=te.x,Je=te.y):(Ze=0,Je=0);const He=Ge.convert(q.format),Mt=Ge.convert(q.type);nt.setTexture2D(q,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const Ft=V.getParameter(V.UNPACK_ROW_LENGTH),Bt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Tn=V.getParameter(V.UNPACK_SKIP_PIXELS),Tt=V.getParameter(V.UNPACK_SKIP_ROWS),Fe=V.getParameter(V.UNPACK_SKIP_IMAGES),rn=U.isCompressedTexture?U.mipmaps[K]:U.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,rn.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,rn.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,De),V.pixelStorei(V.UNPACK_SKIP_ROWS,Ie),U.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,K,Ze,Je,xe,Te,He,Mt,rn.data):U.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,K,Ze,Je,rn.width,rn.height,He,rn.data):V.texSubImage2D(V.TEXTURE_2D,K,Ze,Je,xe,Te,He,Mt,rn),V.pixelStorei(V.UNPACK_ROW_LENGTH,Ft),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Bt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Tn),V.pixelStorei(V.UNPACK_SKIP_ROWS,Tt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Fe),K===0&&q.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Ne.unbindTexture()},this.copyTextureToTexture3D=function(U,q,Q=null,te=null,K=0){U.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,te=arguments[1]||null,U=arguments[2],q=arguments[3],K=arguments[4]||0);let xe,Te,De,Ie,Ze,Je,He,Mt,Ft;const Bt=U.isCompressedTexture?U.mipmaps[K]:U.image;Q!==null?(xe=Q.max.x-Q.min.x,Te=Q.max.y-Q.min.y,De=Q.max.z-Q.min.z,Ie=Q.min.x,Ze=Q.min.y,Je=Q.min.z):(xe=Bt.width,Te=Bt.height,De=Bt.depth,Ie=0,Ze=0,Je=0),te!==null?(He=te.x,Mt=te.y,Ft=te.z):(He=0,Mt=0,Ft=0);const Tn=Ge.convert(q.format),Tt=Ge.convert(q.type);let Fe;if(q.isData3DTexture)nt.setTexture3D(q,0),Fe=V.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)nt.setTexture2DArray(q,0),Fe=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const rn=V.getParameter(V.UNPACK_ROW_LENGTH),St=V.getParameter(V.UNPACK_IMAGE_HEIGHT),On=V.getParameter(V.UNPACK_SKIP_PIXELS),qi=V.getParameter(V.UNPACK_SKIP_ROWS),gn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Bt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Bt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ie),V.pixelStorei(V.UNPACK_SKIP_ROWS,Ze),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Je),U.isDataTexture||U.isData3DTexture?V.texSubImage3D(Fe,K,He,Mt,Ft,xe,Te,De,Tn,Tt,Bt.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(Fe,K,He,Mt,Ft,xe,Te,De,Tn,Bt.data):V.texSubImage3D(Fe,K,He,Mt,Ft,xe,Te,De,Tn,Tt,Bt),V.pixelStorei(V.UNPACK_ROW_LENGTH,rn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,St),V.pixelStorei(V.UNPACK_SKIP_PIXELS,On),V.pixelStorei(V.UNPACK_SKIP_ROWS,qi),V.pixelStorei(V.UNPACK_SKIP_IMAGES,gn),K===0&&q.generateMipmaps&&V.generateMipmap(Fe),Ne.unbindTexture()},this.initRenderTarget=function(U){je.get(U).__webglFramebuffer===void 0&&nt.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?nt.setTextureCube(U,0):U.isData3DTexture?nt.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?nt.setTexture2DArray(U,0):nt.setTexture2D(U,0),Ne.unbindTexture()},this.resetState=function(){N=0,I=0,L=null,Ne.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Gf?"display-p3":"srgb",t.unpackColorSpace=bt.workingColorSpace===wl?"display-p3":"srgb"}}class EC extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class TC{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Xf("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,o=this.stride;i<o;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rn=new z;class jf{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array),o=Pt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[i+o])}return new mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[i+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const yg=new z,Mg=new Dt,Sg=new Dt,AC=new z,Eg=new qe,Oc=new z,mh=new vi,Tg=new qe,gh=new ms;class bC extends dn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tm,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ln),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Oc),this.boundingBox.expandByPoint(Oc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Oc),this.boundingSphere.expandByPoint(Oc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mh.copy(this.boundingSphere),mh.applyMatrix4(i),e.ray.intersectsSphere(mh)!==!1&&(Tg.copy(i).invert(),gh.copy(e.ray).applyMatrix4(Tg),!(this.boundingBox!==null&&gh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,gh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Tm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===BT?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Mg.fromBufferAttribute(i.attributes.skinIndex,e),Sg.fromBufferAttribute(i.attributes.skinWeight,e),yg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){const c=Sg.getComponent(o);if(c!==0){const l=Mg.getComponent(o);Eg.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(AC.copy(yg).applyMatrix4(Eg),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class k_ extends qt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class G_ extends pn{constructor(e=null,t=1,n=1,i,o,c,l,u,h=Dn,d=Dn,m,p){super(null,c,l,u,h,d,i,o,m,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ag=new qe,wC=new qe;class $f{constructor(e=[],t=[]){this.uuid=Ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let o=0,c=e.length;o<c;o++){const l=e[o]?e[o].matrixWorld:wC;Ag.multiplyMatrices(l,t[o]),Ag.toArray(n,o*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new $f(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new G_(t,e,e,di,Li);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const o=e.bones[n];let c=t[o];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),c=new k_),this.bones.push(c),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,o=t.length;i<o;i++){const c=t[i];e.bones.push(c.uuid);const l=n[i];e.boneInverses.push(l.toArray())}return e}}class _f extends mn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Js=new qe,bg=new qe,Fc=[],wg=new ln,RC=new qe,$o=new dn,Jo=new vi;class CC extends dn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _f(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,RC)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),wg.copy(e.boundingBox).applyMatrix4(Js),this.boundingBox.union(wg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),Jo.copy(e.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(Jo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,c=e*o+1;for(let l=0;l<n.length;l++)n[l]=i[c+l]}raycast(e,t){const n=this.matrixWorld,i=this.count;if($o.geometry=this.geometry,$o.material=this.material,$o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jo.copy(this.boundingSphere),Jo.applyMatrix4(n),e.ray.intersectsSphere(Jo)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,Js),bg.multiplyMatrices(n,Js),$o.matrixWorld=bg,$o.raycast(e,Fc);for(let c=0,l=Fc.length;c<l;c++){const u=Fc[c];u.instanceId=o,u.object=this,t.push(u)}Fc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _f(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new G_(new Float32Array(i*this.count),i,this.count,Bf,Li));const o=this.morphTexture.source.data.data;let c=0;for(let h=0;h<n.length;h++)c+=n[h];const l=this.geometry.morphTargetsRelative?1:1-c,u=i*e;o[u]=l,o.set(n,u+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class W_ extends Di{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ml=new z,Sl=new z,Rg=new qe,Qo=new ms,Bc=new vi,_h=new z,Cg=new z;class Jf extends qt{constructor(e=new ei,t=new W_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,o=t.count;i<o;i++)Ml.fromBufferAttribute(t,i-1),Sl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ml.distanceTo(Sl);e.setAttribute("lineDistance",new xi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,o=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bc.copy(n.boundingSphere),Bc.applyMatrix4(i),Bc.radius+=o,e.ray.intersectsSphere(Bc)===!1)return;Rg.copy(i).invert(),Qo.copy(e.ray).applyMatrix4(Rg);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,h=this.isLineSegments?2:1,d=n.index,p=n.attributes.position;if(d!==null){const g=Math.max(0,c.start),y=Math.min(d.count,c.start+c.count);for(let M=g,x=y-1;M<x;M+=h){const _=d.getX(M),T=d.getX(M+1),S=zc(this,e,Qo,u,_,T);S&&t.push(S)}if(this.isLineLoop){const M=d.getX(y-1),x=d.getX(g),_=zc(this,e,Qo,u,M,x);_&&t.push(_)}}else{const g=Math.max(0,c.start),y=Math.min(p.count,c.start+c.count);for(let M=g,x=y-1;M<x;M+=h){const _=zc(this,e,Qo,u,M,M+1);_&&t.push(_)}if(this.isLineLoop){const M=zc(this,e,Qo,u,y-1,g);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=i.length;o<c;o++){const l=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function zc(s,e,t,n,i,o){const c=s.geometry.attributes.position;if(Ml.fromBufferAttribute(c,i),Sl.fromBufferAttribute(c,o),t.distanceSqToSegment(Ml,Sl,_h,Cg)>n)return;_h.applyMatrix4(s.matrixWorld);const u=e.ray.origin.distanceTo(_h);if(!(u<e.near||u>e.far))return{distance:u,point:Cg.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const Pg=new z,Lg=new z;class PC extends Jf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,o=t.count;i<o;i+=2)Pg.fromBufferAttribute(t,i),Lg.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Pg.distanceTo(Lg);e.setAttribute("lineDistance",new xi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class LC extends Jf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class X_ extends Di{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ig=new qe,xf=new ms,Hc=new vi,Vc=new z;class IC extends qt{constructor(e=new ei,t=new X_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,o=e.params.Points.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hc.copy(n.boundingSphere),Hc.applyMatrix4(i),Hc.radius+=o,e.ray.intersectsSphere(Hc)===!1)return;Ig.copy(i).invert(),xf.copy(e.ray).applyMatrix4(Ig);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,h=n.index,m=n.attributes.position;if(h!==null){const p=Math.max(0,c.start),g=Math.min(h.count,c.start+c.count);for(let y=p,M=g;y<M;y++){const x=h.getX(y);Vc.fromBufferAttribute(m,x),Dg(Vc,x,u,i,e,t,this)}}else{const p=Math.max(0,c.start),g=Math.min(m.count,c.start+c.count);for(let y=p,M=g;y<M;y++)Vc.fromBufferAttribute(m,y),Dg(Vc,y,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=i.length;o<c;o++){const l=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function Dg(s,e,t,n,i,o,c){const l=xf.distanceSqToPoint(s);if(l<t){const u=new z;xf.closestPointToPoint(s,u),u.applyMatrix4(n);const h=i.ray.origin.distanceTo(u);if(h<i.near||h>i.far)return;o.push({distance:h,distanceToRay:Math.sqrt(l),point:u,index:e,face:null,object:c})}}class El extends ei{constructor(e=1,t=32,n=16,i=0,o=Math.PI*2,c=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:o,thetaStart:c,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(c+l,Math.PI);let h=0;const d=[],m=new z,p=new z,g=[],y=[],M=[],x=[];for(let _=0;_<=n;_++){const T=[],S=_/n;let w=0;_===0&&c===0?w=.5/t:_===n&&u===Math.PI&&(w=-.5/t);for(let N=0;N<=t;N++){const I=N/t;m.x=-e*Math.cos(i+I*o)*Math.sin(c+S*l),m.y=e*Math.cos(c+S*l),m.z=e*Math.sin(i+I*o)*Math.sin(c+S*l),y.push(m.x,m.y,m.z),p.copy(m).normalize(),M.push(p.x,p.y,p.z),x.push(I+w,1-S),T.push(h++)}d.push(T)}for(let _=0;_<n;_++)for(let T=0;T<t;T++){const S=d[_][T+1],w=d[_][T],N=d[_+1][T],I=d[_+1][T+1];(_!==0||c>0)&&g.push(S,w,I),(_!==n-1||u<Math.PI)&&g.push(w,N,I)}this.setIndex(g),this.setAttribute("position",new xi(y,3)),this.setAttribute("normal",new xi(M,3)),this.setAttribute("uv",new xi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ea extends Di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kf,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wi extends Ea{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class DC extends Di{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Qe(16777215),this.specular=new Qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kf,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Uf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function kc(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function UC(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function NC(s){function e(i,o){return s[i]-s[o]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ug(s,e,t){const n=s.length,i=new s.constructor(n);for(let o=0,c=0;c!==n;++o){const l=t[o]*e;for(let u=0;u!==e;++u)i[c++]=s[l+u]}return i}function q_(s,e,t,n){let i=1,o=s[0];for(;o!==void 0&&o[n]===void 0;)o=s[i++];if(o===void 0)return;let c=o[n];if(c!==void 0)if(Array.isArray(c))do c=o[n],c!==void 0&&(e.push(o.time),t.push.apply(t,c)),o=s[i++];while(o!==void 0);else if(c.toArray!==void 0)do c=o[n],c!==void 0&&(e.push(o.time),c.toArray(t,t.length)),o=s[i++];while(o!==void 0);else do c=o[n],c!==void 0&&(e.push(o.time),t.push(c)),o=s[i++];while(o!==void 0)}class Ta{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],o=t[n-1];e:{t:{let c;n:{i:if(!(e<i)){for(let l=n+2;;){if(i===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(o=i,i=t[++n],e<i)break t}c=t.length;break n}if(!(e>=o)){const l=t[1];e<l&&(n=2,o=l);for(let u=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(i=o,o=t[--n-1],e>=o)break t}c=n,n=0;break n}break e}for(;n<c;){const l=n+c>>>1;e<t[l]?c=l:n=l+1}if(i=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,i)}return this.interpolate_(n,o,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,o=e*i;for(let c=0;c!==i;++c)t[c]=n[o+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class OC extends Ta{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Am,endingEnd:Am}}intervalChanged_(e,t,n){const i=this.parameterPositions;let o=e-2,c=e+1,l=i[o],u=i[c];if(l===void 0)switch(this.getSettings_().endingStart){case bm:o=e,l=2*t-n;break;case wm:o=i.length-2,l=t+i[o]-i[o+1];break;default:o=e,l=n}if(u===void 0)switch(this.getSettings_().endingEnd){case bm:c=e,u=2*n-t;break;case wm:c=1,u=n+i[1]-i[0];break;default:c=e-1,u=t}const h=(n-t)*.5,d=this.valueSize;this._weightPrev=h/(t-l),this._weightNext=h/(u-n),this._offsetPrev=o*d,this._offsetNext=c*d}interpolate_(e,t,n,i){const o=this.resultBuffer,c=this.sampleValues,l=this.valueSize,u=e*l,h=u-l,d=this._offsetPrev,m=this._offsetNext,p=this._weightPrev,g=this._weightNext,y=(n-t)/(i-t),M=y*y,x=M*y,_=-p*x+2*p*M-p*y,T=(1+p)*x+(-1.5-2*p)*M+(-.5+p)*y+1,S=(-1-g)*x+(1.5+g)*M+.5*y,w=g*x-g*M;for(let N=0;N!==l;++N)o[N]=_*c[d+N]+T*c[h+N]+S*c[u+N]+w*c[m+N];return o}}class FC extends Ta{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const o=this.resultBuffer,c=this.sampleValues,l=this.valueSize,u=e*l,h=u-l,d=(n-t)/(i-t),m=1-d;for(let p=0;p!==l;++p)o[p]=c[h+p]*m+c[u+p]*d;return o}}class BC extends Ta{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Xi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=kc(t,this.TimeBufferType),this.values=kc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:kc(e.times,Array),values:kc(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new BC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new FC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new OC(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xa:t=this.InterpolantFactoryMethodDiscrete;break;case va:t=this.InterpolantFactoryMethodLinear;break;case Gu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xa;case this.InterpolantFactoryMethodLinear:return va;case this.InterpolantFactoryMethodSmooth:return Gu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let o=0,c=i-1;for(;o!==i&&n[o]<e;)++o;for(;c!==-1&&n[c]>t;)--c;if(++c,o!==0||c!==i){o>=c&&(c=Math.max(c,1),o=c-1);const l=this.getValueSize();this.times=n.slice(o,c),this.values=this.values.slice(o*l,c*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let l=0;l!==o;l++){const u=n[l];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,u),e=!1;break}if(c!==null&&c>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,u,c),e=!1;break}c=u}if(i!==void 0&&UC(i))for(let l=0,u=i.length;l!==u;++l){const h=i[l];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Gu,o=e.length-1;let c=1;for(let l=1;l<o;++l){let u=!1;const h=e[l],d=e[l+1];if(h!==d&&(l!==1||h!==e[0]))if(i)u=!0;else{const m=l*n,p=m-n,g=m+n;for(let y=0;y!==n;++y){const M=t[m+y];if(M!==t[p+y]||M!==t[g+y]){u=!0;break}}}if(u){if(l!==c){e[c]=e[l];const m=l*n,p=c*n;for(let g=0;g!==n;++g)t[p+g]=t[m+g]}++c}}if(o>0){e[c]=e[o];for(let l=o*n,u=c*n,h=0;h!==n;++h)t[u+h]=t[l+h];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Xi.prototype.TimeBufferType=Float32Array;Xi.prototype.ValueBufferType=Float32Array;Xi.prototype.DefaultInterpolation=va;class wo extends Xi{constructor(e,t,n){super(e,t,n)}}wo.prototype.ValueTypeName="bool";wo.prototype.ValueBufferType=Array;wo.prototype.DefaultInterpolation=xa;wo.prototype.InterpolantFactoryMethodLinear=void 0;wo.prototype.InterpolantFactoryMethodSmooth=void 0;class Y_ extends Xi{}Y_.prototype.ValueTypeName="color";class Eo extends Xi{}Eo.prototype.ValueTypeName="number";class zC extends Ta{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const o=this.resultBuffer,c=this.sampleValues,l=this.valueSize,u=(n-t)/(i-t);let h=e*l;for(let d=h+l;h!==d;h+=4)Gi.slerpFlat(o,0,c,h-l,c,h,u);return o}}class To extends Xi{InterpolantFactoryMethodLinear(e){return new zC(this.times,this.values,this.getValueSize(),e)}}To.prototype.ValueTypeName="quaternion";To.prototype.InterpolantFactoryMethodSmooth=void 0;class Ro extends Xi{constructor(e,t,n){super(e,t,n)}}Ro.prototype.ValueTypeName="string";Ro.prototype.ValueBufferType=Array;Ro.prototype.DefaultInterpolation=xa;Ro.prototype.InterpolantFactoryMethodLinear=void 0;Ro.prototype.InterpolantFactoryMethodSmooth=void 0;class Ao extends Xi{}Ao.prototype.ValueTypeName="vector";class HC{constructor(e="",t=-1,n=[],i=zT){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ii(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let c=0,l=n.length;c!==l;++c)t.push(kC(n[c]).scale(i));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let o=0,c=n.length;o!==c;++o)t.push(Xi.toJSON(n[o]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const o=t.length,c=[];for(let l=0;l<o;l++){let u=[],h=[];u.push((l+o-1)%o,l,(l+1)%o),h.push(0,1,0);const d=NC(u);u=Ug(u,1,d),h=Ug(h,1,d),!i&&u[0]===0&&(u.push(o),h.push(h[0])),c.push(new Eo(".morphTargetInfluences["+t[l].name+"]",u,h).scale(1/n))}return new this(e,-1,c)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},o=/^([\w-]*?)([\d]+)$/;for(let l=0,u=e.length;l<u;l++){const h=e[l],d=h.name.match(o);if(d&&d.length>1){const m=d[1];let p=i[m];p||(i[m]=p=[]),p.push(h)}}const c=[];for(const l in i)c.push(this.CreateFromMorphTargetSequence(l,i[l],t,n));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(m,p,g,y,M){if(g.length!==0){const x=[],_=[];q_(g,x,_,y),x.length!==0&&M.push(new m(p,x,_))}},i=[],o=e.name||"default",c=e.fps||30,l=e.blendMode;let u=e.length||-1;const h=e.hierarchy||[];for(let m=0;m<h.length;m++){const p=h[m].keys;if(!(!p||p.length===0))if(p[0].morphTargets){const g={};let y;for(y=0;y<p.length;y++)if(p[y].morphTargets)for(let M=0;M<p[y].morphTargets.length;M++)g[p[y].morphTargets[M]]=-1;for(const M in g){const x=[],_=[];for(let T=0;T!==p[y].morphTargets.length;++T){const S=p[y];x.push(S.time),_.push(S.morphTarget===M?1:0)}i.push(new Eo(".morphTargetInfluence["+M+"]",x,_))}u=g.length*c}else{const g=".bones["+t[m].name+"]";n(Ao,g+".position",p,"pos",i),n(To,g+".quaternion",p,"rot",i),n(Ao,g+".scale",p,"scl",i)}}return i.length===0?null:new this(o,u,i,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const o=this.tracks[n];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function VC(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Eo;case"vector":case"vector2":case"vector3":case"vector4":return Ao;case"color":return Y_;case"quaternion":return To;case"bool":case"boolean":return wo;case"string":return Ro}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function kC(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=VC(s.type);if(s.times===void 0){const t=[],n=[];q_(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Br={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class GC{constructor(e,t,n){const i=this;let o=!1,c=0,l=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){l++,o===!1&&i.onStart!==void 0&&i.onStart(d,c,l),o=!0},this.itemEnd=function(d){c++,i.onProgress!==void 0&&i.onProgress(d,c,l),c===l&&(o=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return u?u(d):d},this.setURLModifier=function(d){return u=d,this},this.addHandler=function(d,m){return h.push(d,m),this},this.removeHandler=function(d){const m=h.indexOf(d);return m!==-1&&h.splice(m,2),this},this.getHandler=function(d){for(let m=0,p=h.length;m<p;m+=2){const g=h[m],y=h[m+1];if(g.global&&(g.lastIndex=0),g.test(d))return y}return null}}}const WC=new GC;class Co{constructor(e){this.manager=e!==void 0?e:WC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,o){n.load(e,i,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Co.DEFAULT_MATERIAL_NAME="__DEFAULT";const ar={};class XC extends Error{constructor(e,t){super(e),this.response=t}}class K_ extends Co{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Br.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(ar[e]!==void 0){ar[e].push({onLoad:t,onProgress:n,onError:i});return}ar[e]=[],ar[e].push({onLoad:t,onProgress:n,onError:i});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,u=this.responseType;fetch(c).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const d=ar[e],m=h.body.getReader(),p=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),g=p?parseInt(p):0,y=g!==0;let M=0;const x=new ReadableStream({start(_){T();function T(){m.read().then(({done:S,value:w})=>{if(S)_.close();else{M+=w.byteLength;const N=new ProgressEvent("progress",{lengthComputable:y,loaded:M,total:g});for(let I=0,L=d.length;I<L;I++){const F=d[I];F.onProgress&&F.onProgress(N)}_.enqueue(w),T()}},S=>{_.error(S)})}}});return new Response(x)}else throw new XC(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(d=>new DOMParser().parseFromString(d,l));case"json":return h.json();default:if(l===void 0)return h.text();{const m=/charset="?([^;"\s]*)"?/i.exec(l),p=m&&m[1]?m[1].toLowerCase():void 0,g=new TextDecoder(p);return h.arrayBuffer().then(y=>g.decode(y))}}}).then(h=>{Br.add(e,h);const d=ar[e];delete ar[e];for(let m=0,p=d.length;m<p;m++){const g=d[m];g.onLoad&&g.onLoad(h)}}).catch(h=>{const d=ar[e];if(d===void 0)throw this.manager.itemError(e),h;delete ar[e];for(let m=0,p=d.length;m<p;m++){const g=d[m];g.onError&&g.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class qC extends Co{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,c=Br.get(e);if(c!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0),c;const l=ya("img");function u(){d(),Br.add(e,this),t&&t(this),o.manager.itemEnd(e)}function h(m){d(),i&&i(m),o.manager.itemError(e),o.manager.itemEnd(e)}function d(){l.removeEventListener("load",u,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",u,!1),l.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),o.manager.itemStart(e),l.src=e,l}}class YC extends Co{constructor(e){super(e)}load(e,t,n,i){const o=new pn,c=new qC(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(l){o.image=l,o.needsUpdate=!0,t!==void 0&&t(o)},n,i),o}}class Pl extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const xh=new qe,Ng=new z,Og=new z;class Qf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yf,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ng.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ng),Og.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Og),t.updateMatrixWorld(),xh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class KC extends Qf{constructor(){super(new Ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Mo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(n!==t.fov||i!==t.aspect||o!==t.far)&&(t.fov=n,t.aspect=i,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ZC extends Pl{constructor(e,t,n=0,i=Math.PI/3,o=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.distance=n,this.angle=i,this.penumbra=o,this.decay=c,this.map=null,this.shadow=new KC}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Fg=new qe,ea=new z,vh=new z;class jC extends Qf{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),ea.setFromMatrixPosition(e.matrixWorld),n.position.copy(ea),vh.copy(n.position),vh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vh),n.updateMatrixWorld(),i.makeTranslation(-ea.x,-ea.y,-ea.z),Fg.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fg)}}class $C extends Pl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class JC extends Qf{constructor(){super(new Kf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vf extends Pl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new JC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class QC extends Pl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class pa{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class eP extends Co{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,c=Br.get(e);if(c!==void 0){if(o.manager.itemStart(e),c.then){c.then(h=>{t&&t(h),o.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0),c}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;const u=fetch(e,l).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(h){return Br.add(e,h),t&&t(h),o.manager.itemEnd(e),h}).catch(function(h){i&&i(h),Br.remove(e),o.manager.itemError(e),o.manager.itemEnd(e)});Br.add(e,u),o.manager.itemStart(e)}}const ed="\\[\\]\\.:\\/",tP=new RegExp("["+ed+"]","g"),td="[^"+ed+"]",nP="[^"+ed.replace("\\.","")+"]",iP=/((?:WC+[\/:])*)/.source.replace("WC",td),rP=/(WCOD+)?/.source.replace("WCOD",nP),sP=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",td),oP=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",td),aP=new RegExp("^"+iP+rP+sP+oP+"$"),cP=["material","materials","bones","map"];class lP{constructor(e,t,n){const i=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,o=n.length;i!==o;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Lt{constructor(e,t,n){this.path=t,this.parsedPath=n||Lt.parseTrackName(t),this.node=Lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Lt.Composite(e,t,n):new Lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tP,"")}static parseTrackName(e){const t=aP.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const o=n.nodeName.substring(i+1);cP.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(o){for(let c=0;c<o.length;c++){const l=o[c];if(l.name===t||l.uuid===t)return l;const u=n(l.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let o=t.propertyIndex;if(e||(e=Lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===h){h=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const c=e[i];if(c===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(o!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}u=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=o}else c.fromArray!==void 0&&c.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(u=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Lt.Composite=lP;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Bg=new qe;class uP{constructor(e,t,n=0,i=1/0){this.ray=new ms(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new qf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bg),this}intersectObject(e,t=!0,n=[]){return yf(e,this,n,t),n.sort(zg),n}intersectObjects(e,t=!0,n=[]){for(let i=0,o=e.length;i<o;i++)yf(e[i],this,n,t);return n.sort(zg),n}}function zg(s,e){return s.distance-e.distance}function yf(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const o=s.children;for(let c=0,l=o.length;c<l;c++)yf(o[c],e,t,!0)}}class Hg{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(fn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Vg=new z,Gc=new z;class dr{constructor(e=new z,t=new z){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Vg.subVectors(e,this.start),Gc.subVectors(this.end,this.start);const n=Gc.dot(Gc);let o=Gc.dot(Vg)/n;return t&&(o=fn(o,0,1)),o}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Df}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Df);var ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Tl={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Tl.exports;(function(s,e){(function(){var t,n="4.17.21",i=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",l="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",h=500,d="__lodash_placeholder__",m=1,p=2,g=4,y=1,M=2,x=1,_=2,T=4,S=8,w=16,N=32,I=64,L=128,F=256,R=512,b=30,O="...",G=800,W=16,Z=1,se=2,J=3,ue=1/0,ie=9007199254740991,ye=17976931348623157e292,Re=NaN,be=4294967295,dt=be-1,yt=be>>>1,ae=[["ary",L],["bind",x],["bindKey",_],["curry",S],["curryRight",w],["flip",R],["partial",N],["partialRight",I],["rearg",F]],ge="[object Arguments]",Ce="[object Array]",Pe="[object AsyncFunction]",Ye="[object Boolean]",et="[object Date]",ot="[object DOMException]",wt="[object Error]",V="[object Function]",Ot="[object GeneratorFunction]",it="[object Map]",pt="[object Number]",Ne="[object Null]",Et="[object Object]",je="[object Promise]",nt="[object Proxy]",H="[object RegExp]",C="[object Set]",ee="[object String]",de="[object Symbol]",me="[object Undefined]",he="[object WeakMap]",ze="[object WeakSet]",ve="[object ArrayBuffer]",Me="[object DataView]",tt="[object Float32Array]",_e="[object Float64Array]",Ae="[object Int8Array]",ct="[object Int16Array]",Ve="[object Int32Array]",we="[object Uint8Array]",Ge="[object Uint8ClampedArray]",Ke="[object Uint16Array]",It="[object Uint32Array]",A=/\b__p \+= '';/g,j=/\b(__p \+=) '' \+/g,$=/(__e\(.*?\)|\b__t\)) \+\n'';/g,re=/&(?:amp|lt|gt|quot|#39);/g,pe=/[&<>"']/g,Oe=RegExp(re.source),$e=RegExp(pe.source),Gt=/<%-([\s\S]+?)%>/g,jt=/<%([\s\S]+?)%>/g,_t=/<%=([\s\S]+?)%>/g,$t=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Yt=/^\w*$/,Fi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Jt=/[\\^$.*+?()[\]{}|]/g,yi=RegExp(Jt.source),Mi=/^\s+/,Wr=/\s/,gs=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Aa=/\{\n\/\* \[wrapped with (.+)\] \*/,_s=/,? & /,ba=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,wa=/[()=,{}\[\]\/\s]/,Dl=/\\(\\)?/g,Ul=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ra=/\w*$/,U=/^[-+]0x[0-9a-f]+$/i,q=/^0b[01]+$/i,Q=/^\[object .+?Constructor\]$/,te=/^0o[0-7]+$/i,K=/^(?:0|[1-9]\d*)$/,xe=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Te=/($^)/,De=/['\n\r\u2028\u2029\\]/g,Ie="\\ud800-\\udfff",Ze="\\u0300-\\u036f",Je="\\ufe20-\\ufe2f",He="\\u20d0-\\u20ff",Mt=Ze+Je+He,Ft="\\u2700-\\u27bf",Bt="a-z\\xdf-\\xf6\\xf8-\\xff",Tn="\\xac\\xb1\\xd7\\xf7",Tt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Fe="\\u2000-\\u206f",rn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",St="A-Z\\xc0-\\xd6\\xd8-\\xde",On="\\ufe0e\\ufe0f",qi=Tn+Tt+Fe+rn,gn="['’]",Lo="["+Ie+"]",Wt="["+qi+"]",Gn="["+Mt+"]",xs="\\d+",Fn="["+Ft+"]",vs="["+Bt+"]",Ca="[^"+Ie+qi+xs+Ft+Bt+St+"]",ys="\\ud83c[\\udffb-\\udfff]",i0="(?:"+Gn+"|"+ys+")",sd="[^"+Ie+"]",Nl="(?:\\ud83c[\\udde6-\\uddff]){2}",Ol="[\\ud800-\\udbff][\\udc00-\\udfff]",Ms="["+St+"]",od="\\u200d",ad="(?:"+vs+"|"+Ca+")",r0="(?:"+Ms+"|"+Ca+")",cd="(?:"+gn+"(?:d|ll|m|re|s|t|ve))?",ld="(?:"+gn+"(?:D|LL|M|RE|S|T|VE))?",ud=i0+"?",hd="["+On+"]?",s0="(?:"+od+"(?:"+[sd,Nl,Ol].join("|")+")"+hd+ud+")*",o0="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a0="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",fd=hd+ud+s0,c0="(?:"+[Fn,Nl,Ol].join("|")+")"+fd,l0="(?:"+[sd+Gn+"?",Gn,Nl,Ol,Lo].join("|")+")",u0=RegExp(gn,"g"),h0=RegExp(Gn,"g"),Fl=RegExp(ys+"(?="+ys+")|"+l0+fd,"g"),f0=RegExp([Ms+"?"+vs+"+"+cd+"(?="+[Wt,Ms,"$"].join("|")+")",r0+"+"+ld+"(?="+[Wt,Ms+ad,"$"].join("|")+")",Ms+"?"+ad+"+"+cd,Ms+"+"+ld,a0,o0,xs,c0].join("|"),"g"),d0=RegExp("["+od+Ie+Mt+On+"]"),p0=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,m0=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],g0=-1,zt={};zt[tt]=zt[_e]=zt[Ae]=zt[ct]=zt[Ve]=zt[we]=zt[Ge]=zt[Ke]=zt[It]=!0,zt[ge]=zt[Ce]=zt[ve]=zt[Ye]=zt[Me]=zt[et]=zt[wt]=zt[V]=zt[it]=zt[pt]=zt[Et]=zt[H]=zt[C]=zt[ee]=zt[he]=!1;var Nt={};Nt[ge]=Nt[Ce]=Nt[ve]=Nt[Me]=Nt[Ye]=Nt[et]=Nt[tt]=Nt[_e]=Nt[Ae]=Nt[ct]=Nt[Ve]=Nt[it]=Nt[pt]=Nt[Et]=Nt[H]=Nt[C]=Nt[ee]=Nt[de]=Nt[we]=Nt[Ge]=Nt[Ke]=Nt[It]=!0,Nt[wt]=Nt[V]=Nt[he]=!1;var _0={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},x0={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},v0={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},y0={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},M0=parseFloat,S0=parseInt,dd=typeof ta=="object"&&ta&&ta.Object===Object&&ta,E0=typeof self=="object"&&self&&self.Object===Object&&self,_n=dd||E0||Function("return this")(),Bl=e&&!e.nodeType&&e,Xr=Bl&&!0&&s&&!s.nodeType&&s,pd=Xr&&Xr.exports===Bl,zl=pd&&dd.process,ti=function(){try{var X=Xr&&Xr.require&&Xr.require("util").types;return X||zl&&zl.binding&&zl.binding("util")}catch{}}(),md=ti&&ti.isArrayBuffer,gd=ti&&ti.isDate,_d=ti&&ti.isMap,xd=ti&&ti.isRegExp,vd=ti&&ti.isSet,yd=ti&&ti.isTypedArray;function Wn(X,oe,ne){switch(ne.length){case 0:return X.call(oe);case 1:return X.call(oe,ne[0]);case 2:return X.call(oe,ne[0],ne[1]);case 3:return X.call(oe,ne[0],ne[1],ne[2])}return X.apply(oe,ne)}function T0(X,oe,ne,Le){for(var rt=-1,At=X==null?0:X.length;++rt<At;){var sn=X[rt];oe(Le,sn,ne(sn),X)}return Le}function ni(X,oe){for(var ne=-1,Le=X==null?0:X.length;++ne<Le&&oe(X[ne],ne,X)!==!1;);return X}function A0(X,oe){for(var ne=X==null?0:X.length;ne--&&oe(X[ne],ne,X)!==!1;);return X}function Md(X,oe){for(var ne=-1,Le=X==null?0:X.length;++ne<Le;)if(!oe(X[ne],ne,X))return!1;return!0}function gr(X,oe){for(var ne=-1,Le=X==null?0:X.length,rt=0,At=[];++ne<Le;){var sn=X[ne];oe(sn,ne,X)&&(At[rt++]=sn)}return At}function Pa(X,oe){var ne=X==null?0:X.length;return!!ne&&Ss(X,oe,0)>-1}function Hl(X,oe,ne){for(var Le=-1,rt=X==null?0:X.length;++Le<rt;)if(ne(oe,X[Le]))return!0;return!1}function kt(X,oe){for(var ne=-1,Le=X==null?0:X.length,rt=Array(Le);++ne<Le;)rt[ne]=oe(X[ne],ne,X);return rt}function _r(X,oe){for(var ne=-1,Le=oe.length,rt=X.length;++ne<Le;)X[rt+ne]=oe[ne];return X}function Vl(X,oe,ne,Le){var rt=-1,At=X==null?0:X.length;for(Le&&At&&(ne=X[++rt]);++rt<At;)ne=oe(ne,X[rt],rt,X);return ne}function b0(X,oe,ne,Le){var rt=X==null?0:X.length;for(Le&&rt&&(ne=X[--rt]);rt--;)ne=oe(ne,X[rt],rt,X);return ne}function kl(X,oe){for(var ne=-1,Le=X==null?0:X.length;++ne<Le;)if(oe(X[ne],ne,X))return!0;return!1}var w0=Gl("length");function R0(X){return X.split("")}function C0(X){return X.match(ba)||[]}function Sd(X,oe,ne){var Le;return ne(X,function(rt,At,sn){if(oe(rt,At,sn))return Le=At,!1}),Le}function La(X,oe,ne,Le){for(var rt=X.length,At=ne+(Le?1:-1);Le?At--:++At<rt;)if(oe(X[At],At,X))return At;return-1}function Ss(X,oe,ne){return oe===oe?V0(X,oe,ne):La(X,Ed,ne)}function P0(X,oe,ne,Le){for(var rt=ne-1,At=X.length;++rt<At;)if(Le(X[rt],oe))return rt;return-1}function Ed(X){return X!==X}function Td(X,oe){var ne=X==null?0:X.length;return ne?Xl(X,oe)/ne:Re}function Gl(X){return function(oe){return oe==null?t:oe[X]}}function Wl(X){return function(oe){return X==null?t:X[oe]}}function Ad(X,oe,ne,Le,rt){return rt(X,function(At,sn,Ut){ne=Le?(Le=!1,At):oe(ne,At,sn,Ut)}),ne}function L0(X,oe){var ne=X.length;for(X.sort(oe);ne--;)X[ne]=X[ne].value;return X}function Xl(X,oe){for(var ne,Le=-1,rt=X.length;++Le<rt;){var At=oe(X[Le]);At!==t&&(ne=ne===t?At:ne+At)}return ne}function ql(X,oe){for(var ne=-1,Le=Array(X);++ne<X;)Le[ne]=oe(ne);return Le}function I0(X,oe){return kt(oe,function(ne){return[ne,X[ne]]})}function bd(X){return X&&X.slice(0,Pd(X)+1).replace(Mi,"")}function Xn(X){return function(oe){return X(oe)}}function Yl(X,oe){return kt(oe,function(ne){return X[ne]})}function Io(X,oe){return X.has(oe)}function wd(X,oe){for(var ne=-1,Le=X.length;++ne<Le&&Ss(oe,X[ne],0)>-1;);return ne}function Rd(X,oe){for(var ne=X.length;ne--&&Ss(oe,X[ne],0)>-1;);return ne}function D0(X,oe){for(var ne=X.length,Le=0;ne--;)X[ne]===oe&&++Le;return Le}var U0=Wl(_0),N0=Wl(x0);function O0(X){return"\\"+y0[X]}function F0(X,oe){return X==null?t:X[oe]}function Es(X){return d0.test(X)}function B0(X){return p0.test(X)}function z0(X){for(var oe,ne=[];!(oe=X.next()).done;)ne.push(oe.value);return ne}function Kl(X){var oe=-1,ne=Array(X.size);return X.forEach(function(Le,rt){ne[++oe]=[rt,Le]}),ne}function Cd(X,oe){return function(ne){return X(oe(ne))}}function xr(X,oe){for(var ne=-1,Le=X.length,rt=0,At=[];++ne<Le;){var sn=X[ne];(sn===oe||sn===d)&&(X[ne]=d,At[rt++]=ne)}return At}function Ia(X){var oe=-1,ne=Array(X.size);return X.forEach(function(Le){ne[++oe]=Le}),ne}function H0(X){var oe=-1,ne=Array(X.size);return X.forEach(function(Le){ne[++oe]=[Le,Le]}),ne}function V0(X,oe,ne){for(var Le=ne-1,rt=X.length;++Le<rt;)if(X[Le]===oe)return Le;return-1}function k0(X,oe,ne){for(var Le=ne+1;Le--;)if(X[Le]===oe)return Le;return Le}function Ts(X){return Es(X)?W0(X):w0(X)}function Si(X){return Es(X)?X0(X):R0(X)}function Pd(X){for(var oe=X.length;oe--&&Wr.test(X.charAt(oe)););return oe}var G0=Wl(v0);function W0(X){for(var oe=Fl.lastIndex=0;Fl.test(X);)++oe;return oe}function X0(X){return X.match(Fl)||[]}function q0(X){return X.match(f0)||[]}var Y0=function X(oe){oe=oe==null?_n:As.defaults(_n.Object(),oe,As.pick(_n,m0));var ne=oe.Array,Le=oe.Date,rt=oe.Error,At=oe.Function,sn=oe.Math,Ut=oe.Object,Zl=oe.RegExp,K0=oe.String,ii=oe.TypeError,Da=ne.prototype,Z0=At.prototype,bs=Ut.prototype,Ua=oe["__core-js_shared__"],Na=Z0.toString,Ct=bs.hasOwnProperty,j0=0,Ld=function(){var r=/[^.]+$/.exec(Ua&&Ua.keys&&Ua.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Oa=bs.toString,$0=Na.call(Ut),J0=_n._,Q0=Zl("^"+Na.call(Ct).replace(Jt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Fa=pd?oe.Buffer:t,vr=oe.Symbol,Ba=oe.Uint8Array,Id=Fa?Fa.allocUnsafe:t,za=Cd(Ut.getPrototypeOf,Ut),Dd=Ut.create,Ud=bs.propertyIsEnumerable,Ha=Da.splice,Nd=vr?vr.isConcatSpreadable:t,Do=vr?vr.iterator:t,qr=vr?vr.toStringTag:t,Va=function(){try{var r=$r(Ut,"defineProperty");return r({},"",{}),r}catch{}}(),ex=oe.clearTimeout!==_n.clearTimeout&&oe.clearTimeout,tx=Le&&Le.now!==_n.Date.now&&Le.now,nx=oe.setTimeout!==_n.setTimeout&&oe.setTimeout,ka=sn.ceil,Ga=sn.floor,jl=Ut.getOwnPropertySymbols,ix=Fa?Fa.isBuffer:t,Od=oe.isFinite,rx=Da.join,sx=Cd(Ut.keys,Ut),on=sn.max,yn=sn.min,ox=Le.now,ax=oe.parseInt,Fd=sn.random,cx=Da.reverse,$l=$r(oe,"DataView"),Uo=$r(oe,"Map"),Jl=$r(oe,"Promise"),ws=$r(oe,"Set"),No=$r(oe,"WeakMap"),Oo=$r(Ut,"create"),Wa=No&&new No,Rs={},lx=Jr($l),ux=Jr(Uo),hx=Jr(Jl),fx=Jr(ws),dx=Jr(No),Xa=vr?vr.prototype:t,Fo=Xa?Xa.valueOf:t,Bd=Xa?Xa.toString:t;function P(r){if(Kt(r)&&!st(r)&&!(r instanceof xt)){if(r instanceof ri)return r;if(Ct.call(r,"__wrapped__"))return zp(r)}return new ri(r)}var Cs=function(){function r(){}return function(a){if(!Xt(a))return{};if(Dd)return Dd(a);r.prototype=a;var f=new r;return r.prototype=t,f}}();function qa(){}function ri(r,a){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=t}P.templateSettings={escape:Gt,evaluate:jt,interpolate:_t,variable:"",imports:{_:P}},P.prototype=qa.prototype,P.prototype.constructor=P,ri.prototype=Cs(qa.prototype),ri.prototype.constructor=ri;function xt(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=be,this.__views__=[]}function px(){var r=new xt(this.__wrapped__);return r.__actions__=Bn(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=Bn(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=Bn(this.__views__),r}function mx(){if(this.__filtered__){var r=new xt(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function gx(){var r=this.__wrapped__.value(),a=this.__dir__,f=st(r),v=a<0,E=f?r.length:0,D=Rv(0,E,this.__views__),B=D.start,k=D.end,Y=k-B,ce=v?k:B-1,le=this.__iteratees__,fe=le.length,Se=0,Ue=yn(Y,this.__takeCount__);if(!f||!v&&E==Y&&Ue==Y)return cp(r,this.__actions__);var We=[];e:for(;Y--&&Se<Ue;){ce+=a;for(var lt=-1,Xe=r[ce];++lt<fe;){var mt=le[lt],vt=mt.iteratee,Kn=mt.type,wn=vt(Xe);if(Kn==se)Xe=wn;else if(!wn){if(Kn==Z)continue e;break e}}We[Se++]=Xe}return We}xt.prototype=Cs(qa.prototype),xt.prototype.constructor=xt;function Yr(r){var a=-1,f=r==null?0:r.length;for(this.clear();++a<f;){var v=r[a];this.set(v[0],v[1])}}function _x(){this.__data__=Oo?Oo(null):{},this.size=0}function xx(r){var a=this.has(r)&&delete this.__data__[r];return this.size-=a?1:0,a}function vx(r){var a=this.__data__;if(Oo){var f=a[r];return f===u?t:f}return Ct.call(a,r)?a[r]:t}function yx(r){var a=this.__data__;return Oo?a[r]!==t:Ct.call(a,r)}function Mx(r,a){var f=this.__data__;return this.size+=this.has(r)?0:1,f[r]=Oo&&a===t?u:a,this}Yr.prototype.clear=_x,Yr.prototype.delete=xx,Yr.prototype.get=vx,Yr.prototype.has=yx,Yr.prototype.set=Mx;function Yi(r){var a=-1,f=r==null?0:r.length;for(this.clear();++a<f;){var v=r[a];this.set(v[0],v[1])}}function Sx(){this.__data__=[],this.size=0}function Ex(r){var a=this.__data__,f=Ya(a,r);if(f<0)return!1;var v=a.length-1;return f==v?a.pop():Ha.call(a,f,1),--this.size,!0}function Tx(r){var a=this.__data__,f=Ya(a,r);return f<0?t:a[f][1]}function Ax(r){return Ya(this.__data__,r)>-1}function bx(r,a){var f=this.__data__,v=Ya(f,r);return v<0?(++this.size,f.push([r,a])):f[v][1]=a,this}Yi.prototype.clear=Sx,Yi.prototype.delete=Ex,Yi.prototype.get=Tx,Yi.prototype.has=Ax,Yi.prototype.set=bx;function Ki(r){var a=-1,f=r==null?0:r.length;for(this.clear();++a<f;){var v=r[a];this.set(v[0],v[1])}}function wx(){this.size=0,this.__data__={hash:new Yr,map:new(Uo||Yi),string:new Yr}}function Rx(r){var a=sc(this,r).delete(r);return this.size-=a?1:0,a}function Cx(r){return sc(this,r).get(r)}function Px(r){return sc(this,r).has(r)}function Lx(r,a){var f=sc(this,r),v=f.size;return f.set(r,a),this.size+=f.size==v?0:1,this}Ki.prototype.clear=wx,Ki.prototype.delete=Rx,Ki.prototype.get=Cx,Ki.prototype.has=Px,Ki.prototype.set=Lx;function Kr(r){var a=-1,f=r==null?0:r.length;for(this.__data__=new Ki;++a<f;)this.add(r[a])}function Ix(r){return this.__data__.set(r,u),this}function Dx(r){return this.__data__.has(r)}Kr.prototype.add=Kr.prototype.push=Ix,Kr.prototype.has=Dx;function Ei(r){var a=this.__data__=new Yi(r);this.size=a.size}function Ux(){this.__data__=new Yi,this.size=0}function Nx(r){var a=this.__data__,f=a.delete(r);return this.size=a.size,f}function Ox(r){return this.__data__.get(r)}function Fx(r){return this.__data__.has(r)}function Bx(r,a){var f=this.__data__;if(f instanceof Yi){var v=f.__data__;if(!Uo||v.length<i-1)return v.push([r,a]),this.size=++f.size,this;f=this.__data__=new Ki(v)}return f.set(r,a),this.size=f.size,this}Ei.prototype.clear=Ux,Ei.prototype.delete=Nx,Ei.prototype.get=Ox,Ei.prototype.has=Fx,Ei.prototype.set=Bx;function zd(r,a){var f=st(r),v=!f&&Qr(r),E=!f&&!v&&Tr(r),D=!f&&!v&&!E&&Ds(r),B=f||v||E||D,k=B?ql(r.length,K0):[],Y=k.length;for(var ce in r)(a||Ct.call(r,ce))&&!(B&&(ce=="length"||E&&(ce=="offset"||ce=="parent")||D&&(ce=="buffer"||ce=="byteLength"||ce=="byteOffset")||Ji(ce,Y)))&&k.push(ce);return k}function Hd(r){var a=r.length;return a?r[lu(0,a-1)]:t}function zx(r,a){return oc(Bn(r),Zr(a,0,r.length))}function Hx(r){return oc(Bn(r))}function Ql(r,a,f){(f!==t&&!Ti(r[a],f)||f===t&&!(a in r))&&Zi(r,a,f)}function Bo(r,a,f){var v=r[a];(!(Ct.call(r,a)&&Ti(v,f))||f===t&&!(a in r))&&Zi(r,a,f)}function Ya(r,a){for(var f=r.length;f--;)if(Ti(r[f][0],a))return f;return-1}function Vx(r,a,f,v){return yr(r,function(E,D,B){a(v,E,f(E),B)}),v}function Vd(r,a){return r&&zi(a,un(a),r)}function kx(r,a){return r&&zi(a,Hn(a),r)}function Zi(r,a,f){a=="__proto__"&&Va?Va(r,a,{configurable:!0,enumerable:!0,value:f,writable:!0}):r[a]=f}function eu(r,a){for(var f=-1,v=a.length,E=ne(v),D=r==null;++f<v;)E[f]=D?t:Uu(r,a[f]);return E}function Zr(r,a,f){return r===r&&(f!==t&&(r=r<=f?r:f),a!==t&&(r=r>=a?r:a)),r}function si(r,a,f,v,E,D){var B,k=a&m,Y=a&p,ce=a&g;if(f&&(B=E?f(r,v,E,D):f(r)),B!==t)return B;if(!Xt(r))return r;var le=st(r);if(le){if(B=Pv(r),!k)return Bn(r,B)}else{var fe=Mn(r),Se=fe==V||fe==Ot;if(Tr(r))return hp(r,k);if(fe==Et||fe==ge||Se&&!E){if(B=Y||Se?{}:Pp(r),!k)return Y?vv(r,kx(B,r)):xv(r,Vd(B,r))}else{if(!Nt[fe])return E?r:{};B=Lv(r,fe,k)}}D||(D=new Ei);var Ue=D.get(r);if(Ue)return Ue;D.set(r,B),sm(r)?r.forEach(function(Xe){B.add(si(Xe,a,f,Xe,r,D))}):im(r)&&r.forEach(function(Xe,mt){B.set(mt,si(Xe,a,f,mt,r,D))});var We=ce?Y?yu:vu:Y?Hn:un,lt=le?t:We(r);return ni(lt||r,function(Xe,mt){lt&&(mt=Xe,Xe=r[mt]),Bo(B,mt,si(Xe,a,f,mt,r,D))}),B}function Gx(r){var a=un(r);return function(f){return kd(f,r,a)}}function kd(r,a,f){var v=f.length;if(r==null)return!v;for(r=Ut(r);v--;){var E=f[v],D=a[E],B=r[E];if(B===t&&!(E in r)||!D(B))return!1}return!0}function Gd(r,a,f){if(typeof r!="function")throw new ii(c);return Xo(function(){r.apply(t,f)},a)}function zo(r,a,f,v){var E=-1,D=Pa,B=!0,k=r.length,Y=[],ce=a.length;if(!k)return Y;f&&(a=kt(a,Xn(f))),v?(D=Hl,B=!1):a.length>=i&&(D=Io,B=!1,a=new Kr(a));e:for(;++E<k;){var le=r[E],fe=f==null?le:f(le);if(le=v||le!==0?le:0,B&&fe===fe){for(var Se=ce;Se--;)if(a[Se]===fe)continue e;Y.push(le)}else D(a,fe,v)||Y.push(le)}return Y}var yr=gp(Bi),Wd=gp(nu,!0);function Wx(r,a){var f=!0;return yr(r,function(v,E,D){return f=!!a(v,E,D),f}),f}function Ka(r,a,f){for(var v=-1,E=r.length;++v<E;){var D=r[v],B=a(D);if(B!=null&&(k===t?B===B&&!Yn(B):f(B,k)))var k=B,Y=D}return Y}function Xx(r,a,f,v){var E=r.length;for(f=at(f),f<0&&(f=-f>E?0:E+f),v=v===t||v>E?E:at(v),v<0&&(v+=E),v=f>v?0:am(v);f<v;)r[f++]=a;return r}function Xd(r,a){var f=[];return yr(r,function(v,E,D){a(v,E,D)&&f.push(v)}),f}function xn(r,a,f,v,E){var D=-1,B=r.length;for(f||(f=Dv),E||(E=[]);++D<B;){var k=r[D];a>0&&f(k)?a>1?xn(k,a-1,f,v,E):_r(E,k):v||(E[E.length]=k)}return E}var tu=_p(),qd=_p(!0);function Bi(r,a){return r&&tu(r,a,un)}function nu(r,a){return r&&qd(r,a,un)}function Za(r,a){return gr(a,function(f){return Qi(r[f])})}function jr(r,a){a=Sr(a,r);for(var f=0,v=a.length;r!=null&&f<v;)r=r[Hi(a[f++])];return f&&f==v?r:t}function Yd(r,a,f){var v=a(r);return st(r)?v:_r(v,f(r))}function An(r){return r==null?r===t?me:Ne:qr&&qr in Ut(r)?wv(r):Hv(r)}function iu(r,a){return r>a}function qx(r,a){return r!=null&&Ct.call(r,a)}function Yx(r,a){return r!=null&&a in Ut(r)}function Kx(r,a,f){return r>=yn(a,f)&&r<on(a,f)}function ru(r,a,f){for(var v=f?Hl:Pa,E=r[0].length,D=r.length,B=D,k=ne(D),Y=1/0,ce=[];B--;){var le=r[B];B&&a&&(le=kt(le,Xn(a))),Y=yn(le.length,Y),k[B]=!f&&(a||E>=120&&le.length>=120)?new Kr(B&&le):t}le=r[0];var fe=-1,Se=k[0];e:for(;++fe<E&&ce.length<Y;){var Ue=le[fe],We=a?a(Ue):Ue;if(Ue=f||Ue!==0?Ue:0,!(Se?Io(Se,We):v(ce,We,f))){for(B=D;--B;){var lt=k[B];if(!(lt?Io(lt,We):v(r[B],We,f)))continue e}Se&&Se.push(We),ce.push(Ue)}}return ce}function Zx(r,a,f,v){return Bi(r,function(E,D,B){a(v,f(E),D,B)}),v}function Ho(r,a,f){a=Sr(a,r),r=Up(r,a);var v=r==null?r:r[Hi(ai(a))];return v==null?t:Wn(v,r,f)}function Kd(r){return Kt(r)&&An(r)==ge}function jx(r){return Kt(r)&&An(r)==ve}function $x(r){return Kt(r)&&An(r)==et}function Vo(r,a,f,v,E){return r===a?!0:r==null||a==null||!Kt(r)&&!Kt(a)?r!==r&&a!==a:Jx(r,a,f,v,Vo,E)}function Jx(r,a,f,v,E,D){var B=st(r),k=st(a),Y=B?Ce:Mn(r),ce=k?Ce:Mn(a);Y=Y==ge?Et:Y,ce=ce==ge?Et:ce;var le=Y==Et,fe=ce==Et,Se=Y==ce;if(Se&&Tr(r)){if(!Tr(a))return!1;B=!0,le=!1}if(Se&&!le)return D||(D=new Ei),B||Ds(r)?wp(r,a,f,v,E,D):Av(r,a,Y,f,v,E,D);if(!(f&y)){var Ue=le&&Ct.call(r,"__wrapped__"),We=fe&&Ct.call(a,"__wrapped__");if(Ue||We){var lt=Ue?r.value():r,Xe=We?a.value():a;return D||(D=new Ei),E(lt,Xe,f,v,D)}}return Se?(D||(D=new Ei),bv(r,a,f,v,E,D)):!1}function Qx(r){return Kt(r)&&Mn(r)==it}function su(r,a,f,v){var E=f.length,D=E,B=!v;if(r==null)return!D;for(r=Ut(r);E--;){var k=f[E];if(B&&k[2]?k[1]!==r[k[0]]:!(k[0]in r))return!1}for(;++E<D;){k=f[E];var Y=k[0],ce=r[Y],le=k[1];if(B&&k[2]){if(ce===t&&!(Y in r))return!1}else{var fe=new Ei;if(v)var Se=v(ce,le,Y,r,a,fe);if(!(Se===t?Vo(le,ce,y|M,v,fe):Se))return!1}}return!0}function Zd(r){if(!Xt(r)||Nv(r))return!1;var a=Qi(r)?Q0:Q;return a.test(Jr(r))}function ev(r){return Kt(r)&&An(r)==H}function tv(r){return Kt(r)&&Mn(r)==C}function nv(r){return Kt(r)&&fc(r.length)&&!!zt[An(r)]}function jd(r){return typeof r=="function"?r:r==null?Vn:typeof r=="object"?st(r)?Qd(r[0],r[1]):Jd(r):xm(r)}function ou(r){if(!Wo(r))return sx(r);var a=[];for(var f in Ut(r))Ct.call(r,f)&&f!="constructor"&&a.push(f);return a}function iv(r){if(!Xt(r))return zv(r);var a=Wo(r),f=[];for(var v in r)v=="constructor"&&(a||!Ct.call(r,v))||f.push(v);return f}function au(r,a){return r<a}function $d(r,a){var f=-1,v=zn(r)?ne(r.length):[];return yr(r,function(E,D,B){v[++f]=a(E,D,B)}),v}function Jd(r){var a=Su(r);return a.length==1&&a[0][2]?Ip(a[0][0],a[0][1]):function(f){return f===r||su(f,r,a)}}function Qd(r,a){return Tu(r)&&Lp(a)?Ip(Hi(r),a):function(f){var v=Uu(f,r);return v===t&&v===a?Nu(f,r):Vo(a,v,y|M)}}function ja(r,a,f,v,E){r!==a&&tu(a,function(D,B){if(E||(E=new Ei),Xt(D))rv(r,a,B,f,ja,v,E);else{var k=v?v(bu(r,B),D,B+"",r,a,E):t;k===t&&(k=D),Ql(r,B,k)}},Hn)}function rv(r,a,f,v,E,D,B){var k=bu(r,f),Y=bu(a,f),ce=B.get(Y);if(ce){Ql(r,f,ce);return}var le=D?D(k,Y,f+"",r,a,B):t,fe=le===t;if(fe){var Se=st(Y),Ue=!Se&&Tr(Y),We=!Se&&!Ue&&Ds(Y);le=Y,Se||Ue||We?st(k)?le=k:Qt(k)?le=Bn(k):Ue?(fe=!1,le=hp(Y,!0)):We?(fe=!1,le=fp(Y,!0)):le=[]:qo(Y)||Qr(Y)?(le=k,Qr(k)?le=cm(k):(!Xt(k)||Qi(k))&&(le=Pp(Y))):fe=!1}fe&&(B.set(Y,le),E(le,Y,v,D,B),B.delete(Y)),Ql(r,f,le)}function ep(r,a){var f=r.length;if(f)return a+=a<0?f:0,Ji(a,f)?r[a]:t}function tp(r,a,f){a.length?a=kt(a,function(D){return st(D)?function(B){return jr(B,D.length===1?D[0]:D)}:D}):a=[Vn];var v=-1;a=kt(a,Xn(ke()));var E=$d(r,function(D,B,k){var Y=kt(a,function(ce){return ce(D)});return{criteria:Y,index:++v,value:D}});return L0(E,function(D,B){return _v(D,B,f)})}function sv(r,a){return np(r,a,function(f,v){return Nu(r,v)})}function np(r,a,f){for(var v=-1,E=a.length,D={};++v<E;){var B=a[v],k=jr(r,B);f(k,B)&&ko(D,Sr(B,r),k)}return D}function ov(r){return function(a){return jr(a,r)}}function cu(r,a,f,v){var E=v?P0:Ss,D=-1,B=a.length,k=r;for(r===a&&(a=Bn(a)),f&&(k=kt(r,Xn(f)));++D<B;)for(var Y=0,ce=a[D],le=f?f(ce):ce;(Y=E(k,le,Y,v))>-1;)k!==r&&Ha.call(k,Y,1),Ha.call(r,Y,1);return r}function ip(r,a){for(var f=r?a.length:0,v=f-1;f--;){var E=a[f];if(f==v||E!==D){var D=E;Ji(E)?Ha.call(r,E,1):fu(r,E)}}return r}function lu(r,a){return r+Ga(Fd()*(a-r+1))}function av(r,a,f,v){for(var E=-1,D=on(ka((a-r)/(f||1)),0),B=ne(D);D--;)B[v?D:++E]=r,r+=f;return B}function uu(r,a){var f="";if(!r||a<1||a>ie)return f;do a%2&&(f+=r),a=Ga(a/2),a&&(r+=r);while(a);return f}function ft(r,a){return wu(Dp(r,a,Vn),r+"")}function cv(r){return Hd(Us(r))}function lv(r,a){var f=Us(r);return oc(f,Zr(a,0,f.length))}function ko(r,a,f,v){if(!Xt(r))return r;a=Sr(a,r);for(var E=-1,D=a.length,B=D-1,k=r;k!=null&&++E<D;){var Y=Hi(a[E]),ce=f;if(Y==="__proto__"||Y==="constructor"||Y==="prototype")return r;if(E!=B){var le=k[Y];ce=v?v(le,Y,k):t,ce===t&&(ce=Xt(le)?le:Ji(a[E+1])?[]:{})}Bo(k,Y,ce),k=k[Y]}return r}var rp=Wa?function(r,a){return Wa.set(r,a),r}:Vn,uv=Va?function(r,a){return Va(r,"toString",{configurable:!0,enumerable:!1,value:Fu(a),writable:!0})}:Vn;function hv(r){return oc(Us(r))}function oi(r,a,f){var v=-1,E=r.length;a<0&&(a=-a>E?0:E+a),f=f>E?E:f,f<0&&(f+=E),E=a>f?0:f-a>>>0,a>>>=0;for(var D=ne(E);++v<E;)D[v]=r[v+a];return D}function fv(r,a){var f;return yr(r,function(v,E,D){return f=a(v,E,D),!f}),!!f}function $a(r,a,f){var v=0,E=r==null?v:r.length;if(typeof a=="number"&&a===a&&E<=yt){for(;v<E;){var D=v+E>>>1,B=r[D];B!==null&&!Yn(B)&&(f?B<=a:B<a)?v=D+1:E=D}return E}return hu(r,a,Vn,f)}function hu(r,a,f,v){var E=0,D=r==null?0:r.length;if(D===0)return 0;a=f(a);for(var B=a!==a,k=a===null,Y=Yn(a),ce=a===t;E<D;){var le=Ga((E+D)/2),fe=f(r[le]),Se=fe!==t,Ue=fe===null,We=fe===fe,lt=Yn(fe);if(B)var Xe=v||We;else ce?Xe=We&&(v||Se):k?Xe=We&&Se&&(v||!Ue):Y?Xe=We&&Se&&!Ue&&(v||!lt):Ue||lt?Xe=!1:Xe=v?fe<=a:fe<a;Xe?E=le+1:D=le}return yn(D,dt)}function sp(r,a){for(var f=-1,v=r.length,E=0,D=[];++f<v;){var B=r[f],k=a?a(B):B;if(!f||!Ti(k,Y)){var Y=k;D[E++]=B===0?0:B}}return D}function op(r){return typeof r=="number"?r:Yn(r)?Re:+r}function qn(r){if(typeof r=="string")return r;if(st(r))return kt(r,qn)+"";if(Yn(r))return Bd?Bd.call(r):"";var a=r+"";return a=="0"&&1/r==-ue?"-0":a}function Mr(r,a,f){var v=-1,E=Pa,D=r.length,B=!0,k=[],Y=k;if(f)B=!1,E=Hl;else if(D>=i){var ce=a?null:Ev(r);if(ce)return Ia(ce);B=!1,E=Io,Y=new Kr}else Y=a?[]:k;e:for(;++v<D;){var le=r[v],fe=a?a(le):le;if(le=f||le!==0?le:0,B&&fe===fe){for(var Se=Y.length;Se--;)if(Y[Se]===fe)continue e;a&&Y.push(fe),k.push(le)}else E(Y,fe,f)||(Y!==k&&Y.push(fe),k.push(le))}return k}function fu(r,a){return a=Sr(a,r),r=Up(r,a),r==null||delete r[Hi(ai(a))]}function ap(r,a,f,v){return ko(r,a,f(jr(r,a)),v)}function Ja(r,a,f,v){for(var E=r.length,D=v?E:-1;(v?D--:++D<E)&&a(r[D],D,r););return f?oi(r,v?0:D,v?D+1:E):oi(r,v?D+1:0,v?E:D)}function cp(r,a){var f=r;return f instanceof xt&&(f=f.value()),Vl(a,function(v,E){return E.func.apply(E.thisArg,_r([v],E.args))},f)}function du(r,a,f){var v=r.length;if(v<2)return v?Mr(r[0]):[];for(var E=-1,D=ne(v);++E<v;)for(var B=r[E],k=-1;++k<v;)k!=E&&(D[E]=zo(D[E]||B,r[k],a,f));return Mr(xn(D,1),a,f)}function lp(r,a,f){for(var v=-1,E=r.length,D=a.length,B={};++v<E;){var k=v<D?a[v]:t;f(B,r[v],k)}return B}function pu(r){return Qt(r)?r:[]}function mu(r){return typeof r=="function"?r:Vn}function Sr(r,a){return st(r)?r:Tu(r,a)?[r]:Bp(Rt(r))}var dv=ft;function Er(r,a,f){var v=r.length;return f=f===t?v:f,!a&&f>=v?r:oi(r,a,f)}var up=ex||function(r){return _n.clearTimeout(r)};function hp(r,a){if(a)return r.slice();var f=r.length,v=Id?Id(f):new r.constructor(f);return r.copy(v),v}function gu(r){var a=new r.constructor(r.byteLength);return new Ba(a).set(new Ba(r)),a}function pv(r,a){var f=a?gu(r.buffer):r.buffer;return new r.constructor(f,r.byteOffset,r.byteLength)}function mv(r){var a=new r.constructor(r.source,Ra.exec(r));return a.lastIndex=r.lastIndex,a}function gv(r){return Fo?Ut(Fo.call(r)):{}}function fp(r,a){var f=a?gu(r.buffer):r.buffer;return new r.constructor(f,r.byteOffset,r.length)}function dp(r,a){if(r!==a){var f=r!==t,v=r===null,E=r===r,D=Yn(r),B=a!==t,k=a===null,Y=a===a,ce=Yn(a);if(!k&&!ce&&!D&&r>a||D&&B&&Y&&!k&&!ce||v&&B&&Y||!f&&Y||!E)return 1;if(!v&&!D&&!ce&&r<a||ce&&f&&E&&!v&&!D||k&&f&&E||!B&&E||!Y)return-1}return 0}function _v(r,a,f){for(var v=-1,E=r.criteria,D=a.criteria,B=E.length,k=f.length;++v<B;){var Y=dp(E[v],D[v]);if(Y){if(v>=k)return Y;var ce=f[v];return Y*(ce=="desc"?-1:1)}}return r.index-a.index}function pp(r,a,f,v){for(var E=-1,D=r.length,B=f.length,k=-1,Y=a.length,ce=on(D-B,0),le=ne(Y+ce),fe=!v;++k<Y;)le[k]=a[k];for(;++E<B;)(fe||E<D)&&(le[f[E]]=r[E]);for(;ce--;)le[k++]=r[E++];return le}function mp(r,a,f,v){for(var E=-1,D=r.length,B=-1,k=f.length,Y=-1,ce=a.length,le=on(D-k,0),fe=ne(le+ce),Se=!v;++E<le;)fe[E]=r[E];for(var Ue=E;++Y<ce;)fe[Ue+Y]=a[Y];for(;++B<k;)(Se||E<D)&&(fe[Ue+f[B]]=r[E++]);return fe}function Bn(r,a){var f=-1,v=r.length;for(a||(a=ne(v));++f<v;)a[f]=r[f];return a}function zi(r,a,f,v){var E=!f;f||(f={});for(var D=-1,B=a.length;++D<B;){var k=a[D],Y=v?v(f[k],r[k],k,f,r):t;Y===t&&(Y=r[k]),E?Zi(f,k,Y):Bo(f,k,Y)}return f}function xv(r,a){return zi(r,Eu(r),a)}function vv(r,a){return zi(r,Rp(r),a)}function Qa(r,a){return function(f,v){var E=st(f)?T0:Vx,D=a?a():{};return E(f,r,ke(v,2),D)}}function Ps(r){return ft(function(a,f){var v=-1,E=f.length,D=E>1?f[E-1]:t,B=E>2?f[2]:t;for(D=r.length>3&&typeof D=="function"?(E--,D):t,B&&bn(f[0],f[1],B)&&(D=E<3?t:D,E=1),a=Ut(a);++v<E;){var k=f[v];k&&r(a,k,v,D)}return a})}function gp(r,a){return function(f,v){if(f==null)return f;if(!zn(f))return r(f,v);for(var E=f.length,D=a?E:-1,B=Ut(f);(a?D--:++D<E)&&v(B[D],D,B)!==!1;);return f}}function _p(r){return function(a,f,v){for(var E=-1,D=Ut(a),B=v(a),k=B.length;k--;){var Y=B[r?k:++E];if(f(D[Y],Y,D)===!1)break}return a}}function yv(r,a,f){var v=a&x,E=Go(r);function D(){var B=this&&this!==_n&&this instanceof D?E:r;return B.apply(v?f:this,arguments)}return D}function xp(r){return function(a){a=Rt(a);var f=Es(a)?Si(a):t,v=f?f[0]:a.charAt(0),E=f?Er(f,1).join(""):a.slice(1);return v[r]()+E}}function Ls(r){return function(a){return Vl(gm(mm(a).replace(u0,"")),r,"")}}function Go(r){return function(){var a=arguments;switch(a.length){case 0:return new r;case 1:return new r(a[0]);case 2:return new r(a[0],a[1]);case 3:return new r(a[0],a[1],a[2]);case 4:return new r(a[0],a[1],a[2],a[3]);case 5:return new r(a[0],a[1],a[2],a[3],a[4]);case 6:return new r(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new r(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var f=Cs(r.prototype),v=r.apply(f,a);return Xt(v)?v:f}}function Mv(r,a,f){var v=Go(r);function E(){for(var D=arguments.length,B=ne(D),k=D,Y=Is(E);k--;)B[k]=arguments[k];var ce=D<3&&B[0]!==Y&&B[D-1]!==Y?[]:xr(B,Y);if(D-=ce.length,D<f)return Ep(r,a,ec,E.placeholder,t,B,ce,t,t,f-D);var le=this&&this!==_n&&this instanceof E?v:r;return Wn(le,this,B)}return E}function vp(r){return function(a,f,v){var E=Ut(a);if(!zn(a)){var D=ke(f,3);a=un(a),f=function(k){return D(E[k],k,E)}}var B=r(a,f,v);return B>-1?E[D?a[B]:B]:t}}function yp(r){return $i(function(a){var f=a.length,v=f,E=ri.prototype.thru;for(r&&a.reverse();v--;){var D=a[v];if(typeof D!="function")throw new ii(c);if(E&&!B&&rc(D)=="wrapper")var B=new ri([],!0)}for(v=B?v:f;++v<f;){D=a[v];var k=rc(D),Y=k=="wrapper"?Mu(D):t;Y&&Au(Y[0])&&Y[1]==(L|S|N|F)&&!Y[4].length&&Y[9]==1?B=B[rc(Y[0])].apply(B,Y[3]):B=D.length==1&&Au(D)?B[k]():B.thru(D)}return function(){var ce=arguments,le=ce[0];if(B&&ce.length==1&&st(le))return B.plant(le).value();for(var fe=0,Se=f?a[fe].apply(this,ce):le;++fe<f;)Se=a[fe].call(this,Se);return Se}})}function ec(r,a,f,v,E,D,B,k,Y,ce){var le=a&L,fe=a&x,Se=a&_,Ue=a&(S|w),We=a&R,lt=Se?t:Go(r);function Xe(){for(var mt=arguments.length,vt=ne(mt),Kn=mt;Kn--;)vt[Kn]=arguments[Kn];if(Ue)var wn=Is(Xe),Zn=D0(vt,wn);if(v&&(vt=pp(vt,v,E,Ue)),D&&(vt=mp(vt,D,B,Ue)),mt-=Zn,Ue&&mt<ce){var en=xr(vt,wn);return Ep(r,a,ec,Xe.placeholder,f,vt,en,k,Y,ce-mt)}var Ai=fe?f:this,tr=Se?Ai[r]:r;return mt=vt.length,k?vt=Vv(vt,k):We&&mt>1&&vt.reverse(),le&&Y<mt&&(vt.length=Y),this&&this!==_n&&this instanceof Xe&&(tr=lt||Go(tr)),tr.apply(Ai,vt)}return Xe}function Mp(r,a){return function(f,v){return Zx(f,r,a(v),{})}}function tc(r,a){return function(f,v){var E;if(f===t&&v===t)return a;if(f!==t&&(E=f),v!==t){if(E===t)return v;typeof f=="string"||typeof v=="string"?(f=qn(f),v=qn(v)):(f=op(f),v=op(v)),E=r(f,v)}return E}}function _u(r){return $i(function(a){return a=kt(a,Xn(ke())),ft(function(f){var v=this;return r(a,function(E){return Wn(E,v,f)})})})}function nc(r,a){a=a===t?" ":qn(a);var f=a.length;if(f<2)return f?uu(a,r):a;var v=uu(a,ka(r/Ts(a)));return Es(a)?Er(Si(v),0,r).join(""):v.slice(0,r)}function Sv(r,a,f,v){var E=a&x,D=Go(r);function B(){for(var k=-1,Y=arguments.length,ce=-1,le=v.length,fe=ne(le+Y),Se=this&&this!==_n&&this instanceof B?D:r;++ce<le;)fe[ce]=v[ce];for(;Y--;)fe[ce++]=arguments[++k];return Wn(Se,E?f:this,fe)}return B}function Sp(r){return function(a,f,v){return v&&typeof v!="number"&&bn(a,f,v)&&(f=v=t),a=er(a),f===t?(f=a,a=0):f=er(f),v=v===t?a<f?1:-1:er(v),av(a,f,v,r)}}function ic(r){return function(a,f){return typeof a=="string"&&typeof f=="string"||(a=ci(a),f=ci(f)),r(a,f)}}function Ep(r,a,f,v,E,D,B,k,Y,ce){var le=a&S,fe=le?B:t,Se=le?t:B,Ue=le?D:t,We=le?t:D;a|=le?N:I,a&=~(le?I:N),a&T||(a&=-4);var lt=[r,a,E,Ue,fe,We,Se,k,Y,ce],Xe=f.apply(t,lt);return Au(r)&&Np(Xe,lt),Xe.placeholder=v,Op(Xe,r,a)}function xu(r){var a=sn[r];return function(f,v){if(f=ci(f),v=v==null?0:yn(at(v),292),v&&Od(f)){var E=(Rt(f)+"e").split("e"),D=a(E[0]+"e"+(+E[1]+v));return E=(Rt(D)+"e").split("e"),+(E[0]+"e"+(+E[1]-v))}return a(f)}}var Ev=ws&&1/Ia(new ws([,-0]))[1]==ue?function(r){return new ws(r)}:Hu;function Tp(r){return function(a){var f=Mn(a);return f==it?Kl(a):f==C?H0(a):I0(a,r(a))}}function ji(r,a,f,v,E,D,B,k){var Y=a&_;if(!Y&&typeof r!="function")throw new ii(c);var ce=v?v.length:0;if(ce||(a&=-97,v=E=t),B=B===t?B:on(at(B),0),k=k===t?k:at(k),ce-=E?E.length:0,a&I){var le=v,fe=E;v=E=t}var Se=Y?t:Mu(r),Ue=[r,a,f,v,E,le,fe,D,B,k];if(Se&&Bv(Ue,Se),r=Ue[0],a=Ue[1],f=Ue[2],v=Ue[3],E=Ue[4],k=Ue[9]=Ue[9]===t?Y?0:r.length:on(Ue[9]-ce,0),!k&&a&(S|w)&&(a&=-25),!a||a==x)var We=yv(r,a,f);else a==S||a==w?We=Mv(r,a,k):(a==N||a==(x|N))&&!E.length?We=Sv(r,a,f,v):We=ec.apply(t,Ue);var lt=Se?rp:Np;return Op(lt(We,Ue),r,a)}function Ap(r,a,f,v){return r===t||Ti(r,bs[f])&&!Ct.call(v,f)?a:r}function bp(r,a,f,v,E,D){return Xt(r)&&Xt(a)&&(D.set(a,r),ja(r,a,t,bp,D),D.delete(a)),r}function Tv(r){return qo(r)?t:r}function wp(r,a,f,v,E,D){var B=f&y,k=r.length,Y=a.length;if(k!=Y&&!(B&&Y>k))return!1;var ce=D.get(r),le=D.get(a);if(ce&&le)return ce==a&&le==r;var fe=-1,Se=!0,Ue=f&M?new Kr:t;for(D.set(r,a),D.set(a,r);++fe<k;){var We=r[fe],lt=a[fe];if(v)var Xe=B?v(lt,We,fe,a,r,D):v(We,lt,fe,r,a,D);if(Xe!==t){if(Xe)continue;Se=!1;break}if(Ue){if(!kl(a,function(mt,vt){if(!Io(Ue,vt)&&(We===mt||E(We,mt,f,v,D)))return Ue.push(vt)})){Se=!1;break}}else if(!(We===lt||E(We,lt,f,v,D))){Se=!1;break}}return D.delete(r),D.delete(a),Se}function Av(r,a,f,v,E,D,B){switch(f){case Me:if(r.byteLength!=a.byteLength||r.byteOffset!=a.byteOffset)return!1;r=r.buffer,a=a.buffer;case ve:return!(r.byteLength!=a.byteLength||!D(new Ba(r),new Ba(a)));case Ye:case et:case pt:return Ti(+r,+a);case wt:return r.name==a.name&&r.message==a.message;case H:case ee:return r==a+"";case it:var k=Kl;case C:var Y=v&y;if(k||(k=Ia),r.size!=a.size&&!Y)return!1;var ce=B.get(r);if(ce)return ce==a;v|=M,B.set(r,a);var le=wp(k(r),k(a),v,E,D,B);return B.delete(r),le;case de:if(Fo)return Fo.call(r)==Fo.call(a)}return!1}function bv(r,a,f,v,E,D){var B=f&y,k=vu(r),Y=k.length,ce=vu(a),le=ce.length;if(Y!=le&&!B)return!1;for(var fe=Y;fe--;){var Se=k[fe];if(!(B?Se in a:Ct.call(a,Se)))return!1}var Ue=D.get(r),We=D.get(a);if(Ue&&We)return Ue==a&&We==r;var lt=!0;D.set(r,a),D.set(a,r);for(var Xe=B;++fe<Y;){Se=k[fe];var mt=r[Se],vt=a[Se];if(v)var Kn=B?v(vt,mt,Se,a,r,D):v(mt,vt,Se,r,a,D);if(!(Kn===t?mt===vt||E(mt,vt,f,v,D):Kn)){lt=!1;break}Xe||(Xe=Se=="constructor")}if(lt&&!Xe){var wn=r.constructor,Zn=a.constructor;wn!=Zn&&"constructor"in r&&"constructor"in a&&!(typeof wn=="function"&&wn instanceof wn&&typeof Zn=="function"&&Zn instanceof Zn)&&(lt=!1)}return D.delete(r),D.delete(a),lt}function $i(r){return wu(Dp(r,t,kp),r+"")}function vu(r){return Yd(r,un,Eu)}function yu(r){return Yd(r,Hn,Rp)}var Mu=Wa?function(r){return Wa.get(r)}:Hu;function rc(r){for(var a=r.name+"",f=Rs[a],v=Ct.call(Rs,a)?f.length:0;v--;){var E=f[v],D=E.func;if(D==null||D==r)return E.name}return a}function Is(r){var a=Ct.call(P,"placeholder")?P:r;return a.placeholder}function ke(){var r=P.iteratee||Bu;return r=r===Bu?jd:r,arguments.length?r(arguments[0],arguments[1]):r}function sc(r,a){var f=r.__data__;return Uv(a)?f[typeof a=="string"?"string":"hash"]:f.map}function Su(r){for(var a=un(r),f=a.length;f--;){var v=a[f],E=r[v];a[f]=[v,E,Lp(E)]}return a}function $r(r,a){var f=F0(r,a);return Zd(f)?f:t}function wv(r){var a=Ct.call(r,qr),f=r[qr];try{r[qr]=t;var v=!0}catch{}var E=Oa.call(r);return v&&(a?r[qr]=f:delete r[qr]),E}var Eu=jl?function(r){return r==null?[]:(r=Ut(r),gr(jl(r),function(a){return Ud.call(r,a)}))}:Vu,Rp=jl?function(r){for(var a=[];r;)_r(a,Eu(r)),r=za(r);return a}:Vu,Mn=An;($l&&Mn(new $l(new ArrayBuffer(1)))!=Me||Uo&&Mn(new Uo)!=it||Jl&&Mn(Jl.resolve())!=je||ws&&Mn(new ws)!=C||No&&Mn(new No)!=he)&&(Mn=function(r){var a=An(r),f=a==Et?r.constructor:t,v=f?Jr(f):"";if(v)switch(v){case lx:return Me;case ux:return it;case hx:return je;case fx:return C;case dx:return he}return a});function Rv(r,a,f){for(var v=-1,E=f.length;++v<E;){var D=f[v],B=D.size;switch(D.type){case"drop":r+=B;break;case"dropRight":a-=B;break;case"take":a=yn(a,r+B);break;case"takeRight":r=on(r,a-B);break}}return{start:r,end:a}}function Cv(r){var a=r.match(Aa);return a?a[1].split(_s):[]}function Cp(r,a,f){a=Sr(a,r);for(var v=-1,E=a.length,D=!1;++v<E;){var B=Hi(a[v]);if(!(D=r!=null&&f(r,B)))break;r=r[B]}return D||++v!=E?D:(E=r==null?0:r.length,!!E&&fc(E)&&Ji(B,E)&&(st(r)||Qr(r)))}function Pv(r){var a=r.length,f=new r.constructor(a);return a&&typeof r[0]=="string"&&Ct.call(r,"index")&&(f.index=r.index,f.input=r.input),f}function Pp(r){return typeof r.constructor=="function"&&!Wo(r)?Cs(za(r)):{}}function Lv(r,a,f){var v=r.constructor;switch(a){case ve:return gu(r);case Ye:case et:return new v(+r);case Me:return pv(r,f);case tt:case _e:case Ae:case ct:case Ve:case we:case Ge:case Ke:case It:return fp(r,f);case it:return new v;case pt:case ee:return new v(r);case H:return mv(r);case C:return new v;case de:return gv(r)}}function Iv(r,a){var f=a.length;if(!f)return r;var v=f-1;return a[v]=(f>1?"& ":"")+a[v],a=a.join(f>2?", ":" "),r.replace(gs,`{
/* [wrapped with `+a+`] */
`)}function Dv(r){return st(r)||Qr(r)||!!(Nd&&r&&r[Nd])}function Ji(r,a){var f=typeof r;return a=a??ie,!!a&&(f=="number"||f!="symbol"&&K.test(r))&&r>-1&&r%1==0&&r<a}function bn(r,a,f){if(!Xt(f))return!1;var v=typeof a;return(v=="number"?zn(f)&&Ji(a,f.length):v=="string"&&a in f)?Ti(f[a],r):!1}function Tu(r,a){if(st(r))return!1;var f=typeof r;return f=="number"||f=="symbol"||f=="boolean"||r==null||Yn(r)?!0:Yt.test(r)||!$t.test(r)||a!=null&&r in Ut(a)}function Uv(r){var a=typeof r;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?r!=="__proto__":r===null}function Au(r){var a=rc(r),f=P[a];if(typeof f!="function"||!(a in xt.prototype))return!1;if(r===f)return!0;var v=Mu(f);return!!v&&r===v[0]}function Nv(r){return!!Ld&&Ld in r}var Ov=Ua?Qi:ku;function Wo(r){var a=r&&r.constructor,f=typeof a=="function"&&a.prototype||bs;return r===f}function Lp(r){return r===r&&!Xt(r)}function Ip(r,a){return function(f){return f==null?!1:f[r]===a&&(a!==t||r in Ut(f))}}function Fv(r){var a=uc(r,function(v){return f.size===h&&f.clear(),v}),f=a.cache;return a}function Bv(r,a){var f=r[1],v=a[1],E=f|v,D=E<(x|_|L),B=v==L&&f==S||v==L&&f==F&&r[7].length<=a[8]||v==(L|F)&&a[7].length<=a[8]&&f==S;if(!(D||B))return r;v&x&&(r[2]=a[2],E|=f&x?0:T);var k=a[3];if(k){var Y=r[3];r[3]=Y?pp(Y,k,a[4]):k,r[4]=Y?xr(r[3],d):a[4]}return k=a[5],k&&(Y=r[5],r[5]=Y?mp(Y,k,a[6]):k,r[6]=Y?xr(r[5],d):a[6]),k=a[7],k&&(r[7]=k),v&L&&(r[8]=r[8]==null?a[8]:yn(r[8],a[8])),r[9]==null&&(r[9]=a[9]),r[0]=a[0],r[1]=E,r}function zv(r){var a=[];if(r!=null)for(var f in Ut(r))a.push(f);return a}function Hv(r){return Oa.call(r)}function Dp(r,a,f){return a=on(a===t?r.length-1:a,0),function(){for(var v=arguments,E=-1,D=on(v.length-a,0),B=ne(D);++E<D;)B[E]=v[a+E];E=-1;for(var k=ne(a+1);++E<a;)k[E]=v[E];return k[a]=f(B),Wn(r,this,k)}}function Up(r,a){return a.length<2?r:jr(r,oi(a,0,-1))}function Vv(r,a){for(var f=r.length,v=yn(a.length,f),E=Bn(r);v--;){var D=a[v];r[v]=Ji(D,f)?E[D]:t}return r}function bu(r,a){if(!(a==="constructor"&&typeof r[a]=="function")&&a!="__proto__")return r[a]}var Np=Fp(rp),Xo=nx||function(r,a){return _n.setTimeout(r,a)},wu=Fp(uv);function Op(r,a,f){var v=a+"";return wu(r,Iv(v,kv(Cv(v),f)))}function Fp(r){var a=0,f=0;return function(){var v=ox(),E=W-(v-f);if(f=v,E>0){if(++a>=G)return arguments[0]}else a=0;return r.apply(t,arguments)}}function oc(r,a){var f=-1,v=r.length,E=v-1;for(a=a===t?v:a;++f<a;){var D=lu(f,E),B=r[D];r[D]=r[f],r[f]=B}return r.length=a,r}var Bp=Fv(function(r){var a=[];return r.charCodeAt(0)===46&&a.push(""),r.replace(Fi,function(f,v,E,D){a.push(E?D.replace(Dl,"$1"):v||f)}),a});function Hi(r){if(typeof r=="string"||Yn(r))return r;var a=r+"";return a=="0"&&1/r==-ue?"-0":a}function Jr(r){if(r!=null){try{return Na.call(r)}catch{}try{return r+""}catch{}}return""}function kv(r,a){return ni(ae,function(f){var v="_."+f[0];a&f[1]&&!Pa(r,v)&&r.push(v)}),r.sort()}function zp(r){if(r instanceof xt)return r.clone();var a=new ri(r.__wrapped__,r.__chain__);return a.__actions__=Bn(r.__actions__),a.__index__=r.__index__,a.__values__=r.__values__,a}function Gv(r,a,f){(f?bn(r,a,f):a===t)?a=1:a=on(at(a),0);var v=r==null?0:r.length;if(!v||a<1)return[];for(var E=0,D=0,B=ne(ka(v/a));E<v;)B[D++]=oi(r,E,E+=a);return B}function Wv(r){for(var a=-1,f=r==null?0:r.length,v=0,E=[];++a<f;){var D=r[a];D&&(E[v++]=D)}return E}function Xv(){var r=arguments.length;if(!r)return[];for(var a=ne(r-1),f=arguments[0],v=r;v--;)a[v-1]=arguments[v];return _r(st(f)?Bn(f):[f],xn(a,1))}var qv=ft(function(r,a){return Qt(r)?zo(r,xn(a,1,Qt,!0)):[]}),Yv=ft(function(r,a){var f=ai(a);return Qt(f)&&(f=t),Qt(r)?zo(r,xn(a,1,Qt,!0),ke(f,2)):[]}),Kv=ft(function(r,a){var f=ai(a);return Qt(f)&&(f=t),Qt(r)?zo(r,xn(a,1,Qt,!0),t,f):[]});function Zv(r,a,f){var v=r==null?0:r.length;return v?(a=f||a===t?1:at(a),oi(r,a<0?0:a,v)):[]}function jv(r,a,f){var v=r==null?0:r.length;return v?(a=f||a===t?1:at(a),a=v-a,oi(r,0,a<0?0:a)):[]}function $v(r,a){return r&&r.length?Ja(r,ke(a,3),!0,!0):[]}function Jv(r,a){return r&&r.length?Ja(r,ke(a,3),!0):[]}function Qv(r,a,f,v){var E=r==null?0:r.length;return E?(f&&typeof f!="number"&&bn(r,a,f)&&(f=0,v=E),Xx(r,a,f,v)):[]}function Hp(r,a,f){var v=r==null?0:r.length;if(!v)return-1;var E=f==null?0:at(f);return E<0&&(E=on(v+E,0)),La(r,ke(a,3),E)}function Vp(r,a,f){var v=r==null?0:r.length;if(!v)return-1;var E=v-1;return f!==t&&(E=at(f),E=f<0?on(v+E,0):yn(E,v-1)),La(r,ke(a,3),E,!0)}function kp(r){var a=r==null?0:r.length;return a?xn(r,1):[]}function ey(r){var a=r==null?0:r.length;return a?xn(r,ue):[]}function ty(r,a){var f=r==null?0:r.length;return f?(a=a===t?1:at(a),xn(r,a)):[]}function ny(r){for(var a=-1,f=r==null?0:r.length,v={};++a<f;){var E=r[a];v[E[0]]=E[1]}return v}function Gp(r){return r&&r.length?r[0]:t}function iy(r,a,f){var v=r==null?0:r.length;if(!v)return-1;var E=f==null?0:at(f);return E<0&&(E=on(v+E,0)),Ss(r,a,E)}function ry(r){var a=r==null?0:r.length;return a?oi(r,0,-1):[]}var sy=ft(function(r){var a=kt(r,pu);return a.length&&a[0]===r[0]?ru(a):[]}),oy=ft(function(r){var a=ai(r),f=kt(r,pu);return a===ai(f)?a=t:f.pop(),f.length&&f[0]===r[0]?ru(f,ke(a,2)):[]}),ay=ft(function(r){var a=ai(r),f=kt(r,pu);return a=typeof a=="function"?a:t,a&&f.pop(),f.length&&f[0]===r[0]?ru(f,t,a):[]});function cy(r,a){return r==null?"":rx.call(r,a)}function ai(r){var a=r==null?0:r.length;return a?r[a-1]:t}function ly(r,a,f){var v=r==null?0:r.length;if(!v)return-1;var E=v;return f!==t&&(E=at(f),E=E<0?on(v+E,0):yn(E,v-1)),a===a?k0(r,a,E):La(r,Ed,E,!0)}function uy(r,a){return r&&r.length?ep(r,at(a)):t}var hy=ft(Wp);function Wp(r,a){return r&&r.length&&a&&a.length?cu(r,a):r}function fy(r,a,f){return r&&r.length&&a&&a.length?cu(r,a,ke(f,2)):r}function dy(r,a,f){return r&&r.length&&a&&a.length?cu(r,a,t,f):r}var py=$i(function(r,a){var f=r==null?0:r.length,v=eu(r,a);return ip(r,kt(a,function(E){return Ji(E,f)?+E:E}).sort(dp)),v});function my(r,a){var f=[];if(!(r&&r.length))return f;var v=-1,E=[],D=r.length;for(a=ke(a,3);++v<D;){var B=r[v];a(B,v,r)&&(f.push(B),E.push(v))}return ip(r,E),f}function Ru(r){return r==null?r:cx.call(r)}function gy(r,a,f){var v=r==null?0:r.length;return v?(f&&typeof f!="number"&&bn(r,a,f)?(a=0,f=v):(a=a==null?0:at(a),f=f===t?v:at(f)),oi(r,a,f)):[]}function _y(r,a){return $a(r,a)}function xy(r,a,f){return hu(r,a,ke(f,2))}function vy(r,a){var f=r==null?0:r.length;if(f){var v=$a(r,a);if(v<f&&Ti(r[v],a))return v}return-1}function yy(r,a){return $a(r,a,!0)}function My(r,a,f){return hu(r,a,ke(f,2),!0)}function Sy(r,a){var f=r==null?0:r.length;if(f){var v=$a(r,a,!0)-1;if(Ti(r[v],a))return v}return-1}function Ey(r){return r&&r.length?sp(r):[]}function Ty(r,a){return r&&r.length?sp(r,ke(a,2)):[]}function Ay(r){var a=r==null?0:r.length;return a?oi(r,1,a):[]}function by(r,a,f){return r&&r.length?(a=f||a===t?1:at(a),oi(r,0,a<0?0:a)):[]}function wy(r,a,f){var v=r==null?0:r.length;return v?(a=f||a===t?1:at(a),a=v-a,oi(r,a<0?0:a,v)):[]}function Ry(r,a){return r&&r.length?Ja(r,ke(a,3),!1,!0):[]}function Cy(r,a){return r&&r.length?Ja(r,ke(a,3)):[]}var Py=ft(function(r){return Mr(xn(r,1,Qt,!0))}),Ly=ft(function(r){var a=ai(r);return Qt(a)&&(a=t),Mr(xn(r,1,Qt,!0),ke(a,2))}),Iy=ft(function(r){var a=ai(r);return a=typeof a=="function"?a:t,Mr(xn(r,1,Qt,!0),t,a)});function Dy(r){return r&&r.length?Mr(r):[]}function Uy(r,a){return r&&r.length?Mr(r,ke(a,2)):[]}function Ny(r,a){return a=typeof a=="function"?a:t,r&&r.length?Mr(r,t,a):[]}function Cu(r){if(!(r&&r.length))return[];var a=0;return r=gr(r,function(f){if(Qt(f))return a=on(f.length,a),!0}),ql(a,function(f){return kt(r,Gl(f))})}function Xp(r,a){if(!(r&&r.length))return[];var f=Cu(r);return a==null?f:kt(f,function(v){return Wn(a,t,v)})}var Oy=ft(function(r,a){return Qt(r)?zo(r,a):[]}),Fy=ft(function(r){return du(gr(r,Qt))}),By=ft(function(r){var a=ai(r);return Qt(a)&&(a=t),du(gr(r,Qt),ke(a,2))}),zy=ft(function(r){var a=ai(r);return a=typeof a=="function"?a:t,du(gr(r,Qt),t,a)}),Hy=ft(Cu);function Vy(r,a){return lp(r||[],a||[],Bo)}function ky(r,a){return lp(r||[],a||[],ko)}var Gy=ft(function(r){var a=r.length,f=a>1?r[a-1]:t;return f=typeof f=="function"?(r.pop(),f):t,Xp(r,f)});function qp(r){var a=P(r);return a.__chain__=!0,a}function Wy(r,a){return a(r),r}function ac(r,a){return a(r)}var Xy=$i(function(r){var a=r.length,f=a?r[0]:0,v=this.__wrapped__,E=function(D){return eu(D,r)};return a>1||this.__actions__.length||!(v instanceof xt)||!Ji(f)?this.thru(E):(v=v.slice(f,+f+(a?1:0)),v.__actions__.push({func:ac,args:[E],thisArg:t}),new ri(v,this.__chain__).thru(function(D){return a&&!D.length&&D.push(t),D}))});function qy(){return qp(this)}function Yy(){return new ri(this.value(),this.__chain__)}function Ky(){this.__values__===t&&(this.__values__=om(this.value()));var r=this.__index__>=this.__values__.length,a=r?t:this.__values__[this.__index__++];return{done:r,value:a}}function Zy(){return this}function jy(r){for(var a,f=this;f instanceof qa;){var v=zp(f);v.__index__=0,v.__values__=t,a?E.__wrapped__=v:a=v;var E=v;f=f.__wrapped__}return E.__wrapped__=r,a}function $y(){var r=this.__wrapped__;if(r instanceof xt){var a=r;return this.__actions__.length&&(a=new xt(this)),a=a.reverse(),a.__actions__.push({func:ac,args:[Ru],thisArg:t}),new ri(a,this.__chain__)}return this.thru(Ru)}function Jy(){return cp(this.__wrapped__,this.__actions__)}var Qy=Qa(function(r,a,f){Ct.call(r,f)?++r[f]:Zi(r,f,1)});function eM(r,a,f){var v=st(r)?Md:Wx;return f&&bn(r,a,f)&&(a=t),v(r,ke(a,3))}function tM(r,a){var f=st(r)?gr:Xd;return f(r,ke(a,3))}var nM=vp(Hp),iM=vp(Vp);function rM(r,a){return xn(cc(r,a),1)}function sM(r,a){return xn(cc(r,a),ue)}function oM(r,a,f){return f=f===t?1:at(f),xn(cc(r,a),f)}function Yp(r,a){var f=st(r)?ni:yr;return f(r,ke(a,3))}function Kp(r,a){var f=st(r)?A0:Wd;return f(r,ke(a,3))}var aM=Qa(function(r,a,f){Ct.call(r,f)?r[f].push(a):Zi(r,f,[a])});function cM(r,a,f,v){r=zn(r)?r:Us(r),f=f&&!v?at(f):0;var E=r.length;return f<0&&(f=on(E+f,0)),dc(r)?f<=E&&r.indexOf(a,f)>-1:!!E&&Ss(r,a,f)>-1}var lM=ft(function(r,a,f){var v=-1,E=typeof a=="function",D=zn(r)?ne(r.length):[];return yr(r,function(B){D[++v]=E?Wn(a,B,f):Ho(B,a,f)}),D}),uM=Qa(function(r,a,f){Zi(r,f,a)});function cc(r,a){var f=st(r)?kt:$d;return f(r,ke(a,3))}function hM(r,a,f,v){return r==null?[]:(st(a)||(a=a==null?[]:[a]),f=v?t:f,st(f)||(f=f==null?[]:[f]),tp(r,a,f))}var fM=Qa(function(r,a,f){r[f?0:1].push(a)},function(){return[[],[]]});function dM(r,a,f){var v=st(r)?Vl:Ad,E=arguments.length<3;return v(r,ke(a,4),f,E,yr)}function pM(r,a,f){var v=st(r)?b0:Ad,E=arguments.length<3;return v(r,ke(a,4),f,E,Wd)}function mM(r,a){var f=st(r)?gr:Xd;return f(r,hc(ke(a,3)))}function gM(r){var a=st(r)?Hd:cv;return a(r)}function _M(r,a,f){(f?bn(r,a,f):a===t)?a=1:a=at(a);var v=st(r)?zx:lv;return v(r,a)}function xM(r){var a=st(r)?Hx:hv;return a(r)}function vM(r){if(r==null)return 0;if(zn(r))return dc(r)?Ts(r):r.length;var a=Mn(r);return a==it||a==C?r.size:ou(r).length}function yM(r,a,f){var v=st(r)?kl:fv;return f&&bn(r,a,f)&&(a=t),v(r,ke(a,3))}var MM=ft(function(r,a){if(r==null)return[];var f=a.length;return f>1&&bn(r,a[0],a[1])?a=[]:f>2&&bn(a[0],a[1],a[2])&&(a=[a[0]]),tp(r,xn(a,1),[])}),lc=tx||function(){return _n.Date.now()};function SM(r,a){if(typeof a!="function")throw new ii(c);return r=at(r),function(){if(--r<1)return a.apply(this,arguments)}}function Zp(r,a,f){return a=f?t:a,a=r&&a==null?r.length:a,ji(r,L,t,t,t,t,a)}function jp(r,a){var f;if(typeof a!="function")throw new ii(c);return r=at(r),function(){return--r>0&&(f=a.apply(this,arguments)),r<=1&&(a=t),f}}var Pu=ft(function(r,a,f){var v=x;if(f.length){var E=xr(f,Is(Pu));v|=N}return ji(r,v,a,f,E)}),$p=ft(function(r,a,f){var v=x|_;if(f.length){var E=xr(f,Is($p));v|=N}return ji(a,v,r,f,E)});function Jp(r,a,f){a=f?t:a;var v=ji(r,S,t,t,t,t,t,a);return v.placeholder=Jp.placeholder,v}function Qp(r,a,f){a=f?t:a;var v=ji(r,w,t,t,t,t,t,a);return v.placeholder=Qp.placeholder,v}function em(r,a,f){var v,E,D,B,k,Y,ce=0,le=!1,fe=!1,Se=!0;if(typeof r!="function")throw new ii(c);a=ci(a)||0,Xt(f)&&(le=!!f.leading,fe="maxWait"in f,D=fe?on(ci(f.maxWait)||0,a):D,Se="trailing"in f?!!f.trailing:Se);function Ue(en){var Ai=v,tr=E;return v=E=t,ce=en,B=r.apply(tr,Ai),B}function We(en){return ce=en,k=Xo(mt,a),le?Ue(en):B}function lt(en){var Ai=en-Y,tr=en-ce,vm=a-Ai;return fe?yn(vm,D-tr):vm}function Xe(en){var Ai=en-Y,tr=en-ce;return Y===t||Ai>=a||Ai<0||fe&&tr>=D}function mt(){var en=lc();if(Xe(en))return vt(en);k=Xo(mt,lt(en))}function vt(en){return k=t,Se&&v?Ue(en):(v=E=t,B)}function Kn(){k!==t&&up(k),ce=0,v=Y=E=k=t}function wn(){return k===t?B:vt(lc())}function Zn(){var en=lc(),Ai=Xe(en);if(v=arguments,E=this,Y=en,Ai){if(k===t)return We(Y);if(fe)return up(k),k=Xo(mt,a),Ue(Y)}return k===t&&(k=Xo(mt,a)),B}return Zn.cancel=Kn,Zn.flush=wn,Zn}var EM=ft(function(r,a){return Gd(r,1,a)}),TM=ft(function(r,a,f){return Gd(r,ci(a)||0,f)});function AM(r){return ji(r,R)}function uc(r,a){if(typeof r!="function"||a!=null&&typeof a!="function")throw new ii(c);var f=function(){var v=arguments,E=a?a.apply(this,v):v[0],D=f.cache;if(D.has(E))return D.get(E);var B=r.apply(this,v);return f.cache=D.set(E,B)||D,B};return f.cache=new(uc.Cache||Ki),f}uc.Cache=Ki;function hc(r){if(typeof r!="function")throw new ii(c);return function(){var a=arguments;switch(a.length){case 0:return!r.call(this);case 1:return!r.call(this,a[0]);case 2:return!r.call(this,a[0],a[1]);case 3:return!r.call(this,a[0],a[1],a[2])}return!r.apply(this,a)}}function bM(r){return jp(2,r)}var wM=dv(function(r,a){a=a.length==1&&st(a[0])?kt(a[0],Xn(ke())):kt(xn(a,1),Xn(ke()));var f=a.length;return ft(function(v){for(var E=-1,D=yn(v.length,f);++E<D;)v[E]=a[E].call(this,v[E]);return Wn(r,this,v)})}),Lu=ft(function(r,a){var f=xr(a,Is(Lu));return ji(r,N,t,a,f)}),tm=ft(function(r,a){var f=xr(a,Is(tm));return ji(r,I,t,a,f)}),RM=$i(function(r,a){return ji(r,F,t,t,t,a)});function CM(r,a){if(typeof r!="function")throw new ii(c);return a=a===t?a:at(a),ft(r,a)}function PM(r,a){if(typeof r!="function")throw new ii(c);return a=a==null?0:on(at(a),0),ft(function(f){var v=f[a],E=Er(f,0,a);return v&&_r(E,v),Wn(r,this,E)})}function LM(r,a,f){var v=!0,E=!0;if(typeof r!="function")throw new ii(c);return Xt(f)&&(v="leading"in f?!!f.leading:v,E="trailing"in f?!!f.trailing:E),em(r,a,{leading:v,maxWait:a,trailing:E})}function IM(r){return Zp(r,1)}function DM(r,a){return Lu(mu(a),r)}function UM(){if(!arguments.length)return[];var r=arguments[0];return st(r)?r:[r]}function NM(r){return si(r,g)}function OM(r,a){return a=typeof a=="function"?a:t,si(r,g,a)}function FM(r){return si(r,m|g)}function BM(r,a){return a=typeof a=="function"?a:t,si(r,m|g,a)}function zM(r,a){return a==null||kd(r,a,un(a))}function Ti(r,a){return r===a||r!==r&&a!==a}var HM=ic(iu),VM=ic(function(r,a){return r>=a}),Qr=Kd(function(){return arguments}())?Kd:function(r){return Kt(r)&&Ct.call(r,"callee")&&!Ud.call(r,"callee")},st=ne.isArray,kM=md?Xn(md):jx;function zn(r){return r!=null&&fc(r.length)&&!Qi(r)}function Qt(r){return Kt(r)&&zn(r)}function GM(r){return r===!0||r===!1||Kt(r)&&An(r)==Ye}var Tr=ix||ku,WM=gd?Xn(gd):$x;function XM(r){return Kt(r)&&r.nodeType===1&&!qo(r)}function qM(r){if(r==null)return!0;if(zn(r)&&(st(r)||typeof r=="string"||typeof r.splice=="function"||Tr(r)||Ds(r)||Qr(r)))return!r.length;var a=Mn(r);if(a==it||a==C)return!r.size;if(Wo(r))return!ou(r).length;for(var f in r)if(Ct.call(r,f))return!1;return!0}function YM(r,a){return Vo(r,a)}function KM(r,a,f){f=typeof f=="function"?f:t;var v=f?f(r,a):t;return v===t?Vo(r,a,t,f):!!v}function Iu(r){if(!Kt(r))return!1;var a=An(r);return a==wt||a==ot||typeof r.message=="string"&&typeof r.name=="string"&&!qo(r)}function ZM(r){return typeof r=="number"&&Od(r)}function Qi(r){if(!Xt(r))return!1;var a=An(r);return a==V||a==Ot||a==Pe||a==nt}function nm(r){return typeof r=="number"&&r==at(r)}function fc(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=ie}function Xt(r){var a=typeof r;return r!=null&&(a=="object"||a=="function")}function Kt(r){return r!=null&&typeof r=="object"}var im=_d?Xn(_d):Qx;function jM(r,a){return r===a||su(r,a,Su(a))}function $M(r,a,f){return f=typeof f=="function"?f:t,su(r,a,Su(a),f)}function JM(r){return rm(r)&&r!=+r}function QM(r){if(Ov(r))throw new rt(o);return Zd(r)}function eS(r){return r===null}function tS(r){return r==null}function rm(r){return typeof r=="number"||Kt(r)&&An(r)==pt}function qo(r){if(!Kt(r)||An(r)!=Et)return!1;var a=za(r);if(a===null)return!0;var f=Ct.call(a,"constructor")&&a.constructor;return typeof f=="function"&&f instanceof f&&Na.call(f)==$0}var Du=xd?Xn(xd):ev;function nS(r){return nm(r)&&r>=-ie&&r<=ie}var sm=vd?Xn(vd):tv;function dc(r){return typeof r=="string"||!st(r)&&Kt(r)&&An(r)==ee}function Yn(r){return typeof r=="symbol"||Kt(r)&&An(r)==de}var Ds=yd?Xn(yd):nv;function iS(r){return r===t}function rS(r){return Kt(r)&&Mn(r)==he}function sS(r){return Kt(r)&&An(r)==ze}var oS=ic(au),aS=ic(function(r,a){return r<=a});function om(r){if(!r)return[];if(zn(r))return dc(r)?Si(r):Bn(r);if(Do&&r[Do])return z0(r[Do]());var a=Mn(r),f=a==it?Kl:a==C?Ia:Us;return f(r)}function er(r){if(!r)return r===0?r:0;if(r=ci(r),r===ue||r===-ue){var a=r<0?-1:1;return a*ye}return r===r?r:0}function at(r){var a=er(r),f=a%1;return a===a?f?a-f:a:0}function am(r){return r?Zr(at(r),0,be):0}function ci(r){if(typeof r=="number")return r;if(Yn(r))return Re;if(Xt(r)){var a=typeof r.valueOf=="function"?r.valueOf():r;r=Xt(a)?a+"":a}if(typeof r!="string")return r===0?r:+r;r=bd(r);var f=q.test(r);return f||te.test(r)?S0(r.slice(2),f?2:8):U.test(r)?Re:+r}function cm(r){return zi(r,Hn(r))}function cS(r){return r?Zr(at(r),-ie,ie):r===0?r:0}function Rt(r){return r==null?"":qn(r)}var lS=Ps(function(r,a){if(Wo(a)||zn(a)){zi(a,un(a),r);return}for(var f in a)Ct.call(a,f)&&Bo(r,f,a[f])}),lm=Ps(function(r,a){zi(a,Hn(a),r)}),pc=Ps(function(r,a,f,v){zi(a,Hn(a),r,v)}),uS=Ps(function(r,a,f,v){zi(a,un(a),r,v)}),hS=$i(eu);function fS(r,a){var f=Cs(r);return a==null?f:Vd(f,a)}var dS=ft(function(r,a){r=Ut(r);var f=-1,v=a.length,E=v>2?a[2]:t;for(E&&bn(a[0],a[1],E)&&(v=1);++f<v;)for(var D=a[f],B=Hn(D),k=-1,Y=B.length;++k<Y;){var ce=B[k],le=r[ce];(le===t||Ti(le,bs[ce])&&!Ct.call(r,ce))&&(r[ce]=D[ce])}return r}),pS=ft(function(r){return r.push(t,bp),Wn(um,t,r)});function mS(r,a){return Sd(r,ke(a,3),Bi)}function gS(r,a){return Sd(r,ke(a,3),nu)}function _S(r,a){return r==null?r:tu(r,ke(a,3),Hn)}function xS(r,a){return r==null?r:qd(r,ke(a,3),Hn)}function vS(r,a){return r&&Bi(r,ke(a,3))}function yS(r,a){return r&&nu(r,ke(a,3))}function MS(r){return r==null?[]:Za(r,un(r))}function SS(r){return r==null?[]:Za(r,Hn(r))}function Uu(r,a,f){var v=r==null?t:jr(r,a);return v===t?f:v}function ES(r,a){return r!=null&&Cp(r,a,qx)}function Nu(r,a){return r!=null&&Cp(r,a,Yx)}var TS=Mp(function(r,a,f){a!=null&&typeof a.toString!="function"&&(a=Oa.call(a)),r[a]=f},Fu(Vn)),AS=Mp(function(r,a,f){a!=null&&typeof a.toString!="function"&&(a=Oa.call(a)),Ct.call(r,a)?r[a].push(f):r[a]=[f]},ke),bS=ft(Ho);function un(r){return zn(r)?zd(r):ou(r)}function Hn(r){return zn(r)?zd(r,!0):iv(r)}function wS(r,a){var f={};return a=ke(a,3),Bi(r,function(v,E,D){Zi(f,a(v,E,D),v)}),f}function RS(r,a){var f={};return a=ke(a,3),Bi(r,function(v,E,D){Zi(f,E,a(v,E,D))}),f}var CS=Ps(function(r,a,f){ja(r,a,f)}),um=Ps(function(r,a,f,v){ja(r,a,f,v)}),PS=$i(function(r,a){var f={};if(r==null)return f;var v=!1;a=kt(a,function(D){return D=Sr(D,r),v||(v=D.length>1),D}),zi(r,yu(r),f),v&&(f=si(f,m|p|g,Tv));for(var E=a.length;E--;)fu(f,a[E]);return f});function LS(r,a){return hm(r,hc(ke(a)))}var IS=$i(function(r,a){return r==null?{}:sv(r,a)});function hm(r,a){if(r==null)return{};var f=kt(yu(r),function(v){return[v]});return a=ke(a),np(r,f,function(v,E){return a(v,E[0])})}function DS(r,a,f){a=Sr(a,r);var v=-1,E=a.length;for(E||(E=1,r=t);++v<E;){var D=r==null?t:r[Hi(a[v])];D===t&&(v=E,D=f),r=Qi(D)?D.call(r):D}return r}function US(r,a,f){return r==null?r:ko(r,a,f)}function NS(r,a,f,v){return v=typeof v=="function"?v:t,r==null?r:ko(r,a,f,v)}var fm=Tp(un),dm=Tp(Hn);function OS(r,a,f){var v=st(r),E=v||Tr(r)||Ds(r);if(a=ke(a,4),f==null){var D=r&&r.constructor;E?f=v?new D:[]:Xt(r)?f=Qi(D)?Cs(za(r)):{}:f={}}return(E?ni:Bi)(r,function(B,k,Y){return a(f,B,k,Y)}),f}function FS(r,a){return r==null?!0:fu(r,a)}function BS(r,a,f){return r==null?r:ap(r,a,mu(f))}function zS(r,a,f,v){return v=typeof v=="function"?v:t,r==null?r:ap(r,a,mu(f),v)}function Us(r){return r==null?[]:Yl(r,un(r))}function HS(r){return r==null?[]:Yl(r,Hn(r))}function VS(r,a,f){return f===t&&(f=a,a=t),f!==t&&(f=ci(f),f=f===f?f:0),a!==t&&(a=ci(a),a=a===a?a:0),Zr(ci(r),a,f)}function kS(r,a,f){return a=er(a),f===t?(f=a,a=0):f=er(f),r=ci(r),Kx(r,a,f)}function GS(r,a,f){if(f&&typeof f!="boolean"&&bn(r,a,f)&&(a=f=t),f===t&&(typeof a=="boolean"?(f=a,a=t):typeof r=="boolean"&&(f=r,r=t)),r===t&&a===t?(r=0,a=1):(r=er(r),a===t?(a=r,r=0):a=er(a)),r>a){var v=r;r=a,a=v}if(f||r%1||a%1){var E=Fd();return yn(r+E*(a-r+M0("1e-"+((E+"").length-1))),a)}return lu(r,a)}var WS=Ls(function(r,a,f){return a=a.toLowerCase(),r+(f?pm(a):a)});function pm(r){return Ou(Rt(r).toLowerCase())}function mm(r){return r=Rt(r),r&&r.replace(xe,U0).replace(h0,"")}function XS(r,a,f){r=Rt(r),a=qn(a);var v=r.length;f=f===t?v:Zr(at(f),0,v);var E=f;return f-=a.length,f>=0&&r.slice(f,E)==a}function qS(r){return r=Rt(r),r&&$e.test(r)?r.replace(pe,N0):r}function YS(r){return r=Rt(r),r&&yi.test(r)?r.replace(Jt,"\\$&"):r}var KS=Ls(function(r,a,f){return r+(f?"-":"")+a.toLowerCase()}),ZS=Ls(function(r,a,f){return r+(f?" ":"")+a.toLowerCase()}),jS=xp("toLowerCase");function $S(r,a,f){r=Rt(r),a=at(a);var v=a?Ts(r):0;if(!a||v>=a)return r;var E=(a-v)/2;return nc(Ga(E),f)+r+nc(ka(E),f)}function JS(r,a,f){r=Rt(r),a=at(a);var v=a?Ts(r):0;return a&&v<a?r+nc(a-v,f):r}function QS(r,a,f){r=Rt(r),a=at(a);var v=a?Ts(r):0;return a&&v<a?nc(a-v,f)+r:r}function eE(r,a,f){return f||a==null?a=0:a&&(a=+a),ax(Rt(r).replace(Mi,""),a||0)}function tE(r,a,f){return(f?bn(r,a,f):a===t)?a=1:a=at(a),uu(Rt(r),a)}function nE(){var r=arguments,a=Rt(r[0]);return r.length<3?a:a.replace(r[1],r[2])}var iE=Ls(function(r,a,f){return r+(f?"_":"")+a.toLowerCase()});function rE(r,a,f){return f&&typeof f!="number"&&bn(r,a,f)&&(a=f=t),f=f===t?be:f>>>0,f?(r=Rt(r),r&&(typeof a=="string"||a!=null&&!Du(a))&&(a=qn(a),!a&&Es(r))?Er(Si(r),0,f):r.split(a,f)):[]}var sE=Ls(function(r,a,f){return r+(f?" ":"")+Ou(a)});function oE(r,a,f){return r=Rt(r),f=f==null?0:Zr(at(f),0,r.length),a=qn(a),r.slice(f,f+a.length)==a}function aE(r,a,f){var v=P.templateSettings;f&&bn(r,a,f)&&(a=t),r=Rt(r),a=pc({},a,v,Ap);var E=pc({},a.imports,v.imports,Ap),D=un(E),B=Yl(E,D),k,Y,ce=0,le=a.interpolate||Te,fe="__p += '",Se=Zl((a.escape||Te).source+"|"+le.source+"|"+(le===_t?Ul:Te).source+"|"+(a.evaluate||Te).source+"|$","g"),Ue="//# sourceURL="+(Ct.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++g0+"]")+`
`;r.replace(Se,function(Xe,mt,vt,Kn,wn,Zn){return vt||(vt=Kn),fe+=r.slice(ce,Zn).replace(De,O0),mt&&(k=!0,fe+=`' +
__e(`+mt+`) +
'`),wn&&(Y=!0,fe+=`';
`+wn+`;
__p += '`),vt&&(fe+=`' +
((__t = (`+vt+`)) == null ? '' : __t) +
'`),ce=Zn+Xe.length,Xe}),fe+=`';
`;var We=Ct.call(a,"variable")&&a.variable;if(!We)fe=`with (obj) {
`+fe+`
}
`;else if(wa.test(We))throw new rt(l);fe=(Y?fe.replace(A,""):fe).replace(j,"$1").replace($,"$1;"),fe="function("+(We||"obj")+`) {
`+(We?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(k?", __e = _.escape":"")+(Y?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+fe+`return __p
}`;var lt=_m(function(){return At(D,Ue+"return "+fe).apply(t,B)});if(lt.source=fe,Iu(lt))throw lt;return lt}function cE(r){return Rt(r).toLowerCase()}function lE(r){return Rt(r).toUpperCase()}function uE(r,a,f){if(r=Rt(r),r&&(f||a===t))return bd(r);if(!r||!(a=qn(a)))return r;var v=Si(r),E=Si(a),D=wd(v,E),B=Rd(v,E)+1;return Er(v,D,B).join("")}function hE(r,a,f){if(r=Rt(r),r&&(f||a===t))return r.slice(0,Pd(r)+1);if(!r||!(a=qn(a)))return r;var v=Si(r),E=Rd(v,Si(a))+1;return Er(v,0,E).join("")}function fE(r,a,f){if(r=Rt(r),r&&(f||a===t))return r.replace(Mi,"");if(!r||!(a=qn(a)))return r;var v=Si(r),E=wd(v,Si(a));return Er(v,E).join("")}function dE(r,a){var f=b,v=O;if(Xt(a)){var E="separator"in a?a.separator:E;f="length"in a?at(a.length):f,v="omission"in a?qn(a.omission):v}r=Rt(r);var D=r.length;if(Es(r)){var B=Si(r);D=B.length}if(f>=D)return r;var k=f-Ts(v);if(k<1)return v;var Y=B?Er(B,0,k).join(""):r.slice(0,k);if(E===t)return Y+v;if(B&&(k+=Y.length-k),Du(E)){if(r.slice(k).search(E)){var ce,le=Y;for(E.global||(E=Zl(E.source,Rt(Ra.exec(E))+"g")),E.lastIndex=0;ce=E.exec(le);)var fe=ce.index;Y=Y.slice(0,fe===t?k:fe)}}else if(r.indexOf(qn(E),k)!=k){var Se=Y.lastIndexOf(E);Se>-1&&(Y=Y.slice(0,Se))}return Y+v}function pE(r){return r=Rt(r),r&&Oe.test(r)?r.replace(re,G0):r}var mE=Ls(function(r,a,f){return r+(f?" ":"")+a.toUpperCase()}),Ou=xp("toUpperCase");function gm(r,a,f){return r=Rt(r),a=f?t:a,a===t?B0(r)?q0(r):C0(r):r.match(a)||[]}var _m=ft(function(r,a){try{return Wn(r,t,a)}catch(f){return Iu(f)?f:new rt(f)}}),gE=$i(function(r,a){return ni(a,function(f){f=Hi(f),Zi(r,f,Pu(r[f],r))}),r});function _E(r){var a=r==null?0:r.length,f=ke();return r=a?kt(r,function(v){if(typeof v[1]!="function")throw new ii(c);return[f(v[0]),v[1]]}):[],ft(function(v){for(var E=-1;++E<a;){var D=r[E];if(Wn(D[0],this,v))return Wn(D[1],this,v)}})}function xE(r){return Gx(si(r,m))}function Fu(r){return function(){return r}}function vE(r,a){return r==null||r!==r?a:r}var yE=yp(),ME=yp(!0);function Vn(r){return r}function Bu(r){return jd(typeof r=="function"?r:si(r,m))}function SE(r){return Jd(si(r,m))}function EE(r,a){return Qd(r,si(a,m))}var TE=ft(function(r,a){return function(f){return Ho(f,r,a)}}),AE=ft(function(r,a){return function(f){return Ho(r,f,a)}});function zu(r,a,f){var v=un(a),E=Za(a,v);f==null&&!(Xt(a)&&(E.length||!v.length))&&(f=a,a=r,r=this,E=Za(a,un(a)));var D=!(Xt(f)&&"chain"in f)||!!f.chain,B=Qi(r);return ni(E,function(k){var Y=a[k];r[k]=Y,B&&(r.prototype[k]=function(){var ce=this.__chain__;if(D||ce){var le=r(this.__wrapped__),fe=le.__actions__=Bn(this.__actions__);return fe.push({func:Y,args:arguments,thisArg:r}),le.__chain__=ce,le}return Y.apply(r,_r([this.value()],arguments))})}),r}function bE(){return _n._===this&&(_n._=J0),this}function Hu(){}function wE(r){return r=at(r),ft(function(a){return ep(a,r)})}var RE=_u(kt),CE=_u(Md),PE=_u(kl);function xm(r){return Tu(r)?Gl(Hi(r)):ov(r)}function LE(r){return function(a){return r==null?t:jr(r,a)}}var IE=Sp(),DE=Sp(!0);function Vu(){return[]}function ku(){return!1}function UE(){return{}}function NE(){return""}function OE(){return!0}function FE(r,a){if(r=at(r),r<1||r>ie)return[];var f=be,v=yn(r,be);a=ke(a),r-=be;for(var E=ql(v,a);++f<r;)a(f);return E}function BE(r){return st(r)?kt(r,Hi):Yn(r)?[r]:Bn(Bp(Rt(r)))}function zE(r){var a=++j0;return Rt(r)+a}var HE=tc(function(r,a){return r+a},0),VE=xu("ceil"),kE=tc(function(r,a){return r/a},1),GE=xu("floor");function WE(r){return r&&r.length?Ka(r,Vn,iu):t}function XE(r,a){return r&&r.length?Ka(r,ke(a,2),iu):t}function qE(r){return Td(r,Vn)}function YE(r,a){return Td(r,ke(a,2))}function KE(r){return r&&r.length?Ka(r,Vn,au):t}function ZE(r,a){return r&&r.length?Ka(r,ke(a,2),au):t}var jE=tc(function(r,a){return r*a},1),$E=xu("round"),JE=tc(function(r,a){return r-a},0);function QE(r){return r&&r.length?Xl(r,Vn):0}function eT(r,a){return r&&r.length?Xl(r,ke(a,2)):0}return P.after=SM,P.ary=Zp,P.assign=lS,P.assignIn=lm,P.assignInWith=pc,P.assignWith=uS,P.at=hS,P.before=jp,P.bind=Pu,P.bindAll=gE,P.bindKey=$p,P.castArray=UM,P.chain=qp,P.chunk=Gv,P.compact=Wv,P.concat=Xv,P.cond=_E,P.conforms=xE,P.constant=Fu,P.countBy=Qy,P.create=fS,P.curry=Jp,P.curryRight=Qp,P.debounce=em,P.defaults=dS,P.defaultsDeep=pS,P.defer=EM,P.delay=TM,P.difference=qv,P.differenceBy=Yv,P.differenceWith=Kv,P.drop=Zv,P.dropRight=jv,P.dropRightWhile=$v,P.dropWhile=Jv,P.fill=Qv,P.filter=tM,P.flatMap=rM,P.flatMapDeep=sM,P.flatMapDepth=oM,P.flatten=kp,P.flattenDeep=ey,P.flattenDepth=ty,P.flip=AM,P.flow=yE,P.flowRight=ME,P.fromPairs=ny,P.functions=MS,P.functionsIn=SS,P.groupBy=aM,P.initial=ry,P.intersection=sy,P.intersectionBy=oy,P.intersectionWith=ay,P.invert=TS,P.invertBy=AS,P.invokeMap=lM,P.iteratee=Bu,P.keyBy=uM,P.keys=un,P.keysIn=Hn,P.map=cc,P.mapKeys=wS,P.mapValues=RS,P.matches=SE,P.matchesProperty=EE,P.memoize=uc,P.merge=CS,P.mergeWith=um,P.method=TE,P.methodOf=AE,P.mixin=zu,P.negate=hc,P.nthArg=wE,P.omit=PS,P.omitBy=LS,P.once=bM,P.orderBy=hM,P.over=RE,P.overArgs=wM,P.overEvery=CE,P.overSome=PE,P.partial=Lu,P.partialRight=tm,P.partition=fM,P.pick=IS,P.pickBy=hm,P.property=xm,P.propertyOf=LE,P.pull=hy,P.pullAll=Wp,P.pullAllBy=fy,P.pullAllWith=dy,P.pullAt=py,P.range=IE,P.rangeRight=DE,P.rearg=RM,P.reject=mM,P.remove=my,P.rest=CM,P.reverse=Ru,P.sampleSize=_M,P.set=US,P.setWith=NS,P.shuffle=xM,P.slice=gy,P.sortBy=MM,P.sortedUniq=Ey,P.sortedUniqBy=Ty,P.split=rE,P.spread=PM,P.tail=Ay,P.take=by,P.takeRight=wy,P.takeRightWhile=Ry,P.takeWhile=Cy,P.tap=Wy,P.throttle=LM,P.thru=ac,P.toArray=om,P.toPairs=fm,P.toPairsIn=dm,P.toPath=BE,P.toPlainObject=cm,P.transform=OS,P.unary=IM,P.union=Py,P.unionBy=Ly,P.unionWith=Iy,P.uniq=Dy,P.uniqBy=Uy,P.uniqWith=Ny,P.unset=FS,P.unzip=Cu,P.unzipWith=Xp,P.update=BS,P.updateWith=zS,P.values=Us,P.valuesIn=HS,P.without=Oy,P.words=gm,P.wrap=DM,P.xor=Fy,P.xorBy=By,P.xorWith=zy,P.zip=Hy,P.zipObject=Vy,P.zipObjectDeep=ky,P.zipWith=Gy,P.entries=fm,P.entriesIn=dm,P.extend=lm,P.extendWith=pc,zu(P,P),P.add=HE,P.attempt=_m,P.camelCase=WS,P.capitalize=pm,P.ceil=VE,P.clamp=VS,P.clone=NM,P.cloneDeep=FM,P.cloneDeepWith=BM,P.cloneWith=OM,P.conformsTo=zM,P.deburr=mm,P.defaultTo=vE,P.divide=kE,P.endsWith=XS,P.eq=Ti,P.escape=qS,P.escapeRegExp=YS,P.every=eM,P.find=nM,P.findIndex=Hp,P.findKey=mS,P.findLast=iM,P.findLastIndex=Vp,P.findLastKey=gS,P.floor=GE,P.forEach=Yp,P.forEachRight=Kp,P.forIn=_S,P.forInRight=xS,P.forOwn=vS,P.forOwnRight=yS,P.get=Uu,P.gt=HM,P.gte=VM,P.has=ES,P.hasIn=Nu,P.head=Gp,P.identity=Vn,P.includes=cM,P.indexOf=iy,P.inRange=kS,P.invoke=bS,P.isArguments=Qr,P.isArray=st,P.isArrayBuffer=kM,P.isArrayLike=zn,P.isArrayLikeObject=Qt,P.isBoolean=GM,P.isBuffer=Tr,P.isDate=WM,P.isElement=XM,P.isEmpty=qM,P.isEqual=YM,P.isEqualWith=KM,P.isError=Iu,P.isFinite=ZM,P.isFunction=Qi,P.isInteger=nm,P.isLength=fc,P.isMap=im,P.isMatch=jM,P.isMatchWith=$M,P.isNaN=JM,P.isNative=QM,P.isNil=tS,P.isNull=eS,P.isNumber=rm,P.isObject=Xt,P.isObjectLike=Kt,P.isPlainObject=qo,P.isRegExp=Du,P.isSafeInteger=nS,P.isSet=sm,P.isString=dc,P.isSymbol=Yn,P.isTypedArray=Ds,P.isUndefined=iS,P.isWeakMap=rS,P.isWeakSet=sS,P.join=cy,P.kebabCase=KS,P.last=ai,P.lastIndexOf=ly,P.lowerCase=ZS,P.lowerFirst=jS,P.lt=oS,P.lte=aS,P.max=WE,P.maxBy=XE,P.mean=qE,P.meanBy=YE,P.min=KE,P.minBy=ZE,P.stubArray=Vu,P.stubFalse=ku,P.stubObject=UE,P.stubString=NE,P.stubTrue=OE,P.multiply=jE,P.nth=uy,P.noConflict=bE,P.noop=Hu,P.now=lc,P.pad=$S,P.padEnd=JS,P.padStart=QS,P.parseInt=eE,P.random=GS,P.reduce=dM,P.reduceRight=pM,P.repeat=tE,P.replace=nE,P.result=DS,P.round=$E,P.runInContext=X,P.sample=gM,P.size=vM,P.snakeCase=iE,P.some=yM,P.sortedIndex=_y,P.sortedIndexBy=xy,P.sortedIndexOf=vy,P.sortedLastIndex=yy,P.sortedLastIndexBy=My,P.sortedLastIndexOf=Sy,P.startCase=sE,P.startsWith=oE,P.subtract=JE,P.sum=QE,P.sumBy=eT,P.template=aE,P.times=FE,P.toFinite=er,P.toInteger=at,P.toLength=am,P.toLower=cE,P.toNumber=ci,P.toSafeInteger=cS,P.toString=Rt,P.toUpper=lE,P.trim=uE,P.trimEnd=hE,P.trimStart=fE,P.truncate=dE,P.unescape=pE,P.uniqueId=zE,P.upperCase=mE,P.upperFirst=Ou,P.each=Yp,P.eachRight=Kp,P.first=Gp,zu(P,function(){var r={};return Bi(P,function(a,f){Ct.call(P.prototype,f)||(r[f]=a)}),r}(),{chain:!1}),P.VERSION=n,ni(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){P[r].placeholder=P}),ni(["drop","take"],function(r,a){xt.prototype[r]=function(f){f=f===t?1:on(at(f),0);var v=this.__filtered__&&!a?new xt(this):this.clone();return v.__filtered__?v.__takeCount__=yn(f,v.__takeCount__):v.__views__.push({size:yn(f,be),type:r+(v.__dir__<0?"Right":"")}),v},xt.prototype[r+"Right"]=function(f){return this.reverse()[r](f).reverse()}}),ni(["filter","map","takeWhile"],function(r,a){var f=a+1,v=f==Z||f==J;xt.prototype[r]=function(E){var D=this.clone();return D.__iteratees__.push({iteratee:ke(E,3),type:f}),D.__filtered__=D.__filtered__||v,D}}),ni(["head","last"],function(r,a){var f="take"+(a?"Right":"");xt.prototype[r]=function(){return this[f](1).value()[0]}}),ni(["initial","tail"],function(r,a){var f="drop"+(a?"":"Right");xt.prototype[r]=function(){return this.__filtered__?new xt(this):this[f](1)}}),xt.prototype.compact=function(){return this.filter(Vn)},xt.prototype.find=function(r){return this.filter(r).head()},xt.prototype.findLast=function(r){return this.reverse().find(r)},xt.prototype.invokeMap=ft(function(r,a){return typeof r=="function"?new xt(this):this.map(function(f){return Ho(f,r,a)})}),xt.prototype.reject=function(r){return this.filter(hc(ke(r)))},xt.prototype.slice=function(r,a){r=at(r);var f=this;return f.__filtered__&&(r>0||a<0)?new xt(f):(r<0?f=f.takeRight(-r):r&&(f=f.drop(r)),a!==t&&(a=at(a),f=a<0?f.dropRight(-a):f.take(a-r)),f)},xt.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},xt.prototype.toArray=function(){return this.take(be)},Bi(xt.prototype,function(r,a){var f=/^(?:filter|find|map|reject)|While$/.test(a),v=/^(?:head|last)$/.test(a),E=P[v?"take"+(a=="last"?"Right":""):a],D=v||/^find/.test(a);E&&(P.prototype[a]=function(){var B=this.__wrapped__,k=v?[1]:arguments,Y=B instanceof xt,ce=k[0],le=Y||st(B),fe=function(mt){var vt=E.apply(P,_r([mt],k));return v&&Se?vt[0]:vt};le&&f&&typeof ce=="function"&&ce.length!=1&&(Y=le=!1);var Se=this.__chain__,Ue=!!this.__actions__.length,We=D&&!Se,lt=Y&&!Ue;if(!D&&le){B=lt?B:new xt(this);var Xe=r.apply(B,k);return Xe.__actions__.push({func:ac,args:[fe],thisArg:t}),new ri(Xe,Se)}return We&&lt?r.apply(this,k):(Xe=this.thru(fe),We?v?Xe.value()[0]:Xe.value():Xe)})}),ni(["pop","push","shift","sort","splice","unshift"],function(r){var a=Da[r],f=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",v=/^(?:pop|shift)$/.test(r);P.prototype[r]=function(){var E=arguments;if(v&&!this.__chain__){var D=this.value();return a.apply(st(D)?D:[],E)}return this[f](function(B){return a.apply(st(B)?B:[],E)})}}),Bi(xt.prototype,function(r,a){var f=P[a];if(f){var v=f.name+"";Ct.call(Rs,v)||(Rs[v]=[]),Rs[v].push({name:a,func:f})}}),Rs[ec(t,_).name]=[{name:"wrapper",func:t}],xt.prototype.clone=px,xt.prototype.reverse=mx,xt.prototype.value=gx,P.prototype.at=Xy,P.prototype.chain=qy,P.prototype.commit=Yy,P.prototype.next=Ky,P.prototype.plant=jy,P.prototype.reverse=$y,P.prototype.toJSON=P.prototype.valueOf=P.prototype.value=Jy,P.prototype.first=P.prototype.head,Do&&(P.prototype[Do]=Zy),P},As=Y0();Xr?((Xr.exports=As)._=As,Bl._=As):_n._=As}).call(ta)})(Tl,Tl.exports);Tl.exports;const kg={type:"change"},yh={type:"start"},Gg={type:"end"},Wc=new ms,Wg=new Vi,hP=Math.cos(70*b_.DEG2RAD);class fP extends ps{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Dr.ROTATE,MIDDLE:Dr.DOLLY,RIGHT:Dr.PAN},this.touches={ONE:Ur.ROTATE,TWO:Ur.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",Me),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Me),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(kg),n.update(),o=i.NONE},this.update=function(){const A=new z,j=new Gi().setFromUnitVectors(e.up,new z(0,1,0)),$=j.clone().invert(),re=new z,pe=new Gi,Oe=new z,$e=2*Math.PI;return function(jt=null){const _t=n.object.position;A.copy(_t).sub(n.target),A.applyQuaternion(j),l.setFromVector3(A),n.autoRotate&&o===i.NONE&&G(b(jt)),n.enableDamping?(l.theta+=u.theta*n.dampingFactor,l.phi+=u.phi*n.dampingFactor):(l.theta+=u.theta,l.phi+=u.phi);let $t=n.minAzimuthAngle,Yt=n.maxAzimuthAngle;isFinite($t)&&isFinite(Yt)&&($t<-Math.PI?$t+=$e:$t>Math.PI&&($t-=$e),Yt<-Math.PI?Yt+=$e:Yt>Math.PI&&(Yt-=$e),$t<=Yt?l.theta=Math.max($t,Math.min(Yt,l.theta)):l.theta=l.theta>($t+Yt)/2?Math.max($t,l.theta):Math.min(Yt,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Fi=!1;if(n.zoomToCursor&&I||n.object.isOrthographicCamera)l.radius=Re(l.radius);else{const Jt=l.radius;l.radius=Re(l.radius*h),Fi=Jt!=l.radius}if(A.setFromSpherical(l),A.applyQuaternion($),_t.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),d.set(0,0,0)),n.zoomToCursor&&I){let Jt=null;if(n.object.isPerspectiveCamera){const yi=A.length();Jt=Re(yi*h);const Mi=yi-Jt;n.object.position.addScaledVector(w,Mi),n.object.updateMatrixWorld(),Fi=!!Mi}else if(n.object.isOrthographicCamera){const yi=new z(N.x,N.y,0);yi.unproject(n.object);const Mi=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix(),Fi=Mi!==n.object.zoom;const Wr=new z(N.x,N.y,0);Wr.unproject(n.object),n.object.position.sub(Wr).add(yi),n.object.updateMatrixWorld(),Jt=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Jt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Jt).add(n.object.position):(Wc.origin.copy(n.object.position),Wc.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Wc.direction))<hP?e.lookAt(n.target):(Wg.setFromNormalAndCoplanarPoint(n.object.up,n.target),Wc.intersectPlane(Wg,n.target))))}else if(n.object.isOrthographicCamera){const Jt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),Jt!==n.object.zoom&&(n.object.updateProjectionMatrix(),Fi=!0)}return h=1,I=!1,Fi||re.distanceToSquared(n.object.position)>c||8*(1-pe.dot(n.object.quaternion))>c||Oe.distanceToSquared(n.target)>c?(n.dispatchEvent(kg),re.copy(n.object.position),pe.copy(n.object.quaternion),Oe.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ae),n.domElement.removeEventListener("pointerdown",nt),n.domElement.removeEventListener("pointercancel",C),n.domElement.removeEventListener("wheel",me),n.domElement.removeEventListener("pointermove",H),n.domElement.removeEventListener("pointerup",C),n.domElement.getRootNode().removeEventListener("keydown",ze,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Me),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=i.NONE;const c=1e-6,l=new Hg,u=new Hg;let h=1;const d=new z,m=new Be,p=new Be,g=new Be,y=new Be,M=new Be,x=new Be,_=new Be,T=new Be,S=new Be,w=new z,N=new Be;let I=!1;const L=[],F={};let R=!1;function b(A){return A!==null?2*Math.PI/60*n.autoRotateSpeed*A:2*Math.PI/60/60*n.autoRotateSpeed}function O(A){const j=Math.abs(A*.01);return Math.pow(.95,n.zoomSpeed*j)}function G(A){u.theta-=A}function W(A){u.phi-=A}const Z=function(){const A=new z;return function($,re){A.setFromMatrixColumn(re,0),A.multiplyScalar(-$),d.add(A)}}(),se=function(){const A=new z;return function($,re){n.screenSpacePanning===!0?A.setFromMatrixColumn(re,1):(A.setFromMatrixColumn(re,0),A.crossVectors(n.object.up,A)),A.multiplyScalar($),d.add(A)}}(),J=function(){const A=new z;return function($,re){const pe=n.domElement;if(n.object.isPerspectiveCamera){const Oe=n.object.position;A.copy(Oe).sub(n.target);let $e=A.length();$e*=Math.tan(n.object.fov/2*Math.PI/180),Z(2*$*$e/pe.clientHeight,n.object.matrix),se(2*re*$e/pe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Z($*(n.object.right-n.object.left)/n.object.zoom/pe.clientWidth,n.object.matrix),se(re*(n.object.top-n.object.bottom)/n.object.zoom/pe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function ue(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ie(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ye(A,j){if(!n.zoomToCursor)return;I=!0;const $=n.domElement.getBoundingClientRect(),re=A-$.left,pe=j-$.top,Oe=$.width,$e=$.height;N.x=re/Oe*2-1,N.y=-(pe/$e)*2+1,w.set(N.x,N.y,1).unproject(n.object).sub(n.object.position).normalize()}function Re(A){return Math.max(n.minDistance,Math.min(n.maxDistance,A))}function be(A){m.set(A.clientX,A.clientY)}function dt(A){ye(A.clientX,A.clientX),_.set(A.clientX,A.clientY)}function yt(A){y.set(A.clientX,A.clientY)}function ae(A){p.set(A.clientX,A.clientY),g.subVectors(p,m).multiplyScalar(n.rotateSpeed);const j=n.domElement;G(2*Math.PI*g.x/j.clientHeight),W(2*Math.PI*g.y/j.clientHeight),m.copy(p),n.update()}function ge(A){T.set(A.clientX,A.clientY),S.subVectors(T,_),S.y>0?ue(O(S.y)):S.y<0&&ie(O(S.y)),_.copy(T),n.update()}function Ce(A){M.set(A.clientX,A.clientY),x.subVectors(M,y).multiplyScalar(n.panSpeed),J(x.x,x.y),y.copy(M),n.update()}function Pe(A){ye(A.clientX,A.clientY),A.deltaY<0?ie(O(A.deltaY)):A.deltaY>0&&ue(O(A.deltaY)),n.update()}function Ye(A){let j=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?W(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(0,n.keyPanSpeed),j=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?W(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(0,-n.keyPanSpeed),j=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?G(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(n.keyPanSpeed,0),j=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?G(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(-n.keyPanSpeed,0),j=!0;break}j&&(A.preventDefault(),n.update())}function et(A){if(L.length===1)m.set(A.pageX,A.pageY);else{const j=Ke(A),$=.5*(A.pageX+j.x),re=.5*(A.pageY+j.y);m.set($,re)}}function ot(A){if(L.length===1)y.set(A.pageX,A.pageY);else{const j=Ke(A),$=.5*(A.pageX+j.x),re=.5*(A.pageY+j.y);y.set($,re)}}function wt(A){const j=Ke(A),$=A.pageX-j.x,re=A.pageY-j.y,pe=Math.sqrt($*$+re*re);_.set(0,pe)}function V(A){n.enableZoom&&wt(A),n.enablePan&&ot(A)}function Ot(A){n.enableZoom&&wt(A),n.enableRotate&&et(A)}function it(A){if(L.length==1)p.set(A.pageX,A.pageY);else{const $=Ke(A),re=.5*(A.pageX+$.x),pe=.5*(A.pageY+$.y);p.set(re,pe)}g.subVectors(p,m).multiplyScalar(n.rotateSpeed);const j=n.domElement;G(2*Math.PI*g.x/j.clientHeight),W(2*Math.PI*g.y/j.clientHeight),m.copy(p)}function pt(A){if(L.length===1)M.set(A.pageX,A.pageY);else{const j=Ke(A),$=.5*(A.pageX+j.x),re=.5*(A.pageY+j.y);M.set($,re)}x.subVectors(M,y).multiplyScalar(n.panSpeed),J(x.x,x.y),y.copy(M)}function Ne(A){const j=Ke(A),$=A.pageX-j.x,re=A.pageY-j.y,pe=Math.sqrt($*$+re*re);T.set(0,pe),S.set(0,Math.pow(T.y/_.y,n.zoomSpeed)),ue(S.y),_.copy(T);const Oe=(A.pageX+j.x)*.5,$e=(A.pageY+j.y)*.5;ye(Oe,$e)}function Et(A){n.enableZoom&&Ne(A),n.enablePan&&pt(A)}function je(A){n.enableZoom&&Ne(A),n.enableRotate&&it(A)}function nt(A){n.enabled!==!1&&(L.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",H),n.domElement.addEventListener("pointerup",C)),!we(A)&&(ct(A),A.pointerType==="touch"?tt(A):ee(A)))}function H(A){n.enabled!==!1&&(A.pointerType==="touch"?_e(A):de(A))}function C(A){switch(Ve(A),L.length){case 0:n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",H),n.domElement.removeEventListener("pointerup",C),n.dispatchEvent(Gg),o=i.NONE;break;case 1:const j=L[0],$=F[j];tt({pointerId:j,pageX:$.x,pageY:$.y});break}}function ee(A){let j;switch(A.button){case 0:j=n.mouseButtons.LEFT;break;case 1:j=n.mouseButtons.MIDDLE;break;case 2:j=n.mouseButtons.RIGHT;break;default:j=-1}switch(j){case Dr.DOLLY:if(n.enableZoom===!1)return;dt(A),o=i.DOLLY;break;case Dr.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;yt(A),o=i.PAN}else{if(n.enableRotate===!1)return;be(A),o=i.ROTATE}break;case Dr.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;be(A),o=i.ROTATE}else{if(n.enablePan===!1)return;yt(A),o=i.PAN}break;default:o=i.NONE}o!==i.NONE&&n.dispatchEvent(yh)}function de(A){switch(o){case i.ROTATE:if(n.enableRotate===!1)return;ae(A);break;case i.DOLLY:if(n.enableZoom===!1)return;ge(A);break;case i.PAN:if(n.enablePan===!1)return;Ce(A);break}}function me(A){n.enabled===!1||n.enableZoom===!1||o!==i.NONE||(A.preventDefault(),n.dispatchEvent(yh),Pe(he(A)),n.dispatchEvent(Gg))}function he(A){const j=A.deltaMode,$={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(j){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}return A.ctrlKey&&!R&&($.deltaY*=10),$}function ze(A){A.key==="Control"&&(R=!0,n.domElement.getRootNode().addEventListener("keyup",ve,{passive:!0,capture:!0}))}function ve(A){A.key==="Control"&&(R=!1,n.domElement.getRootNode().removeEventListener("keyup",ve,{passive:!0,capture:!0}))}function Me(A){n.enabled===!1||n.enablePan===!1||Ye(A)}function tt(A){switch(Ge(A),L.length){case 1:switch(n.touches.ONE){case Ur.ROTATE:if(n.enableRotate===!1)return;et(A),o=i.TOUCH_ROTATE;break;case Ur.PAN:if(n.enablePan===!1)return;ot(A),o=i.TOUCH_PAN;break;default:o=i.NONE}break;case 2:switch(n.touches.TWO){case Ur.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;V(A),o=i.TOUCH_DOLLY_PAN;break;case Ur.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ot(A),o=i.TOUCH_DOLLY_ROTATE;break;default:o=i.NONE}break;default:o=i.NONE}o!==i.NONE&&n.dispatchEvent(yh)}function _e(A){switch(Ge(A),o){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;it(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;pt(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Et(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;je(A),n.update();break;default:o=i.NONE}}function Ae(A){n.enabled!==!1&&A.preventDefault()}function ct(A){L.push(A.pointerId)}function Ve(A){delete F[A.pointerId];for(let j=0;j<L.length;j++)if(L[j]==A.pointerId){L.splice(j,1);return}}function we(A){for(let j=0;j<L.length;j++)if(L[j]==A.pointerId)return!0;return!1}function Ge(A){let j=F[A.pointerId];j===void 0&&(j=new Be,F[A.pointerId]=j),j.set(A.pageX,A.pageY)}function Ke(A){const j=A.pointerId===L[0]?L[1]:L[0];return F[j]}n.domElement.addEventListener("contextmenu",Ae),n.domElement.addEventListener("pointerdown",nt),n.domElement.addEventListener("pointercancel",C),n.domElement.addEventListener("wheel",me,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ze,{passive:!0,capture:!0}),this.update()}}function Xg(s,e){if(e===HT)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===pf||e===T_){let t=s.getIndex();if(t===null){const c=[],l=s.getAttribute("position");if(l!==void 0){for(let u=0;u<l.count;u++)c.push(u);s.setIndex(c),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===pf)for(let c=1;c<=n;c++)i.push(t.getX(0)),i.push(t.getX(c)),i.push(t.getX(c+1));else for(let c=0;c<n;c++)c%2===0?(i.push(t.getX(c)),i.push(t.getX(c+1)),i.push(t.getX(c+2))):(i.push(t.getX(c+2)),i.push(t.getX(c+1)),i.push(t.getX(c)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=s.clone();return o.setIndex(i),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class dP extends Co{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xP(t)}),this.register(function(t){return new vP(t)}),this.register(function(t){return new RP(t)}),this.register(function(t){return new CP(t)}),this.register(function(t){return new PP(t)}),this.register(function(t){return new MP(t)}),this.register(function(t){return new SP(t)}),this.register(function(t){return new EP(t)}),this.register(function(t){return new TP(t)}),this.register(function(t){return new _P(t)}),this.register(function(t){return new AP(t)}),this.register(function(t){return new yP(t)}),this.register(function(t){return new wP(t)}),this.register(function(t){return new bP(t)}),this.register(function(t){return new mP(t)}),this.register(function(t){return new LP(t)}),this.register(function(t){return new IP(t)})}load(e,t,n,i){const o=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const h=pa.extractUrlBase(e);c=pa.resolveURL(h,this.path)}else c=pa.extractUrlBase(e);this.manager.itemStart(e);const l=function(h){i?i(h):console.error(h),o.manager.itemError(e),o.manager.itemEnd(e)},u=new K_(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(h){try{o.parse(h,c,function(d){t(d),o.manager.itemEnd(e)},l)}catch(d){l(d)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let o;const c={},l={},u=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(u.decode(new Uint8Array(e,0,4))===Z_){try{c[gt.KHR_BINARY_GLTF]=new DP(e)}catch(m){i&&i(m);return}o=JSON.parse(c[gt.KHR_BINARY_GLTF].content)}else o=JSON.parse(u.decode(e));else o=e;if(o.asset===void 0||o.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new qP(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const m=this.pluginCallbacks[d](h);m.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[m.name]=m,c[m.name]=!0}if(o.extensionsUsed)for(let d=0;d<o.extensionsUsed.length;++d){const m=o.extensionsUsed[d],p=o.extensionsRequired||[];switch(m){case gt.KHR_MATERIALS_UNLIT:c[m]=new gP;break;case gt.KHR_DRACO_MESH_COMPRESSION:c[m]=new UP(o,this.dracoLoader);break;case gt.KHR_TEXTURE_TRANSFORM:c[m]=new NP;break;case gt.KHR_MESH_QUANTIZATION:c[m]=new OP;break;default:p.indexOf(m)>=0&&l[m]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+m+'".')}}h.setExtensions(c),h.setPlugins(l),h.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,o){n.parse(e,t,i,o)})}}function pP(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class mP{constructor(e){this.parser=e,this.name=gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const o=t[n];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const o=t.json,u=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e];let h;const d=new Qe(16777215);u.color!==void 0&&d.setRGB(u.color[0],u.color[1],u.color[2],vn);const m=u.range!==void 0?u.range:0;switch(u.type){case"directional":h=new vf(d),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new $C(d),h.distance=m;break;case"spot":h=new ZC(d),h.distance=m,u.spot=u.spot||{},u.spot.innerConeAngle=u.spot.innerConeAngle!==void 0?u.spot.innerConeAngle:0,u.spot.outerConeAngle=u.spot.outerConeAngle!==void 0?u.spot.outerConeAngle:Math.PI/4,h.angle=u.spot.outerConeAngle,h.penumbra=1-u.spot.innerConeAngle/u.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+u.type)}return h.position.set(0,0,0),h.decay=2,ur(h,u),u.intensity!==void 0&&(h.intensity=u.intensity),h.name=t.createUniqueName(u.name||"light_"+e),i=Promise.resolve(h),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,o=n.json.nodes[e],l=(o.extensions&&o.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(u){return n._getNodeRef(t.cache,l,u)})}}class gP{constructor(){this.name=gt.KHR_MATERIALS_UNLIT}getMaterialType(){return us}extendParams(e,t,n){const i=[];e.color=new Qe(1,1,1),e.opacity=1;const o=t.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const c=o.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],vn),e.opacity=c[3]}o.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",o.baseColorTexture,Pn))}return Promise.all(i)}}class _P{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=i.extensions[this.name].emissiveStrength;return o!==void 0&&(t.emissiveIntensity=o),Promise.resolve()}}class xP{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],c=i.extensions[this.name];if(c.clearcoatFactor!==void 0&&(t.clearcoat=c.clearcoatFactor),c.clearcoatTexture!==void 0&&o.push(n.assignTexture(t,"clearcoatMap",c.clearcoatTexture)),c.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=c.clearcoatRoughnessFactor),c.clearcoatRoughnessTexture!==void 0&&o.push(n.assignTexture(t,"clearcoatRoughnessMap",c.clearcoatRoughnessTexture)),c.clearcoatNormalTexture!==void 0&&(o.push(n.assignTexture(t,"clearcoatNormalMap",c.clearcoatNormalTexture)),c.clearcoatNormalTexture.scale!==void 0)){const l=c.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(l,l)}return Promise.all(o)}}class vP{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=i.extensions[this.name];return t.dispersion=o.dispersion!==void 0?o.dispersion:0,Promise.resolve()}}class yP{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],c=i.extensions[this.name];return c.iridescenceFactor!==void 0&&(t.iridescence=c.iridescenceFactor),c.iridescenceTexture!==void 0&&o.push(n.assignTexture(t,"iridescenceMap",c.iridescenceTexture)),c.iridescenceIor!==void 0&&(t.iridescenceIOR=c.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),c.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=c.iridescenceThicknessMinimum),c.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=c.iridescenceThicknessMaximum),c.iridescenceThicknessTexture!==void 0&&o.push(n.assignTexture(t,"iridescenceThicknessMap",c.iridescenceThicknessTexture)),Promise.all(o)}}class MP{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[];t.sheenColor=new Qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const c=i.extensions[this.name];if(c.sheenColorFactor!==void 0){const l=c.sheenColorFactor;t.sheenColor.setRGB(l[0],l[1],l[2],vn)}return c.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=c.sheenRoughnessFactor),c.sheenColorTexture!==void 0&&o.push(n.assignTexture(t,"sheenColorMap",c.sheenColorTexture,Pn)),c.sheenRoughnessTexture!==void 0&&o.push(n.assignTexture(t,"sheenRoughnessMap",c.sheenRoughnessTexture)),Promise.all(o)}}class SP{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],c=i.extensions[this.name];return c.transmissionFactor!==void 0&&(t.transmission=c.transmissionFactor),c.transmissionTexture!==void 0&&o.push(n.assignTexture(t,"transmissionMap",c.transmissionTexture)),Promise.all(o)}}class EP{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],c=i.extensions[this.name];t.thickness=c.thicknessFactor!==void 0?c.thicknessFactor:0,c.thicknessTexture!==void 0&&o.push(n.assignTexture(t,"thicknessMap",c.thicknessTexture)),t.attenuationDistance=c.attenuationDistance||1/0;const l=c.attenuationColor||[1,1,1];return t.attenuationColor=new Qe().setRGB(l[0],l[1],l[2],vn),Promise.all(o)}}class TP{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=i.extensions[this.name];return t.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}}class AP{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],c=i.extensions[this.name];t.specularIntensity=c.specularFactor!==void 0?c.specularFactor:1,c.specularTexture!==void 0&&o.push(n.assignTexture(t,"specularIntensityMap",c.specularTexture));const l=c.specularColorFactor||[1,1,1];return t.specularColor=new Qe().setRGB(l[0],l[1],l[2],vn),c.specularColorTexture!==void 0&&o.push(n.assignTexture(t,"specularColorMap",c.specularColorTexture,Pn)),Promise.all(o)}}class bP{constructor(e){this.parser=e,this.name=gt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],c=i.extensions[this.name];return t.bumpScale=c.bumpFactor!==void 0?c.bumpFactor:1,c.bumpTexture!==void 0&&o.push(n.assignTexture(t,"bumpMap",c.bumpTexture)),Promise.all(o)}}class wP{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],c=i.extensions[this.name];return c.anisotropyStrength!==void 0&&(t.anisotropy=c.anisotropyStrength),c.anisotropyRotation!==void 0&&(t.anisotropyRotation=c.anisotropyRotation),c.anisotropyTexture!==void 0&&o.push(n.assignTexture(t,"anisotropyMap",c.anisotropyTexture)),Promise.all(o)}}class RP{constructor(e){this.parser=e,this.name=gt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const o=i.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o.source,c)}}class CP{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,o=i.textures[e];if(!o.extensions||!o.extensions[t])return null;const c=o.extensions[t],l=i.images[c.source];let u=n.textureLoader;if(l.uri){const h=n.options.manager.getHandler(l.uri);h!==null&&(u=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,c.source,u);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class PP{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,o=i.textures[e];if(!o.extensions||!o.extensions[t])return null;const c=o.extensions[t],l=i.images[c.source];let u=n.textureLoader;if(l.uri){const h=n.options.manager.getHandler(l.uri);h!==null&&(u=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,c.source,u);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class LP{constructor(e){this.name=gt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],o=this.parser.getDependency("buffer",i.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(l){const u=i.byteOffset||0,h=i.byteLength||0,d=i.count,m=i.byteStride,p=new Uint8Array(l,u,h);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(d,m,p,i.mode,i.filter).then(function(g){return g.buffer}):c.ready.then(function(){const g=new ArrayBuffer(d*m);return c.decodeGltfBuffer(new Uint8Array(g),d,m,p,i.mode,i.filter),g})})}else return null}}class IP{constructor(e){this.name=gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==hi.TRIANGLES&&h.mode!==hi.TRIANGLE_STRIP&&h.mode!==hi.TRIANGLE_FAN&&h.mode!==void 0)return null;const c=n.extensions[this.name].attributes,l=[],u={};for(const h in c)l.push(this.parser.getDependency("accessor",c[h]).then(d=>(u[h]=d,u[h])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(h=>{const d=h.pop(),m=d.isGroup?d.children:[d],p=h[0].count,g=[];for(const y of m){const M=new qe,x=new z,_=new Gi,T=new z(1,1,1),S=new CC(y.geometry,y.material,p);for(let w=0;w<p;w++)u.TRANSLATION&&x.fromBufferAttribute(u.TRANSLATION,w),u.ROTATION&&_.fromBufferAttribute(u.ROTATION,w),u.SCALE&&T.fromBufferAttribute(u.SCALE,w),S.setMatrixAt(w,M.compose(x,_,T));for(const w in u)if(w==="_COLOR_0"){const N=u[w];S.instanceColor=new _f(N.array,N.itemSize,N.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&y.geometry.setAttribute(w,u[w]);qt.prototype.copy.call(S,y),this.parser.assignFinalMaterial(S),g.push(S)}return d.isGroup?(d.clear(),d.add(...g),d):g[0]}))}}const Z_="glTF",na=12,qg={JSON:1313821514,BIN:5130562};class DP{constructor(e){this.name=gt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,na),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Z_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-na,o=new DataView(e,na);let c=0;for(;c<i;){const l=o.getUint32(c,!0);c+=4;const u=o.getUint32(c,!0);if(c+=4,u===qg.JSON){const h=new Uint8Array(e,na+c,l);this.content=n.decode(h)}else if(u===qg.BIN){const h=na+c;this.body=e.slice(h,h+l)}c+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class UP{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,o=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,l={},u={},h={};for(const d in c){const m=Mf[d]||d.toLowerCase();l[m]=c[d]}for(const d in e.attributes){const m=Mf[d]||d.toLowerCase();if(c[d]!==void 0){const p=n.accessors[e.attributes[d]],g=mo[p.componentType];h[m]=g.name,u[m]=p.normalized===!0}}return t.getDependency("bufferView",o).then(function(d){return new Promise(function(m,p){i.decodeDracoFile(d,function(g){for(const y in g.attributes){const M=g.attributes[y],x=u[y];x!==void 0&&(M.normalized=x)}m(g)},l,h,vn,p)})})}}class NP{constructor(){this.name=gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class OP{constructor(){this.name=gt.KHR_MESH_QUANTIZATION}}class j_ extends Ta{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,o=e*i*3+i;for(let c=0;c!==i;c++)t[c]=n[o+c];return t}interpolate_(e,t,n,i){const o=this.resultBuffer,c=this.sampleValues,l=this.valueSize,u=l*2,h=l*3,d=i-t,m=(n-t)/d,p=m*m,g=p*m,y=e*h,M=y-h,x=-2*g+3*p,_=g-p,T=1-x,S=_-p+m;for(let w=0;w!==l;w++){const N=c[M+w+l],I=c[M+w+u]*d,L=c[y+w+l],F=c[y+w]*d;o[w]=T*N+S*I+x*L+_*F}return o}}const FP=new Gi;class BP extends j_{interpolate_(e,t,n,i){const o=super.interpolate_(e,t,n,i);return FP.fromArray(o).normalize().toArray(o),o}}const hi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},mo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Yg={9728:Dn,9729:Jn,9984:p_,9985:al,9986:la,9987:hr},Kg={33071:Fr,33648:gl,10497:xo},Mh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Mf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Lr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zP={CUBICSPLINE:void 0,LINEAR:va,STEP:xa},Sh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function HP(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ea({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ui})),s.DefaultMaterial}function os(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ur(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function VP(s,e,t){let n=!1,i=!1,o=!1;for(let h=0,d=e.length;h<d;h++){const m=e[h];if(m.POSITION!==void 0&&(n=!0),m.NORMAL!==void 0&&(i=!0),m.COLOR_0!==void 0&&(o=!0),n&&i&&o)break}if(!n&&!i&&!o)return Promise.resolve(s);const c=[],l=[],u=[];for(let h=0,d=e.length;h<d;h++){const m=e[h];if(n){const p=m.POSITION!==void 0?t.getDependency("accessor",m.POSITION):s.attributes.position;c.push(p)}if(i){const p=m.NORMAL!==void 0?t.getDependency("accessor",m.NORMAL):s.attributes.normal;l.push(p)}if(o){const p=m.COLOR_0!==void 0?t.getDependency("accessor",m.COLOR_0):s.attributes.color;u.push(p)}}return Promise.all([Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],m=h[1],p=h[2];return n&&(s.morphAttributes.position=d),i&&(s.morphAttributes.normal=m),o&&(s.morphAttributes.color=p),s.morphTargetsRelative=!0,s})}function kP(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function GP(s){let e;const t=s.extensions&&s.extensions[gt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Eh(t.attributes):e=s.indices+":"+Eh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Eh(s.targets[n]);return e}function Eh(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Sf(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function WP(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const XP=new qe;class qP{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new pP,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,o=!1,c=-1;if(typeof navigator<"u"){const l=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(l)===!0;const u=l.match(/Version\/(\d+)/);i=n&&u?parseInt(u[1],10):-1,o=l.indexOf("Firefox")>-1,c=o?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||o&&c<98?this.textureLoader=new YC(this.options.manager):this.textureLoader=new eP(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new K_(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(c){const l={scene:c[0][i.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:i.asset,parser:n,userData:{}};return os(o,l,i),ur(l,i),Promise.all(n._invokeAll(function(u){return u.afterRoot&&u.afterRoot(l)})).then(function(){for(const u of l.scenes)u.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,o=t.length;i<o;i++){const c=t[i].joints;for(let l=0,u=c.length;l<u;l++)e[c[l]].isBone=!0}for(let i=0,o=e.length;i<o;i++){const c=e[i];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(n[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),o=(c,l)=>{const u=this.associations.get(c);u!=null&&this.associations.set(l,u);for(const[h,d]of c.children.entries())o(d,l.children[h])};return o(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const o=e(t[i]);o&&n.push(o)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(o){return o.loadNode&&o.loadNode(t)});break;case"mesh":i=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(o,c){return n.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[gt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(o,c){n.load(pa.resolveURL(t.uri,i.path),o,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,o=t.byteOffset||0;return n.slice(o,o+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const c=Mh[i.type],l=mo[i.componentType],u=i.normalized===!0,h=new l(i.count*c);return Promise.resolve(new mn(h,c,u))}const o=[];return i.bufferView!==void 0?o.push(this.getDependency("bufferView",i.bufferView)):o.push(null),i.sparse!==void 0&&(o.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(o).then(function(c){const l=c[0],u=Mh[i.type],h=mo[i.componentType],d=h.BYTES_PER_ELEMENT,m=d*u,p=i.byteOffset||0,g=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,y=i.normalized===!0;let M,x;if(g&&g!==m){const _=Math.floor(p/g),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let S=t.cache.get(T);S||(M=new h(l,_*g,i.count*g/d),S=new TC(M,g/d),t.cache.add(T,S)),x=new jf(S,u,p%g/d,y)}else l===null?M=new h(i.count*u):M=new h(l,p,i.count*u),x=new mn(M,u,y);if(i.sparse!==void 0){const _=Mh.SCALAR,T=mo[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,w=i.sparse.values.byteOffset||0,N=new T(c[1],S,i.sparse.count*_),I=new h(c[2],w,i.sparse.count*u);l!==null&&(x=new mn(x.array.slice(),x.itemSize,x.normalized));for(let L=0,F=N.length;L<F;L++){const R=N[L];if(x.setX(R,I[L*u]),u>=2&&x.setY(R,I[L*u+1]),u>=3&&x.setZ(R,I[L*u+2]),u>=4&&x.setW(R,I[L*u+3]),u>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return x})}loadTexture(e){const t=this.json,n=this.options,o=t.textures[e].source,c=t.images[o];let l=this.textureLoader;if(c.uri){const u=n.manager.getHandler(c.uri);u!==null&&(l=u)}return this.loadTextureImage(e,o,l)}loadTextureImage(e,t,n){const i=this,o=this.json,c=o.textures[e],l=o.images[t],u=(l.uri||l.bufferView)+":"+c.sampler;if(this.textureCache[u])return this.textureCache[u];const h=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=c.name||l.name||"",d.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(d.name=l.uri);const p=(o.samplers||{})[c.sampler]||{};return d.magFilter=Yg[p.magFilter]||Jn,d.minFilter=Yg[p.minFilter]||hr,d.wrapS=Kg[p.wrapS]||xo,d.wrapT=Kg[p.wrapT]||xo,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[u]=h,h}loadImageSource(e,t){const n=this,i=this.json,o=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(m=>m.clone());const c=i.images[e],l=self.URL||self.webkitURL;let u=c.uri||"",h=!1;if(c.bufferView!==void 0)u=n.getDependency("bufferView",c.bufferView).then(function(m){h=!0;const p=new Blob([m],{type:c.mimeType});return u=l.createObjectURL(p),u});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(u).then(function(m){return new Promise(function(p,g){let y=p;t.isImageBitmapLoader===!0&&(y=function(M){const x=new pn(M);x.needsUpdate=!0,p(x)}),t.load(pa.resolveURL(m,o.path),y,void 0,g)})}).then(function(m){return h===!0&&l.revokeObjectURL(u),ur(m,c),m.userData.mimeType=c.mimeType||WP(c.uri),m}).catch(function(m){throw console.error("THREE.GLTFLoader: Couldn't load texture",u),m});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const o=this;return this.getDependency("texture",n.index).then(function(c){if(!c)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(c=c.clone(),c.channel=n.texCoord),o.extensions[gt.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[gt.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const u=o.associations.get(c);c=o.extensions[gt.KHR_TEXTURE_TRANSFORM].extendTexture(c,l),o.associations.set(c,u)}}return i!==void 0&&(c.colorSpace=i),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,o=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+n.uuid;let u=this.cache.get(l);u||(u=new X_,Di.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,u.sizeAttenuation=!1,this.cache.add(l,u)),n=u}else if(e.isLine){const l="LineBasicMaterial:"+n.uuid;let u=this.cache.get(l);u||(u=new W_,Di.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,this.cache.add(l,u)),n=u}if(i||o||c){let l="ClonedMaterial:"+n.uuid+":";i&&(l+="derivative-tangents:"),o&&(l+="vertex-colors:"),c&&(l+="flat-shading:");let u=this.cache.get(l);u||(u=n.clone(),o&&(u.vertexColors=!0),c&&(u.flatShading=!0),i&&(u.normalScale&&(u.normalScale.y*=-1),u.clearcoatNormalScale&&(u.clearcoatNormalScale.y*=-1)),this.cache.add(l,u),this.associations.set(u,this.associations.get(n))),n=u}e.material=n}getMaterialType(){return Ea}loadMaterial(e){const t=this,n=this.json,i=this.extensions,o=n.materials[e];let c;const l={},u=o.extensions||{},h=[];if(u[gt.KHR_MATERIALS_UNLIT]){const m=i[gt.KHR_MATERIALS_UNLIT];c=m.getMaterialType(),h.push(m.extendParams(l,o,t))}else{const m=o.pbrMetallicRoughness||{};if(l.color=new Qe(1,1,1),l.opacity=1,Array.isArray(m.baseColorFactor)){const p=m.baseColorFactor;l.color.setRGB(p[0],p[1],p[2],vn),l.opacity=p[3]}m.baseColorTexture!==void 0&&h.push(t.assignTexture(l,"map",m.baseColorTexture,Pn)),l.metalness=m.metallicFactor!==void 0?m.metallicFactor:1,l.roughness=m.roughnessFactor!==void 0?m.roughnessFactor:1,m.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(l,"metalnessMap",m.metallicRoughnessTexture)),h.push(t.assignTexture(l,"roughnessMap",m.metallicRoughnessTexture))),c=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(e,l)})))}o.doubleSided===!0&&(l.side=fi);const d=o.alphaMode||Sh.OPAQUE;if(d===Sh.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,d===Sh.MASK&&(l.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&c!==us&&(h.push(t.assignTexture(l,"normalMap",o.normalTexture)),l.normalScale=new Be(1,1),o.normalTexture.scale!==void 0)){const m=o.normalTexture.scale;l.normalScale.set(m,m)}if(o.occlusionTexture!==void 0&&c!==us&&(h.push(t.assignTexture(l,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&c!==us){const m=o.emissiveFactor;l.emissive=new Qe().setRGB(m[0],m[1],m[2],vn)}return o.emissiveTexture!==void 0&&c!==us&&h.push(t.assignTexture(l,"emissiveMap",o.emissiveTexture,Pn)),Promise.all(h).then(function(){const m=new c(l);return o.name&&(m.name=o.name),ur(m,o),t.associations.set(m,{materials:e}),o.extensions&&os(i,m,o),m})}createUniqueName(e){const t=Lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function o(l){return n[gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(u){return Zg(u,l,t)})}const c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l],d=GP(h),m=i[d];if(m)c.push(m.promise);else{let p;h.extensions&&h.extensions[gt.KHR_DRACO_MESH_COMPRESSION]?p=o(h):p=Zg(new ei,h,t),i[d]={primitive:h,promise:p},c.push(p)}}return Promise.all(c)}loadMesh(e){const t=this,n=this.json,i=this.extensions,o=n.meshes[e],c=o.primitives,l=[];for(let u=0,h=c.length;u<h;u++){const d=c[u].material===void 0?HP(this.cache):this.getDependency("material",c[u].material);l.push(d)}return l.push(t.loadGeometries(c)),Promise.all(l).then(function(u){const h=u.slice(0,u.length-1),d=u[u.length-1],m=[];for(let g=0,y=d.length;g<y;g++){const M=d[g],x=c[g];let _;const T=h[g];if(x.mode===hi.TRIANGLES||x.mode===hi.TRIANGLE_STRIP||x.mode===hi.TRIANGLE_FAN||x.mode===void 0)_=o.isSkinnedMesh===!0?new bC(M,T):new dn(M,T),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),x.mode===hi.TRIANGLE_STRIP?_.geometry=Xg(_.geometry,T_):x.mode===hi.TRIANGLE_FAN&&(_.geometry=Xg(_.geometry,pf));else if(x.mode===hi.LINES)_=new PC(M,T);else if(x.mode===hi.LINE_STRIP)_=new Jf(M,T);else if(x.mode===hi.LINE_LOOP)_=new LC(M,T);else if(x.mode===hi.POINTS)_=new IC(M,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(_.geometry.morphAttributes).length>0&&kP(_,o),_.name=t.createUniqueName(o.name||"mesh_"+e),ur(_,o),x.extensions&&os(i,_,x),t.assignFinalMaterial(_),m.push(_)}for(let g=0,y=m.length;g<y;g++)t.associations.set(m[g],{meshes:e,primitives:g});if(m.length===1)return o.extensions&&os(i,m[0],o),m[0];const p=new hs;o.extensions&&os(i,p,o),t.associations.set(p,{meshes:e});for(let g=0,y=m.length;g<y;g++)p.add(m[g]);return p})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ln(b_.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Kf(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ur(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,o=t.joints.length;i<o;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const o=i.pop(),c=i,l=[],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];if(m){l.push(m);const p=new qe;o!==null&&p.fromArray(o.array,h*16),u.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new $f(l,u)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],o=i.name?i.name:"animation_"+e,c=[],l=[],u=[],h=[],d=[];for(let m=0,p=i.channels.length;m<p;m++){const g=i.channels[m],y=i.samplers[g.sampler],M=g.target,x=M.node,_=i.parameters!==void 0?i.parameters[y.input]:y.input,T=i.parameters!==void 0?i.parameters[y.output]:y.output;M.node!==void 0&&(c.push(this.getDependency("node",x)),l.push(this.getDependency("accessor",_)),u.push(this.getDependency("accessor",T)),h.push(y),d.push(M))}return Promise.all([Promise.all(c),Promise.all(l),Promise.all(u),Promise.all(h),Promise.all(d)]).then(function(m){const p=m[0],g=m[1],y=m[2],M=m[3],x=m[4],_=[];for(let T=0,S=p.length;T<S;T++){const w=p[T],N=g[T],I=y[T],L=M[T],F=x[T];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const R=n._createAnimationTracks(w,N,I,L,F);if(R)for(let b=0;b<R.length;b++)_.push(R[b])}return new HC(o,void 0,_)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(o){const c=n._getNodeRef(n.meshCache,i.mesh,o);return i.weights!==void 0&&c.traverse(function(l){if(l.isMesh)for(let u=0,h=i.weights.length;u<h;u++)l.morphTargetInfluences[u]=i.weights[u]}),c})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],o=n._loadNodeShallow(e),c=[],l=i.children||[];for(let h=0,d=l.length;h<d;h++)c.push(n.getDependency("node",l[h]));const u=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([o,Promise.all(c),u]).then(function(h){const d=h[0],m=h[1],p=h[2];p!==null&&d.traverse(function(g){g.isSkinnedMesh&&g.bind(p,XP)});for(let g=0,y=m.length;g<y;g++)d.add(m[g]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const o=t.nodes[e],c=o.name?i.createUniqueName(o.name):"",l=[],u=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return u&&l.push(u),o.camera!==void 0&&l.push(i.getDependency("camera",o.camera).then(function(h){return i._getNodeRef(i.cameraCache,o.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){l.push(h)}),this.nodeCache[e]=Promise.all(l).then(function(h){let d;if(o.isBone===!0?d=new k_:h.length>1?d=new hs:h.length===1?d=h[0]:d=new qt,d!==h[0])for(let m=0,p=h.length;m<p;m++)d.add(h[m]);if(o.name&&(d.userData.name=o.name,d.name=c),ur(d,o),o.extensions&&os(n,d,o),o.matrix!==void 0){const m=new qe;m.fromArray(o.matrix),d.applyMatrix4(m)}else o.translation!==void 0&&d.position.fromArray(o.translation),o.rotation!==void 0&&d.quaternion.fromArray(o.rotation),o.scale!==void 0&&d.scale.fromArray(o.scale);return i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,o=new hs;n.name&&(o.name=i.createUniqueName(n.name)),ur(o,n),n.extensions&&os(t,o,n);const c=n.nodes||[],l=[];for(let u=0,h=c.length;u<h;u++)l.push(i.getDependency("node",c[u]));return Promise.all(l).then(function(u){for(let d=0,m=u.length;d<m;d++)o.add(u[d]);const h=d=>{const m=new Map;for(const[p,g]of i.associations)(p instanceof Di||p instanceof pn)&&m.set(p,g);return d.traverse(p=>{const g=i.associations.get(p);g!=null&&m.set(p,g)}),m};return i.associations=h(o),o})}_createAnimationTracks(e,t,n,i,o){const c=[],l=e.name?e.name:e.uuid,u=[];Lr[o.path]===Lr.weights?e.traverse(function(p){p.morphTargetInfluences&&u.push(p.name?p.name:p.uuid)}):u.push(l);let h;switch(Lr[o.path]){case Lr.weights:h=Eo;break;case Lr.rotation:h=To;break;case Lr.position:case Lr.scale:h=Ao;break;default:switch(n.itemSize){case 1:h=Eo;break;case 2:case 3:default:h=Ao;break}break}const d=i.interpolation!==void 0?zP[i.interpolation]:va,m=this._getArrayFromAccessor(n);for(let p=0,g=u.length;p<g;p++){const y=new h(u[p]+"."+Lr[o.path],t.array,m,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),c.push(y)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Sf(t.constructor),i=new Float32Array(t.length);for(let o=0,c=t.length;o<c;o++)i[o]=t[o]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof To?BP:j_;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function YP(s,e,t){const n=e.attributes,i=new ln;if(n.POSITION!==void 0){const l=t.json.accessors[n.POSITION],u=l.min,h=l.max;if(u!==void 0&&h!==void 0){if(i.set(new z(u[0],u[1],u[2]),new z(h[0],h[1],h[2])),l.normalized){const d=Sf(mo[l.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=e.targets;if(o!==void 0){const l=new z,u=new z;for(let h=0,d=o.length;h<d;h++){const m=o[h];if(m.POSITION!==void 0){const p=t.json.accessors[m.POSITION],g=p.min,y=p.max;if(g!==void 0&&y!==void 0){if(u.setX(Math.max(Math.abs(g[0]),Math.abs(y[0]))),u.setY(Math.max(Math.abs(g[1]),Math.abs(y[1]))),u.setZ(Math.max(Math.abs(g[2]),Math.abs(y[2]))),p.normalized){const M=Sf(mo[p.componentType]);u.multiplyScalar(M)}l.max(u)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(l)}s.boundingBox=i;const c=new vi;i.getCenter(c.center),c.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=c}function Zg(s,e,t){const n=e.attributes,i=[];function o(c,l){return t.getDependency("accessor",c).then(function(u){s.setAttribute(l,u)})}for(const c in n){const l=Mf[c]||c.toLowerCase();l in s.attributes||i.push(o(n[c],l))}if(e.indices!==void 0&&!s.index){const c=t.getDependency("accessor",e.indices).then(function(l){s.setIndex(l)});i.push(c)}return bt.workingColorSpace!==vn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${bt.workingColorSpace}" not supported.`),ur(s,e),YP(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?VP(s,e.targets,t):s})}const $_=0,KP=1,ZP=2,jP=0,jg=1,Ef=2,Th=1.25,$g=1,ma=6*4+4+4,Ll=65535,$P=Math.pow(2,-24),Ah=Symbol("SKIP_GENERATION");function JP(s){return s.index?s.index.count:s.attributes.position.count}function Po(s){return JP(s)/3}function QP(s,e=ArrayBuffer){return s>65535?new Uint32Array(new e(4*s)):new Uint16Array(new e(2*s))}function eL(s,e){if(!s.index){const t=s.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=QP(t,n);s.setIndex(new mn(i,1));for(let o=0;o<t;o++)i[o]=o}}function J_(s){const e=Po(s),t=s.drawRange,n=t.start/3,i=(t.start+t.count)/3,o=Math.max(0,n),c=Math.min(e,i)-o;return[{offset:Math.floor(o),count:Math.floor(c)}]}function Q_(s){if(!s.groups||!s.groups.length)return J_(s);const e=[],t=new Set,n=s.drawRange,i=n.start/3,o=(n.start+n.count)/3;for(const l of s.groups){const u=l.start/3,h=(l.start+l.count)/3;t.add(Math.max(i,u)),t.add(Math.min(o,h))}const c=Array.from(t.values()).sort((l,u)=>l-u);for(let l=0;l<c.length-1;l++){const u=c[l],h=c[l+1];e.push({offset:Math.floor(u),count:Math.floor(h-u)})}return e}function tL(s){if(s.groups.length===0)return!1;const e=Po(s),t=Q_(s).sort((o,c)=>o.offset-c.offset),n=t[t.length-1];n.count=Math.min(e-n.offset,n.count);let i=0;return t.forEach(({count:o})=>i+=o),e!==i}function bh(s,e,t,n,i){let o=1/0,c=1/0,l=1/0,u=-1/0,h=-1/0,d=-1/0,m=1/0,p=1/0,g=1/0,y=-1/0,M=-1/0,x=-1/0;for(let _=e*6,T=(e+t)*6;_<T;_+=6){const S=s[_+0],w=s[_+1],N=S-w,I=S+w;N<o&&(o=N),I>u&&(u=I),S<m&&(m=S),S>y&&(y=S);const L=s[_+2],F=s[_+3],R=L-F,b=L+F;R<c&&(c=R),b>h&&(h=b),L<p&&(p=L),L>M&&(M=L);const O=s[_+4],G=s[_+5],W=O-G,Z=O+G;W<l&&(l=W),Z>d&&(d=Z),O<g&&(g=O),O>x&&(x=O)}n[0]=o,n[1]=c,n[2]=l,n[3]=u,n[4]=h,n[5]=d,i[0]=m,i[1]=p,i[2]=g,i[3]=y,i[4]=M,i[5]=x}function nL(s,e=null,t=null,n=null){const i=s.attributes.position,o=s.index?s.index.array:null,c=Po(s),l=i.normalized;let u;e===null?(u=new Float32Array(c*6*4),t=0,n=c):(u=e,t=t||0,n=n||c);const h=i.array,d=i.offset||0;let m=3;i.isInterleavedBufferAttribute&&(m=i.data.stride);const p=["getX","getY","getZ"];for(let g=t;g<t+n;g++){const y=g*3,M=g*6;let x=y+0,_=y+1,T=y+2;o&&(x=o[x],_=o[_],T=o[T]),l||(x=x*m+d,_=_*m+d,T=T*m+d);for(let S=0;S<3;S++){let w,N,I;l?(w=i[p[S]](x),N=i[p[S]](_),I=i[p[S]](T)):(w=h[x+S],N=h[_+S],I=h[T+S]);let L=w;N<L&&(L=N),I<L&&(L=I);let F=w;N>F&&(F=N),I>F&&(F=I);const R=(F-L)/2,b=S*2;u[M+b+0]=L+R,u[M+b+1]=R+(Math.abs(L)+R)*$P}}return u}function Zt(s,e,t){return t.min.x=e[s],t.min.y=e[s+1],t.min.z=e[s+2],t.max.x=e[s+3],t.max.y=e[s+4],t.max.z=e[s+5],t}function Jg(s){let e=-1,t=-1/0;for(let n=0;n<3;n++){const i=s[n+3]-s[n];i>t&&(t=i,e=n)}return e}function Qg(s,e){e.set(s)}function e_(s,e,t){let n,i;for(let o=0;o<3;o++){const c=o+3;n=s[o],i=e[o],t[o]=n<i?n:i,n=s[c],i=e[c],t[c]=n>i?n:i}}function Xc(s,e,t){for(let n=0;n<3;n++){const i=e[s+2*n],o=e[s+2*n+1],c=i-o,l=i+o;c<t[n]&&(t[n]=c),l>t[n+3]&&(t[n+3]=l)}}function ia(s){const e=s[3]-s[0],t=s[4]-s[1],n=s[5]-s[2];return 2*(e*t+t*n+n*e)}const lr=32,iL=(s,e)=>s.candidate-e.candidate,Ir=new Array(lr).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),qc=new Float32Array(6);function rL(s,e,t,n,i,o){let c=-1,l=0;if(o===$_)c=Jg(e),c!==-1&&(l=(e[c]+e[c+3])/2);else if(o===KP)c=Jg(s),c!==-1&&(l=sL(t,n,i,c));else if(o===ZP){const u=ia(s);let h=Th*i;const d=n*6,m=(n+i)*6;for(let p=0;p<3;p++){const g=e[p],x=(e[p+3]-g)/lr;if(i<lr/4){const _=[...Ir];_.length=i;let T=0;for(let w=d;w<m;w+=6,T++){const N=_[T];N.candidate=t[w+2*p],N.count=0;const{bounds:I,leftCacheBounds:L,rightCacheBounds:F}=N;for(let R=0;R<3;R++)F[R]=1/0,F[R+3]=-1/0,L[R]=1/0,L[R+3]=-1/0,I[R]=1/0,I[R+3]=-1/0;Xc(w,t,I)}_.sort(iL);let S=i;for(let w=0;w<S;w++){const N=_[w];for(;w+1<S&&_[w+1].candidate===N.candidate;)_.splice(w+1,1),S--}for(let w=d;w<m;w+=6){const N=t[w+2*p];for(let I=0;I<S;I++){const L=_[I];N>=L.candidate?Xc(w,t,L.rightCacheBounds):(Xc(w,t,L.leftCacheBounds),L.count++)}}for(let w=0;w<S;w++){const N=_[w],I=N.count,L=i-N.count,F=N.leftCacheBounds,R=N.rightCacheBounds;let b=0;I!==0&&(b=ia(F)/u);let O=0;L!==0&&(O=ia(R)/u);const G=$g+Th*(b*I+O*L);G<h&&(c=p,h=G,l=N.candidate)}}else{for(let S=0;S<lr;S++){const w=Ir[S];w.count=0,w.candidate=g+x+S*x;const N=w.bounds;for(let I=0;I<3;I++)N[I]=1/0,N[I+3]=-1/0}for(let S=d;S<m;S+=6){let I=~~((t[S+2*p]-g)/x);I>=lr&&(I=lr-1);const L=Ir[I];L.count++,Xc(S,t,L.bounds)}const _=Ir[lr-1];Qg(_.bounds,_.rightCacheBounds);for(let S=lr-2;S>=0;S--){const w=Ir[S],N=Ir[S+1];e_(w.bounds,N.rightCacheBounds,w.rightCacheBounds)}let T=0;for(let S=0;S<lr-1;S++){const w=Ir[S],N=w.count,I=w.bounds,F=Ir[S+1].rightCacheBounds;N!==0&&(T===0?Qg(I,qc):e_(I,qc,qc)),T+=N;let R=0,b=0;T!==0&&(R=ia(qc)/u);const O=i-T;O!==0&&(b=ia(F)/u);const G=$g+Th*(R*T+b*O);G<h&&(c=p,h=G,l=w.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${o} used.`);return{axis:c,pos:l}}function sL(s,e,t,n){let i=0;for(let o=e,c=e+t;o<c;o++)i+=s[o*6+n*2];return i/t}class wh{constructor(){this.boundingData=new Float32Array(6)}}function oL(s,e,t,n,i,o){let c=n,l=n+i-1;const u=o.pos,h=o.axis*2;for(;;){for(;c<=l&&t[c*6+h]<u;)c++;for(;c<=l&&t[l*6+h]>=u;)l--;if(c<l){for(let d=0;d<3;d++){let m=e[c*3+d];e[c*3+d]=e[l*3+d],e[l*3+d]=m}for(let d=0;d<6;d++){let m=t[c*6+d];t[c*6+d]=t[l*6+d],t[l*6+d]=m}c++,l--}else return c}}function aL(s,e,t,n,i,o){let c=n,l=n+i-1;const u=o.pos,h=o.axis*2;for(;;){for(;c<=l&&t[c*6+h]<u;)c++;for(;c<=l&&t[l*6+h]>=u;)l--;if(c<l){let d=s[c];s[c]=s[l],s[l]=d;for(let m=0;m<6;m++){let p=t[c*6+m];t[c*6+m]=t[l*6+m],t[l*6+m]=p}c++,l--}else return c}}function kn(s,e){return e[s+15]===65535}function Qn(s,e){return e[s+6]}function pi(s,e){return e[s+14]}function mi(s){return s+8}function gi(s,e){return e[s+6]}function e0(s,e){return e[s+7]}let t0,ha,pl,n0;const cL=Math.pow(2,32);function Tf(s){return"count"in s?1:1+Tf(s.left)+Tf(s.right)}function lL(s,e,t){return t0=new Float32Array(t),ha=new Uint32Array(t),pl=new Uint16Array(t),n0=new Uint8Array(t),Af(s,e)}function Af(s,e){const t=s/4,n=s/2,i="count"in e,o=e.boundingData;for(let c=0;c<6;c++)t0[t+c]=o[c];if(i)if(e.buffer){const c=e.buffer;n0.set(new Uint8Array(c),s);for(let l=s,u=s+c.byteLength;l<u;l+=ma){const h=l/2;kn(h,pl)||(ha[l/4+6]+=t)}return s+c.byteLength}else{const c=e.offset,l=e.count;return ha[t+6]=c,pl[n+14]=l,pl[n+15]=Ll,s+ma}else{const c=e.left,l=e.right,u=e.splitAxis;let h;if(h=Af(s+ma,c),h/4>cL)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return ha[t+6]=h/4,h=Af(h,l),ha[t+7]=u,h}}function uL(s,e){const t=(s.index?s.index.count:s.attributes.position.count)/3,n=t>2**16,i=n?4:2,o=e?new SharedArrayBuffer(t*i):new ArrayBuffer(t*i),c=n?new Uint32Array(o):new Uint16Array(o);for(let l=0,u=c.length;l<u;l++)c[l]=l;return c}function hL(s,e,t,n,i){const{maxDepth:o,verbose:c,maxLeafTris:l,strategy:u,onProgress:h,indirect:d}=i,m=s._indirectBuffer,p=s.geometry,g=p.index?p.index.array:null,y=d?aL:oL,M=Po(p),x=new Float32Array(6);let _=!1;const T=new wh;return bh(e,t,n,T.boundingData,x),w(T,t,n,x),T;function S(N){h&&h(N/M)}function w(N,I,L,F=null,R=0){if(!_&&R>=o&&(_=!0,c&&(console.warn(`MeshBVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`),console.warn(p))),L<=l||R>=o)return S(I+L),N.offset=I,N.count=L,N;const b=rL(N.boundingData,F,e,I,L,u);if(b.axis===-1)return S(I+L),N.offset=I,N.count=L,N;const O=y(m,g,e,I,L,b);if(O===I||O===I+L)S(I+L),N.offset=I,N.count=L;else{N.splitAxis=b.axis;const G=new wh,W=I,Z=O-I;N.left=G,bh(e,W,Z,G.boundingData,x),w(G,W,Z,x,R+1);const se=new wh,J=O,ue=L-Z;N.right=se,bh(e,J,ue,se.boundingData,x),w(se,J,ue,x,R+1)}return N}}function fL(s,e){const t=s.geometry;e.indirect&&(s._indirectBuffer=uL(t,e.useSharedArrayBuffer),tL(t)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),s._indirectBuffer||eL(t,e);const n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=nL(t),o=e.indirect?J_(t):Q_(t);s._roots=o.map(c=>{const l=hL(s,i,c.offset,c.count,e),u=Tf(l),h=new n(ma*u);return lL(0,l,h),h})}class mr{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,i=-1/0;for(let o=0,c=e.length;o<c;o++){const u=e[o][t];n=u<n?u:n,i=u>i?u:i}this.min=n,this.max=i}setFromPoints(e,t){let n=1/0,i=-1/0;for(let o=0,c=t.length;o<c;o++){const l=t[o],u=e.dot(l);n=u<n?u:n,i=u>i?u:i}this.min=n,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}}mr.prototype.setFromBox=function(){const s=new z;return function(t,n){const i=n.min,o=n.max;let c=1/0,l=-1/0;for(let u=0;u<=1;u++)for(let h=0;h<=1;h++)for(let d=0;d<=1;d++){s.x=i.x*u+o.x*(1-u),s.y=i.y*h+o.y*(1-h),s.z=i.z*d+o.z*(1-d);const m=t.dot(s);c=Math.min(m,c),l=Math.max(m,l)}this.min=c,this.max=l}}();const dL=function(){const s=new z,e=new z,t=new z;return function(i,o,c){const l=i.start,u=s,h=o.start,d=e;t.subVectors(l,h),s.subVectors(i.end,i.start),e.subVectors(o.end,o.start);const m=t.dot(d),p=d.dot(u),g=d.dot(d),y=t.dot(u),x=u.dot(u)*g-p*p;let _,T;x!==0?_=(m*p-y*g)/x:_=0,T=(m+_*p)/g,c.x=_,c.y=T}}(),nd=function(){const s=new Be,e=new z,t=new z;return function(i,o,c,l){dL(i,o,s);let u=s.x,h=s.y;if(u>=0&&u<=1&&h>=0&&h<=1){i.at(u,c),o.at(h,l);return}else if(u>=0&&u<=1){h<0?o.at(0,l):o.at(1,l),i.closestPointToPoint(l,!0,c);return}else if(h>=0&&h<=1){u<0?i.at(0,c):i.at(1,c),o.closestPointToPoint(c,!0,l);return}else{let d;u<0?d=i.start:d=i.end;let m;h<0?m=o.start:m=o.end;const p=e,g=t;if(i.closestPointToPoint(m,!0,e),o.closestPointToPoint(d,!0,t),p.distanceToSquared(m)<=g.distanceToSquared(d)){c.copy(p),l.copy(m);return}else{c.copy(d),l.copy(g);return}}}}(),pL=function(){const s=new z,e=new z,t=new Vi,n=new dr;return function(o,c){const{radius:l,center:u}=o,{a:h,b:d,c:m}=c;if(n.start=h,n.end=d,n.closestPointToPoint(u,!0,s).distanceTo(u)<=l||(n.start=h,n.end=m,n.closestPointToPoint(u,!0,s).distanceTo(u)<=l)||(n.start=d,n.end=m,n.closestPointToPoint(u,!0,s).distanceTo(u)<=l))return!0;const M=c.getPlane(t);if(Math.abs(M.distanceToPoint(u))<=l){const _=M.projectPoint(u,e);if(c.containsPoint(_))return!0}return!1}}(),mL=1e-15;function Rh(s){return Math.abs(s)<mL}class Oi extends In{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new z),this.satBounds=new Array(4).fill().map(()=>new mr),this.points=[this.a,this.b,this.c],this.sphere=new vi,this.plane=new Vi,this.needsUpdate=!0}intersectsSphere(e){return pL(e,this)}update(){const e=this.a,t=this.b,n=this.c,i=this.points,o=this.satAxes,c=this.satBounds,l=o[0],u=c[0];this.getNormal(l),u.setFromPoints(l,i);const h=o[1],d=c[1];h.subVectors(e,t),d.setFromPoints(h,i);const m=o[2],p=c[2];m.subVectors(t,n),p.setFromPoints(m,i);const g=o[3],y=c[3];g.subVectors(n,e),y.setFromPoints(g,i),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(l,e),this.needsUpdate=!1}}Oi.prototype.closestPointToSegment=function(){const s=new z,e=new z,t=new dr;return function(i,o=null,c=null){const{start:l,end:u}=i,h=this.points;let d,m=1/0;for(let p=0;p<3;p++){const g=(p+1)%3;t.start.copy(h[p]),t.end.copy(h[g]),nd(t,i,s,e),d=s.distanceToSquared(e),d<m&&(m=d,o&&o.copy(s),c&&c.copy(e))}return this.closestPointToPoint(l,s),d=l.distanceToSquared(s),d<m&&(m=d,o&&o.copy(s),c&&c.copy(l)),this.closestPointToPoint(u,s),d=u.distanceToSquared(s),d<m&&(m=d,o&&o.copy(s),c&&c.copy(u)),Math.sqrt(m)}}();Oi.prototype.intersectsTriangle=function(){const s=new Oi,e=new Array(3),t=new Array(3),n=new mr,i=new mr,o=new z,c=new z,l=new z,u=new z,h=new z,d=new dr,m=new dr,p=new dr,g=new z;function y(M,x,_){const T=M.points;let S=0,w=-1;for(let N=0;N<3;N++){const{start:I,end:L}=d;I.copy(T[N]),L.copy(T[(N+1)%3]),d.delta(c);const F=Rh(x.distanceToPoint(I));if(Rh(x.normal.dot(c))&&F){_.copy(d),S=2;break}const R=x.intersectLine(d,g);if(!R&&F&&g.copy(I),(R||F)&&!Rh(g.distanceTo(L))){if(S<=1)(S===1?_.start:_.end).copy(g),F&&(w=S);else if(S>=2){(w===1?_.start:_.end).copy(g),S=2;break}if(S++,S===2&&w===-1)break}}return S}return function(x,_=null,T=!1){this.needsUpdate&&this.update(),x.isExtendedTriangle?x.needsUpdate&&x.update():(s.copy(x),s.update(),x=s);const S=this.plane,w=x.plane;if(Math.abs(S.normal.dot(w.normal))>1-1e-10){const N=this.satBounds,I=this.satAxes;t[0]=x.a,t[1]=x.b,t[2]=x.c;for(let R=0;R<4;R++){const b=N[R],O=I[R];if(n.setFromPoints(O,t),b.isSeparated(n))return!1}const L=x.satBounds,F=x.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let R=0;R<4;R++){const b=L[R],O=F[R];if(n.setFromPoints(O,e),b.isSeparated(n))return!1}for(let R=0;R<4;R++){const b=I[R];for(let O=0;O<4;O++){const G=F[O];if(o.crossVectors(b,G),n.setFromPoints(o,e),i.setFromPoints(o,t),n.isSeparated(i))return!1}}return _&&(T||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),_.start.set(0,0,0),_.end.set(0,0,0)),!0}else{const N=y(this,w,m);if(N===1&&x.containsPoint(m.end))return _&&(_.start.copy(m.end),_.end.copy(m.end)),!0;if(N!==2)return!1;const I=y(x,S,p);if(I===1&&this.containsPoint(p.end))return _&&(_.start.copy(p.end),_.end.copy(p.end)),!0;if(I!==2)return!1;if(m.delta(l),p.delta(u),l.dot(u)<0){let W=p.start;p.start=p.end,p.end=W}const L=m.start.dot(l),F=m.end.dot(l),R=p.start.dot(l),b=p.end.dot(l),O=F<R,G=L<b;return L!==b&&R!==F&&O===G?!1:(_&&(h.subVectors(m.start,p.start),h.dot(l)>0?_.start.copy(m.start):_.start.copy(p.start),h.subVectors(m.end,p.end),h.dot(l)<0?_.end.copy(m.end):_.end.copy(p.end)),!0)}}}();Oi.prototype.distanceToPoint=function(){const s=new z;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}}();Oi.prototype.distanceToTriangle=function(){const s=new z,e=new z,t=["a","b","c"],n=new dr,i=new dr;return function(c,l=null,u=null){const h=l||u?n:null;if(this.intersectsTriangle(c,h))return(l||u)&&(l&&h.getCenter(l),u&&h.getCenter(u)),0;let d=1/0;for(let m=0;m<3;m++){let p;const g=t[m],y=c[g];this.closestPointToPoint(y,s),p=y.distanceToSquared(s),p<d&&(d=p,l&&l.copy(s),u&&u.copy(y));const M=this[g];c.closestPointToPoint(M,s),p=M.distanceToSquared(s),p<d&&(d=p,l&&l.copy(M),u&&u.copy(s))}for(let m=0;m<3;m++){const p=t[m],g=t[(m+1)%3];n.set(this[p],this[g]);for(let y=0;y<3;y++){const M=t[y],x=t[(y+1)%3];i.set(c[M],c[x]),nd(n,i,s,e);const _=s.distanceToSquared(e);_<d&&(d=_,l&&l.copy(s),u&&u.copy(e))}}return Math.sqrt(d)}}();class Nn{constructor(e,t,n){this.isOrientedBox=!0,this.min=new z,this.max=new z,this.matrix=new qe,this.invMatrix=new qe,this.points=new Array(8).fill().map(()=>new z),this.satAxes=new Array(3).fill().map(()=>new z),this.satBounds=new Array(3).fill().map(()=>new mr),this.alignedSatBounds=new Array(3).fill().map(()=>new mr),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}Nn.prototype.update=function(){return function(){const e=this.matrix,t=this.min,n=this.max,i=this.points;for(let h=0;h<=1;h++)for(let d=0;d<=1;d++)for(let m=0;m<=1;m++){const p=1*h|2*d|4*m,g=i[p];g.x=h?n.x:t.x,g.y=d?n.y:t.y,g.z=m?n.z:t.z,g.applyMatrix4(e)}const o=this.satBounds,c=this.satAxes,l=i[0];for(let h=0;h<3;h++){const d=c[h],m=o[h],p=1<<h,g=i[p];d.subVectors(l,g),m.setFromPoints(d,i)}const u=this.alignedSatBounds;u[0].setFromPointsField(i,"x"),u[1].setFromPointsField(i,"y"),u[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();Nn.prototype.intersectsBox=function(){const s=new mr;return function(t){this.needsUpdate&&this.update();const n=t.min,i=t.max,o=this.satBounds,c=this.satAxes,l=this.alignedSatBounds;if(s.min=n.x,s.max=i.x,l[0].isSeparated(s)||(s.min=n.y,s.max=i.y,l[1].isSeparated(s))||(s.min=n.z,s.max=i.z,l[2].isSeparated(s)))return!1;for(let u=0;u<3;u++){const h=c[u],d=o[u];if(s.setFromBox(h,t),d.isSeparated(s))return!1}return!0}}();Nn.prototype.intersectsTriangle=function(){const s=new Oi,e=new Array(3),t=new mr,n=new mr,i=new z;return function(c){this.needsUpdate&&this.update(),c.isExtendedTriangle?c.needsUpdate&&c.update():(s.copy(c),s.update(),c=s);const l=this.satBounds,u=this.satAxes;e[0]=c.a,e[1]=c.b,e[2]=c.c;for(let p=0;p<3;p++){const g=l[p],y=u[p];if(t.setFromPoints(y,e),g.isSeparated(t))return!1}const h=c.satBounds,d=c.satAxes,m=this.points;for(let p=0;p<3;p++){const g=h[p],y=d[p];if(t.setFromPoints(y,m),g.isSeparated(t))return!1}for(let p=0;p<3;p++){const g=u[p];for(let y=0;y<4;y++){const M=d[y];if(i.crossVectors(g,M),t.setFromPoints(i,e),n.setFromPoints(i,m),t.isSeparated(n))return!1}}return!0}}();Nn.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();Nn.prototype.distanceToPoint=function(){const s=new z;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}}();Nn.prototype.distanceToBox=function(){const s=["x","y","z"],e=new Array(12).fill().map(()=>new dr),t=new Array(12).fill().map(()=>new dr),n=new z,i=new z;return function(c,l=0,u=null,h=null){if(this.needsUpdate&&this.update(),this.intersectsBox(c))return(u||h)&&(c.getCenter(i),this.closestPointToPoint(i,n),c.closestPointToPoint(n,i),u&&u.copy(n),h&&h.copy(i)),0;const d=l*l,m=c.min,p=c.max,g=this.points;let y=1/0;for(let x=0;x<8;x++){const _=g[x];i.copy(_).clamp(m,p);const T=_.distanceToSquared(i);if(T<y&&(y=T,u&&u.copy(_),h&&h.copy(i),T<d))return Math.sqrt(T)}let M=0;for(let x=0;x<3;x++)for(let _=0;_<=1;_++)for(let T=0;T<=1;T++){const S=(x+1)%3,w=(x+2)%3,N=_<<S|T<<w,I=1<<x|_<<S|T<<w,L=g[N],F=g[I];e[M].set(L,F);const b=s[x],O=s[S],G=s[w],W=t[M],Z=W.start,se=W.end;Z[b]=m[b],Z[O]=_?m[O]:p[O],Z[G]=T?m[G]:p[O],se[b]=p[b],se[O]=_?m[O]:p[O],se[G]=T?m[G]:p[O],M++}for(let x=0;x<=1;x++)for(let _=0;_<=1;_++)for(let T=0;T<=1;T++){i.x=x?p.x:m.x,i.y=_?p.y:m.y,i.z=T?p.z:m.z,this.closestPointToPoint(i,n);const S=i.distanceToSquared(n);if(S<y&&(y=S,u&&u.copy(n),h&&h.copy(i),S<d))return Math.sqrt(S)}for(let x=0;x<12;x++){const _=e[x];for(let T=0;T<12;T++){const S=t[T];nd(_,S,n,i);const w=n.distanceToSquared(i);if(w<y&&(y=w,u&&u.copy(n),h&&h.copy(i),w<d))return Math.sqrt(w)}}return Math.sqrt(y)}}();class id{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class gL extends id{constructor(){super(()=>new Oi)}}const _i=new gL;class _L{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const Vt=new _L;let zr,uo;const Qs=[],Yc=new id(()=>new ln);function xL(s,e,t,n,i,o){zr=Yc.getPrimitive(),uo=Yc.getPrimitive(),Qs.push(zr,uo),Vt.setBuffer(s._roots[e]);const c=bf(0,s.geometry,t,n,i,o);Vt.clearBuffer(),Yc.releasePrimitive(zr),Yc.releasePrimitive(uo),Qs.pop(),Qs.pop();const l=Qs.length;return l>0&&(uo=Qs[l-1],zr=Qs[l-2]),c}function bf(s,e,t,n,i=null,o=0,c=0){const{float32Array:l,uint16Array:u,uint32Array:h}=Vt;let d=s*2;if(kn(d,u)){const p=Qn(s,h),g=pi(d,u);return Zt(s,l,zr),n(p,g,!1,c,o+s,zr)}else{let b=function(G){const{uint16Array:W,uint32Array:Z}=Vt;let se=G*2;for(;!kn(se,W);)G=mi(G),se=G*2;return Qn(G,Z)},O=function(G){const{uint16Array:W,uint32Array:Z}=Vt;let se=G*2;for(;!kn(se,W);)G=gi(G,Z),se=G*2;return Qn(G,Z)+pi(se,W)};const p=mi(s),g=gi(s,h);let y=p,M=g,x,_,T,S;if(i&&(T=zr,S=uo,Zt(y,l,T),Zt(M,l,S),x=i(T),_=i(S),_<x)){y=g,M=p;const G=x;x=_,_=G,T=S}T||(T=zr,Zt(y,l,T));const w=kn(y*2,u),N=t(T,w,x,c+1,o+y);let I;if(N===Ef){const G=b(y),Z=O(y)-G;I=n(G,Z,!0,c+1,o+y,T)}else I=N&&bf(y,e,t,n,i,o,c+1);if(I)return!0;S=uo,Zt(M,l,S);const L=kn(M*2,u),F=t(S,L,_,c+1,o+M);let R;if(F===Ef){const G=b(M),Z=O(M)-G;R=n(G,Z,!0,c+1,o+M,S)}else R=F&&bf(M,e,t,n,i,o,c+1);return!!R}}const ra=new z,Ch=new z;function vL(s,e,t={},n=0,i=1/0){const o=n*n,c=i*i;let l=1/0,u=null;if(s.shapecast({boundsTraverseOrder:d=>(ra.copy(e).clamp(d.min,d.max),ra.distanceToSquared(e)),intersectsBounds:(d,m,p)=>p<l&&p<c,intersectsTriangle:(d,m)=>{d.closestPointToPoint(e,ra);const p=e.distanceToSquared(ra);return p<l&&(Ch.copy(ra),l=p,u=m),p<o}}),l===1/0)return null;const h=Math.sqrt(l);return t.point?t.point.copy(Ch):t.point=Ch.clone(),t.distance=h,t.faceIndex=u,t}const eo=new z,to=new z,no=new z,Kc=new Be,Zc=new Be,jc=new Be,t_=new z,n_=new z,i_=new z,$c=new z;function yL(s,e,t,n,i,o,c,l){let u;if(o===Un?u=s.intersectTriangle(n,t,e,!0,i):u=s.intersectTriangle(e,t,n,o!==fi,i),u===null)return null;const h=s.origin.distanceTo(i);return h<c||h>l?null:{distance:h,point:i.clone()}}function ML(s,e,t,n,i,o,c,l,u,h,d){eo.fromBufferAttribute(e,o),to.fromBufferAttribute(e,c),no.fromBufferAttribute(e,l);const m=yL(s,eo,to,no,$c,u,h,d);if(m){n&&(Kc.fromBufferAttribute(n,o),Zc.fromBufferAttribute(n,c),jc.fromBufferAttribute(n,l),m.uv=In.getInterpolation($c,eo,to,no,Kc,Zc,jc,new Be)),i&&(Kc.fromBufferAttribute(i,o),Zc.fromBufferAttribute(i,c),jc.fromBufferAttribute(i,l),m.uv1=In.getInterpolation($c,eo,to,no,Kc,Zc,jc,new Be)),t&&(t_.fromBufferAttribute(t,o),n_.fromBufferAttribute(t,c),i_.fromBufferAttribute(t,l),m.normal=In.getInterpolation($c,eo,to,no,t_,n_,i_,new z),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const p={a:o,b:c,c:l,normal:new z,materialIndex:0};In.getNormal(eo,to,no,p.normal),m.face=p,m.faceIndex=o}return m}function Il(s,e,t,n,i,o,c){const l=n*3;let u=l+0,h=l+1,d=l+2;const m=s.index;s.index&&(u=m.getX(u),h=m.getX(h),d=m.getX(d));const{position:p,normal:g,uv:y,uv1:M}=s.attributes,x=ML(t,p,g,y,M,u,h,d,e,o,c);return x?(x.faceIndex=n,i&&i.push(x),x):null}function nn(s,e,t,n){const i=s.a,o=s.b,c=s.c;let l=e,u=e+1,h=e+2;t&&(l=t.getX(l),u=t.getX(u),h=t.getX(h)),i.x=n.getX(l),i.y=n.getY(l),i.z=n.getZ(l),o.x=n.getX(u),o.y=n.getY(u),o.z=n.getZ(u),c.x=n.getX(h),c.y=n.getY(h),c.z=n.getZ(h)}function SL(s,e,t,n,i,o,c,l){const{geometry:u,_indirectBuffer:h}=s;for(let d=n,m=n+i;d<m;d++)Il(u,e,t,d,o,c,l)}function EL(s,e,t,n,i,o,c){const{geometry:l,_indirectBuffer:u}=s;let h=1/0,d=null;for(let m=n,p=n+i;m<p;m++){let g;g=Il(l,e,t,m,null,o,c),g&&g.distance<h&&(d=g,h=g.distance)}return d}function TL(s,e,t,n,i,o,c){const{geometry:l}=t,{index:u}=l,h=l.attributes.position;for(let d=s,m=e+s;d<m;d++){let p;if(p=d,nn(c,p*3,u,h),c.needsUpdate=!0,n(c,p,i,o))return!0}return!1}function AL(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=s.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let o,c,l,u,h=0;const d=s._roots;for(let p=0,g=d.length;p<g;p++)o=d[p],c=new Uint32Array(o),l=new Uint16Array(o),u=new Float32Array(o),m(0,h),h+=o.byteLength;function m(p,g,y=!1){const M=p*2;if(l[M+15]===Ll){const _=c[p+6],T=l[M+14];let S=1/0,w=1/0,N=1/0,I=-1/0,L=-1/0,F=-1/0;for(let R=3*_,b=3*(_+T);R<b;R++){let O=n[R];const G=i.getX(O),W=i.getY(O),Z=i.getZ(O);G<S&&(S=G),G>I&&(I=G),W<w&&(w=W),W>L&&(L=W),Z<N&&(N=Z),Z>F&&(F=Z)}return u[p+0]!==S||u[p+1]!==w||u[p+2]!==N||u[p+3]!==I||u[p+4]!==L||u[p+5]!==F?(u[p+0]=S,u[p+1]=w,u[p+2]=N,u[p+3]=I,u[p+4]=L,u[p+5]=F,!0):!1}else{const _=p+8,T=c[p+6],S=_+g,w=T+g;let N=y,I=!1,L=!1;e?N||(I=e.has(S),L=e.has(w),N=!I&&!L):(I=!0,L=!0);const F=N||I,R=N||L;let b=!1;F&&(b=m(_,g,N));let O=!1;R&&(O=m(T,g,N));const G=b||O;if(G)for(let W=0;W<3;W++){const Z=_+W,se=T+W,J=u[Z],ue=u[Z+3],ie=u[se],ye=u[se+3];u[p+W]=J<ie?J:ie,u[p+W+3]=ue>ye?ue:ye}return G}}}function Gr(s,e,t,n,i){let o,c,l,u,h,d;const m=1/t.direction.x,p=1/t.direction.y,g=1/t.direction.z,y=t.origin.x,M=t.origin.y,x=t.origin.z;let _=e[s],T=e[s+3],S=e[s+1],w=e[s+3+1],N=e[s+2],I=e[s+3+2];return m>=0?(o=(_-y)*m,c=(T-y)*m):(o=(T-y)*m,c=(_-y)*m),p>=0?(l=(S-M)*p,u=(w-M)*p):(l=(w-M)*p,u=(S-M)*p),o>u||l>c||((l>o||isNaN(o))&&(o=l),(u<c||isNaN(c))&&(c=u),g>=0?(h=(N-x)*g,d=(I-x)*g):(h=(I-x)*g,d=(N-x)*g),o>d||h>c)?!1:((h>o||o!==o)&&(o=h),(d<c||c!==c)&&(c=d),o<=i&&c>=n)}function bL(s,e,t,n,i,o,c,l){const{geometry:u,_indirectBuffer:h}=s;for(let d=n,m=n+i;d<m;d++){let p=h?h[d]:d;Il(u,e,t,p,o,c,l)}}function wL(s,e,t,n,i,o,c){const{geometry:l,_indirectBuffer:u}=s;let h=1/0,d=null;for(let m=n,p=n+i;m<p;m++){let g;g=Il(l,e,t,u?u[m]:m,null,o,c),g&&g.distance<h&&(d=g,h=g.distance)}return d}function RL(s,e,t,n,i,o,c){const{geometry:l}=t,{index:u}=l,h=l.attributes.position;for(let d=s,m=e+s;d<m;d++){let p;if(p=t.resolveTriangleIndex(d),nn(c,p*3,u,h),c.needsUpdate=!0,n(c,p,i,o))return!0}return!1}function CL(s,e,t,n,i,o,c){Vt.setBuffer(s._roots[e]),wf(0,s,t,n,i,o,c),Vt.clearBuffer()}function wf(s,e,t,n,i,o,c){const{float32Array:l,uint16Array:u,uint32Array:h}=Vt,d=s*2;if(kn(d,u)){const p=Qn(s,h),g=pi(d,u);SL(e,t,n,p,g,i,o,c)}else{const p=mi(s);Gr(p,l,n,o,c)&&wf(p,e,t,n,i,o,c);const g=gi(s,h);Gr(g,l,n,o,c)&&wf(g,e,t,n,i,o,c)}}const PL=["x","y","z"];function LL(s,e,t,n,i,o){Vt.setBuffer(s._roots[e]);const c=Rf(0,s,t,n,i,o);return Vt.clearBuffer(),c}function Rf(s,e,t,n,i,o){const{float32Array:c,uint16Array:l,uint32Array:u}=Vt;let h=s*2;if(kn(h,l)){const m=Qn(s,u),p=pi(h,l);return EL(e,t,n,m,p,i,o)}else{const m=e0(s,u),p=PL[m],y=n.direction[p]>=0;let M,x;y?(M=mi(s),x=gi(s,u)):(M=gi(s,u),x=mi(s));const T=Gr(M,c,n,i,o)?Rf(M,e,t,n,i,o):null;if(T){const N=T.point[p];if(y?N<=c[x+m]:N>=c[x+m+3])return T}const w=Gr(x,c,n,i,o)?Rf(x,e,t,n,i,o):null;return T&&w?T.distance<=w.distance?T:w:T||w||null}}const Jc=new ln,io=new Oi,ro=new Oi,sa=new qe,r_=new Nn,Qc=new Nn;function IL(s,e,t,n){Vt.setBuffer(s._roots[e]);const i=Cf(0,s,t,n);return Vt.clearBuffer(),i}function Cf(s,e,t,n,i=null){const{float32Array:o,uint16Array:c,uint32Array:l}=Vt;let u=s*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),r_.set(t.boundingBox.min,t.boundingBox.max,n),i=r_),kn(u,c)){const d=e.geometry,m=d.index,p=d.attributes.position,g=t.index,y=t.attributes.position,M=Qn(s,l),x=pi(u,c);if(sa.copy(n).invert(),t.boundsTree)return Zt(s,o,Qc),Qc.matrix.copy(sa),Qc.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:T=>Qc.intersectsBox(T),intersectsTriangle:T=>{T.a.applyMatrix4(n),T.b.applyMatrix4(n),T.c.applyMatrix4(n),T.needsUpdate=!0;for(let S=M*3,w=(x+M)*3;S<w;S+=3)if(nn(ro,S,m,p),ro.needsUpdate=!0,T.intersectsTriangle(ro))return!0;return!1}});for(let _=M*3,T=(x+M)*3;_<T;_+=3){nn(io,_,m,p),io.a.applyMatrix4(sa),io.b.applyMatrix4(sa),io.c.applyMatrix4(sa),io.needsUpdate=!0;for(let S=0,w=g.count;S<w;S+=3)if(nn(ro,S,g,y),ro.needsUpdate=!0,io.intersectsTriangle(ro))return!0}}else{const d=s+8,m=l[s+6];return Zt(d,o,Jc),!!(i.intersectsBox(Jc)&&Cf(d,e,t,n,i)||(Zt(m,o,Jc),i.intersectsBox(Jc)&&Cf(m,e,t,n,i)))}}const el=new qe,Ph=new Nn,oa=new Nn,DL=new z,UL=new z,NL=new z,OL=new z;function FL(s,e,t,n={},i={},o=0,c=1/0){e.boundingBox||e.computeBoundingBox(),Ph.set(e.boundingBox.min,e.boundingBox.max,t),Ph.needsUpdate=!0;const l=s.geometry,u=l.attributes.position,h=l.index,d=e.attributes.position,m=e.index,p=_i.getPrimitive(),g=_i.getPrimitive();let y=DL,M=UL,x=null,_=null;i&&(x=NL,_=OL);let T=1/0,S=null,w=null;return el.copy(t).invert(),oa.matrix.copy(el),s.shapecast({boundsTraverseOrder:N=>Ph.distanceToBox(N),intersectsBounds:(N,I,L)=>L<T&&L<c?(I&&(oa.min.copy(N.min),oa.max.copy(N.max),oa.needsUpdate=!0),!0):!1,intersectsRange:(N,I)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:F=>oa.distanceToBox(F),intersectsBounds:(F,R,b)=>b<T&&b<c,intersectsRange:(F,R)=>{for(let b=F,O=F+R;b<O;b++){nn(g,3*b,m,d),g.a.applyMatrix4(t),g.b.applyMatrix4(t),g.c.applyMatrix4(t),g.needsUpdate=!0;for(let G=N,W=N+I;G<W;G++){nn(p,3*G,h,u),p.needsUpdate=!0;const Z=p.distanceToTriangle(g,y,x);if(Z<T&&(M.copy(y),_&&_.copy(x),T=Z,S=G,w=b),Z<o)return!0}}}});{const L=Po(e);for(let F=0,R=L;F<R;F++){nn(g,3*F,m,d),g.a.applyMatrix4(t),g.b.applyMatrix4(t),g.c.applyMatrix4(t),g.needsUpdate=!0;for(let b=N,O=N+I;b<O;b++){nn(p,3*b,h,u),p.needsUpdate=!0;const G=p.distanceToTriangle(g,y,x);if(G<T&&(M.copy(y),_&&_.copy(x),T=G,S=b,w=F),G<o)return!0}}}}}),_i.releasePrimitive(p),_i.releasePrimitive(g),T===1/0?null:(n.point?n.point.copy(M):n.point=M.clone(),n.distance=T,n.faceIndex=S,i&&(i.point?i.point.copy(_):i.point=_.clone(),i.point.applyMatrix4(el),M.applyMatrix4(el),i.distance=M.sub(i.point).length(),i.faceIndex=w),n)}function BL(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=s.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let o,c,l,u,h=0;const d=s._roots;for(let p=0,g=d.length;p<g;p++)o=d[p],c=new Uint32Array(o),l=new Uint16Array(o),u=new Float32Array(o),m(0,h),h+=o.byteLength;function m(p,g,y=!1){const M=p*2;if(l[M+15]===Ll){const _=c[p+6],T=l[M+14];let S=1/0,w=1/0,N=1/0,I=-1/0,L=-1/0,F=-1/0;for(let R=_,b=_+T;R<b;R++){const O=3*s.resolveTriangleIndex(R);for(let G=0;G<3;G++){let W=O+G;W=n?n[W]:W;const Z=i.getX(W),se=i.getY(W),J=i.getZ(W);Z<S&&(S=Z),Z>I&&(I=Z),se<w&&(w=se),se>L&&(L=se),J<N&&(N=J),J>F&&(F=J)}}return u[p+0]!==S||u[p+1]!==w||u[p+2]!==N||u[p+3]!==I||u[p+4]!==L||u[p+5]!==F?(u[p+0]=S,u[p+1]=w,u[p+2]=N,u[p+3]=I,u[p+4]=L,u[p+5]=F,!0):!1}else{const _=p+8,T=c[p+6],S=_+g,w=T+g;let N=y,I=!1,L=!1;e?N||(I=e.has(S),L=e.has(w),N=!I&&!L):(I=!0,L=!0);const F=N||I,R=N||L;let b=!1;F&&(b=m(_,g,N));let O=!1;R&&(O=m(T,g,N));const G=b||O;if(G)for(let W=0;W<3;W++){const Z=_+W,se=T+W,J=u[Z],ue=u[Z+3],ie=u[se],ye=u[se+3];u[p+W]=J<ie?J:ie,u[p+W+3]=ue>ye?ue:ye}return G}}}function zL(s,e,t,n,i,o,c){Vt.setBuffer(s._roots[e]),Pf(0,s,t,n,i,o,c),Vt.clearBuffer()}function Pf(s,e,t,n,i,o,c){const{float32Array:l,uint16Array:u,uint32Array:h}=Vt,d=s*2;if(kn(d,u)){const p=Qn(s,h),g=pi(d,u);bL(e,t,n,p,g,i,o,c)}else{const p=mi(s);Gr(p,l,n,o,c)&&Pf(p,e,t,n,i,o,c);const g=gi(s,h);Gr(g,l,n,o,c)&&Pf(g,e,t,n,i,o,c)}}const HL=["x","y","z"];function VL(s,e,t,n,i,o){Vt.setBuffer(s._roots[e]);const c=Lf(0,s,t,n,i,o);return Vt.clearBuffer(),c}function Lf(s,e,t,n,i,o){const{float32Array:c,uint16Array:l,uint32Array:u}=Vt;let h=s*2;if(kn(h,l)){const m=Qn(s,u),p=pi(h,l);return wL(e,t,n,m,p,i,o)}else{const m=e0(s,u),p=HL[m],y=n.direction[p]>=0;let M,x;y?(M=mi(s),x=gi(s,u)):(M=gi(s,u),x=mi(s));const T=Gr(M,c,n,i,o)?Lf(M,e,t,n,i,o):null;if(T){const N=T.point[p];if(y?N<=c[x+m]:N>=c[x+m+3])return T}const w=Gr(x,c,n,i,o)?Lf(x,e,t,n,i,o):null;return T&&w?T.distance<=w.distance?T:w:T||w||null}}const tl=new ln,so=new Oi,oo=new Oi,aa=new qe,s_=new Nn,nl=new Nn;function kL(s,e,t,n){Vt.setBuffer(s._roots[e]);const i=If(0,s,t,n);return Vt.clearBuffer(),i}function If(s,e,t,n,i=null){const{float32Array:o,uint16Array:c,uint32Array:l}=Vt;let u=s*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),s_.set(t.boundingBox.min,t.boundingBox.max,n),i=s_),kn(u,c)){const d=e.geometry,m=d.index,p=d.attributes.position,g=t.index,y=t.attributes.position,M=Qn(s,l),x=pi(u,c);if(aa.copy(n).invert(),t.boundsTree)return Zt(s,o,nl),nl.matrix.copy(aa),nl.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:T=>nl.intersectsBox(T),intersectsTriangle:T=>{T.a.applyMatrix4(n),T.b.applyMatrix4(n),T.c.applyMatrix4(n),T.needsUpdate=!0;for(let S=M,w=x+M;S<w;S++)if(nn(oo,3*e.resolveTriangleIndex(S),m,p),oo.needsUpdate=!0,T.intersectsTriangle(oo))return!0;return!1}});for(let _=M,T=x+M;_<T;_++){const S=e.resolveTriangleIndex(_);nn(so,3*S,m,p),so.a.applyMatrix4(aa),so.b.applyMatrix4(aa),so.c.applyMatrix4(aa),so.needsUpdate=!0;for(let w=0,N=g.count;w<N;w+=3)if(nn(oo,w,g,y),oo.needsUpdate=!0,so.intersectsTriangle(oo))return!0}}else{const d=s+8,m=l[s+6];return Zt(d,o,tl),!!(i.intersectsBox(tl)&&If(d,e,t,n,i)||(Zt(m,o,tl),i.intersectsBox(tl)&&If(m,e,t,n,i)))}}const il=new qe,Lh=new Nn,ca=new Nn,GL=new z,WL=new z,XL=new z,qL=new z;function YL(s,e,t,n={},i={},o=0,c=1/0){e.boundingBox||e.computeBoundingBox(),Lh.set(e.boundingBox.min,e.boundingBox.max,t),Lh.needsUpdate=!0;const l=s.geometry,u=l.attributes.position,h=l.index,d=e.attributes.position,m=e.index,p=_i.getPrimitive(),g=_i.getPrimitive();let y=GL,M=WL,x=null,_=null;i&&(x=XL,_=qL);let T=1/0,S=null,w=null;return il.copy(t).invert(),ca.matrix.copy(il),s.shapecast({boundsTraverseOrder:N=>Lh.distanceToBox(N),intersectsBounds:(N,I,L)=>L<T&&L<c?(I&&(ca.min.copy(N.min),ca.max.copy(N.max),ca.needsUpdate=!0),!0):!1,intersectsRange:(N,I)=>{if(e.boundsTree){const L=e.boundsTree;return L.shapecast({boundsTraverseOrder:F=>ca.distanceToBox(F),intersectsBounds:(F,R,b)=>b<T&&b<c,intersectsRange:(F,R)=>{for(let b=F,O=F+R;b<O;b++){const G=L.resolveTriangleIndex(b);nn(g,3*G,m,d),g.a.applyMatrix4(t),g.b.applyMatrix4(t),g.c.applyMatrix4(t),g.needsUpdate=!0;for(let W=N,Z=N+I;W<Z;W++){const se=s.resolveTriangleIndex(W);nn(p,3*se,h,u),p.needsUpdate=!0;const J=p.distanceToTriangle(g,y,x);if(J<T&&(M.copy(y),_&&_.copy(x),T=J,S=W,w=b),J<o)return!0}}}})}else{const L=Po(e);for(let F=0,R=L;F<R;F++){nn(g,3*F,m,d),g.a.applyMatrix4(t),g.b.applyMatrix4(t),g.c.applyMatrix4(t),g.needsUpdate=!0;for(let b=N,O=N+I;b<O;b++){const G=s.resolveTriangleIndex(b);nn(p,3*G,h,u),p.needsUpdate=!0;const W=p.distanceToTriangle(g,y,x);if(W<T&&(M.copy(y),_&&_.copy(x),T=W,S=b,w=F),W<o)return!0}}}}}),_i.releasePrimitive(p),_i.releasePrimitive(g),T===1/0?null:(n.point?n.point.copy(M):n.point=M.clone(),n.distance=T,n.faceIndex=S,i&&(i.point?i.point.copy(_):i.point=_.clone(),i.point.applyMatrix4(il),M.applyMatrix4(il),i.distance=M.sub(i.point).length(),i.faceIndex=w),n)}function KL(){return typeof SharedArrayBuffer<"u"}const ga=new Vt.constructor,Al=new Vt.constructor,Nr=new id(()=>new ln),ao=new ln,co=new ln,Ih=new ln,Dh=new ln;let Uh=!1;function ZL(s,e,t,n){if(Uh)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Uh=!0;const i=s._roots,o=e._roots;let c,l=0,u=0;const h=new qe().copy(t).invert();for(let d=0,m=i.length;d<m;d++){ga.setBuffer(i[d]),u=0;const p=Nr.getPrimitive();Zt(0,ga.float32Array,p),p.applyMatrix4(h);for(let g=0,y=o.length;g<y&&(Al.setBuffer(o[d]),c=Ci(0,0,t,h,n,l,u,0,0,p),Al.clearBuffer(),u+=o[g].length,!c);g++);if(Nr.releasePrimitive(p),ga.clearBuffer(),l+=i[d].length,c)break}return Uh=!1,c}function Ci(s,e,t,n,i,o=0,c=0,l=0,u=0,h=null,d=!1){let m,p;d?(m=Al,p=ga):(m=ga,p=Al);const g=m.float32Array,y=m.uint32Array,M=m.uint16Array,x=p.float32Array,_=p.uint32Array,T=p.uint16Array,S=s*2,w=e*2,N=kn(S,M),I=kn(w,T);let L=!1;if(I&&N)d?L=i(Qn(e,_),pi(e*2,T),Qn(s,y),pi(s*2,M),u,c+e,l,o+s):L=i(Qn(s,y),pi(s*2,M),Qn(e,_),pi(e*2,T),l,o+s,u,c+e);else if(I){const F=Nr.getPrimitive();Zt(e,x,F),F.applyMatrix4(t);const R=mi(s),b=gi(s,y);Zt(R,g,ao),Zt(b,g,co);const O=F.intersectsBox(ao),G=F.intersectsBox(co);L=O&&Ci(e,R,n,t,i,c,o,u,l+1,F,!d)||G&&Ci(e,b,n,t,i,c,o,u,l+1,F,!d),Nr.releasePrimitive(F)}else{const F=mi(e),R=gi(e,_);Zt(F,x,Ih),Zt(R,x,Dh);const b=h.intersectsBox(Ih),O=h.intersectsBox(Dh);if(b&&O)L=Ci(s,F,t,n,i,o,c,l,u+1,h,d)||Ci(s,R,t,n,i,o,c,l,u+1,h,d);else if(b)if(N)L=Ci(s,F,t,n,i,o,c,l,u+1,h,d);else{const G=Nr.getPrimitive();G.copy(Ih).applyMatrix4(t);const W=mi(s),Z=gi(s,y);Zt(W,g,ao),Zt(Z,g,co);const se=G.intersectsBox(ao),J=G.intersectsBox(co);L=se&&Ci(F,W,n,t,i,c,o,u,l+1,G,!d)||J&&Ci(F,Z,n,t,i,c,o,u,l+1,G,!d),Nr.releasePrimitive(G)}else if(O)if(N)L=Ci(s,R,t,n,i,o,c,l,u+1,h,d);else{const G=Nr.getPrimitive();G.copy(Dh).applyMatrix4(t);const W=mi(s),Z=gi(s,y);Zt(W,g,ao),Zt(Z,g,co);const se=G.intersectsBox(ao),J=G.intersectsBox(co);L=se&&Ci(R,W,n,t,i,c,o,u,l+1,G,!d)||J&&Ci(R,Z,n,t,i,c,o,u,l+1,G,!d),Nr.releasePrimitive(G)}}return L}const rl=new Nn,o_=new ln,jL={strategy:$_,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0};class rd{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,i=e._roots,o=e._indirectBuffer,c=n.getIndex();let l;return t.cloneBuffers?l={roots:i.map(u=>u.slice()),index:c?c.array.slice():null,indirectBuffer:o?o.slice():null}:l={roots:i,index:c?c.array:null,indirectBuffer:o},l}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};const{index:i,roots:o,indirectBuffer:c}=e,l=new rd(t,{...n,[Ah]:!0});if(l._roots=o,l._indirectBuffer=c||null,n.setIndex){const u=t.getIndex();if(u===null){const h=new mn(e.index,1,!1);t.setIndex(h)}else u.array!==i&&(u.array.set(i),u.needsUpdate=!0)}return l}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...jL,[Ah]:!1},t),t.useSharedArrayBuffer&&!KL())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[Ah]||(fL(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new ln))),this.resolveTriangleIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n}refit(e=null){return(this.indirect?BL:AL)(this,e)}traverse(e,t=0){const n=this._roots[t],i=new Uint32Array(n),o=new Uint16Array(n);c(0);function c(l,u=0){const h=l*2,d=o[h+15]===Ll;if(d){const m=i[l+6],p=o[h+14];e(u,d,new Float32Array(n,l*4,6),m,p)}else{const m=l+ma/4,p=i[l+6],g=i[l+7];e(u,d,new Float32Array(n,l*4,6),g)||(c(m,u+1),c(p,u+1))}}}raycast(e,t=Ui,n=0,i=1/0){const o=this._roots,c=this.geometry,l=[],u=t.isMaterial,h=Array.isArray(t),d=c.groups,m=u?t.side:t,p=this.indirect?zL:CL;for(let g=0,y=o.length;g<y;g++){const M=h?t[d[g].materialIndex].side:m,x=l.length;if(p(this,g,M,e,l,n,i),h){const _=d[g].materialIndex;for(let T=x,S=l.length;T<S;T++)l[T].face.materialIndex=_}}return l}raycastFirst(e,t=Ui,n=0,i=1/0){const o=this._roots,c=this.geometry,l=t.isMaterial,u=Array.isArray(t);let h=null;const d=c.groups,m=l?t.side:t,p=this.indirect?VL:LL;for(let g=0,y=o.length;g<y;g++){const M=u?t[d[g].materialIndex].side:m,x=p(this,g,M,e,n,i);x!=null&&(h==null||x.distance<h.distance)&&(h=x,u&&(x.face.materialIndex=d[g].materialIndex))}return h}intersectsGeometry(e,t){let n=!1;const i=this._roots,o=this.indirect?kL:IL;for(let c=0,l=i.length;c<l&&(n=o(this,c,e,t),!n);c++);return n}shapecast(e){const t=_i.getPrimitive(),n=this.indirect?RL:TL;let{boundsTraverseOrder:i,intersectsBounds:o,intersectsRange:c,intersectsTriangle:l}=e;if(c&&l){const m=c;c=(p,g,y,M,x)=>m(p,g,y,M,x)?!0:n(p,g,this,l,y,M,t)}else c||(l?c=(m,p,g,y)=>n(m,p,this,l,g,y,t):c=(m,p,g)=>g);let u=!1,h=0;const d=this._roots;for(let m=0,p=d.length;m<p;m++){const g=d[m];if(u=xL(this,m,o,c,i,h),u)break;h+=g.byteLength}return _i.releasePrimitive(t),u}bvhcast(e,t,n){let{intersectsRanges:i,intersectsTriangles:o}=n;const c=_i.getPrimitive(),l=this.geometry.index,u=this.geometry.attributes.position,h=this.indirect?y=>{const M=this.resolveTriangleIndex(y);nn(c,M*3,l,u)}:y=>{nn(c,y*3,l,u)},d=_i.getPrimitive(),m=e.geometry.index,p=e.geometry.attributes.position,g=e.indirect?y=>{const M=e.resolveTriangleIndex(y);nn(d,M*3,m,p)}:y=>{nn(d,y*3,m,p)};if(o){const y=(M,x,_,T,S,w,N,I)=>{for(let L=_,F=_+T;L<F;L++){g(L),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let R=M,b=M+x;R<b;R++)if(h(R),c.needsUpdate=!0,o(c,d,R,L,S,w,N,I))return!0}return!1};if(i){const M=i;i=function(x,_,T,S,w,N,I,L){return M(x,_,T,S,w,N,I,L)?!0:y(x,_,T,S,w,N,I,L)}}else i=y}return ZL(this,e,t,i)}intersectsBox(e,t){return rl.set(e.min,e.max,t),rl.needsUpdate=!0,this.shapecast({intersectsBounds:n=>rl.intersectsBox(n),intersectsTriangle:n=>rl.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},i={},o=0,c=1/0){return(this.indirect?YL:FL)(this,e,t,n,i,o,c)}closestPointToPoint(e,t={},n=0,i=1/0){return vL(this,e,t,n,i)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{Zt(0,new Float32Array(n),o_),e.union(o_)}),e}}function a_(s,e,t){return s===null?null:(s.point.applyMatrix4(e.matrixWorld),s.distance=s.point.distanceTo(t.ray.origin),s.object=e,s)}const sl=new ms,c_=new z,l_=new qe,$L=dn.prototype.raycast,u_=new z;function JL(s,e){if(this.geometry.boundsTree){if(this.material===void 0)return;l_.copy(this.matrixWorld).invert(),sl.copy(s.ray).applyMatrix4(l_),tI(this.matrixWorld,u_),c_.copy(sl.direction).multiply(u_);const t=c_.length(),n=s.near/t,i=s.far/t,o=this.geometry.boundsTree;if(s.firstHitOnly===!0){const c=a_(o.raycastFirst(sl,this.material,n,i),this,s);c&&e.push(c)}else{const c=o.raycast(sl,this.material,n,i);for(let l=0,u=c.length;l<u;l++){const h=a_(c[l],this,s);h&&e.push(h)}}}else $L.call(this,s,e)}function QL(s){return this.boundsTree=new rd(this,s),this.boundsTree}function eI(){this.boundsTree=null}function tI(s,e){const t=s.elements,n=e.set(t[0],t[1],t[2]).length(),i=e.set(t[4],t[5],t[6]).length(),o=e.set(t[8],t[9],t[10]).length();return e.set(n,i,o)}ei.prototype.computeBoundsTree=QL;ei.prototype.disposeBoundsTree=eI;dn.prototype.raycast=JL;const ui=Object.freeze({ORBIT:0,PAN:1,PAINT:2,ERASE:3,ORB_PLACE:4}),nI=new DC({color:16777215,flatShading:!0,vertexColors:!0,shininess:20,side:fi}),iI=new Ea({color:15483002,roughness:.75,metalness:0,transparent:!0,opacity:.5,premultipliedAlpha:!0,emissive:15483002,emissiveIntensity:.5}),rI=new Ea({color:15301142,roughness:.75,metalness:0,transparent:!0,opacity:.5,premultipliedAlpha:!0,emissive:15301142,emissiveIntensity:.5});class Nh{constructor(e){this.controlState=e,this.mesh=null,this.colorState=null}updateColorStateFromMesh(e){const t=e.geometry.attributes.color;this.mesh=e,this.colorState=t.clone()}}class sI{constructor(e){this.queueLength=e,this.queuePosition=1,this.queue=[]}push(e){this.queue.splice(this.queuePosition),this.queue.push(e),this.queuePosition=this.queue.length,this.queue.length>this.queueLength&&(this.queue=this.queue.slice(1,this.queue.length),this.queuePosition=this.queue.length)}previous(){return this.queue.length>0&&this.queuePosition-1>0&&this.queue[this.queuePosition-1]?(this.queuePosition-=1,this.queue[this.queuePosition-1]):null}next(){return this.queue.length>0&&this.queuePosition+1<=this.queueLength&&this.queue[this.queuePosition]?(this.queuePosition+=1,this.queue[this.queuePosition-1]):null}reset(){this.queuePosition=1,this.queue=[]}}class oI{constructor(e,t,n,i){this.controls=e,this.camera=e.object,this.rendererElement=t,this.minZoom=n,this.maxZoom=i,this.sliderElement=null,this.cameraResetElement=null;const o=this;this.rendererElement.onwheel=(function(c){c.deltaY>0?this.decrementZoom():c.deltaY<0&&this.incrementZoom(),this.sliderElement&&(this.sliderElement.value=this.camera.zoom)}).bind(o),this.reset()}capZoom(){this.camera.zoom=Math.min(Math.max(parseInt(this.camera.zoom),this.minZoom),this.maxZoom)}incrementZoom(){return this.camera.zoom+=1,this.capZoom(),this.camera.updateProjectionMatrix(),this.camera.zoom}decrementZoom(){return this.camera.zoom-=1,this.capZoom(),this.camera.updateProjectionMatrix(),this.camera.zoom}setZoom(e){return this.camera.zoom=e,this.capZoom(),this.camera.updateProjectionMatrix(),this.sliderElement&&(this.sliderElement.value=this.camera.zoom),this.camera.zoom}reset(){return this.controls.reset(),this.setZoom(this.minZoom),this.camera.zoom}createZoomSlider(e){const t=document.createElement("button");t.id="zoomOut",t.innerHTML="-",t.onpointerup=(function(){var o=this.decrementZoom();document.getElementById("zoomSlider").value=o}).bind(this);const n=document.createElement("button");n.id="zoomIn",n.innerHTML="+",n.onpointerup=(function(){var o=this.incrementZoom();document.getElementById("zoomSlider").value=o}).bind(this);const i=document.createElement("input");i.type="range",i.value=this.camera.zoom,i.min=this.minZoom.toString(),i.max=this.maxZoom.toString(),i.step="1",i.id="zoomSlider",i.style.width="192px",i.oninput=(function(){var o=document.getElementById("zoomSlider").value;this.setZoom(o)}).bind(this),e.appendChild(t),e.appendChild(i),e.appendChild(n),this.sliderElement=i}createCameraReset(e){const t=document.createElement("button");t.id="cameraResetButton",t.innerHTML="Reset Camera",t.onpointerup=(function(){this.reset()}).bind(this),e.appendChild(t),this.cameraResetElement=t}}class aI{constructor(e,t,n,i){this.scene=new EC,this.scene.background=t;var o=window.getComputedStyle(e,null),c=parseInt(o.getPropertyValue("width")),l=parseInt(o.getPropertyValue("height"));this.camera=new Ln(75,c/l,.1,1e3),this.renderer=new SC({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(c,l),this.parentElement=e,this.parentElement.appendChild(this.renderer.domElement),this.controls=new fP(this.camera,this.renderer.domElement),this.controls.enableZoom=!1,this.controlState=ui.ORBIT,this.toOrbit(),this.pointer=new Be,this.raycaster=new uP,this.raycaster.firstHitOnly=!0,this.ambientLight=new QC(4210752,15),this.scene.add(this.ambientLight),this.light1=new vf(16777215,4),this.light1.position.set(2.75,2,2.5).normalize(),this.scene.add(this.light1),this.light2=new vf(16777215,3),this.light2.position.set(-2.75,-2,-2.5).normalize(),this.scene.add(this.light2),this.camera.position.set(0,.75,.75),this.controls.update(),this.controls.saveState(),this.currentMesh=null,this.currentModelFile=null,this.defaultColor=n,this.currentEvent=null,this.brushSize=0,this.brushActive=!1,this.brushMesh=new dn(new El(1,40,40),iI),this.scene.add(this.brushMesh),this.orbMesh=new dn(new El(1,40,40),rI),this.orbMesh.scale.setScalar(.003),this.orbMesh.visible=!1,this.scene.add(this.orbMesh),this.eventQueue=new sI(i),this.meshStorage={},this.pointerDownViewport=!0,window.onresize=this.onWindowResize.bind(this),document.onpointermove=this.onPointerMove.bind(this),document.onpointerup=this.onPointerUp.bind(this),this.renderer.domElement.onpointerdown=this.onPointerDownViewport.bind(this)}clearMeshStorage(){this.meshStorage={}}animate(){if(requestAnimationFrame(this.animate.bind(this)),this.controls.update(),this.currentMesh){const t=this.currentMesh.geometry.index;switch(this.controlState){case ui.ORBIT:this.brushMesh.visible=!1;break;case ui.PAN:this.brushMesh.visible=!1;break;case ui.PAINT:if(this.brushActive){this.brushMesh.scale.setScalar(this.brushSize),this.raycaster.setFromCamera(this.pointer,this.camera);const n=this.raycaster.intersectObject(this.currentMesh,!0);if(n.length){this.brushMesh.position.copy(n[0].point),this.brushMesh.visible=!0;const i=this.getMeshIndicesFromSphere(this.brushMesh.position,this.brushSize,this.currentMesh);if(this.pointerDownViewport){for(let o=0;o<i.length;o++){const c=t.getX(i[o]);this.populateColorOnVertex(new Qe("#abcabc"),this.currentMesh,c)}this.currentEvent||(this.currentEvent=new Nh(this.controlState))}}else this.brushMesh.visible=!1}else this.brushMesh.visible=!1;break;case ui.ERASE:if(this.brushActive){this.brushMesh.scale.setScalar(this.brushSize),this.raycaster.setFromCamera(this.pointer,this.camera);const n=this.raycaster.intersectObject(this.currentMesh,!0);if(n.length){this.brushMesh.position.copy(n[0].point),this.brushMesh.visible=!0;const i=this.getMeshIndicesFromSphere(this.brushMesh.position,this.brushSize,this.currentMesh);if(this.pointerDownViewport){for(let o=0;o<i.length;o++){const c=t.getX(i[o]);this.populateColorOnVertex(this.defaultColor,this.currentMesh,c)}this.currentEvent||(this.currentEvent=new Nh(this.controlState))}}else this.brushMesh.visible=!1}else this.brushMesh.visible=!1;break;case ui.ORB_PLACE:if(this.pointerDownViewport){this.raycaster.setFromCamera(this.pointer,this.camera);const n=this.raycaster.intersectObject(this.currentMesh,!0);n.length?(this.orbMesh.position.copy(n[0].point),this.orbMesh.visible=!0):this.orbMesh.visible=!1}break}}this.renderer.render(this.scene,this.camera)}toOrbit(){this.controlState=ui.ORBIT,this.controls.enabled=!0,this.controls.enablePan=!1,this.controls.enableRotate=!0,this.controls.mouseButtons={LEFT:Dr.ROTATE},this.controls.touches={ONE:Ur.PAN}}toPan(){this.controlState=ui.PAN,this.controls.enabled=!0,this.controls.enablePan=!0,this.controls.enableRotate=!1,this.controls.mouseButtons={LEFT:Dr.PAN},this.controls.touches={ONE:Ur.PAN}}toPaint(){this.controlState=ui.PAINT,this.controls.enabled=!1}toErase(){this.controlState=ui.ERASE,this.controls.enabled=!1}toOrbPlace(){this.controlState=ui.ORB_PLACE,this.controls.enabled=!1}onPointerMove(e){var t=window.getComputedStyle(this.parentElement,null),n=this.parentElement.getBoundingClientRect(),i=parseInt(t.getPropertyValue("width")),o=parseInt(t.getPropertyValue("height"));this.pointer.x=(e.clientX-n.left)/i*2-1,this.pointer.y=-((e.clientY-n.top)/o)*2+1,this.brushActive=!0}onPointerDownViewport(){this.pointerDownViewport=!0,this.brushActive=!0}onPointerUp(e){this.pointerDownViewport=!1,(e.pointerType==="touch"||e.pointerType==="pen")&&(this.brushActive=!1),this.currentEvent&&(this.currentEvent.updateColorStateFromMesh(this.currentMesh),this.eventQueue.push(this.currentEvent),this.currentEvent=null)}onWindowResize(){var e=window.getComputedStyle(this.parentElement,null),t=parseInt(e.getPropertyValue("width")),n=parseInt(e.getPropertyValue("height"));this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n)}unloadModels(){var e=this.scene.getObjectsByProperty("isMesh",!0);for(let t=0;t<e.length;t++)this.scene.remove(e[t]);this.currentModelFile=null}unloadCurrentMesh(){this.scene.remove(this.currentMesh),this.currentModelFile=null}loadModel(e){return new Promise(function(t,n){var i="/3dmodels/"+e,o=new dP;o.load(i,function(c){var l=c.scene.children[0].geometry.toNonIndexed();const u=l.attributes.position.count;l.setAttribute("color",new mn(new Float32Array(u*3),3));var h=new dn(l,nI);h.geometry.computeBoundsTree(),t(h)},void 0,function(){alert("Could not load model "+e+", please notify experiment team."),n(null)})})}loadMeshIntoStorage(e){return new Promise((function(t,n){this.loadModel(e).then((function(i){this.meshStorage[e]=i,t(!0)}).bind(this))}).bind(this))}replaceCurrentMesh(e,t=null,n=null){function i(o,c){c&&(o.currentMesh=c,o.currentModelFile=e,o.scene.add(o.currentMesh),o.populateColor(o.defaultColor,o.currentMesh),t&&n&&o.populateColorOnVertices(n,o.currentMesh,t))}return new Promise((function(o,c){if(e!=this.currentModelFile)if(this.currentMesh&&this.unloadCurrentMesh(),Object.prototype.hasOwnProperty.call(this.meshStorage,e)){var l=this.meshStorage[e];i(this,l),this.resetEventQueue(),o(!0)}else this.loadModel(e).then((function(u){i(this,u),this.meshStorage[e]=u,this.resetEventQueue(),o(!0)}).bind(this));else this.populateColor(this.defaultColor,this.currentMesh),t&&n&&this.populateColorOnVertices(n,this.currentMesh,t),this.resetEventQueue(),o(!1)}).bind(this))}getMeshParameters(e,t=""){const n=e.geometry;var i=[];const o=n.getAttribute("position").array;for(let u=0;u<o.length/3;u++)i.push([o[u*3],o[u*3+1],o[u*3+2]]);var c=[];const l=n.index.array;for(let u=0;u<l.length/3;u++)c.push([l[u*3],l[u*3+1],l[u*3+2]]);return{filename:t,vertices:i,faces:c}}getStoredMeshParameters(e=null){var t={};for(let n in this.meshStorage)Object.prototype.hasOwnProperty.call(this.meshStorage,n)&&(!e||e&&e.has(n))&&(t[n]=this.getMeshParameters(this.meshStorage[n],n));return t}getMeshIndicesFromSphere(e,t,n){const i=new qe;i.copy(n.matrixWorld).invert();const o=n.geometry.boundsTree,c=new vi;c.center.copy(e).applyMatrix4(i),c.radius=t;const l=[],u=new z;return o.shapecast({intersectsBounds(h){const d=c.intersectsBox(h),{min:m,max:p}=h;if(d){for(let g=0;g<=1;g++)for(let y=0;y<=1;y++)for(let M=0;M<=1;M++)if(u.set(g===0?m.x:p.x,y===0?m.y:p.y,M===0?m.z:p.z),!c.containsPoint(u))return jg;return Ef}return d?jg:jP},intersectsTriangle(h,d,m){if(m||h.intersectsSphere(c)){const p=3*d;l.push(p,p+1,p+2)}return!1}}),l}getVerticesFromFaces(e){var t=[];for(let n=0;n<e.length;n++)t.push(e[n].a,e[n].b,e[n].c);return new Set(t)}populateColorOnVertex(e,t,n){const o=t.geometry.attributes.color;o.setXYZ(n,e.r,e.g,e.b),o.needsUpdate=!0}populateColorOnVertices(e,t,n){n=Array.from(n);for(let i=0;i<n.length;i++)this.populateColorOnVertex(e,t,n[i])}populateColor(e,t){const n=t.geometry,i=n.attributes.position,o=n.attributes.color;for(let c=0;c<i.array.length;c++)o.setXYZ(c,e.r,e.g,e.b);o.needsUpdate=!0}getNonDefaultVertices(e){const t=e.geometry,n=t.index,i=t.attributes.color;var o=new Set([]);for(let c=0;c<n.array.length;c++){const l=i.getX(n.array[c]),u=i.getY(n.array[c]),h=i.getZ(n.array[c]);new Qe(l,u,h).getHex()!=this.defaultColor.getHex()&&o.add(n.array[c])}return o}undo(){const e=this.eventQueue.previous();if(e){const t=e.mesh.geometry.attributes.color;t.copy(e.colorState),t.needsUpdate=!0}}redo(){const e=this.eventQueue.next();if(e){const t=e.mesh.geometry.attributes.color;t.copy(e.colorState),t.needsUpdate=!0}}resetEventQueue(){this.eventQueue.reset();var e=new Nh(ui.PAINT);e.updateColorStateFromMesh(this.currentMesh),this.eventQueue.push(e)}get orbPosition(){return{x:this.orbMesh.position.x,y:this.orbMesh.position.y,z:this.orbMesh.position.z}}get storedMeshNames(){return new Set(Object.keys(this.meshStorage))}}class Oh{constructor(e=-1,t=[],n=null){this.intensity=e,this.depth=t,this.type=n}toJSON(){var e={intensity:this.intensity,depth:this.depth,type:this.type};return e}fromJSON(e){this.intensity=e.intensity,this.depth=e.depth,this.type=e.type}}class h_{constructor(e="",t="Unnamed",n=new Set([]),i={x:null,y:null,z:null},o=-1,c=-1,l=[]){this.model=e,this.name=t,this._vertices=new Set(n),this.hotSpot=i,this.naturalness=o,this.pain=c,this.qualities=l}addQuality(){return this.qualities.push(new Oh),this.qualities[this.qualities.length-1]}duplicateQuality(e){const t=this.qualities[e],n=new Oh(t.intensity,t.depth,t.type);return this.qualities.push(n),this.qualities[this.qualities.length-1]}deleteQuality(e){const t=this.qualities.indexOf(e);t>-1&&this.qualities.splice(t,1)}toJSON(){var e=[];for(let n=0;n<this.qualities.length;n++)e.push(this.qualities[n].toJSON());var t={model:this.model,name:this.name,vertices:Array.from(this._vertices),hotSpot:this.hotSpot,naturalness:this.naturalness,pain:this.pain,qualities:e};return t}fromJSON(e){this.model=e.model,this.name=e.name,this._vertices=new Set(e.vertices),this.hotSpot=e.hotSpot,this.naturalness=e.naturalness,this.pain=e.pain,this.qualities=[];for(let n=0;n<e.qualities.length;n++){var t=new Oh;t.fromJSON(e.qualities[n]),this.qualities.push(t)}}set vertices(e){this._vertices=new Set(e)}get vertices(){return this._vertices}}class cI{constructor(e=null,t=null,n=null,i=null,o=null,c=null){this.participant=e,this.config=t,this.date=n,this.startTime=i,this.endTime=o,c?this.projectedFields=c:this.projectedFields=[]}addField(){this.projectedFields.push(new h_)}deleteField(e){const t=this.projectedFields.indexOf(e);t>-1&&this.projectedFields.splice(t,1),this.renameFields()}renameFields(){if(this.projectedFields.length)for(let i=0;i<this.projectedFields.length;i++){var e=this.projectedFields[i],t=e.model,n=0;for(let o=0;this.projectedFields[o]!==e;o++)this.projectedFields[o].model==t&&n++;e.name=t.charAt(0).toUpperCase()+t.slice(1)+" "+(n+1).toString()}}toJSON(){var e=[];for(let n=0;n<this.projectedFields.length;n++)e.push(this.projectedFields[n].toJSON());var t={participant:this.participant,config:this.config,date:this.date,startTime:this.startTime,endTime:this.endTime,projectedFields:e};return t}fromJSON(e){this.participant=e.participant,this.config=e.config,this.date=e.date,this.startTime=e.startTime,this.endTime=e.endTime,this.projectedFields=[];for(let n=0;n<e.projectedFields.length;n++){var t=new h_;t.fromJSON(e.projectedFields[n]),this.projectedFields.push(t)}}get usedMeshFilenames(){var e=[];for(let t=0;t<this.projectedFields.length;t++)e.push(this.config.models[this.projectedFields[t].model]);return new Set(e)}}class lI{constructor(){this.survey=null,this.currentField=null,this.currentQuality=null}clearSurvey(){this.survey=null,this.currentField=null,this.currentQuality=null}validateSurvey(){if(this.survey.projectedFields.length==0)return"Survey has no projected fields.";for(let e=0;e<this.survey.projectedFields.length;e++){const t=this.survey.projectedFields[e];if(t.qualities.length<=0&&t.vertices>0)return"At least one projected field needs qualities."}return""}submitSurveyToServer(e,t){var n={type:"submit",survey:this.survey.toJSON()};if(t)for(let i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return e.readyState==WebSocket.OPEN?(e.send(JSON.stringify(n)),this.currentField=null,this.currentQuality=null,!0):(console.error("Socket is not OPEN, cannot submit survey."),!1)}updateSurveyOnServer(e){if(this.survey){var t={type:"update",survey:this.survey.toJSON()};return e.readyState==WebSocket.OPEN?(e.send(JSON.stringify(t)),!0):(console.error("Socket is not OPEN, cannot submit survey."),!1)}}}class uI{constructor(e,t,n,i,o,c){this._isParticipant=t,this._viewCallbackExternal=n,this._editFieldCallbackExternal=i,this._editQualityCallbackExternal=o,this._addQualityCallbackExternal=c,this.parentElement=e}viewCallback(e,t){this._viewCallbackExternal(e);var n=document.getElementsByClassName("eyeButton");for(let i=0;i<n.length;i++)n[i].getElementsByTagName("img")[0].src="/images/close-eye.png";t.getElementsByTagName("img")[0].src="/images/eye.png"}createQualitiesListChunk(e,t=null,n="",i=!0){const o=this;var c=document.createElement("div");for(let d=0;d<e.qualities.length;d++){const m=e.qualities[d];var l=document.createElement("div");l.classList.add("surveyTableRow");var u=document.createElement("div");if(u.innerHTML=n+m.type.charAt(0).toUpperCase()+m.type.slice(1),i&&u.classList.add("smallText"),u.style.flex="1 1 auto",l.appendChild(u),this._isParticipant){var h=document.createElement("button");h.innerHTML="Edit",i&&h.classList.add("smallButton"),h.addEventListener("pointerup",function(){o._editQualityCallbackExternal(e,m)}),t===d&&(h.disabled=!0,u.classList.add("selectedQuality")),l.appendChild(h)}c.appendChild(l)}return c}createListChunk(e){var t=document.createElement("div");t.id=e.name;const n=this;var i=document.createElement("div");i.classList.add("surveyTableRow");var o=document.createElement("div");o.innerHTML=e.name,o.style.flex="1 1 auto",i.appendChild(o);var c=document.createElement("div"),l=document.createElement("button");l.classList.add("eyeButton"),l.addEventListener("pointerup",function(y){n.viewCallback(e,y.currentTarget)});var u=document.createElement("img");if(u.src="/images/close-eye.png",u.style.width="32px",l.appendChild(u),c.appendChild(l),i.appendChild(c),this._isParticipant){var h=document.createElement("div"),d=document.createElement("button");d.innerHTML="Edit",d.addEventListener("pointerup",function(){n._editFieldCallbackExternal(e)}),h.appendChild(d),i.appendChild(h)}t.appendChild(i);var m=this.createQualitiesListChunk(e);if(t.appendChild(m),this._isParticipant){var p=document.createElement("div");p.classList.add("surveyTableRow");var g=document.createElement("button");g.innerHTML="Add Quality",g.classList.add("smallButton"),g.addEventListener("pointerup",function(){n._addQualityCallbackExternal(e)}),p.appendChild(g),t.appendChild(p)}return t}clear(){this.parentElement.innerHTML=""}update(e,t=null){var n=document.createElement("tbody");for(let o=0;o<e.projectedFields.length;o++){var i=this.createListChunk(e.projectedFields[o]);if(n.appendChild(i),t!==null&&o==t){let c=i.getElementsByClassName("eyeButton")[0];c.getElementsByTagName("img")[0].src="/images/eye.png"}o!=e.projectedFields.length&&n.appendChild(document.createElement("hr"))}this.parentElement.replaceChildren(...n.children)}}const ol=Object.freeze({TOP:0,BOTTOM:1,LEFT:2,RIGHT:3});function hI(s,e){const t=document.getElementsByClassName("sidebar"),n=document.getElementsByClassName("widthbar"),i=document.getElementById("3dContainer"),o=getComputedStyle(document.body).getPropertyValue("--sideWidth");switch(t[0].style.top="0px",s){case ol.RIGHT:t[0].style.right="0px",n[0].style.right=o;break;case ol.LEFT:t[0].style.left="0px",n[0].style.left=o;break;default:return console.error("Receieved an invalid position for sidebar"),!1}switch(e){case ol.TOP:n[0].style.top="0px",i.style.top=getComputedStyle(document.body).getPropertyValue("--widthbarHeight");break;case ol.BOTTOM:n[0].style.bottom="0px",i.style.bottom=getComputedStyle(document.body).getPropertyValue("--widthbarHeight");break;default:return console.error("Receieved an invalid position for widthbar"),!1}return!0}function fI(s){var e=document.getElementById(s),t=document.getElementsByClassName("sidebarTab");for(let n=0;n<t.length;n++)t[n].style.display="none";e.style.display="flex"}function dI(s){var e=document.getElementsByClassName("paletteButton");for(let t=0;t<e.length;t++)e[t].classList.remove("active");document.getElementById(s).classList.add("active")}export{Qe as C,aI as S,z as V,oI as a,uI as b,dI as c,cI as d,lI as e,fI as o,hI as p,ol as u};

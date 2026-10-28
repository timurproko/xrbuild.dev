(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _a="170",Fh=0,sc=1,Oh=2,Ll=1,Bh=2,gn=3,on=0,Ie=1,_n=2,Un=0,Di=1,_r=2,rc=3,oc=4,zh=5,Kn=100,kh=101,Hh=102,Vh=103,Gh=104,Wh=200,Xh=201,qh=202,Yh=203,bo=204,wo=205,Zh=206,$h=207,Kh=208,jh=209,Jh=210,Qh=211,tu=212,eu=213,nu=214,To=0,Ao=1,Ro=2,Fi=3,Co=4,Po=5,Lo=6,Do=7,Dl=0,iu=1,su=2,Nn=0,ru=1,ou=2,au=3,cu=4,lu=5,hu=6,uu=7,Il=300,Oi=301,Bi=302,Io=303,Uo=304,Er=306,No=1e3,Jn=1001,Fo=1002,Be=1003,du=1004,Ps=1005,Ke=1006,Ur=1007,Qn=1008,yn=1009,Ul=1010,Nl=1011,_s=1012,va=1013,ei=1014,rn=1015,bs=1016,xa=1017,Ma=1018,zi=1020,Fl=35902,Ol=1021,Bl=1022,je=1023,zl=1024,kl=1025,Ii=1026,ki=1027,ya=1028,Sa=1029,Hl=1030,Ea=1031,ba=1033,cr=33776,lr=33777,hr=33778,ur=33779,Oo=35840,Bo=35841,zo=35842,ko=35843,Ho=36196,Vo=37492,Go=37496,Wo=37808,Xo=37809,qo=37810,Yo=37811,Zo=37812,$o=37813,Ko=37814,jo=37815,Jo=37816,Qo=37817,ta=37818,ea=37819,na=37820,ia=37821,dr=36492,sa=36494,ra=36495,Vl=36283,oa=36284,aa=36285,ca=36286,fu=3200,pu=3201,Gl=0,mu=1,In="",Se="srgb",Xi="srgb-linear",br="linear",te="srgb",hi=7680,ac=519,gu=512,_u=513,vu=514,Wl=515,xu=516,Mu=517,yu=518,Su=519,cc=35044,lc="300 es",vn=2e3,vr=2001;class qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hc=1234567;const us=Math.PI/180,vs=180/Math.PI;function oi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Me[i&255]+Me[i>>8&255]+Me[i>>16&255]+Me[i>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]).toLowerCase()}function ge(i,t,e){return Math.max(t,Math.min(e,i))}function wa(i,t){return(i%t+t)%t}function Eu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function bu(i,t,e){return i!==t?(e-i)/(t-i):0}function ds(i,t,e){return(1-e)*i+e*t}function wu(i,t,e,n){return ds(i,t,1-Math.exp(-e*n))}function Tu(i,t=1){return t-Math.abs(wa(i,t*2)-t)}function Au(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ru(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Cu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Pu(i,t){return i+Math.random()*(t-i)}function Lu(i){return i*(.5-Math.random())}function Du(i){i!==void 0&&(hc=i);let t=hc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Iu(i){return i*us}function Uu(i){return i*vs}function Nu(i){return(i&i-1)===0&&i!==0}function Fu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ou(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bu(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ai(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Fn={DEG2RAD:us,RAD2DEG:vs,generateUUID:oi,clamp:ge,euclideanModulo:wa,mapLinear:Eu,inverseLerp:bu,lerp:ds,damp:wu,pingpong:Tu,smoothstep:Au,smootherstep:Ru,randInt:Cu,randFloat:Pu,randFloatSpread:Lu,seededRandom:Du,degToRad:Iu,radToDeg:Uu,isPowerOfTwo:Nu,ceilPowerOfTwo:Fu,floorPowerOfTwo:Ou,setQuaternionFromProperEuler:Bu,normalize:be,denormalize:Ai};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,s,r,o,a,c,l){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=s[0],m=s[3],f=s[6],b=s[1],S=s[4],_=s[7],N=s[2],C=s[5],R=s[8];return r[0]=o*x+a*b+c*N,r[3]=o*m+a*S+c*C,r[6]=o*f+a*_+c*R,r[1]=l*x+h*b+u*N,r[4]=l*m+h*S+u*C,r[7]=l*f+h*_+u*R,r[2]=d*x+p*b+g*N,r[5]=d*m+p*S+g*C,r[8]=d*f+p*_+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Nr.makeScale(t,e)),this}rotate(t){return this.premultiply(Nr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Nr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Nr=new Ht;function Xl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zu(){const i=xr("canvas");return i.style.display="block",i}const uc={};function cs(i){i in uc||(uc[i]=!0,console.warn(i))}function ku(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Hu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Vu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Zt={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(i.r=xn(i.r),i.g=xn(i.g),i.b=xn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(i.r=Ui(i.r),i.g=Ui(i.g),i.b=Ui(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===In?br:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const dc=[.64,.33,.3,.6,.15,.06],fc=[.2126,.7152,.0722],pc=[.3127,.329],mc=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gc=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[Xi]:{primaries:dc,whitePoint:pc,transfer:br,toXYZ:mc,fromXYZ:gc,luminanceCoefficients:fc,workingColorSpaceConfig:{unpackColorSpace:Se},outputColorSpaceConfig:{drawingBufferColorSpace:Se}},[Se]:{primaries:dc,whitePoint:pc,transfer:te,toXYZ:mc,fromXYZ:gc,luminanceCoefficients:fc,outputColorSpaceConfig:{drawingBufferColorSpace:Se}}});let ui;class Gu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ui===void 0&&(ui=xr("canvas")),ui.width=t.width,ui.height=t.height;const n=ui.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xn(e[n]/255)*255):e[n]=xn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wu=0;class ql{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=oi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fr(s[o].image)):r.push(Fr(s[o]))}else r=Fr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Fr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xu=0;class Ee extends qi{constructor(t=Ee.DEFAULT_IMAGE,e=Ee.DEFAULT_MAPPING,n=Jn,s=Jn,r=Ke,o=Qn,a=je,c=yn,l=Ee.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=oi(),this.name="",this.source=new ql(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Il)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case No:t.x=t.x-Math.floor(t.x);break;case Jn:t.x=t.x<0?0:1;break;case Fo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case No:t.y=t.y-Math.floor(t.y);break;case Jn:t.y=t.y<0?0:1;break;case Fo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ee.DEFAULT_IMAGE=null;Ee.DEFAULT_MAPPING=Il;Ee.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,s=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,_=(p+1)/2,N=(f+1)/2,C=(h+d)/4,R=(u+x)/4,L=(g+m)/4;return S>_&&S>N?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=C/n,r=R/n):_>N?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=C/s,r=L/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=R/r,s=L/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qu extends qi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ee(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ql(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends qu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Yl extends Ee{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yu extends Ee{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ve{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==d||l!==p||h!==g){let m=1-a;const f=c*d+l*p+h*g+u*x,b=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const N=Math.sqrt(S),C=Math.atan2(N,f*b);m=Math.sin(m*C)/N,a=Math.sin(a*C)/N}const _=a*b;if(c=c*m+d*_,l=l*m+p*_,h=h*m+g*_,u=u*m+x*_,m===1-a){const N=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=N,l*=N,h*=N,u*=N}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*p-l*d,t[e+1]=c*g+h*d+l*u-a*p,t[e+2]=l*g+h*p+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_c.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_c.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Or.copy(this).projectOnVector(t),this.sub(Or)}reflect(t){return this.sub(Or.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Or=new T,_c=new ve;class ai{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xe):Xe.fromBufferAttribute(r,o),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ls.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ls.copy(n.boundingBox)),Ls.applyMatrix4(t.matrixWorld),this.union(Ls)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ji),Ds.subVectors(this.max,ji),di.subVectors(t.a,ji),fi.subVectors(t.b,ji),pi.subVectors(t.c,ji),Tn.subVectors(fi,di),An.subVectors(pi,fi),kn.subVectors(di,pi);let e=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-kn.z,kn.y,Tn.z,0,-Tn.x,An.z,0,-An.x,kn.z,0,-kn.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-kn.y,kn.x,0];return!Br(e,di,fi,pi,Ds)||(e=[1,0,0,0,1,0,0,0,1],!Br(e,di,fi,pi,Ds))?!1:(Is.crossVectors(Tn,An),e=[Is.x,Is.y,Is.z],Br(e,di,fi,pi,Ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const un=[new T,new T,new T,new T,new T,new T,new T,new T],Xe=new T,Ls=new ai,di=new T,fi=new T,pi=new T,Tn=new T,An=new T,kn=new T,ji=new T,Ds=new T,Is=new T,Hn=new T;function Br(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Hn.fromArray(i,r);const a=s.x*Math.abs(Hn.x)+s.y*Math.abs(Hn.y)+s.z*Math.abs(Hn.z),c=t.dot(Hn),l=e.dot(Hn),h=n.dot(Hn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Zu=new ai,Ji=new T,zr=new T;class On{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ji.subVectors(t,this.center);const e=Ji.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ji,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ji.copy(t.center).add(zr)),this.expandByPoint(Ji.copy(t.center).sub(zr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new T,kr=new T,Us=new T,Rn=new T,Hr=new T,Ns=new T,Vr=new T;class Zl{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){kr.copy(t).add(e).multiplyScalar(.5),Us.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(kr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Us),a=Rn.dot(this.direction),c=-Rn.dot(Us),l=Rn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(kr).addScaledVector(Us,d),p}intersectSphere(t,e){dn.subVectors(t.center,this.origin);const n=dn.dot(this.direction),s=dn.dot(dn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,n,s,r){Hr.subVectors(e,t),Ns.subVectors(n,t),Vr.crossVectors(Hr,Ns);let o=this.direction.dot(Vr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Rn.subVectors(this.origin,t);const c=a*this.direction.dot(Ns.crossVectors(Rn,Ns));if(c<0)return null;const l=a*this.direction.dot(Hr.cross(Rn));if(l<0||c+l>o)return null;const h=-a*Rn.dot(Vr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(t,e,n,s,r,o,a,c,l,h,u,d,p,g,x,m){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,p,g,x,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,p,g,x,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/mi.setFromMatrixColumn(t,0).length(),r=1/mi.setFromMatrixColumn(t,1).length(),o=1/mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,p=c*u,g=l*h,x=l*u;e[0]=d+x*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,p=c*u,g=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){const d=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($u,t,Ku)}lookAt(t,e,n){const s=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),Cn.crossVectors(n,Ne),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),Cn.crossVectors(n,Ne)),Cn.normalize(),Fs.crossVectors(Ne,Cn),s[0]=Cn.x,s[4]=Fs.x,s[8]=Ne.x,s[1]=Cn.y,s[5]=Fs.y,s[9]=Ne.y,s[2]=Cn.z,s[6]=Fs.z,s[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],b=n[3],S=n[7],_=n[11],N=n[15],C=s[0],R=s[4],L=s[8],E=s[12],M=s[1],P=s[5],k=s[9],O=s[13],W=s[2],Z=s[6],G=s[10],j=s[14],H=s[3],at=s[7],pt=s[11],Mt=s[15];return r[0]=o*C+a*M+c*W+l*H,r[4]=o*R+a*P+c*Z+l*at,r[8]=o*L+a*k+c*G+l*pt,r[12]=o*E+a*O+c*j+l*Mt,r[1]=h*C+u*M+d*W+p*H,r[5]=h*R+u*P+d*Z+p*at,r[9]=h*L+u*k+d*G+p*pt,r[13]=h*E+u*O+d*j+p*Mt,r[2]=g*C+x*M+m*W+f*H,r[6]=g*R+x*P+m*Z+f*at,r[10]=g*L+x*k+m*G+f*pt,r[14]=g*E+x*O+m*j+f*Mt,r[3]=b*C+S*M+_*W+N*H,r[7]=b*R+S*P+_*Z+N*at,r[11]=b*L+S*k+_*G+N*pt,r[15]=b*E+S*O+_*j+N*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*p-n*c*p)+x*(+e*c*p-e*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],b=u*m*l-x*d*l+x*c*p-a*m*p-u*c*f+a*d*f,S=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,_=h*x*l-g*u*l+g*a*p-o*x*p-h*a*f+o*u*f,N=g*u*c-h*x*c-g*a*d+o*x*d+h*a*m-o*u*m,C=e*b+n*S+s*_+r*N;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return t[0]=b*R,t[1]=(x*d*r-u*m*r-x*s*p+n*m*p+u*s*f-n*d*f)*R,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*f+n*c*f)*R,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*p-n*c*p)*R,t[4]=S*R,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*R,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*f-e*c*f)*R,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*p+e*c*p)*R,t[8]=_*R,t[9]=(g*u*r-h*x*r-g*n*p+e*x*p+h*n*f-e*u*f)*R,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*f+e*a*f)*R,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*R,t[12]=N*R,t[13]=(h*x*s-g*u*s+g*n*d-e*x*d-h*n*m+e*u*m)*R,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*R,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,x=o*h,m=o*u,f=a*u,b=c*l,S=c*h,_=c*u,N=n.x,C=n.y,R=n.z;return s[0]=(1-(x+f))*N,s[1]=(p+_)*N,s[2]=(g-S)*N,s[3]=0,s[4]=(p-_)*C,s[5]=(1-(d+f))*C,s[6]=(m+b)*C,s[7]=0,s[8]=(g+S)*R,s[9]=(m-b)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=mi.set(s[0],s[1],s[2]).length();const o=mi.set(s[4],s[5],s[6]).length(),a=mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],qe.copy(this);const l=1/r,h=1/o,u=1/a;return qe.elements[0]*=l,qe.elements[1]*=l,qe.elements[2]*=l,qe.elements[4]*=h,qe.elements[5]*=h,qe.elements[6]*=h,qe.elements[8]*=u,qe.elements[9]*=u,qe.elements[10]*=u,e.setFromRotationMatrix(qe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=vn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(a===vn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===vr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=vn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,p=(n+s)*h;let g,x;if(a===vn)g=(o+r)*u,x=-2*u;else if(a===vr)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const mi=new T,qe=new Xt,$u=new T(0,0,0),Ku=new T(1,1,1),Cn=new T,Fs=new T,Ne=new T,vc=new Xt,xc=new ve;class an{constructor(t=0,e=0,n=0,s=an.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xc.setFromEuler(this),this.setFromQuaternion(xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class $l{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ju=0;const Mc=new T,gi=new ve,fn=new Xt,Os=new T,Qi=new T,Ju=new T,Qu=new ve,yc=new T(1,0,0),Sc=new T(0,1,0),Ec=new T(0,0,1),bc={type:"added"},td={type:"removed"},_i={type:"childadded",child:null},Gr={type:"childremoved",child:null};class de extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new T,e=new an,n=new ve,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xt},normalMatrix:{value:new Ht}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.multiply(gi),this}rotateOnWorldAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.premultiply(gi),this}rotateX(t){return this.rotateOnAxis(yc,t)}rotateY(t){return this.rotateOnAxis(Sc,t)}rotateZ(t){return this.rotateOnAxis(Ec,t)}translateOnAxis(t,e){return Mc.copy(t).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yc,t)}translateY(t){return this.translateOnAxis(Sc,t)}translateZ(t){return this.translateOnAxis(Ec,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Os.copy(t):Os.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Qi,Os,this.up):fn.lookAt(Os,Qi,this.up),this.quaternion.setFromRotationMatrix(fn),s&&(fn.extractRotation(s.matrixWorld),gi.setFromRotationMatrix(fn),this.quaternion.premultiply(gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bc),_i.child=t,this.dispatchEvent(_i),_i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(td),Gr.child=t,this.dispatchEvent(Gr),Gr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bc),_i.child=t,this.dispatchEvent(_i),_i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,t,Ju),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,Qu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}de.DEFAULT_UP=new T(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ye=new T,pn=new T,Wr=new T,mn=new T,vi=new T,xi=new T,wc=new T,Xr=new T,qr=new T,Yr=new T,Zr=new le,$r=new le,Kr=new le;class $e{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ye.subVectors(t,e),s.cross(Ye);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ye.subVectors(s,e),pn.subVectors(n,e),Wr.subVectors(t,e);const o=Ye.dot(Ye),a=Ye.dot(pn),c=Ye.dot(Wr),l=pn.dot(pn),h=pn.dot(Wr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,mn.x),c.addScaledVector(o,mn.y),c.addScaledVector(a,mn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Zr.setScalar(0),$r.setScalar(0),Kr.setScalar(0),Zr.fromBufferAttribute(t,e),$r.fromBufferAttribute(t,n),Kr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Zr,r.x),o.addScaledVector($r,r.y),o.addScaledVector(Kr,r.z),o}static isFrontFacing(t,e,n,s){return Ye.subVectors(n,e),pn.subVectors(t,e),Ye.cross(pn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Ye.cross(pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return $e.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;vi.subVectors(s,n),xi.subVectors(r,n),Xr.subVectors(t,n);const c=vi.dot(Xr),l=xi.dot(Xr);if(c<=0&&l<=0)return e.copy(n);qr.subVectors(t,s);const h=vi.dot(qr),u=xi.dot(qr);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(vi,o);Yr.subVectors(t,r);const p=vi.dot(Yr),g=xi.dot(Yr);if(g>=0&&p<=g)return e.copy(r);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(xi,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return wc.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(wc,a);const f=1/(m+x+d);return o=x*f,a=d*f,e.copy(n).addScaledVector(vi,o).addScaledVector(xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Kl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function jr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=wa(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=jr(o,r,t+1/3),this.g=jr(o,r,t),this.b=jr(o,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=Se){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){const n=Kl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xn(t.r),this.g=xn(t.g),this.b=xn(t.b),this}copyLinearToSRGB(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return Zt.fromWorkingColorSpace(ye.copy(this),t),Math.round(ge(ye.r*255,0,255))*65536+Math.round(ge(ye.g*255,0,255))*256+Math.round(ge(ye.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(ye.copy(this),e);const n=ye.r,s=ye.g,r=ye.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=Se){Zt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,n=ye.g,s=ye.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Pn),this.setHSL(Pn.h+t,Pn.s+e,Pn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pn),t.getHSL(Bs);const n=ds(Pn.h,Bs.h,e),s=ds(Pn.s,Bs.s,e),r=ds(Pn.l,Bs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new It;It.NAMES=Kl;let ed=0;class ws extends qi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=oi(),this.name="",this.blending=Di,this.side=on,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bo,this.blendDst=wo,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==on&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bo&&(n.blendSrc=this.blendSrc),this.blendDst!==wo&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ve extends ws{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new T,zs=new nt;class Je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cc,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zs.fromBufferAttribute(this,e),zs.applyMatrix3(t),this.setXY(e,zs.x,zs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cc&&(t.usage=this.usage),t}}class jl extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Jl extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let nd=0;const ke=new Xt,Jr=new de,Mi=new T,Fe=new ai,ts=new ai,me=new T;class Le extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xl(t)?Jl:jl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return Jr.lookAt(t),Jr.updateMatrix(),this.applyMatrix4(Jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ne(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ts.setFromBufferAttribute(a),this.morphTargetsRelative?(me.addVectors(Fe.min,ts.min),Fe.expandByPoint(me),me.addVectors(Fe.max,ts.max),Fe.expandByPoint(me)):(Fe.expandByPoint(ts.min),Fe.expandByPoint(ts.max))}Fe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(me));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)me.fromBufferAttribute(a,l),c&&(Mi.fromBufferAttribute(t,l),me.add(Mi)),s=Math.max(s,n.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new T,c[L]=new T;const l=new T,h=new T,u=new T,d=new nt,p=new nt,g=new nt,x=new T,m=new T;function f(L,E,M){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[L].add(x),a[E].add(x),a[M].add(x),c[L].add(m),c[E].add(m),c[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,E=b.length;L<E;++L){const M=b[L],P=M.start,k=M.count;for(let O=P,W=P+k;O<W;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const S=new T,_=new T,N=new T,C=new T;function R(L){N.fromBufferAttribute(s,L),C.copy(N);const E=a[L];S.copy(E),S.sub(N.multiplyScalar(N.dot(E))).normalize(),_.crossVectors(C,E);const P=_.dot(c[L])<0?-1:1;o.setXYZW(L,S.x,S.y,S.z,P)}for(let L=0,E=b.length;L<E;++L){const M=b[L],P=M.start,k=M.count;for(let O=P,W=P+k;O<W;O+=3)R(t.getX(O+0)),R(t.getX(O+1)),R(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new T,r=new T,o=new T,a=new T,c=new T,l=new T,h=new T,u=new T;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new Je(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tc=new Xt,Vn=new Zl,ks=new On,Ac=new T,Hs=new T,Vs=new T,Gs=new T,Qr=new T,Ws=new T,Rc=new T,Xs=new T;class Ot extends de{constructor(t=new Le,e=new Ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ws.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Qr.fromBufferAttribute(u,t),o?Ws.addScaledVector(Qr,h):Ws.addScaledVector(Qr.sub(e),h))}e.add(Ws)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(r),Vn.copy(t.ray).recast(t.near),!(ks.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(ks,Ac)===null||Vn.origin.distanceToSquared(Ac)>(t.far-t.near)**2))&&(Tc.copy(r).invert(),Vn.copy(t.ray).applyMatrix4(Tc),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=o[m.materialIndex],b=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=b,N=S;_<N;_+=3){const C=a.getX(_),R=a.getX(_+1),L=a.getX(_+2);s=qs(this,f,t,n,l,h,u,C,R,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const b=a.getX(m),S=a.getX(m+1),_=a.getX(m+2);s=qs(this,o,t,n,l,h,u,b,S,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=o[m.materialIndex],b=Math.max(m.start,p.start),S=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=b,N=S;_<N;_+=3){const C=_,R=_+1,L=_+2;s=qs(this,f,t,n,l,h,u,C,R,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const b=m,S=m+1,_=m+2;s=qs(this,o,t,n,l,h,u,b,S,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function id(i,t,e,n,s,r,o,a){let c;if(t.side===Ie?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===on,a),c===null)return null;Xs.copy(a),Xs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Xs);return l<e.near||l>e.far?null:{distance:l,point:Xs.clone(),object:i}}function qs(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Hs),i.getVertexPosition(c,Vs),i.getVertexPosition(l,Gs);const h=id(i,t,e,n,Hs,Vs,Gs,Rc);if(h){const u=new T;$e.getBarycoord(Rc,Hs,Vs,Gs,u),s&&(h.uv=$e.getInterpolatedAttribute(s,a,c,l,u,new nt)),r&&(h.uv1=$e.getInterpolatedAttribute(r,a,c,l,u,new nt)),o&&(h.normal=$e.getInterpolatedAttribute(o,a,c,l,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new T,materialIndex:0};$e.getNormal(Hs,Vs,Gs,d.normal),h.face=d,h.barycoord=u}return h}class Yi extends Le{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function g(x,m,f,b,S,_,N,C,R,L,E){const M=_/R,P=N/L,k=_/2,O=N/2,W=C/2,Z=R+1,G=L+1;let j=0,H=0;const at=new T;for(let pt=0;pt<G;pt++){const Mt=pt*P-O;for(let Bt=0;Bt<Z;Bt++){const Kt=Bt*M-k;at[x]=Kt*b,at[m]=Mt*S,at[f]=W,l.push(at.x,at.y,at.z),at[x]=0,at[m]=0,at[f]=C>0?1:-1,h.push(at.x,at.y,at.z),u.push(Bt/R),u.push(1-pt/L),j+=1}}for(let pt=0;pt<L;pt++)for(let Mt=0;Mt<R;Mt++){const Bt=d+Mt+Z*pt,Kt=d+Mt+Z*(pt+1),Y=d+(Mt+1)+Z*(pt+1),it=d+(Mt+1)+Z*pt;c.push(Bt,Kt,it),c.push(Kt,Y,it),H+=6}a.addGroup(p,H,E),p+=H,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function we(i){const t={};for(let e=0;e<i.length;e++){const n=Hi(i[e]);for(const s in n)t[s]=n[s]}return t}function sd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ql(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const rd={clone:Hi,merge:we};var od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends ws{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=od,this.fragmentShader=ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=sd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class th extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ln=new T,Cc=new nt,Pc=new nt;class Te extends th{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z)}getViewSize(t,e){return this.getViewBounds(t,Cc,Pc),e.subVectors(Pc,Cc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(us*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const yi=-90,Si=1;class cd extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Te(yi,Si,t,e);s.layers=this.layers,this.add(s);const r=new Te(yi,Si,t,e);r.layers=this.layers,this.add(r);const o=new Te(yi,Si,t,e);o.layers=this.layers,this.add(o);const a=new Te(yi,Si,t,e);a.layers=this.layers,this.add(a);const c=new Te(yi,Si,t,e);c.layers=this.layers,this.add(c);const l=new Te(yi,Si,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class eh extends Ee{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Oi,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ld extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new eh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yi(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:Un});r.uniforms.tEquirect.value=e;const o=new Ot(s,r),a=e.minFilter;return e.minFilter===Qn&&(e.minFilter=Ke),new cd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const to=new T,hd=new T,ud=new Ht;class Yn{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=to.subVectors(n,e).cross(hd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(to),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ud.getNormalMatrix(t),s=this.coplanarPoint(to).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new On,Ys=new T;class Ta{constructor(t=new Yn,e=new Yn,n=new Yn,s=new Yn,r=new Yn,o=new Yn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],x=s[10],m=s[11],f=s[12],b=s[13],S=s[14],_=s[15];if(n[0].setComponents(c-r,d-l,m-p,_-f).normalize(),n[1].setComponents(c+r,d+l,m+p,_+f).normalize(),n[2].setComponents(c+o,d+h,m+g,_+b).normalize(),n[3].setComponents(c-o,d-h,m-g,_-b).normalize(),n[4].setComponents(c-a,d-u,m-x,_-S).normalize(),e===vn)n[5].setComponents(c+a,d+u,m+x,_+S).normalize();else if(e===vr)n[5].setComponents(a,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(t){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ys.x=s.normal.x>0?t.max.x:t.min.x,Ys.y=s.normal.y>0?t.max.y:t.min.y,Ys.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function dd(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const x=u[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Bn extends Le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){const b=f*d-o;for(let S=0;S<l;S++){const _=S*u-r;g.push(_,-b,0),x.push(0,0,1),m.push(S/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<a;b++){const S=b+l*f,_=b+l*(f+1),N=b+1+l*(f+1),C=b+1+l*f;p.push(S,_,C),p.push(_,N,C)}this.setIndex(p),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.width,t.height,t.widthSegments,t.heightSegments)}}var fd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pd=`#ifdef USE_ALPHAHASH
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
#endif`,md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_d=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xd=`#ifdef USE_AOMAP
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
#endif`,Md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yd=`#ifdef USE_BATCHING
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
#endif`,Sd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Td=`#ifdef USE_IRIDESCENCE
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
#endif`,Ad=`#ifdef USE_BUMPMAP
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
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fd=`#define PI 3.141592653589793
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
} // validated`,Od=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bd=`vec3 transformedNormal = objectNormal;
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
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xd=`#ifdef USE_ENVMAP
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
#endif`,qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tf=`#ifdef USE_GRADIENTMAP
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
}`,ef=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rf=`uniform bool receiveShadow;
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
#endif`,of=`#ifdef USE_ENVMAP
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
#endif`,af=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uf=`PhysicalMaterial material;
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
#endif`,df=`struct PhysicalMaterial {
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
}`,ff=`
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
#endif`,pf=`#if defined( RE_IndirectDiffuse )
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
#endif`,mf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_f=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ef=`#if defined( USE_POINTS_UV )
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
#endif`,bf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Af=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cf=`#ifdef USE_MORPHTARGETS
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
#endif`,Pf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Df=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,If=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ff=`#ifdef USE_NORMALMAP
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
#endif`,Of=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Gf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$f=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jf=`float getShadowMask() {
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
}`,Qf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tp=`#ifdef USE_SKINNING
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
#endif`,ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,np=`#ifdef USE_SKINNING
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
#endif`,ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,op=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ap=`#ifdef USE_TRANSMISSION
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
#endif`,cp=`#ifdef USE_TRANSMISSION
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
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pp=`uniform sampler2D t2D;
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
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`#include <common>
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
}`,Mp=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yp=`#define DISTANCE
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
}`,Sp=`#define DISTANCE
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
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`uniform float scale;
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
}`,Tp=`uniform vec3 diffuse;
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
}`,Ap=`#include <common>
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Cp=`#define LAMBERT
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
}`,Pp=`#define LAMBERT
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
}`,Lp=`#define MATCAP
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
}`,Dp=`#define MATCAP
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
}`,Ip=`#define NORMAL
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
}`,Up=`#define NORMAL
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
}`,Np=`#define PHONG
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
}`,Fp=`#define PHONG
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
}`,Op=`#define STANDARD
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
}`,Bp=`#define STANDARD
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
}`,zp=`#define TOON
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
}`,kp=`#define TOON
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
}`,Hp=`uniform float size;
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
}`,Vp=`uniform vec3 diffuse;
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
}`,Gp=`#include <common>
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
}`,Wp=`uniform vec3 color;
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
}`,Xp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,qp=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:fd,alphahash_pars_fragment:pd,alphamap_fragment:md,alphamap_pars_fragment:gd,alphatest_fragment:_d,alphatest_pars_fragment:vd,aomap_fragment:xd,aomap_pars_fragment:Md,batching_pars_vertex:yd,batching_vertex:Sd,begin_vertex:Ed,beginnormal_vertex:bd,bsdfs:wd,iridescence_fragment:Td,bumpmap_pars_fragment:Ad,clipping_planes_fragment:Rd,clipping_planes_pars_fragment:Cd,clipping_planes_pars_vertex:Pd,clipping_planes_vertex:Ld,color_fragment:Dd,color_pars_fragment:Id,color_pars_vertex:Ud,color_vertex:Nd,common:Fd,cube_uv_reflection_fragment:Od,defaultnormal_vertex:Bd,displacementmap_pars_vertex:zd,displacementmap_vertex:kd,emissivemap_fragment:Hd,emissivemap_pars_fragment:Vd,colorspace_fragment:Gd,colorspace_pars_fragment:Wd,envmap_fragment:Xd,envmap_common_pars_fragment:qd,envmap_pars_fragment:Yd,envmap_pars_vertex:Zd,envmap_physical_pars_fragment:of,envmap_vertex:$d,fog_vertex:Kd,fog_pars_vertex:jd,fog_fragment:Jd,fog_pars_fragment:Qd,gradientmap_pars_fragment:tf,lightmap_pars_fragment:ef,lights_lambert_fragment:nf,lights_lambert_pars_fragment:sf,lights_pars_begin:rf,lights_toon_fragment:af,lights_toon_pars_fragment:cf,lights_phong_fragment:lf,lights_phong_pars_fragment:hf,lights_physical_fragment:uf,lights_physical_pars_fragment:df,lights_fragment_begin:ff,lights_fragment_maps:pf,lights_fragment_end:mf,logdepthbuf_fragment:gf,logdepthbuf_pars_fragment:_f,logdepthbuf_pars_vertex:vf,logdepthbuf_vertex:xf,map_fragment:Mf,map_pars_fragment:yf,map_particle_fragment:Sf,map_particle_pars_fragment:Ef,metalnessmap_fragment:bf,metalnessmap_pars_fragment:wf,morphinstance_vertex:Tf,morphcolor_vertex:Af,morphnormal_vertex:Rf,morphtarget_pars_vertex:Cf,morphtarget_vertex:Pf,normal_fragment_begin:Lf,normal_fragment_maps:Df,normal_pars_fragment:If,normal_pars_vertex:Uf,normal_vertex:Nf,normalmap_pars_fragment:Ff,clearcoat_normal_fragment_begin:Of,clearcoat_normal_fragment_maps:Bf,clearcoat_pars_fragment:zf,iridescence_pars_fragment:kf,opaque_fragment:Hf,packing:Vf,premultiplied_alpha_fragment:Gf,project_vertex:Wf,dithering_fragment:Xf,dithering_pars_fragment:qf,roughnessmap_fragment:Yf,roughnessmap_pars_fragment:Zf,shadowmap_pars_fragment:$f,shadowmap_pars_vertex:Kf,shadowmap_vertex:jf,shadowmask_pars_fragment:Jf,skinbase_vertex:Qf,skinning_pars_vertex:tp,skinning_vertex:ep,skinnormal_vertex:np,specularmap_fragment:ip,specularmap_pars_fragment:sp,tonemapping_fragment:rp,tonemapping_pars_fragment:op,transmission_fragment:ap,transmission_pars_fragment:cp,uv_pars_fragment:lp,uv_pars_vertex:hp,uv_vertex:up,worldpos_vertex:dp,background_vert:fp,background_frag:pp,backgroundCube_vert:mp,backgroundCube_frag:gp,cube_vert:_p,cube_frag:vp,depth_vert:xp,depth_frag:Mp,distanceRGBA_vert:yp,distanceRGBA_frag:Sp,equirect_vert:Ep,equirect_frag:bp,linedashed_vert:wp,linedashed_frag:Tp,meshbasic_vert:Ap,meshbasic_frag:Rp,meshlambert_vert:Cp,meshlambert_frag:Pp,meshmatcap_vert:Lp,meshmatcap_frag:Dp,meshnormal_vert:Ip,meshnormal_frag:Up,meshphong_vert:Np,meshphong_frag:Fp,meshphysical_vert:Op,meshphysical_frag:Bp,meshtoon_vert:zp,meshtoon_frag:kp,points_vert:Hp,points_frag:Vp,shadow_vert:Gp,shadow_frag:Wp,sprite_vert:Xp,sprite_frag:qp},ct={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},en={basic:{uniforms:we([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:we([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new It(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:we([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:we([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:we([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new It(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:we([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:we([ct.points,ct.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:we([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:we([ct.common,ct.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:we([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:we([ct.sprite,ct.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:we([ct.common,ct.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:we([ct.lights,ct.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};en.physical={uniforms:we([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Zs={r:0,b:0,g:0},Wn=new an,Yp=new Xt;function Zp(i,t,e,n,s,r,o){const a=new It(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function x(b){let S=!1;const _=g(b);_===null?f(a,c):_&&_.isColor&&(f(_,1),S=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,S){const _=g(S);_&&(_.isCubeTexture||_.mapping===Er)?(h===void 0&&(h=new Ot(new Yi(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Hi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Wn.copy(S.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Yp.makeRotationFromEuler(Wn)),h.material.toneMapped=Zt.getTransfer(_.colorSpace)!==te,(u!==_||d!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ot(new Bn(2,2),new Sn({name:"BackgroundMaterial",uniforms:Hi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(_.colorSpace)!==te,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,S){b.getRGB(Zs,Ql(i)),n.buffers.color.setClear(Zs.r,Zs.g,Zs.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),c=S,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,f(a,c)},render:x,addToRenderList:m}}function $p(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,P,k,O,W){let Z=!1;const G=u(O,k,P);r!==G&&(r=G,l(r.object)),Z=p(M,O,k,W),Z&&g(M,O,k,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,_(M,P,k,O),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,P,k){const O=k.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let Z=W[P.id];Z===void 0&&(Z={},W[P.id]=Z);let G=Z[O];return G===void 0&&(G=d(c()),Z[O]=G),G}function d(M){const P=[],k=[],O=[];for(let W=0;W<e;W++)P[W]=0,k[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:O,object:M,attributes:{},index:null}}function p(M,P,k,O){const W=r.attributes,Z=P.attributes;let G=0;const j=k.getAttributes();for(const H in j)if(j[H].location>=0){const pt=W[H];let Mt=Z[H];if(Mt===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor)),pt===void 0||pt.attribute!==Mt||Mt&&pt.data!==Mt.data)return!0;G++}return r.attributesNum!==G||r.index!==O}function g(M,P,k,O){const W={},Z=P.attributes;let G=0;const j=k.getAttributes();for(const H in j)if(j[H].location>=0){let pt=Z[H];pt===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor));const Mt={};Mt.attribute=pt,pt&&pt.data&&(Mt.data=pt.data),W[H]=Mt,G++}r.attributes=W,r.attributesNum=G,r.index=O}function x(){const M=r.newAttributes;for(let P=0,k=M.length;P<k;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){const k=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;k[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),W[M]!==P&&(i.vertexAttribDivisor(M,P),W[M]=P)}function b(){const M=r.newAttributes,P=r.enabledAttributes;for(let k=0,O=P.length;k<O;k++)P[k]!==M[k]&&(i.disableVertexAttribArray(k),P[k]=0)}function S(M,P,k,O,W,Z,G){G===!0?i.vertexAttribIPointer(M,P,k,W,Z):i.vertexAttribPointer(M,P,k,O,W,Z)}function _(M,P,k,O){x();const W=O.attributes,Z=k.getAttributes(),G=P.defaultAttributeValues;for(const j in Z){const H=Z[j];if(H.location>=0){let at=W[j];if(at===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(at=M.instanceColor)),at!==void 0){const pt=at.normalized,Mt=at.itemSize,Bt=t.get(at);if(Bt===void 0)continue;const Kt=Bt.buffer,Y=Bt.type,it=Bt.bytesPerElement,yt=Y===i.INT||Y===i.UNSIGNED_INT||at.gpuType===va;if(at.isInterleavedBufferAttribute){const rt=at.data,Rt=rt.stride,Nt=at.offset;if(rt.isInstancedInterleavedBuffer){for(let Dt=0;Dt<H.locationSize;Dt++)f(H.location+Dt,rt.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Dt=0;Dt<H.locationSize;Dt++)m(H.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let Dt=0;Dt<H.locationSize;Dt++)S(H.location+Dt,Mt/H.locationSize,Y,pt,Rt*it,(Nt+Mt/H.locationSize*Dt)*it,yt)}else{if(at.isInstancedBufferAttribute){for(let rt=0;rt<H.locationSize;rt++)f(H.location+rt,at.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let rt=0;rt<H.locationSize;rt++)m(H.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let rt=0;rt<H.locationSize;rt++)S(H.location+rt,Mt/H.locationSize,Y,pt,Mt*it,Mt/H.locationSize*rt*it,yt)}}else if(G!==void 0){const pt=G[j];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(H.location,pt);break;case 3:i.vertexAttrib3fv(H.location,pt);break;case 4:i.vertexAttrib4fv(H.location,pt);break;default:i.vertexAttrib1fv(H.location,pt)}}}}b()}function N(){L();for(const M in n){const P=n[M];for(const k in P){const O=P[k];for(const W in O)h(O[W].object),delete O[W];delete P[k]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const k in P){const O=P[k];for(const W in O)h(O[W].object),delete O[W];delete P[k]}delete n[M.id]}function R(M){for(const P in n){const k=n[P];if(k[M.id]===void 0)continue;const O=k[M.id];for(const W in O)h(O[W].object),delete O[W];delete k[M.id]}}function L(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:N,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function Kp(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function jp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==je&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===bs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==yn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==rn&&!L)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:N,maxSamples:C}}function Jp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Yn,a=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const b=r?0:n,S=b*4;let _=f.clippingState||null;c.value=_,_=h(g,d,S,p);for(let N=0;N!==S;++N)_[N]=e[N];f.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const f=p+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,_=p;S!==x;++S,_+=4)o.copy(u[S]).applyMatrix4(b,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Qp(i){let t=new WeakMap;function e(o,a){return a===Io?o.mapping=Oi:a===Uo&&(o.mapping=Bi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Io||a===Uo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ld(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ih extends th{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ci=4,Lc=[.125,.215,.35,.446,.526,.582],jn=20,eo=new ih,Dc=new It;let no=null,io=0,so=0,ro=!1;const Zn=(1+Math.sqrt(5))/2,Ei=1/Zn,Ic=[new T(-Zn,Ei,0),new T(Zn,Ei,0),new T(-Ei,0,Zn),new T(Ei,0,Zn),new T(0,Zn,-Ei),new T(0,Zn,Ei),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class Uc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){no=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),so=this._renderer.getActiveMipmapLevel(),ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(no,io,so),this._renderer.xr.enabled=ro,t.scissorTest=!1,$s(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),no=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),so=this._renderer.getActiveMipmapLevel(),ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:bs,format:je,colorSpace:Xi,depthBuffer:!1},s=Nc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tm(r)),this._blurMaterial=em(r,t,e)}return s}_compileMaterial(t){const e=new Ot(this._lodPlanes[0],t);this._renderer.compile(e,eo)}_sceneToCubeUV(t,e,n,s){const a=new Te(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Dc),h.toneMapping=Nn,h.autoClear=!1;const p=new Ve({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),g=new Ot(new Yi,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Dc),x=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):b===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const S=this._cubeSize;$s(s,b*S,f>2?S:0,S,S),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Oi||t.mapping===Bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;$s(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,eo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ic[(s-r-1)%Ic.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ot(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*jn-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):jn;m>jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jn}`);const f=[];let b=0;for(let R=0;R<jn;++R){const L=R/x,E=Math.exp(-L*L/2);f.push(E),R===0?b+=E:R<m&&(b+=2*E)}for(let R=0;R<f.length;R++)f[R]=f[R]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const _=this._sizeLods[s],N=3*_*(s>S-Ci?s-S+Ci:0),C=4*(this._cubeSize-_);$s(e,N,C,3*_,2*_),c.setRenderTarget(e),c.render(u,eo)}}function tm(i){const t=[],e=[],n=[];let s=i;const r=i-Ci+1+Lc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ci?c=Lc[o-i+Ci-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,b=new Float32Array(x*g*p),S=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let C=0;C<p;C++){const R=C%3*2/3-1,L=C>2?0:-1,E=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];b.set(E,x*g*C),S.set(d,m*g*C);const M=[C,C,C,C,C,C];_.set(M,f*g*C)}const N=new Le;N.setAttribute("position",new Je(b,x)),N.setAttribute("uv",new Je(S,m)),N.setAttribute("faceIndex",new Je(_,f)),t.push(N),s>Ci&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Nc(i,t,e){const n=new ni(i,t,e);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $s(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function em(i,t,e){const n=new Float32Array(jn),s=new T(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Fc(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Oc(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Aa(){return`

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
	`}function nm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Io||c===Uo,h=c===Oi||c===Bi;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Uc(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Uc(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function im(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&cs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function sm(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const x=p[g];for(let m=0,f=x.length;m<f;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,g=u.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let S=0,_=b.length;S<_;S+=3){const N=b[S+0],C=b[S+1],R=b[S+2];d.push(N,C,C,R,R,N)}}else if(g!==void 0){const b=g.array;x=g.version;for(let S=0,_=b.length/3-1;S<_;S+=3){const N=S+0,C=S+1,R=S+2;d.push(N,C,C,R,R,N)}}else return;const m=new(Xl(d)?Jl:jl)(d,1);m.version=x;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function rm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,g);let f=0;for(let b=0;b<g;b++)f+=p[b]*x[b];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function om(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function am(i,t,e){const n=new WeakMap,s=new le;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let N=a.attributes.position.count*_,C=1;N>t.maxTextureSize&&(C=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const R=new Float32Array(N*C*4*u),L=new Yl(R,N,C,u);L.type=rn,L.needsUpdate=!0;const E=_*4;for(let P=0;P<u;P++){const k=f[P],O=b[P],W=S[P],Z=N*C*4*P;for(let G=0;G<k.count;G++){const j=G*E;g===!0&&(s.fromBufferAttribute(k,G),R[Z+j+0]=s.x,R[Z+j+1]=s.y,R[Z+j+2]=s.z,R[Z+j+3]=0),x===!0&&(s.fromBufferAttribute(O,G),R[Z+j+4]=s.x,R[Z+j+5]=s.y,R[Z+j+6]=s.z,R[Z+j+7]=0),m===!0&&(s.fromBufferAttribute(W,G),R[Z+j+8]=s.x,R[Z+j+9]=s.y,R[Z+j+10]=s.z,R[Z+j+11]=W.itemSize===4?s.w:1)}}d={count:u,texture:L,size:new nt(N,C)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function cm(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class sh extends Ee{constructor(t,e,n,s,r,o,a,c,l,h=Ii){if(h!==Ii&&h!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ii&&(n=ei),n===void 0&&h===ki&&(n=zi),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Be,this.minFilter=c!==void 0?c:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const rh=new Ee,Bc=new sh(1,1),oh=new Yl,ah=new Yu,ch=new eh,zc=[],kc=[],Hc=new Float32Array(16),Vc=new Float32Array(9),Gc=new Float32Array(4);function Zi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=zc[s];if(r===void 0&&(r=new Float32Array(s),zc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function wr(i,t){let e=kc[t];e===void 0&&(e=new Int32Array(t),kc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function lm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2fv(this.addr,t),pe(e,t)}}function um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;i.uniform3fv(this.addr,t),pe(e,t)}}function dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4fv(this.addr,t),pe(e,t)}}function fm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Gc.set(n),i.uniformMatrix2fv(this.addr,!1,Gc),pe(e,n)}}function pm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Vc.set(n),i.uniformMatrix3fv(this.addr,!1,Vc),pe(e,n)}}function mm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Hc.set(n),i.uniformMatrix4fv(this.addr,!1,Hc),pe(e,n)}}function gm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2iv(this.addr,t),pe(e,t)}}function vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3iv(this.addr,t),pe(e,t)}}function xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4iv(this.addr,t),pe(e,t)}}function Mm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2uiv(this.addr,t),pe(e,t)}}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3uiv(this.addr,t),pe(e,t)}}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4uiv(this.addr,t),pe(e,t)}}function bm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bc.compareFunction=Wl,r=Bc):r=rh,e.setTexture2D(t||r,s)}function wm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ah,s)}function Tm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ch,s)}function Am(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||oh,s)}function Rm(i){switch(i){case 5126:return lm;case 35664:return hm;case 35665:return um;case 35666:return dm;case 35674:return fm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return gm;case 35667:case 35671:return _m;case 35668:case 35672:return vm;case 35669:case 35673:return xm;case 5125:return Mm;case 36294:return ym;case 36295:return Sm;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return wm;case 35680:case 36300:case 36308:case 36293:return Tm;case 36289:case 36303:case 36311:case 36292:return Am}}function Cm(i,t){i.uniform1fv(this.addr,t)}function Pm(i,t){const e=Zi(t,this.size,2);i.uniform2fv(this.addr,e)}function Lm(i,t){const e=Zi(t,this.size,3);i.uniform3fv(this.addr,e)}function Dm(i,t){const e=Zi(t,this.size,4);i.uniform4fv(this.addr,e)}function Im(i,t){const e=Zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Um(i,t){const e=Zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Nm(i,t){const e=Zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Fm(i,t){i.uniform1iv(this.addr,t)}function Om(i,t){i.uniform2iv(this.addr,t)}function Bm(i,t){i.uniform3iv(this.addr,t)}function zm(i,t){i.uniform4iv(this.addr,t)}function km(i,t){i.uniform1uiv(this.addr,t)}function Hm(i,t){i.uniform2uiv(this.addr,t)}function Vm(i,t){i.uniform3uiv(this.addr,t)}function Gm(i,t){i.uniform4uiv(this.addr,t)}function Wm(i,t,e){const n=this.cache,s=t.length,r=wr(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||rh,r[o])}function Xm(i,t,e){const n=this.cache,s=t.length,r=wr(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ah,r[o])}function qm(i,t,e){const n=this.cache,s=t.length,r=wr(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ch,r[o])}function Ym(i,t,e){const n=this.cache,s=t.length,r=wr(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||oh,r[o])}function Zm(i){switch(i){case 5126:return Cm;case 35664:return Pm;case 35665:return Lm;case 35666:return Dm;case 35674:return Im;case 35675:return Um;case 35676:return Nm;case 5124:case 35670:return Fm;case 35667:case 35671:return Om;case 35668:case 35672:return Bm;case 35669:case 35673:return zm;case 5125:return km;case 36294:return Hm;case 36295:return Vm;case 36296:return Gm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Ym}}class $m{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rm(e.type)}}class Km{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zm(e.type)}}class jm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const oo=/(\w+)(\])?(\[|\.)?/g;function Wc(i,t){i.seq.push(t),i.map[t.id]=t}function Jm(i,t,e){const n=i.name,s=n.length;for(oo.lastIndex=0;;){const r=oo.exec(n),o=oo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Wc(e,l===void 0?new $m(a,i,t):new Km(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new jm(a),Wc(e,u)),e=u}}}class fr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Jm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Xc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Qm=37297;let tg=0;function eg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const qc=new Ht;function ng(i){Zt._getMatrix(qc,Zt.workingColorSpace,i);const t=`mat3( ${qc.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case br:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+eg(i.getShaderSource(t),o)}else return s}function ig(i,t){const e=ng(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function sg(i,t){let e;switch(t){case ru:e="Linear";break;case ou:e="Reinhard";break;case au:e="Cineon";break;case cu:e="ACESFilmic";break;case hu:e="AgX";break;case uu:e="Neutral";break;case lu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ks=new T;function rg(){Zt.getLuminanceCoefficients(Ks);const i=Ks.x.toFixed(4),t=Ks.y.toFixed(4),e=Ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function og(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function ag(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ls(i){return i!==""}function Zc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $c(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lg=/^[ \t]*#include +<([\w\d./]+)>/gm;function la(i){return i.replace(lg,ug)}const hg=new Map;function ug(i,t){let e=Gt[t];if(e===void 0){const n=hg.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return la(e)}const dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kc(i){return i.replace(dg,fg)}function fg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ll?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gn&&(t="SHADOWMAP_TYPE_VSM"),t}function mg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Oi:case Bi:t="ENVMAP_TYPE_CUBE";break;case Er:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bi:t="ENVMAP_MODE_REFRACTION";break}return t}function _g(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dl:t="ENVMAP_BLENDING_MULTIPLY";break;case iu:t="ENVMAP_BLENDING_MIX";break;case su:t="ENVMAP_BLENDING_ADD";break}return t}function vg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function xg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=pg(e),l=mg(e),h=gg(e),u=_g(e),d=vg(e),p=og(e),g=ag(r),x=s.createProgram();let m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ls).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ls).join(`
`),f.length>0&&(f+=`
`)):(m=[jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),f=[jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Nn?sg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,ig("linearToOutputTexel",e.outputColorSpace),rg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ls).join(`
`)),o=la(o),o=Zc(o,e),o=$c(o,e),a=la(a),a=Zc(a,e),a=$c(a,e),o=Kc(o),a=Kc(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=b+m+o,_=b+f+a,N=Xc(s,s.VERTEX_SHADER,S),C=Xc(s,s.FRAGMENT_SHADER,_);s.attachShader(x,N),s.attachShader(x,C),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(P){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(x).trim(),O=s.getShaderInfoLog(N).trim(),W=s.getShaderInfoLog(C).trim();let Z=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,N,C);else{const j=Yc(s,N,"vertex"),H=Yc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+j+`
`+H)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(O===""||W==="")&&(G=!1);G&&(P.diagnostics={runnable:Z,programLog:k,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:f}})}s.deleteShader(N),s.deleteShader(C),L=new fr(s,x),E=cg(s,x)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Qm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=N,this.fragmentShader=C,this}let Mg=0;class yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Sg(t),e.set(t,n)),n}}class Sg{constructor(t){this.id=Mg++,this.code=t,this.usedTimes=0}}function Eg(i,t,e,n,s,r,o){const a=new $l,c=new yg,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,P,k,O){const W=k.fog,Z=O.geometry,G=E.isMeshStandardMaterial?k.environment:null,j=(E.isMeshStandardMaterial?e:t).get(E.envMap||G),H=j&&j.mapping===Er?j.image.height:null,at=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const pt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Mt=pt!==void 0?pt.length:0;let Bt=0;Z.morphAttributes.position!==void 0&&(Bt=1),Z.morphAttributes.normal!==void 0&&(Bt=2),Z.morphAttributes.color!==void 0&&(Bt=3);let Kt,Y,it,yt;if(at){const Qt=en[at];Kt=Qt.vertexShader,Y=Qt.fragmentShader}else Kt=E.vertexShader,Y=E.fragmentShader,c.update(E),it=c.getVertexShaderID(E),yt=c.getFragmentShaderID(E);const rt=i.getRenderTarget(),Rt=i.state.buffers.depth.getReversed(),Nt=O.isInstancedMesh===!0,Dt=O.isBatchedMesh===!0,Yt=!!E.map,K=!!E.matcap,et=!!j,A=!!E.aoMap,Tt=!!E.lightMap,Q=!!E.bumpMap,_t=!!E.normalMap,ot=!!E.displacementMap,Ct=!!E.emissiveMap,mt=!!E.metalnessMap,w=!!E.roughnessMap,v=E.anisotropy>0,F=E.clearcoat>0,X=E.dispersion>0,J=E.iridescence>0,q=E.sheen>0,St=E.transmission>0,lt=v&&!!E.anisotropyMap,gt=F&&!!E.clearcoatMap,Wt=F&&!!E.clearcoatNormalMap,tt=F&&!!E.clearcoatRoughnessMap,vt=J&&!!E.iridescenceMap,Pt=J&&!!E.iridescenceThicknessMap,Ut=q&&!!E.sheenColorMap,xt=q&&!!E.sheenRoughnessMap,qt=!!E.specularMap,Vt=!!E.specularColorMap,ie=!!E.specularIntensityMap,D=St&&!!E.transmissionMap,ht=St&&!!E.thicknessMap,V=!!E.gradientMap,$=!!E.alphaMap,ft=E.alphaTest>0,ut=!!E.alphaHash,zt=!!E.extensions;let ce=Nn;E.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ce=i.toneMapping);const xe={shaderID:at,shaderType:E.type,shaderName:E.name,vertexShader:Kt,fragmentShader:Y,defines:E.defines,customVertexShaderID:it,customFragmentShaderID:yt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Dt,batchingColor:Dt&&O._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&O.instanceColor!==null,instancingMorph:Nt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Xi,alphaToCoverage:!!E.alphaToCoverage,map:Yt,matcap:K,envMap:et,envMapMode:et&&j.mapping,envMapCubeUVHeight:H,aoMap:A,lightMap:Tt,bumpMap:Q,normalMap:_t,displacementMap:d&&ot,emissiveMap:Ct,normalMapObjectSpace:_t&&E.normalMapType===mu,normalMapTangentSpace:_t&&E.normalMapType===Gl,metalnessMap:mt,roughnessMap:w,anisotropy:v,anisotropyMap:lt,clearcoat:F,clearcoatMap:gt,clearcoatNormalMap:Wt,clearcoatRoughnessMap:tt,dispersion:X,iridescence:J,iridescenceMap:vt,iridescenceThicknessMap:Pt,sheen:q,sheenColorMap:Ut,sheenRoughnessMap:xt,specularMap:qt,specularColorMap:Vt,specularIntensityMap:ie,transmission:St,transmissionMap:D,thicknessMap:ht,gradientMap:V,opaque:E.transparent===!1&&E.blending===Di&&E.alphaToCoverage===!1,alphaMap:$,alphaTest:ft,alphaHash:ut,combine:E.combine,mapUv:Yt&&x(E.map.channel),aoMapUv:A&&x(E.aoMap.channel),lightMapUv:Tt&&x(E.lightMap.channel),bumpMapUv:Q&&x(E.bumpMap.channel),normalMapUv:_t&&x(E.normalMap.channel),displacementMapUv:ot&&x(E.displacementMap.channel),emissiveMapUv:Ct&&x(E.emissiveMap.channel),metalnessMapUv:mt&&x(E.metalnessMap.channel),roughnessMapUv:w&&x(E.roughnessMap.channel),anisotropyMapUv:lt&&x(E.anisotropyMap.channel),clearcoatMapUv:gt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:xt&&x(E.sheenRoughnessMap.channel),specularMapUv:qt&&x(E.specularMap.channel),specularColorMapUv:Vt&&x(E.specularColorMap.channel),specularIntensityMapUv:ie&&x(E.specularIntensityMap.channel),transmissionMapUv:D&&x(E.transmissionMap.channel),thicknessMapUv:ht&&x(E.thicknessMap.channel),alphaMapUv:$&&x(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(_t||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Z.attributes.uv&&(Yt||$),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Rt,skinning:O.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Bt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:Yt&&E.map.isVideoTexture===!0&&Zt.getTransfer(E.map.colorSpace)===te,decodeVideoTextureEmissive:Ct&&E.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(E.emissiveMap.colorSpace)===te,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===_n,flipSided:E.side===Ie,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:zt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&E.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return xe.vertexUv1s=l.has(1),xe.vertexUv2s=l.has(2),xe.vertexUv3s=l.has(3),l.clear(),xe}function f(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)M.push(P),M.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(b(M,E),S(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function b(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function S(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function _(E){const M=g[E.type];let P;if(M){const k=en[M];P=rd.clone(k.uniforms)}else P=E.uniforms;return P}function N(E,M){let P;for(let k=0,O=h.length;k<O;k++){const W=h[k];if(W.cacheKey===M){P=W,++P.usedTimes;break}}return P===void 0&&(P=new xg(i,M,E,r),h.push(P)),P}function C(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function R(E){c.remove(E)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:N,releaseProgram:C,releaseShaderCache:R,programs:h,dispose:L}}function bg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function wg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Jc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,g,x,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function a(u,d,p,g,x,m){const f=o(u,d,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,g,x,m){const f=o(u,d,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||wg),n.length>1&&n.sort(d||Jc),s.length>1&&s.sort(d||Jc)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Tg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Qc,i.set(n,[o])):s>=r.length?(o=new Qc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ag(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new It};break;case"SpotLight":e={position:new T,direction:new T,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function Rg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Cg=0;function Pg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Lg(i){const t=new Ag,e=Rg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);const s=new T,r=new Xt,o=new Xt;function a(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,b=0,S=0,_=0,N=0,C=0,R=0;l.sort(Pg);for(let E=0,M=l.length;E<M;E++){const P=l[E],k=P.color,O=P.intensity,W=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=k.r*O,u+=k.g*O,d+=k.b*O;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],O);R++}else if(P.isDirectionalLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,H=e.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=P.shadow.matrix,b++}n.directional[p]=G,p++}else if(P.isSpotLight){const G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(k).multiplyScalar(O),G.distance=W,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[x]=G;const j=P.shadow;if(P.map&&(n.spotLightMap[N]=P.map,N++,j.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[x]=j.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=Z,_++}x++}else if(P.isRectAreaLight){const G=t.get(P);G.color.copy(k).multiplyScalar(O),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const j=P.shadow,H=e.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=P.shadow.matrix,S++}n.point[g]=G,g++}else if(P.isHemisphereLight){const G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(O),G.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[f]=G,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==b||L.numPointShadows!==S||L.numSpotShadows!==_||L.numSpotMaps!==N||L.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=_+N-C,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,L.directionalLength=p,L.pointLength=g,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=b,L.numPointShadows=S,L.numSpotShadows=_,L.numSpotMaps=N,L.numLightProbes=R,n.version=Cg++)}function c(l,h){let u=0,d=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let f=0,b=l.length;f<b;f++){const S=l[f];if(S.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(S.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function tl(i){const t=new Lg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Dg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new tl(i),t.set(s,[a])):r>=o.length?(a=new tl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Ig extends ws{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ug extends ws{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fg=`uniform sampler2D shadow_pass;
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
}`;function Og(i,t,e){let n=new Ta;const s=new nt,r=new nt,o=new le,a=new Ig({depthPacking:pu}),c=new Ug,l={},h=e.maxTextureSize,u={[on]:Ie,[Ie]:on,[_n]:_n},d=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Ng,fragmentShader:Fg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Le;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ot(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ll;let f=this.type;this.render=function(C,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Un),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const O=f!==gn&&this.type===gn,W=f===gn&&this.type!==gn;for(let Z=0,G=C.length;Z<G;Z++){const j=C[Z],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const at=H.getFrameExtents();if(s.multiply(at),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,H.mapSize.y=r.y)),H.map===null||O===!0||W===!0){const Mt=this.type!==gn?{minFilter:Be,magFilter:Be}:{};H.map!==null&&H.map.dispose(),H.map=new ni(s.x,s.y,Mt),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const pt=H.getViewportCount();for(let Mt=0;Mt<pt;Mt++){const Bt=H.getViewport(Mt);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),k.viewport(o),H.updateMatrices(j,Mt),n=H.getFrustum(),_(R,L,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===gn&&b(H,L),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,P)};function b(C,R){const L=t.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ni(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,L,d,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,L,p,x,null)}function S(C,R,L,E){let M=null;const P=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)M=P;else if(M=L.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const k=M.uuid,O=R.uuid;let W=l[k];W===void 0&&(W={},l[k]=W);let Z=W[O];Z===void 0&&(Z=M.clone(),W[O]=Z,R.addEventListener("dispose",N)),M=Z}if(M.visible=R.visible,M.wireframe=R.wireframe,E===gn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=i.properties.get(M);k.light=L}return M}function _(C,R,L,E,M){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===gn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const O=t.update(C),W=C.material;if(Array.isArray(W)){const Z=O.groups;for(let G=0,j=Z.length;G<j;G++){const H=Z[G],at=W[H.materialIndex];if(at&&at.visible){const pt=S(C,at,E,M);C.onBeforeShadow(i,C,R,L,O,pt,H),i.renderBufferDirect(L,null,O,pt,C,H),C.onAfterShadow(i,C,R,L,O,pt,H)}}}else if(W.visible){const Z=S(C,W,E,M);C.onBeforeShadow(i,C,R,L,O,Z,null),i.renderBufferDirect(L,null,O,Z,C,null),C.onAfterShadow(i,C,R,L,O,Z,null)}}const k=C.children;for(let O=0,W=k.length;O<W;O++)_(k[O],R,L,E,M)}function N(C){C.target.removeEventListener("dispose",N);for(const L in l){const E=l[L],M=C.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const Bg={[To]:Ao,[Ro]:Lo,[Co]:Do,[Fi]:Po,[Ao]:To,[Lo]:Ro,[Do]:Co,[Po]:Fi};function zg(i,t){function e(){let D=!1;const ht=new le;let V=null;const $=new le(0,0,0,0);return{setMask:function(ft){V!==ft&&!D&&(i.colorMask(ft,ft,ft,ft),V=ft)},setLocked:function(ft){D=ft},setClear:function(ft,ut,zt,ce,xe){xe===!0&&(ft*=ce,ut*=ce,zt*=ce),ht.set(ft,ut,zt,ce),$.equals(ht)===!1&&(i.clearColor(ft,ut,zt,ce),$.copy(ht))},reset:function(){D=!1,V=null,$.set(-1,0,0,0)}}}function n(){let D=!1,ht=!1,V=null,$=null,ft=null;return{setReversed:function(ut){if(ht!==ut){const zt=t.get("EXT_clip_control");ht?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);const ce=ft;ft=null,this.setClear(ce)}ht=ut},getReversed:function(){return ht},setTest:function(ut){ut?rt(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(ut){V!==ut&&!D&&(i.depthMask(ut),V=ut)},setFunc:function(ut){if(ht&&(ut=Bg[ut]),$!==ut){switch(ut){case To:i.depthFunc(i.NEVER);break;case Ao:i.depthFunc(i.ALWAYS);break;case Ro:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case Co:i.depthFunc(i.EQUAL);break;case Po:i.depthFunc(i.GEQUAL);break;case Lo:i.depthFunc(i.GREATER);break;case Do:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ut}},setLocked:function(ut){D=ut},setClear:function(ut){ft!==ut&&(ht&&(ut=1-ut),i.clearDepth(ut),ft=ut)},reset:function(){D=!1,V=null,$=null,ft=null,ht=!1}}}function s(){let D=!1,ht=null,V=null,$=null,ft=null,ut=null,zt=null,ce=null,xe=null;return{setTest:function(Qt){D||(Qt?rt(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(Qt){ht!==Qt&&!D&&(i.stencilMask(Qt),ht=Qt)},setFunc:function(Qt,Ge,ln){(V!==Qt||$!==Ge||ft!==ln)&&(i.stencilFunc(Qt,Ge,ln),V=Qt,$=Ge,ft=ln)},setOp:function(Qt,Ge,ln){(ut!==Qt||zt!==Ge||ce!==ln)&&(i.stencilOp(Qt,Ge,ln),ut=Qt,zt=Ge,ce=ln)},setLocked:function(Qt){D=Qt},setClear:function(Qt){xe!==Qt&&(i.clearStencil(Qt),xe=Qt)},reset:function(){D=!1,ht=null,V=null,$=null,ft=null,ut=null,zt=null,ce=null,xe=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,b=null,S=null,_=null,N=null,C=null,R=new It(0,0,0),L=0,E=!1,M=null,P=null,k=null,O=null,W=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,j=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=j>=2);let at=null,pt={};const Mt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),Kt=new le().fromArray(Mt),Y=new le().fromArray(Bt);function it(D,ht,V,$){const ft=new Uint8Array(4),ut=i.createTexture();i.bindTexture(D,ut),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<V;zt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(ht+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return ut}const yt={};yt[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(i.DEPTH_TEST),o.setFunc(Fi),Q(!1),_t(sc),rt(i.CULL_FACE),A(Un);function rt(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Rt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Nt(D,ht){return u[D]!==ht?(i.bindFramebuffer(D,ht),u[D]=ht,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ht),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function Dt(D,ht){let V=p,$=!1;if(D){V=d.get(ht),V===void 0&&(V=[],d.set(ht,V));const ft=D.textures;if(V.length!==ft.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,zt=ft.length;ut<zt;ut++)V[ut]=i.COLOR_ATTACHMENT0+ut;V.length=ft.length,$=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,$=!0);$&&i.drawBuffers(V)}function Yt(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const K={[Kn]:i.FUNC_ADD,[kh]:i.FUNC_SUBTRACT,[Hh]:i.FUNC_REVERSE_SUBTRACT};K[Vh]=i.MIN,K[Gh]=i.MAX;const et={[Wh]:i.ZERO,[Xh]:i.ONE,[qh]:i.SRC_COLOR,[bo]:i.SRC_ALPHA,[Jh]:i.SRC_ALPHA_SATURATE,[Kh]:i.DST_COLOR,[Zh]:i.DST_ALPHA,[Yh]:i.ONE_MINUS_SRC_COLOR,[wo]:i.ONE_MINUS_SRC_ALPHA,[jh]:i.ONE_MINUS_DST_COLOR,[$h]:i.ONE_MINUS_DST_ALPHA,[Qh]:i.CONSTANT_COLOR,[tu]:i.ONE_MINUS_CONSTANT_COLOR,[eu]:i.CONSTANT_ALPHA,[nu]:i.ONE_MINUS_CONSTANT_ALPHA};function A(D,ht,V,$,ft,ut,zt,ce,xe,Qt){if(D===Un){x===!0&&(Rt(i.BLEND),x=!1);return}if(x===!1&&(rt(i.BLEND),x=!0),D!==zh){if(D!==m||Qt!==E){if((f!==Kn||_!==Kn)&&(i.blendEquation(i.FUNC_ADD),f=Kn,_=Kn),Qt)switch(D){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _r:i.blendFunc(i.ONE,i.ONE);break;case rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _r:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,S=null,N=null,C=null,R.set(0,0,0),L=0,m=D,E=Qt}return}ft=ft||ht,ut=ut||V,zt=zt||$,(ht!==f||ft!==_)&&(i.blendEquationSeparate(K[ht],K[ft]),f=ht,_=ft),(V!==b||$!==S||ut!==N||zt!==C)&&(i.blendFuncSeparate(et[V],et[$],et[ut],et[zt]),b=V,S=$,N=ut,C=zt),(ce.equals(R)===!1||xe!==L)&&(i.blendColor(ce.r,ce.g,ce.b,xe),R.copy(ce),L=xe),m=D,E=!1}function Tt(D,ht){D.side===_n?Rt(i.CULL_FACE):rt(i.CULL_FACE);let V=D.side===Ie;ht&&(V=!V),Q(V),D.blending===Di&&D.transparent===!1?A(Un):A(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const $=D.stencilWrite;a.setTest($),$&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ct(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function _t(D){D!==Fh?(rt(i.CULL_FACE),D!==P&&(D===sc?i.cullFace(i.BACK):D===Oh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),P=D}function ot(D){D!==k&&(G&&i.lineWidth(D),k=D)}function Ct(D,ht,V){D?(rt(i.POLYGON_OFFSET_FILL),(O!==ht||W!==V)&&(i.polygonOffset(ht,V),O=ht,W=V)):Rt(i.POLYGON_OFFSET_FILL)}function mt(D){D?rt(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function w(D){D===void 0&&(D=i.TEXTURE0+Z-1),at!==D&&(i.activeTexture(D),at=D)}function v(D,ht,V){V===void 0&&(at===null?V=i.TEXTURE0+Z-1:V=at);let $=pt[V];$===void 0&&($={type:void 0,texture:void 0},pt[V]=$),($.type!==D||$.texture!==ht)&&(at!==V&&(i.activeTexture(V),at=V),i.bindTexture(D,ht||yt[D]),$.type=D,$.texture=ht)}function F(){const D=pt[at];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ut(D){Kt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Kt.copy(D))}function xt(D){Y.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function qt(D,ht){let V=l.get(ht);V===void 0&&(V=new WeakMap,l.set(ht,V));let $=V.get(D);$===void 0&&($=i.getUniformBlockIndex(ht,D.name),V.set(D,$))}function Vt(D,ht){const $=l.get(ht).get(D);c.get(ht)!==$&&(i.uniformBlockBinding(ht,$,D.__bindingPointIndex),c.set(ht,$))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},at=null,pt={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,b=null,S=null,_=null,N=null,C=null,R=new It(0,0,0),L=0,E=!1,M=null,P=null,k=null,O=null,W=null,Kt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:Rt,bindFramebuffer:Nt,drawBuffers:Dt,useProgram:Yt,setBlending:A,setMaterial:Tt,setFlipSided:Q,setCullFace:_t,setLineWidth:ot,setPolygonOffset:Ct,setScissorTest:mt,activeTexture:w,bindTexture:v,unbindTexture:F,compressedTexImage2D:X,compressedTexImage3D:J,texImage2D:vt,texImage3D:Pt,updateUBOMapping:qt,uniformBlockBinding:Vt,texStorage2D:Wt,texStorage3D:tt,texSubImage2D:q,texSubImage3D:St,compressedTexSubImage2D:lt,compressedTexSubImage3D:gt,scissor:Ut,viewport:xt,reset:ie}}function el(i,t,e,n){const s=kg(n);switch(e){case Ol:return i*t;case zl:return i*t;case kl:return i*t*2;case ya:return i*t/s.components*s.byteLength;case Sa:return i*t/s.components*s.byteLength;case Hl:return i*t*2/s.components*s.byteLength;case Ea:return i*t*2/s.components*s.byteLength;case Bl:return i*t*3/s.components*s.byteLength;case je:return i*t*4/s.components*s.byteLength;case ba:return i*t*4/s.components*s.byteLength;case cr:case lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bo:case ko:return Math.max(i,16)*Math.max(t,8)/4;case Oo:case zo:return Math.max(i,8)*Math.max(t,8)/2;case Ho:case Vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $o:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case jo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ta:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ea:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case na:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ia:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case dr:case sa:case ra:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vl:case oa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case aa:case ca:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kg(i){switch(i){case yn:case Ul:return{byteLength:1,components:1};case _s:case Nl:case bs:return{byteLength:2,components:1};case xa:case Ma:return{byteLength:2,components:4};case ei:case va:case rn:return{byteLength:4,components:1};case Fl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Hg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return p?new OffscreenCanvas(w,v):xr("canvas")}function x(w,v,F){let X=1;const J=mt(w);if((J.width>F||J.height>F)&&(X=F/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const q=Math.floor(X*J.width),St=Math.floor(X*J.height);u===void 0&&(u=g(q,St));const lt=v?g(q,St):u;return lt.width=q,lt.height=St,lt.getContext("2d").drawImage(w,0,0,q,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+St+")."),lt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){i.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(w,v,F,X,J=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=v;if(v===i.RED&&(F===i.FLOAT&&(q=i.R32F),F===i.HALF_FLOAT&&(q=i.R16F),F===i.UNSIGNED_BYTE&&(q=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.R8UI),F===i.UNSIGNED_SHORT&&(q=i.R16UI),F===i.UNSIGNED_INT&&(q=i.R32UI),F===i.BYTE&&(q=i.R8I),F===i.SHORT&&(q=i.R16I),F===i.INT&&(q=i.R32I)),v===i.RG&&(F===i.FLOAT&&(q=i.RG32F),F===i.HALF_FLOAT&&(q=i.RG16F),F===i.UNSIGNED_BYTE&&(q=i.RG8)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RG8UI),F===i.UNSIGNED_SHORT&&(q=i.RG16UI),F===i.UNSIGNED_INT&&(q=i.RG32UI),F===i.BYTE&&(q=i.RG8I),F===i.SHORT&&(q=i.RG16I),F===i.INT&&(q=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(q=i.RGB16UI),F===i.UNSIGNED_INT&&(q=i.RGB32UI),F===i.BYTE&&(q=i.RGB8I),F===i.SHORT&&(q=i.RGB16I),F===i.INT&&(q=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),F===i.UNSIGNED_INT&&(q=i.RGBA32UI),F===i.BYTE&&(q=i.RGBA8I),F===i.SHORT&&(q=i.RGBA16I),F===i.INT&&(q=i.RGBA32I)),v===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),v===i.RGBA){const St=J?br:Zt.getTransfer(X);F===i.FLOAT&&(q=i.RGBA32F),F===i.HALF_FLOAT&&(q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(q=St===te?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(w,v){let F;return w?v===null||v===ei||v===zi?F=i.DEPTH24_STENCIL8:v===rn?F=i.DEPTH32F_STENCIL8:v===_s&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ei||v===zi?F=i.DEPTH_COMPONENT24:v===rn?F=i.DEPTH_COMPONENT32F:v===_s&&(F=i.DEPTH_COMPONENT16),F}function N(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Be&&w.minFilter!==Ke?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function C(w){const v=w.target;v.removeEventListener("dispose",C),L(v),v.isVideoTexture&&h.delete(v)}function R(w){const v=w.target;v.removeEventListener("dispose",R),M(v)}function L(w){const v=n.get(w);if(v.__webglInit===void 0)return;const F=w.source,X=d.get(F);if(X){const J=X[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(w),Object.keys(X).length===0&&d.delete(F)}n.remove(w)}function E(w){const v=n.get(w);i.deleteTexture(v.__webglTexture);const F=w.source,X=d.get(F);delete X[v.__cacheKey],o.memory.textures--}function M(w){const v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let J=0;J<v.__webglFramebuffer[X].length;J++)i.deleteFramebuffer(v.__webglFramebuffer[X][J]);else i.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)i.deleteFramebuffer(v.__webglFramebuffer[X]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=w.textures;for(let X=0,J=F.length;X<J;X++){const q=n.get(F[X]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(F[X])}n.remove(w)}let P=0;function k(){P=0}function O(){const w=P;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function W(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function Z(w,v){const F=n.get(w);if(w.isVideoTexture&&ot(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){const X=w.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,w,v);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function G(w,v){const F=n.get(w);if(w.version>0&&F.__version!==w.version){Y(F,w,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function j(w,v){const F=n.get(w);if(w.version>0&&F.__version!==w.version){Y(F,w,v);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function H(w,v){const F=n.get(w);if(w.version>0&&F.__version!==w.version){it(F,w,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}const at={[No]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[Fo]:i.MIRRORED_REPEAT},pt={[Be]:i.NEAREST,[du]:i.NEAREST_MIPMAP_NEAREST,[Ps]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[Ur]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},Mt={[gu]:i.NEVER,[Su]:i.ALWAYS,[_u]:i.LESS,[Wl]:i.LEQUAL,[vu]:i.EQUAL,[yu]:i.GEQUAL,[xu]:i.GREATER,[Mu]:i.NOTEQUAL};function Bt(w,v){if(v.type===rn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ke||v.magFilter===Ur||v.magFilter===Ps||v.magFilter===Qn||v.minFilter===Ke||v.minFilter===Ur||v.minFilter===Ps||v.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,at[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,at[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,at[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,pt[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,pt[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Mt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Be||v.minFilter!==Ps&&v.minFilter!==Qn||v.type===rn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Kt(w,v){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",C));const X=v.source;let J=d.get(X);J===void 0&&(J={},d.set(X,J));const q=W(v);if(q!==w.__cacheKey){J[q]===void 0&&(J[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[q].usedTimes++;const St=J[w.__cacheKey];St!==void 0&&(J[w.__cacheKey].usedTimes--,St.usedTimes===0&&E(v)),w.__cacheKey=q,w.__webglTexture=J[q].texture}return F}function Y(w,v,F){let X=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=i.TEXTURE_3D);const J=Kt(w,v),q=v.source;e.bindTexture(X,w.__webglTexture,i.TEXTURE0+F);const St=n.get(q);if(q.version!==St.__version||J===!0){e.activeTexture(i.TEXTURE0+F);const lt=Zt.getPrimaries(Zt.workingColorSpace),gt=v.colorSpace===In?null:Zt.getPrimaries(v.colorSpace),Wt=v.colorSpace===In||lt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let tt=x(v.image,!1,s.maxTextureSize);tt=Ct(v,tt);const vt=r.convert(v.format,v.colorSpace),Pt=r.convert(v.type);let Ut=S(v.internalFormat,vt,Pt,v.colorSpace,v.isVideoTexture);Bt(X,v);let xt;const qt=v.mipmaps,Vt=v.isVideoTexture!==!0,ie=St.__version===void 0||J===!0,D=q.dataReady,ht=N(v,tt);if(v.isDepthTexture)Ut=_(v.format===ki,v.type),ie&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,Ut,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Ut,tt.width,tt.height,0,vt,Pt,null));else if(v.isDataTexture)if(qt.length>0){Vt&&ie&&e.texStorage2D(i.TEXTURE_2D,ht,Ut,qt[0].width,qt[0].height);for(let V=0,$=qt.length;V<$;V++)xt=qt[V],Vt?D&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,xt.width,xt.height,vt,Pt,xt.data):e.texImage2D(i.TEXTURE_2D,V,Ut,xt.width,xt.height,0,vt,Pt,xt.data);v.generateMipmaps=!1}else Vt?(ie&&e.texStorage2D(i.TEXTURE_2D,ht,Ut,tt.width,tt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,vt,Pt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Ut,tt.width,tt.height,0,vt,Pt,tt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Vt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Ut,qt[0].width,qt[0].height,tt.depth);for(let V=0,$=qt.length;V<$;V++)if(xt=qt[V],v.format!==je)if(vt!==null)if(Vt){if(D)if(v.layerUpdates.size>0){const ft=el(xt.width,xt.height,v.format,v.type);for(const ut of v.layerUpdates){const zt=xt.data.subarray(ut*ft/xt.data.BYTES_PER_ELEMENT,(ut+1)*ft/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ut,xt.width,xt.height,1,vt,zt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,xt.width,xt.height,tt.depth,vt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Ut,xt.width,xt.height,tt.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,xt.width,xt.height,tt.depth,vt,Pt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,Ut,xt.width,xt.height,tt.depth,0,vt,Pt,xt.data)}else{Vt&&ie&&e.texStorage2D(i.TEXTURE_2D,ht,Ut,qt[0].width,qt[0].height);for(let V=0,$=qt.length;V<$;V++)xt=qt[V],v.format!==je?vt!==null?Vt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,xt.width,xt.height,vt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,Ut,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?D&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,xt.width,xt.height,vt,Pt,xt.data):e.texImage2D(i.TEXTURE_2D,V,Ut,xt.width,xt.height,0,vt,Pt,xt.data)}else if(v.isDataArrayTexture)if(Vt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Ut,tt.width,tt.height,tt.depth),D)if(v.layerUpdates.size>0){const V=el(tt.width,tt.height,v.format,v.type);for(const $ of v.layerUpdates){const ft=tt.data.subarray($*V/tt.data.BYTES_PER_ELEMENT,($+1)*V/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,tt.width,tt.height,1,vt,Pt,ft)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,vt,Pt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,tt.width,tt.height,tt.depth,0,vt,Pt,tt.data);else if(v.isData3DTexture)Vt?(ie&&e.texStorage3D(i.TEXTURE_3D,ht,Ut,tt.width,tt.height,tt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,vt,Pt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,tt.width,tt.height,tt.depth,0,vt,Pt,tt.data);else if(v.isFramebufferTexture){if(ie)if(Vt)e.texStorage2D(i.TEXTURE_2D,ht,Ut,tt.width,tt.height);else{let V=tt.width,$=tt.height;for(let ft=0;ft<ht;ft++)e.texImage2D(i.TEXTURE_2D,ft,Ut,V,$,0,vt,Pt,null),V>>=1,$>>=1}}else if(qt.length>0){if(Vt&&ie){const V=mt(qt[0]);e.texStorage2D(i.TEXTURE_2D,ht,Ut,V.width,V.height)}for(let V=0,$=qt.length;V<$;V++)xt=qt[V],Vt?D&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,vt,Pt,xt):e.texImage2D(i.TEXTURE_2D,V,Ut,vt,Pt,xt);v.generateMipmaps=!1}else if(Vt){if(ie){const V=mt(tt);e.texStorage2D(i.TEXTURE_2D,ht,Ut,V.width,V.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Pt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Ut,vt,Pt,tt);m(v)&&f(X),St.__version=q.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function it(w,v,F){if(v.image.length!==6)return;const X=Kt(w,v),J=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+F);const q=n.get(J);if(J.version!==q.__version||X===!0){e.activeTexture(i.TEXTURE0+F);const St=Zt.getPrimaries(Zt.workingColorSpace),lt=v.colorSpace===In?null:Zt.getPrimaries(v.colorSpace),gt=v.colorSpace===In||St===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Wt=v.isCompressedTexture||v.image[0].isCompressedTexture,tt=v.image[0]&&v.image[0].isDataTexture,vt=[];for(let $=0;$<6;$++)!Wt&&!tt?vt[$]=x(v.image[$],!0,s.maxCubemapSize):vt[$]=tt?v.image[$].image:v.image[$],vt[$]=Ct(v,vt[$]);const Pt=vt[0],Ut=r.convert(v.format,v.colorSpace),xt=r.convert(v.type),qt=S(v.internalFormat,Ut,xt,v.colorSpace),Vt=v.isVideoTexture!==!0,ie=q.__version===void 0||X===!0,D=J.dataReady;let ht=N(v,Pt);Bt(i.TEXTURE_CUBE_MAP,v);let V;if(Wt){Vt&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,qt,Pt.width,Pt.height);for(let $=0;$<6;$++){V=vt[$].mipmaps;for(let ft=0;ft<V.length;ft++){const ut=V[ft];v.format!==je?Ut!==null?Vt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,0,0,ut.width,ut.height,Ut,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,qt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,0,0,ut.width,ut.height,Ut,xt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,qt,ut.width,ut.height,0,Ut,xt,ut.data)}}}else{if(V=v.mipmaps,Vt&&ie){V.length>0&&ht++;const $=mt(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,qt,$.width,$.height)}for(let $=0;$<6;$++)if(tt){Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,vt[$].width,vt[$].height,Ut,xt,vt[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,qt,vt[$].width,vt[$].height,0,Ut,xt,vt[$].data);for(let ft=0;ft<V.length;ft++){const zt=V[ft].image[$].image;Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,0,0,zt.width,zt.height,Ut,xt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,qt,zt.width,zt.height,0,Ut,xt,zt.data)}}else{Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ut,xt,vt[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,qt,Ut,xt,vt[$]);for(let ft=0;ft<V.length;ft++){const ut=V[ft];Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,0,0,Ut,xt,ut.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,qt,Ut,xt,ut.image[$])}}}m(v)&&f(i.TEXTURE_CUBE_MAP),q.__version=J.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function yt(w,v,F,X,J,q){const St=r.convert(F.format,F.colorSpace),lt=r.convert(F.type),gt=S(F.internalFormat,St,lt,F.colorSpace),Wt=n.get(v),tt=n.get(F);if(tt.__renderTarget=v,!Wt.__hasExternalTextures){const vt=Math.max(1,v.width>>q),Pt=Math.max(1,v.height>>q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,q,gt,vt,Pt,v.depth,0,St,lt,null):e.texImage2D(J,q,gt,vt,Pt,0,St,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),_t(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,J,tt.__webglTexture,0,Q(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,J,tt.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(w,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){const X=v.depthTexture,J=X&&X.isDepthTexture?X.type:null,q=_(v.stencilBuffer,J),St=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=Q(v);_t(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,q,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,w)}else{const X=v.textures;for(let J=0;J<X.length;J++){const q=X[J],St=r.convert(q.format,q.colorSpace),lt=r.convert(q.type),gt=S(q.internalFormat,St,lt,q.colorSpace),Wt=Q(v);F&&_t(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,gt,v.width,v.height):_t(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,gt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,gt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(v.depthTexture);X.__renderTarget=v,(!X.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const J=X.__webglTexture,q=Q(v);if(v.depthTexture.format===Ii)_t(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(v.depthTexture.format===ki)_t(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Nt(w){const v=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const X=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=X}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Rt(v.__webglFramebuffer,w)}else if(F){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=i.createRenderbuffer(),rt(v.__webglDepthbuffer[X],w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),rt(v.__webglDepthbuffer,w,!1);else{const X=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(w,v,F){const X=n.get(w);v!==void 0&&yt(X.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Nt(w)}function Yt(w){const v=w.texture,F=n.get(w),X=n.get(v);w.addEventListener("dispose",R);const J=w.textures,q=w.isWebGLCubeRenderTarget===!0,St=J.length>1;if(St||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=v.version,o.memory.textures++),q){F.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[lt]=[];for(let gt=0;gt<v.mipmaps.length;gt++)F.__webglFramebuffer[lt][gt]=i.createFramebuffer()}else F.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let lt=0;lt<v.mipmaps.length;lt++)F.__webglFramebuffer[lt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(St)for(let lt=0,gt=J.length;lt<gt;lt++){const Wt=n.get(J[lt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&_t(w)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let lt=0;lt<J.length;lt++){const gt=J[lt];F.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[lt]);const Wt=r.convert(gt.format,gt.colorSpace),tt=r.convert(gt.type),vt=S(gt.internalFormat,Wt,tt,gt.colorSpace,w.isXRRenderTarget===!0),Pt=Q(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,vt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,F.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(F.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,v);for(let lt=0;lt<6;lt++)if(v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)yt(F.__webglFramebuffer[lt][gt],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,gt);else yt(F.__webglFramebuffer[lt],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(v)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let lt=0,gt=J.length;lt<gt;lt++){const Wt=J[lt],tt=n.get(Wt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),Bt(i.TEXTURE_2D,Wt),yt(F.__webglFramebuffer,w,Wt,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),m(Wt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(lt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,X.__webglTexture),Bt(lt,v),v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)yt(F.__webglFramebuffer[gt],w,v,i.COLOR_ATTACHMENT0,lt,gt);else yt(F.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,lt,0);m(v)&&f(lt),e.unbindTexture()}w.depthBuffer&&Nt(w)}function K(w){const v=w.textures;for(let F=0,X=v.length;F<X;F++){const J=v[F];if(m(J)){const q=b(w),St=n.get(J).__webglTexture;e.bindTexture(q,St),f(q),e.unbindTexture()}}}const et=[],A=[];function Tt(w){if(w.samples>0){if(_t(w)===!1){const v=w.textures,F=w.width,X=w.height;let J=i.COLOR_BUFFER_BIT;const q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(w),lt=v.length>1;if(lt)for(let gt=0;gt<v.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let gt=0;gt<v.length;gt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[gt]);const Wt=n.get(v[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,F,X,0,0,F,X,J,i.NEAREST),c===!0&&(et.length=0,A.length=0,et.push(i.COLOR_ATTACHMENT0+gt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(et.push(q),A.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,A)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let gt=0;gt<v.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,St.__webglColorRenderbuffer[gt]);const Wt=n.get(v[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Q(w){return Math.min(s.maxSamples,w.samples)}function _t(w){const v=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ot(w){const v=o.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function Ct(w,v){const F=w.colorSpace,X=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Xi&&F!==In&&(Zt.getTransfer(F)===te?(X!==je||J!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function mt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=k,this.setTexture2D=Z,this.setTexture2DArray=G,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=Dt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=_t}function Vg(i,t){function e(n,s=In){let r;const o=Zt.getTransfer(s);if(n===yn)return i.UNSIGNED_BYTE;if(n===xa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ma)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ul)return i.BYTE;if(n===Nl)return i.SHORT;if(n===_s)return i.UNSIGNED_SHORT;if(n===va)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===rn)return i.FLOAT;if(n===bs)return i.HALF_FLOAT;if(n===Ol)return i.ALPHA;if(n===Bl)return i.RGB;if(n===je)return i.RGBA;if(n===zl)return i.LUMINANCE;if(n===kl)return i.LUMINANCE_ALPHA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===ki)return i.DEPTH_STENCIL;if(n===ya)return i.RED;if(n===Sa)return i.RED_INTEGER;if(n===Hl)return i.RG;if(n===Ea)return i.RG_INTEGER;if(n===ba)return i.RGBA_INTEGER;if(n===cr||n===lr||n===hr||n===ur)if(o===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oo||n===Bo||n===zo||n===ko)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ho||n===Vo||n===Go)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ho||n===Vo)return o===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Go)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===$o||n===Ko||n===jo||n===Jo||n===Qo||n===ta||n===ea||n===na||n===ia)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$o)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ko)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ta)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ea)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===na)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ia)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dr||n===sa||n===ra)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===dr)return o===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ra)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vl||n===oa||n===aa||n===ca)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===dr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ca)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Gg extends Te{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Re extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wg={type:"move"};class ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qg=`
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

}`;class Yg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ee,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Sn({vertexShader:Xg,fragmentShader:qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zg extends qi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null;const x=new Yg,m=e.getContextAttributes();let f=null,b=null;const S=[],_=[],N=new nt;let C=null;const R=new Te;R.viewport=new le;const L=new Te;L.viewport=new le;const E=[R,L],M=new Gg;let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let it=S[Y];return it===void 0&&(it=new ao,S[Y]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Y){let it=S[Y];return it===void 0&&(it=new ao,S[Y]=it),it.getGripSpace()},this.getHand=function(Y){let it=S[Y];return it===void 0&&(it=new ao,S[Y]=it),it.getHandSpace()};function O(Y){const it=_.indexOf(Y.inputSource);if(it===-1)return;const yt=S[it];yt!==void 0&&(yt.update(Y.inputSource,Y.frame,l||o),yt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<S.length;Y++){const it=_[Y];it!==null&&(_[Y]=null,S[Y].disconnect(it))}P=null,k=null,x.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,b=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new ni(p.framebufferWidth,p.framebufferHeight,{format:je,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,yt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?ki:Ii,yt=m.stencil?zi:ei);const Rt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Rt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new ni(d.textureWidth,d.textureHeight,{format:je,type:yn,depthTexture:new sh(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(Y){for(let it=0;it<Y.removed.length;it++){const yt=Y.removed[it],rt=_.indexOf(yt);rt>=0&&(_[rt]=null,S[rt].disconnect(yt))}for(let it=0;it<Y.added.length;it++){const yt=Y.added[it];let rt=_.indexOf(yt);if(rt===-1){for(let Nt=0;Nt<S.length;Nt++)if(Nt>=_.length){_.push(yt),rt=Nt;break}else if(_[Nt]===null){_[Nt]=yt,rt=Nt;break}if(rt===-1)break}const Rt=S[rt];Rt&&Rt.connect(yt)}}const G=new T,j=new T;function H(Y,it,yt){G.setFromMatrixPosition(it.matrixWorld),j.setFromMatrixPosition(yt.matrixWorld);const rt=G.distanceTo(j),Rt=it.projectionMatrix.elements,Nt=yt.projectionMatrix.elements,Dt=Rt[14]/(Rt[10]-1),Yt=Rt[14]/(Rt[10]+1),K=(Rt[9]+1)/Rt[5],et=(Rt[9]-1)/Rt[5],A=(Rt[8]-1)/Rt[0],Tt=(Nt[8]+1)/Nt[0],Q=Dt*A,_t=Dt*Tt,ot=rt/(-A+Tt),Ct=ot*-A;if(it.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ct),Y.translateZ(ot),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Rt[10]===-1)Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const mt=Dt+ot,w=Yt+ot,v=Q-Ct,F=_t+(rt-Ct),X=K*Yt/w*mt,J=et*Yt/w*mt;Y.projectionMatrix.makePerspective(v,F,X,J,mt,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function at(Y,it){it===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(it.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let it=Y.near,yt=Y.far;x.texture!==null&&(x.depthNear>0&&(it=x.depthNear),x.depthFar>0&&(yt=x.depthFar)),M.near=L.near=R.near=it,M.far=L.far=R.far=yt,(P!==M.near||k!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,k=M.far),R.layers.mask=Y.layers.mask|2,L.layers.mask=Y.layers.mask|4,M.layers.mask=R.layers.mask|L.layers.mask;const rt=Y.parent,Rt=M.cameras;at(M,rt);for(let Nt=0;Nt<Rt.length;Nt++)at(Rt[Nt],rt);Rt.length===2?H(M,R,L):M.projectionMatrix.copy(R.projectionMatrix),pt(Y,M,rt)};function pt(Y,it,yt){yt===null?Y.matrix.copy(it.matrixWorld):(Y.matrix.copy(yt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(it.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=vs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Mt=null;function Bt(Y,it){if(h=it.getViewerPose(l||o),g=it,h!==null){const yt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let rt=!1;yt.length!==M.cameras.length&&(M.cameras.length=0,rt=!0);for(let Nt=0;Nt<yt.length;Nt++){const Dt=yt[Nt];let Yt=null;if(p!==null)Yt=p.getViewport(Dt);else{const et=u.getViewSubImage(d,Dt);Yt=et.viewport,Nt===0&&(t.setRenderTargetTextures(b,et.colorTexture,d.ignoreDepthValues?void 0:et.depthStencilTexture),t.setRenderTarget(b))}let K=E[Nt];K===void 0&&(K=new Te,K.layers.enable(Nt),K.viewport=new le,E[Nt]=K),K.matrix.fromArray(Dt.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Dt.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Nt===0&&(M.matrix.copy(K.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),rt===!0&&M.cameras.push(K)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const Nt=u.getDepthInformation(yt[0]);Nt&&Nt.isValid&&Nt.texture&&x.init(t,Nt,s.renderState)}}for(let yt=0;yt<S.length;yt++){const rt=_[yt],Rt=S[yt];rt!==null&&Rt!==void 0&&Rt.update(rt,it,l||o)}Mt&&Mt(Y,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const Kt=new nh;Kt.setAnimationLoop(Bt),this.setAnimationLoop=function(Y){Mt=Y},this.dispose=function(){}}}const Xn=new an,$g=new Xt;function Kg(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ql(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,S,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,b,S):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ie&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ie&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=t.get(f),S=b.envMap,_=b.envMapRotation;S&&(m.envMap.value=S,Xn.copy(_),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),m.envMapRotation.value.setFromMatrix4($g.makeRotationFromEuler(Xn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,b,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=S*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ie&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){const _=S.program;n.uniformBlockBinding(b,_)}function l(b,S){let _=s[b.id];_===void 0&&(g(b),_=h(b),s[b.id]=_,b.addEventListener("dispose",m));const N=S.program;n.updateUBOMapping(b,N);const C=t.render.frame;r[b.id]!==C&&(d(b),r[b.id]=C)}function h(b){const S=u();b.__bindingPointIndex=S;const _=i.createBuffer(),N=b.__size,C=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,N,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,_),_}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const S=s[b.id],_=b.uniforms,N=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,R=_.length;C<R;C++){const L=Array.isArray(_[C])?_[C]:[_[C]];for(let E=0,M=L.length;E<M;E++){const P=L[E];if(p(P,C,E,N)===!0){const k=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let Z=0;Z<O.length;Z++){const G=O[Z],j=x(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,k+W,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,W),W+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,S,_,N){const C=b.value,R=S+"_"+_;if(N[R]===void 0)return typeof C=="number"||typeof C=="boolean"?N[R]=C:N[R]=C.clone(),!0;{const L=N[R];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return N[R]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function g(b){const S=b.uniforms;let _=0;const N=16;for(let R=0,L=S.length;R<L;R++){const E=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,P=E.length;M<P;M++){const k=E[M],O=Array.isArray(k.value)?k.value:[k.value];for(let W=0,Z=O.length;W<Z;W++){const G=O[W],j=x(G),H=_%N,at=H%j.boundary,pt=H+at;_+=at,pt!==0&&N-pt<j.storage&&(_+=N-pt),k.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=j.storage}}}const C=_%N;return C>0&&(_+=N-C),b.__size=_,b.__cache={},this}function x(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){const S=b.target;S.removeEventListener("dispose",m);const _=o.indexOf(S.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class Jg{constructor(t={}){const{canvas:e=zu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const b=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Se,this.toneMapping=Nn,this.toneMappingExposure=1;const _=this;let N=!1,C=0,R=0,L=null,E=-1,M=null;const P=new le,k=new le;let O=null;const W=new It(0);let Z=0,G=e.width,j=e.height,H=1,at=null,pt=null;const Mt=new le(0,0,G,j),Bt=new le(0,0,G,j);let Kt=!1;const Y=new Ta;let it=!1,yt=!1;const rt=new Xt,Rt=new Xt,Nt=new T,Dt=new le,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function et(){return L===null?H:1}let A=n;function Tt(y,I){return e.getContext(y,I)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_a}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),A===null){const I="webgl2";if(A=Tt(I,y),A===null)throw Tt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Q,_t,ot,Ct,mt,w,v,F,X,J,q,St,lt,gt,Wt,tt,vt,Pt,Ut,xt,qt,Vt,ie,D;function ht(){Q=new im(A),Q.init(),Vt=new Vg(A,Q),_t=new jp(A,Q,t,Vt),ot=new zg(A,Q),_t.reverseDepthBuffer&&d&&ot.buffers.depth.setReversed(!0),Ct=new om(A),mt=new bg,w=new Hg(A,Q,ot,mt,_t,Vt,Ct),v=new Qp(_),F=new nm(_),X=new dd(A),ie=new $p(A,X),J=new sm(A,X,Ct,ie),q=new cm(A,J,X,Ct),Ut=new am(A,_t,w),tt=new Jp(mt),St=new Eg(_,v,F,Q,_t,ie,tt),lt=new Kg(_,mt),gt=new Tg,Wt=new Dg(Q),Pt=new Zp(_,v,F,ot,q,p,c),vt=new Og(_,q,_t),D=new jg(A,Ct,_t,ot),xt=new Kp(A,Q,Ct),qt=new rm(A,Q,Ct),Ct.programs=St.programs,_.capabilities=_t,_.extensions=Q,_.properties=mt,_.renderLists=gt,_.shadowMap=vt,_.state=ot,_.info=Ct}ht();const V=new Zg(_,A);this.xr=V,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const y=Q.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Q.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(y){y!==void 0&&(H=y,this.setSize(G,j,!1))},this.getSize=function(y){return y.set(G,j)},this.setSize=function(y,I,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=y,j=I,e.width=Math.floor(y*H),e.height=Math.floor(I*H),B===!0&&(e.style.width=y+"px",e.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(G*H,j*H).floor()},this.setDrawingBufferSize=function(y,I,B){G=y,j=I,H=B,e.width=Math.floor(y*B),e.height=Math.floor(I*B),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(Mt)},this.setViewport=function(y,I,B,z){y.isVector4?Mt.set(y.x,y.y,y.z,y.w):Mt.set(y,I,B,z),ot.viewport(P.copy(Mt).multiplyScalar(H).round())},this.getScissor=function(y){return y.copy(Bt)},this.setScissor=function(y,I,B,z){y.isVector4?Bt.set(y.x,y.y,y.z,y.w):Bt.set(y,I,B,z),ot.scissor(k.copy(Bt).multiplyScalar(H).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(y){ot.setScissorTest(Kt=y)},this.setOpaqueSort=function(y){at=y},this.setTransparentSort=function(y){pt=y},this.getClearColor=function(y){return y.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(y=!0,I=!0,B=!0){let z=0;if(y){let U=!1;if(L!==null){const st=L.texture.format;U=st===ba||st===Ea||st===Sa}if(U){const st=L.texture.type,dt=st===yn||st===ei||st===_s||st===zi||st===xa||st===Ma,Et=Pt.getClearColor(),bt=Pt.getClearAlpha(),Ft=Et.r,kt=Et.g,wt=Et.b;dt?(g[0]=Ft,g[1]=kt,g[2]=wt,g[3]=bt,A.clearBufferuiv(A.COLOR,0,g)):(x[0]=Ft,x[1]=kt,x[2]=wt,x[3]=bt,A.clearBufferiv(A.COLOR,0,x))}else z|=A.COLOR_BUFFER_BIT}I&&(z|=A.DEPTH_BUFFER_BIT),B&&(z|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),gt.dispose(),Wt.dispose(),mt.dispose(),v.dispose(),F.dispose(),q.dispose(),ie.dispose(),D.dispose(),St.dispose(),V.dispose(),V.removeEventListener("sessionstart",Ka),V.removeEventListener("sessionend",ja),zn.stop()};function $(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const y=Ct.autoReset,I=vt.enabled,B=vt.autoUpdate,z=vt.needsUpdate,U=vt.type;ht(),Ct.autoReset=y,vt.enabled=I,vt.autoUpdate=B,vt.needsUpdate=z,vt.type=U}function ut(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function zt(y){const I=y.target;I.removeEventListener("dispose",zt),ce(I)}function ce(y){xe(y),mt.remove(y)}function xe(y){const I=mt.get(y).programs;I!==void 0&&(I.forEach(function(B){St.releaseProgram(B)}),y.isShaderMaterial&&St.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,B,z,U,st){I===null&&(I=Yt);const dt=U.isMesh&&U.matrixWorld.determinant()<0,Et=Ih(y,I,B,z,U);ot.setMaterial(z,dt);let bt=B.index,Ft=1;if(z.wireframe===!0){if(bt=J.getWireframeAttribute(B),bt===void 0)return;Ft=2}const kt=B.drawRange,wt=B.attributes.position;let $t=kt.start*Ft,se=(kt.start+kt.count)*Ft;st!==null&&($t=Math.max($t,st.start*Ft),se=Math.min(se,(st.start+st.count)*Ft)),bt!==null?($t=Math.max($t,0),se=Math.min(se,bt.count)):wt!=null&&($t=Math.max($t,0),se=Math.min(se,wt.count));const re=se-$t;if(re<0||re===1/0)return;ie.setup(U,z,Et,B,bt);let De,jt=xt;if(bt!==null&&(De=X.get(bt),jt=qt,jt.setIndex(De)),U.isMesh)z.wireframe===!0?(ot.setLineWidth(z.wireframeLinewidth*et()),jt.setMode(A.LINES)):jt.setMode(A.TRIANGLES);else if(U.isLine){let At=z.linewidth;At===void 0&&(At=1),ot.setLineWidth(At*et()),U.isLineSegments?jt.setMode(A.LINES):U.isLineLoop?jt.setMode(A.LINE_LOOP):jt.setMode(A.LINE_STRIP)}else U.isPoints?jt.setMode(A.POINTS):U.isSprite&&jt.setMode(A.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)jt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))jt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const At=U._multiDrawStarts,hn=U._multiDrawCounts,Jt=U._multiDrawCount,We=bt?X.get(bt).bytesPerElement:1,li=mt.get(z).currentProgram.getUniforms();for(let Ue=0;Ue<Jt;Ue++)li.setValue(A,"_gl_DrawID",Ue),jt.render(At[Ue]/We,hn[Ue])}else if(U.isInstancedMesh)jt.renderInstances($t,re,U.count);else if(B.isInstancedBufferGeometry){const At=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,hn=Math.min(B.instanceCount,At);jt.renderInstances($t,re,hn)}else jt.render($t,re)};function Qt(y,I,B){y.transparent===!0&&y.side===_n&&y.forceSinglePass===!1?(y.side=Ie,y.needsUpdate=!0,Cs(y,I,B),y.side=on,y.needsUpdate=!0,Cs(y,I,B),y.side=_n):Cs(y,I,B)}this.compile=function(y,I,B=null){B===null&&(B=y),f=Wt.get(B),f.init(I),S.push(f),B.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),y!==B&&y.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const z=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const st=U.material;if(st)if(Array.isArray(st))for(let dt=0;dt<st.length;dt++){const Et=st[dt];Qt(Et,B,U),z.add(Et)}else Qt(st,B,U),z.add(st)}),S.pop(),f=null,z},this.compileAsync=function(y,I,B=null){const z=this.compile(y,I,B);return new Promise(U=>{function st(){if(z.forEach(function(dt){mt.get(dt).currentProgram.isReady()&&z.delete(dt)}),z.size===0){U(y);return}setTimeout(st,10)}Q.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Ge=null;function ln(y){Ge&&Ge(y)}function Ka(){zn.stop()}function ja(){zn.start()}const zn=new nh;zn.setAnimationLoop(ln),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(y){Ge=y,V.setAnimationLoop(y),y===null?zn.stop():zn.start()},V.addEventListener("sessionstart",Ka),V.addEventListener("sessionend",ja),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(I),I=V.getCamera()),y.isScene===!0&&y.onBeforeRender(_,y,I,L),f=Wt.get(y,S.length),f.init(I),S.push(f),Rt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Y.setFromProjectionMatrix(Rt),yt=this.localClippingEnabled,it=tt.init(this.clippingPlanes,yt),m=gt.get(y,b.length),m.init(),b.push(m),V.enabled===!0&&V.isPresenting===!0){const st=_.xr.getDepthSensingMesh();st!==null&&Ir(st,I,-1/0,_.sortObjects)}Ir(y,I,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(at,pt),K=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,K&&Pt.addToRenderList(m,y),this.info.render.frame++,it===!0&&tt.beginShadows();const B=f.state.shadowsArray;vt.render(B,y,I),it===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,U=m.transmissive;if(f.setupLights(),I.isArrayCamera){const st=I.cameras;if(U.length>0)for(let dt=0,Et=st.length;dt<Et;dt++){const bt=st[dt];Qa(z,U,y,bt)}K&&Pt.render(y);for(let dt=0,Et=st.length;dt<Et;dt++){const bt=st[dt];Ja(m,y,bt,bt.viewport)}}else U.length>0&&Qa(z,U,y,I),K&&Pt.render(y),Ja(m,y,I);L!==null&&(w.updateMultisampleRenderTarget(L),w.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(_,y,I),ie.resetDefaultState(),E=-1,M=null,S.pop(),S.length>0?(f=S[S.length-1],it===!0&&tt.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Ir(y,I,B,z){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Y.intersectsSprite(y)){z&&Dt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Rt);const dt=q.update(y),Et=y.material;Et.visible&&m.push(y,dt,Et,B,Dt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Y.intersectsObject(y))){const dt=q.update(y),Et=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Dt.copy(y.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Dt.copy(dt.boundingSphere.center)),Dt.applyMatrix4(y.matrixWorld).applyMatrix4(Rt)),Array.isArray(Et)){const bt=dt.groups;for(let Ft=0,kt=bt.length;Ft<kt;Ft++){const wt=bt[Ft],$t=Et[wt.materialIndex];$t&&$t.visible&&m.push(y,dt,$t,B,Dt.z,wt)}}else Et.visible&&m.push(y,dt,Et,B,Dt.z,null)}}const st=y.children;for(let dt=0,Et=st.length;dt<Et;dt++)Ir(st[dt],I,B,z)}function Ja(y,I,B,z){const U=y.opaque,st=y.transmissive,dt=y.transparent;f.setupLightsView(B),it===!0&&tt.setGlobalState(_.clippingPlanes,B),z&&ot.viewport(P.copy(z)),U.length>0&&Rs(U,I,B),st.length>0&&Rs(st,I,B),dt.length>0&&Rs(dt,I,B),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function Qa(y,I,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new ni(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?bs:yn,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const st=f.state.transmissionRenderTarget[z.id],dt=z.viewport||P;st.setSize(dt.z,dt.w);const Et=_.getRenderTarget();_.setRenderTarget(st),_.getClearColor(W),Z=_.getClearAlpha(),Z<1&&_.setClearColor(16777215,.5),_.clear(),K&&Pt.render(B);const bt=_.toneMapping;_.toneMapping=Nn;const Ft=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),it===!0&&tt.setGlobalState(_.clippingPlanes,z),Rs(y,B,z),w.updateMultisampleRenderTarget(st),w.updateRenderTargetMipmap(st),Q.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let wt=0,$t=I.length;wt<$t;wt++){const se=I[wt],re=se.object,De=se.geometry,jt=se.material,At=se.group;if(jt.side===_n&&re.layers.test(z.layers)){const hn=jt.side;jt.side=Ie,jt.needsUpdate=!0,tc(re,B,z,De,jt,At),jt.side=hn,jt.needsUpdate=!0,kt=!0}}kt===!0&&(w.updateMultisampleRenderTarget(st),w.updateRenderTargetMipmap(st))}_.setRenderTarget(Et),_.setClearColor(W,Z),Ft!==void 0&&(z.viewport=Ft),_.toneMapping=bt}function Rs(y,I,B){const z=I.isScene===!0?I.overrideMaterial:null;for(let U=0,st=y.length;U<st;U++){const dt=y[U],Et=dt.object,bt=dt.geometry,Ft=z===null?dt.material:z,kt=dt.group;Et.layers.test(B.layers)&&tc(Et,I,B,bt,Ft,kt)}}function tc(y,I,B,z,U,st){y.onBeforeRender(_,I,B,z,U,st),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(_,I,B,z,y,st),U.transparent===!0&&U.side===_n&&U.forceSinglePass===!1?(U.side=Ie,U.needsUpdate=!0,_.renderBufferDirect(B,I,z,U,y,st),U.side=on,U.needsUpdate=!0,_.renderBufferDirect(B,I,z,U,y,st),U.side=_n):_.renderBufferDirect(B,I,z,U,y,st),y.onAfterRender(_,I,B,z,U,st)}function Cs(y,I,B){I.isScene!==!0&&(I=Yt);const z=mt.get(y),U=f.state.lights,st=f.state.shadowsArray,dt=U.state.version,Et=St.getParameters(y,U.state,st,I,B),bt=St.getProgramCacheKey(Et);let Ft=z.programs;z.environment=y.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(y.isMeshStandardMaterial?F:v).get(y.envMap||z.environment),z.envMapRotation=z.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Ft===void 0&&(y.addEventListener("dispose",zt),Ft=new Map,z.programs=Ft);let kt=Ft.get(bt);if(kt!==void 0){if(z.currentProgram===kt&&z.lightsStateVersion===dt)return nc(y,Et),kt}else Et.uniforms=St.getUniforms(y),y.onBeforeCompile(Et,_),kt=St.acquireProgram(Et,bt),Ft.set(bt,kt),z.uniforms=Et.uniforms;const wt=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(wt.clippingPlanes=tt.uniform),nc(y,Et),z.needsLights=Nh(y),z.lightsStateVersion=dt,z.needsLights&&(wt.ambientLightColor.value=U.state.ambient,wt.lightProbe.value=U.state.probe,wt.directionalLights.value=U.state.directional,wt.directionalLightShadows.value=U.state.directionalShadow,wt.spotLights.value=U.state.spot,wt.spotLightShadows.value=U.state.spotShadow,wt.rectAreaLights.value=U.state.rectArea,wt.ltc_1.value=U.state.rectAreaLTC1,wt.ltc_2.value=U.state.rectAreaLTC2,wt.pointLights.value=U.state.point,wt.pointLightShadows.value=U.state.pointShadow,wt.hemisphereLights.value=U.state.hemi,wt.directionalShadowMap.value=U.state.directionalShadowMap,wt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,wt.spotShadowMap.value=U.state.spotShadowMap,wt.spotLightMatrix.value=U.state.spotLightMatrix,wt.spotLightMap.value=U.state.spotLightMap,wt.pointShadowMap.value=U.state.pointShadowMap,wt.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=kt,z.uniformsList=null,kt}function ec(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=fr.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function nc(y,I){const B=mt.get(y);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function Ih(y,I,B,z,U){I.isScene!==!0&&(I=Yt),w.resetTextureUnits();const st=I.fog,dt=z.isMeshStandardMaterial?I.environment:null,Et=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Xi,bt=(z.isMeshStandardMaterial?F:v).get(z.envMap||dt),Ft=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,kt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),wt=!!B.morphAttributes.position,$t=!!B.morphAttributes.normal,se=!!B.morphAttributes.color;let re=Nn;z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(re=_.toneMapping);const De=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,jt=De!==void 0?De.length:0,At=mt.get(z),hn=f.state.lights;if(it===!0&&(yt===!0||y!==M)){const ze=y===M&&z.id===E;tt.setState(z,y,ze)}let Jt=!1;z.version===At.__version?(At.needsLights&&At.lightsStateVersion!==hn.state.version||At.outputColorSpace!==Et||U.isBatchedMesh&&At.batching===!1||!U.isBatchedMesh&&At.batching===!0||U.isBatchedMesh&&At.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&At.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&At.instancing===!1||!U.isInstancedMesh&&At.instancing===!0||U.isSkinnedMesh&&At.skinning===!1||!U.isSkinnedMesh&&At.skinning===!0||U.isInstancedMesh&&At.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&At.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&At.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&At.instancingMorph===!1&&U.morphTexture!==null||At.envMap!==bt||z.fog===!0&&At.fog!==st||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==tt.numPlanes||At.numIntersection!==tt.numIntersection)||At.vertexAlphas!==Ft||At.vertexTangents!==kt||At.morphTargets!==wt||At.morphNormals!==$t||At.morphColors!==se||At.toneMapping!==re||At.morphTargetsCount!==jt)&&(Jt=!0):(Jt=!0,At.__version=z.version);let We=At.currentProgram;Jt===!0&&(We=Cs(z,I,U));let li=!1,Ue=!1,$i=!1;const oe=We.getUniforms(),tn=At.uniforms;if(ot.useProgram(We.program)&&(li=!0,Ue=!0,$i=!0),z.id!==E&&(E=z.id,Ue=!0),li||M!==y){ot.buffers.depth.getReversed()?(rt.copy(y.projectionMatrix),Hu(rt),Vu(rt),oe.setValue(A,"projectionMatrix",rt)):oe.setValue(A,"projectionMatrix",y.projectionMatrix),oe.setValue(A,"viewMatrix",y.matrixWorldInverse);const bn=oe.map.cameraPosition;bn!==void 0&&bn.setValue(A,Nt.setFromMatrixPosition(y.matrixWorld)),_t.logarithmicDepthBuffer&&oe.setValue(A,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&oe.setValue(A,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Ue=!0,$i=!0)}if(U.isSkinnedMesh){oe.setOptional(A,U,"bindMatrix"),oe.setOptional(A,U,"bindMatrixInverse");const ze=U.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),oe.setValue(A,"boneTexture",ze.boneTexture,w))}U.isBatchedMesh&&(oe.setOptional(A,U,"batchingTexture"),oe.setValue(A,"batchingTexture",U._matricesTexture,w),oe.setOptional(A,U,"batchingIdTexture"),oe.setValue(A,"batchingIdTexture",U._indirectTexture,w),oe.setOptional(A,U,"batchingColorTexture"),U._colorsTexture!==null&&oe.setValue(A,"batchingColorTexture",U._colorsTexture,w));const Ki=B.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&Ut.update(U,B,We),(Ue||At.receiveShadow!==U.receiveShadow)&&(At.receiveShadow=U.receiveShadow,oe.setValue(A,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(tn.envMap.value=bt,tn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(tn.envMapIntensity.value=I.environmentIntensity),Ue&&(oe.setValue(A,"toneMappingExposure",_.toneMappingExposure),At.needsLights&&Uh(tn,$i),st&&z.fog===!0&&lt.refreshFogUniforms(tn,st),lt.refreshMaterialUniforms(tn,z,H,j,f.state.transmissionRenderTarget[y.id]),fr.upload(A,ec(At),tn,w)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(fr.upload(A,ec(At),tn,w),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&oe.setValue(A,"center",U.center),oe.setValue(A,"modelViewMatrix",U.modelViewMatrix),oe.setValue(A,"normalMatrix",U.normalMatrix),oe.setValue(A,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const ze=z.uniformsGroups;for(let bn=0,wn=ze.length;bn<wn;bn++){const ic=ze[bn];D.update(ic,We),D.bind(ic,We)}}return We}function Uh(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Nh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,I,B){mt.get(y.texture).__webglTexture=I,mt.get(y.depthTexture).__webglTexture=B;const z=mt.get(y);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,I){const B=mt.get(y);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,B=0){L=y,C=I,R=B;let z=!0,U=null,st=!1,dt=!1;if(y){const bt=mt.get(y);if(bt.__useDefaultFramebuffer!==void 0)ot.bindFramebuffer(A.FRAMEBUFFER,null),z=!1;else if(bt.__webglFramebuffer===void 0)w.setupRenderTarget(y);else if(bt.__hasExternalTextures)w.rebindTextures(y,mt.get(y.texture).__webglTexture,mt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const wt=y.depthTexture;if(bt.__boundDepthTexture!==wt){if(wt!==null&&mt.has(wt)&&(y.width!==wt.image.width||y.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(y)}}const Ft=y.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(dt=!0);const kt=mt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(kt[I])?U=kt[I][B]:U=kt[I],st=!0):y.samples>0&&w.useMultisampledRTT(y)===!1?U=mt.get(y).__webglMultisampledFramebuffer:Array.isArray(kt)?U=kt[B]:U=kt,P.copy(y.viewport),k.copy(y.scissor),O=y.scissorTest}else P.copy(Mt).multiplyScalar(H).floor(),k.copy(Bt).multiplyScalar(H).floor(),O=Kt;if(ot.bindFramebuffer(A.FRAMEBUFFER,U)&&z&&ot.drawBuffers(y,U),ot.viewport(P),ot.scissor(k),ot.setScissorTest(O),st){const bt=mt.get(y.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+I,bt.__webglTexture,B)}else if(dt){const bt=mt.get(y.texture),Ft=I||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,bt.__webglTexture,B||0,Ft)}E=-1},this.readRenderTargetPixels=function(y,I,B,z,U,st,dt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&dt!==void 0&&(Et=Et[dt]),Et){ot.bindFramebuffer(A.FRAMEBUFFER,Et);try{const bt=y.texture,Ft=bt.format,kt=bt.type;if(!_t.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-z&&B>=0&&B<=y.height-U&&A.readPixels(I,B,z,U,Vt.convert(Ft),Vt.convert(kt),st)}finally{const bt=L!==null?mt.get(L).__webglFramebuffer:null;ot.bindFramebuffer(A.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(y,I,B,z,U,st,dt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&dt!==void 0&&(Et=Et[dt]),Et){const bt=y.texture,Ft=bt.format,kt=bt.type;if(!_t.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=y.width-z&&B>=0&&B<=y.height-U){ot.bindFramebuffer(A.FRAMEBUFFER,Et);const wt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,wt),A.bufferData(A.PIXEL_PACK_BUFFER,st.byteLength,A.STREAM_READ),A.readPixels(I,B,z,U,Vt.convert(Ft),Vt.convert(kt),0);const $t=L!==null?mt.get(L).__webglFramebuffer:null;ot.bindFramebuffer(A.FRAMEBUFFER,$t);const se=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await ku(A,se,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,wt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,st),A.deleteBuffer(wt),A.deleteSync(se),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,I=null,B=0){y.isTexture!==!0&&(cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,y=arguments[1]);const z=Math.pow(2,-B),U=Math.floor(y.image.width*z),st=Math.floor(y.image.height*z),dt=I!==null?I.x:0,Et=I!==null?I.y:0;w.setTexture2D(y,0),A.copyTexSubImage2D(A.TEXTURE_2D,B,0,0,dt,Et,U,st),ot.unbindTexture()},this.copyTextureToTexture=function(y,I,B=null,z=null,U=0){y.isTexture!==!0&&(cs("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,y=arguments[1],I=arguments[2],U=arguments[3]||0,B=null);let st,dt,Et,bt,Ft,kt,wt,$t,se;const re=y.isCompressedTexture?y.mipmaps[U]:y.image;B!==null?(st=B.max.x-B.min.x,dt=B.max.y-B.min.y,Et=B.isBox3?B.max.z-B.min.z:1,bt=B.min.x,Ft=B.min.y,kt=B.isBox3?B.min.z:0):(st=re.width,dt=re.height,Et=re.depth||1,bt=0,Ft=0,kt=0),z!==null?(wt=z.x,$t=z.y,se=z.z):(wt=0,$t=0,se=0);const De=Vt.convert(I.format),jt=Vt.convert(I.type);let At;I.isData3DTexture?(w.setTexture3D(I,0),At=A.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(w.setTexture2DArray(I,0),At=A.TEXTURE_2D_ARRAY):(w.setTexture2D(I,0),At=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,I.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,I.unpackAlignment);const hn=A.getParameter(A.UNPACK_ROW_LENGTH),Jt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),We=A.getParameter(A.UNPACK_SKIP_PIXELS),li=A.getParameter(A.UNPACK_SKIP_ROWS),Ue=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,re.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,re.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,bt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ft),A.pixelStorei(A.UNPACK_SKIP_IMAGES,kt);const $i=y.isDataArrayTexture||y.isData3DTexture,oe=I.isDataArrayTexture||I.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const tn=mt.get(y),Ki=mt.get(I),ze=mt.get(tn.__renderTarget),bn=mt.get(Ki.__renderTarget);ot.bindFramebuffer(A.READ_FRAMEBUFFER,ze.__webglFramebuffer),ot.bindFramebuffer(A.DRAW_FRAMEBUFFER,bn.__webglFramebuffer);for(let wn=0;wn<Et;wn++)$i&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,mt.get(y).__webglTexture,U,kt+wn),y.isDepthTexture?(oe&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,mt.get(I).__webglTexture,U,se+wn),A.blitFramebuffer(bt,Ft,st,dt,wt,$t,st,dt,A.DEPTH_BUFFER_BIT,A.NEAREST)):oe?A.copyTexSubImage3D(At,U,wt,$t,se+wn,bt,Ft,st,dt):A.copyTexSubImage2D(At,U,wt,$t,se+wn,bt,Ft,st,dt);ot.bindFramebuffer(A.READ_FRAMEBUFFER,null),ot.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else oe?y.isDataTexture||y.isData3DTexture?A.texSubImage3D(At,U,wt,$t,se,st,dt,Et,De,jt,re.data):I.isCompressedArrayTexture?A.compressedTexSubImage3D(At,U,wt,$t,se,st,dt,Et,De,re.data):A.texSubImage3D(At,U,wt,$t,se,st,dt,Et,De,jt,re):y.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,U,wt,$t,st,dt,De,jt,re.data):y.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,U,wt,$t,re.width,re.height,De,re.data):A.texSubImage2D(A.TEXTURE_2D,U,wt,$t,st,dt,De,jt,re);A.pixelStorei(A.UNPACK_ROW_LENGTH,hn),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Jt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,We),A.pixelStorei(A.UNPACK_SKIP_ROWS,li),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ue),U===0&&I.generateMipmaps&&A.generateMipmap(At),ot.unbindTexture()},this.copyTextureToTexture3D=function(y,I,B=null,z=null,U=0){return y.isTexture!==!0&&(cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,y=arguments[2],I=arguments[3],U=arguments[4]||0),cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,I,B,z,U)},this.initRenderTarget=function(y){mt.get(y).__webglFramebuffer===void 0&&w.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?w.setTextureCube(y,0):y.isData3DTexture?w.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?w.setTexture2DArray(y,0):w.setTexture2D(y,0),ot.unbindTexture()},this.resetState=function(){C=0,R=0,L=null,ot.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}class Qg extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class t_ extends Ee{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Be,h=Be,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nl extends Je{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const bi=new Xt,il=new Xt,js=[],sl=new ai,e_=new Xt,es=new Ot,ns=new On;class ha extends Ot{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new nl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,e_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),sl.copy(t.boundingBox).applyMatrix4(bi),this.boundingBox.union(sl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),ns.copy(t.boundingSphere).applyMatrix4(bi),this.boundingSphere.union(ns)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(es.geometry=this.geometry,es.material=this.material,es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ns.copy(this.boundingSphere),ns.applyMatrix4(n),t.ray.intersectsSphere(ns)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,bi),il.multiplyMatrices(n,bi),es.matrixWorld=il,es.raycast(t,js);for(let o=0,a=js.length;o<a;o++){const c=js[o];c.instanceId=r,c.object=this,e.push(c)}js.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new nl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new t_(new Float32Array(s*this.count),s,this.count,ya,rn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ra extends Ee{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new nt:new T);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new T,s=[],r=[],o=[],a=new T,c=new Xt;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ge(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(ge(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ca extends cn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new nt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class n_ extends Ca{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Pa(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Js=new T,co=new Pa,lo=new Pa,ho=new Pa;class i_ extends cn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Js.subVectors(s[0],s[1]).add(s[0]),l=Js);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Js.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Js),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),co.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,m),lo.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,m),ho.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(co.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),lo.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ho.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(co.calc(c),lo.calc(c),ho.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function rl(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function s_(i,t){const e=1-i;return e*e*t}function r_(i,t){return 2*(1-i)*i*t}function o_(i,t){return i*i*t}function fs(i,t,e,n){return s_(i,t)+r_(i,e)+o_(i,n)}function a_(i,t){const e=1-i;return e*e*e*t}function c_(i,t){const e=1-i;return 3*e*e*i*t}function l_(i,t){return 3*(1-i)*i*i*t}function h_(i,t){return i*i*i*t}function ps(i,t,e,n,s){return a_(i,t)+c_(i,e)+l_(i,n)+h_(i,s)}class lh extends cn{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ps(t,s.x,r.x,o.x,a.x),ps(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class u_ extends cn{constructor(t=new T,e=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new T){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ps(t,s.x,r.x,o.x,a.x),ps(t,s.y,r.y,o.y,a.y),ps(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hh extends cn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class d_ extends cn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uh extends cn{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(fs(t,s.x,r.x,o.x),fs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class f_ extends cn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(fs(t,s.x,r.x,o.x),fs(t,s.y,r.y,o.y),fs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dh extends cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(rl(a,c.x,l.x,h.x,u.x),rl(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new nt().fromArray(s))}return this}}var ua=Object.freeze({__proto__:null,ArcCurve:n_,CatmullRomCurve3:i_,CubicBezierCurve:lh,CubicBezierCurve3:u_,EllipseCurve:Ca,LineCurve:hh,LineCurve3:d_,QuadraticBezierCurve:uh,QuadraticBezierCurve3:f_,SplineCurve:dh});class p_ extends cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ua[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ua[s.type]().fromJSON(s))}return this}}class ol extends p_{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new hh(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new uh(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new lh(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new dh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Ca(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Tr extends Le{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new T,h=new nt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ii extends Le{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const x=[],m=n/2;let f=0;b(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(p,2));function b(){const _=new T,N=new T;let C=0;const R=(e-t)/n;for(let L=0;L<=r;L++){const E=[],M=L/r,P=M*(e-t)+t;for(let k=0;k<=s;k++){const O=k/s,W=O*c+a,Z=Math.sin(W),G=Math.cos(W);N.x=P*Z,N.y=-M*n+m,N.z=P*G,u.push(N.x,N.y,N.z),_.set(Z,R,G).normalize(),d.push(_.x,_.y,_.z),p.push(O,1-M),E.push(g++)}x.push(E)}for(let L=0;L<s;L++)for(let E=0;E<r;E++){const M=x[E][L],P=x[E+1][L],k=x[E+1][L+1],O=x[E][L+1];(t>0||E!==0)&&(h.push(M,P,O),C+=3),(e>0||E!==r-1)&&(h.push(P,k,O),C+=3)}l.addGroup(f,C,0),f+=C}function S(_){const N=g,C=new nt,R=new T;let L=0;const E=_===!0?t:e,M=_===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const P=g;for(let k=0;k<=s;k++){const W=k/s*c+a,Z=Math.cos(W),G=Math.sin(W);R.x=E*G,R.y=m*M,R.z=E*Z,u.push(R.x,R.y,R.z),d.push(0,M,0),C.x=Z*.5+.5,C.y=G*.5*M+.5,p.push(C.x,C.y),g++}for(let k=0;k<s;k++){const O=N+k,W=P+k;_===!0?h.push(W,W+1,O):h.push(W+1,W,O),L+=3}l.addGroup(f,L,_===!0?1:2),f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class La extends ii{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new La(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Da extends Le{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const S=new T,_=new T,N=new T;for(let C=0;C<e.length;C+=3)p(e[C+0],S),p(e[C+1],_),p(e[C+2],N),c(S,_,N,b)}function c(b,S,_,N){const C=N+1,R=[];for(let L=0;L<=C;L++){R[L]=[];const E=b.clone().lerp(_,L/C),M=S.clone().lerp(_,L/C),P=C-L;for(let k=0;k<=P;k++)k===0&&L===C?R[L][k]=E:R[L][k]=E.clone().lerp(M,k/P)}for(let L=0;L<C;L++)for(let E=0;E<2*(C-L)-1;E++){const M=Math.floor(E/2);E%2===0?(d(R[L][M+1]),d(R[L+1][M]),d(R[L][M])):(d(R[L][M+1]),d(R[L+1][M+1]),d(R[L+1][M]))}}function l(b){const S=new T;for(let _=0;_<r.length;_+=3)S.x=r[_+0],S.y=r[_+1],S.z=r[_+2],S.normalize().multiplyScalar(b),r[_+0]=S.x,r[_+1]=S.y,r[_+2]=S.z}function h(){const b=new T;for(let S=0;S<r.length;S+=3){b.x=r[S+0],b.y=r[S+1],b.z=r[S+2];const _=m(b)/2/Math.PI+.5,N=f(b)/Math.PI+.5;o.push(_,1-N)}g(),u()}function u(){for(let b=0;b<o.length;b+=6){const S=o[b+0],_=o[b+2],N=o[b+4],C=Math.max(S,_,N),R=Math.min(S,_,N);C>.9&&R<.1&&(S<.2&&(o[b+0]+=1),_<.2&&(o[b+2]+=1),N<.2&&(o[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function p(b,S){const _=b*3;S.x=t[_+0],S.y=t[_+1],S.z=t[_+2]}function g(){const b=new T,S=new T,_=new T,N=new T,C=new nt,R=new nt,L=new nt;for(let E=0,M=0;E<r.length;E+=9,M+=6){b.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),C.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),N.copy(b).add(S).add(_).divideScalar(3);const P=m(N);x(C,M+0,b,P),x(R,M+2,S,P),x(L,M+4,_,P)}}function x(b,S,_,N){N<0&&b.x===1&&(o[S]=b.x-1),_.x===0&&_.z===0&&(o[S]=N/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Da(t.vertices,t.indices,t.radius,t.details)}}class Ia extends ol{constructor(t){super(t),this.uuid=oi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new ol().fromJSON(s))}return this}}const m_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=fh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,p;if(n&&(r=M_(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return xs(r,o,e,a,c,p,0),o}};function fh(i,t,e,n,s){let r,o;if(s===L_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=al(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=al(r,i[r],i[r+1],o);return o&&Ar(o,o.next)&&(ys(o),o=o.next),o}function si(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ar(e,e.next)||ae(e.prev,e,e.next)===0)){if(ys(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function xs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&w_(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?__(i,n,s,r):g_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),ys(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=v_(si(i),t,e),xs(i,t,e,n,s,r,2)):o===2&&x_(i,t,e,n,s,r):xs(si(i),t,e,n,s,r,1);break}}}function g_(i){const t=i.prev,e=i,n=i.next;if(ae(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Pi(s,a,r,c,o,l,g.x,g.y)&&ae(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function __(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ae(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,p=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,f=da(p,g,t,e,n),b=da(x,m,t,e,n);let S=i.prevZ,_=i.nextZ;for(;S&&S.z>=f&&_&&_.z<=b;){if(S.x>=p&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Pi(a,h,c,u,l,d,S.x,S.y)&&ae(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Pi(a,h,c,u,l,d,_.x,_.y)&&ae(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=f;){if(S.x>=p&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Pi(a,h,c,u,l,d,S.x,S.y)&&ae(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=b;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Pi(a,h,c,u,l,d,_.x,_.y)&&ae(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function v_(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Ar(s,r)&&ph(s,n,n.next,r)&&Ms(s,r)&&Ms(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ys(n),ys(n.next),n=i=r),n=n.next}while(n!==i);return si(n)}function x_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&R_(o,a)){let c=mh(o,a);o=si(o,o.next),c=si(c,c.next),xs(o,t,e,n,s,r,0),xs(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function M_(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=fh(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(A_(l));for(s.sort(y_),r=0;r<s.length;r++)e=S_(s[r],e);return e}function y_(i,t){return i.x-t.x}function S_(i,t){const e=E_(i,t);if(!e)return t;const n=mh(e,i);return si(n,n.next),si(e,e.next)}function E_(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Pi(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ms(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&b_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function b_(i,t){return ae(i.prev,i,t.prev)<0&&ae(t.next,i,i.next)<0}function w_(i,t,e,n){let s=i;do s.z===0&&(s.z=da(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,T_(s)}function T_(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function da(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function A_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Pi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function R_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!C_(i,t)&&(Ms(i,t)&&Ms(t,i)&&P_(i,t)&&(ae(i.prev,i,t.prev)||ae(i,t.prev,t))||Ar(i,t)&&ae(i.prev,i,i.next)>0&&ae(t.prev,t,t.next)>0)}function ae(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ar(i,t){return i.x===t.x&&i.y===t.y}function ph(i,t,e,n){const s=tr(ae(i,t,e)),r=tr(ae(i,t,n)),o=tr(ae(e,n,i)),a=tr(ae(e,n,t));return!!(s!==r&&o!==a||s===0&&Qs(i,e,t)||r===0&&Qs(i,n,t)||o===0&&Qs(e,i,n)||a===0&&Qs(e,t,n))}function Qs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function tr(i){return i>0?1:i<0?-1:0}function C_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ph(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ms(i,t){return ae(i.prev,i,i.next)<0?ae(i,t,i.next)>=0&&ae(i,i.prev,t)>=0:ae(i,t,i.prev)<0||ae(i,i.next,t)<0}function P_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function mh(i,t){const e=new fa(i.i,i.x,i.y),n=new fa(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function al(i,t,e,n){const s=new fa(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ys(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function fa(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function L_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class ms{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ms.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];cl(t),ll(n,t);let o=t.length;e.forEach(cl);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,ll(n,e[c]);const a=m_.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function cl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ll(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Rr extends Le{constructor(t=new Ia([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new ne(s,3)),this.setAttribute("uv",new ne(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:D_;let S,_=!1,N,C,R,L;f&&(S=f.getSpacedPoints(h),_=!0,d=!1,N=f.computeFrenetFrames(h,!1),C=new T,R=new T,L=new T),d||(m=0,p=0,g=0,x=0);const E=a.extractPoints(l);let M=E.shape;const P=E.holes;if(!ms.isClockWise(M)){M=M.reverse();for(let K=0,et=P.length;K<et;K++){const A=P[K];ms.isClockWise(A)&&(P[K]=A.reverse())}}const O=ms.triangulateShape(M,P),W=M;for(let K=0,et=P.length;K<et;K++){const A=P[K];M=M.concat(A)}function Z(K,et,A){return et||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(et,A)}const G=M.length,j=O.length;function H(K,et,A){let Tt,Q,_t;const ot=K.x-et.x,Ct=K.y-et.y,mt=A.x-K.x,w=A.y-K.y,v=ot*ot+Ct*Ct,F=ot*w-Ct*mt;if(Math.abs(F)>Number.EPSILON){const X=Math.sqrt(v),J=Math.sqrt(mt*mt+w*w),q=et.x-Ct/X,St=et.y+ot/X,lt=A.x-w/J,gt=A.y+mt/J,Wt=((lt-q)*w-(gt-St)*mt)/(ot*w-Ct*mt);Tt=q+ot*Wt-K.x,Q=St+Ct*Wt-K.y;const tt=Tt*Tt+Q*Q;if(tt<=2)return new nt(Tt,Q);_t=Math.sqrt(tt/2)}else{let X=!1;ot>Number.EPSILON?mt>Number.EPSILON&&(X=!0):ot<-Number.EPSILON?mt<-Number.EPSILON&&(X=!0):Math.sign(Ct)===Math.sign(w)&&(X=!0),X?(Tt=-Ct,Q=ot,_t=Math.sqrt(v)):(Tt=ot,Q=Ct,_t=Math.sqrt(v/2))}return new nt(Tt/_t,Q/_t)}const at=[];for(let K=0,et=W.length,A=et-1,Tt=K+1;K<et;K++,A++,Tt++)A===et&&(A=0),Tt===et&&(Tt=0),at[K]=H(W[K],W[A],W[Tt]);const pt=[];let Mt,Bt=at.concat();for(let K=0,et=P.length;K<et;K++){const A=P[K];Mt=[];for(let Tt=0,Q=A.length,_t=Q-1,ot=Tt+1;Tt<Q;Tt++,_t++,ot++)_t===Q&&(_t=0),ot===Q&&(ot=0),Mt[Tt]=H(A[Tt],A[_t],A[ot]);pt.push(Mt),Bt=Bt.concat(Mt)}for(let K=0;K<m;K++){const et=K/m,A=p*Math.cos(et*Math.PI/2),Tt=g*Math.sin(et*Math.PI/2)+x;for(let Q=0,_t=W.length;Q<_t;Q++){const ot=Z(W[Q],at[Q],Tt);rt(ot.x,ot.y,-A)}for(let Q=0,_t=P.length;Q<_t;Q++){const ot=P[Q];Mt=pt[Q];for(let Ct=0,mt=ot.length;Ct<mt;Ct++){const w=Z(ot[Ct],Mt[Ct],Tt);rt(w.x,w.y,-A)}}}const Kt=g+x;for(let K=0;K<G;K++){const et=d?Z(M[K],Bt[K],Kt):M[K];_?(R.copy(N.normals[0]).multiplyScalar(et.x),C.copy(N.binormals[0]).multiplyScalar(et.y),L.copy(S[0]).add(R).add(C),rt(L.x,L.y,L.z)):rt(et.x,et.y,0)}for(let K=1;K<=h;K++)for(let et=0;et<G;et++){const A=d?Z(M[et],Bt[et],Kt):M[et];_?(R.copy(N.normals[K]).multiplyScalar(A.x),C.copy(N.binormals[K]).multiplyScalar(A.y),L.copy(S[K]).add(R).add(C),rt(L.x,L.y,L.z)):rt(A.x,A.y,u/h*K)}for(let K=m-1;K>=0;K--){const et=K/m,A=p*Math.cos(et*Math.PI/2),Tt=g*Math.sin(et*Math.PI/2)+x;for(let Q=0,_t=W.length;Q<_t;Q++){const ot=Z(W[Q],at[Q],Tt);rt(ot.x,ot.y,u+A)}for(let Q=0,_t=P.length;Q<_t;Q++){const ot=P[Q];Mt=pt[Q];for(let Ct=0,mt=ot.length;Ct<mt;Ct++){const w=Z(ot[Ct],Mt[Ct],Tt);_?rt(w.x,w.y+S[h-1].y,S[h-1].x+A):rt(w.x,w.y,u+A)}}}Y(),it();function Y(){const K=s.length/3;if(d){let et=0,A=G*et;for(let Tt=0;Tt<j;Tt++){const Q=O[Tt];Rt(Q[2]+A,Q[1]+A,Q[0]+A)}et=h+m*2,A=G*et;for(let Tt=0;Tt<j;Tt++){const Q=O[Tt];Rt(Q[0]+A,Q[1]+A,Q[2]+A)}}else{for(let et=0;et<j;et++){const A=O[et];Rt(A[2],A[1],A[0])}for(let et=0;et<j;et++){const A=O[et];Rt(A[0]+G*h,A[1]+G*h,A[2]+G*h)}}n.addGroup(K,s.length/3-K,0)}function it(){const K=s.length/3;let et=0;yt(W,et),et+=W.length;for(let A=0,Tt=P.length;A<Tt;A++){const Q=P[A];yt(Q,et),et+=Q.length}n.addGroup(K,s.length/3-K,1)}function yt(K,et){let A=K.length;for(;--A>=0;){const Tt=A;let Q=A-1;Q<0&&(Q=K.length-1);for(let _t=0,ot=h+m*2;_t<ot;_t++){const Ct=G*_t,mt=G*(_t+1),w=et+Tt+Ct,v=et+Q+Ct,F=et+Q+mt,X=et+Tt+mt;Nt(w,v,F,X)}}}function rt(K,et,A){c.push(K),c.push(et),c.push(A)}function Rt(K,et,A){Dt(K),Dt(et),Dt(A);const Tt=s.length/3,Q=b.generateTopUV(n,s,Tt-3,Tt-2,Tt-1);Yt(Q[0]),Yt(Q[1]),Yt(Q[2])}function Nt(K,et,A,Tt){Dt(K),Dt(et),Dt(Tt),Dt(et),Dt(A),Dt(Tt);const Q=s.length/3,_t=b.generateSideWallUV(n,s,Q-6,Q-3,Q-2,Q-1);Yt(_t[0]),Yt(_t[1]),Yt(_t[3]),Yt(_t[1]),Yt(_t[2]),Yt(_t[3])}function Dt(K){s.push(c[K*3+0]),s.push(c[K*3+1]),s.push(c[K*3+2])}function Yt(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return I_(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ua[s.type]().fromJSON(s)),new Rr(n,t.options)}}const D_={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new nt(r,o),new nt(a,c),new nt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new nt(o,1-c),new nt(l,1-u),new nt(d,1-g),new nt(x,1-f)]:[new nt(a,1-c),new nt(h,1-u),new nt(p,1-g),new nt(m,1-f)]}};function I_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Cr extends Da{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Cr(t.radius,t.detail)}}class Pr extends Le{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,p=new T,g=new nt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){const m=x*(n+1);for(let f=0;f<n;f++){const b=f+m,S=b,_=b+n+1,N=b+n+2,C=b+1;a.push(S,_,C),a.push(_,N,C)}}this.setIndex(a),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ti extends Le{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new T,d=new T,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){const b=[],S=f/n;let _=0;f===0&&o===0?_=.5/e:f===n&&c===Math.PI&&(_=-.5/e);for(let N=0;N<=e;N++){const C=N/e;u.x=-t*Math.cos(s+C*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(s+C*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(C+_,1-S),b.push(l++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<e;b++){const S=h[f][b+1],_=h[f][b],N=h[f+1][b],C=h[f+1][b+1];(f!==0||o>0)&&p.push(S,_,C),(f!==n-1||c<Math.PI)&&p.push(_,N,C)}this.setIndex(p),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ti(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ua extends Le{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new T,u=new T,d=new T;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const x=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,b=(s+1)*p+g;o.push(x,m,b),o.push(m,f,b)}this.setIndex(o),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ua(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Na extends ws{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gl,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class U_ extends Na{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new It(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new It(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new It(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class gh extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class N_ extends gh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const uo=new Xt,hl=new T,ul=new T;class F_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ta,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;hl.setFromMatrixPosition(t.matrixWorld),e.position.copy(hl),ul.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ul),e.updateMatrixWorld(),uo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class O_ extends F_{constructor(){super(new ih(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class B_ extends gh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new O_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_a}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_a);const _h=1,Fa=2,vh=3,xh=4,Mh=5,dl=10,z_=8,k_=100,H_=101,Oa=2,Vi=16,fl=456,nn=21,V_=1,G_=2,W_=4,Ba={pinch:!0,grab:!0,palm:!0};function X_(i){return{pinch:(i&V_)!==0,grab:(i&G_)!==0,palm:(i&W_)!==0}}const q_=["starting","running","needs-setup","device-missing","failed"];function Y_(i){return{type:i.getUint8(0),version:i.getUint8(1),seq:i.getUint32(4,!0),hostTimeMs:i.getFloat64(8,!0)}}function He(i,t){return[i.getFloat32(t,!0),i.getFloat32(t+4,!0),i.getFloat32(t+8,!0)]}function Z_(i){if(i.byteLength<Vi)return null;const t=new DataView(i),e=Y_(t),n=Vi;if(e.type===_h)return i.byteLength<n+28?null:{...e,left:He(t,n),right:He(t,n+12),stale:t.getUint8(n+24)===1};if(e.type===Fa){if(i.byteLength<n+16)return null;const s=t.getUint8(n+12);if(i.byteLength<n+16+s*fl)return null;const r=[];for(let a=0;a<s;a++){const c=n+16+a*fl,l=[],h=[];for(let d=0;d<nn;d++)l.push(He(t,c+12+d*16)),h.push(t.getFloat32(c+12+d*16+12,!0));const u=c+12+nn*16;r.push({id:t.getInt32(c,!0),handedness:t.getInt8(c+4),grabbing:(t.getUint8(c+5)&1)===1,pinch:[t.getUint8(c+6)===1,t.getUint8(c+7)===1,t.getUint8(c+8)===1,t.getUint8(c+9)===1],keypoints:l,scores:h,pinchPositions:[He(t,u),He(t,u+12),He(t,u+24),He(t,u+36)],grabPosition:He(t,u+48),palm:[He(t,u+60),He(t,u+72),He(t,u+84),He(t,u+96)]})}const o=e.version>=2?X_(t.getUint8(n+13)):{...Ba};return{...e,captureTimeMs:t.getFloat64(n,!0),trackingHz:t.getFloat32(n+8,!0),capabilities:o,hands:r}}if(e.type===xh)return i.byteLength<n+6?null:{...e,stereo:t.getUint8(n)===1,switchable:t.getUint8(n+1)===1,width:t.getUint16(n+2,!0),height:t.getUint16(n+4,!0)};if(e.type===vh){if(i.byteLength<n+10)return null;const s=t.getUint16(n+8,!0),r=new TextDecoder().decode(new Uint8Array(i,n+10,Math.min(s,i.byteLength-n-10)));return{...e,state:q_[t.getUint8(n)]??"failed",trackingHz:t.getFloat32(n+4,!0),text:r}}if(e.type===Mh){let s;try{s=JSON.parse(new TextDecoder().decode(new Uint8Array(i,n)))}catch{return null}const r=s??{},o=r.params&&typeof r.params=="object"&&!Array.isArray(r.params)?r.params:{};return{...e,name:typeof r.name=="string"?r.name:"",params:o}}if(e.type>=dl&&e.type<dl+z_&&e.version>=2){if(i.byteLength<n+12)return null;const s=t.getUint8(n+1)===2?"rgb8":"y8",r=t.getUint8(n+2),o=t.getUint8(n+3),a=t.getUint16(n+4,!0),c=t.getUint16(n+6,!0);let l=n+12;const h=a*c*(s==="rgb8"?3:1);if(i.byteLength<l+o+r*20+h)return null;const u=new TextDecoder().decode(new Uint8Array(i,l,o));l+=o;const d=[];for(let p=0;p<r;p++,l+=20)d.push([t.getFloat32(l,!0),t.getFloat32(l+4,!0),t.getFloat32(l+8,!0),t.getFloat32(l+12,!0),t.getFloat32(l+16,!0)]);return{...e,stream:t.getUint8(n),format:s,label:u,width:a,height:c,fullWidth:t.getUint16(n+8,!0),fullHeight:t.getUint16(n+10,!0),boxes:d,pixels:new Uint8Array(i,l,h)}}return null}function $_(i,t){const e=new ArrayBuffer(Vi+1),n=new DataView(e);return n.setUint8(0,H_),n.setUint8(1,Oa),n.setFloat64(8,i,!0),n.setUint8(Vi,t?1:0),e}const K_=24;function j_(i,t,e){const n=new ArrayBuffer(Vi+K_),s=new DataView(n),r=Vi;return s.setUint8(0,k_),s.setUint8(1,Oa),s.setFloat64(8,i,!0),s.setFloat64(r,t,!0),s.setFloat32(r+8,e.fps,!0),s.setFloat32(r+12,e.frameMs,!0),s.setFloat32(r+16,e.latencyMs??Number.NaN,!0),s.setUint16(r+20,Math.max(0,Math.min(65535,Math.round(e.eyeWidth))),!0),s.setUint16(r+22,Math.max(0,Math.min(65535,Math.round(e.eyeHeight))),!0),n}const pl=1,ml=250,J_=4e3;class Q_{constructor(t,e={}){this.eyes=null,this.hands=null,this.status=null,this.view=null,this.platform=null,this.connected=!1,this.counts={eyes:0,hands:0,status:0,view:0,platform:0},this.socket=null,this.closed=!1,this.retryMs=ml,this.retryHandle=null,this.listeners={eyes:new Set,hands:new Set,status:new Set,view:new Set,platform:new Set},this.host=t,this.createSocket=e.createSocket??(n=>new WebSocket(n)),this.pageNow=e.pageNow??(()=>performance.now()),this.setTimer=e.setTimeout??((n,s)=>setTimeout(n,s)),this.clearTimer=e.clearTimeout??(n=>clearTimeout(n)),this.connect()}onEyes(t){return this.listeners.eyes.add(t),()=>this.listeners.eyes.delete(t)}onHands(t){return this.listeners.hands.add(t),()=>this.listeners.hands.delete(t)}onPlatform(t){return this.listeners.platform.add(t),()=>this.listeners.platform.delete(t)}onStatus(t){return this.listeners.status.add(t),()=>this.listeners.status.delete(t)}onView(t){return this.listeners.view.add(t),()=>this.listeners.view.delete(t)}hostToPage(t){return t-(this.host.hostNow()-this.pageNow())}sendHeartbeat(t){!this.socket||this.socket.readyState!==pl||this.socket.send(j_(this.host.hostNow(),this.pageNow(),t))}sendSetView(t){return!this.socket||this.socket.readyState!==pl?!1:(this.socket.send($_(this.host.hostNow(),t)),!0)}close(){var t;this.closed=!0,this.retryHandle&&this.clearTimer(this.retryHandle),(t=this.socket)==null||t.close(),this.socket=null,this.connected=!1}connect(){if(this.closed)return;const t=this.createSocket(this.host.channel.url);this.socket=t,t.binaryType="arraybuffer",t.onopen=()=>{this.connected=!0,this.retryMs=ml},t.onmessage=e=>{e.data instanceof ArrayBuffer&&this.handle(e.data)},t.onerror=()=>{},t.onclose=()=>{this.connected=!1,!(this.socket!==t||this.closed)&&(this.socket=null,this.retryHandle=this.setTimer(()=>this.connect(),this.retryMs),this.retryMs=Math.min(this.retryMs*2,J_))}}handle(t){const e=Z_(t);if(e){if(e.type===_h){this.eyes=e,this.counts.eyes++;for(const n of this.listeners.eyes)n(this.eyes)}else if(e.type===Fa){this.hands=e,this.counts.hands++;for(const n of this.listeners.hands)n(this.hands)}else if(e.type===vh){this.status=e,this.counts.status++;for(const n of this.listeners.status)n(this.status)}else if(e.type===xh){this.view=e,this.counts.view++;for(const n of this.listeners.view)n(this.view)}else if(e.type===Mh){this.platform=e,this.counts.platform++;for(const n of this.listeners.platform)n(this.platform)}}}}const gl=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]],is=2,t0={jointDiameterM:.015,boneDiameterM:.015,jointColor:new It(0,.541,1),boneColor:new It(0,.482,1),opacity:.333,pinchDiameterM:.03};class e0 extends Re{constructor(t={}){super(),this.pinchSpheres=[],this.m=new Xt,this.q=new ve,this.s=new T,this.up=new T(0,1,0),this.name="xrb-hands",this.style={...t0,...t};const e=(n,s)=>new Na({color:n,transparent:!0,opacity:this.style.opacity,roughness:s,metalness:0,depthWrite:!1});this.joints=new ha(new ti(.5,16,12),e(this.style.jointColor,.5),is*21),this.bones=new ha(new ii(.5,.5,1,12,1,!0),e(this.style.boneColor,.1),is*gl.length);for(const n of[this.joints,this.bones])n.frustumCulled=!1,n.renderOrder=20;for(let n=0;n<is;n++){const s=new Ot(new ti(.5,20,14),new Ve({color:"#ffffff",transparent:!0,opacity:.9}));s.visible=!1,s.renderOrder=21,this.pinchSpheres.push(s)}this.add(this.joints,this.bones,...this.pinchSpheres)}update(t,e){const n=e.scale,s=this.style.jointDiameterM*n,r=this.style.boneDiameterM*n,o=t.slice(0,is);let a=0,c=0;o.forEach((l,h)=>{const u=l.keypoints.map(p=>e.pointToWorld(p,new T));for(const p of u)this.joints.setMatrixAt(a++,this.m.compose(p,this.q.identity(),this.s.setScalar(s)));for(const[p,g]of gl){const x=u[g].clone().sub(u[p]),m=x.length();if(m<1e-6)continue;this.q.setFromUnitVectors(this.up,x.divideScalar(m));const f=u[p].clone().add(u[g]).multiplyScalar(.5);this.bones.setMatrixAt(c++,this.m.compose(f,this.q,this.s.set(r,m,r)))}const d=this.pinchSpheres[h];d.visible=this.style.pinchDiameterM>0&&(l.pinching||l.grabbing),d.visible&&(d.position.copy(u[4]).add(u[8]).multiplyScalar(.5),d.scale.setScalar(this.style.pinchDiameterM*n))});for(let l=o.length;l<is;l++)this.pinchSpheres[l].visible=!1;this.joints.count=a,this.bones.count=c,this.joints.instanceMatrix.needsUpdate=!0,this.bones.instanceMatrix.needsUpdate=!0,this.visible=o.length>0}}const n0={minCutoff:1.5,beta:4,dCutoff:1},_l=(i,t)=>1/(1+1/(2*Math.PI*i)/t);class yh{constructor(t=n0){this.value=0,this.velocity=0,this.lastT=-1,this.p=t}filter(t,e){if(this.lastT<0)return this.value=t,this.velocity=0,this.lastT=e,t;const n=Math.max((e-this.lastT)/1e3,1e-4);this.lastT=e;const s=(t-this.value)/n;this.velocity+=_l(this.p.dCutoff,n)*(s-this.velocity);const r=this.p.minCutoff+this.p.beta*Math.abs(this.velocity);return this.value+=_l(r,n)*(t-this.value),this.value}}const ee={WRIST:0,THUMB_TIP:4,INDEX_MCP:5,INDEX_TIP:8,MIDDLE_MCP:9,MIDDLE_TIP:12,RING_MCP:13,RING_TIP:16,PINKY_MCP:17,PINKY_TIP:20},i0={smoothing:{minCutoff:1.5,beta:40,dCutoff:3},prediction:!0,maxPredictionMs:50,predictionVelocity:"window",velocityCutoffHz:8,predictionMinSpeed:.05,graceMs:400,pinchEnterM:.0275,pinchExitM:.0325,pinchEnterFrames:2,pinchExitFrames:2,pinchOpenM:.08,nativePinch:!1,grabEnterCurl:.45,grabExitCurl:.55,grabEnterFrames:2,grabExitFrames:2,nativeGrab:!0},Mr=(i,t)=>Math.hypot(i[0]-t[0],i[1]-t[1],i[2]-t[2]),ss=i=>Array.from({length:i},()=>[0,0,0]);function s0(i){const t=[ee.WRIST,ee.INDEX_MCP,ee.MIDDLE_MCP,ee.RING_MCP,ee.PINKY_MCP],e=[0,1,2].map(s=>t.reduce((r,o)=>r+i[o][s],0)/t.length),n=Mr(i[ee.WRIST],i[ee.MIDDLE_MCP]);return n<=1e-6?1/0:[ee.INDEX_TIP,ee.MIDDLE_TIP,ee.RING_TIP,ee.PINKY_TIP].reduce((s,r)=>s+Mr(i[r],e),0)/4/n}function r0(i){return i.scores.filter(t=>t>0).length*2>=nn}class o0{constructor(t={}){this.tracks=new Map,this.listeners=new Set,this.newestCapture=-1/0;const e=Object.fromEntries(Object.entries(t).filter(([,n])=>n!==void 0));this.opts={...i0,...e}}on(t){return this.listeners.add(t),()=>this.listeners.delete(t)}push(t,e){this.newestCapture=e;const n=t.capabilities??Ba;for(const s of t.hands){if(s.id<0||!r0(s))continue;let r=this.tracks.get(s.id);const o=!r;if(!r){if(r={id:s.id,handedness:s.handedness,filters:[],raw:[],smoothed:[],velocity:ss(nn),windowVelocity:ss(nn),captureTime:e,lastSeen:e,nativePinch:!1,grab:!1,distancePinch:!1,pinchCount:0,curlGrab:!1,grabCount:0,pinching:!1,grabbing:!1},this.opts.smoothing)for(let l=0;l<nn*3;l++)r.filters.push(new yh(this.opts.smoothing));this.tracks.set(s.id,r)}const a=s.keypoints.map(l=>[l[0],l[1],l[2]]),c=r;this.opts.predictionVelocity==="window"&&this.updateWindowVelocity(c,a,e),c.handedness=s.handedness,c.captureTime=e,c.lastSeen=e,c.raw=a,this.opts.smoothing?(c.smoothed=a.map((l,h)=>[0,1,2].map(u=>c.filters[h*3+u].filter(l[u],e))),this.opts.predictionVelocity==="filter"&&(c.velocity=a.map((l,h)=>[0,1,2].map(u=>c.filters[h*3+u].velocity)))):(c.smoothed=a,this.opts.predictionVelocity==="filter"&&(c.velocity=ss(nn))),c.nativePinch=n.pinch&&s.pinch[0],this.updateDistancePinch(c),this.updateCurlGrab(c),c.grab=n.grab&&this.opts.nativeGrab?s.grabbing:c.curlGrab,o&&this.emit({type:"appear",hand:this.view(c,e)}),this.updateGestures(c,e)}}sample(t){const e=[];for(const[n,s]of this.tracks){if(t-s.lastSeen>this.opts.graceMs){this.tracks.delete(n),s.pinching&&this.emit({type:"pinchend",hand:this.view(s,t)}),s.grabbing&&this.emit({type:"grabend",hand:this.view(s,t)}),this.emit({type:"lost",hand:this.view(s,t)});continue}e.push(this.view(s,t))}return e}get count(){return this.tracks.size}updateWindowVelocity(t,e,n){const s=(n-t.captureTime)/1e3;if(!t.raw.length||s<=0||s>.1){t.windowVelocity=ss(nn),t.velocity=ss(nn);return}const r=1/(1+1/(2*Math.PI*this.opts.velocityCutoffHz*s)),o=this.opts.predictionMinSpeed;t.velocity=e.map((a,c)=>{const l=t.windowVelocity[c],h=[0,1,2].map(d=>{const p=(a[d]-t.raw[c][d])/s;return l[d]+=r*(p-l[d]),Math.sign(p)!==Math.sign(l[d])?0:Math.sign(l[d])*Math.min(Math.abs(p),Math.abs(l[d]))}),u=o>0?Math.min(1,Math.max(0,Math.hypot(l[0],l[1],l[2])/o-1)):1;return[h[0]*u,h[1]*u,h[2]*u]})}updateDistancePinch(t){const e=Mr(t.raw[ee.THUMB_TIP],t.raw[ee.INDEX_TIP]);t.distancePinch?(t.pinchCount=e>this.opts.pinchExitM?t.pinchCount+1:0,t.pinchCount>=this.opts.pinchExitFrames&&(t.distancePinch=!1,t.pinchCount=0)):(t.pinchCount=e<this.opts.pinchEnterM?t.pinchCount+1:0,t.pinchCount>=this.opts.pinchEnterFrames&&(t.distancePinch=!0,t.pinchCount=0))}updateCurlGrab(t){const e=s0(t.raw);t.curlGrab?(t.grabCount=e>this.opts.grabExitCurl?t.grabCount+1:0,t.grabCount>=this.opts.grabExitFrames&&(t.curlGrab=!1,t.grabCount=0)):(t.grabCount=e<this.opts.grabEnterCurl?t.grabCount+1:0,t.grabCount>=this.opts.grabEnterFrames&&(t.curlGrab=!0,t.grabCount=0))}updateGestures(t,e){const n=t.distancePinch||this.opts.nativePinch&&t.nativePinch;n!==t.pinching&&(t.pinching=n,this.emit({type:n?"pinchstart":"pinchend",hand:this.view(t,e)})),t.grab!==t.grabbing&&(t.grabbing=t.grab,this.emit({type:t.grab?"grabstart":"grabend",hand:this.view(t,e)}))}view(t,e){const n=t.lastSeen<this.newestCapture,r=(this.opts.prediction&&!n?Math.min(Math.max(e-t.captureTime,0),this.opts.maxPredictionMs):0)/1e3,o=t.smoothed.map((d,p)=>[d[0]+t.velocity[p][0]*r,d[1]+t.velocity[p][1]*r,d[2]+t.velocity[p][2]*r]),a=o[ee.THUMB_TIP],c=o[ee.INDEX_TIP],{pinchOpenM:l,pinchEnterM:h}=this.opts,u=(l-Mr(t.smoothed[ee.THUMB_TIP],t.smoothed[ee.INDEX_TIP]))/(l-h);return{id:t.id,handedness:t.handedness===0?"left":t.handedness===1?"right":"unknown",keypoints:o,rawKeypoints:t.raw,pinching:t.pinching,pinchStrength:t.pinching?1:Math.min(1,Math.max(0,u)),grabbing:t.grabbing,tip:c,pinchPoint:[(a[0]+c[0])/2,(a[1]+c[1])/2,(a[2]+c[2])/2],coasting:n,lastSeen:t.lastSeen}}emit(t){for(const e of this.listeners)e(t)}}const a0={hoverDistance:.05,hoverRelease:.065,pokeMargin:.01,pokeArmDepth:.004,pressAt:.6,releaseAt:.3,pinchRadius:.05,grabRadius:.05,volumeEngage:6,volumeRelease:4},Oe=-1;class Li{constructor(t={}){this.targets=new Set,this.captures=new Map,this.memory=new Map,this.frames=new Map,this.mouseRay=null,this.mouseDown=!1,this.mouseTarget=null,this.mouseHit=null,this.unitsPerMetre=1,this.tuning={...a0,...t.tuning}}add(t){return this.targets.add(t),t}remove(t){this.targets.delete(t);for(const[e,n]of this.captures)n.target===t&&this.end(e,n,"removed");this.frames.delete(t),this.resetState(t)}has(t){return this.targets.has(t)}captured(t){var e;return((e=this.captures.get(t))==null?void 0:e.target)??null}get pointer(){if(!this.mouseRay)return null;const t=this.captures.get(Oe);return{ray:this.mouseRay,target:(t==null?void 0:t.target)??this.mouseTarget,world:t?t.world.clone():null,down:this.mouseDown}}pointerLeave(){this.mouseRay=null,this.mouseTarget=null,this.mouseHit=null;for(const t of this.targets)t.state.mouseOver=!1}tuningOf(t){return Object.keys(t.tuning).length?{...this.tuning,...t.tuning}:this.tuning}update(t,e){this.unitsPerMetre=e;for(const r of this.targets)this.frames.set(r,this.frameOf(r));const n=new Map;for(const r of t)n.set(r.hand.id,r);for(const[r,o]of this.captures)(!o.target.enabled||!this.targets.has(o.target))&&this.end(r,o,o.target.enabled?"removed":"disabled");for(const[r,o]of[...this.captures]){if(r===Oe)continue;const a=n.get(r);if(!a){this.end(r,o,"lost");continue}a.hand.coasting||this.updateCapture(r,a,o)}const s=new Map;for(const r of t){const o=r.hand.id,a=this.memoryOf(o),c=r.hand.pinching&&!a.pinching,l=r.hand.grabbing&&!a.grabbing;if(a.pinching=r.hand.pinching,a.grabbing=r.hand.grabbing,this.captures.has(o)||r.hand.coasting)continue;let h=null;for(const d of this.targets){if(!d.enabled||this.holderOf(d)!==null)continue;const p=this.candidate(d,r,a,c,l);p&&(!h||p.distance<h.distance)&&(h=p)}const u=new Set;if(h){u.add(h.target);const d=s.get(h.target);(!d||h.proximity>d.proximity)&&s.set(h.target,{proximity:h.proximity,cursor:h.local,depth:h.depth}),h.engage&&this.begin(o,r,h)}a.hovered=u}for(const r of[...this.memory.keys()])!n.has(r)&&r!==Oe&&this.memory.delete(r);if(this.mouseRay&&!this.captures.has(Oe)){const r=this.pick(this.mouseRay);this.mouseTarget=(r==null?void 0:r.target)??null,this.mouseHit=(r==null?void 0:r.world)??null}for(const r of this.targets){const o=r.state,a=s.get(r);o.hovering=!!a,o.proximity=(a==null?void 0:a.proximity)??0,a&&o.cursor.copy(a.cursor);const c=this.holderOf(r);o.held=c!==null,o.holder=c,o.depth=c!==null?this.captures.get(c).depth:(a==null?void 0:a.depth)??0,o.mouseOver=this.mouseTarget===r}}pointerMove(t){this.mouseRay=t.clone();const e=this.captures.get(Oe);if(!e)return;const n=this.frames.get(e.target)??this.frameOf(e.target),s=this.rayPoint(e.target,n,t);s&&(e.local.copy(s),e.world.copy(this.toWorld(e.target,n,s)),e.target.kind==="poke"&&(e.depth=e.target.travel),e.target.emit(this.event("move",e.target,"mouse",Oe,null,e,t)))}pointerDown(t){this.mouseRay=t.clone(),this.mouseDown=!0;const e=this.pick(t);if(!e)return!1;const n={target:e.target,source:"mouse",depth:e.target.kind==="poke"?e.target.travel:0,local:e.local,world:e.world,points:[]};return this.captures.set(Oe,n),e.target.emit(this.event("start",e.target,"mouse",Oe,null,n,t)),!0}pointerUp(){this.mouseDown=!1;const t=this.captures.get(Oe);t&&this.end(Oe,t,"release")}bindMouse(t,e){const n=c=>{const l=t.getBoundingClientRect();return e((c.clientX-l.left)/l.width,(c.clientY-l.top)/l.height)},s=c=>{this.pointerDown(n(c))&&t.setPointerCapture(c.pointerId)},r=c=>{if(this.pointerMove(n(c)),!this.captures.has(Oe)){const l=this.pick(this.mouseRay);this.mouseTarget=(l==null?void 0:l.target)??null,this.mouseHit=(l==null?void 0:l.world)??null;for(const h of this.targets)h.state.mouseOver=this.mouseTarget===h;t.style.cursor=this.mouseTarget?"pointer":""}},o=()=>this.pointerUp(),a=()=>{this.captures.has(Oe)||this.pointerLeave()};return t.addEventListener("pointerdown",s),t.addEventListener("pointermove",r),t.addEventListener("pointerup",o),t.addEventListener("pointercancel",o),t.addEventListener("pointerleave",a),()=>{t.removeEventListener("pointerdown",s),t.removeEventListener("pointermove",r),t.removeEventListener("pointerup",o),t.removeEventListener("pointercancel",o),t.removeEventListener("pointerleave",a)}}frameOf(t){t.object.updateMatrixWorld();const e=new T;t.object.matrixWorld.decompose(new T,new ve,e);const n=(e.x+e.y+e.z)/3;return{toLocal:t.object.matrixWorld.clone().invert(),unit:n/this.unitsPerMetre}}toLocal(t,e){return e.clone().applyMatrix4(t.toLocal).multiplyScalar(t.unit)}toWorld(t,e,n){return n.clone().divideScalar(e.unit).applyMatrix4(t.object.matrixWorld)}localRay(t,e){const n=e.clone().applyMatrix4(t.toLocal);return n.origin.multiplyScalar(t.unit),n.direction.normalize(),n}memoryOf(t){let e=this.memory.get(t);return e||(e={pinching:!1,grabbing:!1,armed:new Set,hovered:new Set},this.memory.set(t,e)),e}holderOf(t){for(const[e,n]of this.captures)if(n.target===t)return e;return null}candidate(t,e,n,s,r){const o=this.frames.get(t),a=this.tuningOf(t);if(t.kind==="poke"){const p=this.toLocal(o,e.tip),g=this.insideWithMargin(t,p.x,p.y,a.pokeMargin),x=p.z-t.top;if(!g)return(x>0||x<-t.travel)&&n.armed.delete(t),null;x>-a.pokeArmDepth&&n.armed.add(t);const m=n.hovered.has(t)?a.hoverRelease:a.hoverDistance,f=Math.min(t.travel,Math.max(0,-x)),b=n.armed.has(t),S=b&&f>=t.travel*a.pressAt;if(x>m||x<0&&!b)return null;const _=x>=0?1-Math.min(1,x/a.hoverDistance):1,N=Math.hypot(p.x-t.centre.x,p.y-t.centre.y);return{target:t,distance:Math.max(0,x)+N*.1,proximity:_,engage:S,local:p,world:e.tip.clone(),depth:f,points:[]}}if(t.kind==="pinch"||t.kind==="grab"){const p=this.toLocal(o,e.pinchPoint),g=t.radius??(t.kind==="pinch"?a.pinchRadius:a.grabRadius),x=p.distanceTo(t.position),m=n.hovered.has(t)?g*1.2:g;if(x>m)return null;const f=x<=g&&(s||t.kind==="grab"&&r);return!f&&(e.hand.pinching||t.kind==="grab"&&e.hand.grabbing)?null:{target:t,distance:x,proximity:1-Math.min(1,x/g),engage:f,local:p,world:e.pinchPoint.clone(),depth:0,points:[]}}const c=[],l=new T;for(const p of e.points){const g=this.toLocal(o,p);g.distanceTo(t.position)<t.radius&&(c.push(p.clone()),l.add(g))}const h=c.length;if(h===0)return null;const u=l.divideScalar(h),d=h>=a.volumeEngage;return{target:t,distance:u.distanceTo(t.position),proximity:Math.min(1,h/a.volumeEngage),engage:d,local:u,world:this.toWorld(t,o,u),depth:0,points:c}}insideWithMargin(t,e,n,s){if(t.inside(e,n))return!0;if(s<=0)return!1;for(let r=0;r<8;r++){const o=r/8*Math.PI*2;if(t.inside(e+Math.cos(o)*s,n+Math.sin(o)*s))return!0}return!1}begin(t,e,n){const s={target:n.target,source:n.target.kind,depth:n.depth,local:n.local.clone(),world:n.world.clone(),points:n.points};this.captures.set(t,s),n.target.emit(this.event("start",n.target,n.target.kind,t,e,s,null))}updateCapture(t,e,n){const s=n.target,r=this.frames.get(s),o=this.tuningOf(s);if(s.kind==="poke"){const a=this.toLocal(r,e.tip),c=a.z-s.top;if(n.depth=Math.min(s.travel,Math.max(0,-c)),n.local.copy(a),n.world.copy(e.tip),n.depth<=s.travel*o.releaseAt){this.end(t,n,"release");return}}else if(s.kind==="pinch"||s.kind==="grab"){if(!(s.kind==="pinch"?e.hand.pinching:e.hand.pinching||e.hand.grabbing)){this.end(t,n,"release");return}n.local.copy(this.toLocal(r,e.pinchPoint)),n.world.copy(e.pinchPoint)}else{const a=[],c=new T;for(const l of e.points){const h=this.toLocal(r,l);h.distanceTo(s.position)<s.radius*1.02&&(a.push(l.clone()),c.add(h))}if(a.length<=o.volumeRelease){this.end(t,n,"release");return}n.points=a,n.local.copy(c.divideScalar(a.length)),n.world.copy(this.toWorld(s,r,n.local))}s.emit(this.event("move",s,n.source,t,e,n,null))}end(t,e,n){this.captures.delete(t);const s=this.event("end",e.target,e.source,t,null,e,t===Oe?this.mouseRay:null);s.reason=n,e.target.kind==="poke"&&this.memoryOf(t).armed.delete(e.target),e.target.emit(s)}event(t,e,n,s,r,o,a){return{type:t,target:e,source:n,handId:s,hand:r,local:o.local.clone(),world:o.world.clone(),depth:o.depth,points:o.points,ray:a}}resetState(t){Object.assign(t.state,{hovering:!1,proximity:0,held:!1,depth:0,holder:null,mouseOver:!1})}static planeHit(t,e){if(Math.abs(t.direction.z)<1e-6)return null;const n=(e-t.origin.z)/t.direction.z;return n<0?null:t.at(n,new T)}rayPoint(t,e,n){const s=this.localRay(e,n);return t.kind==="poke"?Li.planeHit(s,t.top):t.kind==="pinch"||t.kind==="grab"?Li.planeHit(s,t.position.z)??s.closestPointToPoint(t.position,new T):s.intersectSphere(new On(t.position,t.radius),new T)??s.closestPointToPoint(t.position,new T)}pick(t){let e=null;for(const n of this.targets){if(!n.enabled||this.holderOf(n)!==null)continue;const s=this.frames.get(n)??this.frameOf(n),r=this.localRay(s,t);let o=null;if(n.kind==="poke"){const l=Li.planeHit(r,n.top+n.travel);l&&n.inside(l.x,l.y)&&(o=l)}else if(n.kind==="pinch"||n.kind==="grab"){const l=n.radius??(n.kind==="pinch"?this.tuningOf(n).pinchRadius:this.tuningOf(n).grabRadius),h=r.closestPointToPoint(n.position,new T);h.distanceTo(n.position)<=l&&h.clone().sub(r.origin).dot(r.direction)>=0&&(o=Li.planeHit(r,n.position.z)??h)}else o=r.intersectSphere(new On(n.position,n.radius),new T);if(!o)continue;const a=o.clone().sub(r.origin).dot(r.direction),c=n.kind==="pinch"||n.kind==="grab"?1:0;(!e||c<e.rank||c===e.rank&&a<e.t)&&(e={target:n,local:o,world:this.toWorld(n,s,o),t:a,rank:c})}return e}}class c0 extends Re{constructor(t={}){super(),this.lastRay=null,this.lastMoveAt=0,this.size=1,this.name="xrb-mouse-cursor",this.radius=t.radius??.006,this.hideAfterMs=t.hideAfterMs??3e3;const e=t.color??"#ffffff";this.ring=new Ot(new Pr(.72,1,40),new Ve({color:e,transparent:!0,opacity:.9,depthTest:!1,depthWrite:!1})),this.dot=new Ot(new Tr(.22,24),new Ve({color:e,transparent:!0,opacity:.9,depthTest:!1,depthWrite:!1}));for(const n of[this.ring,this.dot])n.renderOrder=1e3,n.raycast=()=>{};this.add(this.ring,this.dot),this.visible=!1}update(t,e,n,s,r){const o=t.pointer;if(!o){this.visible=!1,this.lastRay=null;return}if((!this.lastRay||!o.ray.origin.equals(this.lastRay.origin)||!o.ray.direction.equals(this.lastRay.direction))&&(this.lastRay=o.ray.clone(),this.lastMoveAt=s),this.hideAfterMs>0&&s-this.lastMoveAt>this.hideAfterMs&&!o.down){this.visible=!1;return}let a=o.world;if(!a){const h=o.ray.clone().applyMatrix4(e.toPanel);if(Math.abs(h.direction.z)<1e-6){this.visible=!1;return}const u=-h.origin.z/h.direction.z;if(u<0){this.visible=!1;return}a=e.pointToWorld([h.origin.x+h.direction.x*u,h.origin.y+h.direction.y*u,0],new T)}this.visible=!0,this.position.copy(a),this.lookAt(n);const c=(o.target?.75:1)*(o.down?.6:1);this.size+=(c-this.size)*(1-Math.exp(-18*r));const l=this.radius*e.scale*this.size;this.scale.setScalar(l),this.ring.material.opacity=o.target?1:.8,this.dot.visible=!!o.target}}const vl={widthM:.596736,heightM:.335664,tiltRad:Math.PI/4,pixelsW:1920,pixelsH:1080};function Sh(){return globalThis.__XRB_HOST__??null}const l0="[xrb-icon] ready";function h0(i=typeof location>"u"?"":location.search){const t=new URLSearchParams(i),e=t.get("xrb-icon");if(e===null)return null;const n=Number.parseInt(e,10);return{size:Number.isFinite(n)&&n>0?n:512,interactive:t.has("interactive")}}function u0(){console.info(l0)}function d0(i){var s;const t=(s=i.requestAnimationFrame)==null?void 0:s.bind(i);if(!t)return null;let e=!1,n=[];return i.requestAnimationFrame=r=>e?(n.push(r),0):t(r),{set(r){if(r!==e&&(e=r,!e)){const o=n;n=[];for(const a of o)t(a)}},restore(){e=!1,i.requestAnimationFrame=t;for(const r of n)t(r);n=[]}}}let $n=null;function f0(){return $n!==null}function p0(i,t,e,n=window){const s=n.parent;if(!s||s===n)return()=>{};$n==null||$n(),typeof document<"u"&&(document.documentElement.style.colorScheme="light");const r=d0(n),o=c=>{if(c.source!==s)return;const l=c.data;if((l==null?void 0:l.type)==="xrb-icon:pause"){r==null||r.set(!!l.paused);return}if(!l||l.type!=="xrb-icon:capture"||typeof l.id!="number")return;const h=l.id,u=d=>s.postMessage(d,c.origin||"*");try{t(),i.toBlob(d=>{u(d?{type:"xrb-icon:png",id:h,png:d}:{type:"xrb-icon:error",id:h,message:"the canvas could not be read as PNG"})},"image/png")}catch(d){u({type:"xrb-icon:error",id:h,message:String((d==null?void 0:d.message)??d)})}};n.addEventListener("message",o),s.postMessage({type:"xrb-icon:hello",size:e,canPause:!!r},"*");const a=()=>{n.removeEventListener("message",o),r==null||r.restore(),$n===a&&($n=null)};return $n=a,a}function m0(i,t,e){const n=i[2]-t[2];if(n<=1e-4)return null;const s=i[2]/n,r=i[0]+s*(t[0]-i[0]),o=i[1]+s*(t[1]-i[1]);return{u:r/e.widthM+.5,v:.5-o/e.heightM}}function g0(i,t){if(!i.length)return null;const e=i.find(s=>s.pinching&&s.id===t)??i.find(s=>s.pinching);if(e)return e;const n=i.find(s=>s.id===t);return n||i.reduce((s,r)=>s.keypoints[ee.INDEX_TIP][2]<r.keypoints[ee.INDEX_TIP][2]?s:r)}class _0{constructor(t){this.enabled=!0,this.state={handId:null,u:0,v:0,inside:!1,down:!1,clientX:0,clientY:0},this.downTarget=null,this.downAt=null,this.dragging=!1,this.opts=t}update(t,e,n){if(!this.enabled)return;const s=g0(t,this.state.handId),r=s?m0(e,s.keypoints[ee.INDEX_TIP],n):null,o=!!r&&r.u>=0&&r.u<=1&&r.v>=0&&r.v<=1,a=!!s&&s.pinching&&(o||this.state.down);if(!s||!r){this.state.down&&this.release(!1),this.state.handId=null,this.state.inside=!1;return}this.state.handId=s.id;let c=Math.min(1,Math.max(0,r.u)),l=Math.min(1,Math.max(0,r.v));this.state.down&&this.downAt&&!this.dragging&&(Math.hypot(c-this.downAt.u,l-this.downAt.v)>(this.opts.dragSlop??.015)?this.dragging=!0:{u:c,v:l}=this.downAt),this.state.u=c,this.state.v=l,this.state.inside=o;const h=this.opts.element.getBoundingClientRect();this.state.clientX=h.left+this.state.u*h.width,this.state.clientY=h.top+this.state.v*h.height,(o||this.state.down)&&this.send("pointermove",this.state.down?this.downTarget:null,this.state.down?1:0),a&&!this.state.down?(this.state.down=!0,this.downAt={u:this.state.u,v:this.state.v},this.dragging=!1,this.downTarget=this.targetAt(this.state.clientX,this.state.clientY),this.send("pointerdown",this.downTarget,1)):!a&&this.state.down&&this.release(!0)}release(t){const e=this.downTarget;this.state.down=!1,this.send("pointerup",e,0),t&&e&&this.targetAt(this.state.clientX,this.state.clientY)===e&&this.send("click",e,0),this.downTarget=null,this.downAt=null,this.dragging=!1}targetAt(t,e){var s;return(this.opts.hitTest?this.opts.hitTest(t,e):(s=globalThis.document)==null?void 0:s.elementFromPoint(t,e))??this.opts.element}send(t,e,n){const s=e??this.targetAt(this.state.clientX,this.state.clientY),r={bubbles:!0,cancelable:!0,composed:!0,clientX:this.state.clientX,clientY:this.state.clientY,screenX:this.state.clientX,screenY:this.state.clientY,button:0,buttons:n,pointerId:1,pointerType:"mouse",isPrimary:!0,width:1,height:1,pressure:n?.5:0},o=this.opts.createEvent??((a,c)=>a==="click"||a.startsWith("mouse")?new MouseEvent(a,c):new PointerEvent(a,c));s.dispatchEvent(o(t,r)),this.opts.mouseEvents!==!1&&t.startsWith("pointer")&&s.dispatchEvent(o(t.replace("pointer","mouse"),r))}}function v0(i,t,e=new ve){const n=i[ee.WRIST],s=i[ee.INDEX_MCP],r=i[ee.PINKY_MCP],o=new T().crossVectors(s.clone().sub(n),r.clone().sub(n)).normalize();t==="right"&&o.negate();const a=r.clone().sub(s);a.addScaledVector(o,-a.dot(o)).normalize(),t==="left"&&a.negate();const c=new T().crossVectors(a,o).normalize(),l=new Xt().makeBasis(a,o,c);return e.setFromRotationMatrix(l)}function x0(i,t){const e=i.keypoints.map(s=>t.pointToWorld(s,new T)),n=new T().add(e[ee.WRIST]).add(e[ee.INDEX_MCP]).add(e[ee.PINKY_MCP]).divideScalar(3);return{hand:i,points:e,tip:e[ee.INDEX_TIP].clone(),pinchPoint:t.pointToWorld(i.pinchPoint,new T),palm:{position:n,quaternion:v0(e,i.handedness)}}}const gs=[0,0,.6],xl=.063;function Eh(i,t,e,n,s,r){const[o,a,c]=t,l=s/Math.max(c,1e-4),h=(-e-o)*l,u=(e-o)*l,d=(-n-a)*l,p=(n-a)*l;return i.set(2*s/(u-h),0,(u+h)/(u-h),0,0,2*s/(p-d),(p+d)/(p-d),0,0,0,-(r+s)/(r-s),-2*r*s/(r-s),0,0,-1,0)}class M0{constructor(){this.toWorld=new Xt,this.toPanel=new Xt,this.quaternion=new ve,this.scale=1}update(t,e){if(t.mode==="world")this.scale=t.scale,this.quaternion.copy(t.quaternion??new ve),this.toWorld.compose(t.center,this.quaternion,new T(this.scale,this.scale,this.scale));else{e.updateMatrixWorld();const n=new T,s=new T;e.matrixWorld.decompose(n,this.quaternion,s);const r=t.focusDistance??Math.max(n.length(),.001);this.scale=r/gs[2];const o=new Xt().compose(new T(-gs[0]*this.scale,-gs[1]*this.scale,-r),new ve,new T(this.scale,this.scale,this.scale));this.toWorld.compose(n,this.quaternion,new T(1,1,1)).multiply(o)}this.toPanel.copy(this.toWorld).invert()}pointToWorld(t,e=new T){return e.set(t[0],t[1],t[2]).applyMatrix4(this.toWorld)}}function fo(i,t,e,n,s,r){i.matrixAutoUpdate=!1;const o=e.pointToWorld(t);i.matrixWorld.compose(o,e.quaternion,new T(1,1,1)),i.matrixWorldInverse.copy(i.matrixWorld).invert(),i.position.copy(o),i.quaternion.copy(e.quaternion),i.near=s,i.far=r,Eh(i.projectionMatrix,t,n.widthM/2,n.heightM/2,s,r),i.projectionMatrixInverse.copy(i.projectionMatrix).invert()}function y0(){const[i,t,e]=gs;return{left:[i-xl/2,t,e],right:[i+xl/2,t,e]}}class S0{constructor(t,e,n,s,r={}){this.panel=new M0,this.leftCamera=new Te,this.rightCamera=new Te,this.renderer=t,this.display=e,this._stereo=n,this.eyeW=s.width,this.eyeH=s.height,this.mapping=r.mapping??{mode:"camera"},this.resolutionScale=r.resolutionScale??1}get stereo(){return this._stereo}setStereo(t){this._stereo=t}viewSize(){return{width:this.eyeW,height:this.eyeH}}setEyeSize(t,e){this.eyeW=t,this.eyeH=e}applyCanvasSize(){const t=this._stereo?this.eyeW*2:this.eyeW;this.renderer.setPixelRatio(this.resolutionScale),this.renderer.setSize(t,this.eyeH,!0)}syncHeadCamera(t){this.panel.update(this.mapping,t);const e=gs;Eh(t.projectionMatrix,e,this.display.widthM/2,this.display.heightM/2,t.near,t.far),t.projectionMatrixInverse.copy(t.projectionMatrix).invert()}render(t,e,n){this.syncHeadCamera(e);const s=this.renderer;if(!this._stereo){const r=[(n.left[0]+n.right[0])/2,(n.left[1]+n.right[1])/2,(n.left[2]+n.right[2])/2];fo(this.leftCamera,r,this.panel,this.display,e.near,e.far),s.setScissorTest(!1),s.setViewport(0,0,this.eyeW,this.eyeH),s.render(t,this.leftCamera);return}fo(this.leftCamera,n.left,this.panel,this.display,e.near,e.far),fo(this.rightCamera,n.right,this.panel,this.display,e.near,e.far),s.setScissorTest(!0),s.setViewport(0,0,this.eyeW,this.eyeH),s.setScissor(0,0,this.eyeW,this.eyeH),s.render(t,this.leftCamera),s.setViewport(this.eyeW,0,this.eyeW,this.eyeH),s.setScissor(this.eyeW,0,this.eyeW,this.eyeH),s.render(t,this.rightCamera),s.setScissorTest(!1),s.setViewport(0,0,this.eyeW*2,this.eyeH)}}const Ml={distanceM:.45,dropM:.15},E0=["wrist","thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip",...["index-finger","middle-finger","ring-finger","pinky-finger"].flatMap(i=>[`${i}-phalanx-proximal`,`${i}-phalanx-intermediate`,`${i}-phalanx-distal`,`${i}-tip`])],b0={pinch:!1,grab:!1,palm:!1};async function w0(i,t){if(!i)return null;const e=t?[t]:["immersive-ar","immersive-vr"];for(const n of e)try{if(await i.isSessionSupported(n))return n}catch{}return null}function T0(i){return new URLSearchParams(i).get("xrb-xr")==="enter"}function A0(i,t={}){return{...i,widthM:t.widthM??i.widthM,heightM:t.heightM??i.heightM,tiltRad:0}}const bh=i=>new T(i.x,i.y,i.z),R0=i=>new ve(i.x,i.y,i.z,i.w);class C0{constructor(t={}){this.pose=new Xt,this.toPanel=new Xt,this.anchored=!1,this.distanceM=t.distanceM??Ml.distanceM,this.dropM=t.dropM??Ml.dropM}anchor(t,e){const n=new T(0,0,-1).applyQuaternion(e);n.y=0,n.lengthSq()<1e-8&&n.set(0,0,-1),n.normalize();const s=Math.atan2(-n.x,-n.z),r=t.clone().addScaledVector(n,this.distanceM);r.y-=this.dropM,this.pose.compose(r,new ve().setFromAxisAngle(new T(0,1,0),s),new T(1,1,1)),this.toPanel.copy(this.pose).invert(),this.anchored=!0}reset(){this.anchored=!1}pointToPanel(t){const e=bh(t).applyMatrix4(this.toPanel);return[e.x,e.y,e.z]}}function P0(i,t,e,n){if(!i.getJointPose)return null;const s=[];for(const r of E0){const o=t.get(r),a=o?i.getJointPose(o,e):null;if(!a)return null;s.push(n.pointToPanel(a.transform.position))}return s}function L0(i,t,e){const n=[0,0,0];return{id:i,handedness:t==="left"?0:t==="right"?1:-1,grabbing:!1,pinch:[!1,!1,!1,!1],keypoints:e,scores:Array(nn).fill(1),pinchPositions:[n,n,n,n],grabPosition:n,palm:[e[0],n,n,n]}}class D0{constructor(){this.ids=new WeakMap,this.nextId=1,this.seq=0}read(t,e,n,s){const r=[];for(const o of t.session.inputSources){if(!o.hand)continue;const a=P0(t,o.hand,e,n);if(!a)continue;let c=this.ids.get(o);c===void 0&&this.ids.set(o,c=this.nextId++),r.push(L0(c,o.handedness,a))}return{type:Fa,version:Oa,seq:this.seq++,hostTimeMs:s,captureTimeMs:s,trackingHz:0,capabilities:b0,hands:r}}}function I0(i,t){const e=i.views.find(s=>s.eye==="left")??i,n=i.views.find(s=>s.eye==="right")??i;return{left:t.pointToPanel(e.transform.position),right:t.pointToPanel(n.transform.position)}}function U0(i){return{position:bh(i.transform.position),quaternion:R0(i.transform.orientation)}}function N0(i,t,e=new Xt){return e.multiplyMatrices(i,t.toPanel)}function F0(i,t,e,n,s,r=new T){const a=2/Math.max(1e-4,n),c=a*s,l=1/(1+c+.48*c*c+.235*c*c*c),h=i.clone().sub(t),u=e.clone().addScaledVector(h,a).multiplyScalar(s);e.sub(u.clone().multiplyScalar(a)).multiplyScalar(l),r.copy(t).add(h.add(u).multiplyScalar(l));const d=t.clone().sub(i),p=r.clone().sub(t);return d.dot(p)>0&&(r.copy(t),e.set(0,0,0)),r}const er=.02,O0={x:new T(1,0,0),y:new T(0,1,0),z:new T(0,0,1)};let B0=class{constructor(t,e){this.enabled=!0,this.touching=!1,this.angularVelocity=0,this.axisLocal=new T(0,1,0),this.current=new T,this.prev=new T,this.vel=new T,this.target=new T,this.accumulator=0,this.object=t,this.o={axis:"y",gain:3,smoothTime:.15,damp:5,engageCount:6,releaseCount:4,maxRadius:.98,...e},this.axis=this.o.axis}update(t,e){for(this.accumulator=Math.min(this.accumulator+t,.25);this.accumulator>=er;)this.accumulator-=er,this.tick(e)}stop(){this.angularVelocity=0,this.touching=!1}tick(t){const e=this.enabled?this.contact(t):null;if(e&&!this.touching?(this.touching=!0,this.current.copy(e),this.prev.copy(e),this.vel.set(0,0,0)):!e&&this.touching&&(this.touching=!1),this.touching&&e){this.target.copy(e),F0(this.current,this.target,this.vel,this.o.smoothTime,er,this.current);const n=this.prev.clone(),s=this.current.clone();if(this.axis!=="free"?(this.axisLocal.copy(O0[this.axis]),n.addScaledVector(this.axisLocal,-n.dot(this.axisLocal)),s.addScaledVector(this.axisLocal,-s.dot(this.axisLocal))):this.axisLocal.crossVectors(n,s).normalize(),n.lengthSq()>1e-12&&s.lengthSq()>1e-12&&this.axisLocal.lengthSq()>.5){const r=n.angleTo(s)*Math.sign(new T().crossVectors(n,s).dot(this.axisLocal)||1);this.angularVelocity=Fn.radToDeg(r)*this.o.gain}else this.angularVelocity=0;this.prev.copy(this.current)}else this.angularVelocity/=1+er*this.o.damp,Math.abs(this.angularVelocity)<=.001&&(this.angularVelocity=0);this.angularVelocity!==0&&(this.object.rotateOnAxis(this.axisLocal,Fn.degToRad(this.angularVelocity)),this.object.updateMatrixWorld())}contact(t){this.object.updateMatrixWorld();const e=this.object.matrixWorld.clone().invert(),n=this.o.radius,s=this.touching?this.o.maxRadius*1.02:this.o.maxRadius,r=new T;let o=0;for(const c of t){const l=c.clone().applyMatrix4(e);l.length()<n&&(r.add(l),o++)}if(this.touching?o<=this.o.releaseCount:o<this.o.engageCount)return null;const a=r.divideScalar(o);return a.length()<s*n?a:null}};class z0 extends ha{constructor(t){const e=t.radius,n=k0(3).map(l=>l.multiplyScalar(e)),s=new Tr(e*(t.dotRadius??.016),12),r=new Ve({color:t.color??new It(.18,.75,1),transparent:!0,opacity:0,depthWrite:!1,blending:_r,side:on});super(s,r,n.length),this.active=!1,this.opacity=0,this.name="xrb-dot-shell",this.fadeSpeed=t.fadeSpeed??10;const o=new Xt,a=new ve,c=new T(0,0,1);n.forEach((l,h)=>{a.setFromUnitVectors(c,l.clone().normalize()),this.setMatrixAt(h,o.compose(l,a,new T(1,1,1)))}),this.instanceMatrix.needsUpdate=!0,this.renderOrder=10,this.visible=!1}update(t){const e=this.active?1:0;this.opacity=this.active?1:Fn.lerp(this.opacity,0,Math.min(1,t*this.fadeSpeed)),!this.active&&this.opacity<.01&&(this.opacity=0),this.material.opacity=this.opacity,this.visible=this.opacity>0||e>0}}function k0(i){const t=new Cr(1,2**i-1),e=t.getAttribute("position"),n=new Map;for(let s=0;s<e.count;s++){const r=new T().fromBufferAttribute(e,s).normalize();n.set(`${r.x.toFixed(4)},${r.y.toFixed(4)},${r.z.toFixed(4)}`,r)}return t.dispose(),[...n.values()]}class za{constructor(t){this.enabled=!0,this.tuning={},this.state={hovering:!1,proximity:0,cursor:new T,held:!1,depth:0,holder:null,mouseOver:!1},this.listeners=new Set,this.object=t}on(t){return this.listeners.add(t),()=>this.listeners.delete(t)}emit(t){for(const e of this.listeners)e(t)}}class Gi extends za{constructor(t,e){super(t),this.kind="poke",this.inside=e.inside,this.top=e.top,this.travel=e.travel,this.centre=e.centre??new nt}}class wh extends za{constructor(t,e={}){super(t),this.kind="pinch",this.position=e.position??new T,this.radius=e.radius??null}}class H0 extends za{constructor(t,e){super(t),this.kind="volume",this.position=e.position??new T,this.radius=e.radius}}function V0(){const i=Sh();return{antialias:!(i!=null&&i.stereo),powerPreference:"high-performance"}}const yl=()=>{var i;return((i=globalThis.navigator)==null?void 0:i.xr)??null};class G0{constructor(t,e={}){var s,r,o,a,c,l,h;this.handsObject=new e0,this.cursorObject=new c0,this.currentHands=[],this.sceneHands=[],this.currentEyes=y0(),this.fps=0,this.viewListeners=new Set,this.renderMs=0,this.eyeFilters=Array.from({length:6},()=>new yh({minCutoff:1,beta:6,dCutoff:1})),this.deliveryMs=[],this.frameIntervals=[],this.lastFrameAt=0,this.frames=0,this.fpsSince=0,this.lastHeartbeat=0,this.icon=h0(),this.iconStartedAt=0,this.iconSignalled=!1,this.xrMode=null,this.xrHands=new D0,this.xrRig=new de,this.xrCamera=new Te,this.xrButton=null,this.xrFrames=0,this.renderer=t,this.host=Sh(),this._stereo=!!((s=this.host)!=null&&s.stereo),this.xrOptions=e.xr??{},this.xrPanel=new C0(this.xrOptions.panel),this.xrRig.matrixAutoUpdate=!1,this.xrRig.add(this.xrCamera),this.display=((r=this.host)==null?void 0:r.display)??(this.xrOptions.panel?A0(vl,this.xrOptions.panel):vl),this.displayLatencyMs=e.displayLatencyMs??8,this.channel=this.host?new Q_(this.host):null,this.hands=new o0(e.hands),this.interaction=new Li(e.interaction),(o=this.channel)==null||o.onHands(u=>{this.hands.push(u,this.channel.hostToPage(u.captureTimeMs)),this.deliveryMs.push(this.host.hostNow()-u.captureTimeMs),this.deliveryMs.length>60&&this.deliveryMs.shift()});const n=((a=this.host)==null?void 0:a.eye)??{width:innerWidth,height:innerHeight};this.view=new S0(t,this.display,this._stereo,n,{mapping:e.mapping,resolutionScale:e.resolutionScale}),(c=this.channel)==null||c.onView(u=>{this.view.setEyeSize(u.width,u.height),this.applyView(u.stereo)}),this.iconOptions={autoReady:((l=e.icon)==null?void 0:l.autoReady)??!0,readyMs:((h=e.icon)==null?void 0:h.readyMs)??1e3},this.pointer=e.pointer===!1||this.icon?null:new _0({element:t.domElement}),this.icon&&this.startIcon(this.icon.size),this.setSize(),!this.host&&!this.icon&&this.detectXr()}get stereo(){return this._stereo||this.presenting}get presenting(){var t;return!!((t=this.renderer.xr)!=null&&t.isPresenting)}setAnimationLoop(t){this.renderer.setAnimationLoop(t)}async enterXR(){var n;const t=yl();if(!t||!this.xrMode||this.presenting)return;const e=await t.requestSession(this.xrMode,{optionalFeatures:["hand-tracking"]});this.renderer.xr.enabled=!0,this.renderer.xr.setReferenceSpaceType("local"),this.xrPanel.reset(),await this.renderer.xr.setSession(e),e.addEventListener("end",()=>this.xrEnded()),(n=this.renderer.xr.getReferenceSpace())==null||n.addEventListener("reset",()=>this.recenter()),this.xrButton&&(this.xrButton.style.display="none"),this.xrFrames=0,setTimeout(()=>{this.presenting&&this.xrFrames===0&&console.warn("[xrb] the headset session shows nothing: drive frames with xrb.setAnimationLoop(fn), requestAnimationFrame stops in a session")},3e3),this.emitView()}async exitXR(){var t;await((t=this.renderer.xr.getSession())==null?void 0:t.end())}recenter(){this.xrPanel.reset()}async detectXr(){var s,r;const t=yl();if(this.xrMode=await w0(t,this.xrOptions.mode),!this.xrMode)return;this.xrOptions.button!==!1&&typeof document<"u"&&this.addXrButton();const e=()=>void this.enterXR().catch(o=>console.warn("[xrb] could not start the headset session:",o));(s=t==null?void 0:t.addEventListener)==null||s.call(t,"sessiongranted",e);const n=((r=globalThis.location)==null?void 0:r.search)??"";(this.xrOptions.autoEnter??T0(n))&&e()}addXrButton(){const t=document.createElement("button");t.textContent="Enter",t.title="Show the app in the headset",Object.assign(t.style,{position:"fixed",left:"50%",bottom:"24px",transform:"translateX(-50%)",zIndex:"2147483647",padding:"12px 28px",border:"1px solid #ffffff55",borderRadius:"24px",background:"#000000aa",color:"#fff",font:"600 16px system-ui, sans-serif",cursor:"pointer"}),t.addEventListener("click",()=>void this.enterXR().catch(e=>console.warn("[xrb] could not start the headset session:",e))),document.body.appendChild(t),this.xrButton=t}xrEnded(){this.renderer.xr.enabled=!1,this.xrButton&&(this.xrButton.style.display=""),this.setSize(),this.emitView()}emitView(){const t={stereo:this.stereo,switchable:this.switchable};for(const e of this.viewListeners)e(t)}get switchable(){var t;return!!((t=this.host)!=null&&t.switchable)}setStereo(t){if(!this.presenting){if(this.channel&&this.switchable){this.channel.sendSetView(t);return}this.applyView(t)}}onView(t){return this.viewListeners.add(t),()=>this.viewListeners.delete(t)}applyView(t){const e=t!==this._stereo;this._stereo=t,this.view.setStereo(t),this.setSize(),e&&this.emitView()}viewSize(){return this.icon?{width:this.icon.size,height:this.icon.size}:this.view.viewSize()}setSize(){if(this.icon){this.renderer.setPixelRatio(1),this.renderer.setSize(this.icon.size,this.icon.size);return}this.presenting||(this.host||this.view.setEyeSize(innerWidth,innerHeight),this.view.applyCanvasSize())}get handStatus(){var t;return((t=this.channel)==null?void 0:t.status)??null}get handCapabilities(){var t,e;return((e=(t=this.channel)==null?void 0:t.hands)==null?void 0:e.capabilities)??Ba}get platform(){var e,n,s,r,o;const t=(e=this.channel)==null?void 0:e.platform;return t?{name:t.name,params:t.params}:{name:((s=(n=this.host)==null?void 0:n.platform)==null?void 0:s.name)??"",params:((o=(r=this.host)==null?void 0:r.platform)==null?void 0:o.params)??{}}}onPlatform(t){var e;return((e=this.channel)==null?void 0:e.onPlatform(n=>t({name:n.name,params:n.params})))??(()=>{})}on(t){return this.hands.on(t)}handsInScene(){return this.currentHands.map(t=>t.keypoints.map(e=>this.view.panel.pointToWorld(e,new T)))}get metre(){return this.view.panel.scale}bindMouse(){return this.interaction.bindMouse(this.renderer.domElement,(t,e)=>{const n=this.display,s=this.view.panel.pointToWorld([(t-.5)*n.widthM,(.5-e)*n.heightM,0],new T),r=this.currentEyes.left,o=this.currentEyes.right,a=this.view.panel.pointToWorld([(r[0]+o[0])/2,(r[1]+o[1])/2,(r[2]+o[2])/2],new T);return new Zl(a,s.sub(a).normalize())})}toScene(t,e=new T){return this.view.panel.pointToWorld(t,e)}render(t,e){var l,h;if(this.icon){this.renderIcon(t,e);return}const n=performance.now(),s=this.presenting,r=(l=this.channel)==null?void 0:l.eyes;if(s)this.readXr(n);else if(r){const u=this.eyeFilters,d=r.left.map((g,x)=>u[x].filter(g,n)),p=r.right.map((g,x)=>u[3+x].filter(g,n));this.currentEyes={left:d,right:p}}if(this.currentHands=this.hands.sample(s?n:n+this.displayLatencyMs),this.view.panel.update(this.view.mapping,e),this.sceneHands=this.currentHands.map(u=>x0(u,this.view.panel)),this.interaction.update(this.sceneHands,this.metre),this.cursorObject.parent){const u=this.currentEyes.left,d=this.currentEyes.right,p=this.view.panel.pointToWorld([(u[0]+d[0])/2,(u[1]+d[1])/2,(u[2]+d[2])/2],new T);this.cursorObject.update(this.interaction,this.view.panel,p,n,this.lastFrameAt>0?(n-this.lastFrameAt)/1e3:1/60)}this.handsObject.update(this.currentHands,this.view.panel);const o=this.currentEyes.left,a=this.currentEyes.right;(h=this.pointer)==null||h.update(this.currentHands,[(o[0]+a[0])/2,(o[1]+a[1])/2,(o[2]+a[2])/2],this.display);const c=performance.now();s?this.drawXr(t,e):this.view.render(t,e,this.currentEyes),this.renderMs=performance.now()-c,this.lastFrameAt>0&&(this.frameIntervals.push(n-this.lastFrameAt),this.frameIntervals.length>120&&this.frameIntervals.shift()),this.lastFrameAt=n,this.frames++,n-this.fpsSince>=1e3&&(this.fps=this.frames*1e3/(n-this.fpsSince),this.frames=0,this.fpsSince=n),n-this.lastHeartbeat>=500&&(this.channel&&this.channel.sendHeartbeat(this.performance()),this.lastHeartbeat=n)}performance(){var r,o;const t=this.view.viewSize(),e=this.view.resolutionScale,n=this.frameIntervals.slice(-Math.max(1,Math.round(this.fps)||60)),s=this.deliveryMs.slice(-Math.max(1,Math.round(((o=(r=this.channel)==null?void 0:r.hands)==null?void 0:o.trackingHz)??60)));return{fps:this.fps,frameMs:Sl(n)??0,latencyMs:Sl(s),eyeWidth:t.width*e,eyeHeight:t.height*e}}readXr(t){this.xrFrames++;const e=this.renderer.xr.getFrame(),n=this.renderer.xr.getReferenceSpace();if(!e||!n)return;const s=e.getViewerPose(n);if(s&&!this.xrPanel.anchored){const r=U0(s);this.xrPanel.anchor(r.position,r.quaternion)}this.xrPanel.anchored&&(s&&(this.currentEyes=I0(s,this.xrPanel)),this.hands.push(this.xrHands.read(e,n,this.xrPanel,t),t))}drawXr(t,e){this.view.syncHeadCamera(e);const n=this.view.panel;N0(n.toWorld,this.xrPanel,this.xrRig.matrix),this.xrRig.updateMatrixWorld(!0),this.xrCamera.near=e.near/n.scale,this.xrCamera.far=e.far/n.scale;const s=this.xrMode==="immersive-ar"&&this.xrOptions.passthroughBackground!==!1,r=t.background,o=this.renderer.getClearAlpha();s&&(t.background=null,this.renderer.setClearAlpha(0)),this.renderer.render(t,this.xrCamera),s&&(t.background=r,this.renderer.setClearAlpha(o))}startIcon(t){const e=this.renderer.domElement;for(const n of[document.documentElement,document.body])n.style.background="transparent",n.style.margin="0",n.style.overflow="hidden";e.style.position="fixed",e.style.left=e.style.top="0",e.style.zIndex="2147483647",e.style.width=e.style.height=`${t}px`,this.renderer.setClearColor(0,0)}renderIcon(t,e){const n=()=>{const{background:r,fog:o}=t,a=this.handsObject.visible;t.background=null,t.fog=null,this.handsObject.visible=!1,e.aspect!==1&&(e.aspect=1,e.updateProjectionMatrix()),this.renderer.setClearColor(0,0),this.renderer.render(t,e),t.background=r,t.fog=o,this.handsObject.visible=a};n();const s=this.icon;if(s.interactive)f0()||p0(this.renderer.domElement,n,s.size);else if(this.iconOptions.autoReady&&!this.iconSignalled){const r=performance.now();this.iconStartedAt||(this.iconStartedAt=r),r-this.iconStartedAt>=this.iconOptions.readyMs&&(this.iconSignalled=!0,u0())}}dispose(){var t,e;(t=this.channel)==null||t.close(),(e=this.xrButton)==null||e.remove(),this.exitXR()}}function Sl(i){if(!i.length)return null;const t=[...i].sort((e,n)=>e-n);return t[Math.floor(t.length/2)]}function W0(i,t={}){return new G0(i,t)}const Lt={background:"#15181d",well:"#1b1f26",cap:"#d6dbe3",capDark:"#3b4352",track:"#2e3440",accent:"#5b8cff",text:"#e8ecf2",muted:"#8a94a6",done:"#5bd18b"},X0={ease:18};function _e(i,t={}){return new Na({color:i,roughness:.45,metalness:.05,...t})}function Qe(i,t,e,n,s=.003){const r=Math.min(e*.3,n*.5,s),o=i-2*r,a=t-2*r,c=Math.max(5e-4,Math.min(n-r,o/2,a/2)),l=-o/2,h=-a/2,u=new Ia;u.moveTo(l+c,h),u.lineTo(l+o-c,h),u.quadraticCurveTo(l+o,h,l+o,h+c),u.lineTo(l+o,h+a-c),u.quadraticCurveTo(l+o,h+a,l+o-c,h+a),u.lineTo(l+c,h+a),u.quadraticCurveTo(l,h+a,l,h+a-c),u.lineTo(l,h+c),u.quadraticCurveTo(l,h,l+c,h);const d=new Rr(u,{depth:Math.max(1e-4,e-2*r),bevelEnabled:!0,bevelThickness:r,bevelSize:r,bevelSegments:3,curveSegments:12});return d.translate(0,0,r),d}function Ss(i,t,e=64){const n=Math.min(t*.3,i*.5,.003),s=i-n,r=[];for(let c=0;c<e;c++){const l=c/e*Math.PI*2;r.push(new nt(Math.cos(l)*s,Math.sin(l)*s))}const o=new Ia(r),a=new Rr(o,{depth:Math.max(1e-4,t-2*n),bevelEnabled:!0,bevelThickness:n,bevelSize:n,bevelSegments:3,curveSegments:e});return a.translate(0,0,n),a}function q0(){return new U_({color:"#e6edf8",transmission:1,roughness:.62,thickness:.012,ior:1.4,metalness:0,specularIntensity:.5,envMapIntensity:1,side:on})}function Th(i,t,e=48){return new ii(i,i,t,e).rotateX(Math.PI/2).translate(0,0,t/2)}const Pe=(i,t,e,n=X0.ease)=>i+(t-i)*(1-Math.exp(-n*e)),po=64;class ri extends de{constructor(t,e={}){super(),this.canvas=document.createElement("canvas"),this.texture=new Ra(this.canvas),this.text="",this.o={size:.011,color:Lt.text,weight:600,align:"center",...e},this.color=this.o.color,this.texture.colorSpace=Se,this.texture.anisotropy=4,this.mesh=new Ot(new Bn(1,1),new Ve({map:this.texture,transparent:!0,depthWrite:!1})),this.mesh.raycast=()=>{},this.add(this.mesh),this.set(t)}set(t,e=this.color){if(t===this.text&&e===this.color)return;this.text=t,this.color=e;const n=this.canvas.getContext("2d"),s=`${this.o.weight} ${po}px "Segoe UI", system-ui, sans-serif`;n.font=s;const r=t.split(`
`),o=po*1.3,a=Math.max(1,...r.map(h=>n.measureText(h).width))+8;this.canvas.width=Math.ceil(a),this.canvas.height=Math.ceil(o*r.length),n.font=s,n.fillStyle=e,n.textBaseline="middle",n.textAlign=this.o.align;const c=this.o.align==="left"?4:this.o.align==="right"?this.canvas.width-4:this.canvas.width/2;r.forEach((h,u)=>n.fillText(h,c,o*(u+.5))),this.texture.dispose(),this.texture.needsUpdate=!0;const l=this.o.size/po;this.mesh.scale.set(this.canvas.width*l,this.canvas.height*l,1),this.mesh.position.x=this.o.align==="left"?this.mesh.scale.x/2:this.o.align==="right"?-this.mesh.scale.x/2:0}set opacity(t){this.mesh.material.opacity=t}}const Y0=.35,Z0=new It("#5a606b"),yr=i=>i==="mouse"?"mouse":"hand";class ci extends Re{constructor(t,e){super(),this.enabled=!0,this.targets=[],this.interactor=null,this.listeners=new Map,this.dim=1,this.userData.control=this,this.title=new ri(t,{size:.0085,weight:700}),this.title.position.set(0,e,.001),this.status=new ri("",{size:.0068,weight:500,color:Lt.muted}),this.status.position.set(0,e-.0115,.001),this.add(this.title,this.status)}attach(t){this.interactor=t;for(const e of this.targets)t.add(e);return this}detach(){if(this.interactor)for(const t of this.targets)this.interactor.remove(t);this.interactor=null}target(t){var e;return this.targets.push(t),t.enabled=this.enabled,(e=this.interactor)==null||e.add(t),t}get mouseOver(){return this.targets.some(t=>t.state.mouseOver)}on(t,e){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(e),this}emit(t,e={}){for(const n of this.listeners.get(t)??[])n(e)}setEnabled(t){if(t!==this.enabled){this.enabled=t;for(const e of this.targets)e.enabled=t;t||this.cancel()}}cancel(){}fade(t){const e=this.enabled?1:Y0;this.dim===1&&e===1||(this.dim+=(e-this.dim)*(1-Math.exp(-10*t)),Math.abs(this.dim-e)<.002&&(this.dim=e),this.traverse(n=>{const s=n.material;if(!(s!=null&&s.color)||n.userData.keepLook)return;const r=s.userData;(!r.ownColor||!r.fadedColor||!s.color.equals(r.fadedColor))&&(r.ownColor=(r.ownColor??new It).copy(s.color)),s.color.copy(r.ownColor).lerp(Z0,1-this.dim),r.fadedColor=(r.fadedColor??new It).copy(s.color)}))}}function ka(){const i=new Ot(new Pr(.0042,.0056,32),new Ve({color:Lt.accent,transparent:!0,opacity:0,depthWrite:!1}));return i.userData.keepLook=!0,i.raycast=()=>{},i.renderOrder=5,i}function Ha(i,t,e,n){const s=t.state,r=n&&(s.hovering||s.held&&s.holder!==-1)?Math.max(s.proximity,s.held?1:0):0;i.visible=r>.01,i.position.set(s.cursor.x,s.cursor.y,e+4e-4),i.scale.setScalar(2.2-1.2*r),i.material.opacity=.25+.75*r}const rs=256;class $0 extends de{constructor(t,e={}){super(),this.canvas=document.createElement("canvas"),this.texture=new Ra(this.canvas);const n=Object.fromEntries(Object.entries(e).filter(([,s])=>s!==void 0));this.o={size:.022,color:"#30363f",stroke:2.1,...n},this.texture.colorSpace=Se,this.texture.anisotropy=4,this.texture.generateMipmaps=!1,this.texture.minFilter=Ke,this.mesh=new Ot(new Bn(this.o.size,this.o.size),new Ve({map:this.texture,transparent:!0,depthWrite:!1})),this.mesh.raycast=()=>{},this.add(this.mesh),this.set(t)}set(t,e=this.o.color){const n=this.canvas;n.width=n.height=rs;const s=n.getContext("2d");s.clearRect(0,0,rs,rs),s.save(),s.scale(rs/24,rs/24),s.strokeStyle=e,s.lineWidth=this.o.stroke,s.lineCap="round",s.lineJoin="round";for(const[r,o]of t){const a=c=>Number(o[c]??0);if(s.beginPath(),r==="path")s.stroke(new Path2D(String(o.d)));else if(r==="circle")s.arc(a("cx"),a("cy"),a("r"),0,Math.PI*2),s.stroke();else if(r==="ellipse")s.ellipse(a("cx"),a("cy"),a("rx"),a("ry"),0,0,Math.PI*2),s.stroke();else if(r==="line")s.moveTo(a("x1"),a("y1")),s.lineTo(a("x2"),a("y2")),s.stroke();else if(r==="rect")s.roundRect(a("x"),a("y"),a("width"),a("height"),a("rx")),s.stroke();else if(r==="polyline"||r==="polygon"){const c=String(o.points).trim().split(/[\s,]+/).map(Number);for(let l=0;l+1<c.length;l+=2)(l?s.lineTo:s.moveTo).call(s,c[l],c[l+1]);r==="polygon"&&s.closePath(),s.stroke()}}s.restore(),this.texture.needsUpdate=!0}}const K0={press:{freq:2e3,ms:40,gain:.35,type:"triangle"},release:{freq:1500,ms:30,gain:.2,type:"triangle"},on:{freq:2400,ms:50,gain:.32,type:"triangle"},off:{freq:1400,ms:50,gain:.3,type:"triangle"},step:{freq:1800,ms:40,gain:.26,type:"triangle"},detent:{freq:1600,ms:14,gain:.1,type:"triangle"},grab:{freq:1300,ms:35,gain:.25,type:"triangle"}},j0=.012,J0=30;let wi=null,Ti=null,Q0=1;const El=new Map;function Va(){if(!wi){try{wi=new AudioContext({latencyHint:"interactive"})}catch(t){return console.warn(`[sound] no audio: ${t}`),null}const i=wi;i.onstatechange=()=>{console.log(`[sound] audio ${i.state}, ${i.sampleRate} Hz`),i.state==="running"&&Ah(i)}}return wi.state==="suspended"&&wi.resume().catch(i=>console.warn(`[sound] resume failed: ${i}`)),wi}Va();for(const i of["pointerdown","keydown"])addEventListener(i,()=>Va(),{capture:!0});function Ah(i){if(Ti)return Ti;Ti=i.createGain(),Ti.gain.value=Q0,Ti.connect(i.destination);const t=i.sampleRate*2,e=i.createBuffer(1,t,i.sampleRate),n=e.getChannelData(0);for(let r=0;r<t;r++)n[r]=(Math.random()*2-1)*1e-4;const s=i.createBufferSource();return s.buffer=e,s.loop=!0,s.connect(i.destination),s.start(),Ti}function tv(){const i=Va();return i&&i.state==="running"?i:null}function pr(i){return 2**Math.min(1,Math.max(0,i))}function Ae(i,t=1){const e=tv();if(!e)return;const n=performance.now();if(n-(El.get(i)??-1/0)<J0)return;El.set(i,n);const s=K0[i],r=e.currentTime+j0,o=r+s.ms/1e3,a=s.freq*t,c=e.createOscillator(),l=e.createGain();c.type=s.type,c.frequency.setValueAtTime(a,r),c.frequency.exponentialRampToValueAtTime(a*.7,o),l.gain.setValueAtTime(1e-4,r),l.gain.exponentialRampToValueAtTime(s.gain,r+.002),l.gain.exponentialRampToValueAtTime(1e-4,o),c.connect(l).connect(Ah(e)),c.start(r),c.stop(o+.01)}const ev=.009,nr=.008,mo=.012;class Lr extends ci{constructor(t){const e=t.shape==="pill",n=e?.07:.05,s=e?.028:.05;super(t.title,-s/2-.016),this.clicks=0,this.cap=new Re,this.cursor=ka(),this.top=mo+nr,this.shown=0,this.hover=0;const r=new Ot(e?Qe(n+.008,s+.008,.004,(s+.008)/2):Ss(n/2+.004,.004),_e(Lt.well));this.capMaterial=_e(Lt.cap,{roughness:.35});const o=new Ot(e?Qe(n,s,nr,s/2):Ss(n/2,nr),this.capMaterial),a=!e&&t.icon?new $0(t.icon,{size:.022,stroke:t.iconStroke}):new ri(t.text,{size:e?.0085:.019,color:"#30363f",weight:e?600:900});a.position.z=nr+3e-4,this.cap.add(o,a),this.cap.position.z=mo,this.add(r,this.cap,this.cursor);const c=e?(l,h)=>Math.abs(l)<n/2&&Math.abs(h)<s/2:(l,h)=>Math.hypot(l,h)<n/2;this.poke=this.target(new Gi(this,{inside:c,top:this.top,travel:ev})),this.poke.on(l=>{l.type==="start"?this.click(yr(l.source)):l.type==="end"&&(Ae("release"),this.emit("release",{source:yr(l.source)}))}),this.status.set("Clicks: 0")}update(t){const e=this.poke.state,n=this.enabled?e.depth:0;this.shown=n>this.shown?n:Pe(this.shown,n,t),this.cap.position.z=mo-this.shown;const s=this.enabled?Math.max(e.proximity,e.mouseOver?.6:0):0;this.hover=Pe(this.hover,s,t);const r=e.held;this.capMaterial.color.set(Lt.cap).lerp(new It(Lt.accent),r?.55:this.hover*.25),this.capMaterial.emissive.set(Lt.accent).multiplyScalar(r?.25:this.hover*.08),Ha(this.cursor,this.poke,this.top-this.shown,this.enabled),this.fade(t)}click(t){this.clicks++,Ae("press"),this.status.set(`Clicks: ${this.clicks}`),this.emit("click",{source:t})}}const Dn=.022,go=.014,_o=.003,vo=Fn.degToRad(270),bl=Fn.degToRad(225),wl=20,xo=28,nv=.1;class iv extends ci{constructor(t){super(t,-Dn-.024),this.value=0,this.knob=new Re,this.knobMaterial=_e(Lt.cap,{roughness:.35}),this.ticks=[],this.angle=null,this.mouseAt=null,this.shown=0,this.hover=0,this.press=0,this.add(new Ot(Ss(Dn+.012,.004),_e(Lt.well)));for(let r=0;r<xo;r++){const o=bl-r/(xo-1)*vo,a=new Ot(Th(.0013,8e-4,12),_e(Lt.track));a.position.set(Math.cos(o)*(Dn+.0065),Math.sin(o)*(Dn+.0065),.004),this.ticks.push(a),this.add(a)}const e=new Ot(Ss(Dn,go),this.knobMaterial),n=.00205,s=new Ot(Qe(n,Dn*.5,8e-4,n/2),_e("#30363f",{roughness:.6}));s.position.set(0,Dn*.6,go-1e-4),this.knob.add(e,s),this.knob.position.z=_o,this.add(this.knob),this.pinch=this.target(new wh(this,{position:new T(0,0,_o+go)})),this.pinch.on(r=>{if(r.source==="mouse"){if(r.type==="start")this.mouseAt=new nt(r.local.x,r.local.y),Ae("grab"),this.emit("grab",{mode:"mouse"});else if(r.type==="move"&&this.mouseAt){const a=r.local.x-this.mouseAt.x,c=r.local.y-this.mouseAt.y;this.mouseAt.set(r.local.x,r.local.y),this.setValue(this.value+(Math.abs(a)>Math.abs(c)?a:c)/nv,"mouse")}else r.type==="end"&&(this.mouseAt=null,this.emit("release"));return}const o=Math.atan2(r.local.y,r.local.x);r.type==="start"?(this.angle=o,Ae("grab"),this.emit("grab",{mode:r.source==="mouse"?"mouse":"pinch"})):r.type==="move"&&this.angle!==null?(Math.hypot(r.local.x,r.local.y)>Dn*.3&&this.turn(o-this.angle,r.source==="mouse"?"mouse":"pinch"),this.angle=o):r.type==="end"&&(this.angle=null,this.emit("release"))}),this.showStatus()}showStatus(){this.status.set(`Value: ${Math.round(this.value*100)}`)}turn(t,e){t=Math.atan2(Math.sin(t),Math.cos(t)),this.setValue(this.value-t/vo,e)}setValue(t,e){const n=Fn.clamp(t,0,1);if(n===this.value)return;const s=Math.round(this.value*wl);this.value=n,Math.round(n*wl)!==s&&Ae(n===0||n===1?"step":"detent",pr(n)),this.showStatus(),this.emit("change",{value:n,source:e})}update(t){const e=this.pinch.state;this.shown=Pe(this.shown,this.value,t,30),this.knob.rotation.z=bl-Math.PI/2-this.shown*vo,this.press=Pe(this.press,e.held?1:0,t),this.hover=Pe(this.hover,this.enabled?Math.max(e.proximity*.6,e.mouseOver?.6:0):0,t),this.knob.position.z=_o+this.press*.002,this.knobMaterial.color.set(Lt.cap).lerp(new It(Lt.accent),this.press*.55+this.hover*.25),this.knobMaterial.emissive.set(Lt.accent).multiplyScalar(this.press*.25+this.hover*.08);const n=this.shown*(xo-1);this.ticks.forEach((s,r)=>s.material.color.set(r<=n+1e-6?Lt.accent:Lt.track)),this.fade(t)}cancel(){this.angle=null,this.mouseAt=null}}const sv=`
varying vec2 vP;
void main() {
  vP = position.xy;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,rv=`
uniform vec2 halfSize;
uniform float radius;
uniform float falloff;
uniform float feather;
uniform float peak;
uniform float strength;
uniform float opacity;
uniform vec2 tilt;
varying vec2 vP;
void main() {
  vec2 inner = halfSize - radius;
  vec2 q = abs(vP) - inner;
  float sd = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - radius;  // < 0 inside the outline
  // Feathered border: no MSAA on a 3D display, so the outer edge fades over a few pixels instead of cutting.
  float aa = max(fwidth(sd), 1e-5);
  float inside = 1.0 - smoothstep(-feather - aa, aa, sd);
  if (inside <= 0.0) discard;
  // Outward direction of the nearest edge point.
  vec2 g = max(q, 0.0);
  vec2 n = length(g) > 1e-6 ? normalize(g) * sign(vP) : (q.x > q.y ? vec2(sign(vP.x), 0.0) : vec2(0.0, sign(vP.y)));
  // Light from the upper left, moved by the viewing angle.
  vec2 L = normalize(vec2(-0.45, 0.9) - tilt * 1.2);
  float facing = pow(clamp(dot(n, L) * 0.5 + 0.5, 0.0, 1.0), 3.0);
  // The light peaks just inside the outline and fades both ways: a soft line, never a hard rim.
  float d = sd + peak;
  float line = exp(-(d * d) / (falloff * falloff));
  float a = line * (0.12 + 0.88 * facing) * strength * opacity * inside;
  gl_FragColor = vec4(vec3(1.0), a);
}`;class ov extends Ot{constructor(t){super(new Bn(t.width,t.height),new Sn({vertexShader:sv,fragmentShader:rv,uniforms:{halfSize:{value:new nt(t.width/2,t.height/2)},radius:{value:t.radius},falloff:{value:t.falloff??75e-5},feather:{value:4e-4},peak:{value:6e-4},strength:{value:t.strength??.6},opacity:{value:1},tilt:{value:new nt}},transparent:!0,depthWrite:!1,blending:_r})),this.eye=new T,this.tilts=new Map,this.onBeforeRender=(e,n,s)=>{this.eye.setFromMatrixPosition(s.matrixWorld),this.worldToLocal(this.eye);const r=Math.max(.05,this.eye.z),o=performance.now();let a=this.tilts.get(s.uuid);a||(a={v:new nt(this.eye.x/r,this.eye.y/r),at:o},this.tilts.set(s.uuid,a));const c=1-Math.exp(-Math.min(.1,(o-a.at)/1e3)*4);a.v.x+=(this.eye.x/r-a.v.x)*c,a.v.y+=(this.eye.y/r-a.v.y)*c,a.at=o,this.material.uniforms.tilt.value.copy(a.v)},this.userData.keepLook=!0,this.raycast=()=>{},this.renderOrder=2}set opacity(t){this.material.uniforms.opacity.value=t}}class av extends ci{constructor(t){super(t.title,0),this.isOpen=!1,this.sheet=new Re,this.shown=0,this.title.visible=this.status.visible=!1;const e=t.width??.2,n=t.height??.12;this.lift=t.lift??.07,this.pane=new Ot(Qe(e,n,.006,.014,5e-4),q0());const s=new Ot(Qe(e-.002,n-.002,5e-4,.013),new Ve({color:"#ffffff",transparent:!0,opacity:.14,depthWrite:!1}));s.position.z=.0062,s.userData.keepLook=!0,this.edge=new ov({width:e,height:n,radius:.014}),this.edge.position.z=.0065;const r=new ri(t.title,{size:.011,weight:700});r.position.set(0,n/2-.022,.0075);const o=new ri(t.text,{size:.0072,weight:500,color:Lt.text});o.position.set(0,.006,.0075),this.closeButton=new Lr({title:"",shape:"pill",text:t.closeText??"Close"}),this.closeButton.title.visible=this.closeButton.status.visible=!1,this.closeButton.position.set(0,-n/2+.028,.0075),this.closeButton.on("click",a=>this.close(a.source)),this.sheet.add(this.pane,s,this.edge,r,o,this.closeButton),this.closeButton.traverse(a=>{const c=a.material;c&&(c.transparent=!0)}),this.sheet.position.z=this.lift,this.add(this.sheet),this.blocker=this.target(new Gi(this.sheet,{inside:(a,c)=>Math.abs(a)<e/2&&Math.abs(c)<n/2,top:.002,travel:.004})),this.blocker.tuning={pokeMargin:0},this.visible=!1,this.blocker.enabled=!1,this.closeButton.setEnabled(!1)}attach(t){return super.attach(t),this.closeButton.attach(t),this}detach(){super.detach(),this.closeButton.detach()}open(t="code"){this.isOpen||(this.isOpen=!0,this.visible=!0,this.blocker.enabled=this.enabled,this.closeButton.setEnabled(this.enabled),t!=="code"&&Ae("on"),this.emit("open",{source:t}))}close(t="code"){this.isOpen&&(this.isOpen=!1,this.blocker.enabled=!1,this.closeButton.setEnabled(!1),t!=="code"&&Ae("off"),this.emit("close",{source:t}))}setEnabled(t){super.setEnabled(t),this.blocker.enabled=t&&this.isOpen,this.closeButton.setEnabled(t&&this.isOpen)}update(t){this.shown=Pe(this.shown,this.isOpen?1:0,t,14),!this.isOpen&&this.shown<.02&&(this.visible=!1),this.sheet.scale.setScalar(.9+.1*this.shown),this.sheet.position.z=this.lift-(1-this.shown)*.02,this.edge.opacity=this.shown*(this.enabled?1:.3),this.closeButton.update(t),this.fade(t)}}const os=.034,ir=.024,Mo=.003,sr=.007,rr=.006,cv=.006,lv=.003;class hv extends ci{constructor(t,e,n=0){const s=e.length*os+(e.length-1)*Mo;super(t,-ir/2-.016),this.options=e,this.index=n,this.add(new Ot(Qe(s+.008,ir+.008,.004,.006),_e(Lt.well))),this.segments=e.map((r,o)=>{const a=-s/2+os/2+o*(os+Mo),c=_e(Lt.capDark,{roughness:.4}),l=new Re,h=new ri(r,{size:.008,color:Lt.text});h.position.z=sr+3e-4,l.add(new Ot(Qe(os,ir,sr,.004),c),h),l.position.set(a,0,rr);const u=ka();this.add(l,u);const d=this.target(new Gi(this,{inside:(p,g)=>Math.abs(p-a)<os/2+Mo/2&&Math.abs(g)<ir/2,centre:new nt(a,0),top:rr+sr,travel:cv}));return d.on(p=>{p.type==="start"&&this.select(o,yr(p.source))}),{cap:l,material:c,label:h,poke:d,cursor:u,x:a,shown:0,hover:0}}),this.showStatus()}select(t,e="code"){t!==this.index&&(this.index=t,e!=="code"&&Ae("press"),this.showStatus(),this.emit("change",{index:t,value:this.options[t],source:e}))}showStatus(){this.status.set(`Selected: ${this.options[this.index]}`)}update(t){this.segments.forEach((e,n)=>{const s=e.poke.state,r=Math.max(this.enabled?s.depth:0,n===this.index?lv:0);e.shown=r>e.shown?r:Pe(e.shown,r,t),e.cap.position.z=rr-e.shown,e.hover=Pe(e.hover,this.enabled?Math.max(s.proximity,s.mouseOver?.6:0):0,t);const o=n===this.index;e.material.color.set(Lt.capDark).lerp(new It(Lt.accent),o?.85:e.hover*.3),e.material.emissive.set(Lt.accent).multiplyScalar(o?.15:e.hover*.08),Ha(e.cursor,e.poke,rr+sr-e.shown,this.enabled)}),this.fade(t)}}const Ri=.012,or=.005,uv=Ri*.55,yo=.022,So=.032,mr=.014,gr=.004,dv=gr+mr,Tl=.006;class Rh extends ci{constructor(t){super(t.title,-.032),this.handle=new Re,this.handleMaterial=_e(Lt.cap,{roughness:.4}),this.fillBuiltW=0,this.grab=null,this.hover=0,this.press=0,this.length=t.length??.15,this.steps=t.steps&&t.steps>=2?t.steps:null,this.value=this.snap(t.value??0);const e=this.length,n=new Ot(Qe(e+Ri,Ri,or,Ri/2),_e(Lt.track));if(this.fill=new Ot(new Le,_e(Lt.accent)),this.fill.visible=!this.steps,this.add(n,this.fill),this.steps)for(let r=0;r<this.steps;r++){const o=new Ot(Th(.0016,8e-4,16),_e(Lt.muted));o.position.set(-e/2+r/(this.steps-1)*e,0,or),this.add(o)}this.handle.add(new Ot(Qe(yo,So,mr,.004),this.handleMaterial));for(const r of[-.005,0,.005]){const o=new Ot(new Yi(.0012,So*.7,.0012),_e(r===0?Lt.accent:"#8d96a6"));o.position.set(r,0,mr),this.handle.add(o)}this.handle.position.z=gr,this.add(this.handle),this.shownX=this.xOf(this.value);const s=()=>this.xOf(this.value);this.pinch=this.target(new wh(this,{position:new T(s(),0,gr+mr/2)})),this.touch=this.target(new Gi(this,{inside:(r,o)=>Math.abs(r-s())<yo/2&&Math.abs(o)<So/2,centre:new nt(s(),0),top:dv,travel:Tl})),this.track=this.target(new Gi(this,{inside:(r,o)=>Math.abs(r)<e/2+Ri/2&&Math.abs(o)<Ri/2&&Math.abs(r-s())>=yo/2,top:or,travel:.005})),this.pinch.on(r=>this.onTarget(r,"pinch",!0)),this.touch.on(r=>this.onTarget(r,"touch",!0)),this.track.on(r=>this.onTarget(r,"touch",!1)),this.showStatus()}onTarget(t,e,n){const s=t.source==="mouse"?"mouse":e;if(t.type==="start"){if(this.grab)return;const r=n?this.xOf(this.value)-t.local.x:0;this.begin(s,r),n||this.moveTo(t.local.x,s)}else t.type==="move"?this.grab&&this.moveTo(t.local.x+this.grab.offset,s):t.type==="end"&&this.release()}xOf(t){return-this.length/2+t*this.length}snap(t){return t=Fn.clamp(t,0,1),this.steps?Math.round(t*(this.steps-1))/(this.steps-1):t}get step(){return this.steps?Math.round(this.value*(this.steps-1)):0}showStatus(){this.status.set(this.steps?`Step: ${this.step+1} / ${this.steps}`:`Value: ${this.value.toFixed(2)}`)}moveTo(t,e){const n=this.snap((t+this.length/2)/this.length);if(n===this.value)return;const s=this.step,r=this.value;this.value=n,this.steps&&this.step!==s&&Ae("step",pr(n)),this.steps||(n===0||n===1?Ae("step",pr(n)):Math.floor(n*20)!==Math.floor(r*20)&&Ae("detent",pr(n))),this.showStatus(),this.emit("change",{value:n,step:this.step,source:e})}update(t){var s;const e=this.xOf(this.value);this.pinch.position.x=e,this.touch.centre.x=e;const n=Math.max(this.touch.state.proximity,this.pinch.state.proximity*.5,this.track.state.proximity*.5,this.mouseOver?.6:0);if(this.shownX=Pe(this.shownX,e,t,this.steps?16:40),this.press=Pe(this.press,this.grab?1:0,t),this.hover=Pe(this.hover,this.enabled?n:0,t),this.handle.position.set(this.shownX,0,gr+this.press*.003-(((s=this.grab)==null?void 0:s.mode)==="touch"?Math.min(this.touch.state.depth,Tl)*.5:0)),this.handleMaterial.color.set(Lt.cap).lerp(new It(Lt.accent),this.press*.5+this.hover*.2),this.handleMaterial.emissive.set(Lt.accent).multiplyScalar(this.press*.2+this.hover*.08),!this.steps){const r=uv,o=-this.length/2-r/2,a=Math.max(r,this.shownX+r/2-o);Math.abs(a-this.fillBuiltW)>5e-4&&(this.fill.geometry.dispose(),this.fill.geometry=Qe(a,r,or+6e-4,r/2),this.fillBuiltW=a),this.fill.position.x=o+this.fillBuiltW/2}this.fade(t)}begin(t,e){this.grab={mode:t,offset:e},Ae("grab"),this.emit("grab",{mode:t})}release(){if(!this.grab)return;const t=this.grab.mode;this.grab=null,Ae("release",.8),this.emit("release",{mode:t})}cancel(){this.release()}}const pa=.064,hs=.03,fv=.0115,Al=.008,Eo=.008,pv=.007,qn=pa/2-hs/2;class Ch extends ci{constructor(t,e=!1){super(t,-hs/2-.016),this.isOn=!1,this.toggles=0,this.knob=new Re,this.trackMaterial=_e(Lt.track),this.knobMaterial=_e(Lt.cap,{roughness:.35}),this.cursor=ka(),this.top=Eo+Al,this.x=-qn,this.shown=0,this.hover=0,this.isOn=e,this.x=e?qn:-qn;const n=new Ot(Qe(pa,hs,.006,hs/2),this.trackMaterial);this.knob.add(new Ot(Ss(fv,Al),this.knobMaterial)),this.knob.position.z=Eo,this.add(n,this.knob,this.cursor),this.poke=this.target(new Gi(this,{inside:(s,r)=>Math.abs(s)<pa/2&&Math.abs(r)<hs/2,top:this.top,travel:pv})),this.poke.on(s=>{s.type==="start"&&this.set(!this.isOn,yr(s.source))}),this.showStatus()}set(t,e="code"){t!==this.isOn&&(this.isOn=t,e!=="code"&&(this.toggles++,Ae(t?"on":"off")),this.showStatus(),this.emit("change",{on:t,source:e}))}showStatus(){this.status.set(`${this.isOn?"On":"Off"} (toggles: ${this.toggles})`)}update(t){const e=this.poke.state,n=this.enabled?e.depth:0;this.shown=n>this.shown?n:Pe(this.shown,n,t),this.x=Pe(this.x,this.isOn?qn:-qn,t,14),this.knob.position.set(this.x,0,Eo-this.shown);const s=(this.x+qn)/(2*qn);this.trackMaterial.color.set(Lt.track).lerp(new It(Lt.accent),s),this.hover=Pe(this.hover,this.enabled?Math.max(e.proximity,e.mouseOver?.6:0):0,t),this.knobMaterial.emissive.set(Lt.accent).multiplyScalar(this.hover*.12),Ha(this.cursor,this.poke,this.top-this.shown,this.enabled),this.fade(t)}}const Rl={x:new T(1,0,0),y:new T(0,1,0),z:new T(0,0,1)};class mv extends ci{constructor(t,e){super(t,-e-.02),this.object=new Re,this.turned={free:0,x:0,y:0,z:0},this.rings={},this.last=new ve,this.points=[],this.mouse=null,this.wasTouching=!1,this.radius=e,this.object.add(gv(e*.62));for(const[n,s]of Object.entries(Rl)){const r=new Ot(new Ua(e*.8,e*.012,8,96),new Ve({color:Lt.accent,transparent:!0,opacity:0}));r.quaternion.setFromUnitVectors(new T(0,0,1),s),r.visible=!1,r.userData.keepLook=!0,r.raycast=()=>{},this.rings[n]=r,this.object.add(r)}this.add(this.object),this.ball=new B0(this.object,{radius:e,axis:"free",engageCount:1,releaseCount:0}),this.shell=new z0({radius:e,color:Lt.accent,dotRadius:.02}),this.shell.userData.keepLook=!0,this.shell.raycast=()=>{},this.object.add(this.shell),this.volume=this.target(new H0(this,{radius:e})),this.volume.on(n=>{if(n.source==="mouse"){n.type==="start"?(this.ball.stop(),this.mouse=n.ray?this.sphereHit(n.ray):null,this.showStatus()):n.type==="move"&&n.ray?this.mouseDrag(n.ray):n.type==="end"&&(this.mouse=null,this.showStatus());return}this.points=n.type==="end"?[]:n.points}),this.showStatus()}get axis(){return this.ball.axis}set axis(t){this.ball.axis=t,this.showStatus()}showStatus(){const t=this.axis==="free"?"Full":this.axis.toUpperCase();this.status.set(`${this.ball.touching||this.mouse?"Rotating":"Idle"} (mode: ${t})`)}update(t){this.last.copy(this.object.quaternion),this.ball.update(t,this.enabled&&this.volume.state.held?this.points:[]),this.shell.active=this.enabled&&(this.ball.touching||!!this.mouse),this.shell.update(t),this.ball.touching!==this.wasTouching&&(this.wasTouching=this.ball.touching,this.showStatus(),this.emit(this.ball.touching?"grab":"release",{mode:"hand"})),(this.ball.touching||this.mouse)&&this.count(this.last);for(const[e,n]of Object.entries(this.rings)){const s=this.axis===e?this.ball.touching||this.mouse?.9:.45:0;n.material.opacity=Pe(n.material.opacity,s,t,10),n.visible=n.material.opacity>.01}this.fade(t)}count(t){const e=Fn.radToDeg(t.angleTo(this.object.quaternion));e>0&&(this.turned[this.axis]+=e,this.emit("rotate",{axis:this.axis,total:this.turned[this.axis]}))}cancel(){this.ball.stop(),this.points=[],this.mouse=null}sphereHit(t){const e=this.getWorldPosition(new T);return(t.intersectSphere(new On(e,this.radius),new T)??t.closestPointToPoint(e,new T)).sub(e).normalize()}mouseDrag(t){const e=this.sphereHit(t);if(!e||!this.mouse)return;const n=this.mouse.clone(),s=new ve;if(this.axis==="free")s.setFromUnitVectors(n,e);else{const o=Rl[this.axis].clone().applyQuaternion(this.object.getWorldQuaternion(new ve)),a=n.addScaledVector(o,-n.dot(o)),c=e.clone().addScaledVector(o,-e.dot(o));if(a.lengthSq()>1e-8&&c.lengthSq()>1e-8){const l=a.angleTo(c)*Math.sign(new T().crossVectors(a,c).dot(o)||1);s.setFromAxisAngle(o,l)}}const r=this.object.quaternion.clone();this.object.quaternion.premultiply(s),this.count(r),this.mouse=e}}function gv(i){const t=new Re,e=_e("#9aa6b8",{flatShading:!0,roughness:.55,metalness:.15}),n=new Ot(new Cr(i,1),e);n.scale.set(1,.92,.88);const s=_e("#1c2230",{roughness:.3}),r=_e(Lt.accent,{emissive:Lt.accent,emissiveIntensity:.8});for(const l of[-.36,.36]){const h=new Ot(new ti(i*.24,16,12),s);h.position.set(l*i,i*.15,i*.72);const u=new Ot(new ti(i*.1,12,8),r);u.position.set(l*i,i*.15,i*.9),t.add(h,u)}const o=new Ot(new La(i*.12,i*.35,6).rotateX(Math.PI/2),e);o.position.set(0,-i*.12,i*.95);const a=new Ot(new ii(i*.03,i*.03,i*.4,6),s);a.position.y=i*1.05;const c=new Ot(new ti(i*.09,12,8),r);c.position.y=i*1.27;for(const l of[-1,1]){const h=new Ot(new ii(i*.2,i*.2,i*.14,8).rotateZ(Math.PI/2),s);h.position.x=l*i*.98,t.add(h)}return t.add(n,o,a,c),t}/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]],as=46,Ze=24,vv=600;class xv extends Ot{constructor(t,e){const n=document.createElement("canvas");n.width=vv,n.height=Ze*2+as*(t.length+1.4);const s=new Ra(n);s.colorSpace=Se,s.anisotropy=4,super(new Bn(e,e*n.height/n.width),new Ve({map:s,transparent:!0,depthWrite:!1})),this.done=new Set,this.items=t,this.canvas=n,this.texture=s,this.raycast=()=>{},this.draw()}check(t){this.done.has(t)||!this.items.some(e=>e.id===t)||(this.done.add(t),this.draw())}has(t){return this.done.has(t)}reset(){this.done.clear(),this.draw()}draw(){const t=this.canvas.getContext("2d"),{width:e,height:n}=this.canvas;t.clearRect(0,0,e,n),t.fillStyle="rgba(255,255,255,0.04)",t.beginPath(),t.roundRect(0,0,e,n,18),t.fill(),t.textBaseline="middle",t.font='700 30px "Segoe UI", system-ui, sans-serif',t.fillStyle=Lt.text,t.fillText(`UI Kit checklist  ${this.done.size}/${this.items.length}`,Ze,Ze+as*.5),t.font='500 22px "Segoe UI", system-ui, sans-serif',t.fillStyle=Lt.muted,t.textAlign="right",t.fillText("Tab = hide · R = reset",e-Ze,Ze+as*.5),t.textAlign="left",this.items.forEach((s,r)=>{const o=Ze+as*(r+1.4)+as/2,a=this.done.has(s.id);t.strokeStyle=a?Lt.done:Lt.muted,t.lineWidth=3,t.strokeRect(Ze+2,o-11,22,22),a&&(t.beginPath(),t.moveTo(Ze+7,o),t.lineTo(Ze+12,o+6),t.lineTo(Ze+21,o-6),t.stroke()),t.font='500 25px "Segoe UI", system-ui, sans-serif',t.fillStyle=a?Lt.done:Lt.text,t.fillText(s.text,Ze+40,o)}),this.texture.needsUpdate=!0}}const Ga=new Jg(V0());Ga.outputColorSpace=Se;document.body.appendChild(Ga.domElement);const Mn=W0(Ga,{mapping:{mode:"world",center:new T(0,0,0),scale:1},pointer:!1}),En=new Qg;En.background=new It(Lt.background);En.add(new N_("#dfe8ff","#1a1e26",1.6));const Ph=new B_("#ffffff",2.2);Ph.position.set(-.3,.5,.8);En.add(Ph);En.add(Mn.handsObject);const Sr=new Te(38,16/9,.01,5);Sr.position.set(0,0,.6);const Wa=new Lr({title:"Button (pill)",shape:"pill",text:"Press"}),Xa=new Lr({title:"Button (round)",shape:"round",text:"",icon:_v}),qa=new Ch("Switch"),Ni=new Ch("Interactable",!0),Es=new Rh({title:"Stepped slider",steps:5,value:.25,length:.13}),Dr=new Rh({title:"Slider",value:.5,length:.13}),sn=new mv("Trackball",.056),Wi=new hv("",["Full","X","Y","Z"]),Ya=new iv("Dial"),Za=new Lr({title:"Dialog",shape:"pill",text:"Open"}),Ts=new av({title:"Glass dialog",text:`A sheet 7 cm in front of the board.
The board shows through, blurred.`});Wi.title.visible=Wi.status.visible=!1;const Mv=[Wa,Za,qa,Ni,Xa];function Lh(i){const t=i?[-.24,-.15,-.062,.028,.12]:[-.235,-.14,-.045,.045,.215];Mv.forEach((e,n)=>e.position.set(t[n],.105,0))}Lh(!0);Es.position.set(-.19,-.02,0);Dr.position.set(-.19,-.1,0);sn.position.set(0,-.01,.02);Wi.position.set(0,-.128,0);Ya.position.set(.215,-.075,0);Ts.position.set(0,0,0);const As=[Wa,Xa,qa,Ni,Es,Dr,sn,Wi,Ya,Za,Ts];En.add(...As);for(const i of As)i.attach(Mn.interaction);Mn.bindMouse();En.add(Mn.cursorObject);const $a=new ri("Poke buttons with a fingertip  ·  touch-drag or pinch slider handles  ·  pinch the dial’s edge and circle  ·  reach into the sphere  ·  Tab: checklist",{size:.0058,weight:500,color:Lt.muted});$a.position.set(0,-.158,0);En.add($a);const Dh=.13,Cl=.012,he=new xv([{id:"pill",text:"Button (pill): press"},{id:"round",text:"Button (round): press"},{id:"switch",text:"Switch: on and off"},{id:"slider-ends",text:"Slider: drag to both ends"},{id:"slider-touch",text:"Slider: touch-drag"},{id:"slider-pinch",text:"Slider: pinch-drag"},{id:"stepped",text:"Stepped slider: last step, then first"},{id:"stepped-pinch",text:"Stepped slider: pinch"},{id:"dial",text:"Dial: turn to both ends"},{id:"mode",text:"Mode: pick every option"},{id:"tb-free",text:"Trackball: rotate in Full"},{id:"tb-x",text:"Trackball: rotate in X"},{id:"tb-y",text:"Trackball: rotate in Y"},{id:"tb-z",text:"Trackball: rotate in Z"},{id:"interactable",text:"Interactable: off, then on"},{id:"dialog",text:"Dialog: open, then close"}],Dh),yv=he.geometry.parameters.height;he.position.set(.597/2-Cl-Dh/2,.336/2-Cl-yv/2,0);En.add(he);const Ce={sliderMin:!1,sliderMax:!1,steppedLast:!1,dialMin:!1,dialMax:!1,modes:new Set([0]),interactableOff:!1};Wa.on("click",()=>he.check("pill"));Za.on("click",i=>Ts.open(i.source));Ts.on("close",()=>he.check("dialog"));Xa.on("click",()=>he.check("round"));let ma=new Set;qa.on("change",i=>{ma.add(i.on),ma.size===2&&he.check("switch")});Dr.on("grab",i=>{i.mode==="touch"&&he.check("slider-touch"),i.mode==="pinch"&&he.check("slider-pinch")});Dr.on("change",i=>{i.value===0&&(Ce.sliderMin=!0),i.value===1&&(Ce.sliderMax=!0),Ce.sliderMin&&Ce.sliderMax&&he.check("slider-ends")});Es.on("grab",i=>{i.mode==="pinch"&&he.check("stepped-pinch")});Es.on("change",i=>{i.step===Es.steps-1&&(Ce.steppedLast=!0),i.step===0&&Ce.steppedLast&&he.check("stepped")});Ya.on("change",i=>{i.value===0&&(Ce.dialMin=!0),i.value===1&&(Ce.dialMax=!0),Ce.dialMin&&Ce.dialMax&&he.check("dial")});const ga=["free","x","y","z"];Wi.on("change",i=>{sn.axis=ga[i.index],Ce.modes.add(i.index),Ce.modes.size===ga.length&&he.check("mode")});sn.on("rotate",i=>{i.total>90&&he.check(`tb-${i.axis}`)});Ni.on("change",i=>{for(const t of As)t!==Ni&&t!==Ts&&t.setEnabled(i.on);Ni.status.set(`${i.on?"On":"Off: other controls ignore input"}`),i.on?Ce.interactableOff&&he.check("interactable"):Ce.interactableOff=!0});Ni.status.set("On");let ar=0;addEventListener("keydown",i=>{if(i.key==="Tab"){i.preventDefault(),he.visible=!he.visible,Lh(he.visible);return}if(i.key==="s"||i.key==="S"){ar?(clearInterval(ar),ar=0,console.log("[sound] metronome off")):(ar=setInterval(()=>Ae("press"),400),console.log("[sound] metronome on"));return}if(!(i.key!=="r"&&i.key!=="R")){he.reset(),Object.assign(Ce,{sliderMin:!1,sliderMax:!1,steppedLast:!1,dialMin:!1,dialMax:!1,modes:new Set([Wi.index]),interactableOff:!1}),ma=new Set;for(const t of ga)sn.turned[t]=0}});if(Mn.icon){for(const t of[...As,$a,he])t.visible=!1;sn.visible=!0,sn.title.visible=sn.status.visible=!1,sn.object.rotation.set(-.15,.45,0);const i=sn.getWorldPosition(new T);Sr.position.copy(i).add(new T(0,0,.17)),Sr.lookAt(i)}addEventListener("resize",()=>Mn.setSize());let Pl=performance.now();Mn.setAnimationLoop(i=>{const t=Math.min(.1,(i-Pl)/1e3);if(Pl=i,!Mn.icon)for(const e of As)e.update(t);Mn.render(En,Sr)});

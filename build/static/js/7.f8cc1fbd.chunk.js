(this.webpackJsonpJosiahBuxton=this.webpackJsonpJosiahBuxton||[]).push([[7],{513:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(20),a={success:function(e){return{type:r.a.SUCCESS,message:e}},error:function(e){return{type:r.a.ERROR,message:e}},visible:function(e){return{type:r.a.VISIBLE,show:e}},clear:function(){return{type:r.a.CLEAR}}};var o=n(519),i=n.n(o),s=i.a.initializeApp({apiKey:"AIzaSyDgllL9hOGEIR7EZZlKp-L6L00dnOhSNlE",authDomain:"artres-e36ad.firebaseapp.com",databaseURL:"https://artres-e36ad.firebaseio.com",projectId:"artres-e36ad",storageBucket:"",messagingSenderId:"734256624133",appId:"1:734256624133:web:963b27ac35ca0585"}),u={login:c,logout:function(){return function(e){e({type:r.c.LOGOUT})}},reset:function(){return function(e){e(d.dataReset())}},register:function(e,t,n,o,i){return function(u){var l;u((l=e,{type:r.c.REGISTER_REQUEST,user:l})),s.auth().createUserWithEmailAndPassword(e,n).then((function(i){s.firestore().collection("users").doc(i.user.uid).set({email:e,username:t,firstName:"",lastName:"",phone:"",headshot:"https://s3.amazonaws.com/dejafood.com/mobile_assets/deja_gradient.png"}),u(function(e){return{type:r.c.REGISTER_SUCCESS,user:e}}(i)),u(c(e,n,o)),u(a.visible(!1)),u(a.clear())})).catch((function(e){u(function(e){return{type:r.c.REGISTER_FAILURE,error:e}}(!0,e.toString())),u(a.error(e.toString())),u(a.visible(!0)),i.getElementById("inputEmail").style.borderColor="red",i.getElementById("inputUsername").style.borderColor="red",i.getElementById("inputPassword").style.borderColor="red"}))}},forgotPassword:function(e,t){return function(n){s.auth().sendPasswordResetEmail(e).then((function(){n(a.visible(!0)),n(a.error("Successfully sent password reset email!"))})).catch((function(e){n(a.error(e.toString())),n(a.visible(!0)),t.getElementById("inputEmail").style.borderColor="red"}))}},loginFailure:l,googleLogin:function(e){return function(e){var n=new i.a.auth.GoogleAuthProvider;s.auth().signInWithPopup(n).then((function(n){var o=n.credential.accessToken,i=n.user,u={};i&&s.firestore().collection("users").doc(i.uid).get().then((function(l){l.data()?(u.email=l.data().email,u.username=l.data().username,u.phone=l.data().phone,u.firstName=l.data().firstName,u.lastName=l.data().lastName,u.headshot=l.data().headshot,u.googleCredential=o):s.firestore().collection("users").doc(i.uid).set({email:i.email,username:i.displayName,firstName:"",lastName:"",phone:"",headshot:i.photoURL}),e(t(!1,n.email)),e(function(e,t,n){return{type:r.c.LOGIN_SUCCESS,isLoginSuccess:e,user:t,userData:n}}(!0,i,u)),e(a.visible(!0))}),(function(r){document.getElementById("inputEmail").style.borderColor="red",document.getElementById("inputPassword").style.borderColor="red",e(t(!1,n.email)),e(l(!0,r.toString(),null,null)),e(a.error(r.toString())),e(a.visible(!0))}))})).catch((function(n){var r=n.email;e(t(!1,r)),e(l(!0,n.toString(),null,null)),e(a.error(n.toString())),e(a.visible(!0))}))};function t(e,t){return{type:r.c.LOGIN_REQUEST,isLoginPending:e,user:t}}},facebookLogin:function(e){return function(e){var n=new i.a.auth.FacebookAuthProvider;s.auth().signInWithPopup(n).then((function(n){var o=n.credential.accessToken,i=n.user,u={};i&&s.firestore().collection("users").doc(i.uid).get().then((function(l){l.data()?(u.email=l.data().email,u.username=l.data().username,u.phone=l.data().phone,u.firstName=l.data().firstName,u.lastName=l.data().lastName,u.headshot=l.data().headshot,u.googleCredential=o):s.firestore().collection("users").doc(i.uid).set({email:i.email,username:i.displayName,firstName:"",lastName:"",phone:"",headshot:i.photoURL}),e(t(!1,n.email)),e(function(e,t,n){return{type:r.c.LOGIN_SUCCESS,isLoginSuccess:e,user:t,userData:n}}(!0,i,u)),e(a.visible(!0))}),(function(r){document.getElementById("inputEmail").style.borderColor="red",document.getElementById("inputPassword").style.borderColor="red",e(t(!1,n.email)),e(l(!0,r.toString(),null,null)),e(a.error(r.toString())),e(a.visible(!0))}))})).catch((function(n){var r=n.email;e(t(!1,r)),e(l(!0,n.toString(),null,null)),e(a.error(n.toString())),e(a.visible(!0))}))};function t(e,t){return{type:r.c.LOGIN_REQUEST,isLoginPending:e,user:t}}},reCaptchaUpdate:function(e,t,n){return{type:r.c.UPDATE_CAPTCHA,human:e,signUp:t,latestAction:n}}};function l(e,t,n,a){return{type:r.c.LOGIN_FAILURE,loginError:e,error:t,user:n,userData:a}}function c(e,t,n){return function(n){s.auth().signInWithEmailAndPassword(e,t).then((function(t){var i={};t&&(n(o(!0,e)),s.firestore().collection("users").doc(t.user.uid).get().then((function(s){i.email=s.data().email,i.username=s.data().username,i.phone=s.data().phone,i.firstName=s.data().firstName,i.lastName=s.data().lastName,i.headshot=s.data().headshot,n(o(!1,e)),n(function(e,t,n){return{type:r.c.LOGIN_SUCCESS,isLoginSuccess:e,user:t,userData:n}}(!0,t,i)),n(a.visible(!0))}),(function(t){document.getElementById("inputEmail").style.borderColor="red",document.getElementById("inputPassword").style.borderColor="red",n(o(!1,e)),n(l(!0,t.toString(),null,null)),n(a.error(t.toString())),n(a.visible(!0))})))}),(function(t){document.getElementById("inputEmail").style.borderColor="red",document.getElementById("inputPassword").style.borderColor="red",n(o(!1,e)),n(l(!0,t.toString(),null,null)),n(a.error(t.toString())),n(a.visible(!0))}))};function o(e,t){return{type:r.c.LOGIN_REQUEST,isLoginPending:e,user:t}}}var d={dataReset:function(){return function(e){e({type:r.b.DATA_RESET})}}}},566:function(e,t,n){"use strict";n.r(t);var r=n(137),a=n(140),o=n(139),i=n(138),s=n(1),u=n.n(s),l=n(52),c=n(523),d=n(141),m=n(513),g=[{path:"/home",exact:!0,name:"Home",component:u.a.lazy((function(){return Promise.all([n.e(4),n.e(10)]).then(n.bind(null,565))}))}],f=u.a.lazy((function(){return n.e(8).then(n.bind(null,563))})),p=u.a.lazy((function(){return n.e(9).then(n.bind(null,564))})),h=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).loading=function(){return u.a.createElement("div",{className:"animated fadeIn pt-1 text-center esans"},"Loading...")},e}return Object(a.a)(n,[{key:"render",value:function(){return u.a.createElement("div",{className:"app"},u.a.createElement(s.Suspense,{fallback:this.loading()},u.a.createElement(p,null),u.a.createElement("div",{className:"app-body esans"},u.a.createElement("main",{className:"main"},u.a.createElement(c.a,{fluid:!0},u.a.createElement(l.d,{className:"esans"},g.map((function(e,t){return e.component?u.a.createElement(l.b,{key:t,path:e.path,exact:e.exact,name:e.name,render:function(t){return u.a.createElement(e.component,Object.assign({},t,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBmZNIuhEjfHxZf6ZNmCvJnXI_AIfxZ-no&libraries=geometry,drawing,places",loadingElement:u.a.createElement("div",{style:{height:"100%"}}),containerElement:u.a.createElement("div",{style:{height:"400px"}})}))}}):null})),u.a.createElement(l.a,{from:"/",to:"/home"}))))),u.a.createElement(f,null)))}}]),n}(s.Component),E=Object(d.b)((function(e){return{isLoginPending:e.authentication.isLoginPending,isLoginSuccess:e.authentication.isLoginSuccess,loginError:e.authentication.loginError,errorMessage:e.alert.message,signUp:e.authentication.signUp,human:e.authentication.human,latestAction:e.authentication.latestAction}}),(function(e,t){return{errorVisible:function(t){return e(m.a.visible(t))},error:function(t){return e(m.a.error(t))},authentication:function(t,n,r,a){return e(m.c.login(t,n,r,a))},signupEmail:function(t,n,r,a,o){return e(m.c.register(t,n,r,a,o))},forgotPassword:function(t,n){return e(m.c.forgotPassword(t,n))},reset:function(){return e(m.c.reset())},googleLogin:function(t){return e(m.c.googleLogin(t))},facebookLogin:function(t){return e(m.c.facebookLogin(t))},loginFailure:function(t,n,r,a){return e(m.c.loginFailure(t,n,r,a))},reCaptchaUpdate:function(t,n,r){return e(m.c.reCaptchaUpdate(t,n,r))}}}))(h);t.default=E}}]);
//# sourceMappingURL=7.f8cc1fbd.chunk.js.map
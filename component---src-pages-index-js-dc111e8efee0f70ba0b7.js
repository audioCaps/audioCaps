(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=(a(193),a(188)),o=a(4),l=a.n(o),c=a(273),s=a(272),u=function(e){e.siteTitle;return i.a.createElement(c.a,null,i.a.createElement(c.a.Brand,{href:"#home"},"AudioCaps"),i.a.createElement(c.a.Toggle,{"aria-controls":"basic-navbar-nav"}),i.a.createElement(c.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(s.a,{className:"mr-auto"}),i.a.createElement(s.a,null,i.a.createElement(s.a.Link,{href:"#about"},"about"),i.a.createElement(s.a.Link,{href:"#example"},"example"),i.a.createElement(s.a.Link,{href:"#download"},"download"),i.a.createElement(s.a.Link,{href:"/supp"},"explore"))))};u.propTypes={siteTitle:l.a.string},u.defaultProps={siteTitle:""};var d=u,p=(a(235),function(){return i.a.createElement("div",{className:"intro"},i.a.createElement("div",null,i.a.createElement("h1",null,"AudioCaps"),i.a.createElement("h2",null,"Generating Captions for Audios in the Wild")))}),m=a(270),f=a(271),h=function(){return i.a.createElement("div",{id:"about",className:"container mb-5"},i.a.createElement("h2",null,"What is AudioCaps?"),i.a.createElement(m.a,null,i.a.createElement(f.a,{md:6},i.a.createElement("img",{src:a(236),alt:"code",width:"100%"})),i.a.createElement(f.a,null,i.a.createElement("p",{align:"justify"},"We explore the problem of ",i.a.createElement("em",null,"audio captioning"),": generating natural language description for any kind of audio in the wild."),i.a.createElement("p",{align:"justify"},"We contribute a large-scale dataset of about ",i.a.createElement("strong",null,"46K")," audio clips to human-written text pairs collected via crowdsourcing on the  ",i.a.createElement("a",{href:"https://research.google.com/audioset"},"AudioSet ")," dataset."),i.a.createElement("p",{align:"justify"},"We show that our collected captions are indeed faithful for audio inputs and discover what forms of audio representation and captioning models are effective for the audio captioning."))))},g=(a(82),a(56),a(40),a(83),a(237),a(7)),E=a.n(g),b=a(274),v=a(155),y=a(203),w=a.n(y),_=a(263),k=a.n(_),C=a(214),A=function(e){var t=e.visible,a=e.video;return i.a.createElement("h5",null," ",t?a.videoCaption:a.audioCaption," ")},S=a(244),x=a.n(S),W=a(261),N=a.n(W),G=function(e){var t=e.children,a=e.placement,n=void 0===a?"right":a,r=e.content,o=void 0===r?"Click to toggle!":r;return i.a.createElement(x.a,{key:n,placement:n,overlay:i.a.createElement(N.a,{id:"tooltip-"+n},o)},t)},L=function(e){var t=e.visible,a=e.toggleVisibility;return i.a.createElement(G,null,i.a.createElement("h4",{className:"visibility-control",onClick:a},t?i.a.createElement(C.c,null):i.a.createElement(C.d,null),i.a.createElement("span",null,"  ",t?"Video Caption":"Audio Caption")))},T=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={visible:!1,playing:!1,playedSeconds:0},t.ref=function(e){t.player=e},t.play=function(){t.setState({playing:!0})},t.pause=function(){t.setState({playing:!1})},t.replay=function(){t.player.seekTo(0),t.play()},t.onProgress=function(e){var a=t.props.duration,n=t.state.playedSeconds;t.setState(e),n>a&&t.player.seekTo(0)},t.onPlay=function(){t.setState({playing:!0})},t.onPause=function(){t.setState({playing:!1})},t.onStart=function(){t.setState({playing:!0})},t.onEnded=function(){t.player.seekTo(0)},t.toggleVisibility=function(){t.setState({visible:!t.state.visible})},t}return E()(t,e),t.prototype.render=function(){var e=this.props.video,t=this.state,n=t.playing,r=t.visible,o=t.playedSeconds;return i.a.createElement(i.a.Fragment,null,i.a.createElement(L,{visible:r,toggleVisibility:this.toggleVisibility}),i.a.createElement(A,{visible:r,video:e}),i.a.createElement("div",{className:"btn-group d-flex",role:"group"},n?i.a.createElement("button",{type:"button",className:"btn btn-sm btn-warning w-100",onClick:this.pause},i.a.createElement(C.a,null)):i.a.createElement("button",{type:"button",className:"btn btn-sm btn-success w-100",onClick:this.play},i.a.createElement(C.b,null)),i.a.createElement(k.a,{id:"progress",now:10*o,animated:!0})),i.a.createElement(w.a,{ref:this.ref,style:{marginBottom:"1rem",display:r?"block":"none"},width:"100%",playing:n,url:a(173)("./"+e.id+"_"+e.startSeconds+".mp4"),onEnded:this.onEnded,onProgress:this.onProgress,onPlay:this.onPlay,onPause:this.onPause}))},t}(i.a.Component),K=[{id:"EzWEO2WD_MM",startSeconds:70,audioCaption:"A drone whirring followed by a crashing sound",videoCaption:"A toy helicopter is flying over the bed in the room only to crash into the wall"},{id:"6BJ455B1aAs",startSeconds:0,audioCaption:"A whooshing noise followed by an explosion",videoCaption:"A missile blasted a tall grey tower"},{id:"31WGUPOYS5g",startSeconds:22,audioCaption:"A child shouts , and adult male speaks, and an emergency vehicle siren sounds and the horn blows",videoCaption:"Dressed up as Santa Claus, a man is waving from the top of a fire engine."}],j=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={active:0},t.changeActive=function(e){t.setState({active:e})},t.render=function(){var e=t.state.active,a=K.length;return i.a.createElement("div",{id:"example",className:"container mb-5"},i.a.createElement("h2",null,"Example"),i.a.createElement(m.a,null,i.a.createElement(f.a,{md:{span:10,offset:1}},i.a.createElement(T,{video:K[e],duration:10}),i.a.createElement(b.a,null,Array.from(Array(a).keys()).map(function(a){return i.a.createElement(b.a.Item,{key:a,value:a,active:a===e,onClick:function(){return t.changeActive(a)}},a+1)}),i.a.createElement("li",{className:"page-item"},i.a.createElement(v.a,{className:"page-link",to:"/supp"},"See more"))))))},t}return E()(t,e),t}(i.a.Component),B=(a(265),a(266)),D=a.n(B);function O(){var e=D()(["@inproceedings{kim2019audiocaps,\n  title={AudioCaps: Generating Captions for Audios in The Wild},\n  author={Kim, Chris Dongjoo and Kim, Byeongchang and Lee, Hyunmin and Kim, Gunhee},\n  booktitle={NAACL},\n  year={2019}\n}\n"]);return O=function(){return e},e}var P=String.raw(O()),q=function(){return i.a.createElement("div",{id:"download",className:"container mb-5"},i.a.createElement(m.a,null,i.a.createElement("h3",null,"AudioCaps: Genrating Captions for Audios in The Wild"),i.a.createElement("p",null,"Chris Dongjoo Kim, ",i.a.createElement("a",{href:"https://bckim92.github.io/"},"Byeongchang Kim, "),i.a.createElement("a",{href:"https://qpzm.github.io/"},"Hyunmin Lee, and "),i.a.createElement("a",{href:"http://vision.snu.ac.kr/~gunhee"},"Gunhee Kim "),"NAACL-HLT 2019 ",i.a.createElement("strong",null,"(Oral)")," ",i.a.createElement("a",{href:"https://github.com/bckim92/audio2text"},"[Code] "),i.a.createElement("a",{href:"/"},"[Dataset]"))),i.a.createElement(m.a,null,i.a.createElement("a",{href:"/"},i.a.createElement("img",{src:a(267),alt:"code",width:"100%"}))),i.a.createElement(m.a,null,i.a.createElement("h5",null,"Bibtex")),i.a.createElement("pre",null,P))},R=function(){return i.a.createElement("div",{id:"acknowlege",className:"container mb-5"},i.a.createElement("h2",null,"Acknowledgement"),i.a.createElement("p",null,"We thank ",i.a.createElement("a",{href:"http://vision.snu.ac.kr/"},"SNU Vision & Learning Lab")," members and ",i.a.createElement("a",{href:"https://yunseokjang.github.io/"},"Yunseok Jang")," for helpful discussions.",i.a.createElement("br",null),"This work is supported by Kakao and Kakao Brain corporations and the in- ternational cooperation program by the NRF of Korea (NRF-2018K2A9A2A11080927). Gunhee Kim is the corresponding author."))};t.default=function(){return i.a.createElement("div",{className:"index"},i.a.createElement(d,null),i.a.createElement(p,null),i.a.createElement(r.a,null,i.a.createElement(h,null),i.a.createElement(j,null),i.a.createElement(q,null),i.a.createElement(R,null)))}},154:function(e,t,a){var n;e.exports=(n=a(161))&&n.default||n},155:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(154);var s=i.a.createContext({}),u=function(e){return i.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},161:function(e,t,a){"use strict";a.r(t);a(38);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(58),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},173:function(e,t,a){var n={"./-YS5uKWoB6g_30.mp4":174,"./31WGUPOYS5g_22.mp4":175,"./6BJ455B1aAs_0.mp4":176,"./EzWEO2WD_MM_70.mp4":177,"./FDwK7T1JO_0_160.mp4":178,"./GuizRlAQ8qQ_50.mp4":179,"./SGaIvgwwWSE_30.mp4":180,"./YIqpIjjee00_30.mp4":181,"./bX2vDaHL26U_60.mp4":182,"./bpv_LneHmfU_10.mp4":183,"./bygBWUkpaC8_270.mp4":184,"./fGGYeXR_LS8_30.mp4":185,"./hJtOGmN_KVw_140.mp4":186,"./yhDw7PZje3g_30.mp4":187};function i(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=173},174:function(e,t,a){e.exports=a.p+"static/-YS5uKWoB6g_30-ca995e7a7f742b6577f0fee225c41ee5.mp4"},175:function(e,t,a){e.exports=a.p+"static/31WGUPOYS5g_22-d62c85aac180f46c7020b826f2612d0b.mp4"},176:function(e,t,a){e.exports=a.p+"static/6BJ455B1aAs_0-0f65b4186055692fd188b63a4624ff16.mp4"},177:function(e,t,a){e.exports=a.p+"static/EzWEO2WD_MM_70-d207fcffbfd2659aebfde78d9557ef00.mp4"},178:function(e,t,a){e.exports=a.p+"static/FDwK7T1JO_0_160-c300d03706a93806aac0bc521c90d66c.mp4"},179:function(e,t,a){e.exports=a.p+"static/GuizRlAQ8qQ_50-e0548ea7056c2a600255ed2d067caafb.mp4"},180:function(e,t,a){e.exports=a.p+"static/SGaIvgwwWSE_30-18f06eafe9053365fd17584ac35953c3.mp4"},181:function(e,t,a){e.exports=a.p+"static/YIqpIjjee00_30-b36dbd0f568ac7fe74c28151a279d212.mp4"},182:function(e,t,a){e.exports=a.p+"static/bX2vDaHL26U_60-294d3626b8d0f5c18656dd3b3745f0c1.mp4"},183:function(e,t,a){e.exports=a.p+"static/bpv_LneHmfU_10-b156ef9a848b1ef725d43ff8af6a37d2.mp4"},184:function(e,t,a){e.exports=a.p+"static/bygBWUkpaC8_270-dfa3ae4dc4bf270167be902435eb68a0.mp4"},185:function(e,t,a){e.exports=a.p+"static/fGGYeXR_LS8_30-0d297bd2a2c9d078e3745f67df61db6a.mp4"},186:function(e,t,a){e.exports=a.p+"static/hJtOGmN_KVw_140-36c4c99f72f322a7c78c4931b5d028d4.mp4"},187:function(e,t,a){e.exports=a.p+"static/yhDw7PZje3g_30-7c67885e32b57e481d4ce0a527baf6e4.mp4"},188:function(e,t,a){"use strict";var n=a(160),i=a(0),r=a.n(i),o=a(4),l=a.n(o),c=(a(189),function(e){var t=e.children;return r.a.createElement("section",{id:"footer"},t)}),s=a(155),u=(a(190),function(e){var t=e.children;return r.a.createElement(s.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t)),r.a.createElement(c,null,"Copyright © 2019 AudioCaps authors"))},data:n})});u.propTypes={children:l.a.node.isRequired};t.a=u},236:function(e,t,a){e.exports=a.p+"static/audio_vs_video-min-c9f2340329bcf7ab8ea5e4605edcf9ce.png"},267:function(e,t,a){e.exports=a.p+"static/paper-min-6d62c0c748b9ef8b7bab87c7f80ec417.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-dc111e8efee0f70ba0b7.js.map
(this["webpackJsonpreact-saas-template"]=this["webpackJsonpreact-saas-template"]||[]).push([[4],{399:function(e,t,n){},565:function(e,t,n){"use strict";n.r(t);var a=n(296),i=n(297),r=n(306),o=n(305),c=n(9),s=n(1),l=n.n(s),m=n(358),u=n.n(m),p=n(82),d=n(30),h=n(90),g=n.n(h),f=n(398),b=n(359),y=n(327),C=n(552),E=n(553),v=n(555),O=n(569),k=n(557),L=n(567),S=n(568),j=n(570),I=n(564),_=n(360),x=n.n(_),N=n(87),w=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).onAgeChange=i.onAgeChange.bind(Object(y.a)(i)),i}return Object(i.a)(n,[{key:"onAgeChange",value:function(e){var t=Number(e.target.value);this.props.onPatientAgeChange(t)}},{key:"onGenderChange",value:function(e){this.props.onPatientGenderChange(e.target.value)}},{key:"isIDValid",value:function(){return x()(this.props.patient.id)}},{key:"getAgeContributionFactor",value:function(){return this.props.recommendation.contributing_factors&&"+".concat(this.props.recommendation.contributing_factors.age.toPrecision(2))||" "}},{key:"getColor",value:function(){return this.props.patient.information.age?this.props.color:N.a.palette.common.grey}},{key:"render",value:function(){var e=this.props.classes,t=this.props.icon;return l.a.createElement(C.a,{container:!0,spacing:2,alignItems:"center"},l.a.createElement(C.a,{item:!0,md:2},l.a.createElement(E.a,null,l.a.createElement(t,{style:{color:this.getColor()}}),l.a.createElement(j.a,{m:1}),l.a.createElement(v.a,{variant:"body2",display:"inline",color:"primary"},"Patient"))),l.a.createElement(C.a,{item:!0,md:10},l.a.createElement(C.a,{container:!0,alignItems:"center"},l.a.createElement(I.a,{type:"number",className:e.idInput,error:!this.isIDValid(),label:"ID",value:this.props.patient.id,variant:"outlined",onChange:this.props.onIDChange,color:"secondary",helperText:this.isIDValid()?" ":"Enter a valid ID"}),l.a.createElement(I.a,{type:"number",className:e.ageInput,label:"Age",variant:"outlined",value:Boolean(this.props.patient.information.age)&&this.props.patient.information.age,onChange:this.onAgeChange,color:"secondary",helperText:this.getAgeContributionFactor()}),l.a.createElement(O.a,{"aria-label":"gender",value:this.props.patient.information.gender,style:{display:"inline"},onChange:this.onGenderChange.bind(this)},l.a.createElement(C.a,{container:!0,style:{display:"inline-flex",width:185}},l.a.createElement(C.a,{item:!0,md:6},l.a.createElement(k.a,{value:"female",control:l.a.createElement(L.a,{size:"small",color:"secondary"}),label:"Female"})),l.a.createElement(C.a,{item:!0,md:6},l.a.createElement(k.a,{value:"male",control:l.a.createElement(L.a,{size:"small",color:"secondary"}),label:"Male"})),l.a.createElement(C.a,{item:!0,md:12},l.a.createElement(k.a,{style:{visibility:"female"===this.props.patient.information.gender?"visible":"hidden"},control:l.a.createElement(S.a,{size:"small",checked:this.props.patient.otherConsiderations.pregnent_healthy,onChange:function(){},name:"checkedB",color:"secondary"}),label:"Pregnant"})))),l.a.createElement(k.a,{control:l.a.createElement(S.a,{size:"small",checked:!0,onChange:function(){},name:"checkedB",color:"secondary"}),label:"COVID-19 Positive"}))))}}]),n}(s.Component),T=Object(p.a)((function(e){return{idInput:{marginRight:e.spacing(2)},ageInput:{marginRight:e.spacing(2),width:100}}}),{withTheme:!0})(w),A=n(559),M=n(558),D=n(405),P=n.n(D),R=n(404),B=n.n(R),G=n(403),H=n.n(G),F=n(401),V=n.n(F),Z=n(366);function z(e){return l.a.createElement(Z.a,e,l.a.createElement("path",{d:"M2,22 L2,20 L5,20 L5,2 L19,2 L19,20 L22,20 L22,22 L2,22 Z M17,4 L7,4 L7,20 L10,20 L10,15 L14,15 L14,20 L17,20 L17,4 Z M11,11 L11,13 L8,13 L8,11 L11,11 Z M16,11 L16,13 L13,13 L13,11 L16,11 Z M11,8 L11,10 L8,10 L8,8 L11,8 Z M16,8 L16,10 L13,10 L13,8 L16,8 Z M11,5 L11,7 L8,7 L8,5 L11,5 Z M16,5 L16,7 L13,7 L13,5 L16,5 Z"}))}function W(e){return l.a.createElement(Z.a,e,l.a.createElement("path",{d:"M12,2 C13.1045695,2 14,2.8954305 14,4 C14,4.7398375 13.5982846,5.38584934 13.0010775,5.73181186 L13,8 L18,8 C19.1045695,8 20,8.8954305 20,10 L20.0010775,11.2681881 C20.5982846,11.6141507 21,12.2601625 21,13 C21,13.7398375 20.5982846,14.3858493 20.0010775,14.7318119 L20,16 C20,17.1045695 19.1045695,18 18,18 L14,18 L14,20 L21,20 C21.5522847,20 22,20.4477153 22,21 C22,21.5522847 21.5522847,22 21,22 L3,22 C2.44771525,22 2,21.5522847 2,21 C2,20.4477153 2.44771525,20 3,20 L10,20 L10,18 L6,18 C4.8954305,18 4,17.1045695 4,16 L3.99992752,14.7323937 C3.40216612,14.3865739 3,13.7402524 3,13 C3,12.2597476 3.40216612,11.6134261 3.99992752,11.2676063 L4,10 C4,8.8954305 4.8954305,8 6,8 L11,8 L10.9999275,5.73239368 C10.4427094,5.41002921 10.0554537,4.82654371 10.0054857,4.14926234 L10,4 C10,2.8954305 10.8954305,2 12,2 Z M18,10 L6,10 L6,16 L18,16 L18,10 Z M10,12 L10,14 L8,14 L8,12 L10,12 Z M16,12 L16,14 L14,14 L14,12 L16,12 Z"}))}var K=n(402),q=n.n(K),U=n(572),J=(n(399),function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.readings&&e.readings.length&&e.readings.map((function(e,t){return e.percent>0?l.a.createElement("div",{className:"value",style:{color:e.color,width:e.percent+"%"},key:t},l.a.createElement("span",null,e.value)):null}),this),n=e.readings&&e.readings.length&&e.readings.map((function(e,t){return e.percent>0?l.a.createElement("div",{className:"graduation",style:{color:e.color,width:e.percent+"%"},key:t},l.a.createElement("span",null,"|")):null}),this),a=e.readings&&e.readings.length&&e.readings.map((function(e,t){return e.percent>0?l.a.createElement("div",{className:"bar",style:{backgroundColor:e.color,width:e.percent+"%"},key:t}):null}),this);return l.a.createElement("div",{className:"multicolor-bar"},l.a.createElement("div",{className:"values"},""===t?"":t),l.a.createElement("div",{className:"scale"},""===n?"":n),l.a.createElement("div",{className:"bars"},""===a?"":a))}}]),n}(s.Component)),X=Object(p.a)((function(e){return{}}),{withTheme:!0})(J),$=n(400),Q=n.n($);function Y(e){var t=function(e){return e.toFixed(1).replace(/[.,]00$/,"")},n=[],a=function(a){var i,r=_e.SCORE_CATEGORIES.find((function(e){return e.text===a})).color;n.push({name:a,value:t(e[a]),percent:(i=e[a],t(i/20*100)),color:r})};for(var i in e)a(i);var r=100-n.map((function(e){return Number(e.percent)})).reduce((function(e,t){return e+t}),0);return r&&n.push({name:"",value:t(r),percent:r,color:"#fff"}),n}var ee=P()((function(e){return{section1:{margin:e.spacing(3)},section2:{margin:e.spacing(3)},section3:{margin:e.spacing(3)},chips:{paddingTop:e.spacing(1)},divider:{height:1}}}),{withTheme:!0})((function(e){var t=e.classes;return l.a.createElement("div",null,l.a.createElement("div",{className:t.section1},l.a.createElement(C.a,{container:!0,alignItems:"center"},l.a.createElement(C.a,{item:!0,xs:!0},l.a.createElement(X,{readings:Y(e.riskScores)})))),l.a.createElement(C.a,{container:!0,direction:"column",alignContent:"center"},l.a.createElement(C.a,{item:!0,className:t.section2,container:!0,justify:"center"},l.a.createElement(C.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},l.a.createElement(v.a,{gutterBottom:!0},"Recommendation"),function(){switch(e.recommendation.recommendation){case"home":return l.a.createElement(U.a,{size:"medium",color:"secondary",icon:l.a.createElement(V.a,null),label:"Home"});case"hotel":return l.a.createElement(U.a,{size:"medium",color:"secondary",icon:l.a.createElement(z,null),label:"Hotel"});case"hospital":return l.a.createElement(U.a,{size:"medium",color:"secondary",icon:l.a.createElement(q.a,null),label:"Hospital"});default:return""}}())),l.a.createElement(C.a,{item:!0,className:t.section3},l.a.createElement(C.a,{container:!0,direction:"column",alignContent:"center"},l.a.createElement(C.a,{item:!0,container:!0,justify:"center"},l.a.createElement(j.a,{mr:1},l.a.createElement(W,null)),l.a.createElement(v.a,{variant:"h6"},"What is your decision?")),l.a.createElement(C.a,{item:!0,container:!0,justify:"center"},l.a.createElement(v.a,{variant:"body2"},"Human input will improve the algorithm")),l.a.createElement(C.a,{item:!0,container:!0,justify:"space-evenly",className:t.chips},l.a.createElement(U.a,{variant:"outlined",color:"secondary",icon:l.a.createElement(V.a,null),label:"Home"}),l.a.createElement(U.a,{variant:"outlined",color:"secondary",icon:l.a.createElement(z,null),label:"Hotel"}),l.a.createElement(U.a,{variant:"outlined",color:"secondary",icon:l.a.createElement(q.a,null),label:"Hospital"}))))),l.a.createElement(M.a,{light:!0,classes:{root:t.divider}}),l.a.createElement(C.a,{container:!0,justify:"space-around"},l.a.createElement(C.a,{item:!0},l.a.createElement(A.a,{startIcon:l.a.createElement(H.a,{fontSize:"small"}),color:"secondary",onClick:function(){Q()(document.querySelector(".MuiGrid-root")).then((function(t){var n=document.createElement("a");n.href=t.toDataURL("image/png").replace("image/png","image/octet-stream"),n.download="".concat(e.patient.id,"_decision_tool.png"),n.click()}))}},"Save")),l.a.createElement(C.a,{item:!0},l.a.createElement(A.a,{startIcon:l.a.createElement(B.a,{fontSize:"small"}),color:"secondary",onClick:e.onClearAll},"Clear all"))))})),te=n(370),ne=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"getColor",value:function(){return this.props.items.find((function(e){return e.selected}))?this.props.color:N.a.palette.common.grey}},{key:"render",value:function(){var e=this,t=this.props.classes,n=this.props.icon;return l.a.createElement(C.a,{container:!0,spacing:2,alignItems:"center"},l.a.createElement(C.a,{item:!0,md:2},l.a.createElement(E.a,null,l.a.createElement(n,{style:{color:this.getColor()}}),l.a.createElement(j.a,{m:1}),l.a.createElement(v.a,{variant:"body2",display:"inline",color:"primary"},this.props.categoryName))),l.a.createElement(C.a,{item:!0,md:10,className:t.chipWrapper},this.props.items&&Object.keys(this.props.items).map((function(t,n){var a=e.props.items[t].selected,i=Boolean(e.props.items[t].contribution),r=a?e.props.color:N.a.palette.grey[600],o="".concat(e.props.items[t].text," ").concat(i?"+"+e.props.items[t].contribution:"");return l.a.createElement(j.a,{key:n,fontWeight:a?"bold":"normal"},l.a.createElement(U.a,{style:{backgroundColor:Object(te.fade)(r,.2),color:r},label:o,onClick:e.props.onSelectionChange.bind(null,e.props.categoryName,e.props.items[t].key)}))}))))}}]),n}(s.Component),ae=Object(p.a)((function(e){return{chipWrapper:{display:"flex",justifyContent:"left",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}}),{withTheme:!0})(ne),ie=n(525),re=n.n(ie),oe=n(524),ce=n.n(oe),se=n(523),le=n.n(se),me=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"getColor",value:function(){return Object.values(this.props.patient.clinicalStatus).reduce((function(e,t){return e+t}),0)?this.props.color:N.a.palette.common.grey}},{key:"vitalChange",value:function(e,t){this.props.onClinicalStatusChange(t,Number(e.target.value))}},{key:"render",value:function(){var e=this,t=this.props.classes,n=this.props.icon;return l.a.createElement(C.a,{container:!0,spacing:2,alignItems:"center"},l.a.createElement(C.a,{item:!0,md:2},l.a.createElement(E.a,null,l.a.createElement(n,{style:{color:this.getColor()}}),l.a.createElement(j.a,{m:1}),l.a.createElement(v.a,{variant:"body2",display:"inline",color:"primary"},"Vitals"))),l.a.createElement(C.a,{item:!0,md:10},l.a.createElement(E.a,{disableGutters:!0},this.props.items.map((function(n){return l.a.createElement(I.a,{value:Boolean(e.props.patient.clinicalStatus[n.key])&&e.props.patient.clinicalStatus[n.key],onChange:function(t){return e.vitalChange(t,n.key)},key:n.key,type:"number",className:t.input,label:n.text,helperText:n.unit,variant:"outlined",color:"secondary"})})))))}}]),n}(s.Component),ue=Object(p.a)((function(e){return{input:{marginRight:e.spacing(2)}}}),{withTheme:!0})(me),pe=n(426),de=n.n(pe),he=n(378),ge=n.n(he),fe=n(35),be=n(132),ye=n(67),Ce=function(){function e(){Object(a.a)(this,e)}return Object(i.a)(e,[{key:"getHeaders",value:function(){var e=Object(b.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0="Bearer ",e.next=3,fe.a.currentSession();case 3:return e.t1=e.sent.getIdToken().getJwtToken(),e.t2=e.t0.concat.call(e.t0,e.t1),e.abrupt("return",{Authorization:e.t2});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"updateRecommendation",value:function(){var e=Object(b.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.toServerModel(),e.t0=be.a,e.t1=ye.b.stagingAuth,e.t2=n,e.next=6,this.getHeaders();case 6:return e.t3=e.sent,e.t4={body:e.t2,headers:e.t3},e.abrupt("return",e.t0.post.call(e.t0,e.t1,"/getPatientModelRecommendation",e.t4).then((function(e){return e.recommendation})));case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var e=Object(b.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={patient_id:ge()(t)},e.t0=be.a,e.t1=ye.b.stagingAuth,e.t2=n,e.next=6,this.getHeaders();case 6:return e.t3=e.sent,e.t4={body:e.t2,headers:e.t3},e.abrupt("return",e.t0.post.call(e.t0,e.t1,"/getRecordsByPatient",e.t4).then((function(e){return Object.values(e||{})[0]})));case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),Ee=n(522),ve=n.n(Ee),Oe=n(389),ke=n(479),Le=n.n(ke),Se=function(){function e(){Object(a.a)(this,e),this.id="",this.information={age:0,gender:""},this.coronaPositive=!1,this.medicalPreconditions={copd:!1,htn:!1,dm:!1,smoker:!1,cad:!1,chf:!1,ckd:!1,hd:!1,cld:!1,dementia:!1,cancer:!1,aids:!1},this.clinicalStatus={temperature:0,pulse:0,respiratory_rate:0,auscultation:0,mental_status:0,oxygen_saturation:0},this.treatment={psychiatric_treatment:!1,anti_inflamatory_regular_treatment:!1,growth_hormone_children:!1,immuno_depressant_drugs:!1},this.otherConsiderations={mobility_problem:!1,potential_for_home_quarentine:!1,pregnent_healthy:!1,youngs_with_asthma:!1}}return Object(i.a)(e,[{key:"toServerModel",value:function(){var e=Le()(this);return{patient_id:ge()(e.id),patient_information:this.BoolToNum(e.information),corona_status:{corona_positive:e.coronaPositive},medical_preconditions:this.BoolToNum(e.medicalPreconditions),clinical_status:this.BoolToNum(e.clinicalStatus),treatment:this.BoolToNum(e.treatment),other_considerations:this.BoolToNum(e.otherConsiderations)}}},{key:"toClientModel",value:function(t,n){var a=new e;return a.id=t,a.information=n.patient_information,a.medicalPreconditions=this.NumToBool(n.medical_preconditions),a.clinicalStatus=n.clinical_status,a.coronaPositive=n.corona_status.corona_positive,a.treatment=this.NumToBool(n.treatment),a.otherConsiderations=this.NumToBool(n.other_considerations),a}},{key:"BoolToNum",value:function(e){for(var t={},n=0,a=Object.entries(e);n<a.length;n++){var i=Object(Oe.a)(a[n],2),r=i[0],o=i[1];t[r]="boolean"===typeof o?Number(o):o}return t}},{key:"NumToBool",value:function(e){for(var t={},n=0,a=Object.entries(e);n<a.length;n++){var i=Object(Oe.a)(a[n],2),r=i[0],o=i[1];t[r]="number"===typeof o?Boolean(o):o}return t}}]),e}(),je={patient:new Se,medicalSelections:{},otherConsiderationsSelection:{},riskScores:{},recommendation:{}},Ie=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state=je,i.patient=new Se,i.Api=new Ce,i.onAgeChange=i.onAgeChange.bind(Object(y.a)(i)),i.onGenderChange=i.onGenderChange.bind(Object(y.a)(i)),i.onIDChange=i.onIDChange.bind(Object(y.a)(i)),i.onMedicalItemChange=i.onMedicalItemChange.bind(Object(y.a)(i)),i.onHomeEnvItemChange=i.onHomeEnvItemChange.bind(Object(y.a)(i)),i.onClinicalStatusChange=i.onClinicalStatusChange.bind(Object(y.a)(i)),i.reset=i.reset.bind(Object(y.a)(i)),i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.reset()}},{key:"reset",value:function(){this.patient=new Se,je.patient=this.patient,this.setState(je),this.setSelections()}},{key:"onHomeEnvItemChange",value:function(e,t){var n=this.state.otherConsiderationsSelection.items.find((function(e){return e.key===t}));n.selected=!n.selected,this.patient.otherConsiderations[t]=n.selected,this.setState({patient:this.patient,otherConsiderationsSelection:this.state.otherConsiderationsSelection}),this.Api.updateRecommendation(this.patient)}},{key:"onMedicalItemChange",value:function(e,t){var n=this.state.medicalSelections[e].items.find((function(e){return e.key===t}));n.selected=!n.selected,this.patient.medicalPreconditions[t]=n.selected,this.setState({patient:this.patient,selections:this.state.medicalSelections}),this.updateScores()}},{key:"updateScores",value:function(){var e=Object(b.a)(g.a.mark((function e(){var t,a,i,r,o=this;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(f.a)({},this.state.riskScores),e.next=3,this.Api.updateRecommendation(this.patient);case 3:for(r in a=e.sent,i=function(e){o.state.medicalSelections[e].items.forEach((function(e){e.contribution=a.contributing_factors[e.key]?a.contributing_factors[e.key]:0}));var i=n.MEDICAL_PRECONDITIONS_CONFIG.find((function(t){return t.text===e})).items.map((function(e){return e.key})),r=de()(a.contributing_factors,i);t[e]=Object.values(r).reduce((function(e,t){return e+t}),0)},this.state.medicalSelections)i(r);t.Patient=a.contributing_factors.age,this.setState({riskScores:t,recommendation:a});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onAgeChange",value:function(e){this.patient.information.age=e,this.setState({patient:this.patient});2<=e&&e<120&&this.updateScores()}},{key:"onGenderChange",value:function(e){this.patient.information.gender=e,this.setState({patient:this.patient}),this.updateScores()}},{key:"onIDChange",value:function(){var e=Object(b.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.patient.id=t.target.value,this.setState({patient:this.patient}),!x()(this.patient.id)){e.next=9;break}return e.next=5,this.Api.getUserInfo(this.patient.id);case 5:"patient not found"!==(n=e.sent)&&(this.patient=this.patient.toClientModel(this.patient.id,n),this.setSelections()),this.setState({patient:this.patient}),this.updateScores();case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onClinicalStatusChange",value:function(e,t){this.patient.clinicalStatus[e]=t,this.setState({patient:this.patient}),this.Api.updateRecommendation(this.patient)}},{key:"setSelections",value:function(){var e=this,t=Object(f.a)({},this.state.medicalSelections),a=Object(f.a)({},this.state.otherConsiderationsSelection);Object.assign(this.state.riskScores,n.SCORE_CATEGORIES.map((function(e){return e.text})).reduce((function(e,t){return e[t]=0,e}),{})),n.MEDICAL_PRECONDITIONS_CONFIG.forEach((function(n){t[n.text]=n,t[n.text].items=t[n.text].items.map((function(t){return Object(f.a)({},t,{selected:e.patient.medicalPreconditions[t.key],contribution:0})}))})),(a=n.HOME_ENV_CONFIG).items=a.items.map((function(t){return Object(f.a)({},t,{selected:e.patient.otherConsiderations[t.key]})})),this.setState({medicalSelections:t,otherConsiderationsSelection:a})}},{key:"render",value:function(){var e=this,t=this.props.classes;return l.a.createElement(C.a,{container:!0},l.a.createElement(C.a,{item:!0,md:8,className:t.leftPanel},l.a.createElement(j.a,{py:2},l.a.createElement(T,{color:n.STATIC_RISK_CONFIG.color,icon:n.STATIC_RISK_CONFIG.icon,patient:this.state.patient,recommendation:this.state.recommendation,onPatientAgeChange:this.onAgeChange,onPatientGenderChange:this.onGenderChange,onIDChange:this.onIDChange})),l.a.createElement(M.a,{light:!0,classes:{root:t.divider}}),Object.keys(this.state.medicalSelections).map((function(n){return l.a.createElement("div",{key:n},l.a.createElement(j.a,{py:2},l.a.createElement(ae,{onSelectionChange:e.onMedicalItemChange,items:e.state.medicalSelections[n].items,icon:e.state.medicalSelections[n].icon,color:e.state.medicalSelections[n].color,categoryName:n})),l.a.createElement(M.a,{light:!0,classes:{root:t.divider}}))})),this.state.otherConsiderationsSelection.items&&l.a.createElement(j.a,{py:2},l.a.createElement(ae,{onSelectionChange:this.onHomeEnvItemChange,items:this.state.otherConsiderationsSelection.items,icon:n.HOME_ENV_CONFIG.icon,color:n.HOME_ENV_CONFIG.color,categoryName:n.HOME_ENV_CONFIG.text})),l.a.createElement(M.a,{light:!0,classes:{root:t.divider}}),l.a.createElement(j.a,{py:2},l.a.createElement(ue,{color:n.VITALS_CONFIG.color,icon:n.VITALS_CONFIG.icon,items:n.VITALS_CONFIG.items,patient:this.state.patient,onClinicalStatusChange:this.onClinicalStatusChange}))),l.a.createElement(C.a,{item:!0,md:4},l.a.createElement(ee,{patient:this.state.patient,riskScores:this.state.riskScores,recommendation:this.state.recommendation,onClearAll:this.reset})))}}]),n}(s.Component);Ie.STATIC_RISK_CONFIG={text:"Patient",key:"Patient",color:"#8716E0",icon:ve.a},Ie.MEDICAL_PRECONDITIONS_CONFIG=[{text:"Pulmonary",color:"#00B0BB",icon:function(e){return l.a.createElement(Z.a,e,l.a.createElement("path",{d:"M12,2 C12.5522847,2 13,2.44771525 13,3 L12.9997864,9.585 L14.0465505,10.6318682 C14.3073108,9.13371144 15.5282684,8 16.9951047,8 C19.9951047,8 21.9951047,14.4615385 21.9951047,17.6923077 C21.9951047,20.0713805 20.2042437,22 17.9951047,22 C15.8529093,22 14.1040258,20.1864955 14,17.907305 L14,13.414 L11.9997864,11.414 L9.994,13.418 L9.99510469,17.907305 C9.89432968,20.1152708 8.2498943,21.8862012 6.19964034,21.9947281 L6,22 C3.790861,22 2,20.0713805 2,17.6923077 C2,14.4615385 4,8 7,8 C8.46782012,8 9.68943157,9.13523269 9.94907756,10.6348831 L10.9997864,9.585 L11,3 C11,2.44771525 11.4477153,2 12,2 Z M16.9951047,10 C16.5332306,10 16.0958448,10.4146337 16.0101661,11.0166078 L16,11.118 L15.9979201,17.8161168 C16.0523834,19.0093995 16.8823096,19.9144576 17.855214,19.9942701 L17.9951047,20 C19.0652012,20 19.9951047,18.9985655 19.9951047,17.6923077 C19.9951047,14.5272955 18.0332767,10 16.9951047,10 Z M7,10 C5.96182804,10 4,14.5272955 4,17.6923077 C4,18.9417716 4.85080019,19.9123425 5.86128215,19.994378 L6,20 L6.13989069,19.9942701 C7.06414989,19.9184482 7.85937124,19.0978422 7.98327819,17.9928804 L7.9971846,17.8161168 L7.99510469,11.118 L7.98493856,11.0166078 C7.89925987,10.4146337 7.46187408,10 7,10 Z"}))},items:[{key:"copd",text:"COPD"},{key:"smoker",text:"Smoker"}]},{text:"Cardiovalcular",color:"#E01683",icon:le.a,items:[{key:"htn",text:"Hypertension"},{key:"hd",text:"Ischemic Heart Disease"},{key:"chf",text:"Heart Failure"}]},{text:"Other Conditions",color:"#F08627",icon:ce.a,items:[{key:"dm",text:"Diabetes Mellitus"},{key:"aids",text:"HIV / AIDS"},{key:"dementia",text:"Dementia"},{key:"cld",text:"Cirrhosis / Chronic Liver Disease"},{key:"ckd",text:"Chronic Kidney Disease"},{key:"cancer",text:"Malignancy"}]}],Ie.HOME_ENV_CONFIG={text:"Home Environment",color:"#06B30D",icon:re.a,items:[{key:"mobility_problem",text:"Immobile"},{key:"potential_for_home_quarentine",text:"Home quarantine is possible"},{key:"todo missing",text:"A member of the same household is in a risk group"}]},Ie.VITALS_CONFIG={text:"Vitals",color:"#8716E0",icon:function(e){return l.a.createElement(Z.a,e,l.a.createElement("path",{d:"M3,13H5.79L10.1,4.79L11.28,13.75L14.5,9.66L17.83,13H21V15H17L14.67,12.67L9.92,18.73L8.94,11.31L7,15H3V13Z"}))},items:[{text:"Temperature",key:"temperature",unit:"Celsius"},{text:"Pulse",key:"pulse",unit:"Per minute"},{text:"Respiratory Rate",key:"respiratory_rate",unit:"Per minute"},{text:"O2 Saturation",key:"oxygen_saturation",unit:"ABG"}]},Ie.SCORE_CATEGORIES=[Ie.STATIC_RISK_CONFIG].concat(Ie.MEDICAL_PRECONDITIONS_CONFIG);var _e=Object(p.a)((function(e){return{leftPanel:{boxShadow:"2px 0px 0px rgba(0, 0, 0, 0.12);"},divider:{height:1}}}),{withTheme:!0})(Ie),xe=n(527),Ne=function(e){var t=e.component,n=Object(xe.a)(e,["component"]);return l.a.createElement(d.a,Object.assign({},n,{render:function(e){return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var i=Object.assign.apply(Object,[{}].concat(n));return l.a.createElement(e,i)}(t,e,n)}}))};var we=Object(p.a)((function(e){return{wrapper:Object(c.a)({margin:e.spacing(1),width:"auto"},e.breakpoints.up("md"),{width:"100%",marginLeft:"auto",marginRight:"auto"})}}),{withTheme:!0})(Object(s.memo)((function(e){var t=e.classes;return l.a.createElement("div",{className:t.wrapper},l.a.createElement(d.c,null,l.a.createElement(Ne,{path:"",component:_e})))}))),Te=n(560),Ae=n(561),Me=n(571),De=n(562),Pe=n(526),Re=n.n(Pe),Be=n(563);var Ge=Object(Me.a)()(Object(p.a)((function(e){var t,n;return{appBar:Object(c.a)({boxShadow:e.shadows[6],backgroundColor:e.palette.common.white,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},e.breakpoints.down("xs"),{width:"100%",marginLeft:0}),appBarToolbar:(t={display:"flex",justifyContent:"space-between",paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},Object(c.a)(t,e.breakpoints.up("sm"),{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}),Object(c.a)(t,e.breakpoints.up("md"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),Object(c.a)(t,e.breakpoints.up("lg"),{paddingLeft:e.spacing(4),paddingRight:e.spacing(4)}),t),drawerPaper:(n={height:"100%vh",whiteSpace:"nowrap",border:0,width:e.spacing(7),overflowX:"hidden",marginTop:e.spacing(8)},Object(c.a)(n,e.breakpoints.up("sm"),{width:e.spacing(9)}),Object(c.a)(n,"backgroundColor",e.palette.common.black),n),smBordered:Object(c.a)({},e.breakpoints.down("xs"),{borderRadius:"50% !important"}),menuLink:{textDecoration:"none",color:e.palette.text.primary},iconListItem:{width:"auto",borderRadius:e.shape.borderRadius,paddingTop:11,paddingBottom:11,marginLeft:e.spacing(1),marginRight:e.spacing(1)},textPrimary:{color:e.palette.primary.main},mobileItemSelected:{backgroundColor:"".concat(e.palette.primary.main," !important")},username:{paddingLeft:0,paddingRight:e.spacing(2)},justifyCenter:{justifyContent:"center"},permanentDrawerListItem:{justifyContent:"center",paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},signout:{minWidth:"auto"}}}),{withTheme:!0})((function(e){var t=e.classes,n=e.width,a=l.a.useState("Dr. Liat Ezra"),i=Object(Oe.a)(a,2),r=i[0],o=i[1];return fe.a.currentAuthenticatedUser().then((function(e){o(e.username)})).catch((function(e){return console.error(e)})),l.a.createElement(s.Fragment,null,l.a.createElement(Te.a,{position:"sticky",className:t.appBar},l.a.createElement(Ae.a,{className:t.appBarToolbar},l.a.createElement(E.a,{display:"flex",alignItems:"center"},l.a.createElement(j.a,{color:"text.primary",fontWeight:900,fontSize:24,mr:2},"HOSP"),l.a.createElement(M.a,{orientation:"vertical",flexItem:!0}),l.a.createElement(j.a,{color:N.a.palette.secondary.main,fontSize:18,ml:2},"Decision Support Tool")),l.a.createElement(j.a,{display:"flex",justifyContent:"flex-end",alignItems:"center",width:"100%"},l.a.createElement(E.a,{disableGutters:!0,className:u()(t.iconListItem,t.smBordered)},Object(Me.b)("sm",n)&&l.a.createElement(De.a,{className:t.username,primary:l.a.createElement(v.a,{color:"textPrimary"},r)})),l.a.createElement(E.a,{button:!0,onClick:function(){fe.a.signOut().then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},className:u()(t.iconListItem)},l.a.createElement(Be.a,{className:u()(t.signout)},l.a.createElement(Re.a,null)))))))}))),He=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={CardChart:null,EmojiTextArea:null,ImageCropper:null,Dropzone:null,DateTimePicker:null,transactions:[],statistics:{views:[],profit:[]},posts:[],targets:[],messages:[],isAccountActivated:!1,addBalanceDialogOpen:!1},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.classes;return l.a.createElement(s.Fragment,null,l.a.createElement(Ge,null),l.a.createElement("main",{className:u()(e.main)},l.a.createElement(we,null)))}}]),n}(s.PureComponent);t.default=Object(p.a)((function(e){return{main:Object(c.a)({transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},e.breakpoints.down("xs"),{marginLeft:0})}}),{withTheme:!0})(He)}}]);
//# sourceMappingURL=4.ee572ebf.chunk.js.map
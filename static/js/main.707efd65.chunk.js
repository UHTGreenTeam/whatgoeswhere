(this.webpackJsonpwhatgoeswhere=this.webpackJsonpwhatgoeswhere||[]).push([[0],{114:function(e,i,t){"use strict";t.r(i);var a=t(147),n=t(0),r=t(51),s=t.n(r),b=t(3),c=t(36),o=t(152),l=t(137),m=t(153),p=t(151),u=t(96),d=t(139),g=t(140),f=t(148),h=t(155),y=t(143),B=t(144),O=t(146),j=t(154),G=t(4),x=function(e){var i=e.items;return console.log(i),Object(G.jsxs)(j.a,{variant:"striped",colorScheme:"green",children:[Object(G.jsx)(j.b,{}),Object(G.jsx)(j.f,{children:Object(G.jsxs)(j.g,{children:[Object(G.jsx)(j.e,{children:"Item"}),Object(G.jsx)(j.e,{children:"Bin"})]})}),Object(G.jsx)(j.c,{children:i.map((function(e){return Object(G.jsxs)(j.g,{children:[Object(G.jsx)(j.d,{children:e.item}),Object(G.jsx)(j.d,{children:e.bin})]},e.item)}))})]})},P=t(72),S=t(133),w=t(134),k=t(149),C=t(100);function v(e){return Object(G.jsxs)(S.a,{children:[Object(G.jsx)(w.a,{children:Object(G.jsx)(C.a,{})}),Object(G.jsx)(k.a,{placeholder:"Search",onInput:e.onInput,value:e.value})]})}var E=t(141),T=t(142),F=t(145),I=["St. Michael's Hospital","St. Joseph's Health Centre","Providence Healthcare","Li Ka Shing Knowledge Institute"],L="St. Michael's Hospital",M={search:"",searchedItems:P[L].sort((function(e,i){return e.item>i.item?1:-1})),site:L},A=function(e,i){switch(i.type){case"SEARCH_INPUT":return Object(c.a)(Object(c.a)({},e),{},{search:i.payload});case"SEARCH_DATA":return Object(c.a)(Object(c.a)({},e),{},{searchedItems:i.payload});case"SWITCH_SITE":return Object(c.a)(Object(c.a)({},e),{},{site:i.payload});default:throw new Error}},q=function(){var e=Object(n.useReducer)(A,M),i=Object(b.a)(e,2),t=i[0],a=i[1],r=function(e,i){a({type:"SEARCH_INPUT",payload:e});var t=P[i].filter((function(i){return i.item.toLocaleLowerCase().includes(e.toLocaleLowerCase())})).sort((function(e,i){return e.item>i.item?1:-1}));a({type:"SEARCH_DATA",payload:t})},s=Object(o.a)(),c=s.isOpen,j=s.onOpen,S=s.onClose,w=function(e){var i=e.children;return Object(G.jsx)(l.a,{px:2,py:1,rounded:"md",boxShadow:"xl",bg:"white",_hover:{textDecoration:"none",bg:Object(m.c)("gray.200","gray.700")},href:"#",onClick:function(){return e=i.toString(),a({type:"SWITCH_SITE",payload:e}),void r("",e);var e},children:i})};return Object(G.jsxs)(p.a,{theme:u.theme,children:[Object(G.jsxs)(d.a,{bg:Object(m.c)("gray.100","gray.900"),px:6,children:[Object(G.jsxs)(g.a,{h:24,alignItems:"center",justifyContent:"space-between",children:[Object(G.jsx)(f.a,{size:"lg",icon:c?Object(G.jsx)(E.a,{}):Object(G.jsx)(T.a,{}),"aria-label":"Open Menu",display:{md:"none"},onClick:c?S:j}),Object(G.jsx)(d.a,{m:6,fontWeight:"semibold",fontSize:"2xl",children:"What Goes Where"}),Object(G.jsx)(h.a,{spacing:8,alignItems:"center",children:Object(G.jsx)(h.a,{as:"nav",spacing:8,display:{base:"none",md:"flex"},children:I.map((function(e){return Object(G.jsx)(w,{children:e},e)}))})})]}),c?Object(G.jsx)(d.a,{pb:4,display:{md:"none"},children:Object(G.jsx)(h.b,{as:"nav",spacing:4,children:I.map((function(e){return Object(G.jsx)(w,{children:e},e)}))})}):null]}),Object(G.jsx)(d.a,{textAlign:"left",fontSize:"xl",children:Object(G.jsx)(y.a,{minH:"10vh",p:3,children:Object(G.jsxs)(h.c,{spacing:8,align:"stretch",children:[Object(G.jsx)(d.a,{textAlign:"left",marginRight:8,marginLeft:8,marginTop:5,fontSize:"xl",color:"purple",children:Object(G.jsxs)(h.a,{justify:"space-between",children:[Object(G.jsx)(B.a,{color:"darkgreen",children:t.site}),Object(G.jsxs)(l.a,{href:"".concat("/whatgoeswhere","/posters/").concat(t.site,".png"),isExternal:!0,children:["View Poster ",Object(G.jsx)(F.a,{mx:"2px"})]})]})}),Object(G.jsxs)(h.c,{children:[Object(G.jsx)(d.a,{textAlign:"left",marginLeft:8,fontSize:"m",children:Object(G.jsx)(O.a,{children:"Not sure how to dispose a waste item? Type it into the searchbar below to find out."})}),Object(G.jsx)(d.a,{w:"300px",children:Object(G.jsx)(v,{onInput:function(e){return r(e.target.value,t.site)},value:t.search})})]}),Object(G.jsx)(x,{items:t.searchedItems})]})})}),Object(G.jsx)(d.a,{children:Object(G.jsx)(O.a,{textAlign:"center",margin:8,color:"purple",children:"Have a question or concern? Email us at GreenTeam@unityhealth.to"})})]})},H=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,156)).then((function(i){var t=i.getCLS,a=i.getFID,n=i.getFCP,r=i.getLCP,s=i.getTTFB;t(e),a(e),n(e),r(e),s(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(G.jsxs)(n.StrictMode,{children:[Object(G.jsx)(a.a,{}),Object(G.jsx)(q,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),H()},72:function(e){e.exports=JSON.parse('{"Li Ka Shing Knowledge Institute":[{"item":"Plastic bags","bin":"Garbage"},{"item":"Food scraps","bin":"Organics"},{"item":"Electronics, small appliances","bin":"Contact IT at ext. 5751 for pickup"},{"item":"Extension cords","bin":"Garbage"},{"item":"Paper napkins","bin":"Organics"},{"item":"Paper plates","bin":"Organics"},{"item":"Tissues","bin":"Organics"},{"item":"Polystyrene foam (styrofoam)","bin":"Garbage"},{"item":"Plastic to-go containers","bin":"Garbage"},{"item":"Empty bottles","bin":"Blue bin"},{"item":"Jugs","bin":"Blue bin"},{"item":"Tubs","bin":"Blue bin"},{"item":"Empty cans","bin":"Blue bin"},{"item":"Paper","bin":"Blue bin"},{"item":"Cardboard","bin":"Blue bin"},{"item":"Soiled paper goods","bin":"Organics"},{"item":"BPI, or equivalent, certified compostable cutlery/utensils","bin":"Garbage"},{"item":"BPI, or equivalent, certified compostable paper plates","bin":"Garbage"},{"item":"BPI, or equivalent, certified compostable cups","bin":"Garbage"},{"item":"Coffee grounds and filters","bin":"Organics"},{"item":"Tea bags","bin":"Organics"},{"item":"Soiled paper bags","bin":"Organics"},{"item":"Paper towels","bin":"Organics"},{"item":"Napkins and other tissue type papers","bin":"Organics"},{"item":"Uncoated takeout containers","bin":"Organics"},{"item":"Plastic bottles","bin":"Blue bin"},{"item":"Plastic containers","bin":"Blue bin"},{"item":"Food and beverage cartons","bin":"Blue bin"},{"item":"Flattened cardboard","bin":"Blue bin"},{"item":"Flattened paperboard","bin":"Blue bin"},{"item":"Foam takeout containers","bin":"Garbage"},{"item":"Foam cups","bin":"Garbage"},{"item":"Foam packing materials","bin":"Garbage"},{"item":"Needles","bin":"Sharps container"},{"item":"Diapers","bin":"Garbage"},{"item":"Uncoated paper cups (e.g. medicine cups, dixie cups)","bin":"Organics"},{"item":"Window envelopes","bin":"Blue bin"},{"item":"Coated paper cups and drink cups (e.g. Tim Hortons, Second Cup, Starbucks)","bin":"Garbage"},{"item":"Egg cartons","bin":"Blue bin"},{"item":"Corrugated cardboard","bin":"Blue bin"},{"item":"Boxboard","bin":"Blue bin"},{"item":"Clean IV bags (#3 V plastics)","bin":"Separate collection required: recycle without other types of recycables"},{"item":"Glass bottles","bin":"Blue bin"},{"item":"Glass jars","bin":"Blue bin"},{"item":"Aluminum plates","bin":"Blue bin"},{"item":"Aluminum trays","bin":"Blue bin"},{"item":"Polystyrene, non-styrofoam containers","bin":"Garbage"},{"item":"Blue sterilization wrappers (polypropylene #5 plastic)","bin":"Garbage"},{"item":"Juice boxes","bin":"Blue bin"},{"item":"Large plastic hemodialysis drums","bin":"Separate collection required: recycle without other types of recycables"},{"item":"Metal cans","bin":"Blue bin"},{"item":"Milk cartons","bin":"Blue bin"},{"item":"Plastic cutlery (hard brittle plastic)","bin":"Garbage"},{"item":"Plastic films and other soft plastics (e.g. plastic wrap, #4 LDPE, etc.)","bin":"Garbage"},{"item":"Pyrex containers","bin":"Separate collection required: recycle without other types of recycables, including glass bottles and jars"},{"item":"Scrap metal","bin":"Contact EVS for pickup"},{"item":"Plastic straws","bin":"Garbage"},{"item":"Zippered re-sealable plastic bag","bin":"Recycle without other types of recycables"},{"item":"Rigid plastics (e.g. pens, toothbrushes, gift cards)","bin":"Separate collection required: recycle without other types of recycables according to programs for individual products on a per location basis"},{"item":"Animal bedding","bin":"Organics"},{"item":"Mixed paper (e.g. fine paper, newsprint, etc.)","bin":"Blue bin"},{"item":"Molded paperboard (e.g. egg cartons, coffee cup trays, etc.)","bin":"Blue bin"},{"item":"Paper coffee cups","bin":"Garbage"},{"item":"Hygie-bags (for lining bedpans to contain human waste)","bin":"Garbage"},{"item":"Muffin and cupcake wrappers","bin":"Organics"},{"item":"Pizza liners","bin":"Blue bin"},{"item":"Sleeves of coffee cups","bin":"Blue bin"},{"item":"Wooden stir sticks","bin":"Garbage"},{"item":"Condiment packets","bin":"Garbage"},{"item":"Packs of peanut butter, jam, and other spreadables","bin":"Garbage"},{"item":"Single-serve yogurt, pudding, and jello containers","bin":"Garbage"},{"item":"Lids of coffee cups","bin":"Blue bin"},{"item":"Batteries","bin":"Call ext. 5023 to submit a request for pickup"},{"item":"Toner cartridges","bin":"Drop off at the PGT Receiving dock"},{"item":"Lost and found","bin":"Contact Security at 416-864-5323"}],"St. Michael\'s Hospital":[{"item":"Plastic bags","bin":"Garbage"},{"item":"Food scraps","bin":"Organics"},{"item":"Electronics, small appliances","bin":"Contact IT at ext. 5751 to have them picked up"},{"item":"Batteries","bin":"Call ext. 5023 to submit a request for pickup"},{"item":"Extension cords","bin":"Garbage"},{"item":"Paper napkins","bin":"Organics"},{"item":"Paper plates","bin":"Organics"},{"item":"Tissues","bin":"Organics"},{"item":"Polystyrene foam (styrofoam)","bin":"Garbage"},{"item":"Plastic to-go containers","bin":"Garbage"},{"item":"Empty bottles","bin":"Blue bin"},{"item":"Jugs","bin":"Blue bin"},{"item":"Tubs","bin":"Blue bin"},{"item":"Empty cans","bin":"Blue bin"},{"item":"Paper","bin":"Blue bin"},{"item":"Cardboard","bin":"Blue bin"},{"item":"Soiled paper goods","bin":"Organics"},{"item":"Marketeria compostable cutlery/utensils","bin":"Garbage"},{"item":"Marketeria containers","bin":"Organics"},{"item":"Marketeria compostable cups","bin":"Garbage"},{"item":"Other BPI, or equivalent, certified compostable products","bin":"Garbage"},{"item":"Coffee grounds and filters","bin":"Organics"},{"item":"Tea bags","bin":"Organics"},{"item":"Soiled paper bags","bin":"Organics"},{"item":"Paper towels","bin":"Organics"},{"item":"Napkins and other tissue type papers","bin":"Organics"},{"item":"Uncoated takeout containers","bin":"Organics"},{"item":"Plastic bottles","bin":"Blue bin"},{"item":"Plastic containers","bin":"Blue bin"},{"item":"Food and beverage cartons","bin":"Blue bin"},{"item":"Flattened cardboard","bin":"Blue bin"},{"item":"Flattened paperboard","bin":"Blue bin"},{"item":"Foam takeout containers","bin":"Garbage"},{"item":"Foam cups","bin":"Garbage"},{"item":"Foam packing materials","bin":"Garbage"},{"item":"Needles","bin":"Sharps container"},{"item":"Diapers","bin":"Garbage"},{"item":"Uncoated paper cups (e.g. medicine cups, dixie cups)","bin":"Organics"},{"item":"Window envelopes","bin":"Blue bin"},{"item":"Coated paper cups and drink cups (e.g. Tim Hortons, Second Cup, Starbucks)","bin":"Garbage"},{"item":"Egg cartons","bin":"Blue bin"},{"item":"Corrugated cardboard","bin":"Blue bin"},{"item":"Boxboard","bin":"Blue bin"},{"item":"Clean IV bags (#3 V plastics)","bin":"Separate collection required: recycle without other types of recycables"},{"item":"Glass bottles","bin":"Blue bin"},{"item":"Glass jars","bin":"Blue bin"},{"item":"Aluminum plates","bin":"Blue bin"},{"item":"Aluminum trays","bin":"Blue bin"},{"item":"Polystyrene, non-styrofoam containers","bin":"Garbage"},{"item":"Blue sterilization wrappers (polypropylene #5 plastic)","bin":"Garbage"},{"item":"Juice boxes","bin":"Blue bin"},{"item":"Large plastic hemodialysis drums","bin":"Separate collection required: recycle without other types of recycables"},{"item":"Metal cans","bin":"Blue bin"},{"item":"Milk cartons","bin":"Blue bin"},{"item":"Plastic cutlery/utensils (hard brittle plastic)","bin":"Garbage"},{"item":"Plastic films and other soft plastics (e.g. plastic wrap, #4 LDPE, etc.)","bin":"Garbage"},{"item":"Pyrex containers","bin":"Separate collection required: recycle without other types of recycables, including glass bottles and jars"},{"item":"Scrap metal","bin":"Contact EVS for pickup"},{"item":"Plastic straws","bin":"Garbage"},{"item":"Zippered re-sealable plastic bag","bin":"Recycle without other types of recycables"},{"item":"Rigid plastics (e.g. pens, toothbrushes, gift cards)","bin":"Separate collection required: recycle without other types of recycables according to programs for individual products on a per location basis"},{"item":"Animal bedding","bin":"Organics"},{"item":"Mixed paper (e.g. fine paper, newsprint, etc.)","bin":"Blue bin"},{"item":"Molded paperboard (e.g. egg cartons, coffee cup trays, etc.)","bin":"Blue bin"},{"item":"Paper coffee cups","bin":"Garbage"},{"item":"Hygie-bags (for lining bedpans to contain human waste)","bin":"Garbage"},{"item":"Pizza liners","bin":"Blue bin"},{"item":"Sleeves of coffee cups","bin":"Blue bin"},{"item":"Plastic stir sticks","bin":"Garbage"},{"item":"Wooden stir sticks","bin":"Garbage"},{"item":"Condiment packets","bin":"Garbage"},{"item":"Packs of peanut butter, jam, and other spreadables","bin":"Garbage"},{"item":"Single-serve yogurt, pudding, and jello containers","bin":"Garbage"},{"item":"Lids of coffee cups","bin":"Blue bin"},{"item":"Muffin and cupcake liners","bin":"Organics"},{"item":"Toner cartridges","bin":"Drop off at the PGT Receiving dock"},{"item":"Lost and found","bin":"Contact Securtity at 416-864-5323"}],"St. Joseph\'s Health Centre":[{"item":"Plastic bags","bin":"Garbage"},{"item":"Food scraps","bin":"Organics"},{"item":"Electronics, small appliances","bin":"Contact IT at ext. 3805 for pickup"},{"item":"Extension cords","bin":"Garbage"},{"item":"Paper napkins","bin":"Organics"},{"item":"Paper plates","bin":"Organics"},{"item":"Tissues","bin":"Organics"},{"item":"Polystyrene foam (styrofoam)","bin":"Garbage"},{"item":"Plastic to-go containers","bin":"Garbage"},{"item":"Empty bottles","bin":"Blue bin"},{"item":"Jugs","bin":"Blue bin"},{"item":"Tubs","bin":"Blue bin"},{"item":"Empty cans","bin":"Blue bin"},{"item":"Paper","bin":"Blue bin"},{"item":"Cardboard","bin":"Blue bin"},{"item":"Soiled paper goods","bin":"Organics"},{"item":"Coffee grounds and filters","bin":"Organics"},{"item":"Tea bags","bin":"Organics"},{"item":"Soiled paper bags","bin":"Organics"},{"item":"Paper towels","bin":"Organics"},{"item":"Napkins and other tissue type papers","bin":"Organics"},{"item":"Uncoated takeout containers","bin":"Organics"},{"item":"Plastic bottles","bin":"Blue bin"},{"item":"Plastic containers","bin":"Blue bin"},{"item":"Food and beverage cartons","bin":"Blue bin"},{"item":"Flattened cardboard","bin":"Blue bin"},{"item":"Flattened paperboard","bin":"Blue bin"},{"item":"Foam takeout containers","bin":"Garbage"},{"item":"Foam cups","bin":"Garbage"},{"item":"Foam packing materials","bin":"Garbage"},{"item":"Needles","bin":"Sharps container"},{"item":"Diapers","bin":"Garbage"},{"item":"Uncoated paper cups (e.g. medicine cups, dixie cups)","bin":"Organics"},{"item":"Window envelopes","bin":"Blue bin"},{"item":"Coated paper cups and drink cups (e.g. Tim Hortons, Second Cup, Starbucks)","bin":"Garbage"},{"item":"Egg cartons","bin":"Blue bin"},{"item":"Corrugated cardboard","bin":"Blue bin"},{"item":"Boxboard","bin":"Blue bin"},{"item":"Clean IV bags (#3 V plastics)","bin":"Separate collection required: recycle without other types of recycables"},{"item":"Glass bottles","bin":"Blue bin"},{"item":"Glass jars","bin":"Blue bin"},{"item":"Aluminum plates","bin":"Blue bin"},{"item":"Aluminum trays","bin":"Blue bin"},{"item":"Polystyrene, non-styrofoam containers","bin":"Garbage"},{"item":"Blue sterilization wrappers (polypropylene #5 plastic)","bin":"Garbage"},{"item":"Juice boxes","bin":"Blue bin"},{"item":"Large plastic hemodialysis drums","bin":"Separate collection required: recycle without other types of recycables"},{"item":"Metal cans","bin":"Blue bin"},{"item":"Milk cartons","bin":"Blue bin"},{"item":"Plastic cutlery/utensils (hard brittle plastic)","bin":"Garbage"},{"item":"Plastic films and other soft plastics (e.g. plastic wrap, #4 LDPE, etc.)","bin":"Garbage"},{"item":"Pyrex containers","bin":"Separate collection required: recycle without other types of recycables, including glass bottles and jars"},{"item":"Scrap metal","bin":"Contact EVS for pickup"},{"item":"Plastic straws","bin":"Garbage"},{"item":"Zippered re-sealable plastic bag","bin":"Recycle without other types of recycables"},{"item":"Rigid plastics (e.g. pens, toothbrushes, gift cards)","bin":"Separate collection required: recycle without other types of recycables according to programs for individual products on a per location basis"},{"item":"Animal bedding","bin":"Organics"},{"item":"Mixed paper (e.g. fine paper, newsprint, etc.)","bin":"Blue bin"},{"item":"Molded paperboard (e.g. egg cartons, coffee cup trays, etc.)","bin":"Blue bin"},{"item":"Paper coffee cups","bin":"Garbage"},{"item":"Hygie-bags (for lining bedpans to contain human waste)","bin":"Garbage"},{"item":"Pizza liners","bin":"Blue bin"},{"item":"Sleeves of coffee cups","bin":"Blue bin"},{"item":"Plastic stir sticks","bin":"Garbage"},{"item":"Condiment packets","bin":"Garbage"},{"item":"Packs of peanut butter, jam, and other spreadables","bin":"Garbage"},{"item":"Single-serve yogurt, pudding, and jello containers","bin":"Garbage"},{"item":"Lids of coffee cups","bin":"Blue bin"},{"item":"Muffin and cupcake wrappers","bin":"Organics"},{"item":"Lakeside Caf\xe9 utensils/cutlery","bin":"Garbage"},{"item":"Lakeside Caf\xe9 containers","bin":"Organics"},{"item":"Lakeside Caf\xe9 paper cups","bin":"Organics"},{"item":"Lakeside Caf\xe9 compostable lids","bin":"Garbage"},{"item":"Wooden stir sticks","bin":"Garbage"},{"item":"Clear plant-based utensils","bin":"Garbage"},{"item":"Toner cartridges","bin":"Drop off at Stores"},{"item":"Batteries","bin":"Drop off at Receiving, Barnicke Wing, 1st floor"}],"Providence Healthcare":[{"item":"Plastic bags","bin":"Garbage"},{"item":"Food scraps","bin":"Organics"},{"item":"Electronics, small appliances","bin":"Contact IT at ext. 3000 for pickup"},{"item":"Extension cords","bin":"Garbage"},{"item":"Paper napkins","bin":"Organics"},{"item":"Paper plates","bin":"Organics"},{"item":"Tissues","bin":"Organics"},{"item":"Polystyrene foam (styrofoam)","bin":"Garbage"},{"item":"Plastic to-go containers","bin":"Garbage"},{"item":"Empty bottles","bin":"Blue bin"},{"item":"Jugs","bin":"Blue bin"},{"item":"Tubs","bin":"Blue bin"},{"item":"Empty cans","bin":"Blue bin"},{"item":"Paper","bin":"Blue bin"},{"item":"Cardboard","bin":"Blue bin"},{"item":"Soiled paper goods","bin":"Organics"},{"item":"Coffee grounds and filters","bin":"Organics"},{"item":"Tea bags","bin":"Organics"},{"item":"Soiled paper bags","bin":"Organics"},{"item":"Paper towels","bin":"Organics"},{"item":"Napkins and other tissue type papers","bin":"Organics"},{"item":"Uncoated takeout containers","bin":"Organics"},{"item":"Plastic bottles","bin":"Blue bin"},{"item":"Plastic containers","bin":"Blue bin"},{"item":"Food and beverage cartons","bin":"Blue bin"},{"item":"Flattened cardboard","bin":"Blue bin"},{"item":"Flattened paperboard","bin":"Blue bin"},{"item":"Foam takeout containers","bin":"Garbage"},{"item":"Foam cups","bin":"Garbage"},{"item":"Foam packing materials","bin":"Garbage"},{"item":"Needles","bin":"Sharps container"},{"item":"Diapers","bin":"Garbage"},{"item":"Uncoated paper cups (e.g. medicine cups, dixie cups)","bin":"Organics"},{"item":"Window envelopes","bin":"Blue bin"},{"item":"Coated paper cups and drink cups (e.g. Tim Hortons, Second Cup, Starbucks)","bin":"Garbage"},{"item":"Egg cartons","bin":"Blue bin"},{"item":"Corrugated cardboard","bin":"Blue bin"},{"item":"Boxboard","bin":"Blue bin"},{"item":"Clean IV bags (#3 V plastics)","bin":"Separate collection required: recycle without other types of recycables"},{"item":"Glass bottles","bin":"Blue bin"},{"item":"Glass jars","bin":"Blue bin"},{"item":"Aluminum plates","bin":"Blue bin"},{"item":"Aluminum trays","bin":"Blue bin"},{"item":"Polystyrene, non-styrofoam containers","bin":"Garbage"},{"item":"Blue sterilization wrappers (polypropylene #5 plastic)","bin":"Garbage"},{"item":"Juice boxes","bin":"Blue bin"},{"item":"Large plastic hemodialysis drums","bin":"Separate collection required: recycle without other types of recycables"},{"item":"Metal cans","bin":"Blue bin"},{"item":"Milk cartons","bin":"Blue bin"},{"item":"Plastic cutlery/utensils (hard brittle plastic)","bin":"Garbage"},{"item":"Plastic films and other soft plastics (e.g. plastic wrap, #4 LDPE, etc.)","bin":"Garbage"},{"item":"Pyrex containers","bin":"Separate collection required: recycle without other types of recycables, including glass bottles and jars"},{"item":"Scrap metal","bin":"Contact EVS for pickup"},{"item":"Plastic straws","bin":"Garbage"},{"item":"Zippered re-sealable plastic bag","bin":"Recycle without other types of recycables"},{"item":"Rigid plastics (e.g. pens, toothbrushes, gift cards)","bin":"Separate collection required: recycle without other types of recycables according to programs for individual products on a per location basis"},{"item":"Animal bedding","bin":"Organics"},{"item":"Mixed paper (e.g. fine paper, newsprint, etc.)","bin":"Blue bin"},{"item":"Molded paperboard (e.g. egg cartons, coffee cup trays, etc.)","bin":"Blue bin"},{"item":"Paper coffee cups","bin":"Garbage"},{"item":"Hygie-bags (for lining bedpans to contain human waste)","bin":"Garbage"},{"item":"Pizza liners","bin":"Blue bin"},{"item":"Sleeves of coffee cups","bin":"Blue bin"},{"item":"Plastic stir sticks","bin":"Garbage"},{"item":"Condiment packets","bin":"Garbage"},{"item":"Packs of peanut butter, jam, and other spreadables","bin":"Garbage"},{"item":"Single-serve yogurt, pudding, and jello containers","bin":"Garbage"},{"item":"Lids of coffee cups","bin":"Blue bin"},{"item":"Muffin and cupcake wrappers","bin":"Organics"},{"item":"Seasons Caf\xe9 utensils/cutlery","bin":"Garbage"},{"item":"Seasons Caf\xe9 containers (paper)","bin":"Organics"},{"item":"Seasons Caf\xe9 paper cups","bin":"Organics"},{"item":"Seasons Caf\xe9 compostable lids","bin":"Garbage"},{"item":"Wooden stir sticks","bin":"Garbage"},{"item":"Batteries","bin":"Drop off at the K-wing shop or contact an EVS Ops Leader "},{"item":"Toner cartridges","bin":"Drop off in the C wing, room 147"},{"item":"Lost and found","bin":"Call reception at 416-285-3666"}]}')}},[[114,1,2]]]);
//# sourceMappingURL=main.707efd65.chunk.js.map
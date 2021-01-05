(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{13:function(e,s,t){},17:function(e,s,t){},23:function(e,s,t){},34:function(e,s,t){},35:function(e,s,t){},36:function(e,s,t){},37:function(e,s,t){"use strict";t.r(s);var c=t(0),a=t(1),i=t(6),n=t.n(i),l=(t(13),t(12)),r=(t(23),t(2));var o=function(){var e=Object(a.useState)(!1),s=Object(l.a)(e,2),t=s[0],i=s[1],n=Object(a.useState)(!0),o=Object(l.a)(n,2),j=(o[0],o[1]),b=function(){return i(!1)},d=function(){window.innerWidth<=960?j(!1):j(!0)};return Object(a.useEffect)((function(){d()}),[]),window.addEventListener("resize",d),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("nav",{className:"navbar",children:Object(c.jsxs)("div",{className:"navbar-container",children:[Object(c.jsxs)(r.Link,{to:"home",className:"navbar-logo",onClick:b,spy:!0,smooth:!0,offset:-70,duration:800,children:["Kevin Pulley",Object(c.jsx)("i",{class:"far fa-keyboard"})]}),Object(c.jsx)("div",{className:"menu-icon",onClick:function(){return i(!t)},children:Object(c.jsx)("i",{className:t?"fas fa-bars":"fas fa-times"})}),Object(c.jsxs)("ul",{className:t?"nav-menu active":"nav-menu",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.Link,{className:"nav-links",onClick:b,activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-70,duration:800,children:"Home"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.Link,{to:"cards",spy:!0,smooth:!0,offset:-70,duration:800,className:"nav-links",onClick:b,children:"My Projects"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.Link,{to:"about",className:"nav-links",onClick:b,spy:!0,smooth:!0,offset:-70,duration:800,children:"About Me"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.Link,{to:"footer",spy:!0,smooth:!0,offset:-70,duration:800,className:"nav-links",onClick:b,children:"Contact Me"})})]})]})})})};t(34);var j=function(){return Object(c.jsx)("div",{className:"hero-container",id:"home",children:Object(c.jsxs)("h2",{children:["Hello, I'm ",Object(c.jsx)("span",{className:"span",children:"Kevin Pulley."})," ",Object(c.jsx)("br",{}),"I'm a full-stack web developer."]})})};t(17);var b=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("li",{className:"cards__item",children:Object(c.jsxs)("div",{className:"cards__item__link",children:[Object(c.jsx)("a",{href:e.deployed,children:Object(c.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(c.jsx)("img",{src:e.src,alt:"project pic",className:"cards__item__img"})})}),Object(c.jsxs)("div",{className:"cards__item__info",children:[Object(c.jsx)("h5",{className:"cards__item__text",children:e.text}),Object(c.jsxs)("form",{className:"link__buttons",children:[Object(c.jsxs)("button",{className:"gitbutton",formAction:e.deployed,children:[Object(c.jsx)("i",{class:"fab fa-github"})," Deployed"]}),Object(c.jsxs)("button",{className:"gitbutton",formAction:e.link,children:[Object(c.jsx)("i",{class:"fab fa-github"})," Repo"]})]})]})]})})})};var d=function(){return Object(c.jsxs)("div",{className:"cards",id:"cards",children:[Object(c.jsx)("h1",{className:"cards__header",children:"Check Out My Projects!!"}),Object(c.jsx)("div",{className:"cards__container",children:Object(c.jsxs)("div",{className:"cards__wrapper",children:[Object(c.jsxs)("ul",{className:"cards__items",children:[Object(c.jsx)(b,{src:"images/SuperheroProject.png",text:"Superhero Project",label:"Superhero Project",link:"https://github.com/Kevin-Pulley/Super-Heroes",deployed:"https://kevin-pulley.github.io/Super-Heroes/"}),Object(c.jsx)(b,{src:"images/Planner.png",text:"Day Planner",label:"Day Planner",link:"https://github.com/Kevin-Pulley/Day-Planner",deployed:"https://kevin-pulley.github.io/Day-Planner/"}),Object(c.jsx)(b,{src:"images/weather.jpg",text:"My Weather App",label:"Weather App",path:"/services",link:"https://github.com/Kevin-Pulley/Weather-Dashboard",deployed:"https://kevin-pulley.github.io/Weather-Dashboard"})]}),Object(c.jsxs)("ul",{className:"cards__items",children:[Object(c.jsx)(b,{src:"images/Employee.png",text:"Employee Directory",label:"Employee Directory",path:"/services",link:"https://github.com/Kevin-Pulley/Employee-Directory",deployed:"https://kevin-pulley.github.io/Employee-Directory/"}),Object(c.jsx)(b,{src:"images/HearthstoneApp.png",text:"Hearthstone Finder",label:"Hearthstone",path:"/services",link:"https://github.com/Kevin-Pulley/Budget-Tracker",deployed:"https://project2madness.herokuapp.com/"}),Object(c.jsx)(b,{src:"images/screenshot.png",text:"Budget Tracker",label:"Budget Tracker",path:"/services",link:"https://github.com/Kevin-Pulley/Budget-Tracker",deployed:"https://dashboard.heroku.com/apps/desolate-hollows-71779"})]})]})})]})};t(35);var h=function(){return Object(c.jsxs)("div",{className:"about",id:"about",children:[Object(c.jsx)("h1",{className:"about__header",children:"About Me "}),Object(c.jsxs)("p",{className:"about__content",children:["Hello. My name is Kevin Pulley and I am a Full Stack Developer."," ",Object(c.jsx)("br",{}),"I am currently looking for a junior developer role in a company to sharpen",Object(c.jsx)("br",{}),"my skills and get some experience in the real world applications of",Object(c.jsx)("br",{}),"web design. I graduated from Vanderbilt Bootcamp in January of 2021",Object(c.jsx)("br",{}),"and I am excited to begin my new career. Thanks for visiting!",Object(c.jsx)("br",{})]}),Object(c.jsx)("h2",{className:"about__h2",children:"My Skills"}),Object(c.jsxs)("ul",{className:"list",children:[Object(c.jsx)("li",{className:"footer__icons",children:Object(c.jsx)("i",{class:"fab fa-react fa-4x"})}),Object(c.jsx)("li",{className:"footer__icons",children:Object(c.jsx)("i",{class:"fab fa-js-square fa-4x"})}),Object(c.jsx)("li",{className:"footer__icons",children:Object(c.jsx)("i",{class:"fab fa-node fa-4x"})}),Object(c.jsx)("li",{className:"footer__icons",children:Object(c.jsx)("i",{class:"fab fa-html5 fa-4x"})}),Object(c.jsx)("li",{className:"footer__icons",children:Object(c.jsx)("i",{class:"fab fa-css3 fa-4x"})}),Object(c.jsx)("li",{className:"footer__icons",children:Object(c.jsx)("i",{class:"fas fa-database fa-4x"})})]})]})};t(36);var m=function(){return Object(c.jsx)("footer",{class:"footer__container",id:"footer",children:Object(c.jsx)("div",{class:"column",children:Object(c.jsxs)("p",{class:"github-text",id:"footer-links",children:[Object(c.jsx)("a",{className:"footer__github",href:"https://github.com/Kevin-Pulley",children:Object(c.jsx)("i",{class:"fab fa-github fa-2x"})}),Object(c.jsx)("a",{className:"footer__email",href:"mailto:skippy1025@gmail.com",children:Object(c.jsx)("i",{class:"fas fa-envelope fa-2x"})}),Object(c.jsx)("a",{className:"footer__linkedin",href:"https://www.linkedin.com/in/kevin-pulley-9711431b3/",children:Object(c.jsx)("i",{class:"fab fa-linkedin-in fa-2x"})})]})})})};var u=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j,{}),Object(c.jsx)(d,{}),Object(c.jsx)(h,{}),Object(c.jsx)(m,{})]})};var x=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o,{}),Object(c.jsx)(u,{})]})};n.a.render(Object(c.jsx)(x,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.efd51237.chunk.js.map
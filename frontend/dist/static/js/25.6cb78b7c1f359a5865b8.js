webpackJsonp([25],{20:function(t,e,o){"use strict";function n(t){o(517)}Object.defineProperty(e,"__esModule",{value:!0});var a=o(394),r=o.n(a);for(var i in a)"default"!==i&&function(t){o.d(e,t,function(){return a[t]})}(i);var s=o(519),l=o(1),c=n,d=l(r.a,s.a,!1,c,"data-v-03e5835c",null);e.default=d.exports},360:function(t,e,o){t.exports=o.p+"static/img/userphoto.6d73d26.jpg"},394:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{tabPosition:"top",project_id:"",sysName:"自动化测试平台",collapsed:!1,sysUserName:"",sysUserAvatar:""}},methods:{handleselect:function(t,e){},onSubmit:function(){console.log("submit!")},logout:function(){var t=this;this.$confirm("确认退出吗?","提示",{}).then(function(){sessionStorage.removeItem("token"),t.$router.push("/login")}).catch(function(){})},showMenu:function(t,e){this.$refs.menuCollapsed.getElementsByClassName("submenu-hook-"+t)[0].style.display=e?"block":"none"}},mounted:function(){var t=sessionStorage.getItem("username");t&&(name=JSON.parse(t),this.sysUserName=name||""),this.project_id=this.$route.params.project_id}}},517:function(t,e,o){var n=o(518);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(14)("c9b0ec62",n,!0,{})},518:function(t,e,o){e=t.exports=o(13)(!1),e.push([t.i,".container[data-v-03e5835c]{position:absolute;top:0;bottom:0;width:100%}.container .header[data-v-03e5835c]{height:60px;line-height:60px;background:#20a0ff;color:#fff}.container .header .userinfo[data-v-03e5835c]{text-align:right;padding-right:35px;float:right}.container .header .userinfo .userinfo-inner[data-v-03e5835c]{cursor:pointer;color:#fff}.container .header .userinfo .userinfo-inner img[data-v-03e5835c]{width:40px;height:40px;border-radius:20px;margin:10px 0 10px 10px;float:right}.container .header .logo[data-v-03e5835c]{height:60px;font-size:22px;padding-left:20px;padding-right:20px;border-color:hsla(62,77%,76%,.3);border-right-width:1px;border-right-style:solid}.container .header .logo img[data-v-03e5835c]{width:40px;float:left;margin:10px 10px 10px 18px}.container .header .logo .txt[data-v-03e5835c]{color:#fff}.container .header .logo-width[data-v-03e5835c]{width:230px}.container .header .logo-collapse-width[data-v-03e5835c]{width:60px}.container .header .tools[data-v-03e5835c]{padding:0 23px;width:14px;height:60px;line-height:60px;cursor:pointer}.container .title[data-v-03e5835c]{width:200px;float:left;color:#475669;font-size:25px;margin:15px;margin-left:35px;margin-bottom:0;font-family:PingFang SC}",""])},519:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"container"},[n("el-col",{staticClass:"header",attrs:{span:24}},[n("el-col",{staticClass:"logo",class:t.collapsed?"logo-collapse-width":"logo-width",attrs:{span:10}},[n("router-link",{staticStyle:{"text-decoration":"none",color:"#FFFFFF"},attrs:{to:"/projectList"}},[t._v(t._s(t.collapsed?"":t.sysName))])],1),t._v(" "),n("el-col",{staticClass:"userinfo",attrs:{span:4}},[n("el-dropdown",{attrs:{trigger:"hover"}},[n("span",{staticClass:"el-dropdown-link userinfo-inner"},[n("img",{attrs:{src:o(360)}}),t._v(" "+t._s(t.sysUserName))]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(e){return t.logout(e)}}},[t._v("退出登录")])],1)],1)],1)],1),t._v(" "),n("el-col",{attrs:{span:24}},[[n("el-menu",{directives:[{name:"show",rawName:"v-show",value:!t.collapsed,expression:"!collapsed"}],staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.$route.path,mode:"horizontal","unique-opened":""},on:{select:t.handleselect}},[t._l(t.$router.options.routes,function(e){return e.projectHidden?t._e():[t._l(e.children,function(e,o){return[e.leaf?n("el-menu-item",{key:e.path,attrs:{index:e.path}},[e.child?t._e():[n("router-link",{staticStyle:{"text-decoration":"none",color:"#000000"},attrs:{to:{name:e.name,params:{id:t.project_id}}}},[n("div",[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t\t\t\t")])])],t._v(" "),e.child?[n("router-link",{staticStyle:{"text-decoration":"none",color:"#000000"},attrs:{to:{name:e.children[0].name,params:{id:t.project_id}}}},[n("div",[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t\t\t\t")])])]:t._e()],2):t._e(),t._v(" "),e.leaf?t._e():n("el-submenu",{attrs:{index:o+""}},[n("template",{slot:"title"},[t._v(t._s(e.name))]),t._v(" "),t._l(e.children,function(e){return n("el-menu-item",{key:e.path,attrs:{index:e.path}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t\t")])})],2)]})]})],2)],t._v(" "),n("strong",{staticClass:"title"},[t._v(t._s(t.$route.name))])],2),t._v(" "),n("el-col",{attrs:{span:24}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)},a=[],r={render:n,staticRenderFns:a};e.a=r}});
import{d as b,a as f,o as y,b as h,w as x,v as C,u as i,e as d,i as k,t as v,n as g,f as V}from"./vue.esm-bundler-54347c5b.js";const w=["disabled"],s=b({__name:"ColorArrayCheckbox",props:{modelValue:{type:Array,required:!0},item:{type:null,required:!0},label:{type:String,required:!0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const a=e,t=f({get(){return a.modelValue.includes(a.item)},set(n){r("update:modelValue",n?[...a.modelValue,a.item]:a.modelValue.filter(o=>o!==a.item))}});return(n,o)=>(y(),h("label",{class:g(["p-2 text-center focus-within:outline-dotted focus-within:outline-slate-500 focus-within:outline-2 focus-within:outline-offset-2",[e.disabled?"cursor-default":"cursor-pointer",i(t)?"bg-sky-400 hover:bg-sky-300":"bg-slate-200 hover:bg-sky-100"]])},[x(d("input",{"onUpdate:modelValue":o[0]||(o[0]=p=>k(t)?t.value=p:null),class:"opacity-0 w-0",type:"checkbox",disabled:e.disabled},null,8,w),[[C,i(t)]]),d("span",null,v(e.label),1)],2))}});s.__docgenInfo={exportName:"default",displayName:"ColorArrayCheckbox",description:"",tags:{},props:[{name:"modelValue",description:"値を追加する配列",type:{name:"array"},required:!0},{name:"item",description:"チェック時に配列に追加する値",type:{name:"null"},required:!0},{name:"label",description:"ラベルとして表示する値",type:{name:"string"},required:!0},{name:"disabled",description:"非活性化どうか",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}]};const q={title:"ColorArrayCheckbox",component:s,render:e=>({components:{ColorArrayCheckbox:s},setup(){const r=V([]);return{args:e,items:r}},template:`
      <div class="p-3">
        <div class="flex flex-row space-x-3">
          <ColorArrayCheckbox
            v-model="items"
            item="apple"
            label="apple"
          />
          <ColorArrayCheckbox
            v-model="items"
            item="orange"
            label="orange"
          />
          <ColorArrayCheckbox
            v-model="items"
            item="banana"
            label="banana"
          />
        </div>
        {{ items }}
      </div>
    `}),parameters:{layout:"fullscreen"},tags:["autodocs"]},l={};var u,c,m;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(m=(c=l.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const B=["Basic"];export{l as Basic,B as __namedExportsOrder,q as default};
//# sourceMappingURL=ColorArrayCheckbox.stories-c7a5d9a5.js.map

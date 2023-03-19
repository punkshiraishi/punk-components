import{d as b,a as f,o as y,b as h,w as k,v,u as i,e as d,i as g,t as V,n as x,f as C}from"./vue.esm-bundler-54347c5b.js";const w=["disabled"],o=b({__name:"ArrayCheckableLabel",props:{modelValue:{type:Array,required:!0},item:{type:null,required:!0},label:{type:String,required:!0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const a=e,t=f({get(){return a.modelValue.includes(a.item)},set(n){r("update:modelValue",n?[...a.modelValue,a.item]:a.modelValue.filter(l=>l!==a.item))}});return(n,l)=>(y(),h("label",{class:x(["p-2 text-center focus-within:outline-dotted focus-within:outline-slate-500 focus-within:outline-2 focus-within:outline-offset-2",[e.disabled?"cursor-default":"cursor-pointer",i(t)?"bg-sky-400 hover:bg-sky-300":"bg-slate-200 hover:bg-sky-100"]])},[k(d("input",{"onUpdate:modelValue":l[0]||(l[0]=p=>g(t)?t.value=p:null),class:"opacity-0 w-0",type:"checkbox",disabled:e.disabled},null,8,w),[[v,i(t)]]),d("span",null,V(e.label),1)],2))}});o.__docgenInfo={exportName:"default",displayName:"ArrayCheckableLabel",description:"",tags:{},props:[{name:"modelValue",description:"値を追加する配列",type:{name:"array"},required:!0},{name:"item",description:"チェック時に配列に追加する値",type:{name:"null"},required:!0},{name:"label",description:"ラベルとして表示する値",type:{name:"string"},required:!0},{name:"disabled",description:"非活性化どうか",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}]};const L={title:"ArrayCheckableLabel",component:o,render:e=>({components:{ArrayCheckableLabel:o},setup(){const r=C([]);return{args:e,items:r}},template:`
      <div class="p-3">
        <div class="flex flex-row space-x-3">
          <ArrayCheckableLabel
            v-model="items"
            item="apple"
            label="apple"
          />
          <ArrayCheckableLabel
            v-model="items"
            item="orange"
            label="orange"
          />
          <ArrayCheckableLabel
            v-model="items"
            item="banana"
            label="banana"
          />
        </div>
        {{ items }}
      </div>
    `}),parameters:{layout:"fullscreen"},tags:["autodocs"]},s={};var u,c,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const q=["Basic"];export{s as Basic,q as __namedExportsOrder,L as default};
//# sourceMappingURL=ArrayCheckableLabel.stories-d5813049.js.map

const traditional_vs_Arrow ={
  value: "traditionalVsArrow value",
  traditional_function: function(){
    console.log("Traditional Function", this.value);
  },
  arrowFunction: () => {
    console.log("Arrow Function", this.value);
    
  },
};

traditional_vs_Arrow.traditional_function();
traditional_vs_Arrow.arrowFunction();


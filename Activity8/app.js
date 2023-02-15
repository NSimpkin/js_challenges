const espressoPlus=document.getElementById("espressoPlus");
const macchiatoPlus=document.getElementById("macchiatoPlus");
const lattePlus=document.getElementById("lattePlus");
const flatWhitePlus=document.getElementById("flatWhitePlus");
const cappuccinoPlus=document.getElementById("cappuccinoPlus");
const mochaPlus=document.getElementById("mochaPlus");

const espressoMinus=document.getElementById("espressoMinus");
const macchiatoMinus=document.getElementById("macchiatoMinus");
const latteMinus=document.getElementById("latteMinus");
const flatWhiteMinus=document.getElementById("flatWhiteMinus");
const cappuccinoMinus=document.getElementById("cappuccinoMinus");
const mochaMinus=document.getElementById("mochaMinus");

const espressoQuant=document.getElementById("espressoQuant");
const macchiatoQuant=document.getElementById("macchiatoQuant");
const latteQuant=document.getElementById("latteQuant");
const flatWhiteQuant=document.getElementById("flatWhiteQuant");
const cappuccinoQuant=document.getElementById("cappuccinoQuant");
const mochaQuant=document.getElementById("mochaQuant");

const espressoSubT=document.getElementById("espressoSubT");
const macchiatoSubT=document.getElementById("macchiatoSubT");
const latteSubT=document.getElementById("latteSubT");
const flatWhiteSubT=document.getElementById("flatWhiteSubT");
const cappuccinoSubT=document.getElementById("cappuccinoSubT");
const mochaSubT=document.getElementById("mochaSubT");

const espressoPrice=2.70;
const macchiatoPrice=3.40;
const lattePrice=3.30;
const flatWhitePrice=3.20;
const cappuccinoPrice=3.60;
const mochaPrice=3.90;

const totalButton=document.getElementById("totalButton");
const totalDisplay=document.getElementById("totalDisplay");

let espressoCount=0;
let espressoSubTvalue=0;

espressoPlus.addEventListener ("click", () => {
    espressoCount+=1;
    espressoQuant.textContent=(espressoCount);
    espressoSubTvalue=espressoCount*espressoPrice;
    espressoSubT.textContent=(`£${espressoSubTvalue.toFixed(2)}`);
});

espressoMinus.addEventListener ("click", () => {
    if (espressoCount == 0){
        // do nothing
    } else {
        espressoCount-=1;
        espressoQuant.textContent=(espressoCount);
        espressoSubTvalue=espressoCount*espressoPrice;
        espressoSubT.textContent=(`£${espressoSubTvalue.toFixed(2)}`);
    }
});

let macchiatoCount=0;
let macchiatoSubTValue=0;

macchiatoPlus.addEventListener ("click", () => {
    macchiatoCount+=1;
    macchiatoQuant.textContent=(macchiatoCount);
    macchiatoSubTValue=macchiatoCount*macchiatoPrice;
    macchiatoSubT.textContent=(`£${macchiatoSubTValue.toFixed(2)}`);
});

macchiatoMinus.addEventListener ("click", () => {
    if (macchiatoCount == 0){
        // do nothing
    } else {
        macchiatoCount-=1;
        macchiatoQuant.textContent=(macchiatoCount);
        macchiatoSubTValue=macchiatoCount*macchiatoPrice;
        macchiatoSubT.textContent=(`£${macchiatoSubTValue.toFixed(2)}`);
    }
});

let latteCount=0;
let latteSubTValue=0;

lattePlus.addEventListener ("click", () => {
    latteCount+=1;
    latteQuant.textContent=(latteCount);
    latteSubTValue=latteCount*lattePrice;
    latteSubT.textContent=(`£${latteSubTValue.toFixed(2)}`);
});

latteMinus.addEventListener ("click", () => {
    if (latteCount == 0){
        // do nothing
    } else {
        latteCount-=1;
        latteQuant.textContent=(latteCount);
        latteSubTValue=latteCount*lattePrice;
        latteSubT.textContent=(`£${latteSubTValue.toFixed(2)}`);
    }
});

let flatWhiteCount=0;
let flatWhiteSubTValue=0;

flatWhitePlus.addEventListener ("click", () => {
    flatWhiteCount+=1;
    flatWhiteQuant.textContent=(flatWhiteCount);
    flatWhiteSubTValue=flatWhiteCount*flatWhitePrice;
    flatWhiteSubT.textContent=(`£${flatWhiteSubTValue.toFixed(2)}`);
});

flatWhiteMinus.addEventListener ("click", () => {
    if (flatWhiteCount == 0){
        // do nothing
    } else {
        flatWhiteCount-=1;
        flatWhiteQuant.textContent=(flatWhiteCount);
        flatWhiteSubTValue=flatWhiteCount*flatWhitePrice;
        flatWhiteSubT.textContent=(`£${flatWhiteSubTValue.toFixed(2)}`);
    }
});

let cappuccinoCount=0;
let cappuccinoSubTValue=0;

cappuccinoPlus.addEventListener ("click", () => {
    cappuccinoCount+=1;
    cappuccinoQuant.textContent=(cappuccinoCount);
    cappuccinoSubTValue=cappuccinoCount*cappuccinoPrice;
    cappuccinoSubT.textContent=(`£${cappuccinoSubTValue.toFixed(2)}`);
});

cappuccinoMinus.addEventListener ("click", () => {
    if (cappuccinoCount == 0){
        // do nothing
    } else {
        cappuccinoCount-=1;
        cappuccinoQuant.textContent=(cappuccinoCount);
        cappuccinoSubTValue=cappuccinoCount*cappuccinoPrice;
        cappuccinoSubT.textContent=(`£${cappuccinoSubTValue.toFixed(2)}`);
    }
});

let mochaCount=0;
let mochaSubTValue=0;

mochaPlus.addEventListener ("click", () => {
    mochaCount+=1;
    mochaQuant.textContent=(mochaCount);
    mochaSubTValue=mochaCount*mochaPrice;
    mochaSubT.textContent=(`£${mochaSubTValue.toFixed(2)}`);
});

mochaMinus.addEventListener ("click", () => {
    if (mochaCount == 0){
        // do nothing
    } else {
        mochaCount-=1;
        mochaQuant.textContent=(mochaCount);
        mochaSubTValue=mochaCount*mochaPrice;
        mochaSubT.textContent=(`£${mochaSubTValue.toFixed(2)}`);
    }
});

totalButton.addEventListener ("click", () => {
    totalDisplay.textContent=`The total price of your order is £${(espressoSubTvalue+ macchiatoSubTValue+ flatWhiteSubTValue+ latteSubTValue+ cappuccinoSubTValue+ mochaSubTValue).toFixed(2)}`;
});

// const orderPrint=document.getElementById("orderPrint");

// let orderPrintout= [];

// totalButton.addEventListener ("click", () => {
//     orderPrintout.push["Espresso", `${espressoCount}`, `£${espressoPrice}`, `£${espressoSubTvalue}`];
//     orderPrint.textContent=`${orderPrintout[0][0]} ${orderPrintout[0][1]} ${orderPrintout[0][2]} ${orderPrintout[0][3]}`;
//     totalDisplay.textContent=`Total: £${(espressoSubTvalue+ macchiatoSubTValue+ flatWhiteSubTValue+ latteSubTValue+ cappuccinoSubTValue+ mochaSubTValue).toFixed(2)}`;
// });
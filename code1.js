gdjs.ajudaCode = {};
gdjs.ajudaCode.GDmolduraObjects1= [];
gdjs.ajudaCode.GDmolduraObjects2= [];
gdjs.ajudaCode.GDtituloTxtObjects1= [];
gdjs.ajudaCode.GDtituloTxtObjects2= [];
gdjs.ajudaCode.GDexplicaTxtObjects1= [];
gdjs.ajudaCode.GDexplicaTxtObjects2= [];
gdjs.ajudaCode.GDexplicaTxt2Objects1= [];
gdjs.ajudaCode.GDexplicaTxt2Objects2= [];
gdjs.ajudaCode.GDexplicaTxt3Objects1= [];
gdjs.ajudaCode.GDexplicaTxt3Objects2= [];
gdjs.ajudaCode.GDexplicaTxt22Objects1= [];
gdjs.ajudaCode.GDexplicaTxt22Objects2= [];
gdjs.ajudaCode.GDexplicaTxt32Objects1= [];
gdjs.ajudaCode.GDexplicaTxt32Objects2= [];
gdjs.ajudaCode.GDexplicaTxt222Objects1= [];
gdjs.ajudaCode.GDexplicaTxt222Objects2= [];
gdjs.ajudaCode.GDbtVoltarObjects1= [];
gdjs.ajudaCode.GDbtVoltarObjects2= [];
gdjs.ajudaCode.GDvoltartxtObjects1= [];
gdjs.ajudaCode.GDvoltartxtObjects2= [];

gdjs.ajudaCode.conditionTrue_0 = {val:false};
gdjs.ajudaCode.condition0IsTrue_0 = {val:false};
gdjs.ajudaCode.condition1IsTrue_0 = {val:false};


gdjs.ajudaCode.mapOfGDgdjs_46ajudaCode_46GDbtVoltarObjects1Objects = Hashtable.newFrom({"btVoltar": gdjs.ajudaCode.GDbtVoltarObjects1});gdjs.ajudaCode.eventsList0 = function(runtimeScene) {

{


gdjs.ajudaCode.condition0IsTrue_0.val = false;
{
gdjs.ajudaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.ajudaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.ajudaCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("btVoltar"), gdjs.ajudaCode.GDbtVoltarObjects1);
{for(var i = 0, len = gdjs.ajudaCode.GDbtVoltarObjects1.length ;i < len;++i) {
    gdjs.ajudaCode.GDbtVoltarObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btVoltar"), gdjs.ajudaCode.GDbtVoltarObjects1);

gdjs.ajudaCode.condition0IsTrue_0.val = false;
{
gdjs.ajudaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ajudaCode.mapOfGDgdjs_46ajudaCode_46GDbtVoltarObjects1Objects, runtimeScene, true, false);
}if (gdjs.ajudaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ajudaCode.GDbtVoltarObjects1 */
{for(var i = 0, len = gdjs.ajudaCode.GDbtVoltarObjects1.length ;i < len;++i) {
    gdjs.ajudaCode.GDbtVoltarObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.ajudaCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.ajudaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ajudaCode.GDmolduraObjects1.length = 0;
gdjs.ajudaCode.GDmolduraObjects2.length = 0;
gdjs.ajudaCode.GDtituloTxtObjects1.length = 0;
gdjs.ajudaCode.GDtituloTxtObjects2.length = 0;
gdjs.ajudaCode.GDexplicaTxtObjects1.length = 0;
gdjs.ajudaCode.GDexplicaTxtObjects2.length = 0;
gdjs.ajudaCode.GDexplicaTxt2Objects1.length = 0;
gdjs.ajudaCode.GDexplicaTxt2Objects2.length = 0;
gdjs.ajudaCode.GDexplicaTxt3Objects1.length = 0;
gdjs.ajudaCode.GDexplicaTxt3Objects2.length = 0;
gdjs.ajudaCode.GDexplicaTxt22Objects1.length = 0;
gdjs.ajudaCode.GDexplicaTxt22Objects2.length = 0;
gdjs.ajudaCode.GDexplicaTxt32Objects1.length = 0;
gdjs.ajudaCode.GDexplicaTxt32Objects2.length = 0;
gdjs.ajudaCode.GDexplicaTxt222Objects1.length = 0;
gdjs.ajudaCode.GDexplicaTxt222Objects2.length = 0;
gdjs.ajudaCode.GDbtVoltarObjects1.length = 0;
gdjs.ajudaCode.GDbtVoltarObjects2.length = 0;
gdjs.ajudaCode.GDvoltartxtObjects1.length = 0;
gdjs.ajudaCode.GDvoltartxtObjects2.length = 0;

gdjs.ajudaCode.eventsList1(runtimeScene);
return;

}

gdjs['ajudaCode'] = gdjs.ajudaCode;

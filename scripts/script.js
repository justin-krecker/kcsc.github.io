let hydraCanvas = document.getElementById("hydra-bg");
// set small size to avoid high resource demand:
hydraCanvas.width  = Math.min(1920);
hydraCanvas.height = Math.min(1920);

const hydra = new Hydra({
  canvas: hydraCanvas,
  detectAudio: false,
  enableStreamCapture: false,
});

resizeTimeout = -1;
onresize = ()=> {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(()=>{
        setResolution(
            Math.min(1920),
            Math.min(1920)
        );
    },200)
}

// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// www.twoforlarry.com
//a.setSmooth(.6)
//a.setScale(20)
src(o1)
  //.rotate(()=>a.fft[2])
  .add(src(o2)
       //.rotate(()=>a.fft[0])
       ,1)
  .add(src(o3)
       //.rotate(()=>a.fft[3]*-1)
       ,1)
  .repeat(2,2,0,0)
  .kaleid(2)
  //.scroll(()=>a.fft[1]/2-a.fft[0]/2,
          //()=>a.fft[1]/2-a.fft[3]/2,
          //.0156,-.0156)
  .saturate(2)
  .colorama(1)
  .scale(2)
  .out(o0)
shape(90,.01,.79)
  .scroll(0,0,.0625,.125)
  .repeat(2,2,0,0)
  .kaleid(2)
  .kaleid(8)
  .add(src(o1).scroll(.5,.5),1)
  .mult(solid(0,.5,0,1),1)
  .out(o1)
shape(4,.01,.9)
  .scroll(0,0,.0312,-.0312)
  .repeat(2,2,0,0)
  .kaleid(4)
  .mult(solid(1,0,0,1),1)
  .out(o2)
osc(20,-.0312,0)
  .rotate(0,.0312)
  .kaleid(8)
  .mult(solid(0,0,1,1),1)
  .out(o3)



let hydraCanvas = document.getElementById("hydra-bg");
// set small size to avoid high resource demand:
hydraCanvas.width  = Math.min(window.innerWidth  , 1920);
hydraCanvas.height = Math.min(window.innerHeight , 1920);

const hydra = new Hydra({
  canvas: hydraCanvas,
  detectAudio: false,
  enableStreamCapture: false,
});

// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
//www.twoforlarry.com
osc(4,.25,[1.5,1.9].smooth().fast(.25))
  .modulate(o2,1)
  .out(o0)
src(o1)
  .add(src(o1).scroll(.5,.5),1)
  .scroll([0,-.025,-.05,-.025,0,.025,.05,.025].smooth()
          ,[.05,.025,0,-.025,-.05,-.025,0,.025].smooth())
  .add(src(o2).scale(.9),.8)
  .kaleid(8)
  .out(o2)
shape(90,.75,.01)
  .diff(shape(90,.75,.01)
        // t, tr, r, b, b, bl, l, tl
        .scroll([0,-.025,-.05,-.025,0,.025,.05,.025]
                .smooth(),
                [.05,.025,0,-.025,-.05,-.025,0,.025]
                .smooth()))
  .scroll(0,0,.0312,-.0312)
  .out(o1)


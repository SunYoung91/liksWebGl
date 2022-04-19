import GL = WebGLRenderingContextStrict;
import GL2 = WebGL2RenderingContextStrict;

import { LoadImage } from "./ResourceMgr";

function init() {
    console.log("")
    const canvas: HTMLCanvasElement = document.getElementById('gameCanvas') as HTMLCanvasElement
    const gl: WebGL2RenderingContext = canvas.getContext("webgl", { antialias: false })! as any as WebGL2RenderingContext;

    if (gl === null) {
        console.log("WebGL2 not available");
        return;
    }

    const maxsize = gl.getParameter(gl.MAX_3D_TEXTURE_SIZE);
    console.log(`Attempting to create super useful, empty, NPOT 3D texture of size ${maxsize} x 13 x 5...`);

    let extensions = ["WEBGL_compressed_texture_etc", "WEBGL_compressed_texture_astc", "WEBGL_compressed_texture_etc1", "WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_compressed_texture_pvrtc"]
    let supports = []
    for (let name of extensions) {
        if (!gl.getExtension(name)) {
            console.error(name)
        } else {
            console.log(name)
            supports.push(name)
        }
    }



    let c = document.getElementById('infoText')
    c.innerText = supports.join("\n")

    console.log('开始加载图像文件')
    LoadImage('https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg', (error: Error, img: any) => {


    })
}
init()


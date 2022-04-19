

type LoadImageCallBack = (error: Error, img: any) => void;
export function LoadImage(url: string, cb: LoadImageCallBack): void {
    let img = new Image()


    img.onload = (ev: Event): void => {
        console.log("资源加载完成啦")
        
    }

    img.onerror = (event: Event) => {
        console.error('资源加载失败')
    }

    console.log('加载:' + url)

    img.src = url

}
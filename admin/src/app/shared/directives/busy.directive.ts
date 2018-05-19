import { Directive, ElementRef, HostListener, Input ,SimpleChange,OnChanges,SimpleChanges} from '@angular/core';
import { Observable } from 'rxjs';

@Directive({ selector: '[zkBusy]' })
export class ZkBusyDirective implements OnChanges{

    private busyTemplate:string;
    private el: HTMLElement;
    private divElement:HTMLElement = document.createElement("div");
    constructor(el: ElementRef) { 
        this.el = el.nativeElement;
        this.el.style.position = 'relative';
        this.createDivElement();
    }

    @Input('zkBusy') busy: Observable<Object>;    

    ngOnChanges(changes: SimpleChanges) {
        if (changes) {
            if (changes['busy'] && changes['busy'].currentValue) {
                this.el.appendChild(this.divElement);
                changes['busy'].currentValue.subscribe(
                    (res:any)=>{
                        // debugger;
                        // let self = this;
                        // setTimeout(function(){
                        //     self.el.removeChild(self.divElement);
                        // },2000);
                        this.el.removeChild(this.divElement);
                    },
                    (error:any)=>{
                        this.el.removeChild(this.divElement);
                        return Observable.throw(error);
                    }
                );
            }
        }
    }

    private createDivElement(){
        this.divElement = document.createElement("div");
        this.divElement.style.position = "absolute";
        this.divElement.style.zIndex = "100";
        this.divElement.style.left = "0px";
        this.divElement.style.top = "0px";
        this.divElement.style.width = "100%";
        this.divElement.style.height = "100%";
        this.divElement.style.display = "flex";
        this.divElement.style.alignItems = "center";
        this.divElement.style.justifyContent = "center";
        this.divElement.style.backgroundColor = "rgba(0,0,0,.6)";
        this.divElement.style.color = "#fff";
        //this.divElement.innerText = "loading...";
        //this.divElement.innerHTML = '<div class="icon-rotate"><i class="fa fa-spinner mw-fs-20"></i></div>';
        //this.divElement.innerHTML = '<i class="iconfont icon-dengdai mw-fs-24 mw-rotate"></i>';
        this.divElement.innerHTML = '<img src="./assets/svgs/loading.svg" class="rotate-spin color-primary" style="width:30px;">';
        //this.divElement.innerHTML = '<object data="./assets/svgs/loading.svg" class="mw-rotate mw-primary" type="image/svg+xml" height="30"/>';
    }
}

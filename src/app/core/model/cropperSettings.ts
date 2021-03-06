export interface ICropperSettings {
    canvasWidth?: number;
    canvasHeight?: number;
    width?: number;
    height?: number;
    minWidth?: number;
    minHeight?: number;
    minWithRelativeToResolution?: boolean;
    croppedWidth?: number;
    croppedHeight?: number;
    touchRadius?: number;
    noFileInput?: boolean;
    allowedFilesRegex?: RegExp;
    rounded: boolean;
    keepAspect: boolean;
    preserveSize: boolean;
    cropOnResize: boolean;
    compressRatio: number;
}

export class CropperSettings implements ICropperSettings {
    public canvasWidth: number = 300;
    public canvasHeight: number = 300;

    public dynamicSizing: boolean = false;
    public cropperClass: string;
    public croppingClass: string;

    public width: number = 140;
    public height: number = 140;

    public minWidth: number = 50;
    public minHeight: number = 50;
    public minWithRelativeToResolution: boolean = true;

    public croppedWidth: number = 720;
    public croppedHeight: number = 360;

    public touchRadius: number = 20;
    public noFileInput: boolean = true;

    public fileType:string;

    public resampleFn:Function;

    public allowedFilesRegex: RegExp = /\.(jpe?g|png|gif|bmp)$/i;
    public cropOnResize: boolean = true;
    public preserveSize: boolean = false;

    public compressRatio:number = 1.0;

    private _rounded: boolean = false;
    private _keepAspect: boolean = false;

    constructor(settings?: any) {
        if (typeof settings === 'object') {
            this.canvasWidth = settings.canvasWidth || this.canvasWidth;
            this.canvasHeight = settings.canvasHeight || this.canvasHeight;
            this.width = settings.width || this.width;
            this.height = settings.height || this.height;
            this.minWidth = settings.minWidth || this.minWidth;
            this.minHeight = settings.minHeight || this.minHeight;
            this.minWithRelativeToResolution = settings.minWithRelativeToResolution || this.minWithRelativeToResolution;
            this.croppedWidth = settings.croppedWidth || this.croppedWidth;
            this.croppedHeight = settings.croppedHeight || this.croppedHeight;
            this.touchRadius = settings.touchRadius || this.touchRadius;            
            this.noFileInput = settings.noFileInput || this.noFileInput;
            this.allowedFilesRegex = settings.allowedFilesRegex || this.allowedFilesRegex;
            this.rounded = settings.rounded || this.rounded;
            this.keepAspect = settings.keepAspect || this.keepAspect;
            this.preserveSize = settings.preserveSize || this.preserveSize;
            this.cropOnResize = settings.cropOnResize || this.cropOnResize;
            this.compressRatio = settings.compressRatio || this.compressRatio;            
        }
    }

    set rounded(val: boolean) {
        this._rounded = val;
        if (val) {
            this._keepAspect = true;
        }
    }

    get rounded(): boolean {
        return this._rounded;
    }

    set keepAspect(val: boolean) {
        if (val === false && this._rounded) {
            throw new Error('Cannot set keep aspect to false on rounded cropper. Ellipsis not supported');
        }

        this._keepAspect = val;
    }

    get keepAspect(): boolean {
        return this._keepAspect;
    }
}

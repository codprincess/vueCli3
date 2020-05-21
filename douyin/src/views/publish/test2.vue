<template>
    <div>
        <input type="button" title="开启摄像头" value="开启摄像头" @click="getCompetence" /><br />  
        <video height="120px" autoplay="autoplay"  id="videoCamera"></video><hr />  
        <input type="button" title="拍照" value="拍照" @click="getPhoto" /><br />  
        <canvas id="canvas1" height="120px" ></canvas><hr />  
        <input type="button" title="视频" value="视频" @click="getVedio" /><br />  
        <canvas id="canvas2" height="120px"></canvas>
    </div>
</template>
<script>
export default {
    data(){
        return{
            video:null,
            audio:null,
            audioType:0,
            exArray:[],
            canvas1:null,
            context1:null,
            // context2:null,
            // canvas2:null,

        }
    },
    mounted() {
        this.video = document.getElementById('videoCamera')
        //this.video = document.querySelector('video');
       // this.video = document.querySelector('video'); 
       // console.log(video) 
       //var audio, audioType;  
        this.canvas1 = document.getElementById('canvas1');  
        // this.context1 = this.canvas1.getContext('2d');  
  
        // this.canvas2 = document.getElementById('canvas2');  
        // this.context2 = this.canvas2.getContext('2d');  
  
        // navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;  
        this.windowURL = window.URL || window.webkitURL || window.mozURL || window.msURL;  
       this.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.getUserMedia
       // this.exArray = []; //存储设备源ID  
        

    },
    created(){
        // MediaStreamTrack.getSources(function (sourceInfos) {  
        //     for (var i = 0; i != sourceInfos.length; ++i) {  
        //         var sourceInfo = sourceInfos[i];  
        //         //这里会遍历audio,video，所以要加以区分  
        //         if (sourceInfo.kind === 'video') {  
        //             this.exArray.push(sourceInfo.id);  
        //         }  
        //     }  
        // }); 
        if (navigator.mediaDevices) {
            navigator.mediaDevices.enumerateDevices()
            .then(function (sources) {
            var videoSources = sources.filter(function (source) {
                return source.kind === 'video';
            });
                console.log('got video sources', videoSources);
            })
        }
    },
    methods:{
        getCompetence () {
        var _this = this
        // this.thisCancas = document.getElementById('canvasCamera')
        // this.thisContext = this.thisCancas.getContext('2d')
        this.video = document.getElementById('videoCamera')
        // 旧版本浏览器可能根本不支持mediaDevices，我们首先设置一个空对象
        if (navigator.mediaDevices === undefined) {
          navigator.mediaDevices = {}
        }
        // 一些浏览器实现了部分mediaDevices，我们不能只分配一个对象
        // 使用getUserMedia，因为它会覆盖现有的属性。
        // 这里，如果缺少getUserMedia属性，就添加它。
        if (navigator.mediaDevices.getUserMedia === undefined) {
          navigator.mediaDevices.getUserMedia = function (constraints) {
            // 首先获取现存的getUserMedia(如果存在)
            var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.getUserMedia
            // 有些浏览器不支持，会返回错误信息
            // 保持接口一致
            if (!getUserMedia) {
              return Promise.reject(new Error('getUserMedia is not implemented in this browser'))
            }
            // 否则，使用Promise将调用包装到旧的navigator.getUserMedia
            return new Promise(function (resolve, reject) {
              getUserMedia.call(navigator, constraints, resolve, reject)
            })
          }
        }
        var constraints = { audio: false, video: { width: this.videoWidth, height: this.videoHeight, transform: 'scaleX(-1)' } }
        navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
        //   // 旧的浏览器可能没有srcObject
        //   if ('srcObject' in _this.thisVideo) {
        //     _this.thisVideo.srcObject = stream
        //   } else {
        //     // 避免在新的浏览器中使用它，因为它正在被弃用。
        //     _this.thisVideo.src = window.URL.createObjectURL(stream)
        //   }
        //   _this.thisVideo.onloadedmetadata = function (e) {
        //     _this.thisVideo.play()
        //   }
        if('srcObject' in _this.video){
                _this.video.mozSrcObject = stream;
            }else{
                _this.video.src = this.windowURL.createObjectURL(stream)
            }
            //音频
            _this.audio = new Audio();
            console.log('33',_this.audio )
            //获取格式
            _this.audioType = _this.getAudioType(_this.audio);
            if(_this.audioType){
                _this.audio.src = _this.audioType;
                // _this.audio.play();
                 _this.audio.load();
                let playPromise =  _this.audio.play();
                if (playPromise !== undefined) {    
                    playPromise.then(() => {        
                         _this.audio.play() 
                    }).catch(()=> {           
            
                    })}
            }
        }).catch(err => {
          console.log(err)
        })
      },
        // getMedia(){
        //     if(this.getUserMedia){
        //         console.log('111',this.getUserMedia)
        //         this.getUserMedia({
        //             'video':{
        //                 'option':[{
        //                    'sourceId': this.exArray[0] //0为前置摄像头，1为后置
        //                 }]
        //             },
        //             'audio':true
        //         },
        //         //获取成功后的回调
        //             this.successFunc(),this.errorFunc()
        //         )
        //     }else{
        //         console.log('亲，你的浏览器不支持呢！')
        //     }
        // },
        // errorFunc(e) {  
        //     alert('Error！'+e);  
        // },
        // successFunc(stream){
            
        //     alert('Succeed to get media!');
        //     console.log('222',stream)
        //     // if(this.video.mozSrcObject !== undefined){
        //     //     //Firefox中，video.mozSrcObject最初为null，而不是未定义的，我们可以靠这个来检测Firefox的支持
        //     //     this.video.mozSrcObject = stream; 
        //     // }else{
        //     //     // this.video.src = window.URL && window.URL.createObjectURL(stream) || stream;  
                
        //     // }
        //     if('srcObject' in this.video){
        //         this.video.mozSrcObject = stream;
        //     }else{
        //         this.video.src = this.windowURL.createObjectURL(stream)
        //     }
        //     //音频
        //     this.audio = new Audio();
        //     //获取格式
        //     this.audioType = this.getAudioType(this.audio);
        //     if(this.audioType){
        //         this.audio.src = this.audioType;
        //         this.audio.play();
        //     }
        // },

        //获取音频格式
        getAudioType(element){
            if (element.canPlayType) {  
                if (element.canPlayType('audio/mp4; codecs="mp4a.40.5"') !== '') {  
                    return ('aac');  
                } else if (element.canPlayType('audio/ogg; codecs="vorbis"') !== '') {  
                    return ("ogg");  
                }  
            }  
            return false;
        },
        // 将视频帧绘制到Canvas对象上,Canvas每60ms切换帧，形成肉眼视频效果 
        drawVideoAtCanvas(video,context){
            window.setInterval(function () {  
                context.drawImage(this.video, 0, 0,90,120);  
            }, 60); 
        },
         getPhoto() {
            this.canvas1 = document.getElementById('canvas1');  
             this.video = document.getElementById('videoCamera')
            this.context1 = this.canvas1.getContext('2d');  
            this.context1.drawImage(this.video, 0, 0,90,120); //将video对象内指定的区域捕捉绘制到画布上指定的区域，实现拍照。  
        },
        getVedio() {  
            this.canvas2 = document.getElementById('canvas2'); 
            this.context2 = this.canvas2.getContext('2d'); 
            this.video = document.getElementById('videoCamera')
            this.drawVideoAtCanvas(this.video, this.context2);  
        } 
    }
}
</script>
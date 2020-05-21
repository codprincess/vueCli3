<template>
    <div class="publish">
        <div class="pub-top">
            <div class="back">
                <router-link to="/" tag="span" class="" >×</router-link>
            </div>
            <div><span>选择音乐</span></div>
        </div>
        <div class="upload-box">
             <video ref="video" style="width:100%; height:500px; object-fit: fill" autoplay></video>
            <div class="upload-bar">
                <!-- <button @click="startRecording" :disabled="videoStart" size="small">start recording</button>
                <button @click="stopRecording" :disabled="!videoStart" size="small" id="btn-stop-recording">stop recording</button> -->

                <div class="bar-item">
                    <div class="icon"></div>
                    <p>道具</p>
                </div>
                <div class="bar-item" @click="callCamera">
                    <div class="pub-border"><div class="pub"></div></div>
                </div>
                <div class="bar-item" @click="toUpload">
                    <div class="icon"></div>
                    <p>上传</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//import RecordRTC from 'recordrtc'
export default {
    data(){
        return{
            video: null,
            videoStart: false,
            recorder: null,
        }
    },
    //  created() {
    //         if (!navigator.getDisplayMedia && !navigator.mediaDevices.getDisplayMedia) {
    //             let error = 'Your browser does NOT support the getDisplayMedia API.';
    //             throw new Error(error);
    //             //console.log("Your browser does NOT support the getDisplayMedia API")
    //         }
    //     },
    //     mounted() {
    //         this.video = document.querySelector('video');
    //     },
    methods:{
        toUpload(){
            this.$router.push('/upload')
        },
        callCamera(){
            // H5调用电脑摄像头API
            navigator.mediaDevices.getUserMedia({
                video: true
            }).then(success => {
                // 摄像头开启成功
                this.$refs['video'].srcObject = success
                // 实时拍照效果
                this.$refs['video'].play()
            }).catch(
                console.log('摄像头开启失败，请检查摄像头是否可用！')
            )
        }
        // invokeGetDisplayMedia(success, error) {
        //         let displaymediastreamconstraints = {
        //             video: {
        //                 displaySurface: 'monitor', // monitor, window, application, browser
        //                 logicalSurface: true,
        //                 cursor: 'always' // never, always, motion
        //             }
        //         };
        //         // above constraints are NOT supported YET
        //         // that's why overridnig them
        //         displaymediastreamconstraints = {
        //             video: true
        //         };
        //         if (navigator.mediaDevices.getDisplayMedia) {
        //             navigator.mediaDevices.getDisplayMedia(displaymediastreamconstraints).then(success).catch(error);
        //         }
        //         else {
        //             navigator.getDisplayMedia(displaymediastreamconstraints).then(success).catch(error);
        //         }
        //     },
        //     captureScreen(callback) {
        //         this.invokeGetDisplayMedia((screen) => {
        //             this.addStreamStopListener(screen, () => {
        //                //
        //             });
        //             callback(screen);
        //         }, function (error) {
        //             console.error(error);
        //             alert('Unable to capture your screen. Please check console logs.\n' + error);
        //         });
        //     },
        //     addStreamStopListener(stream, callback) {
        //         stream.addEventListener('ended', function () {
        //             callback();
        //             callback = function () { };
        //         }, false);
        //         stream.addEventListener('inactive', function () {
        //             callback();
        //             callback = function () { };
        //         }, false);
        //         stream.getTracks().forEach(function (track) {
        //             track.addEventListener('ended', function () {
        //                 callback();
        //                 callback = function () { };
        //             }, false);
        //             track.addEventListener('inactive', function () {
        //                 callback();
        //                 callback = function () { };
        //             }, false);
        //         });
        //     },
        //     startRecording() {
        //         this.captureScreen(screen=>{
        //             this.video.srcObject = screen;
        //             this.recorder = RecordRTC(screen, {
        //                 type: 'video'
        //             });
        //             this.recorder.startRecording();
        //             // release screen on stopRecording
        //             this.recorder.screen = screen;
        //             this.videoStart = true;
        //         });
        //     },
        //     stopRecordingCallback() {
        //         this.video.src = this.video.srcObject = null;
        //         this.video.src = URL.createObjectURL(this.recorder.getBlob());
 
        //         this.recorder.screen.stop();
        //         this.recorder.destroy();
        //         this.recorder = null;
        //         this.videoStart = false;
        //     },
        //     stopRecording() {
        //         this.recorder.stopRecording(this.stopRecordingCallback);
        //     }
         },

}
</script>
<style scoped>
    .publish{
        background-color: #cccccc;
        color: #ffffff;
    }
    .pub-top{
        height: 44px;
        line-height: 44px;
        display: flex;
        justify-content: center;
        color: #ffffff;
        font-size: 16px;
        position: relative;

    }
    .back{
        position: absolute;
        left: 10px;
    }
    .back span{
        font-size: 28px;
    } 
    .upload-box{
        height: -webkit-fill-available;
    }
    .upload-bar{
        position: fixed;
        bottom: 0;
        display: flex;
        height: 100px;
        justify-content: space-between;
        width: 100%;
        padding: 0 50px;
        box-sizing: border-box;
    }
    .bar-item .icon{
        width: 35px;
        height: 35px;
        border-radius: 5px;
        border:1px red solid;
        margin-bottom: 5px;
    }
    .pub-border{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 55px;width: 55px;
        border-radius: 50%;
        border: 1px #FE2C55 solid;
        box-shadow:-5px 0 5px #FE2C55, /*左边阴影*/
        5px 0 5px #FE2C55, /*右边阴影*/
        0 -5px 5px #FE2C55, /*顶部阴影*/
        0 5px 5px #FE2C55; /*底边阴影*/

    }
    .bar-item .pub{
        border-radius: 50%;
        width: 50px;
        height: 50px;
        background-color: #FE2C55;
    }

</style>
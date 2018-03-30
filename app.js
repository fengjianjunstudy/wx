App({
    onLaunch: function(options) {
        // Do something initial when launch.
        console.log("launch",this.globalData);
    },
    onShow: function(options) {
        console.log("on show")
    },
    onHide: function() {
        // Do something when hide.
        console.log("on hide")
    },
    onError: function(msg) {
        console.log(msg)
    },
    globalData: 'I am global data1'
})
var appInstance = getApp();
console.log(appInstance.globalData)

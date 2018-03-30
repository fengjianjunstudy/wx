Page({
    data:{
        title:"我是果果",
        array:["javascript","php","java"],
        view:"mina",
        staffA: {firstName: 'Hulk', lastName: 'Hu'},
        staffB: {firstName: 'Shang', lastName: 'You'},
        staffC: {firstName: 'Gideon', lastName: 'Lin'},
        objectArray:[
            {id:5,unique:"u5"},
            {id:4,unique:"u4"},
            {id:3,unique:"u3"},
            {id:2,unique:"u2"},
            {id:1,unique:"u1"},
            {id:0,unique:"u0"}
        ]
    },
    changeView:function(){
        this.setData({view:"webview"})
    },
    switch:function(event){
        console.log(event);
        const length = this.data.objectArray.length
        this.data.objectArray.sort(function(o1,o2){
            return o1.id - o2.id;
        })
        this.setData({
            objectArray: this.data.objectArray
        })
    },
    addToFront:function(){
        let length = this.data.objectArray.length;
        this.data.objectArray.push({id:length,unique:"u"+length});
        this.setData({objectArray:this.data.objectArray})
    },
    onLoad:function(){
        console.log(getCurrentPages())
    },
    onReady:function(){
        wx.setNavigationBarTitle
    },
    onTabItemTap:function(item){
        console.log(item)
    },
    onShareAppMessage:function(){
        return {
            title:"自定义转发",
            path:"/pages/logs"
        }
    },
    viewTap:function(){
        this.setData({"title":"I love you ,果果"},function(){
            console.log("认真的")
        })
    }
})
class Settings {
    constructor(root){
        this.root = root;
        this.platform = "WEB";
        if(this.root.Project_402OS) this.platform = "Project_402App";
        this.username = "",
        this.photo = "",
        
        this.$settings = ${`
<div class = "project_402-settings">
</div>        
`}
        this.root.$project_402.append(this.$settings);
        this.start();

    }

    start(){
        this.getinfo();

    }  
    register(){//打开注册界面

    }
    getinfo(){
        let outer = this;


        $.ajax({
            url:"",//域名的完整网址
            type:"GET",
            data:{
                platform:outer.platform,
            },
            success:function(resp){
                console.log(resp);
                if(resp.result === "success"){
                    outer.username = resp.username;
                    outer.photo = resp.photo;
                    outer.hide();
                    outer.root.menu.show();
                }
                else{
                    outer.login();
                }
            }
        })
    }
    hide(){
        this.settings.hide9();
    }
    show(){
        this.settings.show();
    }
}
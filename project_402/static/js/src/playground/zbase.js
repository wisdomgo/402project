class Project_402Playground{
    constructor(root){
        this.root = root;
        this.$playground = $(`<>界面</>`);

        this.root.$project_402.append(this.$playground);

        this.start();
        start(){

        }
        update(){}
        show(){ //打开playground界面
            this.$playground.show();
        }
        hide(){ //关闭playground界面
            this.$playground.hide();
        }
    }
}
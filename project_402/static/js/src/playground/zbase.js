class Project_402Playground{
    constructor(root){
        this.root = root;
        this.$playground = $(`<>����</>`);

        this.root.$project_402.append(this.$playground);

        this.start();
        start(){

        }
        update(){}
        show(){ //��playground����
            this.$playground.show();
        }
        hide(){ //�ر�playground����
            this.$playground.hide();
        }
    }
}
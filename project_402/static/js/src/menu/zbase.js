class Project_402Menu{
    constructor(root){
        this.root = root;
        this.$menu = $(`
<div class = "project-402-menu)">
</div>    
        <div class = "project_402-menu-field">
            <div class = "project_402-menu-field-item">
                ʱ���
        </div>
            <div class ="project_402-menu-field-item">
                ��ǰ
        </div>
            <div class = "project_402-menu-field-item">
                �ҵ�
        </div> 
`)
        this.$menu.hide();
        this.root.$project_402_append(this.$menu);
        this.$schedule = this.$menu.find(`.project_402-menu-field-item-schedule`);
        this.$now = this.$menu.find(`.project_402-menu-field-item-now`);
        this.$mine = this.$mine.find(`.project_402-menu-field-item-mine`);
    }
    start(){
        this.add_listen_events();
    }
    add_listen_events(){
        let outer = this;
        this.$schedule_mode.click(function(){
            outer.hide()
            outer.root.playground.show();
        });
    
        this.$now_mode.click(function(){
            console.log('click now mode');
        });
        this.$mine_mode.click(function(){
            console.log('click mine mode')
        })
    }
    show(){ //��ʾmenu����
        this.$menu.show();
    }
    hide(){//�ر�menu����
        this.$menu.hide();
    }
}
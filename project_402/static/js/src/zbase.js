export class Project_402{
    constructor(id,Project_402OS){
        this.id = id;
        this.$project_402 = $('#' + id);
        this.menu = new Project_402Menu(this);

        this.$settings = $(`
<div class = "project_402_settings">        
`);
        
        this.settings = new Settings(this);
        this.playground = new Project_402Playground(this);
        this.Project_402OS = Project_402OS;

        this.start();
    }
    start(){
        
    }
}


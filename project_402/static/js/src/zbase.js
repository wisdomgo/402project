export class Project_402{
    constructor(id){
        this.id = id;
        this.$project_402 = $('#' + id);
        this.menu = new Project_402Menu(this);
        this.playground = new Project_402Playground(this);

        this.start();
    }
    start(){
        
    }
}


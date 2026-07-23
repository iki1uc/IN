class IN {

    constructor(){
        this.input = null;
        this.state = "INIT";
    }

    enter(value){
        this.input = value;
        this.state = "RECEIVED";
    }

    status(){
        return {
            input: this.input,
            state: this.state
        };
    }
}

window.IN = new IN();

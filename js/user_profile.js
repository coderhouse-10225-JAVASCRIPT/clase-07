class UserProfile {
    constructor(){
        this.darkmode = false;
        this.language = "es";
    }

    save(){
        localStorage.setItem("Darkmode", this.darkmode);
    }

    load() {
        let loaded_darkmode = localStorage.getItem("Darkmode");

        if (loaded_darkmode != null){
            this.darkmode = (loaded_darkmode=="true") ? true : false;
        }
        
    }
}
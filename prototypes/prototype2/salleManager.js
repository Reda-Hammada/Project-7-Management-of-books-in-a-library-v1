class salleManager{ 
    #salleList = [];
    #counter = 0;

    get salleList(){
        return this.#salleList;
    }


    addSalle(Salle){
        this.#counter = this.#counter + 1;
        Salle.id = this.#counter;
        this.#salleList.push(Salle);
    }

    getSale(rowId){
        for(let i = 0; i<this.#salleList.length; i++){
            if(rowId = this.#salleList[i].id){
                return this.#salleList[i];
            }
        }
    }

    Modify(salle){
        for(var i= 0; i<this.salleList.length; i++){
            if(salle.id = this.salleList[i].id){
              this.salleList[i] = salle;

              return salle;
            }
        }
    }

    deleteSale(id){
        this.#salleList=  this.#salleList.filter(function(salle){

            return salle.id != id

        })


    }

}
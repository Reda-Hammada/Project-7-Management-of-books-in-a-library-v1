class GestionOuvrage{
    #ouvrageList = [];
    #compteur = 0;
    
   get ouvrageList(){
       return this.#ouvrageList;
   }

   addOuvrage(ouvrage){
       this.#compteur = this.#compteur + 1
       ouvrage.id = this.#compteur
       this.#ouvrageList.push(ouvrage)
   }
   modifierOuvrage(ouvrage) {
    for (var i = 0; i < this.#ouvrageList.length; i++) {
        if (ouvrage.id == this.#ouvrageList[i].id) {
            this.#ouvrageList[i] = ouvrage
            return ouvrage
        }
    }
  }
  getItem(id) {
    for (var i = 0; i < this.ouvrageList.length; i++) {
        if (id == this.ouvrageList[i].id) {
            return this.ouvrageList[i]
        }
    }
  }
  suprimerOuvrage(ouvrage) {
    for (var i = 0; i < this.#ouvrageList.length; i++) {
        if (ouvrage.id == this.#ouvrageList[i].id) {
            this.#ouvrageList[i] = ouvrage
            return ouvrage
        }
    }
}
getAllItem(){
    return this.#ouvrageList.sort(function(a,b){
        return a.titre.localCompare(b.titre)
    })
}

save(){

    var stringList = JSON.stringify(this.#ouvrageList)

    localStorage.setItem('ouverageList', stringList)
    console.log(JSON.parse(localStorage.getItem("ouverageList")))


    localStorage.setItem('compteur', this.#compteur)
}

open(){
    this.#ouvrageList =  JSON.parse(localStorage.getItem("ouverageList")  || "[]")
    this.#compteur = parseInt(localStorage.getItem('compteur') || 0)
    console.log(this.#ouvrageList)
    console.log(localStorage.getItem("ouverageList"))

 }
    
}
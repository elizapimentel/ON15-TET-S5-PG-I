class ConversorDna{
    constructor(dna){
        this.dna = dna
        this.rna = [] //não precisa declarar dentro do parametro, pois está sendo chamada dentro da função

    }

    converter(){
        let dna = this.dna.toUpperCase().split("") //a ordem dos métodos é feita de acordo com a lógica de ação
        for(let code of dna){
            if(code == "G"){
                 code = code.replace("G", "C") //para que o replace seja reconhecido em todas as ações, colocar a array que 
                 this.rna.push(code)            //será alterado fora do método
            } else if(code == "C"){
                 code = code.replace("C", "G")
                 this.rna.push(code)
            } else if(code == "T"){
                 code = code.replace("T", "A")
                 this.rna.push(code)
            } else if(code == "A"){
                 code = code.replace("A", "U")
                 this.rna.push(code)

            }
        }
        
        return this.rna.join("").toUpperCase()
    }
        
    }

let convert = new ConversorDna("aTGcCGAAATTTGCg")
console.log(convert.converter()) 




 
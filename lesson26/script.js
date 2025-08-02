class legend {
    constructor(networth, popularity, contribution) {
        this.netwoth = networth
        this.popularity = popularity
        this.contribution = contribution
    }
}
class ancestors extends legend {
    consrtuctor(netwoth, popularity, contribution, initiative, dignityshown) {
        this.networth = netwoth
        this.popularity = popularity
        this.contribution = contribution
        this.initiative = initiative
        this.dignityshown = dignityshown

    }
}

var kohli = new legend(5674998000000, "the most popular modern cricketer", 'mordernised test cricket')
var messi = new legend(987987987987987, 'GOAT', 'Invented new techniques of dribbling')
var ussainbolt = new legend(895793485, 'olympic gold medal', 'inspired the situation of rags to riches')

var vivrichards = new ancestors(890000000000, 'world cup winner', 'stylish batting', 'lots of struggles', 'questionable on field')

console.log(kohli.contribution)
console.log(messi.popularity)
console.log(ussainbolt.popularity)
console.log(vivrichards.popularity)
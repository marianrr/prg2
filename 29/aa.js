
class Node {
    constructor(data) {
        this.data = data
    }
}

class List {
    constructor() {
        this.head = null
        this.tail = null
    }

addToHead(data) {
    const node = new Node(data)
    if(!this.head) {
        this.head = node
        this.tail = node
    }

else {

node.next = this.head
this.head = node


}
}

afis() {
    let str = ""
    let current = this.head
    while(current) {
        str += `${current.data}---->`
        current = current.next
    }
    str += "NULL"
    return str
}





}


const list1 = new List()
list1.addToHead(111)
list1.addToHead(222)
list1.addToHead(567)
console.log(list1.afis())
console.log("The tail is: ", list1.tail.data)
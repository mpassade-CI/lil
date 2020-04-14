const Node = function(value){
  return {
    value: value,
    next: null
  }
}
const Lil = function(){
  return {
    head: null,
    addToStart(value){
      if (this.head===null){
        this.head = Node(value)
      }
      else {
        let oldHead = this.head
        this.head = Node(value)
        this.head.next = oldHead
      }
    },
    addToEnd(value){
      if (this.head===null){
        this.head = Node(value)
      }
      else {
        let lastNode = this.head
        while (lastNode.next!==null){
          lastNode = lastNode.next
        }
        lastNode.next = Node(value)
      }
    },
    removeFromStart(){
      let oldHead = this.head.value
      if (this.head===null){
        return null
      }
      if (this.head.next===null){
        this.head = null
      }
      else {
        this.head = this.head.next
      }
      return oldHead
    },
    removeFromEnd(){
      if (this.head===null){
        return null
      }
      if (this.head.next===null){
        let oldHead = this.head.value
        this.head = null
        return oldHead
      }
      else {
        let x = this.head
        while (x.next.next!==null){
          x = x.next
        }
        let lastNode = x.next
        x.next = null
        return lastNode.value
      }
    },
    getAt(num){
      if (this.head===null){
        return null
      }
      let index = 0
      let x = this.head
      while (index!==num){
        x = x.next
        index++
      }
      return x.value
    },
    removeAt(num){
      if (this.head===null){
        return null
      }
      if (num===0){
        return this.removeFromStart()
      }
      let index = 0
      let x = this.head
      while (index!==num-1){
        x = x.next
        index++
      }
      let y = x.next
      x.next = x.next.next
      return y.value
    }
  }
}





if (typeof Node === 'undefined') {
  Node = undefined;
}

if (typeof Lil === 'undefined') {
  Lil = undefined;
}


module.exports = {
  Lil,
  Node,
}

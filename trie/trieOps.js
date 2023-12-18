class TrieNode{
    constructor(){
        this.children={};
        this.isEndOfWord=false;
    }
}
class Trie{
    constructor(){
        this.root=new TrieNode();
    }
    insert(word){
        let node=this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new TrieNode();
            }
            node=node.children[char];
        }
        node.isEndOfWord=true;
    }
    display(){
        this.displayHelper(this.root,"");
    }
    displayHelper(node,prefix){
        if(node.isEndOfWord){
            console.log(prefix);
        }
        for(let char in node.children){
            this.displayHelper(node.children[char],prefix+char);
        }
    }
    search(word){
        let node=this.root;
        for(let char of word){
            if(!node.children[char]){
                return false;
            }
            node=node.children[char];
        }
        return node.isEndOfWord;
    }
    delete(word){
        if(!this.search(word)){
            console.log('Not found');
            return;
        }
        this.deleteHelper(this.root,word,0);
    }
    deleteHelper(node,word,index){
        if(index===word.length){
            node.isEndOfWord=false;
            node.childCount--;
            return;
        }
        const char=word[index];
        const childNode=node.children[char];
        this.deleteHelper(childNode,word,index+1);
        if(childNode.childCount===0 && !childNode.isEndOfWord){
            delete node.children[char];
            node.childCount--;
        }
    }
}
const trie=new Trie();
trie.insert('apple');
trie.insert('app');
trie.insert('banana');
trie.display();
console.log('apple ? :',trie.search('apple'));
trie.delete('apple');
trie.display();
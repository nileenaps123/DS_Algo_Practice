function encode(strs) {
        if (strs.length === 0) return '';
        //5#Hello5#World
        let res='';
        for(const str of strs){
            res+=`${str.length}#${str}`;
        }
        return res;
        
    }


function decode(s) {
        if (s.length === 0) return '';
        //5#Hello5#World
        let res=[],i=0;
        while(i<s.length){
            let pos=s.indexOf('#',i);
            let len=parseInt(s.slice(i,pos)); //covert 5(strlen) in string to int
            
            i=pos+1;
            let str=s.slice(i,i+len);
            res.push(str);
            i=i+len;
        }


        return res;
        
    }    



console.log(encode(["Hello","World"]));   

console.log(decode('5#Hello5#World'));   
window.onload = function(){ 
    document.getElementById('push').onclick = myClick;

    function myClick() {
        field1 = document.getElementById('field1').value;
        field2 = document.getElementById('field2').value;
        let res = search(field1, field2);
        if (res == 1000){
            isid.innerHTML="В строке нет подстроки";
        }
        else{
            isid.innerHTML=res;
        }
    }

    function sizeoff(strochka){
        let i = 0;
        for(let char of strochka){
            i++;
        }
        return (i);
    }

    function search(big, nobig) {
        let temp = 999;

        for (let i = 0; i < sizeoff(big); i++){
            if (big[i] == nobig[0]){
                let flag = 0;
                temp = i;
                for (let j = 0; j < sizeoff(nobig); j++){
                    if (big[i] != nobig[j]){
                        flag++;
                        i++;
                    }
                }
            }
        }
        return (temp + 1);
    }   

    
};
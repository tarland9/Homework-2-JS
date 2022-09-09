
alert('Press OK for continue...')

function Show(){
    var value = document.getElementById('inp').value
    if(value<18){
        alert('Age must be over 18...!')
    }
    else{
        document.getElementById('okay').style.opacity = '1'
    }
}


function ChangeToBlack(){
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
}

function ChangeToLight(){
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
}

function Okay() {
    var value = document.getElementById('qroup').value;
    var text = document.getElementById('okay');
    text.innerHTML = value;
    
    
    time=value.slice(-3)
    
    
    if(time[0]==='1'){
        
        document.body.style.backgroundColor='yellow';
        
    }
    else if(time[0]==='2'){
        
        document.body.style.backgroundColor='red';

    
    }
    else if(time[0]==='3'){
        document.body.style.backgroundColor='grey';

    }
    else{
        alert('this group doesnt exist....')

    }
    
}


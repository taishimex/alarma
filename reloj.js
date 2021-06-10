

let actualizarHora = function(){

    let fechass = new Date(),
        horass = fechass.getHours(),
        minutoss = fechass.getMinutes(),
        segundoss = fechass.getSeconds(),
        diaSemanass = fechass.getDay(),
        diass = fechass.getDate(),
        mess = fechass.getMonth(),
        yearss = fechass.getFullYear();
   
    let pHorass = document.getElementById('horas'),    
        pAMPMss = document.getElementById('ampm'),  
        pMinutoss = document.getElementById('minutos'),    
        pSegundoss = document.getElementById('segundos'),    
        pDiaSemanass = document.getElementById('diasemana'),    
        pDiass = document.getElementById('dia'),
        pMess = document.getElementById('mes'),    
        pYearss = document.getElementById('year');    
            
    let semana = ['Domingo', 'Lunes','Martes','Miercoles','Juves','Viernes','Sabado'];
        pDiaSemanass.textContent = semana[diaSemanass];

    let mes = ['Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
        pMess.textContent = mes[mess];    
        pYearss.textContent = yearss;   

        pHorass.textContent = horass;    
        pDiass.textContent = diass;
        
        if(minutoss < 10){ minutoss = "0" + minutoss};
        if(segundoss < 10){ segundoss = "0" + segundoss};
        
        pMinutoss.textContent = minutoss;

        pSegundoss.textContent = segundoss;
        
        if (horass >= 12){
            pAMPMss.textContent = 'PM';
        }else{
            pAMPMss.textContent = 'AM';
        }

        if (horass == 0){
            horass = 12
        }

};

actualizarHora();
let intervalo = setInterval(actualizarHora,1000);

let amopm = document.getElementById('amopm');
let jikan = document.getElementById('jikan');
let minuts = document.getElementById('minuts');
let saveAlarma = document.getElementById('save_alarma');


let alarmaSet = function(){

    





}







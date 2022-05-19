const candidateContainer = document.getElementById('candidateContainer');

const getCandidate = async(presidentName,formulaName,presidentTitle,formulaTittle,presidentPhoto,formulaPhoto,partyPhoto)=>{

   
  
    let candidate = new Candidate(presidentName,formulaName,presidentTitle,formulaTittle,presidentPhoto,formulaPhoto,partyPhoto);
    let component = new CandidateComponent(candidate);
    component.render(candidateContainer);  
  
  
  }



const getCandidatesAPI = async()=>{

    let url = `http://localhost:8080/Parcial2Api/api/candidate/all`;
    let response = await fetch(url, {method:'GET'} );
    let obj = await response.json();
    console.log(obj);

    for(let  i in obj){

        let candidate = new Candidate(obj[i].id,obj[i].presidentName, obj[i].formulaName, obj[i].presidentTitle, obj[i].formulaTittle, obj[i].presidentPhoto,obj[i].formulaPhoto,obj[i].partyPhoto);
        let component = new CandidateComponent(candidate);
        component.render(candidateContainer);
       
    }


}
//getCandidatesAPI();

const load = async()=>{

    await getCandidate('Rodolfo Hernandez','Marelen Castillo','Presidente','VicePresidenta','https://pbs.twimg.com/profile_images/1511813393220616192/FGoTlHyJ_400x400.jpg','https://pbs.twimg.com/profile_images/1506282884746952707/ZR_hZJCg_400x400.jpg','https://upload.wikimedia.org/wikipedia/commons/a/ae/Image-removebg-preview-4.png');
    await getCandidate('John Milton Rodriguez','Sandra de las lajas torres','Presidente','VicePresidenta','https://pbs.twimg.com/profile_images/1511088690495467536/5-X4wwsB_400x400.jpg','https://telemedellin.tv/wp-content/uploads/2022/05/Sandra-de-las-Lajas.jpg','https://www.camara.gov.co/sites/default/files/2018-08/libres.jpg');
    await getCandidate('Federico Gutierrez','Rodrigo Lara','Presidente','VicePresidente','https://pbs.twimg.com/profile_images/1488881294457065479/46Zcioym_400x400.jpg','https://pbs.twimg.com/profile_images/1357177351466024965/C3ssZqIF_400x400.jpg','https://upload.wikimedia.org/wikipedia/commons/8/8f/Logo_Coalici%C3%B3n_Equipo_por_Colombia.png');
    await getCandidate('Sergio Fajardo','Luis Gilberto Murillo','Presidente','VicePresidente','https://sac.org.co/wp-content/uploads/2021/11/Fajardob.jpg','https://upload.wikimedia.org/wikipedia/commons/e/e9/Luis_Gabriel_Murillo.jpg','https://upload.wikimedia.org/wikipedia/commons/f/fb/Logo_esperanza.jpg');
    await getCandidate('Enrique Gomez Martinesz', 'Carlos Cuartas Quiceno','Presidente','VicePresidente','https://pbs.twimg.com/profile_images/1511844052571930635/icUTLFrM_400x400.jpg','https://www.eltiempo.com/files/image_950_534/files/crop/uploads/2022/03/30/6244924fe8b72.r_1648670154683.0-103-1245-727.jpeg','https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Salvaci%C3%B3n_Nacional_%28Colombia%29.svg/800px-Salvaci%C3%B3n_Nacional_%28Colombia%29.svg.png');
    await getCandidate('Gustvano Petro','Francia Marquez Mina','Presidente','VicePresidenta','https://pbs.twimg.com/profile_images/1506659402983608323/loCMmF3U_400x400.jpg','https://pbs.twimg.com/profile_images/1520376933086810117/HbhMjxDZ_400x400.jpg','https://upload.wikimedia.org/wikipedia/commons/9/9d/Pacto_Historico%2CLogo_Oficial.jpg');
    await getCandidate('Luis Perez','Ceferino Mosquera','Presidente','VicePresidente','https://upload.wikimedia.org/wikipedia/commons/4/47/Luis_P%C3%A9rez_Guti%C3%A9rrez_%28cropped%29.jpg','https://colaboracion.dnp.gov.co/CDT/PublishingImages/CNP%20-%20Consejo%20Nacional%20de%20Planeaci%C3%B3n/Ceferino%20Mosquera%20Murillo.jpeg','https://upload.wikimedia.org/wikipedia/commons/1/18/G.S.C_Colombia_Piensa_en_Grande.png');
    await getCandidate('Ingrid Betancourt','Jose Luis Esparza','Presidenta','VicePresidente','https://www.portafolio.co/files/article_multimedia/files/crop/uploads/2022/04/26/62680bf4e0053.r_1651685757044.0-77-2031-1609.jpeg','https://www.eltiempo.com/files/article_vertical_content_new/uploads/2022/03/10/622a7aa7d84c3.jpeg','https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Partido_Verde_Ox%C3%ADgeno.svg/1200px-Partido_Verde_Ox%C3%ADgeno.svg.png');
    
    
   
   
   }

//load();
getCandidatesAPI();
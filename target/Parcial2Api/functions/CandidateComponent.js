class CandidateComponent{

    //State = informacion que se esta mostrando en el componente
    constructor(candidate){
        this.candidate = candidate;

    }

    render(container){
        let html = ` 
     <div class="card-group">
    <div class="card">
     <img src="${this.candidate.presidentPhoto}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${this.candidate.presidentTitle}</h5>
    <p class="card-text">"${this.candidate.presidentName}".</p>
    </div>
  </div>
  <div class="card">
    <img src=${this.candidate.formulaPhoto} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${this.candidate.formulaTittle}</h5>
      <p class="card-text">${this.candidate.formulaName}.</p>
    </div>
  </div>
  <div class="card">
  <img src="${this.candidate.partyPhoto}"class="card-img-bottom" alt="...">
  <a href="#" class="btn btn-primary" id ="button${this.candidate.id}" >Votar</a>
</div>
  </div>
        `;
        let root = document.createElement('div');
        root.innerHTML = html.trim();
        container.appendChild(root.firstChild);
        
        

       let button = document.getElementById(`button${this.candidate.id}`);
       button.addEventListener('click',this.action.bind(this));

    }
    action(event){
        event.preventDefault();
        let json = JSON.stringify(this.candidate);
        /*
        let res = fetch(`http://localhost:8080/Parcial2Api/api/candidate/updateTotalVotes`, {method:`PUT`, body:JSON.stringify(this.candidate);,headers:{
            'Content-Type': 'application/json'
        }}

        );
        */

        //window.alert(json);
        //console.log(res);
        //let obj = await res.json();


        let xhr = new XMLHttpRequest();

        xhr.open('PUT','http://localhost:8080/Parcial2Api/api/candidate/updateTotalVotes');
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.send(JSON.stringify(this.candidate) );

        window.alert('Voto registrado');

        window.location.href = "details.html";




    }
    
}
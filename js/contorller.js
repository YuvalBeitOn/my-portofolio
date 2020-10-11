// render modals, and proj

function initPage() {
    renderProjs();
    renderModals();
}

function renderProjs(gProjs) {
    var projs = getProjs();
    var strHtml = '';
    projs.forEach(function(proj) {
        strHtml += `
        <div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" data-target="#${proj.id}">
        <div class="portfolio-hover">
            <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
            </div>
        </div>
        <img class="img-fluid" src="img/${proj.img}" alt="image">
    </a>
    <div class="portfolio-caption">
        <h4>${proj.name}</h4>
        <p class="text-muted">${proj.title}</p>
        <span class="labels"> ${proj.labels.join(' | ')} </span>
    </div>
</div> 
        `
    });
    document.querySelector('.first-modal').innerHTML = strHtml;
}

function renderModals() {
    var projs = getProjs();
    var strHtmls = projs.map(function(proj) {
        return ` <div class="portfolio-modal modal fade" id="${proj.id}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl"></div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="modal-body">
                            <h2>${proj.name}</h2>
                            <p class="item-intro text-muted">${proj.desc}.</p>
                            <img style="height: 100%;" class="img-fluid d-block mx-auto" src="img/${proj.img}" alt="">
                            <ul class="list-inline">
                                <li>Date: ${proj.publishedAt}</li>
                                <li>Client: Coding Academy</li>
                                <li>Category: ${proj.labels.join(' | ')}</li>
                                <a class="git-btn" href="${proj.git}"><i class="fab fa-git-square fa-3x"></i></a>
                            </ul>

                            <button style="font-size: 15px" class="btn btn-primary" data-dismiss="modal" type="button"><i class="fa fa-times"></i> Close Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</div> `;
    });
    var currModal = document.querySelector('.modalss')
    currModal.innerHTML = strHtmls.join('');
}


function sendEmail() {
    var elMail = document.getElementById('inputEmail').value;
    var elSubject = document.getElementById('inputSubject').value;
    var elMessage = document.getElementById('inputMessageBody').value;
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${'yuvalbeiton@gmail.com'}&su=${elSubject}&body=${elMessage}%0D%0A${elMail}`);
}

// git add
// git commit
// git push

//gitIgnore
// console.log("log");

const body = document.querySelector("body");

function lunchModal(e) {
  //   console.log(body);
  let createModal = document.createElement("modal");

  createModalFunc(modal());
  function createModalFunc(passInModal) {
    createModal.innerHTML = passInModal;
    body.appendChild(createModal);
  }

  if (e.id === "Accept") {
    console.log("yes");
    createModalFunc(modalInfo());
  } else if (e.id === "Back") {
    createModalFunc(modal());
  }
}

// create modal

const modal = () => `
<div class="modal">
        <div class="modal-container">
          <div class="modal-content">
            <div class="modal-header">
              Modal title <span class="btn btn-close" id="Close" onclick="removeModal()">X</span>
            </div>
            <div class="modal-body">
              Select accept if you agree this is a customizable modal, select declined if not.
            </div>
            <div class="modal-footer">
              <button class="btn btn-cancel" onclick="removeModal()">Declined</button>
              <button class="btn btn-success" id="Accept" onclick="lunchModal(this);removeModal(this)">Accept</button>
            </div>
          </div>
        </div>
      </div>

`;

// info modal

const modalInfo = () => `
<div class="modal">
        <div class="modal-container">
          <div class="modal-content">
            <div class="modal-header">
              Terms & conditions <span class="btn btn-close" onclick="removeModal();newPage()">X</span>
            </div>
            <div class="modal-body">
                You have accepted that this is customizable modal! thank you!<br>
          Click ( X ) to new page.
            </div>
            <div class="modal-footer">
              <button class="btn btn-cancel" id="Back" onclick="removeModal(this);lunchModal(this)">Back</button>
             
            </div>
          </div>
        </div>
      </div>

`;

// close modal function

const removeModal = (e) => {
  //   console.log(e.parentElement);
  //   const closeBtn = document.querySelector("#Close");
  //   console.log(closeBtn);

  //   const modal = e.parentElement.parentElement.parentElement.parentElement;
  //   modal.remove();
  const modal = document.querySelector("modal");
  //   console.log(modal);
  modal.remove();
};

//  create new page

function newPage() {
  body.innerHTML = `<div class = "container">
    <h1><i class="fas fa-thumbs-up"></i> Beligolo, Lester S.<br> Custom modal using javascript. </h1>
    </div>`;
}
class Modal {
    constructor() {
        this.container = document.querySelector('.container')
    }

    MakeRoll() {
        this.container.classList.toggle('change')
    }
}

const modal = new Modal()

const signUpBtn = document.querySelector('.green-bg button')
signUpBtn.addEventListener('click', () => {
    modal.MakeRoll();
})

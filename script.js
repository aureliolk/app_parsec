
/** Controle de Filtro das Imagens de Serviços **/
const allItem = document.querySelectorAll(".item-services")
allItem.forEach(item => {
    item.onmouseenter = () => {
        // const img = item.querySelector('[data-id="4c119c3"]')
        // if(img){
        //     img.querySelector('[data-id="4c119c3"]').style.filter = "none"
        // }
        item.children[0].children[0].style.filter = "none"
        console.log("Entrou")
    }
    item.onmouseleave = () => {
        // const img = item.querySelector('[data-id="4c119c3"]')
        // if(img){
        //     img.querySelector('[data-id="4c119c3"]').style.filter = ""
        // }
        item.children[0].children[0].style.filter = ""
        console.log("saiu")
    }
})


/** Ação Ligação por Telefone **/
const btTellParsec = document.querySelector("#telparsec")
if (btTellParsec) {
    btTellParsec.onclick = () => {
        const a = document.createElement("a")
        a.href = "tel:+55193576135"
        a.click()
    }
}

/** Esconder CheckboxForm **/
const formApresentacao = document.querySelector("#formapresentacao")
const formContato = document.querySelector("#formcontato")
const formOrcamento = document.querySelector("#formorcamento")

const allTargetNode = document.querySelectorAll(".jet-form-messages-wrap")
const config = {childList: true};

const esconderFormTipo = (target,i)=>{
    target.querySelector(".formtipo").style.display = "none"
    target.querySelectorAll(".formtipo input")[i].click()
}


const observerApresentacao = new MutationObserver(mutation => {
    formApresentacao.querySelector("form").reset()
    setTimeout(() => {
        allTargetNode[1].children[0].remove()
    }, 5000);
});
const observerContato = new MutationObserver(mutation => {
    formContato.querySelector("form").reset()
    setTimeout(() => {
        allTargetNode[0].children[0].remove()
    }, 5000);
});
const observerOrcamento = new MutationObserver(mutation => {
    formOrcamento.querySelector("form").reset()
    setTimeout(() => {
        allTargetNode[0].children[0].remove()
        window.location.reload()
    }, 5000);
});


if(formApresentacao){
    esconderFormTipo(formApresentacao,0)
    observerApresentacao.observe(allTargetNode[1], config);
}
if(formContato){
    esconderFormTipo(formContato,1)
    observerContato.observe(allTargetNode[0], config);   
}
if(formOrcamento){
    esconderFormTipo(formOrcamento,5)
    observerOrcamento.observe(allTargetNode[0], config);   
}




/** Card **/
document.querySelectorAll(".serviceslist").forEach(item=>{
    const p = item.querySelector("p").clientHeight
    item.onmouseenter = ()=>{
        console.log("Entrou")
        item.querySelector(".services-box").style.hidden = "visible"
        if(p > 45){
         item.querySelector("img").parentElement.parentElement.parentElement.style.width = "110px"
            item.style.height = `${85 +p}px`
        }
    }
    item.onmouseleave = ()=>{
        console.log("saiu")
        item.querySelector(".services-box").style.hidden = ""
        item.querySelector("img").parentElement.parentElement.parentElement.style.width = ""
        item.style.height = ""
    }
})


/** Form **/
const inputUpload = document.querySelector(".jet-engine-file-upload").children[1].children[1]
const msgLimitUpload = document.querySelector(".jet-engine-file-upload__message small")
const boxFileUpload = document.querySelector(".jet-engine-file-upload__content")
const bt = document.createElement("div")
inputUpload.insertAdjacentElement("beforebegin",bt)
bt.innerText = "Enviar Arquivos"
bt.classList.add("btSolicitarOcamento")
inputUpload.style.display = "none"
msgLimitUpload.textContent = "Limite maximo de upload 20mb"
boxFileUpload.style.display = "none"
bt.onclick = ()=>{
    inputUpload.click()
    boxFileUpload.style.display = ""
}


/** Card New**/
const listServices = document.querySelector("#services")
if(listServices && window.screen.width >= 736){
    document.querySelectorAll(".serviceslist").forEach(item => {
        item.classList.add("flexRow")
        item.children[0].classList.add("boxImg")
        item.onmouseenter = ()=>{
            item.children[0].style.width = "200px"
            if(item.querySelector("p").clientHeight > 51){
                item.querySelector(".services_subtitle").style.height = `${item.querySelector("p").clientHeight + 25}px`
            }
        }
        item.onmouseleave = ()=>{
            item.children[0].style.width = ""
            item.querySelector(".services_subtitle").style.height = ""
        } 
    } 
    )
}


/** Page Contato**/
const allContact = document.querySelectorAll(".boxContato")
if(allContact){
    allContact.forEach((item,i) => {
        item.onmouseenter = ()=>{
            item.children[0].children[0].style.background = "var( --e-global-color-d9e47f4 )"
            item.children[2].children[0].style.background = "var( --e-global-color-d9e47f4 )"
            item.querySelectorAll("i").forEach(item => item.style.color = "#fff")
            
            item.onclick = ()=>{
                if(i = 0){
                    window.location.href = "#map"
                }else if(i = 1){
                    const a = document.createElement("a")
                    a.href = "tel:+551935796135"
                    a.click()
                    a.remove()
                }else if(i = 2){
                    const a = document.createElement("a")
                    a.href = "malito:parsec@parsecengenharia.com.br"
                    a.click()
                    a.remove()
                }else if(i = 3){
                    const a = document.createElement("a")
                    a.href = "malito:ouvidoria@parsecengenharia.com.br"
                    a.click()
                    a.remove()
                }
            }
        }
        item.onmouseleave = ()=>{
            item.children[0].children[0].style.background = ""
            item.children[2].children[0].style.background = ""
            item.querySelectorAll("i").forEach(item => item.style.color = "")
        }
    })
}

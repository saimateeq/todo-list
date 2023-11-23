function todo(event) {
    event.preventDefault()
    let input = document.querySelector("#input").value
    let main = document.querySelector(".cantainer")
    let list = document.createElement("div")
    let content = document.createElement("p")
    let btns = document.createElement("div")
    let del = document.createElement("button")
    let edit = document.createElement("button")
    del.innerText = "Delete"
    content.innerText = input
    edit.innerText = "Edit"
    btns.appendChild(del)
    btns.appendChild(edit)
    list.appendChild(content)
    list.appendChild(btns)
    main.appendChild(list)
    list.className = "list"
    del.className = "del"
    edit.className = "edit"
    btns.className = "btns"
    event.target.reset()
    del.addEventListener("click", function () {
        del.parentElement.parentElement.remove()
    })
    edit.addEventListener("click", function () {
        let edit_page=document.querySelector(".form-to-edit")
        let main2=document.createElement("div")
        let form = document.createElement("form")
        let heading = document.createElement("h1")
        let input2 = document.createElement("input")
        let btns2= document.createElement("div")
        let save = document.createElement("input")
        let cancel = document.createElement("button")
        heading.innerText = "EDIT"
        input2.type = "text"
        input2.id="edited"
        save.type="submit"
        save.value="Save"
        cancel.innerText = "Cancel"
        save.id="save"
        cancel.id="cancel"
        input2.placeholder="Edit your list-item here"
        btns2.id="btns2"
        btns2.appendChild(save)
        btns2.appendChild(cancel)
        form.appendChild(input2)
        form.appendChild(btns2)
        main2.appendChild(heading)
        main2.appendChild(form)
        edit_page.appendChild(main2)
        form.addEventListener("submit",function(event){
            event.preventDefault()
            let input3=document.querySelector('#edited').value
            edit.parentElement.parentElement.firstElementChild.innerText=input3
            form.parentElement.remove()

        })
        cancel.addEventListener("click",function(){
            cancel.parentElement.parentElement.parentElement.remove()
        })
    })
}
const AddClass=(classnameToAdd,selector)=>{
    const selected= document.querySelector('.'+selector)
    selected? selected.classList.add(classnameToAdd): console.log(`no class with name ${selector}`)
    
}
const ToggleClass=(classnameToToggle,selector)=>{
    const selected= document.querySelector('.'+selector)
    selected? selected.classList.toggle(classnameToToggle): console.log(`no class with name ${selector}`)
    
}
export {
    AddClass, 
    ToggleClass
}
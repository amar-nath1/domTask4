var listitem=document.getElementsByClassName('list-group-item')
listitem[2].style.background='lightgreen'
listitem[2].style.border='2px solid lightcoral'

for (let i=0;i<listitem.length;i++){
    listitem[i].style.fontWeight="bold"
    listitem[i].style.color="tomato"
}
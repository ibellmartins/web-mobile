//2. faça a média ponderada de 3 notas.
function mediaPonderada(n1,n2,n3,p1,p2,p3){
   let media = (n1*p1 + n2*p2 + n3*p3)/(p1+p2+p3)
   console.log(media)
}
mediaPonderada(10,9,8,2.5,2.5,5)

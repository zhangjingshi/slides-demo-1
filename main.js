let n 
初始化 ()
setInterval(()=>{ 
  
  makeLeave(getImages(n)) //返回值undefined
  .one('transitionend',(e)=>{
    makeEnter($(e.currentTarget))
  })  //当前元素的操作

  makeCurrent(getImages(n+1))
 n += 1
},3000)
//链式操作 给我什么 返回什么
//每个元素都是状态机  可以切换状态



//下面封装




function getImages(n){  //选择器优化
 return $(`.images > img:nth-child(${x(n)})`)
}

function x(n){
  if(n>4){
    n = n%4
    if (n === 0){
      n = 4
    }
  }       // n = 1 2 3 4
  return n
}

function 初始化(){
  n =1

  $(`.images > img:nth-child(${n})`).addClass('current')
  .siblings().addClass('enter')
}

function makeCurrent($node){
 return $node.removeClass('enter leave').addClass('current')

}
function makeLeave($node){
  return  $node.removeClass('enter current').addClass('leave')
  
}

function makeEnter($node){
   return $node.removeClass('current leave').addClass('enter')

}


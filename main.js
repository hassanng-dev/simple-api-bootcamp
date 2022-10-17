document.querySelector('.getACharacter').addEventListener('click', getACharacter)


function getACharacter(){

  fetch(`https://www.breakingbadapi.com/api/character/random`)

  .then (res => res.json())
  .then (data => {
    // console.log(data[0].img)
    
    document.querySelector('.getImg').src = data[0].img
    

    document.querySelector('.nameResult').innerText = data[0].name
    document.querySelector('.nicknameResult').innerText = data[0].nickname
    
    document.querySelector('.jobResult').innerText = data[0].occupation
    document.querySelector('.status').innerText = data[0].status

  })

  .catch(err => {
    alert('Try again!')
    });

}
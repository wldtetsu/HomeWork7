// CARDS
const card = document.querySelector('.card')

let cardId = 0
const cards = async ()=>{
  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
      const data = await response.json()
      data.forEach(() => {
          const {title , body} =data[cardId]
          card.innerHTML += `
              <div class="card-mini">
              <img src="https://media.2x2tv.ru/content/images/size/w1440h1440/2024/10/Satoru_Gojo_arrives_on_the_battlefield_28Anime29-2.jpg" alt="Годжо Сатору">
              <h4>${title}</h4>
              <p>${body}</p>
              </div>
          `
      })
  }catch (error){
      console.log(error)
  }
}

cards()
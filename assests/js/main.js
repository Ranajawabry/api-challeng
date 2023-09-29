const debounce = (func, timeout = 500) => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, timeout);
  };
};

const usersUrl = "https://api.github.com/users";
const search = document.getElementById("search");
console.log(search)

const searchInput = () => {
  const seachValue = search.value;
  console.log(seachValue);
  if (seachValue == "") {
    
  } else {
    getData(seachValue)
  }
};

const debounceSearch = debounce(searchInput, 500);
search.addEventListener("keyup", debounceSearch);

async function getData(seachValue) {

  let response = await fetch(`https://api.github.com/users/${seachValue}`);
  let data = await response.json();
  display(data);


}

const display = (user) => {
   console.log(user)
  const result = `
        <div class="single-item rounded-3 my-1">
        <div class="row p-2" >
            <div class="col-3">
                <img src=${user.avatar_url} class="w-100 rounded-circle" alt="">
            </div>
            <div class="col-9 ps-4">
                <div class="titel d-flex justify-content-between gap-3">
                    <div>
                        <h2 class="text-white">${user.login}</h2>
                    </div>
                    <div>
                        <p class="text-white">${user.created_at}</p>
                    </div>
                </div>
                <div class="baio my-1 text-white">
                    <p class="fs-4">${user.bio}</p>
                </div>
                <div class="follow d-flex justify-content-around w-75 text-white py-4">
                    <div class="follower">
                        <p class="fs-5">Follower</p>
                        <p>${user.followers}</p>
                    </div>
                    <div class="following">
                        <p class="fs-5">following</p>
                        <p>${user.following}</p>
                    </div>
                    <div class="repo">
                        <p class="fs-5">repos</p>
                        <p>${user.public_repos}</p>
                    </div>
                </div>
                <div class="row spcial-info my-3 text-white">
                    <div class="col-xl-6 my-2">
                        <i class="fa-solid fa-location-dot pe-2 fs-5 text-white"></i>
                        <span> ${user.location} </span>
                    </div>
                    <div class="col-xl-6 my-2">
                        <i class="fa-brands fa-twitter pe-2 fs-5 text-white"></i>
                        <span>${user.twitter_username}</span>
                    </div>
                    <div class="col-xl-6  my-2">
                        <a href=${user.blog}><i class="fa-solid fa-link  pe-2 fs-5 text-white"></i></a>
                        <span> Blogs </span>
                    </div>
                    <div class="col-xl-6 my-2">
                        <a href=${user.html_url}><i class="fa-solid fa-house-user pe-2 fs-5 text-white"></i></a>
                        <span> github</span>
                    </div>

                </div>
              
            </div>
        </div>
    
    </div>
        `;
  const data = document.getElementById('data');
  data.innerHTML = result;
};
/////////////mood of site/////////

const mood = document.getElementById('mood');
mood.innerHTML=`
<span class="text-uppercase pe-3" >light</span>
<i class="fa-regular fa-sun"></i>`
console.log(mood);
let moodType = 1; // light mood

const changeMood = ()=>{

    if(moodType==1){
    moodType = 0;  // dark mood
    console.log(moodType);
    console.log('dark');
    mood.innerHTML=`<span class="text-uppercase pe-3" >dark</span>
    <i class="fa-solid fa-moon"></i>`;
    document.body.style.backgroundColor='rgb(217, 227, 235)';

    mood.classList.remove('dark-mood')
    mood.classList.add('light-mood')
    document.querySelector('.single-item')?.classList.remove('single-item-dark');
    document.querySelector('.single-item')?.classList.add('single-item-light');
     document.querySelector('.follow')?.classList.remove('follow-dark');
    document.querySelector('.follow')?.classList.add('follow-light');
    document.querySelector('h1').classList.remove('text-white')
    document.querySelector('h1').classList.add('text-dark')
    document.querySelector('.spcial-info')?.classList.remove('text-white');
    document.querySelector('.spcial-info')?.classList.add('text-dark');
    document.querySelector('.baio')?.classList.remove('text-white');
    document.querySelector('.baio')?.classList.add('text-dark');
    document.querySelector('h2')?.classList.replace('text-white','text-dark')
    document.querySelector('.navbar').style.backgroundColor= 'white';
    document.querySelectorAll('i').forEach((item)=>{
        item.classList.replace('text-white','text-dark');
    })
    document.querySelector('input').classList.replace('text-white','text-dark')

   
}
   else{
    console.log('light');
    moodType=1;
    mood.innerHTML=
    `<span class="text-uppercase pe-3" >light</span>
    <i class="fa-solid fa-sun"></i>`;
    document.body.style.backgroundColor='#141c2f';
    mood.classList.remove('light-mood')
    mood.classList.add('dark-mood')
    document.querySelector('.single-item')?.classList.remove('single-item-light');
    document.querySelector('.single-item')?.classList.add('single-item-dark');
     document.querySelector('.follow')?.classList.add('follow-dark');
    document.querySelector('.follow')?.classList.remove('follow-light');
    document.querySelector('h1').classList.remove('text-dark')
    document.querySelector('h1').classList.add('text-white')
    document.querySelector('.spcial-info')?.classList.remove('text-dark');
    document.querySelector('.spcial-info')?.classList.add('text-white');
    document.querySelector('.baio')?.classList.remove('text-dark');
    document.querySelector('.baio')?.classList.add('text-white');
    document.querySelector('h2')?.classList.replace('text-dark','text-white');
    document.querySelector('.navbar').style.backgroundColor='#1f2a48';
    document.querySelectorAll('i').forEach((item)=>{
        item.classList.replace('text-dark','text-white');
    
    })
    document.querySelector('input').classList.replace('text-dark','text-white')

    

   

}
}
mood.addEventListener('click',changeMood);
const single = document.querySelector('.single-item');

console.log(document.querySelector('input'))

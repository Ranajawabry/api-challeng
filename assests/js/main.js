

const usersUrl = 'https://api.github.com/users';

let users=[];
async function getData(){
  let response = await fetch(usersUrl);
  let data = await response.json();
  users= data;
  display(users);
 
}
async function getInfo(userUrl){
    let response = await fetch(userUrl);
    let data = await response.json();
    return data;
   
  }

 
const display= (users)=>{
    let result="";
    users.forEach(async(user)=>{
        const userInfo =await getInfo(user.url)
        console.log(userInfo)
       
        result+=`

        <div class="single-item col-xl-6   rounded-3 my-1">
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
                        <p class="text-white"> 22/5/45433</p>
                    </div>
                </div>
                <div class="baio my-1 text-white">
                    <p class="fs-4">${userInfo.bio}</p>
                </div>
                <div class="follow d-flex justify-content-between bg-dark text-white p-3 ">
                    <div class="follower">
                        <p class="fs-5">Follower</p>
                        <p>${userInfo.followers}</p>
                    </div>
                    <div class="following">
                        <p class="fs-5">following</p>
                        <p>${userInfo.following}</p>
                    </div>
                    <div class="repo">
                        <p class="fs-5">repos</p>
                        <p>${userInfo.public_repos}</p>
                    </div>
                </div>
                <div class="row spcial-info my-3 text-white">
                    <div class="col-xl-6 my-2">
                        <i class="fa-solid fa-location-dot pe-5 fs-5 text-white"></i>
                        <span> ${user.location} </span>
                    </div>
                    <div class="col-xl-6 my-2">
                        <i class="fa-brands fa-twitter pe-5 fs-5 text-white"></i>
                        <span>${user.twitter_username}</span>
                    </div>
                    <div class="col-xl-6  my-2">
                        <a href=${user.blog}><i class="fa-solid fa-house-user pe-5 fs-5 text-white"></i></a>
                        <span> Blogs </span>
                    </div>
                    <div class="col-xl-6 my-2">
                        <a href=${user.html_url}><i class="fa-solid fa-house-user pe-5 fs-5 text-white"></i></a>
                        <span> github</span>
                    </div>

                </div>
              
            </div>
        </div>
    
    </div>
        `
    })

    const data= document.getElementById('data');
    data.innerHTML=result;

}
const search= document.getElementById('search');

const debounce = (func, timeout = 500)=>{
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
       func()
      }, timeout);
    };
  }
const searchInput=()=>{
    const seachValue = search.value;
    const result=[];
    if(seachValue==""){
       
        result=users;
    }
    else{
        result= users.filter((user)=>{
            return user.user.login.includes(seachValue)
                })
    
    }
  
     display(result)
    }
 

const debounceSearch=debounce(searchInput,500)
const getDataDebounce = debounce(getData,1000);
window.addEventListener("load",getDataDebounce );
search.addEventListener('keyup', debounceSearch)



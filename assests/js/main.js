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
                        <p class="text-white"> 22/5/45433</p>
                    </div>
                </div>
                <div class="baio my-1 text-white">
                    <p class="fs-4">${user.bio}</p>
                </div>
                <div class="follow d-flex justify-content-between bg-dark text-white p-3 ">
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
        `;
  const data = document.getElementById('data');
  data.innerHTML = result;
};



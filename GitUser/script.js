const APIURL = "https://api.github.com/users";
const users = document.querySelector('#container');

const gitUser = async(username) =>{
    // console.log("Hello");
    
    const response = await fetch(APIURL);
    const data =  await response.json();
    console.log(data);

    data.forEach(element => {
        const card = `
        <div class="user_container">
            <div class="profile_part">
                <img src="${element.avatar_url}" alt="Girl in a jacket" width="500" height="600">
            </div>
            <div class="details_part">
                <h2>${element.login}</h2>
                <div class="follower_part">
                    <h4>Follower : </h4><h3>1000 , </h3>
                </div>
                <div class="follower_part">
                    <h4>Following : </h4><h3>678</h3>
                </div>
                <!-- <h4>Following</h4><h3>678</h3> -->
                <!-- <h4>Repository</h4> -->
            </div>
        </div>
        `;
        users.innerHTML += card;
    });

    

}


gitUser("mojombo");
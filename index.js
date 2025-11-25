const main = document.createElement('main');
document.body.append(main);


const unassigned = document.createElement('section');
const unassignedheading = document.createElement('h2');


const rooms = document.createElement('section');
const roomscontainer = document.createElement('div');
const roomscontainerleft = document.createElement('div');
const roomscontainerright = document.createElement('div');


const reception = document.createElement('div');
const conference = document.createElement('div');
const security = document.createElement('div');
const staff = document.createElement('div');
const servers = document.createElement('div');
const archives = document.createElement('div');



const unassignedmemberslist = document.createElement('div');
const addtoreceptionbutton = document.createElement('button');
const addtoconferencebutton = document.createElement('button');
const addtosecuritybutton = document.createElement('button');
const addtostaffbutton = document.createElement('button');
const addtoserversbutton = document.createElement('button');
const addtoarchivesbutton = document.createElement('button');


const addunassignedmember = document.createElement('button');
addunassignedmember.innerText = "Add member";
unassigned.append(addunassignedmember);


const roomMembers = {
    reception: [],
    conference: [],
    security: [],
    staff: [],
    archives: [],
    servers: [],
};
let sidebarOpen = false;

addunassignedmember.classList.add('bg-green-600', 'rounded-3xl', 'text-white', 'p-3', 'w-[35%]', 'self-center', 'border-[3px]', 'border-orange-600');



reception.append(addtoreceptionbutton, "Reception");
reception.setAttribute("id", "reception");
reception.setAttribute("data-max", "3");

conference.append(addtoconferencebutton, 'Conference');
conference.setAttribute("id", "conference");
conference.setAttribute("data-max", "3");

security.append(addtosecuritybutton, "Security");
security.setAttribute("id", "security");
security.setAttribute("data-max", "3");

staff.append(addtostaffbutton, "Staff");
staff.setAttribute("id", "staff");
staff.setAttribute("data-max", "3");

servers.append(addtoserversbutton, "Servers");
servers.setAttribute("id", "servers");
servers.setAttribute("data-max", "3");

archives.append(addtoarchivesbutton, "Archives");
archives.setAttribute("id", "archives");
archives.setAttribute("data-max", "3");


unassignedheading.innerText = "Unassigned Members";
unassigned.append(unassignedheading, unassignedmemberslist);
unassigned.append(addunassignedmember);
main.append(unassigned, rooms);
rooms.append(roomscontainer);
roomscontainer.append(roomscontainerleft, roomscontainerright);
roomscontainerright.append(reception, conference, security);
roomscontainerleft.append(staff, servers, archives);


const addtoroombuttons = roomscontainer.querySelectorAll('button');
addtoroombuttons.forEach(element => {
    element.innerHTML = `<i class="fa-solid fa-plus fa-green text-green-500"></i>`;
    element.classList.add('border-[3px]', 'rounded-full', 'border-green-600', 'bg-orange-200', 'hover:bg-orange-300', 'h-6', 'flex', 'justify-center', 'items-center', 'absolute', 'top-2', 'right-2');
});


const modalcontainer = document.createElement('div');
const modalheader = document.createElement('div');
const modaltitle = document.createElement('h1');
modaltitle.innerText = "Ajouter un Nouveau Membre"
const profileimage = document.createElement('img');
modalheader.append(modaltitle, profileimage);


const modal = document.createElement('form');
document.body.append(modalcontainer);
modalcontainer.append(modal);


const fullnamelabel = document.createElement('label');
fullnamelabel.textContent = "Full Name";
const fullnameinput = document.createElement('input');
fullnameinput.setAttribute("id", "name")
fullnameinput.type = "text";
fullnameinput.placeholder = "Full Name";

const rolelabel = document.createElement('label');
rolelabel.textContent = "Role";
const roleinput = document.createElement('select');

const roles = ["Reception", "Security", "Manager", "Nettoyage", "Technicien IT"];
roles.forEach(role => {
    const option = document.createElement("option");
    option.value = role;
    option.textContent = role;
    roleinput.append(option);
});

const mobilelabel = document.createElement('label');
mobilelabel.textContent = "Phone Number"
const mobileinput = document.createElement('input');
mobileinput.type = "text";
mobileinput.placeholder = "+2120123456789";

const emaillabel = document.createElement('label');
emaillabel.textContent = "Email"
const emailinput = document.createElement('input');
emailinput.type = "email";
emailinput.placeholder = "oussama@gmail.com";


const imagelabel = document.createElement('label');
imagelabel.textContent = "Profile picture"
const imageinput = document.createElement('input');
imageinput.type = "file";
imageinput.addEventListener('change', () => {
    const file = imageinput.files[0];
    if (file) {
        profileimage.src = URL.createObjectURL(file);
    }
});



function createnewexperience(number) {
    const experience = document.createElement('div');
    experience.classList.add('flex', 'flex-col', 'gap-4', 'p-3', 'experience-block');

    experience.innerHTML = `
        <h2>Experience ${number}</h2>
        <input type="text" class="exp-name" placeholder="Nom de l'entreprise">
        <input type="date" class="exp-start" >
        <input type="date" class="exp-end" >
        <input type="text" class="exp-description" placeholder="Description">
    `;
    experience.querySelectorAll('input').forEach(input => input.classList.add('border-2', 'border-gray-300', 'rounded-3xl', 'p-3'));
    return experience;
}


const confirmeclosemodal = document.createElement('div');
const confirmmodal = addunassignedmember.cloneNode(true);
confirmmodal.type = 'button';
const closemodal = confirmmodal.cloneNode(true);
closemodal.type = 'button';
closemodal.textContent = "fermer";

let experiencecount = 1;
const experience = document.createElement('div');
experience.append(createnewexperience(experiencecount));
const addexperiencebtn = document.createElement('button');
addexperiencebtn.textContent = "Add Experience";
experience.append(addexperiencebtn);

modal.append(modalheader, fullnamelabel, fullnameinput, rolelabel, roleinput, mobilelabel, mobileinput, emaillabel, emailinput, imagelabel, imageinput, experience, confirmeclosemodal);
confirmeclosemodal.append(confirmmodal, closemodal);

function resetmodal() {
    fullnameinput.value = '';
    roleinput.value = '';
    mobileinput.value = '';
    emailinput.value = '';
    profileimage.src = 'images/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg';


    experience.innerHTML = '';
    experiencecount = 1;
    experience.append(createnewexperience(experiencecount));
    experience.append(addexperiencebtn);
}

addexperiencebtn.addEventListener('click', function (e) {
    e.preventDefault();
    experiencecount++;
    const newexperience = createnewexperience(experiencecount);
    experience.insertBefore(newexperience, addexperiencebtn);
}
)

let count = 0;
const unassignedmembers = [];

addunassignedmember.addEventListener("click", function () {
    profileimage.src = "images/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg"
    modalcontainer.classList.remove('hidden');
})


function template(card, element) {

    card.classList = "flex p-3 gap-4 border-2 border-gray-600 rounded-3xl h-[80%] justify-start items-center member-card ";
    card.id = `${element.id}`;
    card.innerHTML = `
        <img class="rounded-full border-4 border-green-600 h-[80%]" src=${element.imagesrc}>
        <div class="flex flex-col justify-around ">
            <p class="font-bold">${element.fullname}</p>
            <p class="text-gray" >${element.role}</p>
        </div>
        <button id="checkbox${element.id}" 
        class="  hidden select-btn  transition active:scale-95 bg-transparent">
        <i class="fa-regular fa-square-check fa-xl text-orange-600"></i>
       </button>
       <button id="remove${element.id}" 
        class=" hidden select-btn   transition active:scale-95 bg-transparent">
        <i class="fa-solid fa-xmark fa-xl text-red-600"></i>
       </button>`
    card.addEventListener('click', function (e) {
        if (e.target.closest('button')) return;
        memberinfoconatiner.classList.remove('hidden');
        memberinformation(element);

    })


}

function roombackground(room) {
    const membersInside = room.querySelectorAll('.member-card').length;

    if (membersInside === 0) {
        room.classList.remove('bg-white');
        room.classList.add('bg-red-200');
    } else {
        room.classList.remove('bg-red-200');
        room.classList.add('bg-white');
    }
}

[reception, security, archives, servers, staff].forEach(roombackground);


function render(list) {
    unassignedmemberslist.innerHTML = '';

    list.forEach(element => {
        const card = document.createElement('div');
        template(card, element);
        if (element.room == "")
            unassignedmemberslist.append(card);


    }

    )
}

function ajouterunmembre() {


    const experiences = [];


    document.querySelectorAll('.experience-block').forEach(block => {
        experiences.push({
            name: block.querySelector('.exp-name').value,
            start: block.querySelector('.exp-start').value,
            end: block.querySelector('.exp-end').value,
            description: block.querySelector('.exp-description').value
        });
    })


    const memberinfo = {
        fullname: fullnameinput.value,
        role: roleinput.value,
        mobile: mobileinput.value,
        email: emailinput.value,
        imagesrc: profileimage.src,
        id: count + 1,
        room: "",
        experiences: experiences,
    }

    for( let i=0; i<unassignedmembers.length; i++) {
        if (unassignedmembers[i].name==memberinfo.name && unassignedmembers[i].role==memberinfo.role ){
        alert('This Member exists already !');
        return;
    }

    }
    
    unassignedmembers.push(memberinfo)
    render(unassignedmembers);
    modalcontainer.classList.add('hidden');
    count++;
}

confirmmodal.addEventListener("click", () => {

    const inputs = modal.querySelectorAll('input');

    const dates=modal.querySelectorAll('input[type="date"]');


    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            alert("Please fill in the details");
            return;
        }
    }

    let emailre = /^[^@\s\.]{3,}@[^@\s\.]{4,}\.[^@\s\.]{2,3}$/

    let namere = /^[a-zA-Z ]{3,20}$/

    if (namere.test(fullnameinput.value.trim()) === false) {
        alert("nom invalide")
        return;
    }

    if (emailre.test(emailinput.value) === false) {
        alert("email invalide");
        return;
    }

    for (let i=0; i<dates.length; i++){
        if (dates[i]>=dates[i+1])
        {
            alert('Please verify dates !');
            return;
        }
    }

    
    ajouterunmembre();
    resetModal();
});

closemodal.addEventListener("click", function () {
    modalcontainer.classList.add('hidden');
})

closemodal.classList.add('bg-red-600');
const closesidebar = closemodal.cloneNode(true);


function roomtorole(room) {
    if (room == reception) {
        return (["Reception", "Nettoyage"])
    }
    if (room == security) {
        return (["Security", "Nettoyage"])
    }
    if (room == conference) {
        return (["Reception", "Security", "Mananger", "Nettoyage", "Technicien IT"])
    }
    if (room == servers) {
        return (["Technicien IT", "Nettoyage"])
    }
    if (room == archives) {
        return (["Reception", "Security", "Manager", "Technicien IT"])
    }
    if (room == staff) {
        return (["Reception", "Security", "Manager", "Nettoyage", "Technicien IT"])
    }
}

function shrinkcard(card) {

    card.classList.add('h-[45%]', 'w-auto');


    const img = card.querySelector('img');
    if (img) {
        img.classList.add('h-[50px]', 'w-[50px]');
    }

    const buttons = card.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.add('h-[35px]', 'w-[35px]'));
}

function restorecard(card) {

    card.classList.remove('h-[45%]', 'w-auto');
    card.classList.add('p-2');

    const img = card.querySelector('img');
    if (img) {
        img.classList.remove('h-[50px]', 'w-[50px]');
    }

    const buttons = card.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('h-[35px]', 'w-[35px]'));
}


let checkboxes = [];
let removebuttons = [];


function addtoroom(room) {

    const max = Number(room.getAttribute("data-max"))


    const rolesallowed = roomtorole(room);

    unassignedheading.classList.add('hidden');
    unassigned.append(closesidebar);
    addunassignedmember.classList.add('hidden');
    const members = unassignedmembers.filter(element => rolesallowed.includes(element.role) && element.room === "");

    render(members);

    sidebarOpen = true;

    members.forEach(member => {
        const checkbox = document.getElementById(`checkbox${member.id}`);
        checkboxes.push(checkbox);
        const remove = document.getElementById(`remove${member.id}`);
        checkbox.classList.remove('hidden');
        const card = checkbox.parentNode;

        checkbox.addEventListener('click', function () {
            if (room.querySelectorAll('.member-card').length >= max) {
                alert("room can only contain " + max);
                return;
            }

            if (member.room !== "") {
                console.log(" Member already assigned to a room");
                return;
            }

            if (roomMembers[room.id].includes(member)) {
                console.log(" Already in this room array");
                return;
            }


            checkbox.classList.add('hidden');

            roomMembers[room.id].push(member);

            remove.classList.remove('hidden');

            member.room = room.id;
            shrinkcard(card);
            room.appendChild(card);
            roombackground(room);
            remove.addEventListener('click', function () {
                restorecard(card);
                unassignedmemberslist.append(card);
                remove.classList.add('hidden');
                if (sidebarOpen) {
                    checkbox.classList.remove('hidden');
                }
                member.room = "";
                roombackground(room);
            })
        });

    });

    return (members);


}


closesidebar.addEventListener('click', function () {
    unassignedheading.classList.remove('hidden');
    addunassignedmember.classList.remove('hidden');
    unassigned.removeChild(closesidebar);
    checkboxes.forEach(b => b.classList.add('hidden'));
    render(unassignedmembers);
    sidebarOpen = false;
})


addtoreceptionbutton.addEventListener('click', function () {

    addtoroom(reception);

}
);

addtoserversbutton.addEventListener('click', function () {

    addtoroom(servers);
}
);

addtoarchivesbutton.addEventListener('click', function () {

    addtoroom(archives);
}
);

addtosecuritybutton.addEventListener('click', function () {
    addtoroom(security)

}
);
addtoconferencebutton.addEventListener('click', function () {

    addtoroom(conference)

}
);

addtostaffbutton.addEventListener('click', function () {

    addtoroom(staff);

}
);


const memberinfoconatiner = document.createElement('div');
document.body.append(memberinfoconatiner);

const memberinfo = document.createElement('div');
memberinfoconatiner.append(memberinfo);


function memberinformation(member) {

    memberinfo.innerHTML =
        `<div class=" relative flex flex-col items-center gap-4 border-b pb-4">
        <button id="closeMemberInfo" class="absolute top-2 right-2 text-red-600 font-bold text-xl hover:text-red-800">&times;</button>
        <img class="rounded-full w-32 h-32 border-4 border-green-600 object-cover" src=${member.imagesrc}>
        <h1 class="text-2xl font-bold text-gray-800">${member.fullname}</h1>
        <h2 class="text-gray-500 text-lg">${member.role}</h2>
    </div>


    <div class="flex flex-col gap-3 p-3">
            <h3 class="font-semibold text-gray-700">Current room: <span class="text-green-600">${member.room || "Unassigned"}</span></h3>
            <div class="flex flex-col gap-2">
                <div class="flex items-center gap-2 text-gray-600">
                    <i class="fa-regular fa-envelope"></i>
                    <span>${member.email}</span>
                </div>
                <div class="flex items-center gap-2 text-gray-600">
                    <i class="fa-solid fa-mobile-screen"></i>
                    <span>${member.mobile}</span>
                </div>
            </div>
            <div class="flex flex-col gap-3 Experiences max-h-60 overflow-y-auto">
            <h2 class="font-semibold text-gray-700 border-b pb-1">Experiences</h2>
            </div>
        </div>`

    member.experiences.forEach(experience => {
        const exp = document.createElement('div');
        exp.innerHTML =
            ` <div class="bg-gray-50 p-3 rounded-xl shadow-inner flex flex-col gap-1 ">
                        <p class="font-semibold text-gray-700">Company: ${experience.name}</p>
                        <p class="text-gray-500 text-sm">From: ${experience.start} To: ${experience.end}</p>
                        <p class="text-gray-600">${experience.description}</p>
                    </div>

        `
        memberinfo.querySelector('.Experiences').append(exp);
        memberinfo.classList.add('bg-white', 'rounded-3xl', 'p-4')
    })

    const closeBtn = memberinfo.querySelector('#closeMemberInfo');
    closeBtn.addEventListener('click', () => {
        memberinfoconatiner.classList.add('hidden');
    });


}
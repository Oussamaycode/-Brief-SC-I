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

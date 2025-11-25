
main.classList.add('flex','md:flex-row','flex-col-reverse');
unassigned.classList.add('md:w-[25%]','w-full','bg-[#F4FAF5]','md:flex','md:flex-col','p-5');
unassignedheading.classList.add('font-bold','self-center')
unassignedmemberslist.classList.add('flex','p-3', 'md:flex-col','h-auto','gap-3','flex-row','md:overflow-y-scroll','max-h-[90vh]');
rooms.classList.add('md:w-[75%]','w-full','h-screen','flex','justify-center','items-center','gap-3','bg-gray-200');
roomscontainer.classList.add('flex','justify-between','border-[3px]','border-black' ,'bg-gray-400','h-[90%]','md:w-[70%]','w-[90%]','p-3')
roomscontainerleft.classList.add('flex','flex-col','justify-between','w-[40%]');
roomscontainerright.classList.add('flex','flex-col','justify-between','w-[40%]');

reception.classList.add('border-2','border-black','h-[26%]','relative','flex','flex-wrap','rounded-3xl','rooms','p-1','overflow-y-auto','gap-3');
conference.classList.add('border-2','border-black','h-[26%]','bg-white','relative','flex','flex-wrap','rounded-3xl','rooms','p-1','overflow-y-auto','gap-3');
security.classList.add('border-2','border-black','h-[26%]','relative','flex','flex-wrap','rounded-3xl','rooms','p-1','overflow-y-auto','gap-3');
staff.classList.add('border-2','border-black','h-[26%]','relative','flex','flex-wrap','rounded-3xl','rooms','p-1','overflow-y-auto','gap-3');
servers.classList.add('border-2','border-black','h-[26%]','relative','flex','flex-wrap','rounded-3xl','rooms','p-1','overflow-y-auto','gap-3');
archives.classList.add('border-2','border-black','h-[26%]','relative','flex','flex-wrap','rounded-3xl','rooms','p-1','overflow-y-auto','gap-3');

addunassignedmember.classList.add('bg-green-600','rounded-3xl','text-white','p-3','md:w-[40%]','md:self-center','border-[3px]','border-orange-600','w-[20%]');

modalcontainer.classList.add('fixed','top-0','left-0','w-full','h-full','bg-black/50','flex','justify-center','items-center','hidden');

modal.classList.add('p-5','rounded-2xl','md:w-[30%]','w-[80%]','h-[90%]','flex','flex-col','justify-around','gap-6','overflow-y-auto','bg-[#F4FAF5]');

closemodal.classList.add('bg-red-600');

confirmeclosemodal.classList.add('flex','justify-around','w-full');

modalheader.classList.add('flex','float','justify-between','w-full','h-[15%]','p-0','items-center');


profileimage.classList.add('rounded-[50%]','w-[20%]','h-fit', 'border-4', 'border-green-600');

experience.classList.add('flex', 'flex-col', 'gap-4', 'p-3','border-2','border-gray-300','rounded-3xl');

addexperiencebtn.classList.add('rounded-3xl', 'bg-green-600', 'text-white', 'font-bold', 'text-center', 'p-3', 'self-center', 'w-[80%]');

modal.querySelectorAll('input').forEach(input => input.classList.add('border-2','border-gray-300','rounded-3xl','p-3'))

modal.querySelector('select').classList.add('border-2','border-gray-300','rounded-3xl','p-3')

memberinfoconatiner.classList.add('hidden','fixed','top-0','left-0','w-full','h-full','bg-black/50','flex','justify-center','items-center')

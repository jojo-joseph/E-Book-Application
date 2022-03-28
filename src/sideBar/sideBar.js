import SidebarMainBox from "./sidebarMainBox";

function Sidebar() {

const values=[
 'ALICES EVIDENCE' ,'DOWN THE RABBIT-HOLE' ,'THE POOL OF TEARS','A CAUCUS-RACE AND A LONG TALE','THE RABBIT SENDS IN A LITTLE BILL','ADVICE FROM A CATERPILLAR','PIG AND PEPPER','A MAD TEA-PARTY','THE QUEENS CROQUETGROUND', 'THE MOCK TURTLE S STORY'

]

  return (
    <div className="sidebarMain">
        {values.map((id)=><SidebarMainBox value={id}/>)
                }  
      
    </div>
  );
}

export default Sidebar;

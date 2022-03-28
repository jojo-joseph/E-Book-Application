import './sidebarMainBox.css'

function SidebarMainBox({value}) {

    return (
        <div>
            <div className="mainSidebarBox" >     
                {value}
            </div>
           <div className='line'/> 
      </div>
    );
  }
  
  export default SidebarMainBox;
  
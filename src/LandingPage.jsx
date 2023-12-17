function LandingPage() {
    let body = document.querySelector('body');
    body.onload = () => {
        for(let i=0; i<6; i++){
            let item = document.getElementsByClassName('LandingItem1')[i];
            item.classList.add('Translate'+(i+7));
        }
        let item = document.getElementsByClassName('LandingTitle')[0];
        item.classList.add('Translate13');
        setTimeout(() => {
        document.getElementById('LandingAni').classList.add('hidden');
        document.getElementById('Name2').classList.add('hidden');
        // document.getElementById('Name2').classList.add('Translate14');
        // document.getElementById('Name2').classList.remove('LandingItem');
        }, 3000);
        
    };
    
  return (
    <>
    <div id="LandingAni" className="LandingGrid Poppins">
        <div className="LandingItem1 z-10 absolute Translate1">MiMANSA</div>
        <div className="LandingItem1 z-20 absolute Translate2">MiMANSA</div>
        <div className="LandingItem1 z-30 absolute Translate3">MiMANSA</div>
        <div className="LandingItem z-50 ">
        <div id="Name" className=" text-white">MiMANSA
        <div className="LandingTitle PoppinsMedium text-black opacity-0">let your thoughts be heard</div>
        </div>
        </div>
        <div className="LandingItem1 z-30 absolute Translate4">MiMANSA</div>
        <div className="LandingItem1 z-20 absolute Translate5">MiMANSA</div>
        <div className="LandingItem1 z-10 absolute Translate6">MiMANSA</div>
    </div>
    <div id="Name2" className="LandingItem Poppins z-50 ">MiMANSA</div>
    <div className="HomePage bg-white"></div>
    </>
  );
}

export default LandingPage;
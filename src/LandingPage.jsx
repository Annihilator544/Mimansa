function LandingPage() {
    let body = document.querySelector('body');
    body.addEventListener('click', () => {
        for(let i=0; i<6; i++){
            let item = document.getElementsByClassName('LandingItem1')[i];
            item.classList.add('Translate'+(i+7));
        }
        let item = document.getElementsByClassName('LandingTitle')[0];
        item.classList.add('Translate13');
    });
  return (
    <div className="LandingGrid Poppins">
        <div className="LandingItem1 z-10 absolute Translate1">MiMANSA</div>
        <div className="LandingItem1 z-20 absolute Translate2">MiMANSA</div>
        <div className="LandingItem1 z-30 absolute Translate3">MiMANSA</div>
        <div className="LandingItem z-50 ">
        <div className=" m-0 p-0">MiMANSA
        <div className="LandingTitle PoppinsMedium opacity-0">let your thoughts be heard</div>
        </div>
        </div>
        <div className="LandingItem1 z-30 absolute Translate4">MiMANSA</div>
        <div className="LandingItem1 z-20 absolute Translate5">MiMANSA</div>
        <div className="LandingItem1 z-10 absolute Translate6">MiMANSA</div>
    </div>
  );
}

export default LandingPage;
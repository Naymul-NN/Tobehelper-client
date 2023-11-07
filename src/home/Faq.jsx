
const Faq = () => {
    return (
        <div className="py-5">
            <h1 className="text-center text-2xl font-bold py-4">Most asked queston</h1>
            <div className="collapse collapse-arrow bg-base-200 ">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
   How can i get the service , as soon as possible.
  </div>
  <div className="collapse-content"> 
    <p className="text-xl">when you book the service there you should say emargency then you can gat it fast </p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200 my-5">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
   who can i join here as a service provider
  </div>
  <div className="collapse-content"> 
    <p className="text-xl">Here you see a word join click on it and fill up a from just it now you are a service provider .</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    how can i add my service 
  </div>
  <div className="collapse-content"> 
    <p className="text-xl">Go to dashbord then click add service then give the information of your service </p>
  </div>
</div>
        </div>
    );
};

export default Faq;
export default function Home() {
  return (
    <main className="bg-slate-300 sm:p-5 p-2">

      <div className="grid  max-sm:grid-rows-2 sm:grid-cols-2 sm:items-center">
        <div className="">
          <img  src="tech_company.gif"></img>
        </div>

        <div className="text-center mt-10 sm:mt-0">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Pariatur eu esse magna</h1>
          <p>
            Fugiat do mollit tempor laboris anim reprehenderit dolore voluptate do. Elit proident excepteur officia labore amet amet adipisicing 
            aliquip quis duis adipisicing labore elit culpa. Eu occaecat est in eiusmod incididunt dolor incididunt velit velit nisi dolore nulla. 
            Occaecat cupidatat amet proident laborum ex sunt ea aliqua proident sit do exercitation non. Nostrud nulla aliquip nisi enim eu aliqua. 
            Cupidatat nulla minim magna aute aliquip mollit dolor non reprehenderit Lorem non elit cillum Lorem.
          </p>
          </div>
        </div>
      </div>
      
      <h1 className="text-2xl font-bold text-center">Our Works</h1>
              
      <div className="flex flex-col sm:flex-row m-5 gap-2">

        <div className="shadow-md p-10 border-slate-600 border-2 rounded-md text-center bg-indigo-200 hover:shadow-2xl cursor-pointer">
            <img src="sample_projects.png" className="rounded-full"/>
            <h1 className="font-bold text-center">Aliquip cillum do nostrud</h1>
            <p className="mt-2 text-sm">Sunt sunt id sint officia ullamco non nulla. Non labore mollit adipisicing enim labore occaecat.</p>
        </div>

        <div className="shadow-md p-10 border-slate-600 border-2 rounded-md text-center bg-indigo-200 hover:shadow-2xl cursor-pointer">
            <img src="sample_projects.png" className="rounded-full"/>
            <h1 className="font-bold text-center">Aliquip cillum do nostrud</h1>
            <p className="mt-2 text-sm">Sunt sunt id sint officia ullamco non nulla. Non labore mollit adipisicing enim labore occaecat.</p>
        </div>

        <div className="shadow-md p-10 border-slate-600 border-2 rounded-md text-center bg-indigo-200 hover:shadow-2xl cursor-pointer">
            <img src="sample_projects.png" className="rounded-full"/>
            <h1 className="font-bold text-center">Aliquip cillum do nostrud</h1>
            <p className="mt-2 text-sm">Sunt sunt id sint officia ullamco non nulla. Non labore mollit adipisicing enim labore occaecat.</p>
        </div>

        <div className="shadow-md p-10 border-slate-600 border-2 rounded-md text-center bg-indigo-200 hover:shadow-2xl cursor-pointer">
            <img src="sample_projects.png" className="rounded-full"/>
            <h1 className="font-bold text-center">Aliquip cillum do nostrud</h1>
            <p className="mt-2 text-sm">Sunt sunt id sint officia ullamco non nulla. Non labore mollit adipisicing enim labore occaecat.</p>
        </div>        

      </div>
    </main>
  );
}

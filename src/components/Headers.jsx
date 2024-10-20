import image from "../assets/image.jpg"
 
  

const Headers = () => {
  return (
    <header className="flex items-center w-full bg-green-600">
      <img src={image} alt="logo"  className="w-12 rounded-full h-auto ml-32"/>
    
         <nav className="ml-auto mr-24 text-2xl text-white ">
           <ul className="flex space-x-6">
            <li>
              <a href="" className=" hover:text-black">Accueil</a>
              </li>
            <li><a href="" className=" hover:text-black">Ligue&club</a></li>
            <li><a href="" className=" hover:text-black">Joueurs</a></li>
            <li><a href="" className=" hover:text-black">Transferts</a></li>
            <li><a href="" className=" hover:text-black">Publications</a></li>
            <li><a href="" className=" hover:text-black">Calendrier</a></li>
            <li><a href="" className=" hover:text-black">Contacts</a></li>
           </ul>
          </nav>
          
        </header>
  )
}
export default Headers


    // <div className="bg-green-600 h-12 flex justify-between px-4">
    //     
    // </div>
    // <main>
    //       <section>
    //       <img src={basket_header} alt="logo"  className="w-screen"/>
    //       </section>

    //       <h1 className="pt-14 flex justify-center text-4xl font-semibold">Dernier resultat des matchs</h1>
          
    //       <section /*className="pt-20 flex justify-around"*/  className="pt-10 align-text-top flex items-center justify-center">
          
    //       <img src={anbc} alt="logo"  className="w-28 rounded-full h-auto mr-20"/>
    //       <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white text-lg font-bold">
    //              63
    //      </div>

    //       <h1 className="font-semibold text-2xl pt-3">VS</h1>
    //      <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white text-lg font-bold">
    //          56
    //     </div>


    //       <img src={image} alt="logo"  className="w-28 rounded-full h-auto ml-10 mr-52"/>
    //       </section>
    //     </main>
    // </>

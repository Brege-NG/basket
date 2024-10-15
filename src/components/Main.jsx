import basket_header from "../assets/basket_header.jpg"
import anbc from "../assets/anbc.jpg"
import image from "../assets/image.jpg"
import bask from "../assets/bask.jpg"
import president from "../assets/president.jpg"


const Main = () => {
  return (
   <main>
     <section>
     <img src={basket_header} alt="logo"  className="w-screen "/>
     </section>

     <h1 className="pt-14 flex justify-center text-4xl font-semibold">Dernier resultat des matchs</h1>

     <section className="pt-10 align-text-top flex items-center justify-center">
      
      <div className="pt-2">
      <img src={anbc} alt="logo"  className="w-28 rounded-full h-auto mr-32"/>
      <p className="pt-4 pl-10 font-semibold">CARA</p>
      </div>
     

     <div className="flex items-center relative">
     
         <div className="flex items-center justify-center pl-7 w-28 h-24 bg-black">
             <p className="text-white text-lg font-bold pr-6">72</p>
        </div>

          <h1 className="font-semibold text-2xl px-5">VS</h1>

         <div className="flex items-center justify-center pl-7 w-28 h-24 bg-black">
             <p className="text-white text-lg font-bold pr-6">56</p>
        </div>

        <div className="text-center absolute w-full h-8 bg-gray-400 text-white  font-bold top-24">
                 26Avril 2024 | 22hr
         </div>
     </div>

<div>
<img src={image} alt="logo"  className="w-28 rounded-full h-auto ml-32"/>
<p className="pt-4 pl-32 font-semibold">ANGES NOIRS</p>
</div>
        
     </section>

     <section className="mx-52 my-16 bg-gray-400 w-auto h-48  grid md:grid-cols-3 text-center">

        <div>
            <p className="text-6xl font-bold pt-8">230</p>
            <p className="pt-2 text-gray-600">Matchs joués</p>
            </div>

        <div>
            <p className="text-6xl font-bold pt-8">30</p>
            <p className="pt-2  text-gray-600">Equipes</p>
        </div>

        <div>
            <p className="text-6xl font-bold pt-8">24</p>
            <p className="pt-2  text-gray-600">Trophées gagnés</p>
            </div>
        
     </section>

     <section>
     <img src={basket_header} alt="logo"  className="w-screen h-64"/>
     </section>

     <section >

        <div className="grid grid-cols-2 pt-20 text-center ">
            <div className="relative ml-32">
            <img src={president} alt="logo"  className="w-2/5 ml-16 pb-10 mt-2"/>
            
            <div className="">
            <img src={bask} alt="logo"  className="border-2 border-white rounded-lg shadow-lg absolute w-80 top-28 pt-8 h-72 ml-60 pb-10 "/>
            </div>
            </div>
        <div>
            <div>
            <h1 className="text-4xl font-semibold text-green-800">Découvrez notre histoire</h1>
            <p className="pt-5 px-32 text-justify">L'histoire de notre ligue de basket ,réunir les passionnés
               de basket autour d'un championnat compétitif et inspirant. 
               Tout ce qui n'était qu'une série de tournois régionaux a 
               rapidement pris de l'ampleur. Grâce à la passion des joueurs, 
               des entraîneurs et des supporters, notre ligue est devenue 
               un véritable symbole de développement sportif. Année après 
               année, nous avons évolué, en intégrant de nouvelles équipes, 
               en améliorant nos infrastructures et en perfectionnant nos 
               règlements pour offrir une compétition toujours plus excitante.</p>
            </div>

              <div>
              <h1 className="text-4xl font-semibold text-green-800 pt-8 text-center pr-44">notre mission</h1>
              <p className="pt-5 px-24 text-justify">la ligue de basket assure la régulation, la gestion et la 
                  promotion du sport, jouant un rôle essentiel dans le bon 
                  fonctionnement des compétitions et la préservation.</p>
              </div>
    
        </div>

        <div>
        <h1 className="text-4xl font-semibold text-green-800 text-start pt-20 pl-36">notre role</h1>
        <p className="pt-5 px-24 py-12 text-justify">Le rôle de la ligue de basket est d'organiser les compétitions, 
de réguler les transferts de joueurs, et de garantir le respect des  règles et de l'équité financière entre les clubs.
La ligue de basket joue un rôle fondamental dans l'organisation et la régulation du sport à un niveau performant. Elle est responsable 
de la gestion des compétitions, notamment en élaborant le calendrier des matchs et en structurant les tournois, des phases régulières 
aux éliminatoires.</p>
        </div>

        </div>
             </section>
             <div>
             <button className="bg-green-600 w-36 text-white my-12 flex items-center justify-center">En savoir plus</button>
             </div>

    <section className=" flex items-center justify-between">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </section>
   </main>
  )
}
export default Main